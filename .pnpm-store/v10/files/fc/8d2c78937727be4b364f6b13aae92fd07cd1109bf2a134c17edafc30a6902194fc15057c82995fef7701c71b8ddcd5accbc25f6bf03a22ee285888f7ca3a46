'use strict';

const stripAnsi = require('strip-ansi');
const clean = (str = '') => {
  return typeof str === 'string' ? str.replace(/^['"]|['"]$/g, '') : '';
};

/**
 * This file contains the interpolation and rendering logic for
 * the Snippet prompt.
 */

class Item {
  constructor(token) {
    this.name = token.key;
    this.field = token.field || {};
    this.value = clean(token.initial || this.field.initial || '');
    this.message = token.message || this.name;
    this.cursor = 0;
    this.input = '';
    this.lines = [];
  }
}

const tokenize = async(options = {}, defaults = {}, fn = token => token) => {
  let unique = new Set();
  let fields = options.fields || [];
  let input = options.template;
  let tabstops = [];
  let items = [];
  let keys = [];
  let line = 1;

  if (typeof input === 'function') {
    input = await input();
  }

  let i = -1;
  let next = () => input[++i];
  let peek = () => input[i + 1];
  let push = token => {
    token.line = line;
    tabstops.push(token);
  };

  push({ type: 'bos', value: '' });

  while (i < input.length - 1) {
    let value = next();

    if (/^[^\S\n ]$/.test(value)) {
      push({ type: 'text', value });
      continue;
    }

    if (value === '\n') {
      push({ type: 'newline', value });
      line++;
      continue;
    }

    if (value === '\\') {
      value += next();
      push({ type: 'text', value });
      continue;
    }

    if ((value === '$' || value === '#' || value === '{') && peek() === '{') {
      let n = next();
      value += n;

      let token = { type: 'template', open: value, inner: '', close: '', value };
      let ch;

      while ((ch = next())) {
        if (ch === '}') {
          if (peek() === '}') ch += next();
          token.value += ch;
          token.close = ch;
          break;
        }

        if (ch === ':') {
          token.initial = '';
          token.key = token.inner;
        } else if (token.initial !== void 0) {
          token.initial += ch;
        }

        token.value += ch;
        token.inner += ch;
      }

      token.template = token.open + (token.initial || token.inner) + token.close;
      token.key = token.key || token.inner;

      if (hasOwnProperty.call(defaults, token.key)) {
        token.initial = defaults[token.key];
      }

      token = fn(token);
      push(token);

      keys.push(token.key);
      unique.add(token.key);

      let item = items.find(item => item.name === token.key);
      token.field = fields.find(ch => ch.name === token.key);

      if (!item) {
        item = new Item(token);
        items.push(item);
      }

      item.lines.push(token.line - 1);
      continue;
    }

    let last = tabstops[tabstops.length - 1];
    if (last.type === 'text' && last.line === line) {
      last.value += value;
    } else {
      push({ type: 'text', value });
    }
  }

  push({ type: 'eos', value: '' });
  return { input, tabstops, unique, keys, items };
};

module.exports = async prompt => {
  let options = prompt.options;
  let required = new Set(options.required === true ? [] : (options.required || []));
  let defaults = { ...options.values, ...options.initial };
  let { tabstops, items, keys } = await tokenize(options, defaults);

  let result = createFn('result', prompt, options);
  let format = createFn('format', prompt, options);
  let isValid = createFn('validate', prompt, options, true);
  let isVal = prompt.isValue.bind(prompt);

  return async(state = {}, submitted = false) => {
    let index = 0;

    state.required = required;
    state.items = items;
    state.keys = keys;
    state.output = '';

    let validate = async(value, state, item, index) => {
      let error = await isValid(value, state, item, index);
      if (error === false) {
        return 'Invalid field ' + item.name;
      }
      return error;
    };

    for (let token of tabstops) {
      let value = token.value;
      let key = token.key;

      if (token.type !== 'template') {
        if (value) state.output += value;
        continue;
      }

      if (token.type === 'template') {
        let item = items.find(ch => ch.name === key);

        if (options.required === true) {
          state.required.add(item.name);
        }

        let val = [item.input, state.values[item.value], item.value, value].find(isVal);
        let field = item.field || {};
        let message = field.message || token.inner;

        if (submitted) {
          let error = await validate(state.values[key], state, item, index);
          if ((error && typeof error === 'string') || error === false) {
            state.invalid.set(key, error);
            continue;
          }

          state.invalid.delete(key);
          let res = await result(state.values[key], state, item, index);
          state.output += stripAnsi(res);
          continue;
        }

        item.placeholder = false;

        let before = value;
        value = await format(value, state, item, index);

        if (val !== value) {
          state.values[key] = val;
          value = prompt.styles.typing(val);
          state.missing.delete(message);

        } else {
          state.values[key] = void 0;
          val = `<${message}>`;
          value = prompt.styles.primary(val);
          item.placeholder = true;

          if (state.required.has(key)) {
            state.missing.add(message);
          }
        }

        if (state.missing.has(message) && state.validating) {
          value = prompt.styles.warning(val);
        }

        if (state.invalid.has(key) && state.validating) {
          value = prompt.styles.danger(val);
        }

        if (index === state.index) {
          if (before !== value) {
            value = prompt.styles.underline(value);
          } else {
            value = prompt.styles.heading(stripAnsi(value));
          }
        }

        index++;
      }

      if (value) {
        state.output += value;
      }
    }

    let lines = state.output.split('\n').map(l => ' ' + l);
    let len = items.length;
    let done = 0;

    for (let item of items) {
      if (state.invalid.has(item.name)) {
        item.lines.forEach(i => {
          if (lines[i][0] !== ' ') return;
          lines[i] = state.styles.danger(state.symbols.bullet) + lines[i].slice(1);
        });
      }

      if (prompt.isValue(state.values[item.name])) {
        done++;
      }
    }

    state.completed = ((done / len) * 100).toFixed(0);
    state.output = lines.join('\n');
    return state.output;
  };
};

function createFn(prop, prompt, options, fallback) {
  return (value, state, item, index) => {
    if (typeof item.field[prop] === 'function') {
      return item.field[prop].call(prompt, value, state, item, index);
    }
    return [fallback, value].find(v => prompt.isValue(v));
  };
}
