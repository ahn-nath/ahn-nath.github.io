import React from 'react';

const SocialLink = ({ href, color, dPath, children }) => (
  <a className="me-4" href={href}>
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="bi fs-4"
      style={{ color }}
    >
      <path d={dPath} />
    </svg>
    {children}
  </a>
);

export default SocialLink;