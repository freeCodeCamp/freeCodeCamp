import test from 'tape';

import isDisabledElement from '../../../src/util/isDisabledElement';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('isDisabledElement', (t) => {
  t.test('HTML5', (st) => {
    st.equal(
      isDisabledElement([
        JSXAttributeMock('disabled', 'disabled'),
      ]),
      true,
      'identifies HTML5 disabled elements',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('disabled', null),
      ]),
      true,
      'identifies HTML5 disabled elements with null as the value',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('disabled', undefined),
      ]),
      false,
      'does not identify HTML5 disabled elements with undefined as the value',
    );

    st.end();
  });

  t.test('ARIA', (st) => {
    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', 'true'),
      ]),
      true,
      'does not identify ARIA disabled elements',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', true),
      ]),
      true,
      'does not identify ARIA disabled elements',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', 'false'),
      ]),
      false,
      'does not identify ARIA disabled elements',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', false),
      ]),
      false,
      'does not identify ARIA disabled elements',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', null),
      ]),
      false,
      'does not identify ARIA disabled elements with null as the value',
    );

    st.equal(
      isDisabledElement([
        JSXAttributeMock('aria-disabled', undefined),
      ]),
      false,
      'does not identify ARIA disabled elements with undefined as the value',
    );

    st.end();
  });

  t.end();
});
