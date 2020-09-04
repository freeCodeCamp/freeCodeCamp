/* global expect */

const path = require('path');

const { parseMarkdown } = require('../tools/challenge-md-parser');
const { parseTranslation } = require('./getChallenges');

/* eslint-disable max-len */
const {
  SIMPLE_TRANSLATION
} = require('../tools/challenge-md-parser/translation-parser/__mocks__/mock-comments');
/* eslint-enable max-len */

describe('translation parser', () => {
  it('should combine to the correct object', () => {
    return Promise.all([
      parseMarkdown(path.resolve(__dirname, '__fixtures__/combined.md')),
      parseTranslation(
        path.resolve(__dirname, '__fixtures__/challenge.english.md'),
        path.resolve(__dirname, '__fixtures__/challenge.chinese.md'),
        SIMPLE_TRANSLATION
      )
    ]).then(xs => expect(xs[1]).toEqual(xs[0]));
  });
  it('should translate known comments in html', () => {
    return Promise.all([
      parseMarkdown(
        path.resolve(__dirname, '__fixtures__/combined-html-comments.md')
      ),
      parseTranslation(
        path.resolve(
          __dirname,
          '__fixtures__/challenge-html-comments.english.md'
        ),
        path.resolve(__dirname, '__fixtures__/challenge.chinese.md'),
        SIMPLE_TRANSLATION
      )
    ]).then(xs => expect(xs[1]).toEqual(xs[0]));
  });
  it('should translate known comments in jsx', () => {
    return Promise.all([
      parseMarkdown(
        path.resolve(__dirname, '__fixtures__/combined-jsx-comments.md')
      ),
      parseTranslation(
        path.resolve(
          __dirname,
          '__fixtures__/challenge-jsx-comments.english.md'
        ),
        path.resolve(__dirname, '__fixtures__/challenge.chinese.md'),
        SIMPLE_TRANSLATION
      )
    ]).then(xs => expect(xs[1]).toEqual(xs[0]));
  });
  it('should translate known comments in js', () => {
    return Promise.all([
      parseMarkdown(
        path.resolve(__dirname, '__fixtures__/combined-js-comments.md')
      ),
      parseTranslation(
        path.resolve(
          __dirname,
          '__fixtures__/challenge-js-comments.english.md'
        ),
        path.resolve(__dirname, '__fixtures__/challenge.chinese.md'),
        SIMPLE_TRANSLATION
      )
    ]).then(xs => expect(xs[1]).toEqual(xs[0]));
  });
  it('should handle a stripped down challenge', () => {
    return Promise.all([
      parseMarkdown(path.resolve(__dirname, '__fixtures__/combined.md')),
      parseTranslation(
        path.resolve(__dirname, '__fixtures__/challenge.english.md'),
        path.resolve(__dirname, '__fixtures__/challenge-stripped.chinese.md'),
        SIMPLE_TRANSLATION
      )
    ]).then(xs => expect(xs[1]).toEqual(xs[0]));
  });
});
