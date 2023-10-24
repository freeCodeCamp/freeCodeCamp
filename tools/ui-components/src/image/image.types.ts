import React from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}
