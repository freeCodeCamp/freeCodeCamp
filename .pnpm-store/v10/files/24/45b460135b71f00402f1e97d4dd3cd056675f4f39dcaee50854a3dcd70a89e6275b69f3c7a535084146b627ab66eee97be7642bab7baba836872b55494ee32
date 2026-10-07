import test from 'tape';

import mayContainChildComponent from '../../../src/util/mayContainChildComponent';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';

test('mayContainChildComponent', (t) => {
  t.equal(
    mayContainChildComponent(
      JSXElementMock('div', [], [
        JSXElementMock('div', [], [
          JSXElementMock('span', [], []),
          JSXElementMock('span', [], [
            JSXElementMock('span', [], []),
            JSXElementMock('span', [], [
              JSXElementMock('span', [], []),
            ]),
          ]),
        ]),
        JSXElementMock('span', [], []),
        JSXElementMock('img', [
          JSXAttributeMock('src', 'some/path'),
        ]),
      ]),
      'FancyComponent',
      5,
    ),
    false,
    'no FancyComponent returns false',
  );

  t.test('contains an indicated component', (st) => {
    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('input'),
        ]),
        'input',
      ),
      true,
      'returns true',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('FancyComponent'),
        ]),
        'FancyComponent',
      ),
      true,
      'returns true',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('div', [], [
            JSXElementMock('FancyComponent'),
          ]),
        ]),
        'FancyComponent',
      ),
      false,
      'FancyComponent is outside of default depth, should return false',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('div', [], [
            JSXElementMock('FancyComponent'),
          ]),
        ]),
        'FancyComponent',
        2,
      ),
      true,
      'FancyComponent is inside of custom depth, should return true',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('div', [], [
            JSXElementMock('span', [], []),
            JSXElementMock('span', [], [
              JSXElementMock('span', [], []),
              JSXElementMock('span', [], [
                JSXElementMock('span', [], [
                  JSXElementMock('span', [], [
                    JSXElementMock('FancyComponent'),
                  ]),
                ]),
              ]),
            ]),
          ]),
          JSXElementMock('span', [], []),
          JSXElementMock('img', [
            JSXAttributeMock('src', 'some/path'),
          ]),
        ]),
        'FancyComponent',
        6,
      ),
      true,
      'deep nesting, returns true',
    );

    st.end();
  });

  t.equal(
    mayContainChildComponent(
      JSXElementMock('div', [], [
        JSXExpressionContainerMock('mysteryBox'),
      ]),
      'FancyComponent',
    ),
    true,
    'Intederminate situations + expression container children - returns true',
  );

  t.test('Glob name matching - component name contains question mark ? - match any single character', (st) => {
    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('FancyComponent'),
        ]),
        'Fanc?Co??onent',
      ),
      true,
      'returns true',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('FancyComponent'),
        ]),
        'FancyComponent?',
      ),
      false,
      'returns false',
    );

    st.test('component name contains asterisk * - match zero or more characters', (s2t) => {
      s2t.equal(
        mayContainChildComponent(
          JSXElementMock('div', [], [
            JSXElementMock('FancyComponent'),
          ]),
          'Fancy*',
        ),
        true,
        'returns true',
      );

      s2t.equal(
        mayContainChildComponent(
          JSXElementMock('div', [], [
            JSXElementMock('FancyComponent'),
          ]),
          '*Component',
        ),
        true,
        'returns true',
      );

      s2t.equal(
        mayContainChildComponent(
          JSXElementMock('div', [], [
            JSXElementMock('FancyComponent'),
          ]),
          'Fancy*C*t',
        ),
        true,
        'returns true',
      );

      s2t.end();
    });

    st.end();
  });

  t.test('using a custom elementType function', (st) => {
    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('CustomInput'),
        ]),
        'input',
        2,
        () => 'input',
      ),
      true,
      'returns true when the custom elementType returns the proper name',
    );

    st.equal(
      mayContainChildComponent(
        JSXElementMock('div', [], [
          JSXElementMock('CustomInput'),
        ]),
        'input',
        2,
        () => 'button',
      ),
      false,
      'returns false when the custom elementType returns a wrong name',
    );

    st.end();
  });

  t.end();
});
