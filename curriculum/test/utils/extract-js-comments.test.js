const extractJSComments = require('./extract-js-comments');

const someJS = `
// single line comment

/*
a multiline comment
*/

var x = 'y'; // single line comment

var y = '// single line comment';

`;

const someInvalidJS = `const isChange;`;

describe('extractJSComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'single line comment': 2,
      'a multiline comment': 1
    };
    expect(extractJSComments(someJS)).toEqual(commentCounts);
  });

  it('should throw an informative error if the JS is invalid', () => {
    expect(() => extractJSComments(someInvalidJS)).toThrow(
      `extract-js-comments could not parse the code below, this challenge have invalid syntax:

${someInvalidJS}
`
    );
  });
});
