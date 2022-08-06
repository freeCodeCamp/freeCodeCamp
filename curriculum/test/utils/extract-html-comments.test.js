const extractHTMLComments = require('./extract-html-comments');

const someHTML = `<body>
Some text

<!-- a comment -->

<!-- a comment --><!-- another comment -->

</body>
`;

describe('extractHTMLComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'a comment': 2,
      'another comment': 1
    };
    expect(extractHTMLComments(someHTML)).toEqual(commentCounts);
  });
});

// Test with Invalid value
describe('extractHTMLComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'a comment': 'a',
      'another comment': 1
    };
    expect(extractHTMLComments(someHTML)).toEqual(commentCounts);
  });
});

// Test with negative values
describe('extractHTMLComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'a comment': -2,
      'another comment': -1
    };
    expect(extractHTMLComments(someHTML)).toEqual(commentCounts);
  });
});

//Test with null value
describe('extractHTMLComments', () => {
  it('should return an object with comment keys and count values', () => {
    const commentCounts = {
      'a comment': null,
      'another comment': null
    };
    expect(extractHTMLComments(someHTML)).toEqual(commentCounts);
  });
});
