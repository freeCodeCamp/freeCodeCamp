import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('usage/draw_horizontal_line', () => {
    const data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C'],
      ['3A', '3B', '3C'],
      ['4A', '4B', '4C']
    ];

    const options = {
      /**
       * @typedef {Function} drawJoin
       * @param {number} index
       * @param {number} size
       * @returns {boolean}
       */
      drawHorizontalLine: (index, size) => {
        return index === 0 || index === 1 || index === size - 1 || index === size;
      }
    };

    const output = table(data, options);

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
╔════╤════╤════╗
║ 0A │ 0B │ 0C ║
╟────┼────┼────╢
║ 1A │ 1B │ 1C ║
║ 2A │ 2B │ 2C ║
║ 3A │ 3B │ 3C ║
╟────┼────┼────╢
║ 4A │ 4B │ 4C ║
╚════╧════╧════╝
        `);
  });
});
