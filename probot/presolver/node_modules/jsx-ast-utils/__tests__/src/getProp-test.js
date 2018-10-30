/* eslint-env mocha */
import assert from 'assert';
import { getOpeningElement } from '../helper';
import getProp from '../../src/getProp';

describe('getProp', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof getProp;

    assert.equal(expected, actual);
  });

  it('should return undefined if no arguments are provided', () => {
    const expected = undefined;
    const actual = getProp();

    assert.equal(expected, actual);
  });

  it('should return undefined if the attribute is absent', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes: props } = node;
    const prop = 'id';

    const expected = undefined;
    const actual = getProp(props, prop);

    assert.equal(expected, actual);
  });

  it('should return the correct attribute if the attribute exists', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes: props } = node;
    const prop = 'id';

    const expected = 'id';
    const actual = getProp(props, prop).name.name;

    assert.equal(expected, actual);
  });

  it('should return undefined if the attribute may exist in spread', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes: props } = node;
    const prop = 'id';

    const expected = undefined;
    const actual = getProp(props, prop);

    assert.equal(expected, actual);
  });

  it('should return undefined if the attribute is considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes: props } = node;
    const prop = 'id';
    const options = {
      ignoreCase: false,
    };

    const expected = undefined;
    const actual = getProp(props, prop, options);

    assert.equal(expected, actual);
  });
});
