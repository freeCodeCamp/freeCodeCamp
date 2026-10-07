"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const color = require('kleur');

const Prompt = require('./prompt');

const _require = require('sisteransi'),
      cursor = _require.cursor,
      erase = _require.erase;

const _require2 = require('../util'),
      style = _require2.style,
      figures = _require2.figures,
      clear = _require2.clear,
      lines = _require2.lines;

const isNumber = /[0-9]/;

const isDef = any => any !== undefined;

const round = (number, precision) => {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};
/**
 * NumberPrompt Base Element
 * @param {Object} opts Options
 * @param {String} opts.message Message
 * @param {String} [opts.style='default'] Render style
 * @param {Number} [opts.initial] Default value
 * @param {Number} [opts.max=+Infinity] Max value
 * @param {Number} [opts.min=-Infinity] Min value
 * @param {Boolean} [opts.float=false] Parse input as floats
 * @param {Number} [opts.round=2] Round floats to x decimals
 * @param {Number} [opts.increment=1] Number to increment by when using arrow-keys
 * @param {Function} [opts.validate] Validate function
 * @param {Stream} [opts.stdin] The Readable stream to listen to
 * @param {Stream} [opts.stdout] The Writable stream to write readline data to
 * @param {String} [opts.error] The invalid error label
 */


class NumberPrompt extends Prompt {
  constructor(opts = {}) {
    super(opts);
    this.transform = style.render(opts.style);
    this.msg = opts.message;
    this.initial = isDef(opts.initial) ? opts.initial : '';
    this.float = !!opts.float;
    this.round = opts.round || 2;
    this.inc = opts.increment || 1;
    this.min = isDef(opts.min) ? opts.min : -Infinity;
    this.max = isDef(opts.max) ? opts.max : Infinity;
    this.errorMsg = opts.error || `Please Enter A Valid Value`;

    this.validator = opts.validate || (() => true);

    this.color = `cyan`;
    this.value = ``;
    this.typed = ``;
    this.lastHit = 0;
    this.render();
  }

  set value(v) {
    if (!v && v !== 0) {
      this.placeholder = true;
      this.rendered = color.gray(this.transform.render(`${this.initial}`));
      this._value = ``;
    } else {
      this.placeholder = false;
      this.rendered = this.transform.render(`${round(v, this.round)}`);
      this._value = round(v, this.round);
    }

    this.fire();
  }

  get value() {
    return this._value;
  }

  parse(x) {
    return this.float ? parseFloat(x) : parseInt(x);
  }

  valid(c) {
    return c === `-` || c === `.` && this.float || isNumber.test(c);
  }

  reset() {
    this.typed = ``;
    this.value = ``;
    this.fire();
    this.render();
  }

  exit() {
    this.abort();
  }

  abort() {
    let x = this.value;
    this.value = x !== `` ? x : this.initial;
    this.done = this.aborted = true;
    this.error = false;
    this.fire();
    this.render();
    this.out.write(`\n`);
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
      yield _this2.validate();

      if (_this2.error) {
        _this2.color = `red`;

        _this2.fire();

        _this2.render();

        return;
      }

      let x = _this2.value;
      _this2.value = x !== `` ? x : _this2.initial;
      _this2.done = true;
      _this2.aborted = false;
      _this2.error = false;

      _this2.fire();

      _this2.render();

      _this2.out.write(`\n`);

      _this2.close();
    })();
  }

  up() {
    this.typed = ``;

    if (this.value === '') {
      this.value = this.min - this.inc;
    }

    if (this.value >= this.max) return this.bell();
    this.value += this.inc;
    this.color = `cyan`;
    this.fire();
    this.render();
  }

  down() {
    this.typed = ``;

    if (this.value === '') {
      this.value = this.min + this.inc;
    }

    if (this.value <= this.min) return this.bell();
    this.value -= this.inc;
    this.color = `cyan`;
    this.fire();
    this.render();
  }

  delete() {
    let val = this.value.toString();
    if (val.length === 0) return this.bell();
    this.value = this.parse(val = val.slice(0, -1)) || ``;

    if (this.value !== '' && this.value < this.min) {
      this.value = this.min;
    }

    this.color = `cyan`;
    this.fire();
    this.render();
  }

  next() {
    this.value = this.initial;
    this.fire();
    this.render();
  }

  _(c, key) {
    if (!this.valid(c)) return this.bell();
    const now = Date.now();
    if (now - this.lastHit > 1000) this.typed = ``; // 1s elapsed

    this.typed += c;
    this.lastHit = now;
    this.color = `cyan`;
    if (c === `.`) return this.fire();
    this.value = Math.min(this.parse(this.typed), this.max);
    if (this.value > this.max) this.value = this.max;
    if (this.value < this.min) this.value = this.min;
    this.fire();
    this.render();
  }

  render() {
    if (this.closed) return;

    if (!this.firstRender) {
      if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
      this.out.write(clear(this.outputText, this.out.columns));
    }

    super.render();
    this.outputError = ''; // Print prompt

    this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `); // Print error

    if (this.error) {
      this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
    }

    this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
  }

}

module.exports = NumberPrompt;