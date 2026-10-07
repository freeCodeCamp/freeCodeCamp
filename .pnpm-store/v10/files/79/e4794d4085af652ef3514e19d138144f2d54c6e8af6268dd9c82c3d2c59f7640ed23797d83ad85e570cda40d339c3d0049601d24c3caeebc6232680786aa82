'use strict';

const stripAnsi = require('strip-ansi');
const Prompt = require('../prompt');
const roles = require('../roles');
const utils = require('../utils');
const { reorder, scrollUp, scrollDown, isObject, swap } = utils;

class ArrayPrompt extends Prompt {
  constructor(options) {
    super(options);
    this.cursorHide();
    this.maxSelected = options.maxSelected || Infinity;
    this.multiple = options.multiple || false;
    this.initial = options.initial || 0;
    this.delay = options.delay || 0;
    this.longest = 0;
    this.num = '';
  }

  async initialize() {
    if (typeof this.options.initial === 'function') {
      this.initial = await this.options.initial.call(this);
    }
    await this.reset(true);
    await super.initialize();
  }

  async reset() {
    let { choices, initial, autofocus, suggest } = this.options;
    this.state._choices = [];
    this.state.choices = [];

    this.choices = await Promise.all(await this.toChoices(choices));
    this.choices.forEach(ch => (ch.enabled = false));

    if (typeof suggest !== 'function' && this.selectable.length === 0) {
      throw new Error('At least one choice must be selectable');
    }

    if (isObject(initial)) initial = Object.keys(initial);
    if (Array.isArray(initial)) {
      if (autofocus != null) this.index = this.findIndex(autofocus);
      initial.forEach(v => this.enable(this.find(v)));
      await this.render();
    } else {
      if (autofocus != null) initial = autofocus;
      if (typeof initial === 'string') initial = this.findIndex(initial);
      if (typeof initial === 'number' && initial > -1) {
        this.index = Math.max(0, Math.min(initial, this.choices.length));
        this.enable(this.find(this.index));
      }
    }

    if (this.isDisabled(this.focused)) {
      await this.down();
    }
  }

  async toChoices(value, parent) {
    this.state.loadingChoices = true;
    let choices = [];
    let index = 0;

    let toChoices = async(items, parent) => {
      if (typeof items === 'function') items = await items.call(this);
      if (items instanceof Promise) items = await items;

      for (let i = 0; i < items.length; i++) {
        let choice = items[i] = await this.toChoice(items[i], index++, parent);
        choices.push(choice);

        if (choice.choices) {
          await toChoices(choice.choices, choice);
        }
      }
      return choices;
    };

    return toChoices(value, parent)
      .then(choices => {
        this.state.loadingChoices = false;
        return choices;
      });
  }

  async toChoice(ele, i, parent) {
    if (typeof ele === 'function') ele = await ele.call(this, this);
    if (ele instanceof Promise) ele = await ele;
    if (typeof ele === 'string') ele = { name: ele };

    if (ele.normalized) return ele;
    ele.normalized = true;

    let origVal = ele.value;
    let role = roles(ele.role, this.options);
    ele = role(this, ele);

    if (typeof ele.disabled === 'string' && !ele.hint) {
      ele.hint = ele.disabled;
      ele.disabled = true;
    }

    if (ele.disabled === true && ele.hint == null) {
      ele.hint = '(disabled)';
    }

    // if the choice was already normalized, return it
    if (ele.index != null) return ele;
    ele.name = ele.name || ele.key || ele.title || ele.value || ele.message;
    ele.message = ele.message || ele.name || '';
    ele.value = [ele.value, ele.name].find(this.isValue.bind(this));

    ele.input = '';
    ele.index = i;
    ele.cursor = 0;

    utils.define(ele, 'parent', parent);
    ele.level = parent ? parent.level + 1 : 1;
    if (ele.indent == null) {
      ele.indent = parent ? parent.indent + '  ' : (ele.indent || '');
    }

    ele.path = parent ? parent.path + '.' + ele.name : ele.name;
    ele.enabled = !!(this.multiple && !this.isDisabled(ele) && (ele.enabled || this.isSelected(ele)));

    if (!this.isDisabled(ele)) {
      this.longest = Math.max(this.longest, stripAnsi(ele.message).length);
    }

    // shallow clone the choice first
    let choice = { ...ele };

    // then allow the choice to be reset using the "original" values
    ele.reset = (input = choice.input, value = choice.value) => {
      for (let key of Object.keys(choice)) ele[key] = choice[key];
      ele.input = input;
      ele.value = value;
    };

    if (origVal == null && typeof ele.initial === 'function') {
      ele.input = await ele.initial.call(this, this.state, ele, i);
    }

    return ele;
  }

