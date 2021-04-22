/* global expect */
const extractScriptJSComments = require('./extract-script-js-comments');

const inlineComments = `<body>
Some text
<script>

// comment 1

var x = 'y';

// comment 2

// comment 1

</script>
</body>
`;

const multilineComments = `<body>
Some text
<script>

/*
comment 1
*/
var x = 'y';

/* comment 2 */

/* comment 1 */

</script>
</body>
`;

const outsideScript = `<body>
Some text
<script>

// comment 1

var x = 'y';

// comment 2

// comment 1

</script>

// comment 2
</body>
`;

describe('extractScriptJSComments', () => {
  it('should catch inline comments', () => {
    const commentCounts = {
      'comment 1': 2,
      'comment 2': 1
    };
    expect(extractScriptJSComments(inlineComments)).toEqual(commentCounts);
  });
  it('should catch multiline comments', () => {
    const commentCounts = {
      'comment 1': 2,
      'comment 2': 1
    };
    expect(extractScriptJSComments(multilineComments)).toEqual(commentCounts);
  });
  it('should ignore comments outside script tags', () => {
    const commentCounts = {
      'comment 1': 2,
      'comment 2': 1
    };
    expect(extractScriptJSComments(outsideScript)).toEqual(commentCounts);
  });
});
