import React, { useState } from 'react';

import './image-loader.css';

interface LazyImageProps {
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

const LazyImage = ({
  className = '',
  loadedClassName = 'img-loaded',
  loadingClassName = 'img-loading',
  alt,
  src,
  style
}: LazyImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const fullClassName = `${className} ${
    loaded ? loadedClassName : loadingClassName
  }`;
  return (
    <img
      alt={alt}
      className={fullClassName}
      onLoad={() => setLoaded(true)}
      src={src}
      style={style}
      loading='lazy'
    />
  );
};

export default LazyImage;
