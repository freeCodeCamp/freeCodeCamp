import React from 'react';
import { ImageProps } from './image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, src, responsive, className, ...props }, ref): JSX.Element => {
    // If `responsive` is `true`:
    // - Set `display` to `block`
    // - Set a maximum width relative to the parent
    // - Scale the height according to the width, otherwise the image is stretched
    const classes = responsive
      ? [className, 'block max-w-full h-auto'].join(' ')
      : className;

    return <img ref={ref} alt={alt} src={src} className={classes} {...props} />;
  }
);

Image.displayName = 'Image';
