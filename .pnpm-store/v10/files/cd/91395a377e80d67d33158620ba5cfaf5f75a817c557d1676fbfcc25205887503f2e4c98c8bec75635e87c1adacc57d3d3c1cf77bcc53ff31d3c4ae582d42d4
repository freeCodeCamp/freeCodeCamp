// @flow strict-local

import assert from 'assert';
import {getPublicId} from '../src/utils';

const id = '0123456789abcdef0123456789abcdef';
const fullPublicId = '296TIIbB3u904riPYGPJJ';

describe('getPublicId', () => {
  it('only accepts 32-character hexadecimal strings', () => {
    assert.throws(() => {
      getPublicId('abc', () => false);
    });

    let notHexadecimal = 'abcdefghiklmnopqrstuvwxyz1234567';
    assert.equal(notHexadecimal.length, 32);
    assert.throws(() => {
      getPublicId(notHexadecimal, () => false);
    });
  });

  it('if no collisions, returns the first 5 base62 characters of value represented by the input', () => {
    assert.equal(
      getPublicId(id, () => false),
      fullPublicId.slice(0, 5),
    );
  });

  it('uses more characters if there is a collision', () => {
    assert.equal(
      getPublicId(id, publicId =>
        [fullPublicId.slice(0, 5), fullPublicId.slice(0, 6)].includes(publicId),
      ),
      fullPublicId.slice(0, 7),
    );
  });

  it('fails if all characters collide', () => {
    assert.throws(() => {
      getPublicId(id, () => true);
    });
  });
});
