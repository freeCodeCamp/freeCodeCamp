/* eslint-env mocha */
import assert from 'assert';
import { extractProp } from '../helper';
import propName from '../../src/propName';

describe('propName', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof propName;

    assert.equal(expected, actual);
  });

  it('should throw an error if the argument is missing', () => {
    assert.throws(() => { propName(); }, Error);
  });

  it('should throw an error if the argument not a JSX node', () => {
    assert.throws(() => { propName({ a: 'foo' }); }, Error);
  });

  it('should return correct name for normal prop', () => {
    const prop = extractProp('<div foo="bar" />');

    const expected = 'foo';
    const actual = propName(prop);

    assert.equal(expected, actual);
  });

  it('should return correct name for namespaced prop', () => {
    const prop = extractProp('<div foo:bar="baz" />', 'foo:bar');

    const expected = 'foo:bar';
    const actual = propName(prop);

    assert.equal(expected, actual);
  });

  // Note: this shouldn't happen, but safe guard anyway.
  it('should return undefined if prop name is not JSXIdentifier or JSXNamespacedName', () => {
    const prop = {
      type: 'JSXAttribute',
      name: {
        type: 'Literal',
      },
    };

    const expected = undefined;
    const actual = propName(prop);

    assert.equal(expected, actual);
  });
});
