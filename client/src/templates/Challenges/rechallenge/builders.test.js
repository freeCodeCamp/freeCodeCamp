/* global expect */
import { findIndexHtml } from './builders.js';

const withHTML = [
  { includes: [], contents: 'the index html' },
  { contents: 'the style file' }
];

const withoutHTML = [
  { contents: 'the js file' },
  { contents: 'the style file' }
];

const tooMuchHTML = [
  { includes: [], contents: 'the index html' },
  { includes: [], contents: 'index html two' },
  { includes: [], contents: 'index html three' }
];

// TODO: write tests for concatHtml instead, since findIndexHtml should not be
// exported.

describe('findIndexHtml', () => {
  it('should return the index.html file from an array', () => {
    expect.assertions(1);

    expect(findIndexHtml(withHTML)).toStrictEqual({
      includes: [],
      contents: 'the index html'
    });
  });

  it('should return null when the index.html file is missing', () => {
    expect.assertions(1);

    expect(findIndexHtml(withoutHTML)).toBe(null);
  });

  it('should throw if there are two or more index.htmls', () => {
    expect.assertions(1);

    expect(() => findIndexHtml(tooMuchHTML)).toThrowError(
      'Too many html blocks in the challenge seed'
    );
  });
});
