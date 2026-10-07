'use strict';

const Events = require('events');
const stripAnsi = require('strip-ansi');
const keypress = require('./keypress');
const timer = require('./timer');
const State = require('./state');
const theme = require('./theme');
const utils = require('./utils');
const ansi = require('./ansi');

/**
 * Base class for creating a new Prompt.
 * @param {Object} `options` Question object.
 */

class Prompt extends Events {
  constructor(options = {}) {
    super();
    this.name = options.name;
    this.type = options.type;
    this.options = options;
    theme(this);
    timer(this);
    this.state = new State(this);
    this.initial = [options.initial, options.default].find(v => v != null);
    this.stdout = options.stdout || process.stdout;
    this.stdin = options.stdin || process.stdin;
    this.scale = options.scale || 1;
    this.term = this.options.term || process.env.TERM_PROGRAM;
    this.margin = margin(this.options.margin);
    this.setMaxListeners(0);
    setOptions(this);
  }

  async keypress(input, event = {}) {
    this.keypressed = true;
    let key = keypress.action(input, keypress(input, event), this.options.actions);
    this.state.keypress = key;
    this.emit('keypress', input, key);
    this.emit('state', this.state.clone());

    const fn = this.options[key.action] || this[key.action] || this.dispatch;

    if (typeof fn === 'function') {
      return await fn.call(this, input, key);
    }

    this.alert();
  }

  alert() {
    delete this.state.alert;
    if (this.options.show === false) {
      this.emit('alert');
    } else {
      this.stdout.write(ansi.code.beep);
    }
  }

  cursorHide() {
    this.stdout.write(ansi.cursor.hide());
    const releaseOnExit = utils.onExit(() => this.cursorShow());
    this.on('close', () => {
      this.cursorShow();
      releaseOnExit();
    });
  }

  cursorShow() {
    this.stdout.write(ansi.cursor.show());
  }

  write(str) {
    if (!str) return;
    if (this.stdout && this.state.show !== false) {
      this.stdout.write(str);
    }
    this.state.buffer += str;
  }

  clear(lines = 0) {
    let buffer = this.state.buffer;
    this.state.buffer = '';
    if ((!buffer && !lines) || this.options.show === false) return;
    this.stdout.write(ansi.cursor.down(lines) + ansi.clear(buffer, this.width));
  }

  restore() {
    if (this.state.closed || this.options.show === false) return;

    let { prompt, after, rest } = this.sections();
    let { cursor, initial = '', input = '', value = '' } = this;

    let size = this.state.size = rest.length;
    let state = { after, cursor, initial, input, prompt, size, value };
    let codes = ansi.cursor.restore(state);
    if (codes) {
      this.stdout.write(codes);
    }
  }

  sections() {
    let { buffer, input, prompt } = this.state;
    prompt = stripAnsi(prompt);
    let buf = stripAnsi(buffer);
    let idx = buf.indexOf(prompt);
    let header = buf.slice(0, idx);
    let rest = buf.slice(idx);
    let lines = rest.split('\n');
    let first = lines[0];
    let last = lines[lines.length - 1];
    let promptLine = prompt + (input ? ' ' + input : '');
    let len = promptLine.length;
    let after = len < first.length ? first.slice(len + 1) : '';
    return { header, prompt: first, after, rest: lines.slice(1), last };
  }

  async submit() {
    this.state.submitted = true;
    this.state.validating = true;

    // this will only be called when the prompt is directly submitted
    // without initializing, i.e. when the prompt is skipped, etc. Otherwize,
    // "options.onSubmit" is will be handled by the "initialize()" method.
    if (this.options.onSubmit) {
      await this.options.onSubmit.call(this, this.name, this.value, this);
    }

    let result = this.state.error || await this.validate(this.value, this.state);
    if (result !== true) {
      let error = '\n' + this.symbols.pointer + ' ';

      if (typeof result === 'string') {
        error += result.trim();
      } else {
        error += 'Invalid input';
      }

      this.state.error = '\n' + this.styles.danger(error);
      this.state.submitted = false;
      await this.render();
      await this.alert();
      this.state.validating = false;
      this.state.error = void 0;
      return;
    }

    this.state.validating = false;
    await this.render();
    await this.close();

    this.value = await this.result(this.value);
    this.emit('submit', this.value);
  }

