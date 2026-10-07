import test from 'tape';

import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForMenuitem from '../../../../src/util/implicitRoles/menuitem';

test('isAbstractRole', (t) => {
  t.equal(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', 'command')]),
    'menuitem',
    'works for menu items',
  );

  t.equal(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', 'checkbox')]),
    'menuitemcheckbox',
    'works for menu item checkboxes',
  );

  t.equal(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', 'radio')]),
    'menuitemradio',
    'works for menu item radios',
  );

  t.equal(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', '')]),
    '',
    'works for non-toolbars',
  );

  t.equal(
    getImplicitRoleForMenuitem([JSXAttributeMock('type', true)]),
    '',
    'works for the true case',
  );

  t.end();
});