  async onChoice(choice, i) {
    this.emit('choice', choice, i, this);

    if (typeof choice.onChoice === 'function') {
      await choice.onChoice.call(this, this.state, choice, i);
    }
  }

  async addChoice(ele, i, parent) {
    let choice = await this.toChoice(ele, i, parent);
    this.choices.push(choice);
    this.index = this.choices.length - 1;
    this.limit = this.choices.length;
    return choice;
  }

  async newItem(item, i, parent) {
    let ele = { name: 'New choice name?', editable: true, newChoice: true, ...item };
    let choice = await this.addChoice(ele, i, parent);

    choice.updateChoice = () => {
      delete choice.newChoice;
      choice.name = choice.message = choice.input;
      choice.input = '';
      choice.cursor = 0;
    };

    return this.render();
  }

  indent(choice) {
    if (choice.indent == null) {
      return choice.level > 1 ? '  '.repeat(choice.level - 1) : '';
    }
    return choice.indent;
  }

  dispatch(s, key) {
    if (this.multiple && this[key.name]) return this[key.name]();
    this.alert();
  }

  focus(choice, enabled) {
    if (typeof enabled !== 'boolean') enabled = choice.enabled;
    if (enabled && !choice.enabled && this.selected.length >= this.maxSelected) {
      return this.alert();
    }
    this.index = choice.index;
    choice.enabled = enabled && !this.isDisabled(choice);
    return choice;
  }

  space() {
    if (!this.multiple) return this.alert();
    if (!this.focused) return;
    this.toggle(this.focused);
    return this.render();
  }

  a() {
    if (this.maxSelected < this.choices.length) return this.alert();
    let enabled = this.selectable.every(ch => ch.enabled);
    this.choices.forEach(ch => (ch.enabled = !enabled));
    return this.render();
  }

  i() {
    // don't allow choices to be inverted if it will result in
    // more than the maximum number of allowed selected items.
    if (this.choices.length - this.selected.length > this.maxSelected) {
      return this.alert();
    }
    this.choices.forEach(ch => (ch.enabled = !ch.enabled));
    return this.render();
  }

  g() {
    if (!this.choices.some(ch => !!ch.parent)) return this.a();
    const focused = this.focused;
    this.toggle((focused.parent && !focused.choices) ? focused.parent : focused);
    return this.render();
  }

  toggle(choice, enabled) {
    if (!choice.enabled && this.selected.length >= this.maxSelected) {
      return this.alert();
    }

    if (typeof enabled !== 'boolean') enabled = !choice.enabled;
    choice.enabled = enabled;

    if (choice.choices) {
      choice.choices.forEach(ch => this.toggle(ch, enabled));
    }

    let parent = choice.parent;
    while (parent) {
      let choices = parent.choices.filter(ch => this.isDisabled(ch));
      parent.enabled = choices.every(ch => ch.enabled === true);
      parent = parent.parent;
    }

    reset(this, this.choices);
    this.emit('toggle', choice, this);
    return choice;
  }

  enable(choice) {
    if (this.selected.length >= this.maxSelected) return this.alert();
    choice.enabled = !this.isDisabled(choice);
    choice.choices && choice.choices.forEach(this.enable.bind(this));
    return choice;
  }

  disable(choice) {
    choice.enabled = false;
    choice.choices && choice.choices.forEach(this.disable.bind(this));
    return choice;
  }

  number(n) {
    this.num += n;

    let number = num => {
      let i = Number(num);
      if (i > this.choices.length - 1) return this.alert();

      let focused = this.focused;
      let choice = this.choices.find(ch => i === ch.index);

      if (!choice.enabled && this.selected.length >= this.maxSelected) {
        return this.alert();
      }

      if (this.visible.indexOf(choice) === -1) {
        let choices = reorder(this.choices);
        let actualIdx = choices.indexOf(choice);

        if (focused.index > actualIdx) {
          let start = choices.slice(actualIdx, actualIdx + this.limit);
          let end = choices.filter(ch => !start.includes(ch));
          this.choices = start.concat(end);
        } else {
          let pos = actualIdx - this.limit + 1;
          this.choices = choices.slice(pos).concat(choices.slice(0, pos));
        }
      }

      this.index = this.choices.indexOf(choice);
      this.toggle(this.focused);
      return this.render();
    };

    clearTimeout(this.numberTimeout);

    return new Promise(resolve => {
      let len = this.choices.length;
      let num = this.num;

      let handle = (val = false, res) => {
        clearTimeout(this.numberTimeout);
        if (val) res = number(num);
        this.num = '';
        resolve(res);
      };

      if (num === '0' || (num.length === 1 && Number(num + '0') > len)) {
        return handle(true);
      }

      if (Number(num) > len) {
        return handle(false, this.alert());
      }

      this.numberTimeout = setTimeout(() => handle(true), this.delay);
    });
  }

