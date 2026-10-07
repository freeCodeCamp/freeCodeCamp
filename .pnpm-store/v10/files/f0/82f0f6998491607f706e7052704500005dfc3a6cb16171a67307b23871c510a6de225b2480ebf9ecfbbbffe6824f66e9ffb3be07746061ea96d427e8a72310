import test from 'tape';

import isNonLiteralProperty from '../../../src/util/isNonLiteralProperty';
import IdentifierMock from '../../../__mocks__/IdentifierMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXSpreadAttributeMock from '../../../__mocks__/JSXSpreadAttributeMock';
import JSXTextMock from '../../../__mocks__/JSXTextMock';
import LiteralMock from '../../../__mocks__/LiteralMock';

const theProp = 'theProp';

const spread = JSXSpreadAttributeMock('theSpread');

test('isNonLiteralProperty', (t) => {
  t.equal(
    isNonLiteralProperty([], theProp),
    false,
    'does not identify them as non-literal role elements',
  );

  t.equal(
    isNonLiteralProperty([JSXAttributeMock(theProp, LiteralMock('theRole'))], theProp),
    false,
    'does not identify elements with a literal property as non-literal role elements without spread operator',
  );

  t.equal(
    isNonLiteralProperty([spread, JSXAttributeMock(theProp, LiteralMock('theRole'))], theProp),
    false,
    'does not identify elements with a literal property as non-literal role elements with spread operator',
  );

  t.equal(
    isNonLiteralProperty([JSXAttributeMock(theProp, JSXTextMock('theRole'))], theProp),
    false,
    'identifies elements with a JSXText property as non-literal role elements',
  );

  t.equal(
    isNonLiteralProperty([JSXAttributeMock(theProp, IdentifierMock('undefined'))], theProp),
    false,
    'does not identify elements with a property of undefined as non-literal role elements',
  );

  t.equal(
    isNonLiteralProperty([JSXAttributeMock(theProp, IdentifierMock('theIdentifier'))], theProp),
    true,
    'identifies elements with an expression property as non-literal role elements',
  );

  t.end();
});
