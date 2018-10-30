/* eslint-env mocha */
import assert from 'assert';
import { getOpeningElement } from '../helper';
import elementType from '../../src/elementType';

describe('elementType tests', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof elementType;

    assert.equal(expected, actual);
  });

  it('should throw an error if the argument is missing', () => {
    assert.throws(() => { elementType(); }, Error);
  });

  it('should throw an error if the argument not a JSX node', () => {
    assert.throws(() => { elementType({ a: 'foo' }); }, Error);
  });

  it('should return the correct type of the DOM element given its node object', () => {
    const code = '<div />';
    const node = getOpeningElement(code);

    const expected = 'div';
    const actual = elementType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the custom element given its node object', () => {
    const code = '<Slider />';
    const node = getOpeningElement(code);

    const expected = 'Slider';
    const actual = elementType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the custom object element given its node object', () => {
    const code = '<UX.Slider />';
    const node = getOpeningElement(code);

    const expected = 'UX.Slider';
    const actual = elementType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the namespaced element given its node object', () => {
    const code = '<UX:Slider />';
    const node = getOpeningElement(code);

    const expected = 'UX:Slider';
    const actual = elementType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the multiple custom object element given its node object',
    () => {
      const code = '<UX.Slider.Blue.Light />';
      const node = getOpeningElement(code);

      const expected = 'UX.Slider.Blue.Light';
      const actual = elementType(node);

      assert.equal(expected, actual);
    });

  it('should return this.Component when given its node object', () => {
    const code = '<this.Component />';
    const node = getOpeningElement(code);

    const expected = 'this.Component';
    const actual = elementType(node);

    assert.equal(expected, actual);
  });
});
