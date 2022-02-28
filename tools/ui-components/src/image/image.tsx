/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from 'react';
import { ImageProps } from './image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, className, src }, ref): JSX.Element => {
    return <img ref={ref} alt={alt} src={src} className={className} />;
  }
);
