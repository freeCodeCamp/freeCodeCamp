/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';
import makeConfig from './../src/makeConfig';

describe('makeConfig', () => {
  it('does not affect the parameter configuration object', () => {
    const config = {};

    makeConfig([
      [
        'aaaaa'
      ]
    ], config);

    expect(config).to.deep.equal({});
  });

  context('column', () => {
    context('"alignment"', () => {
      context('is not provided', () => {
        it('defaults to "left"', () => {
          const config = makeConfig([
            [
              'aaaaa'
            ]
          ]);

          expect(config.columns[0].alignment).to.equal('left');
        });
      });
    });
    context('"width"', () => {
      context('is not provided', () => {
        it('defaults to the maximum column width', () => {
          const config = makeConfig([
            [
              'aaaaa'
            ]
          ]);

          expect(config.columns[0].width).to.equal(5);
        });
      });
    });
    context('"paddingLeft"', () => {
      context('is not provided', () => {
        it('defaults to 1', () => {
          const config = makeConfig([
            [
              'aaaaa'
            ]
          ]);

          expect(config.columns[0].paddingLeft).to.equal(1);
        });
      });
    });
    context('"paddingRight"', () => {
      context('is not provided', () => {
        it('defaults to 1', () => {
          const config = makeConfig([
            [
              'aaaaa'
            ]
          ]);

          expect(config.columns[0].paddingRight).to.equal(1);
        });
      });
    });
  });
});