  home() {
    this.choices = reorder(this.choices);
    this.index = 0;
    return this.render();
  }

  end() {
    let pos = this.choices.length - this.limit;
    let choices = reorder(this.choices);
    this.choices = choices.slice(pos).concat(choices.slice(0, pos));
    this.index = this.limit - 1;
    return this.render();
  }

  first() {
    this.index = 0;
    return this.render();
  }

  last() {
    this.index = this.visible.length - 1;
    return this.render();
  }

  prev() {
    if (this.visible.length <= 1) return this.alert();
    return this.up();
  }

  next() {
    if (this.visible.length <= 1) return this.alert();
    return this.down();
  }

  right() {
    if (this.cursor >= this.input.length) return this.alert();
    this.cursor++;
    return this.render();
  }

  left() {
    if (this.cursor <= 0) return this.alert();
    this.cursor--;
    return this.render();
  }

  up() {
    let len = this.choices.length;
    let vis = this.visible.length;
    let idx = this.index;
    if (this.options.scroll === false && idx === 0) {
      return this.alert();
    }
    if (len > vis && idx === 0) {
      return this.scrollUp();
    }
    this.index = ((idx - 1 % len) + len) % len;
    if (this.isDisabled() && !this.allChoicesAreDisabled()) {
      return this.up();
    }
    return this.render();
  }

  down() {
    let len = this.choices.length;
    let vis = this.visible.length;
    let idx = this.index;
    if (this.options.scroll === false && idx === vis - 1) {
      return this.alert();
    }
    if (len > vis && idx === vis - 1) {
      return this.scrollDown();
    }
    this.index = (idx + 1) % len;
    if (this.isDisabled() && !this.allChoicesAreDisabled()) {
      return this.down();
    }
    return this.render();
  }

  scrollUp(i = 0) {
    this.choices = scrollUp(this.choices);
    this.index = i;
    if (this.isDisabled()) {
      return this.up();
    }
    return this.render();
  }

  scrollDown(i = this.visible.length - 1) {
    this.choices = scrollDown(this.choices);
    this.index = i;
    if (this.isDisabled()) {
      return this.down();
    }
    return this.render();
  }

  async shiftUp() {
    if (this.options.sort === true) {
      this.sorting = true;
      this.swap(this.index - 1);
      await this.up();
      this.sorting = false;
      return;
    }
    return this.scrollUp(this.index);
  }

  async shiftDown() {
    if (this.options.sort === true) {
      this.sorting = true;
      this.swap(this.index + 1);
      await this.down();
      this.sorting = false;
      return;
    }
    return this.scrollDown(this.index);
  }

  pageUp() {
    if (this.visible.length <= 1) return this.alert();
    this.limit = Math.max(this.limit - 1, 0);
    this.index = Math.min(this.limit - 1, this.index);
    this._limit = this.limit;
    if (this.isDisabled()) {
      return this.up();
    }
    return this.render();
  }

  pageDown() {
    if (this.visible.length >= this.choices.length) return this.alert();
    this.index = Math.max(0, this.index);
    this.limit = Math.min(this.limit + 1, this.choices.length);
    this._limit = this.limit;
    if (this.isDisabled()) {
      return this.down();
    }
    return this.render();
  }

  swap(pos) {
    swap(this.choices, this.index, pos);
  }

  allChoicesAreDisabled(choices = this.choices) {
    return choices.every(choice => this.isDisabled(choice));
  }

  isDisabled(choice = this.focused) {
    let keys = ['disabled', 'collapsed', 'hidden', 'completing', 'readonly'];
    if (choice && keys.some(key => choice[key] === true)) {
      return true;
    }
    return choice && choice.role === 'heading';
  }

