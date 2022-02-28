import React from 'react';
export interface ImageProps {
  alt: string;
  className?: string;
  src: string;
  ref: React.RefObject<HTMLImageElement>;
}
