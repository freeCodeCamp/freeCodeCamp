import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('basic', () => {
    const data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C']
    ];

    const output = table(data);

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
╔════╤════╤════╗
║ 0A │ 0B │ 0C ║
╟────┼────┼────╢
║ 1A │ 1B │ 1C ║
╟────┼────┼────╢
║ 2A │ 2B │ 2C ║
╚════╧════╧════╝
        `);
  });
});
