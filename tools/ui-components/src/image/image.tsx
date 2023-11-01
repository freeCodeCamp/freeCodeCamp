import React from 'react';
import { ImageProps } from './image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, src, responsive, ...props }, ref): JSX.Element => {
    // If `responsive` is `true`:
    // - Set `display` to `block`
    // - Set a maximum relative to the parent
    // - Scale the height according to the width, otherwise the image is stretched
    const className = responsive ? 'block max-w-full h-auto' : '';

    return (
      <img ref={ref} alt={alt} src={src} className={className} {...props} />
    );
  }
);

Image.displayName = 'Image';
