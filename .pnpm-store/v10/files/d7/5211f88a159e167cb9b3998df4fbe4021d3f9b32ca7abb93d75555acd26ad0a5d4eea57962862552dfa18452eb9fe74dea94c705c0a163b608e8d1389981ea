import test from 'tape';
import { elementType } from 'jsx-ast-utils';

import hasAccessibleChild from '../../../src/util/hasAccessibleChild';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';

test('hasAccessibleChild', (t) => {
  t.equal(
    hasAccessibleChild(JSXElementMock('div', []), elementType),
    false,
    'has no children and does not set dangerouslySetInnerHTML -> false',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [JSXAttributeMock('dangerouslySetInnerHTML', true)], []),
      elementType,
    ),
    true,
    'has no children and sets dangerouslySetInnerHTML -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock(
        'div',
        [],
        [{
          type: 'Literal',
          value: 'foo',
        }],
      ),
      elementType,
    ),
    true,
    'has children + Literal child -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [JSXElementMock('div', [])]),
      elementType,
    ),
    true,
    'has children + visible JSXElement child -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [{
        type: 'JSXText',
        value: 'foo',
      }]),
      elementType,
    ),
    true,
    'has children + JSText element -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXElementMock('div', [
          JSXAttributeMock('aria-hidden', true),
        ]),
      ]),
      elementType,
    ),
    false,
    'has children + hidden child JSXElement -> false',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXExpressionContainerMock({
          type: 'Identifier',
          name: 'foo',
        }),
      ]),
      elementType,
    ),
    true,
    'defined JSXExpressionContainer -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXExpressionContainerMock({
          type: 'Identifier',
          name: 'undefined',
        }),
      ]),
      elementType,
    ),
    false,
    'has children + undefined JSXExpressionContainer -> false',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [{
        type: 'Unknown',
      }]),
      elementType,
    ),
    false,
    'unknown child type -> false',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [JSXAttributeMock('children', true)], []),
      elementType,
    ),
    true,
    'children passed as a prop -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXElementMock('input', [JSXAttributeMock('type', 'hidden')]),
      ]),
      elementType,
    ),
    false,
    'has chidren -> hidden child input JSXElement -> false',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXElementMock('CustomInput', [JSXAttributeMock('type', 'hidden')]),
      ]),
      elementType,
    ),
    true,
    'has children + custom JSXElement of type hidden -> true',
  );

  t.equal(
    hasAccessibleChild(
      JSXElementMock('div', [], [
        JSXElementMock('CustomInput', [JSXAttributeMock('type', 'hidden')]),
      ]),
      () => 'input',
    ),
    false,
    'custom JSXElement mapped to input if type is hidden -> false',
  );

  t.end();
});
