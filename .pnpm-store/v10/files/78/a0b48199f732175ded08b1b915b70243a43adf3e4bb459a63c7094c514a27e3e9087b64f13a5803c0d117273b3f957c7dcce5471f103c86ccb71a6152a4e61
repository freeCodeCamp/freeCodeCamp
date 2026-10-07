import test from 'tape';

import getElementType from '../../../src/util/getElementType';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';

test('getElementType', (t) => {
  t.test('no settings in context', (st) => {
    const elementType = getElementType({ settings: {} });

    st.equal(
      elementType(JSXElementMock('input').openingElement),
      'input',
      'returns the exact tag name for a DOM element',
    );

    st.equal(
      elementType(JSXElementMock('CustomInput').openingElement),
      'CustomInput',
      'returns the exact tag name for a custom element',
    );

    st.equal(
      elementType(JSXElementMock('toString').openingElement),
      'toString',
      'returns the exact tag name for names that are in Object.prototype',
    );

    st.equal(
      elementType(JSXElementMock('span', [JSXAttributeMock('as', 'h1')]).openingElement),
      'span',
      'returns the default tag name provided',
    );

    st.end();
  });

  t.test('components settings in context', (st) => {
    const elementType = getElementType({
      settings: {
        'jsx-a11y': {
          components: {
            CustomInput: 'input',
          },
        },
      },
    });

    st.equal(
      elementType(JSXElementMock('input').openingElement),
      'input',
      'returns the exact tag name for a DOM element',
    );

    st.equal(
      elementType(JSXElementMock('CustomInput').openingElement),
      'input',
      'returns the mapped tag name for a custom element',
    );

    st.equal(
      elementType(JSXElementMock('CityInput').openingElement),
      'CityInput',
      'returns the exact tag name for a custom element not in the components map',
    );

    st.equal(
      elementType(JSXElementMock('span', [JSXAttributeMock('as', 'h1')]).openingElement),
      'span',
      'return the default tag name since not polymorphicPropName was provided',
    );

    st.end();
  });

  t.test('polymorphicPropName settings in context', (st) => {
    const elementType = getElementType({
      settings: {
        'jsx-a11y': {
          polymorphicPropName: 'asChild',
          components: {
            CustomButton: 'button',
          },
        },
      },
    });

    st.equal(
      elementType(JSXElementMock('span', [JSXAttributeMock('asChild', 'h1')]).openingElement),
      'h1',
      'returns the tag name provided by the polymorphic prop, "asChild", defined in the settings',
    );

    st.equal(
      elementType(JSXElementMock('CustomButton', [JSXAttributeMock('asChild', 'a')]).openingElement),
      'a',
      'returns the tag name provided by the polymorphic prop, "asChild", defined in the settings instead of the component mapping tag',
    );

    st.equal(
      elementType(JSXElementMock('CustomButton', [JSXAttributeMock('as', 'a')]).openingElement),
      'button',
      'returns the tag name provided by the componnet mapping if the polymorphic prop, "asChild", defined in the settings is not set',
    );

    st.end();
  });

  t.test('polymorphicPropName settings and explicitly defined polymorphicAllowList in context', (st) => {
    const elementType = getElementType({
      settings: {
        'jsx-a11y': {
          polymorphicPropName: 'asChild',
          polymorphicAllowList: [
            'Box',
            'Icon',
          ],
          components: {
            Box: 'div',
            Icon: 'svg',
          },
        },
      },
    });

    st.equal(
      elementType(JSXElementMock('Spinner', [JSXAttributeMock('asChild', 'img')]).openingElement),
      'Spinner',
      'does not use the polymorphic prop if polymorphicAllowList is defined, but element is not part of polymorphicAllowList',
    );

    st.equal(
      elementType(JSXElementMock('Icon', [JSXAttributeMock('asChild', 'img')]).openingElement),
      'img',
      'uses the polymorphic prop if it is in explicitly defined polymorphicAllowList',
    );

    st.equal(
      elementType(JSXElementMock('Box', [JSXAttributeMock('asChild', 'span')]).openingElement),
      'span',
      'returns the tag name provided by the polymorphic prop, "asChild", defined in the settings instead of the component mapping tag',
    );

    st.equal(
      elementType(JSXElementMock('Box', [JSXAttributeMock('as', 'a')]).openingElement),
      'div',
      'returns the tag name provided by the component mapping if the polymorphic prop, "asChild", defined in the settings is not set',
    );

    st.end();
  });

  t.end();
});
