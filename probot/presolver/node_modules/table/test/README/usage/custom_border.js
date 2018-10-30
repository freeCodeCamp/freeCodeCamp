import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('usage/custom_border', () => {
    const data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C']
    ];

    /* eslint-disable sort-keys */
    const config = {
      border: {
        topBody: '─',
        topJoin: '┬',
        topLeft: '┌',
        topRight: '┐',

        bottomBody: '─',
        bottomJoin: '┴',
        bottomLeft: '└',
        bottomRight: '┘',

        bodyLeft: '│',
        bodyRight: '│',
        bodyJoin: '│',

        joinBody: '─',
        joinLeft: '├',
        joinRight: '┤',
        joinJoin: '┼'
      }
    };
    /* eslint-enable */

    const output = table(data, config);

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
┌────┬────┬────┐
│ 0A │ 0B │ 0C │
├────┼────┼────┤
│ 1A │ 1B │ 1C │
├────┼────┼────┤
│ 2A │ 2B │ 2C │
└────┴────┴────┘
        `);
  });
});
