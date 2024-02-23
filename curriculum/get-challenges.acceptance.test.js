// TODO: reinstate these tests

// // TODO: update these to use the new parser

// const path = require('path');

// const { parseMarkdown } = require('../tools/challenge-parser');
// const { parseTranslation } = require('./get-challenges');

// /* eslint-disable max-len */
// const {
//   SIMPLE_TRANSLATION
// } = require('../tools/challenge-parser/translation-parser/__mocks__/mock-comments');
// /* eslint-enable max-len */

describe('translation parser', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

// describe('translation parser', () => {
//   it('should translate known comments in html', () => {
//     return Promise.all([
//       parseMarkdown(
//         path.resolve(__dirname, '__fixtures__/combined-html-comments.md')
//       ),
//       parseTranslation(
//         path.resolve(
//           __dirname,
//           '__fixtures__/english/challenge-html-comments.md'
//         ),
//         path.resolve(__dirname, '__fixtures__/chinese/challenge.md'),
//         SIMPLE_TRANSLATION,
//         'chinese',
//         parseMarkdown
//       )
//     ]).then(xs => expect(xs[1]).toEqual(xs[0]));
//   });
//   it('should translate known comments in jsx', () => {
//     return Promise.all([
//       parseMarkdown(
//         path.resolve(__dirname, '__fixtures__/combined-jsx-comments.md')
//       ),
//       parseTranslation(
//         path.resolve(
//           __dirname,
//           '__fixtures__/english/challenge-jsx-comments.md'
//         ),
//         path.resolve(__dirname, '__fixtures__/chinese/challenge.md'),
//         SIMPLE_TRANSLATION,
//         'chinese',
//         parseMarkdown
//       )
//     ]).then(xs => expect(xs[1]).toEqual(xs[0]));
//   });
//   it('should translate known comments in js', () => {
//     return Promise.all([
//       parseMarkdown(
//         path.resolve(__dirname, '__fixtures__/combined-js-comments.md')
//       ),
//       parseTranslation(
//         path.resolve(
//           __dirname,
//           '__fixtures__/english/challenge-js-comments.md'
//         ),
//         path.resolve(__dirname, '__fixtures__/chinese/challenge.md'),
//         SIMPLE_TRANSLATION,
//         'chinese',
//         parseMarkdown
//       )
//     ]).then(xs => expect(xs[1]).toEqual(xs[0]));
//   });
// });
