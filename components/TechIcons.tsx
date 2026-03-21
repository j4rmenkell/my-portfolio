import React from 'react';

export const techIcons: Record<string, React.ReactNode> = {
  "Next.js / React": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
    </svg>
  ),
  "Laravel / Vue": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "ASP.NET MVC / Angular": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  ),
  "MySQL": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6a8 3 0 0 0 16 0V6" />
      <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
    </svg>
  ),
  "Supabase": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M8.5 14.5L4 21h16l-4-7-3 4-2.5-3.5L8.5 14.5z" />
      <path d="M12 3L8.5 14.5 12 19l4-7L12 3z" />
    </svg>
  ),
  "Kotlin": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <polygon points="12 2 2 12 12 22 22 12 12 2" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
  "Flutter": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M14.5 9l-4-4L6 9.5l4.5 4.5H16l-4-4 2.5-1z" />
      <path d="M6 14.5L10.5 19H16l-4.5-4.5h-5.5z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 3c-3.5 0-5.5 2.5-6.5 5.5.5-2 2-3 3.5-3 2 0 3.5 1.5 5 4s3 3 5 3c-3 .5-5-1.5-6-4.5-1-2.5-2.5-4-3.5-4z"/>
    </svg>
  ),
  "Bootstrap": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M9 8h4a2 2 0 0 1 0 4H9V8z" />
      <path d="M9 12h4.5a2.5 2.5 0 0 1 0 5H9v-5z" />
    </svg>
  ),
  "Cloudinary": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M17.5 19C19.985 19 22 16.985 22 14.5 22 12.185 20.245 10.27 18 10c0-4.418-3.582-8-8-8-4.045 0-7.382 3.013-7.935 6.91C2.925 9.06 2 10.15 2 11.5 2 13.433 3.567 15 5.5 15h1v4h11z" />
    </svg>
  ),
  "Git & GitHub": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9z" />
      <path d="M12 2v20" />
      <path d="M12 12l9-4.9" />
      <path d="M12 12L3 7.1" />
    </svg>
  ),
  "Java": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  "C++": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M12 2H8C4.686 2 2 4.686 2 8v4c0 3.314 2.686 6 6 6h4v4c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-4c0-3.314-2.686-6-6-6h-4V4c0-3.314-2.686-6-6-6zM8 6h.01M16 18h.01" />
    </svg>
  )
};
