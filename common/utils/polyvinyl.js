// originally base off of https://github.com/gulpjs/vinyl
import path from 'path';
import replaceExt from 'replace-ext';

export default class File {
  constructor({
    path,
    history = [],
    base,
    contents = ''
  } = {}) {
    // Record path change
    this.history = path ? [path] : history;
    this.base = base;
    this.contents = contents;
    this._isPolyVinyl = true;
    this.error = null;
  }

  static isPolyVinyl = function(file) {
    return file && file._isPolyVinyl === true || false;
  };

  isEmpty() {
    return !this._contents;
  }

  toJSON() {
    return Object
      .keys(this)
      .reduce((obj, key) => (obj[key] = this[key], obj), {});
  }

  get contents() {
    return this._contents;
  }

  set contents(val) {
    if (typeof val !== 'string') {
      throw new TypeError('File.contents can only a String');
    }
    this._contents = val;
  }

  get basename() {
    if (!this.path) {
      throw new Error('No path specified! Can not get basename.');
    }
    return path.basename(this.path);
  }

  set basename(basename) {
    if (!this.path) {
      throw new Error('No path specified! Can not set basename.');
    }
    this.path = path.join(path.dirname(this.path), basename);
  }

  get extname() {
    if (!this.path) {
      throw new Error('No path specified! Can not get extname.');
    }
    return path.extname(this.path);
  }

  set extname(extname) {
    if (!this.path) {
      throw new Error('No path specified! Can not set extname.');
    }
    this.path = replaceExt(this.path, extname);
  }

  get path() {
    return this.history[this.history.length - 1];
  }

  set path(path) {
    if (typeof path !== 'string') {
      throw new TypeError('path should be string');
    }

    // Record history only when path changed
    if (path && path !== this.path) {
      this.history.push(path);
    }
  }

  get error() {
    return this._error;
  }

  set error(err) {
    if (typeof err !== 'object') {
      throw new TypeError('error must be an object or null');
    }
    this.error = err;
  }
}
