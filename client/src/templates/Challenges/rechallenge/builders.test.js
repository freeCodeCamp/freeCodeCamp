/* global expect */
import { findIndexHtml } from './builders.js';

const withHTML = [
  { history: ['index.html'], contents: 'the index html' },
  { history: ['index.css', 'index.html'], contents: 'the style file' }
];

const withoutHTML = [
  { history: ['index.css', 'index.html'], contents: 'the js file' },
  { history: ['index.js', 'index.html'], contents: 'the style file' }
];

const tooMuchHTML = [
  { history: ['index.html'], contents: 'the index html' },
  { history: ['index.css', 'index.html'], contents: 'index html two' },
  { history: ['index.html'], contents: 'index html three' }
];

// TODO: write tests for concatHtml instead, since findIndexHtml should not be
// exported.

describe('findIndexHtml', () => {
  it('should return the index.html file from an array', () => {
    expect.assertions(1);

    expect(findIndexHtml(withHTML)).toStrictEqual({
      history: ['index.html'],
      contents: 'the index html'
    });
  });

  it('should return undefined when the index.html file is missing', () => {
    expect.assertions(1);

    expect(findIndexHtml(withoutHTML)).toBeUndefined();
  });

  it('should throw if there are two or more index.htmls', () => {
    expect.assertions(1);

    expect(() => findIndexHtml(tooMuchHTML)).toThrowError(
      'Too many html blocks in the challenge seed'
    );
  });
});
