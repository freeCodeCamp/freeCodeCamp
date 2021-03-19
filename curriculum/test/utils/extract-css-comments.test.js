/* global expect */
const extractCSSComments = require('./extract-css-comments');

const someHTMLWithCSS = `<body>
Some text
<style>
.body {
  color: red;
  /* comment 1 */
}

.comment {
  /* comment 1 */
  background: green;
  /* comment 2 */
}

</style>
</body>
`;

const outsideDeclarations = `
<style>
.body {
  color: red;
  /* comment 1 */
}


/* comment 1 */
/* comment 2 */
}

</style>
`;

const mediaQuery = `
<style>
.body {
  color: red;
  /* comment 1 */
}


@media (max-width: 350px) {
  :root {
    /* comment 2 */

    /* comment 2 */
  }
}
</style>
`;

// NOTE: this is a bit finicky.  If the css is, say, missing a semi-colon,
// nearby comments may be missed.
describe('extractCSSComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'comment 1': 2,
      'comment 2': 1
    };
    expect(extractCSSComments(someHTMLWithCSS)).toEqual(commentCounts);
  });
  it('should catch comments outside of declarations', () => {
    const commentCounts = {
      'comment 1': 2,
      'comment 2': 1
    };
    expect(extractCSSComments(outsideDeclarations)).toEqual(commentCounts);
  });
  it('should catch comments inside of media queries', () => {
    const commentCounts = {
      'comment 1': 1,
      'comment 2': 2
    };
    expect(extractCSSComments(mediaQuery)).toEqual(commentCounts);
  });
});
