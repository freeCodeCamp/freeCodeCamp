import _ from 'lodash';
import table, {
    getBorderCharacters
} from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/predefined_border_templates', () => {
  let data;

  before(() => {
    data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C']
    ];
  });

  it('honeywell', () => {
    const output = table(data, {
      border: getBorderCharacters('honeywell')
    });

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

  it('norc', () => {
    const output = table(data, {
      border: getBorderCharacters('norc')
    });

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

  it('ramac', () => {
    const output = table(data, {
      border: getBorderCharacters('ramac')
    });

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
+----+----+----+
| 0A | 0B | 0C |
|----|----|----|
| 1A | 1B | 1C |
|----|----|----|
| 2A | 2B | 2C |
+----+----+----+
        `);
  });

  it('void', () => {
    const output = table(data, {
      border: getBorderCharacters('void')
    });

    expectTable(_.trim(output) + '\n', '0A  0B  0C \n\n 1A  1B  1C \n\n 2A  2B  2C');
  });

  it('borderless', () => {
    const output = table(data, {
      border: getBorderCharacters('void'),
      columnDefault: {
        paddingLeft: 0,
        paddingRight: 1
      },
      drawHorizontalLine: () => {
        return false;
      }
    });

    expectTable(_.trim(output) + '\n', '0A 0B 0C \n1A 1B 1C \n2A 2B 2C');
  });
});
