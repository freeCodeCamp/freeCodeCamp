/* eslint-disable react/sort-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import './imageLoader.css';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

const _loaded = {};
const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  loadedClassName: PropTypes.string,
  loadingClassName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string
};

class ImageLoader extends React.Component {
  // initial state: image loaded stage
  state = {
    loaded: _loaded[this.props.src]
  };

  // define our loading and loaded image classes
  static defaultProps = {
    className: '',
    loadingClassName: 'img-loading',
    loadedClassName: 'img-loaded'
  };

  // image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
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
        <img alt={alt} className={className} onLoad={this.onLoad} src={src} />
      </LazyLoad>
    );
  }
}
ImageLoader.propTypes = propTypes;
export default ImageLoader;
