import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Cache control values per content type
const CACHE_CONTROL = {
  html: "public, max-age=0, must-revalidate",
  assets: "public, max-age=31536000, immutable",
  images: "public, max-age=86400",
} as const;

/** Return the appropriate Cache-Control value based on the request path. */
function getCacheControl(path: string): string | null {
  if (/\.(js|css|woff2?|ttf|eot)$/.test(path)) return CACHE_CONTROL.assets;
  if (/\.(png|jpe?g|gif|svg|webp|ico|avif)$/.test(path)) return CACHE_CONTROL.images;
  if (path === "/" || /\.html?$/.test(path)) return CACHE_CONTROL.html;
  return null;
}

// Middleware: attach cache headers to every response
app.use("*", async (c, next) => {
  await next();

  const url = new URL(c.req.url);
  const cacheValue = getCacheControl(url.pathname);
  if (cacheValue) {
    c.header("Cache-Control", cacheValue);
  }
});

// Health check endpoint
app.get("/api/health", (c) =>
  c.json({ status: "ok", timestamp: new Date().toISOString() })
);

// Existing API endpoint
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
