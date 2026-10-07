import test from 'tape';

import getComputedRole from '../../../src/util/getComputedRole';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getComputedRole', (t) => {
  t.equal(
    getComputedRole(
      'div',
      [JSXAttributeMock('role', 'button')],
    ),
    'button',
    'explicit role + valid role -> returns the role',
  );

  t.equal(
    getComputedRole(
      'li',
      [JSXAttributeMock('role', 'beeswax')],
    ),
    'listitem',
    'explicit role + invalid role + has implicit -> returns the implicit role',
  );

  t.equal(
    getComputedRole(
      'div',
      [JSXAttributeMock('role', 'beeswax')],
    ),
    null,
    'explicit role + invalid role + lacks implicit -> returns null',
  );

  t.equal(
    getComputedRole(
      'li',
      [],
    ),
    'listitem',
    'explicit role + no role + has implicit -> returns the implicit role',
  );

  t.equal(
    getComputedRole(
      'div',
      [],
    ),
    null,
    'explicit role + no role + lacks implicit -> returns null',
  );

  t.equal(
    getComputedRole(
      'li',
      [JSXAttributeMock('role', 'beeswax')],
    ),
    'listitem',
    'implicit role + has implicit -> returns the implicit role',
  );

  t.equal(
    getComputedRole(
      'div',
      [],
    ),
    null,
    'implicit role + lacks implicit -> returns null',
  );

  t.end();
});
