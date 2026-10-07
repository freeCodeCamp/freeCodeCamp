import test from 'tape';

import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForMenu from '../../../../src/util/implicitRoles/menu';

test('isAbstractRole', (t) => {
  t.equal(
    getImplicitRoleForMenu([JSXAttributeMock('type', 'toolbar')]),
    'toolbar',
    'works for toolbars',
  );

  t.equal(
    getImplicitRoleForMenu([JSXAttributeMock('type', '')]),
    '',
    'works for non-toolbars',
  );

  t.end();
});
