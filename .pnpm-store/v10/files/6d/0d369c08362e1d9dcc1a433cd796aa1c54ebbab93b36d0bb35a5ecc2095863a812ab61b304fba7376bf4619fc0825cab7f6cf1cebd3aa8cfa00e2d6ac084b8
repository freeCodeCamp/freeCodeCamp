import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import getAccessibleChildText from '../../../src/util/getAccessibleChildText';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';

test('getAccessibleChildText', (t) => {
  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [JSXAttributeMock('aria-label', 'foo')],
    ), elementType),
    'foo',
    'returns the aria-label when present',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [JSXAttributeMock('aria-label', 'foo')],
      [{ type: 'JSXText', value: 'bar' }],
    ), elementType),
    'foo',
    'returns the aria-label instead of children',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [JSXAttributeMock('aria-hidden', 'true')],
    ), elementType),
    '',
    'skips elements with aria-hidden=true',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'JSXText', value: 'bar' }],
    ), elementType),
    'bar',
    'returns literal value for JSXText child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [JSXElementMock('img', [
        JSXAttributeMock('src', 'some/path'),
        JSXAttributeMock('alt', 'a sensible label'),
      ])],
    ), elementType),
    'a sensible label',
    'returns alt text for img child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [JSXElementMock('span', [
        JSXAttributeMock('alt', 'a sensible label'),
      ])],
    ), elementType),
    '',
    'returns blank when alt tag is used on arbitrary element',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: 'bar' }],
    ), elementType),
    'bar',
    'returns literal value for JSXText child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: ' bar   ' }],
    ), elementType),
    'bar',
    'returns trimmed literal value for JSXText child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: 'foo         bar' }],
    ), elementType),
    'foo bar',
    'returns space-collapsed literal value for JSXText child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: 'foo, bar. baz? foo; bar:' }],
    ), elementType),
    'foo bar baz foo bar',
    'returns punctuation-stripped literal value for JSXText child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [JSXElementMock(
        'span',
        [],
        [{ type: 'Literal', value: 'bar' }],
      )],
    ), elementType),
    'bar',
    'returns recursive value for JSXElement child',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [JSXElementMock(
        'span',
        [],
        [JSXElementMock(
          'span',
          [JSXAttributeMock('aria-hidden', 'true')],
        )],
      )],
    ), elementType),
    '',
    'skips children with aria-hidden-true',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: 'foo' }, { type: 'Literal', value: 'bar' }],
    ), elementType),
    'foo bar',
    'joins multiple children properly - no spacing',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: ' foo ' }, { type: 'Literal', value: ' bar ' }],
    ), elementType),
    'foo bar',
    'joins multiple children properly - with spacing',
  );

  t.equal(
    getAccessibleChildText(JSXElementMock(
      'a',
      [],
      [{ type: 'Literal', value: 'foo' }, { type: 'Unknown' }, { type: 'Literal', value: 'bar' }],
    ), elementType),
    'foo bar',
    'skips unknown elements',
  );

  t.end();
});
