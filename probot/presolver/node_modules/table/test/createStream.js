/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';
import createStream from './../src/createStream';

describe('createStream', () => {
  context('"config.columnDefault.width" property is not provided', () => {
    it('throws an error', () => {
      expect(() => {
        createStream();
      }).to.throw(Error, 'Must provide config.columnDefault.width when creating a stream.');
    });
  });
  context('"config.columnCount" property is not provided', () => {
    it('throws an error', () => {
      expect(() => {
        createStream({
          columnDefault: {
            width: 10
          }
        });
      }).to.throw(Error, 'Must provide config.columnCount.');
    });
  });
  context('Table data cell count does not match the columnCount.', () => {
    it('throws an error', () => {
      expect(() => {
        const stream = createStream({
          columnCount: 10,
          columnDefault: {
            width: 10
          }
        });

        stream.write(['foo']);
      }).to.throw(Error, 'Row cell count does not match the config.columnCount.');
    });
  });
});
