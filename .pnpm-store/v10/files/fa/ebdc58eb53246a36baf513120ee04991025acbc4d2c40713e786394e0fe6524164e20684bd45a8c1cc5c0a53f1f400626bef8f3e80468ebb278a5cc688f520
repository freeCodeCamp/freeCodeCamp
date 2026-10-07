import test from 'tape';

import isSemanticRoleElement from '../../../src/util/isSemanticRoleElement';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('isSemanticRoleElement', (t) => {
  t.equal(
    isSemanticRoleElement('input', [
      JSXAttributeMock('type', 'checkbox'),
      JSXAttributeMock('role', 'switch'),
    ]),
    true,
    'identifies semantic role elements',
  );

  t.test('rejects non-semantics role elements', (st) => {
    st.equal(
      isSemanticRoleElement('input', [
        JSXAttributeMock('type', 'radio'),
        JSXAttributeMock('role', 'switch'),
      ]),
      false,
    );

    st.equal(
      isSemanticRoleElement('input', [
        JSXAttributeMock('type', 'text'),
        JSXAttributeMock('role', 'combobox'),
      ]),
      false,
    );

    st.equal(
      isSemanticRoleElement('button', [
        JSXAttributeMock('role', 'switch'),
        JSXAttributeMock('aria-pressed', 'true'),
      ]),
      false,
    );

    st.equal(
      isSemanticRoleElement('input', [
        JSXAttributeMock('role', 'switch'),
      ]),
      false,
    );

    st.end();
  });

  t.doesNotThrow(
    () => {
      isSemanticRoleElement('input', [
        JSXAttributeMock('type', 'checkbox'),
        JSXAttributeMock('role', 'checkbox'),
        JSXAttributeMock('aria-checked', 'false'),
        JSXAttributeMock('aria-labelledby', 'foo'),
        JSXAttributeMock('tabindex', '0'),
        {
          type: 'JSXSpreadAttribute',
          argument: {
            type: 'Identifier',
            name: 'props',
          },
        },
      ]);
    },
    'does not throw on JSXSpreadAttribute',
  );

  t.end();
});
