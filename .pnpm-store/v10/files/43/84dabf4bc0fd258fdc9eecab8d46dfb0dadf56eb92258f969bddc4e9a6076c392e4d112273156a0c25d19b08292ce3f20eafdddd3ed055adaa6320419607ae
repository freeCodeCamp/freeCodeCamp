"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const notImplemented = require("../../browser/not-implemented");
const idlUtils = require("../generated/utils");
const { Canvas } = require("../../utils");

class HTMLCanvasElementImpl extends HTMLElementImpl {
  _attrModified(name, value, oldValue) {
    if (this._canvas && (name === "width" || name === "height")) {
      this._canvas[name] = parseInt(value);
    }

    super._attrModified(name, value, oldValue);
  }

  _getCanvas() {
    if (Canvas && !this._canvas) {
      this._canvas = Canvas.createCanvas(this.width, this.height);
    }
    return this._canvas;
  }

  getContext(contextId) {
    const canvas = this._getCanvas();
    if (canvas) {
      if (!this._context) {
        this._context = canvas.getContext(contextId) || null;
        if (this._context) {
          // Override the native canvas reference with our wrapper. This is the
          // reason why we need to locally cache _context, since each call to
          // canvas.getContext(contextId) would replace this reference again.
          // Perhaps in the longer term, a better solution would be to create a
          // full wrapper for the Context object as well.
          this._context.canvas = idlUtils.wrapperForImpl(this);
          wrapNodeCanvasMethod(this._context, "createPattern");
          wrapNodeCanvasMethod(this._context, "drawImage");
        }
      }
      return this._context;
    }

    notImplemented(
      "HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)",
      this._ownerDocument._defaultView
    );
    return null;
  }

  toDataURL(...args) {
    const canvas = this._getCanvas();
    if (canvas) {
      return canvas.toDataURL(...args);
    }

    notImplemented(
      "HTMLCanvasElement.prototype.toDataURL (without installing the canvas npm package)",
      this._ownerDocument._defaultView
    );
    return null;
  }

  toBlob(callback, type, qualityArgument) {
    const window = this._ownerDocument._defaultView;
    const canvas = this._getCanvas();
    if (canvas) {
      const options = {};
      switch (type) {
        case "image/jpg":
        case "image/jpeg":
          type = "image/jpeg";
          options.quality = qualityArgument;
          break;
        default:
          type = "image/png";
      }
      canvas.toBuffer((err, buff) => {
        if (err) {
          throw err;
        }
        callback(new window.Blob([buff], { type }));
      }, type, options);
    } else {
      notImplemented(
        "HTMLCanvasElement.prototype.toBlob (without installing the canvas npm package)",
        window
      );
    }
  }

  get width() {
    const parsed = parseInt(this.getAttributeNS(null, "width"));
    return isNaN(parsed) || parsed < 0 || parsed > 2147483647 ? 300 : parsed;
  }

  set width(v) {
    v = v > 2147483647 ? 300 : v;
    this.setAttributeNS(null, "width", String(v));
  }

  get height() {
    const parsed = parseInt(this.getAttributeNS(null, "height"));
    return isNaN(parsed) || parsed < 0 || parsed > 2147483647 ? 150 : parsed;
  }

  set height(v) {
    v = v > 2147483647 ? 150 : v;
    this.setAttributeNS(null, "height", String(v));
  }
}

// We need to wrap the methods that receive an image or canvas object
// (luckily, always as the first argument), so that these objects can be
// unwrapped an the expected types passed.
function wrapNodeCanvasMethod(ctx, name) {
  const prev = ctx[name];
  ctx[name] = function (image, ...rest) {
    const impl = idlUtils.implForWrapper(image);
    if (impl) {
      if (impl instanceof HTMLCanvasElementImpl && !impl._canvas) {
        impl._getCanvas();
      }
      image = impl._image || impl._canvas;
    }
    return prev.call(ctx, image, ...rest);
  };
}

module.exports = {
  implementation: HTMLCanvasElementImpl
};
