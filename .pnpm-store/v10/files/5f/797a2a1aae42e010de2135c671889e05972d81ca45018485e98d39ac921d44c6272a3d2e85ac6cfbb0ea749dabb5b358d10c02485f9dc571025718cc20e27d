'use strict';

const utils = require('./utils');
const colors = require('ansi-colors');

const styles = {
  default: colors.noop,
  noop: colors.noop,

  /**
   * Modifiers
   */

  set inverse(custom) {
    this._inverse = custom;
  },
  get inverse() {
    return this._inverse || utils.inverse(this.primary);
  },

  set complement(custom) {
    this._complement = custom;
  },
  get complement() {
    return this._complement || utils.complement(this.primary);
  },

  /**
   * Main color
   */

  primary: colors.cyan,

  /**
   * Main palette
   */

  success: colors.green,
  danger: colors.magenta,
  strong: colors.bold,
  warning: colors.yellow,
  muted: colors.dim,
  disabled: colors.gray,
  dark: colors.dim.gray,
  underline: colors.underline,

  set info(custom) {
    this._info = custom;
  },
  get info() {
    return this._info || this.primary;
  },

  set em(custom) {
    this._em = custom;
  },
  get em() {
    return this._em || this.primary.underline;
  },

  set heading(custom) {
    this._heading = custom;
  },
  get heading() {
    return this._heading || this.muted.underline;
  },

  /**
   * Statuses
   */

  set pending(custom) {
    this._pending = custom;
  },
  get pending() {
    return this._pending || this.primary;
  },

  set submitted(custom) {
    this._submitted = custom;
  },
  get submitted() {
    return this._submitted || this.success;
  },

  set cancelled(custom) {
    this._cancelled = custom;
  },
  get cancelled() {
    return this._cancelled || this.danger;
  },

  /**
   * Special styling
   */

  set typing(custom) {
    this._typing = custom;
  },
  get typing() {
    return this._typing || this.dim;
  },

  set placeholder(custom) {
    this._placeholder = custom;
  },
  get placeholder() {
    return this._placeholder || this.primary.dim;
  },

  set highlight(custom) {
    this._highlight = custom;
  },
  get highlight() {
    return this._highlight || this.inverse;
  }
};

styles.merge = (options = {}) => {
  if (options.styles && typeof options.styles.enabled === 'boolean') {
    colors.enabled = options.styles.enabled;
  }
  if (options.styles && typeof options.styles.visible === 'boolean') {
    colors.visible = options.styles.visible;
  }

  let result = utils.merge({}, styles, options.styles);
  delete result.merge;

  for (let key of Object.keys(colors)) {
    if (!hasOwnProperty.call(result, key)) {
      Reflect.defineProperty(result, key, { get: () => colors[key] });
    }
  }

  for (let key of Object.keys(colors.styles)) {
    if (!hasOwnProperty.call(result, key)) {
      Reflect.defineProperty(result, key, { get: () => colors[key] });
    }
  }
  return result;
};

module.exports = styles;