  isEnabled(choice = this.focused) {
    if (Array.isArray(choice)) return choice.every(ch => this.isEnabled(ch));
    if (choice.choices) {
      let choices = choice.choices.filter(ch => !this.isDisabled(ch));
      return choice.enabled && choices.every(ch => this.isEnabled(ch));
    }
    return choice.enabled && !this.isDisabled(choice);
  }

  isChoice(choice, value) {
    return choice.name === value || choice.index === Number(value);
  }

  isSelected(choice) {
    if (Array.isArray(this.initial)) {
      return this.initial.some(value => this.isChoice(choice, value));
    }
    return this.isChoice(choice, this.initial);
  }

  map(names = [], prop = 'value') {
    return [].concat(names || []).reduce((acc, name) => {
      acc[name] = this.find(name, prop);
      return acc;
    }, {});
  }

  filter(value, prop) {
    let isChoice = (ele, i) => [ele.name, i].includes(value);
    let fn = typeof value === 'function' ? value : isChoice;
    let choices = this.options.multiple ? this.state._choices : this.choices;
    let result = choices.filter(fn);
    if (prop) {
      return result.map(ch => ch[prop]);
    }
    return result;
  }

  find(value, prop) {
    if (isObject(value)) return prop ? value[prop] : value;
    let isChoice = (ele, i) => [ele.name, i].includes(value);
    let fn = typeof value === 'function' ? value : isChoice;
    let choice = this.choices.find(fn);
    if (choice) {
      return prop ? choice[prop] : choice;
    }
  }

  findIndex(value) {
    return this.choices.indexOf(this.find(value));
  }

  async submit() {
    let choice = this.focused;
    if (!choice) return this.alert();

    if (choice.newChoice) {
      if (!choice.input) return this.alert();
      choice.updateChoice();
      return this.render();
    }

    if (this.choices.some(ch => ch.newChoice)) {
      return this.alert();
    }

    let { reorder, sort } = this.options;
    let multi = this.multiple === true;
    let value = this.selected;
    if (value === void 0) {
      return this.alert();
    }

    // re-sort choices to original order
    if (Array.isArray(value) && reorder !== false && sort !== true) {
      value = utils.reorder(value);
    }

    this.value = multi ? value.map(ch => ch.name) : value.name;
    return super.submit();
  }

  set choices(choices = []) {
    this.state._choices = this.state._choices || [];
    this.state.choices = choices;

    for (let choice of choices) {
      if (!this.state._choices.some(ch => ch.name === choice.name)) {
        this.state._choices.push(choice);
      }
    }

    if (!this._initial && this.options.initial) {
      this._initial = true;
      let init = this.initial;
      if (typeof init === 'string' || typeof init === 'number') {
        let choice = this.find(init);
        if (choice) {
          this.initial = choice.index;
          this.focus(choice, true);
        }
      }
    }
  }
  get choices() {
    return reset(this, this.state.choices || []);
  }

  set visible(visible) {
    this.state.visible = visible;
  }
  get visible() {
    return (this.state.visible || this.choices).slice(0, this.limit);
  }

  set limit(num) {
    this.state.limit = num;
  }
  get limit() {
    let { state, options, choices } = this;
    let limit = state.limit || this._limit || options.limit || choices.length;
    return Math.min(limit, this.height);
  }

  set value(value) {
    super.value = value;
  }
  get value() {
    if (typeof super.value !== 'string' && super.value === this.initial) {
      return this.input;
    }
    return super.value;
  }

  set index(i) {
    this.state.index = i;
  }
  get index() {
    return Math.max(0, this.state ? this.state.index : 0);
  }

  get enabled() {
    return this.filter(this.isEnabled.bind(this));
  }

  get focused() {
    let choice = this.choices[this.index];
    if (choice && this.state.submitted && this.multiple !== true) {
      choice.enabled = true;
    }
    return choice;
  }

  get selectable() {
    return this.choices.filter(choice => !this.isDisabled(choice));
  }

  get selected() {
    return this.multiple ? this.enabled : this.focused;
  }
}

function reset(prompt, choices) {
  if (choices instanceof Promise) return choices;
  if (typeof choices === 'function') {
    if (utils.isAsyncFn(choices)) return choices;
    choices = choices.call(prompt, prompt);
  }
  for (let choice of choices) {
    if (Array.isArray(choice.choices)) {
      let items = choice.choices.filter(ch => !prompt.isDisabled(ch));
      choice.enabled = items.every(ch => ch.enabled === true);
    }
    if (prompt.isDisabled(choice) === true) {
      delete choice.enabled;
    }
  }
  return choices;
}

module.exports = ArrayPrompt;
