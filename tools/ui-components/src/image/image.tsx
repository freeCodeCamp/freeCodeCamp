import React from 'react';
import { ImageProps } from './image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, src, ...props }, ref): JSX.Element => {
    return <img ref={ref} alt={alt} src={src} {...props} />;
  }
);

Image.displayName = 'Image';
