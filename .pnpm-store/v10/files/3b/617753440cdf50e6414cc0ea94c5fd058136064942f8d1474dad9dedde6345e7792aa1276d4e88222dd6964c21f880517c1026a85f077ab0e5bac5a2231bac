import test from 'tape';

import getImplicitRole from '../../../src/util/getImplicitRole';

test('getImplicitRole', (t) => {
  t.equal(
    getImplicitRole(
      'li',
      [],
    ),
    'listitem',
    'has implicit, returns implicit role',
  );

  t.equal(
    getImplicitRole(
      'div',
      [],
    ),
    null,
    'lacks implicit, returns null',
  );

  t.end();
});
