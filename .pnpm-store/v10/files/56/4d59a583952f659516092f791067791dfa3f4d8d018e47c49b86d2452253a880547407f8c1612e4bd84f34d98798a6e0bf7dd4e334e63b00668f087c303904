import test from 'tape';

import JSXAttributeMock from '../../../../__mocks__/JSXAttributeMock';
import getImplicitRoleForInput from '../../../../src/util/implicitRoles/input';

test('isAbstractRole', (t) => {
  t.test('works for buttons', (st) => {
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'button')]),
      'button',
    );

    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'image')]),
      'button',
    );

    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'reset')]),
      'button',
    );

    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'submit')]),
      'button',
    );

    st.end();
  });

  t.equal(
    getImplicitRoleForInput([JSXAttributeMock('type', 'checkbox')]),
    'checkbox',
    'works for checkboxes',
  );

  t.equal(
    getImplicitRoleForInput([JSXAttributeMock('type', 'radio')]),
    'radio',
    'works for radios',
  );

  t.equal(
    getImplicitRoleForInput([JSXAttributeMock('type', 'range')]),
    'slider',
    'works for ranges',
  );

  t.test('works for textboxes', (st) => {
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'email')]),
      'textbox',
    );
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'password')]),
      'textbox',
    );
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'search')]),
      'textbox',
    );
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'tel')]),
      'textbox',
    );
    st.equal(
      getImplicitRoleForInput([JSXAttributeMock('type', 'url')]),
      'textbox',
    );

    st.end();
  });

  t.equal(
    getImplicitRoleForInput([JSXAttributeMock('type', '')]),
    'textbox',
    'works for the default case',
  );

  t.equal(
    getImplicitRoleForInput([JSXAttributeMock('type', true)]),
    'textbox',
    'works for the true case',
  );

  t.end();
});