  async cancel(err) {
    this.state.cancelled = this.state.submitted = true;

    await this.render();
    await this.close();

    if (typeof this.options.onCancel === 'function') {
      await this.options.onCancel.call(this, this.name, this.value, this);
    }

    this.emit('cancel', await this.error(err));
  }

  async close() {
    this.state.closed = true;

    try {
      let sections = this.sections();
      let lines = Math.ceil(sections.prompt.length / this.width);
      if (sections.rest) {
        this.write(ansi.cursor.down(sections.rest.length));
      }
      this.write('\n'.repeat(lines));
    } catch (err) { /* do nothing */ }

    this.emit('close');
  }

  start() {
    if (!this.stop && this.options.show !== false) {
      this.stop = keypress.listen(this, this.keypress.bind(this));
      this.once('close', this.stop);
      this.emit('start', this);
    }
  }

  async skip() {
    this.skipped = this.options.skip === true;
    if (typeof this.options.skip === 'function') {
      this.skipped = await this.options.skip.call(this, this.name, this.value);
    }
    return this.skipped;
  }

  async initialize() {
    let { format, options, result } = this;

    this.format = () => format.call(this, this.value);
    this.result = () => result.call(this, this.value);

    if (typeof options.initial === 'function') {
      this.initial = await options.initial.call(this, this);
    }

    if (typeof options.onRun === 'function') {
      await options.onRun.call(this, this);
    }

    // if "options.onSubmit" is defined, we wrap the "submit" method to guarantee
    // that "onSubmit" will always called first thing inside the submit
    // method, regardless of how it's handled in inheriting prompts.
    if (typeof options.onSubmit === 'function') {
      let onSubmit = options.onSubmit.bind(this);
      let submit = this.submit.bind(this);
      delete this.options.onSubmit;
      this.submit = async() => {
        await onSubmit(this.name, this.value, this);
        return submit();
      };
    }

    await this.start();
    await this.render();
  }

  render() {
    throw new Error('expected prompt to have a custom render method');
  }

  run() {
    return new Promise(async(resolve, reject) => {
      this.once('submit', resolve);
      this.once('cancel', reject);

      if (await this.skip()) {
        this.render = () => {};
        return this.submit();
      }

      await this.initialize();
      this.emit('run');
    });
  }

  async element(name, choice, i) {
    let { options, state, symbols, timers } = this;
    let timer = timers && timers[name];
    state.timer = timer;
    let value = options[name] || state[name] || symbols[name];
    let val = choice && choice[name] != null ? choice[name] : await value;
    if (val === '') return val;

    let res = await this.resolve(val, state, choice, i);
    if (!res && choice && choice[name]) {
      return this.resolve(value, state, choice, i);
    }
    return res;
  }

  async prefix() {
    let element = await this.element('prefix') || this.symbols;
    let timer = this.timers && this.timers.prefix;
    let state = this.state;
    state.timer = timer;
    if (utils.isObject(element)) element = element[state.status] || element.pending;
    if (!utils.hasColor(element)) {
      let style = this.styles[state.status] || this.styles.pending;
      return style(element);
    }
    return element;
  }

  async message() {
    let message = await this.element('message');
    if (!utils.hasColor(message)) {
      return this.styles.strong(message);
    }
    return message;
  }

  async separator() {
    let element = await this.element('separator') || this.symbols;
    let timer = this.timers && this.timers.separator;
    let state = this.state;
    state.timer = timer;
    let value = element[state.status] || element.pending || state.separator;
    let ele = await this.resolve(value, state);
    if (utils.isObject(ele)) ele = ele[state.status] || ele.pending;
    if (!utils.hasColor(ele)) {
      return this.styles.muted(ele);
    }
    return ele;
  }

