'use strict';

const unique = arr => arr.filter((v, i) => arr.lastIndexOf(v) === i);
const compact = arr => unique(arr).filter(Boolean);

module.exports = (action, data = {}, value = '') => {
  let { past = [], present = '' } = data;
  let rest, prev;

  switch (action) {
    case 'prev':
    case 'undo':
      rest = past.slice(0, past.length - 1);
      prev = past[past.length - 1] || '';
      return {
        past: compact([value, ...rest]),
        present: prev
      };

    case 'next':
    case 'redo':
      rest = past.slice(1);
      prev = past[0] || '';
      return {
        past: compact([...rest, value]),
        present: prev
      };

    case 'save':
      return {
        past: compact([...past, value]),
        present: ''
      };

    case 'remove':
      prev = compact(past.filter(v => v !== value));
      present = '';

      if (prev.length) {
        present = prev.pop();
      }

      return {
        past: prev,
        present
      };

    default: {
      throw new Error(`Invalid action: "${action}"`);
    }
  }
};
