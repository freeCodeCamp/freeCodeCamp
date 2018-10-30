import {
    expect
} from 'chai';
import calculateCellWidthIndex from './../src/calculateCellWidthIndex';

describe('calculateCellWidthIndex', () => {
  context('all cells have different width', () => {
    it('describes each cell contents width', () => {
      const cellWidthIndex = calculateCellWidthIndex([
        'a',
        'aaa',
        'aaaaaa'
      ]);

      expect(cellWidthIndex[0]).to.equal(1, 'first column');
      expect(cellWidthIndex[1]).to.equal(3, 'second column');
      expect(cellWidthIndex[2]).to.equal(6, 'third column');
    });
  });
});