  async pointer(choice, i) {
    let val = await this.element('pointer', choice, i);

    if (typeof val === 'string' && utils.hasColor(val)) {
      return val;
    }

    if (val) {
      let styles = this.styles;
      let focused = this.index === i;
      let style = focused ? styles.primary : val => val;
      let ele = await this.resolve(val[focused ? 'on' : 'off'] || val, this.state);
      let styled = !utils.hasColor(ele) ? style(ele) : ele;
      return focused ? styled : ' '.repeat(ele.length);
    }
  }

  async indicator(choice, i) {
    let val = await this.element('indicator', choice, i);
    if (typeof val === 'string' && utils.hasColor(val)) {
      return val;
    }

    if (val) {
      let styles = this.styles;
      let enabled = choice.enabled === true;
      let style = enabled ? styles.success : styles.dark;
      let ele = val[enabled ? 'on' : 'off'] || val;
      return !utils.hasColor(ele) ? style(ele) : ele;
    }

    return '';
  }

  body() {
    return null;
  }

  footer() {
    if (this.state.status === 'pending') {
      return this.element('footer');
    }
  }

  header() {
    if (this.state.status === 'pending') {
      return this.element('header');
    }
  }

  async hint() {
    if (this.state.status === 'pending' && !this.isValue(this.state.input)) {
      let hint = await this.element('hint');
      if (!utils.hasColor(hint)) {
        return this.styles.muted(hint);
      }
      return hint;
    }
  }

  error(err) {
    return !this.state.submitted ? (err || this.state.error) : '';
  }

  format(value) {
    return value;
  }

  result(value) {
    return value;
  }

  validate(value) {
    if (this.options.required === true) {
      return this.isValue(value);
    }
    return true;
  }

  isValue(value) {
    return value != null && value !== '';
  }

  resolve(value, ...args) {
    return utils.resolve(this, value, ...args);
  }

  get base() {
    return Prompt.prototype;
  }

  get style() {
    return this.styles[this.state.status];
  }

  get height() {
    return this.options.rows || utils.height(this.stdout, 25);
  }
  get width() {
    return this.options.columns || utils.width(this.stdout, 80);
  }
  get size() {
    return { width: this.width, height: this.height };
  }

  set cursor(value) {
    this.state.cursor = value;
  }
  get cursor() {
    return this.state.cursor;
  }

  set input(value) {
    this.state.input = value;
  }
  get input() {
    return this.state.input;
  }

  set value(value) {
    this.state.value = value;
  }
  get value() {
    let { input, value } = this.state;
    let result = [value, input].find(this.isValue.bind(this));
    return this.isValue(result) ? result : this.initial;
  }

  static get prompt() {
    return options => new this(options).run();
  }
}

function setOptions(prompt) {
  let isValidKey = key => {
    return prompt[key] === void 0 || typeof prompt[key] === 'function';
  };

  let ignore = [
    'actions',
    'choices',
    'initial',
    'margin',
    'roles',
    'styles',
    'symbols',
    'theme',
    'timers',
    'value'
  ];

  let ignoreFn = [
    'body',
    'footer',
    'error',
    'header',
    'hint',
    'indicator',
    'message',
    'prefix',
    'separator',
    'skip'
  ];

  for (let key of Object.keys(prompt.options)) {
    if (ignore.includes(key)) continue;
    if (/^on[A-Z]/.test(key)) continue;
    let option = prompt.options[key];
    if (typeof option === 'function' && isValidKey(key)) {
      if (!ignoreFn.includes(key)) {
        prompt[key] = option.bind(prompt);
      }
    } else if (typeof prompt[key] !== 'function') {
      prompt[key] = option;
    }
  }
}

function margin(value) {
  if (typeof value === 'number') {
    value = [value, value, value, value];
  }
  let arr = [].concat(value || []);
  let pad = i => i % 2 === 0 ? '\n' : ' ';
  let res = [];
  for (let i = 0; i < 4; i++) {
    let char = pad(i);
    if (arr[i]) {
      res.push(char.repeat(arr[i]));
    } else {
      res.push('');
    }
  }
  return res;
}

module.exports = Prompt;
