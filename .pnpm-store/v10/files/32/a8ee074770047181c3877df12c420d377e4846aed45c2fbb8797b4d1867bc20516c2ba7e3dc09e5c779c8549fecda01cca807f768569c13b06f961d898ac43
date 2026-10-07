import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import isNonInteractiveRole from '../../../src/util/isNonInteractiveRole';
import {
  genElementSymbol,
  genInteractiveRoleElements,
  genNonInteractiveRoleElements,
} from '../../../__mocks__/genInteractives';

test('isNonInteractiveRole', (t) => {
  t.equal(
    isNonInteractiveRole(undefined, []),
    false,
    'identifies JSX Components (no tagName) as non-interactive elements',
  );

  t.test('elements with a non-interactive role', (st) => {
    genNonInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      st.equal(
        isNonInteractiveRole(
          elementType(openingElement),
          attributes,
        ),
        true,
        `identifies \`${genElementSymbol(openingElement)}\` as a non-interactive role element`,
      );
    });

    st.end();
  });

  t.equal(
    isNonInteractiveRole('div', []),
    false,
    'does NOT identify elements without a role as non-interactive role elements',
  );

  t.test('elements with an interactive role', (st) => {
    genInteractiveRoleElements().forEach(({ openingElement }) => {
      const { attributes } = openingElement;

      st.equal(
        isNonInteractiveRole(
          elementType(openingElement),
          attributes,
        ),
        false,
        `does NOT identify \`${genElementSymbol(openingElement)}\` as a non-interactive role element`,
      );
    });

    st.end();
  });

  t.end();
});
