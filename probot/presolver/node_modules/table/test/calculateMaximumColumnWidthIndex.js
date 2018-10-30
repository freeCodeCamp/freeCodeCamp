import {
    expect
} from 'chai';
import chalk from 'chalk';
import calculateMaximumColumnWidthIndex from './../src/calculateMaximumColumnWidthIndex';

describe('calculateMaximumColumnWidthIndex', () => {
  it('throws an error when attempting to calculate maximum column value index for an empty data set', () => {
    expect(() => {
      calculateMaximumColumnWidthIndex([]);
    }).to.throw(Error, 'Dataset must have at least one row.');
  });
  it('calculates the maximum column value index', () => {
    const maximumColumnValueIndex = calculateMaximumColumnWidthIndex([
      [
        '',
        'a',
        'b',
        'c'
      ],
      [
        '',
        'a',
        'bbbbbbbbbb',
        'c'
      ],
      [
        '',
        '',
        'b',
        'ccccc'
      ]
    ]);

    expect(maximumColumnValueIndex).to.deep.equal([0, 1, 10, 5]);
  });
  context('cell values contain ANSI codes', () => {
    it('uses visual width of the string', () => {
      const maximumColumnValueIndex = calculateMaximumColumnWidthIndex([
        [
          chalk.red('aaaaa')
        ]
      ]);

      expect(maximumColumnValueIndex[0]).to.equal(5);
    });
  });
  context('cell values contain fullwidth characters', () => {
    it('uses visual width of the string', () => {
      const maximumColumnValueIndex = calculateMaximumColumnWidthIndex([
        [
          chalk.red('古')
        ]
      ]);

      expect(maximumColumnValueIndex[0]).to.equal(2);
    });
  });
});
