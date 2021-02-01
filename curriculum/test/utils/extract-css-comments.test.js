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
});
