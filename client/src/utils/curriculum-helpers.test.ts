import __testHelpers, { removeJSComments } from './curriculum-helpers';
import jsTestValues from './__fixtures/curriculum-helpers-javascript';
import cssTestValues from './__fixtures/curriculum-helpers-css';
import htmlTestValues from './__fixtures/curriculum-helpers-html';
import whiteSpaceTestValues from './__fixtures/curriculum-helpers-remove-white-space';

const { stringWithWhiteSpaceChars, stringWithWhiteSpaceCharsRemoved } =
  whiteSpaceTestValues;

const { cssFullExample, cssCodeWithCommentsRemoved } = cssTestValues;

const { htmlFullExample, htmlCodeWithCommentsRemoved } = htmlTestValues;

const {
  jsCodeWithSingleAndMultLineComments,
  jsCodeWithSingleAndMultLineCommentsRemoved,
  jsCodeWithUrl,
  jsCodeWithUrlUnchanged,
  jsCodeWithNoCall,
  jsCodeWithNoArgCall,
  jsCodeWithArgCall,
  jsCodeWithCommentedCall
} = jsTestValues;

describe('removeWhiteSpace', () => {
  const { removeWhiteSpace } = __testHelpers;
  it('returns a string', () => {
    expect(typeof removeWhiteSpace('This should return a string')).toBe(
      'string'
    );
  });

  it('returns a string with no white space characters', () => {
    expect(removeWhiteSpace(stringWithWhiteSpaceChars)).toBe(
      stringWithWhiteSpaceCharsRemoved
    );
  });
});

describe('removeJSComments', () => {
  it('returns a string', () => {
    expect(typeof removeJSComments('const should = "return a string"')).toBe(
      'string'
    );
  });

  it('returns a string with no single or multi-line comments', () => {
    expect(removeJSComments(jsCodeWithSingleAndMultLineComments)).toBe(
      jsCodeWithSingleAndMultLineCommentsRemoved
    );
  });

  it('leaves malformed JS unchanged', () => {
    const actual = '/ unclosed regex';
    expect(removeJSComments(actual)).toBe(actual);
  });

  it('does not remove a url found in JS code', () => {
    expect(removeJSComments(jsCodeWithUrl)).toBe(jsCodeWithUrlUnchanged);
  });
});

describe('removeCssComments', () => {
  const { removeCssComments } = __testHelpers;
  it('returns a string', () => {
    expect(typeof removeCssComments('.aClass: { color: red; }')).toBe('string');
  });

  it('returns a CSS string with no single or multi-line comments', () => {
    expect(removeCssComments(cssFullExample)).toBe(cssCodeWithCommentsRemoved);
  });
});

describe('removeHtmlComments', () => {
  const { removeHtmlComments } = __testHelpers;
  it('returns a string', () => {
    expect(
      typeof removeHtmlComments(
        '<h1>hello world</h1><!-- a comment--><h2>h2 element</h2>'
      )
    ).toBe('string');
  });

  it('returns an HTML string with no single or multi-line comments', () => {
    expect(removeHtmlComments(htmlFullExample)).toBe(
      htmlCodeWithCommentsRemoved
    );
  });
});

describe('isCalledWithNoArgs', () => {
  const { isCalledWithNoArgs } = __testHelpers;
  it('returns a boolean', () => {
    expect(typeof isCalledWithNoArgs('foo', 'bar')).toBe('boolean');
  });
  it('returns false when not called', () => {
    expect(isCalledWithNoArgs('myFunc', jsCodeWithNoCall)).toBe(false);
  });
  it('returns true for a call with no arguments', () => {
    expect(isCalledWithNoArgs('myFunc', jsCodeWithNoArgCall)).toBe(true);
  });
  it('returns false for a call with arguments', () => {
    expect(isCalledWithNoArgs('myFunc', jsCodeWithArgCall)).toBe(false);
  });
  it('returns false for a commented out call', () => {
    expect(isCalledWithNoArgs('myFunc', jsCodeWithCommentedCall)).toBe(false);
  });
});
