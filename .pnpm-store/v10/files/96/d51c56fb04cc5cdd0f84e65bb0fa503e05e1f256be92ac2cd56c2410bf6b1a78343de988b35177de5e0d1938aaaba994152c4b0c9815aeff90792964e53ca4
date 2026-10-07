/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This class listens to events on the document and then updates a react
 * component through callbacks.
 * Please note that captureMouseMove must be called in
 * order to initialize listeners on mousemove and mouseup.
 * releaseMouseMove must be called to remove them. It is important to
 * call releaseMouseMoves since mousemove is expensive to listen to.
 *
 * @typechecks
 */
'use strict';

var EventListener = require("./EventListener");

var cancelAnimationFramePolyfill = require("./cancelAnimationFramePolyfill");

var requestAnimationFramePolyfill = require("./requestAnimationFramePolyfill");

var DOMMouseMoveTracker = /*#__PURE__*/function () {
  /**
   * onMove is the callback that will be called on every mouse move.
   * onMoveEnd is called on mouse up when movement has ended.
   */
  function DOMMouseMoveTracker(
  /*function*/
  onMove,
  /*function*/
  onMoveEnd,
  /*DOMElement*/
  domNode) {
    this._isDragging = false;
    this._animationFrameID = null;
    this._domNode = domNode;
    this._onMove = onMove;
    this._onMoveEnd = onMoveEnd;
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._didMouseMove = this._didMouseMove.bind(this);
  }
  /**
   * This is to set up the listeners for listening to mouse move
   * and mouse up signaling the movement has ended. Please note that these
   * listeners are added at the document.body level. It takes in an event
   * in order to grab inital state.
   */


  var _proto = DOMMouseMoveTracker.prototype;

  _proto.captureMouseMoves = function captureMouseMoves(
  /*object*/
  event) {
    if (!this._eventMoveToken && !this._eventUpToken) {
      this._eventMoveToken = EventListener.listen(this._domNode, 'mousemove', this._onMouseMove);
      this._eventUpToken = EventListener.listen(this._domNode, 'mouseup', this._onMouseUp);
    }

    if (!this._isDragging) {
      this._deltaX = 0;
      this._deltaY = 0;
      this._isDragging = true;
      this._x = event.clientX;
      this._y = event.clientY;
    }

    event.preventDefault();
  };
  /**
   * These releases all of the listeners on document.body.
   */


  _proto.releaseMouseMoves = function releaseMouseMoves() {
    if (this._eventMoveToken && this._eventUpToken) {
      this._eventMoveToken.remove();

      this._eventMoveToken = null;

      this._eventUpToken.remove();

      this._eventUpToken = null;
    }

    if (this._animationFrameID !== null) {
      cancelAnimationFramePolyfill(this._animationFrameID);
      this._animationFrameID = null;
    }

    if (this._isDragging) {
      this._isDragging = false;
      this._x = null;
      this._y = null;
    }
  };
  /**
   * Returns whether or not if the mouse movement is being tracked.
   */


  _proto.isDragging = function isDragging()
  /*boolean*/
  {
    return this._isDragging;
  };
  /**
   * Calls onMove passed into constructor and updates internal state.
   */


  _proto._onMouseMove = function _onMouseMove(
  /*object*/
  event) {
    var x = event.clientX;
    var y = event.clientY;
    this._deltaX += x - this._x;
    this._deltaY += y - this._y;

    if (this._animationFrameID === null) {
      // The mouse may move faster then the animation frame does.
      // Use `requestAnimationFramePolyfill` to avoid over-updating.
      this._animationFrameID = requestAnimationFramePolyfill(this._didMouseMove);
    }

    this._x = x;
    this._y = y;
    event.preventDefault();
  };

  _proto._didMouseMove = function _didMouseMove() {
    this._animationFrameID = null;

    this._onMove(this._deltaX, this._deltaY);

    this._deltaX = 0;
    this._deltaY = 0;
  };
  /**
   * Calls onMoveEnd passed into constructor and updates internal state.
   */


  _proto._onMouseUp = function _onMouseUp() {
    if (this._animationFrameID) {
      this._didMouseMove();
    }

    this._onMoveEnd();
  };

  return DOMMouseMoveTracker;
}();

module.exports = DOMMouseMoveTracker;