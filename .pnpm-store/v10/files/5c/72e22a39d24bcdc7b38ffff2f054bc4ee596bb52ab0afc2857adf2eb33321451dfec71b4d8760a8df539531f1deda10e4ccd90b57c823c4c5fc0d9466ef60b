import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
///////////////////////////////////////////////////////////
// ReflexElement
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
import ReflexHandle from './ReflexHandle';
import { getDataProps } from './utilities';
import throttle from 'lodash.throttle';
import Measure from 'react-measure';
import PropTypes from 'prop-types';
import React from 'react';
const toArray = obj => {
  return obj ? Array.isArray(obj) ? obj : [obj] : [];
};
class SizeAwareReflexElement extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "onResize", rect => {
      const {
        resizeHeight,
        resizeWidth
      } = this.props;
      const {
        height,
        width
      } = rect.bounds;
      this.setDimensions(_objectSpread({}, resizeHeight && {
        height
      }, resizeWidth && {
        width
      }));
    });
    this.setDimensions = throttle(dimensions => {
      this.setState(dimensions);
    }, this.props.propagateDimensionsRate / 1000);
    this.state = {
      height: "100%",
      width: "100%"
    };
  }
  renderChildren() {
    const {
      propagateDimensions
    } = this.props;
    const validChildren = toArray(this.props.children).filter(child => {
      return !!child;
    });
    return React.Children.map(validChildren, child => {
      if (this.props.withHandle || ReflexHandle.isA(child)) {
        return React.cloneElement(child, _objectSpread({
          dimensions: propagateDimensions && this.state
        }, child.props, {
          index: this.props.index - 1,
          events: this.props.events
        }));
      }
      if (propagateDimensions) {
        return React.cloneElement(child, _objectSpread({}, child.props, {
          dimensions: this.state
        }));
      }
      return child;
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(Measure, {
      bounds: true,
      onResize: this.onResize
    }, ({
      measureRef
    }) => {
      return /*#__PURE__*/React.createElement("div", {
        ref: measureRef,
        className: "reflex-size-aware"
      }, /*#__PURE__*/React.createElement("div", {
        style: this.state
      }, this.renderChildren()));
    });
  }
}
class ReflexElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.size !== prevState.size) {
      return _objectSpread({}, prevState, {
        size: nextProps.size
      });
    }
    return null;
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.size !== this.state.size) {
      const directions = toArray(this.props.direction);
      for (let direction of directions) {
        await this.props.events.emit('element.size', {
          index: this.props.index,
          size: this.props.size,
          direction
        });
      }
    }
  }
  renderChildren() {
    const validChildren = toArray(this.props.children).filter(child => {
      return !!child;
    });
    return React.Children.map(validChildren, child => {
      if (this.props.withHandle || ReflexHandle.isA(child)) {
        return React.cloneElement(child, _objectSpread({}, child.props, {
          index: this.props.index - 1,
          events: this.props.events
        }));
      }
      return child;
    });
  }
  render() {
    const className = [...this.props.className.split(' '), this.props.orientation, 'reflex-element'].join(' ').trim();
    const style = _objectSpread({}, this.props.style, {
      flexGrow: this.props.flex,
      flexShrink: 1,
      flexBasis: '0%'
    });
    return /*#__PURE__*/React.createElement("div", _extends({}, getDataProps(this.props), {
      ref: this.props.innerRef,
      className: className,
      style: style
    }), this.props.propagateDimensions ? /*#__PURE__*/React.createElement(SizeAwareReflexElement, this.props) : this.renderChildren());
  }
}
_defineProperty(ReflexElement, "propTypes", {
  propagateDimensions: PropTypes.bool,
  resizeHeight: PropTypes.bool,
  resizeWidth: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.number
});
_defineProperty(ReflexElement, "defaultProps", {
  propagateDimensionsRate: 100,
  propagateDimensions: false,
  resizeHeight: true,
  resizeWidth: true,
  direction: [1],
  className: ''
});
export default React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(ReflexElement, _extends({
    innerRef: ref
  }, props));
});