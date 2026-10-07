'use strict';

const stripAnsi = require('strip-ansi');
const ArrayPrompt = require('../types/array');
const utils = require('../utils');

class LikertScale extends ArrayPrompt {
  constructor(options = {}) {
    super(options);
    this.widths = [].concat(options.messageWidth || 50);
    this.align = [].concat(options.align || 'left');
    this.linebreak = options.linebreak || false;
    this.edgeLength = options.edgeLength || 3;
    this.newline = options.newline || '\n   ';
    let start = options.startNumber || 1;
    if (typeof this.scale === 'number') {
      this.scaleKey = false;
      this.scale = Array(this.scale).fill(0).map((v, i) => ({ name: i + start }));
    }
  }

  async reset() {
    this.tableized = false;
    await super.reset();
    return this.render();
  }

  tableize() {
    if (this.tableized === true) return;
    this.tableized = true;
    let longest = 0;

    for (let ch of this.choices) {
      longest = Math.max(longest, ch.message.length);
      ch.scaleIndex = ch.initial || 2;
      ch.scale = [];

      for (let i = 0; i < this.scale.length; i++) {
        ch.scale.push({ index: i });
      }
    }
    this.widths[0] = Math.min(this.widths[0], longest + 3);
  }

  async dispatch(s, key) {
    if (this.multiple) {
      return this[key.name] ? await this[key.name](s, key) : await super.dispatch(s, key);
    }
    this.alert();
  }

  heading(msg, item, i) {
    return this.styles.strong(msg);
  }

  separator() {
    return this.styles.muted(this.symbols.ellipsis);
  }

  right() {
    let choice = this.focused;
    if (choice.scaleIndex >= this.scale.length - 1) return this.alert();
    choice.scaleIndex++;
    return this.render();
  }

  left() {
    let choice = this.focused;
    if (choice.scaleIndex <= 0) return this.alert();
    choice.scaleIndex--;
    return this.render();
  }

  indent() {
    return '';
  }

  format() {
    if (this.state.submitted) {
      let values = this.choices.map(ch => this.styles.info(ch.index));
      return values.join(', ');
    }
    return '';
  }

  pointer() {
    return '';
  }

  /**
   * Render the scale "Key". Something like:
   * @return {String}
   */

  renderScaleKey() {
    if (this.scaleKey === false) return '';
    if (this.state.submitted) return '';
    let scale = this.scale.map(item => `   ${item.name} - ${item.message}`);
    let key = ['', ...scale].map(item => this.styles.muted(item));
    return key.join('\n');
  }

  /**
   * Render the heading row for the scale.
   * @return {String}
   */

  renderScaleHeading(max) {
    let keys = this.scale.map(ele => ele.name);
    if (typeof this.options.renderScaleHeading === 'function') {
      keys = this.options.renderScaleHeading.call(this, max);
    }
    let diff = this.scaleLength - keys.join('').length;
    let spacing = Math.round(diff / (keys.length - 1));
    let names = keys.map(key => this.styles.strong(key));
    let headings = names.join(' '.repeat(spacing));
    let padding = ' '.repeat(this.widths[0]);
    return this.margin[3] + padding + this.margin[1] + headings;
  }

  /**
   * Render a scale indicator => ◯ or ◉ by default
   */

  scaleIndicator(choice, item, i) {
    if (typeof this.options.scaleIndicator === 'function') {
      return this.options.scaleIndicator.call(this, choice, item, i);
    }
    let enabled = choice.scaleIndex === item.index;
    if (item.disabled) return this.styles.hint(this.symbols.radio.disabled);
    if (enabled) return this.styles.success(this.symbols.radio.on);
    return this.symbols.radio.off;
  }

  /**
   * Render the actual scale => ◯────◯────◉────◯────◯
   */

  renderScale(choice, i) {
    let scale = choice.scale.map(item => this.scaleIndicator(choice, item, i));
    let padding = this.term === 'Hyper' ? '' : ' ';
    return scale.join(padding + this.symbols.line.repeat(this.edgeLength));
  }

  /**
   * Render a choice, including scale =>
   *   "The website is easy to navigate. ◯───◯───◉───◯───◯"
   */

  async renderChoice(choice, i) {
    await this.onChoice(choice, i);

    let focused = this.index === i;
    let pointer = await this.pointer(choice, i);
    let hint = await choice.hint;

    if (hint && !utils.hasColor(hint)) {
      hint = this.styles.muted(hint);
    }

    let pad = str => this.margin[3] + str.replace(/\s+$/, '').padEnd(this.widths[0], ' ');
    let newline = this.newline;
    let ind = this.indent(choice);
    let message = await this.resolve(choice.message, this.state, choice, i);
    let scale = await this.renderScale(choice, i);
    let margin = this.margin[1] + this.margin[3];
    this.scaleLength = stripAnsi(scale).length;
    this.widths[0] = Math.min(this.widths[0], this.width - this.scaleLength - margin.length);
    let msg = utils.wordWrap(message, { width: this.widths[0], newline });
    let lines = msg.split('\n').map(line => pad(line) + this.margin[1]);

    if (focused) {
      scale = this.styles.info(scale);
      lines = lines.map(line => this.styles.info(line));
    }

    lines[0] += scale;

    if (this.linebreak) lines.push('');
    return [ind + pointer, lines.join('\n')].filter(Boolean);
  }

  async renderChoices() {
    if (this.state.submitted) return '';
    this.tableize();
    let choices = this.visible.map(async(ch, i) => await this.renderChoice(ch, i));
    let visible = await Promise.all(choices);
    let heading = await this.renderScaleHeading();
    return this.margin[0] + [heading, ...visible.map(v => v.join(' '))].join('\n');
  }

  async render() {
    let { submitted, size } = this.state;

    let prefix = await this.prefix();
    let separator = await this.separator();
    let message = await this.message();

    let prompt = '';
    if (this.options.promptLine !== false) {
      prompt = [prefix, message, separator, ''].join(' ');
      this.state.prompt = prompt;
    }

    let header = await this.header();
    let output = await this.format();
    let key = await this.renderScaleKey();
    let help = await this.error() || await this.hint();
    let body = await this.renderChoices();
    let footer = await this.footer();
    let err = this.emptyError;

    if (output) prompt += output;
    if (help && !prompt.includes(help)) prompt += ' ' + help;

    if (submitted && !output && !body.trim() && this.multiple && err != null) {
      prompt += this.styles.danger(err);
    }

    this.clear(size);
    this.write([header, prompt, key, body, footer].filter(Boolean).join('\n'));
    if (!this.state.submitted) {
      this.write(this.margin[2]);
    }
    this.restore();
  }

  submit() {
    this.value = {};
    for (let choice of this.choices) {
      this.value[choice.name] = choice.scaleIndex;
    }
    return this.base.submit.call(this);
  }
}

module.exports = LikertScale;
