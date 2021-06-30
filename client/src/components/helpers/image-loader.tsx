import React, { useState } from 'react';

import './image-loader.css';
import LazyLoad from 'react-lazy-load';

interface ImageLoaderProps {
  alt?: string;
  className?: string;
  height?: number;
  loadedClassName?: string;
  loadingClassName?: string;
  offsetVertical?: number;
  src?: string;
  style?: React.CSSProperties;
  width?: number;
}

const ImageLoader = ({
  className = '',
  loadedClassName = 'img-loaded',
  loadingClassName = 'img-loading',
  offsetVertical = 100,
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
    <LazyLoad
      debounce={false}
      height={height}
      offsetVertical={offsetVertical}
      width={width}
    >
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt={alt}
        className={fullClassName}
        onLoad={() => setLoaded(true)}
        src={src}
        style={style}
      />
    </LazyLoad>
  );
};

export default ImageLoader;
