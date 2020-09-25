import React, { useState } from 'react';

import './image-loader.css';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  loadedClassName: PropTypes.string,
  loadingClassName: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number
};

const ImageLoader = ({
  className = '',
  loadedClassName = 'img-loaded',
  loadingClassName = 'img-loading',
  alt,
  src,
  width,
  height
}) => {
  const [loaded, setLoaded] = useState(false);
  const fullClassName = `${className} ${
    loaded ? loadedClassName : loadingClassName
  }`;
  return (
    <LazyLoad
      debounce={false}
      height={height}
      offsetVertical={100}
      width={width}
    >
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt={alt}
        className={fullClassName}
        onLoad={() => setLoaded(true)}
        src={src}
      />
    </LazyLoad>
  );
};
ImageLoader.propTypes = propTypes;
export default ImageLoader;
