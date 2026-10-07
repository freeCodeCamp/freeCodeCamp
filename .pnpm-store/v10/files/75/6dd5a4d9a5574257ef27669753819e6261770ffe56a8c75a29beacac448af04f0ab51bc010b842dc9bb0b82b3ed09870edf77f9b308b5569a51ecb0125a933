'use strict';

const color = require('kleur');

const _require = require('sisteransi'),
      cursor = _require.cursor;

const MultiselectPrompt = require('./multiselect');

const _require2 = require('../util'),
      clear = _require2.clear,
      style = _require2.style,
      figures = _require2.figures;
/**
 * MultiselectPrompt Base Element
 * @param {Object} opts Options
 * @param {String} opts.message Message
 * @param {Array} opts.choices Array of choice objects
 * @param {String} [opts.hint] Hint to display
 * @param {String} [opts.warn] Hint shown for disabled choices
 * @param {Number} [opts.max] Max choices
 * @param {Number} [opts.cursor=0] Cursor start position
 * @param {Stream} [opts.stdin] The Readable stream to listen to
 * @param {Stream} [opts.stdout] The Writable stream to write readline data to
 */


class AutocompleteMultiselectPrompt extends MultiselectPrompt {
  constructor(opts = {}) {
    opts.overrideRender = true;
    super(opts);
    this.inputValue = '';
    this.clear = clear('', this.out.columns);
    this.filteredOptions = this.value;
    this.render();
  }

  last() {
    this.cursor = this.filteredOptions.length - 1;
    this.render();
  }

  next() {
    this.cursor = (this.cursor + 1) % this.filteredOptions.length;
    this.render();
  }

  up() {
    if (this.cursor === 0) {
      this.cursor = this.filteredOptions.length - 1;
    } else {
      this.cursor--;
    }

    this.render();
  }

  down() {
    if (this.cursor === this.filteredOptions.length - 1) {
      this.cursor = 0;
    } else {
      this.cursor++;
    }

    this.render();
  }

  left() {
    this.filteredOptions[this.cursor].selected = false;
    this.render();
  }

  right() {
    if (this.value.filter(e => e.selected).length >= this.maxChoices) return this.bell();
    this.filteredOptions[this.cursor].selected = true;
    this.render();
  }

  delete() {
    if (this.inputValue.length) {
      this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
      this.updateFilteredOptions();
    }
  }

  updateFilteredOptions() {
    const currentHighlight = this.filteredOptions[this.cursor];
    this.filteredOptions = this.value.filter(v => {
      if (this.inputValue) {
        if (typeof v.title === 'string') {
          if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
            return true;
          }
        }

        if (typeof v.value === 'string') {
          if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
            return true;
          }
        }

        return false;
      }

      return true;
    });
    const newHighlightIndex = this.filteredOptions.findIndex(v => v === currentHighlight);
    this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
    this.render();
  }

  handleSpaceToggle() {
    const v = this.filteredOptions[this.cursor];

    if (v.selected) {
      v.selected = false;
      this.render();
    } else if (v.disabled || this.value.filter(e => e.selected).length >= this.maxChoices) {
      return this.bell();
    } else {
      v.selected = true;
      this.render();
    }
  }

  handleInputChange(c) {
    this.inputValue = this.inputValue + c;
    this.updateFilteredOptions();
  }

  _(c, key) {
    if (c === ' ') {
      this.handleSpaceToggle();
    } else {
      this.handleInputChange(c);
    }
  }

  renderInstructions() {
    if (this.instructions === undefined || this.instructions) {
      if (typeof this.instructions === 'string') {
        return this.instructions;
      }

      return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
    }

    return '';
  }

  renderCurrentInput() {
    return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray('Enter something to filter')}\n`;
  }

  renderOption(cursor, v, i) {
    let title;
    if (v.disabled) title = cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);else title = cursor === i ? color.cyan().underline(v.title) : v.title;
    return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + '  ' + title;
  }

  renderDoneOrInstructions() {
    if (this.done) {
      return this.value.filter(e => e.selected).map(v => v.title).join(', ');
    }

    const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];

    if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
      output.push(color.yellow(this.warn));
    }

    return output.join(' ');
  }

  render() {
    if (this.closed) return;
    if (this.firstRender) this.out.write(cursor.hide);
    super.render(); // print prompt

    let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(' ');

    if (this.showMinError) {
      prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
      this.showMinError = false;
    }

    prompt += this.renderOptions(this.filteredOptions);
    this.out.write(this.clear + prompt);
    this.clear = clear(prompt, this.out.columns);
  }

}

module.exports = AutocompleteMultiselectPrompt;