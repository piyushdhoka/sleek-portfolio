import React from 'react';

export default function BuyMeACoffee({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
    >
      {/* Cup body */}
      <path d="M44 72a12 12 0 0 1 12-12h108a12 12 0 0 1 12 12v44a36 36 0 0 1-36 36H92a36 36 0 0 1-36-36Z" />
      {/* Handle */}
      <path d="M176 88h16a24 24 0 0 1 0 48h-20a8 8 0 0 1 0-16h20a8 8 0 0 0 0-16H176a8 8 0 0 1 0-16Z" />
      {/* Saucer */}
      <path d="M36 180a12 12 0 0 1 12-12h160a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12Z" />
      {/* Steam */}
      <path d="M88 40a8 8 0 0 1 8 8c0 8-8 8-8 16s8 8 8 16a8 8 0 0 1-16 0c0-8 8-8 8-16s-8-8-8-16a8 8 0 0 1 8-8Zm32 0a8 8 0 0 1 8 8c0 8-8 8-8 16s8 8 8 16a8 8 0 0 1-16 0c0-8 8-8 8-16s-8-8-8-16a8 8 0 0 1 8-8Z" />
    </svg>
  );
}
