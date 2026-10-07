import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import isNonInteractiveElement from '../../../src/util/isNonInteractiveElement';
import {
  genElementSymbol,
  genIndeterminantInteractiveElements,
  genInteractiveElements,
  genInteractiveRoleElements,
  genNonInteractiveElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

test('isNonInteractiveElement', (t) => {
  t.equal(
    isNonInteractiveElement(undefined, []),
    false,
    'identifies JSX Components (no tagName) as non-interactive elements',
  );

  t.test('non-interactive elements', (st) => {
    genNonInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });

    st.end();
  });

  t.test('non-interactive role elements', (st) => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      st.equal(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });

    st.end();
  });

  t.test('interactive elements', (st) => {
    genInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });

    st.end();
  });

  t.test('interactive role elements', (st) => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      st.equal(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });

    st.end();
  });

  t.test('indeterminate elements', (st) => {
    genIndeterminantInteractiveElements().forEach(({ openingElement }) => {
      st.equal(
        isNonInteractiveElement(
          elementType(openingElement),
          openingElement.attributes,
        ),
        false,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive element`,
      );
    });

    st.end();
  });

  t.end();
});
