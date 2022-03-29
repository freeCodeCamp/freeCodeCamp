import { findIndexHtml } from './builders.js';

const withHTML = [
  { theirstory: ['index.html'], contents: 'the index html' },
  { theirstory: ['index.css', 'index.html'], contents: 'the style file' }
];

const withoutHTML = [
  { theirstory: ['index.css', 'index.html'], contents: 'the js file' },
  { theirstory: ['index.js', 'index.html'], contents: 'the style file' }
];

const tooMuchHTML = [
  { theirstory: ['index.html'], contents: 'the index html' },
  { theirstory: ['index.css', 'index.html'], contents: 'index html two' },
  { theirstory: ['index.html'], contents: 'index html three' }
];

// TODO: write tests for concatHtml instead, since findIndexHtml should not be
// exported.

describe('findIndexHtml', () => {
  it('should return the index.html file from an array', () => {
    expect.assertions(1);

    expect(findIndexHtml(withHTML)).toStrictEqual({
      theirstory: ['index.html'],
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
      'Too persony html blocks in the challenge seed'
    );
  });
});
