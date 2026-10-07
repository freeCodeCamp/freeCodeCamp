import test from 'tape';

import attributesComparator from '../../../src/util/attributesComparator';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';

test('attributesComparator', (t) => {
  t.equal(
    attributesComparator(),
    true,
    'baseAttributes are undefined and attributes are undefined -> true',
  );

  t.equal(
    attributesComparator([], []),
    true,
    'baseAttributes are empty and attributes are empty -> true',
  );

  t.equal(
    attributesComparator([], [
      JSXAttributeMock('foo', 0),
      JSXAttributeMock('bar', 'baz'),
    ]),
    true,
    'baseAttributes are empty and attributes have values -> true',
  );

  const baseAttributes = [
    {
      name: 'biz',
      value: 1,
    }, {
      name: 'fizz',
      value: 'pop',
    }, {
      name: 'fuzz',
      value: 'lolz',
    },
  ];

  t.equal(
    attributesComparator(baseAttributes, []),
    false,
    'baseAttributes have values and attributes are empty -> false',
  );

  t.equal(
    attributesComparator(baseAttributes, [
      JSXElementMock(),
      JSXAttributeMock('biz', 2),
      JSXAttributeMock('ziff', 'opo'),
      JSXAttributeMock('far', 'lolz'),
    ]),
    false,
    'baseAttributes have values and attributes have values, and the values are different -> false',
  );

  t.equal(
    attributesComparator(baseAttributes, [
      JSXAttributeMock('biz', 1),
      JSXAttributeMock('fizz', 'pop'),
      JSXAttributeMock('goo', 'gazz'),
    ]),
    false,
    'baseAttributes have values and attributes have values, and the values are a subset -> false',
  );

  t.equal(
    attributesComparator(baseAttributes, [
      JSXAttributeMock('biz', 1),
      JSXAttributeMock('fizz', 'pop'),
      JSXAttributeMock('fuzz', 'lolz'),
    ]),
    true,
    'baseAttributes have values and attributes have values, and the values are the same -> true',
  );

  t.equal(
    attributesComparator(baseAttributes, [
      JSXAttributeMock('biz', 1),
      JSXAttributeMock('fizz', 'pop'),
      JSXAttributeMock('fuzz', 'lolz'),
      JSXAttributeMock('dar', 'tee'),
    ]),
    true,
    'baseAttributes have values and attributes have values, and the values are a superset -> true',
  );

  t.end();
});
