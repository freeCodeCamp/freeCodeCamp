'use strict';

const color = require('kleur');
const Prompt = require('./prompt');
const { style, clear, figures } = require('../util');
const { erase, cursor } = require('sisteransi');
const { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require('../dateparts');

const regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
const regexGroups = {
  1: ({token}) => token.replace(/\\(.)/g, '$1'),
  2: (opts) => new Day(opts), // Day // TODO
  3: (opts) => new Month(opts), // Month
  4: (opts) => new Year(opts), // Year
  5: (opts) => new Meridiem(opts), // AM/PM // TODO (special)
  6: (opts) => new Hours(opts), // Hours
  7: (opts) => new Minutes(opts), // Minutes
  8: (opts) => new Seconds(opts), // Seconds
  9: (opts) => new Milliseconds(opts), // Fractional seconds
}

const dfltLocales = {
  months: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
  monthsShort: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
  weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
  weekdaysShort: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(',')
}


/**
 * DatePrompt Base Element
 * @param {Object} opts Options
 * @param {String} opts.message Message
 * @param {Number} [opts.initial] Index of default value
 * @param {String} [opts.mask] The format mask
 * @param {object} [opts.locales] The date locales
 * @param {String} [opts.error] The error message shown on invalid value
 * @param {Function} [opts.validate] Function to validate the submitted value
 * @param {Stream} [opts.stdin] The Readable stream to listen to
 * @param {Stream} [opts.stdout] The Writable stream to write readline data to
 */
class DatePrompt extends Prompt {
  constructor(opts={}) {
    super(opts);
    this.msg = opts.message;
    this.cursor = 0;
    this.typed = '';
    this.locales = Object.assign(dfltLocales, opts.locales);
    this._date = opts.initial || new Date();
    this.errorMsg = opts.error || 'Please Enter A Valid Value';
    this.validator = opts.validate || (() => true);
    this.mask = opts.mask || 'YYYY-MM-DD HH:mm:ss';
    this.clear = clear('', this.out.columns);
    this.render();
  }

  get value() {
    return this.date
  }

  get date() {
    return this._date;
  }

  set date(date) {
    if (date) this._date.setTime(date.getTime());
  }

  set mask(mask) {
    let result;
    this.parts = [];
    while(result = regex.exec(mask)) {
      let match = result.shift();
      let idx = result.findIndex(gr => gr != null);
      this.parts.push(idx in regexGroups
        ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales })
        : result[idx] || match);
    }

    let parts = this.parts.reduce((arr, i) => {
      if (typeof i === 'string' && typeof arr[arr.length - 1] === 'string')
        arr[arr.length - 1] += i;
      else arr.push(i);
      return arr;
    }, []);

    this.parts.splice(0);
    this.parts.push(...parts);
    this.reset();
  }

  moveCursor(n) {
    this.typed = '';
    this.cursor = n;
    this.fire();
  }

  reset() {
    this.moveCursor(this.parts.findIndex(p => p instanceof DatePart));
    this.fire();
    this.render();
  }

  exit() {
    this.abort();
  }

  abort() {
    this.done = this.aborted = true;
    this.error = false;
    this.fire();
    this.render();
    this.out.write('\n');
    this.close();
  }

  async validate() {
    let valid = await this.validator(this.value);
    if (typeof valid === 'string') {
      this.errorMsg = valid;
      valid = false;
    }
    this.error = !valid;
  }

  async submit() {
    await this.validate();
    if (this.error) {
      this.color = 'red';
      this.fire();
      this.render();
      return;
    }
    this.done = true;
    this.aborted = false;
    this.fire();
    this.render();
    this.out.write('\n');
    this.close();
  }

  up() {
    this.typed = '';
    this.parts[this.cursor].up();
    this.render();
  }

  down() {
    this.typed = '';
    this.parts[this.cursor].down();
    this.render();
  }

  left() {
    let prev = this.parts[this.cursor].prev();
    if (prev == null) return this.bell();
    this.moveCursor(this.parts.indexOf(prev));
    this.render();
  }

  right() {
    let next = this.parts[this.cursor].next();
    if (next == null) return this.bell();
    this.moveCursor(this.parts.indexOf(next));
    this.render();
  }

  next() {
    let next = this.parts[this.cursor].next();
    this.moveCursor(next
      ? this.parts.indexOf(next)
      : this.parts.findIndex((part) => part instanceof DatePart));
    this.render();
  }

  _(c) {
    if (/\d/.test(c)) {
      this.typed += c;
      this.parts[this.cursor].setTo(this.typed);
      this.render();
    }
  }

  render() {
    if (this.closed) return;
    if (this.firstRender) this.out.write(cursor.hide);
    else this.out.write(clear(this.outputText, this.out.columns));
    super.render();

    // Print prompt
    this.outputText = [
      style.symbol(this.done, this.aborted),
      color.bold(this.msg),
      style.delimiter(false),
      this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), [])
          .join('')
    ].join(' ');

    // Print error
    if (this.error) {
      this.outputText += this.errorMsg.split('\n').reduce(
          (a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
    }

    this.out.write(erase.line + cursor.to(0) + this.outputText);
  }
}

module.exports = DatePrompt;
