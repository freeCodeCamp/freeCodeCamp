import React, { useState } from 'react';

import './image-loader.css';
import LazyLoad from 'react-lazyload';

interface ImageLoaderProps {
  alt?: string;
  className?: string;
  height?: number;
  loadedClassName?: string;
  loadingClassName?: string;
  offset?: number;
  src?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  style?: Record<any, unknown>;
  width?: number;
}

const ImageLoader = ({
  className = '',
  loadedClassName = 'img-loaded',
  loadingClassName = 'img-loading',
  offset = 100,
  alt,
  src,
  style,
  width,
  height
}: ImageLoaderProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const fullClassName = `${className} ${
    loaded ? loadedClassName : loadingClassName
  }`;
  return (
    <LazyLoad debounce={false} height={height} offset={offset}>
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt={alt}
        className={fullClassName}
        onLoad={() => setLoaded(true)}
        src={src}
        style={style}
        width={width}
      />
    </LazyLoad>
  );
};

export default ImageLoader;
