"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const color = require('kleur');

const Prompt = require('./prompt');

const _require = require('sisteransi'),
      erase = _require.erase,
      cursor = _require.cursor;

const _require2 = require('../util'),
      style = _require2.style,
      clear = _require2.clear,
      lines = _require2.lines,
      figures = _require2.figures;
/**
 * TextPrompt Base Element
 * @param {Object} opts Options
 * @param {String} opts.message Message
 * @param {String} [opts.style='default'] Render style
 * @param {String} [opts.initial] Default value
 * @param {Function} [opts.validate] Validate function
 * @param {Stream} [opts.stdin] The Readable stream to listen to
 * @param {Stream} [opts.stdout] The Writable stream to write readline data to
 * @param {String} [opts.error] The invalid error label
 */


class TextPrompt extends Prompt {
  constructor(opts = {}) {
    super(opts);
    this.transform = style.render(opts.style);
    this.scale = this.transform.scale;
    this.msg = opts.message;
    this.initial = opts.initial || ``;

    this.validator = opts.validate || (() => true);

    this.value = ``;
    this.errorMsg = opts.error || `Please Enter A Valid Value`;
    this.cursor = Number(!!this.initial);
    this.cursorOffset = 0;
    this.clear = clear(``, this.out.columns);
    this.render();
  }

  set value(v) {
    if (!v && this.initial) {
      this.placeholder = true;
      this.rendered = color.gray(this.transform.render(this.initial));
    } else {
      this.placeholder = false;
      this.rendered = this.transform.render(v);
    }

    this._value = v;
    this.fire();
  }

  get value() {
    return this._value;
  }

  reset() {
    this.value = ``;
    this.cursor = Number(!!this.initial);
    this.cursorOffset = 0;
    this.fire();
    this.render();
  }

  exit() {
    this.abort();
  }

  abort() {
    this.value = this.value || this.initial;
    this.done = this.aborted = true;
    this.error = false;
    this.red = false;
    this.fire();
    this.render();
    this.out.write('\n');
    this.close();
  }

  validate() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let valid = yield _this.validator(_this.value);

      if (typeof valid === `string`) {
        _this.errorMsg = valid;
        valid = false;
      }

      _this.error = !valid;
    })();
  }

  submit() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.value = _this2.value || _this2.initial;
      _this2.cursorOffset = 0;
      _this2.cursor = _this2.rendered.length;
      yield _this2.validate();

      if (_this2.error) {
        _this2.red = true;

        _this2.fire();

        _this2.render();

        return;
      }

      _this2.done = true;
      _this2.aborted = false;

      _this2.fire();

      _this2.render();

      _this2.out.write('\n');

      _this2.close();
    })();
  }

  next() {
    if (!this.placeholder) return this.bell();
    this.value = this.initial;
    this.cursor = this.rendered.length;
    this.fire();
    this.render();
  }

  moveCursor(n) {
    if (this.placeholder) return;
    this.cursor = this.cursor + n;
    this.cursorOffset += n;
  }

  _(c, key) {
    let s1 = this.value.slice(0, this.cursor);
    let s2 = this.value.slice(this.cursor);
    this.value = `${s1}${c}${s2}`;
    this.red = false;
    this.cursor = this.placeholder ? 0 : s1.length + 1;
    this.render();
  }

  delete() {
    if (this.isCursorAtStart()) return this.bell();
    let s1 = this.value.slice(0, this.cursor - 1);
    let s2 = this.value.slice(this.cursor);
    this.value = `${s1}${s2}`;
    this.red = false;

    if (this.isCursorAtStart()) {
      this.cursorOffset = 0;
    } else {
      this.cursorOffset++;
      this.moveCursor(-1);
    }

    this.render();
  }

  deleteForward() {
    if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
    let s1 = this.value.slice(0, this.cursor);
    let s2 = this.value.slice(this.cursor + 1);
    this.value = `${s1}${s2}`;
    this.red = false;

    if (this.isCursorAtEnd()) {
      this.cursorOffset = 0;
    } else {
      this.cursorOffset++;
    }

    this.render();
  }

  first() {
    this.cursor = 0;
    this.render();
  }

  last() {
    this.cursor = this.value.length;
    this.render();
  }

  left() {
    if (this.cursor <= 0 || this.placeholder) return this.bell();
    this.moveCursor(-1);
    this.render();
  }

  right() {
    if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
    this.moveCursor(1);
    this.render();
  }

  isCursorAtStart() {
    return this.cursor === 0 || this.placeholder && this.cursor === 1;
  }

  isCursorAtEnd() {
    return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
  }

  render() {
    if (this.closed) return;

    if (!this.firstRender) {
      if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
      this.out.write(clear(this.outputText, this.out.columns));
    }

    super.render();
    this.outputError = '';
    this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);

    if (this.error) {
      this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? ' ' : figures.pointerSmall} ${color.red().italic(l)}`, ``);
    }

    this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
  }

}

module.exports = TextPrompt;