import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import isFocusable from '../../../src/util/isFocusable';
import {
  genElementSymbol,
  genInteractiveElements,
  genNonInteractiveElements,
} from '../../../__mocks__/genInteractives';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

function mergeTabIndex(index, attributes) {
  return [].concat(attributes, JSXAttributeMock('tabIndex', index));
}

test('isFocusable', (t) => {
  t.test('interactive elements', (st) => {
    genInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isFocusable(
          elementType(openingElement),
          openingElement.attributes,
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(-1, openingElement.attributes),
        ),
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of -1 as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(0, openingElement.attributes),
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 0 as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(1, openingElement.attributes),
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 1 as a focusable element`,
      );
    });

    st.end();
  });

  t.test('non-interactive elements', (st) => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isFocusable(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(-1, openingElement.attributes),
        ),
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of -1 as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(0, openingElement.attributes),
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 0 as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex(1, openingElement.attributes),
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` with tabIndex of 1 as a focusable element`,
      );

      st.equal(
        isFocusable(
          elementType(openingElement),
          mergeTabIndex('bogus', openingElement.attributes),
        ),
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` with tabIndex of 'bogus' as a focusable element`,
      );
    });

    st.end();
  });

  t.end();
});
