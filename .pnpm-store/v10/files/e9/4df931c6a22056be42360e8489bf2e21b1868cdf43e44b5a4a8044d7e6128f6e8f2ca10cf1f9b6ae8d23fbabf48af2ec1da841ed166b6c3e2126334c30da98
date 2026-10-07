import { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'

import getTypes from './get-types'
import getContentRect from './get-content-rect'
import getWindowOf from './get-window-of'

function withContentRect(types) {
  return WrappedComponent =>
    class WithContentRect extends Component {
      static propTypes = {
        client: PropTypes.bool,
        offset: PropTypes.bool,
        scroll: PropTypes.bool,
        bounds: PropTypes.bool,
        margin: PropTypes.bool,
        innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        onResize: PropTypes.func,
      }

      state = {
        contentRect: {
          entry: {},
          client: {},
          offset: {},
          scroll: {},
          bounds: {},
          margin: {},
        },
      }

      _animationFrameID = null

      _resizeObserver = null

      _node = null

      _window = null

      componentDidMount() {
        this._resizeObserver = (this._window !== null && this._window.ResizeObserver)
          ? new this._window.ResizeObserver(this.measure)
          : new ResizeObserver(this.measure);
        if (this._node !== null) {
          this._resizeObserver.observe(this._node)

          if (typeof this.props.onResize === 'function') {
            this.props.onResize(
              getContentRect(this._node, types || getTypes(this.props))
            )
          }
        }
      }

      componentWillUnmount() {
        if (this._window !== null) {
          this._window.cancelAnimationFrame(this._animationFrameID)
        }

        if (this._resizeObserver !== null) {
          this._resizeObserver.disconnect()
          this._resizeObserver = null
        }
      }

      measure = entries => {
        const contentRect = getContentRect(
          this._node,
          types || getTypes(this.props)
        )

        if (entries) {
          contentRect.entry = entries[0].contentRect
        }

        this._animationFrameID = this._window.requestAnimationFrame(() => {
          if (this._resizeObserver !== null) {
            this.setState({ contentRect })
            if (typeof this.props.onResize === 'function') {
              this.props.onResize(contentRect)
            }
          }
        })
      }

      _handleRef = node => {
        if (this._resizeObserver !== null && this._node !== null) {
          this._resizeObserver.unobserve(this._node)
        }

        this._node = node
        this._window = getWindowOf(this._node)

        const { innerRef } = this.props
        if (innerRef) {
          if (typeof innerRef === 'function') {
            innerRef(this._node)
          } else {
            innerRef.current = this._node
          }
        }

        if (this._resizeObserver !== null && this._node !== null) {
          this._resizeObserver.observe(this._node)
        }
      }

      render() {
        const { innerRef, onResize, ...props } = this.props
        return createElement(WrappedComponent, {
          ...props,
          measureRef: this._handleRef,
          measure: this.measure,
          contentRect: this.state.contentRect,
        })
      }
    }
}

export default withContentRect
