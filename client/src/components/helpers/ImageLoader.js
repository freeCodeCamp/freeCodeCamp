import React from 'react';

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

class ImageLoader extends React.Component {
  // initial state: image loaded stage
  state = {
    loaded: false
  };

  // define our loading and loaded image classes
  static defaultProps = {
    className: '',
    loadingClassName: 'img-loading',
    loadedClassName: 'img-loaded'
  };

  // image onLoad handler to update state to loaded
  onLoad = () => {
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let {
      className,
      loadedClassName,
      loadingClassName,
      alt,
      src,
      width,
      height
    } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <LazyLoad
        debounce={false}
        height={height}
        offsetVertical={100}
        width={width}
      >
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <img alt={alt} className={className} onLoad={this.onLoad} src={src} />
        {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
      </LazyLoad>
    );
  }
}
ImageLoader.propTypes = propTypes;
export default ImageLoader;
