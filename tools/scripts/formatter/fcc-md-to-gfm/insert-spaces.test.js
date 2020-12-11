/* global expect */

const h = require('hastscript');
const u = require('unist-builder');
const toHtml = require('hast-util-to-html');

const {
  escapeMd,
  getParagraphs,
  htmlVisitor,
  wrapBareUrls
} = require('./insert-spaces');

const blankLine = u('text', '\n\n');

describe('insert-spaces', () => {
  describe('htmlVisitor', () => {
    it('should separate html elements into paragraphs', () => {
      /* eslint-disable max-len*/
      const twoStrong = {
        type: 'html',
        value:
          "<section id='description'>\n<strong>Example:</strong>\n<strong>1184</strong> and <strong>1210</strong> are"
      };
      /* eslint-enable max-len*/
      htmlVisitor(twoStrong);
      expect(twoStrong.value).toMatch(/<\/strong>\n\n<strong>1184<\/strong>/);
    });
  });
  describe('getParagraphs', () => {
    it('should return a node unchanged if it has no newlines', () => {
      const oneLine = { type: 'text', value: 'ab' };
      expect(getParagraphs(oneLine)).toEqual(oneLine);
    });
    it('should split a text node at a newline', () => {
      const twoLines = { type: 'text', value: 'a\nb' };
      expect(getParagraphs(twoLines)).toHaveLength(3);
      const threeLines = { type: 'text', value: 'a\nb\nc' };
      expect(getParagraphs(threeLines)).toHaveLength(5);
    });
    it('should create blank lines to replace \\n', () => {
      const twoLines = { type: 'text', value: 'a\nb' };
      const expected = [
        { type: 'text', value: 'a' },
        { type: 'text', value: '\n\n' },
        { type: 'text', value: 'b' }
      ];
      expect(getParagraphs(twoLines)).toEqual(expected);
    });
    it('should replace a single \\n with a blank line', () => {
      const newline = { type: 'text', value: '\n' };
      const expected = { type: 'text', value: '\n\n' };
      expect(getParagraphs(newline)).toEqual(expected);
    });
    it('should give a sentence starting \\n a starting blank line', () => {
      const startingNewline = { type: 'text', value: '\na' };
      const expected = [
        { type: 'text', value: '\n\n' },
        { type: 'text', value: 'a' }
      ];
      expect(getParagraphs(startingNewline)).toEqual(expected);
    });
  });

  describe('escapeMd', () => {
    it('should not add a trailing newline', () => {
      const alreadyEscaped = { type: 'text', value: 'hi!' };
      expect(escapeMd(alreadyEscaped)).toEqual(alreadyEscaped);
    });
    it('should not escape a double newline', () => {
      // they're needed to separate the paragraphs
      const newLine = { type: 'text', value: '\n\n' };
      expect(escapeMd(newLine)).toEqual(newLine);
    });

    /* This would be nice, but I don't know how to do it */
    // it('should preserve newlines', () => {
    //   const newLine = { type: 'text', value: '  before \n   after  ' };
    //   Object.freeze(newLine);
    //   expect(escapeMd(newLine)).toEqual(newLine);
    // });

    it('should not escape urls', () => {
      const url = { type: 'text', value: 'https://www.example.com' };
      expect(escapeMd(url)).toEqual(url);
    });

    it('should escape MathJax', () => {
      const mathJax = { type: 'text', value: '$H_2(X) = -\\sum_{i=1}^n$' };
      const mathJaxEscaped = {
        type: 'text',
        value: '$H_2(X) = -\\\\sum\\_{i=1}^n$'
      };
      expect(escapeMd(mathJax)).toEqual(mathJaxEscaped);
    });

    it('should escape slashes', () => {
      const mathJax = {
        type: 'text',
        value: '$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$'
      };
      const mathJaxEscaped = {
        type: 'text',
        value:
          '$R(1)=1\\\\ ;\\\\ S(1)=2 \\\\\\\\R(n)=R(n-1)+S(n-1), \\\\quad n>1.$'
      };
      expect(escapeMd(mathJax)).toEqual(mathJaxEscaped);
    });
  });

  describe('wrapBareUrls', () => {
    it('should skip blank line nodes', () => {
      expect(wrapBareUrls(blankLine)).toEqual(null);
    });

    it('should not modify nodes without bare urls', () => {
      const noBareUrls = u('text', 'Just some words.');
      const expected = toHtml(h('', 'Just some words.'));
      const actualHast = h('');
      actualHast.children = wrapBareUrls(noBareUrls);
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should not trim whitespace', () => {
      const noBareUrls = u('text', '  \n  Just some words.  ');
      const expected = toHtml(h('', '  \n  Just some words.  '));
      const actualHast = h('');
      actualHast.children = wrapBareUrls(noBareUrls);
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should handle !', () => {
      const exclamation = u('text', 'Just < : > near https://example.com!?');
      const childrenExclamation = wrapBareUrls(exclamation);
      const actualHast = h('');
      actualHast.children = childrenExclamation;
      const expected = toHtml(
        h('', ['Just < : > near ', h('code', 'https://example.com'), '!?'])
      );
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should not parse any markdown', () => {
      const noBareUrls = u('text', 'Just *some* words.');
      const childrenNoBare = wrapBareUrls(noBareUrls);
      const actualHast = h('');
      actualHast.children = childrenNoBare;
      const expected = toHtml(h('', 'Just *some* words.'));
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should replace bare urls with code elements', () => {
      const urlBare = u('text', 'a https://example.com b');
      const childrenBare = wrapBareUrls(urlBare);
      const actualHast = h('');
      actualHast.children = childrenBare;
      const expected = toHtml(
        h('', ['a ', h('code', 'https://example.com'), ' b'])
      );
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should replace url strings with code elements', () => {
      const urlBare = u('text', 'https://example.com');
      const childrenBare = wrapBareUrls(urlBare);
      const actualHast = h('');
      actualHast.children = childrenBare;
      const expected = toHtml(h('', [h('code', 'https://example.com')]));
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should replace two bare urls with two code elements', () => {
      const urlBare = u(
        'text',
        'a https://example.com text https://sample-site.com b'
      );
      const childrenBare = wrapBareUrls(urlBare);
      const actualHast = h('');
      actualHast.children = childrenBare;
      const expected = toHtml(
        h('', [
          'a ',
          h('code', 'https://example.com'),
          ' text ',
          h('code', 'https://sample-site.com'),
          ' b'
        ])
      );
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should replace two identical urls with two code elements', () => {
      const urlBare = u(
        'text',
        'a https://example.com text https://example.com b'
      );
      const childrenBare = wrapBareUrls(urlBare);
      const actualHast = h('');
      actualHast.children = childrenBare;
      const expected = toHtml(
        h('', [
          'a ',
          h('code', 'https://example.com'),
          ' text ',
          h('code', 'https://example.com'),
          ' b'
        ])
      );
      expect(toHtml(actualHast)).toEqual(expected);
    });

    it('should replace quoted bare urls with code elements', () => {
      const urlQuoted = {
        type: 'text',
        value: 'a "https://example.com" b'
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ['a "', h('code', 'https://example.com'), '" b'])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });

    it('should replace single quoted bare urls with code elements', () => {
      const urlQuoted = {
        type: 'text',
        value: `a 'https://example.com' b`
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', [`a '`, h('code', 'https://example.com'), `' b`])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });

    // NOTE: this is a remark-parse bug that the formatter works around
    it(`should replace quoted bare urls before '.' with code elements`, () => {
      const urlQuoted = {
        type: 'text',
        value: '"http://example.com".'
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ['"', h('code', 'http://example.com'), '".'])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });
    // NOTE: this is a remark-parse bug that the formatter works around
    it(`should replace single-quoted bare urls before '.' with code elements`, () => {
      const urlQuoted = {
        type: 'text',
        value: "'http://example.com'."
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ["'", h('code', 'http://example.com'), "'."])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });
    // NOTE: this is a remark-parse bug that the formatter works around
    it(`should replace quoted bare urls before '>' with code elements`, () => {
      const urlQuoted = {
        type: 'text',
        value: '"http://example.com">this '
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ['"', h('code', 'http://example.com'), '">this '])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });

    // NOTE: this is a remark-parse bug that the formatter works around
    it(`really should replace quoted bare urls before '>' with code elements`, () => {
      const urlQuoted = {
        type: 'text',
        value: '"http://example.com">'
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ['"', h('code', 'http://example.com'), '">'])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });

    // NOTE: this is a remark-parse bug that the formatter works around
    it(`should replace single-quoted bare urls before '>' with code elements`, () => {
      const urlQuoted = {
        type: 'text',
        value: `'http://example.com'>this `
      };
      const childrenQuoted = wrapBareUrls(urlQuoted);
      const actualQuoted = h('');
      actualQuoted.children = childrenQuoted;
      const expectedQuoted = toHtml(
        h('', ["'", h('code', 'http://example.com'), "'>this "])
      );
      expect(toHtml(actualQuoted)).toEqual(expectedQuoted);
    });
  });
});
