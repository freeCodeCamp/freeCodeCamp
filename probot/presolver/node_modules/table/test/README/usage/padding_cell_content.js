import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('usage/padding_cell_content', () => {
    const data = [
      ['0A', 'AABBCC', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C']
    ];

    const config = {
      columns: {
        0: {
          paddingLeft: 3
        },
        1: {
          paddingRight: 3,
          width: 2
        }
      }
    };

    const output = table(data, config);

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
╔══════╤══════╤════╗
║   0A │ AA   │ 0C ║
║      │ BB   │    ║
║      │ CC   │    ║
╟──────┼──────┼────╢
║   1A │ 1B   │ 1C ║
╟──────┼──────┼────╢
║   2A │ 2B   │ 2C ║
╚══════╧══════╧════╝
        `);
  });
});
