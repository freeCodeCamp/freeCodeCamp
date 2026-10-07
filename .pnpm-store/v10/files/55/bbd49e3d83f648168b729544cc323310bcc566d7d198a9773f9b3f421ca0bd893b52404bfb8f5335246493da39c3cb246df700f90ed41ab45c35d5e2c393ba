import test from 'tape';
import { dom } from 'aria-query';
import { elementType } from 'jsx-ast-utils';

import isDOMElement from '../../../src/util/isDOMElement';
import JSXElementMock from '../../../__mocks__/JSXElementMock';

test('isDOMElement', (t) => {
  t.test('DOM elements', (st) => {
    dom.forEach((_, el) => {
      const element = JSXElementMock(el);

      st.equal(
        isDOMElement(elementType(element.openingElement)),
        true,
        `identifies ${el} as a DOM element`,
      );
    });

    st.end();
  });

  t.equal(
    isDOMElement(JSXElementMock('CustomElement')),
    false,
    'does not identify a custom element',
  );

  t.end();
});
