/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';
import calculateCellHeight from './../src/calculateCellHeight';

describe('calculateCellHeight', () => {
  describe('value', () => {
    context('is not a string', () => {
      it('throws an error', () => {
        expect(() => {
          calculateCellHeight(null);
        }).to.throw(Error, 'Value must be a string.');
      });
    });
  });
  describe('context width', () => {
    context('is not an integer', () => {
      it('throws an error', () => {
        expect(() => {
          calculateCellHeight('foo', null);
        }).to.throw(Error, 'Column width must be an integer.');
      });
    });
    context('is 0', () => {
      it('throws an error', () => {
        expect(() => {
          calculateCellHeight('foo', 0);
        }).to.throw(Error, 'Column width must be greater than 0.');
      });
    });
    context('is lesser than the column width', () => {
      it('has height 1', () => {
        expect(calculateCellHeight('foo', 10)).to.equal(1);
      });
    });
    context('is 2 and half times greater than the column width', () => {
      it('has height 3', () => {
        expect(calculateCellHeight('aabbc', 2)).to.equal(3);
      });
    });
  });
});
