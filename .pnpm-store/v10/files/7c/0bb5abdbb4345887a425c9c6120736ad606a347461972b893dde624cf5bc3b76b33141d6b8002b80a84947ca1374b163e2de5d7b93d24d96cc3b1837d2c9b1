'use strict';

const Select = require('./select');
const Form = require('./form');
const form = Form.prototype;

class Editable extends Select {
  constructor(options) {
    super({ ...options, multiple: true });
    this.align = [this.options.align, 'left'].find(v => v != null);
    this.emptyError = '';
    this.values = {};
  }

  dispatch(char, key) {
    let choice = this.focused;
    let parent = choice.parent || {};
    if (!choice.editable && !parent.editable) {
      if (char === 'a' || char === 'i') return super[char]();
    }
    return form.dispatch.call(this, char, key);
  }

  append(char, key) {
    return form.append.call(this, char, key);
  }

  delete(char, key) {
    return form.delete.call(this, char, key);
  }

  space(char) {
    return this.focused.editable ? this.append(char) : super.space();
  }

  number(char) {
    return this.focused.editable ? this.append(char) : super.number(char);
  }

  next() {
    return this.focused.editable ? form.next.call(this) : super.next();
  }

  prev() {
    return this.focused.editable ? form.prev.call(this) : super.prev();
  }

  async indicator(choice, i) {
    let symbol = choice.indicator || '';
    let value = choice.editable ? symbol : super.indicator(choice, i);
    return await this.resolve(value, this.state, choice, i) || '';
  }

  indent(choice) {
    return choice.role === 'heading' ? '' : (choice.editable ? ' ' : '  ');
  }

  async renderChoice(choice, i) {
    choice.indent = '';
    if (choice.editable) return form.renderChoice.call(this, choice, i);
    return super.renderChoice(choice, i);
  }

  error() {
    return '';
  }

  footer() {
    return this.state.error;
  }

  async validate() {
    let result = true;

    for (let choice of this.choices) {
      if (typeof choice.validate !== 'function') {
        continue;
      }

      if (choice.role === 'heading') {
        continue;
      }

      let val = choice.parent ? this.value[choice.parent.name] : this.value;

      if (choice.editable) {
        val = choice.value === choice.name ? choice.initial || '' : choice.value;
      } else if (!this.isDisabled(choice)) {
        val = choice.enabled === true;
      }

      result = await choice.validate(val, this.state);

      if (result !== true) {
        break;
      }
    }

    if (result !== true) {
      this.state.error = typeof result === 'string' ? result : 'Invalid Input';
    }

    return result;
  }

  submit() {
    if (this.focused.newChoice === true) return super.submit();
    if (this.choices.some(ch => ch.newChoice)) {
      return this.alert();
    }

    this.value = {};

    for (let choice of this.choices) {
      let val = choice.parent ? this.value[choice.parent.name] : this.value;

      if (choice.role === 'heading') {
        this.value[choice.name] = {};
        continue;
      }

      if (choice.editable) {
        val[choice.name] = choice.value === choice.name
          ? (choice.initial || '')
          : choice.value;

      } else if (!this.isDisabled(choice)) {
        val[choice.name] = choice.enabled === true;
      }
    }

    return this.base.submit.call(this);
  }
}

module.exports = Editable;
