import test from 'tape';

import isContentEditable from '../../../src/util/isContentEditable';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('isContentEditable - HTML5', (t) => {
  t.equal(
    isContentEditable('some tag', [
      JSXAttributeMock('contentEditable', 'true'),
    ]),
    true,
    'identifies HTML5 contentEditable elements',
  );

  t.test('not content editable', (st) => {
    st.equal(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', null),
      ]),
      false,
      'does not identify HTML5 content editable elements with null as the value',
    );

    st.equal(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', undefined),
      ]),
      false,
      'does not identify HTML5 content editable elements with undefined as the value',
    );

    st.equal(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', true),
      ]),
      false,
      'does not identify HTML5 content editable elements with true as the value',
    );

    st.equal(
      isContentEditable('some tag', [
        JSXAttributeMock('contentEditable', 'false'),
      ]),
      false,
      'does not identify HTML5 content editable elements with "false" as the value',
    );

    st.end();
  });

  t.end();
});
