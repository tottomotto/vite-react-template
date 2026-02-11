import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  /** Path to the WebP version of the image */
  webpSrc?: string;
  /** Path to the fallback image (jpg/png) */
  src: string;
  /** Alt text (required for accessibility) */
  alt: string;
  /** Whether to lazy load (default: true for below-fold images) */
  lazy?: boolean;
  /** Width for layout stability (prevents CLS) */
  width?: number;
  /** Height for layout stability (prevents CLS) */
  height?: number;
}

/**
 * Optimized image component with WebP support and lazy loading.
 *
 * Uses <picture> element for WebP with fallback, and native
 * loading="lazy" for below-fold images to satisfy Requirements 6.2 and 6.3.
 *
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src="/images/photo.jpg"
 *   webpSrc="/images/photo.webp"
 *   alt="Description"
 *   width={800}
 *   height={600}
 * />
 * ```
 */
export function OptimizedImage({
  webpSrc,
  src,
  alt,
  lazy = true,
  width,
  height,
  className,
  ...rest
}: OptimizedImageProps) {
  const loadingAttr = lazy ? 'lazy' : 'eager';

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          loading={loadingAttr}
          width={width}
          height={height}
          className={className}
          decoding="async"
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loadingAttr}
      width={width}
      height={height}
      className={className}
      decoding="async"
      {...rest}
    />
  );
}
