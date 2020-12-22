/* global expect */
const extractJSXComments = require('./extract-jsx-comments');

const someJSX = `<Link
className='btn-invert'
to='/username'
>
Show me my public portfolio
{/* JSX comment */}
</Link>
// single line comment

{/* JSX comment */}

/*
a multiline comment
*/
`;

describe('extractJSXComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'JSX comment': 2,
      'single line comment': 1,
      'a multiline comment': 1
    };
    expect(extractJSXComments(someJSX)).toEqual(commentCounts);
  });
});
