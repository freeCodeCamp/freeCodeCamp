import test from 'tape';

import getExplicitRole from '../../../src/util/getExplicitRole';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getExplicitRole', (t) => {
  t.equal(
    getExplicitRole(
      'div',
      [JSXAttributeMock('role', 'button')],
    ),
    'button',
    'valid role returns the role',
  );

  t.equal(
    getExplicitRole(
      'div',
      [JSXAttributeMock('role', 'beeswax')],
    ),
    null,
    'invalid role returns null',
  );

  t.equal(
    getExplicitRole(
      'div',
      [],
    ),
    null,
    'no role returns null',
  );

  t.end();
});
