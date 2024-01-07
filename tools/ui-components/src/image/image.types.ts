import React from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  /**
   * Whether the image should be resized and contained within its parent.
   */
  responsive?: boolean;
}
