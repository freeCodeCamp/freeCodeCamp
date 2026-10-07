import test from 'tape';

import getTabIndex from '../../../src/util/getTabIndex';
import IdentifierMock from '../../../__mocks__/IdentifierMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getTabIndex', (t) => {
  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', 0)),
    0,
    'tabIndex is defined as zero -> zero',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', 1)),
    1,
    'tabIndex is defined as a positive integer -> returns it',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', -1)),
    -1,
    'tabIndex is defined as a negative integer -> returns it',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', '')),
    undefined,
    'tabIndex is defined as an empty string -> undefined',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', 9.1)),
    undefined,
    'tabIndex is defined as a float -> undefined',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', '0')),
    0,
    'tabIndex is defined as a string which converts to a number -> returns the integer',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', '0a')),
    undefined,
    'tabIndex is defined as a string which is NaN -> returns undefined',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', true)),
    undefined,
    'tabIndex is defined as true -> returns undefined',
  );
  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', false)),
    undefined,
    'tabIndex is defined as false -> returns undefined',
  );

  t.equal(
    typeof getTabIndex(JSXAttributeMock('tabIndex', () => 0)),
    'function',
    'tabIndex is defined as a function expression -> returns the correct type',
  );

  const name = 'identName';
  t.equal(
    getTabIndex(JSXAttributeMock(
      'tabIndex',
      IdentifierMock(name),
      true,
    )),
    name,
    'tabIndex is defined as a variable expression -> returns the Identifier name',
  );

  t.equal(
    getTabIndex(JSXAttributeMock('tabIndex', undefined)),
    undefined,
    'tabIndex is not defined -> returns undefined',
  );

  t.end();
});
