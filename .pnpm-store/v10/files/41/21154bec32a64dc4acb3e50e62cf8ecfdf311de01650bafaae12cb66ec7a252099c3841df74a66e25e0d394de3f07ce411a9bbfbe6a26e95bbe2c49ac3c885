import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import isInteractiveElement from '../../../src/util/isInteractiveElement';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import {
  genElementSymbol,
  genIndeterminantInteractiveElements,
  genInteractiveElements,
  genInteractiveRoleElements,
  genNonInteractiveElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

test('isInteractiveElement', (t) => {
  t.equal(
    isInteractiveElement(undefined, []),
    false,
    'identifies them as interactive elements',
  );

  t.test('interactive elements', (st) => {
    genInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });

    st.end();
  });

  t.test('interactive role elements', (st) => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      st.equal(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });

    st.end();
  });

  t.test('non-interactive elements', (st) => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });

    st.end();
  });

  t.test('non-interactive role elements', (st) => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      st.equal(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });

    st.end();
  });

  t.test('indeterminate elements', (st) => {
    genIndeterminantInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as an interactive element`,
      );
    });

    st.end();
  });

  t.equal(
    isInteractiveElement('CustomComponent', JSXElementMock()),
    false,
    'JSX elements are not interactive',
  );

  t.end();
});
