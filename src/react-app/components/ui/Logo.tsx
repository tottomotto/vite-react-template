import './Logo.css';

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="Garrison - Home">
      <svg
        className="logo__svg"
        viewBox="0 0 180 40"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {/* Medical cross icon */}
        <rect x="2" y="12" width="16" height="16" rx="2" fill="var(--color-red-primary, #C8102E)" />
        <rect x="7" y="8" width="6" height="24" rx="1" fill="var(--color-red-primary, #C8102E)" />
        <rect x="2" y="15" width="16" height="10" rx="1" fill="var(--color-red-primary, #C8102E)" />
        {/* White cross cutout */}
        <rect x="8.5" y="12" width="3" height="16" fill="#fff" />
        <rect x="2" y="17" width="16" height="6" fill="var(--color-red-primary, #C8102E)" />
        <rect x="8.5" y="12" width="3" height="16" fill="#fff" />
        <rect x="4" y="18" width="12" height="4" fill="#fff" />

        {/* GARRISON text */}
        <text
          x="26"
          y="27"
          className="logo__text"
          fill="var(--color-blue-primary, #003087)"
          fontWeight="700"
          fontSize="18"
          fontFamily="Inter, sans-serif"
          letterSpacing="2"
        >
          GARRISON
        </text>
      </svg>
    </a>
  );
}
