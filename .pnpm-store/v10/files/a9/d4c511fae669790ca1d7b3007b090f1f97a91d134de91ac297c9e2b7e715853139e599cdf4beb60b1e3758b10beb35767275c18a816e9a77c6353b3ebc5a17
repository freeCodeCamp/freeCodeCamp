import test from 'tape';

import mayHaveAccessibleLabel from '../../../src/util/mayHaveAccessibleLabel';
import JSXAttributeMock from '../../../__mocks__/JSXAttributeMock';
import JSXElementMock from '../../../__mocks__/JSXElementMock';
import JSXExpressionContainerMock from '../../../__mocks__/JSXExpressionContainerMock';
import JSXSpreadAttributeMock from '../../../__mocks__/JSXSpreadAttributeMock';
import JSXTextMock from '../../../__mocks__/JSXTextMock';
import LiteralMock from '../../../__mocks__/LiteralMock';

test('mayHaveAccessibleLabel', (t) => {
  t.equal(
    mayHaveAccessibleLabel(
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
      5,
    ),
    false,
    'no label returns false',
  );

  t.test('label via attributes', (st) => {
    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-label', 'A delicate label'),
      ], [])),
      true,
      'aria-label returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-label', ''),
      ], [])),
      false,
      'aria-label without content returns false',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-label', ' '),
      ], [])),
      false,
      'aria-label with only spaces whitespace, should return false',
    );
    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-label', '\n'),
      ], [])),
      false,
      'aria-label with only newline whitespace, should return false',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-labelledby', 'elementId'),
      ], [])),
      true,
      'aria-labelledby returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-labelledby', ''),
      ], [])),
      false,
      'aria-labelledby without content returns false',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('aria-labelledby', 'elementId', true),
      ], [])),
      true,
      'aria-labelledby with an expression container, should return true',
    );

    st.end();
  });

  t.test('label via custom label attribute', (st) => {
    const customLabelProp = 'cowbell';

    st.equal(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [
          JSXAttributeMock(customLabelProp, 'A delicate label'),
        ], []),
        1,
        [customLabelProp],
      ),
      true,
      'aria-label returns true',
    );

    st.end();
  });

  t.test('text label', (st) => {
    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        LiteralMock('A fancy label'),
      ])),
      true,
      'Literal text, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        LiteralMock(' '),
      ])),
      false,
      'Literal spaces whitespace, returns false',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        LiteralMock('\n'),
      ])),
      false,
      'Literal newline whitespace, returns false',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXTextMock('A fancy label'),
      ])),
      true,
      'JSXText, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXElementMock('div', [], [
          JSXTextMock('A fancy label'),
        ]),
      ])),
      false,
      'label is outside of default depth, returns false',
    );

    st.equal(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [], [
          JSXElementMock('div', [], [
            JSXTextMock('A fancy label'),
          ]),
        ]),
        2,
      ),
      true,
      'label is inside of custom depth, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(
        JSXElementMock('div', [], [
          JSXElementMock('div', [], [
            JSXElementMock('span', [], []),
            JSXElementMock('span', [], [
              JSXElementMock('span', [], []),
              JSXElementMock('span', [], [
                JSXElementMock('span', [], [
                  JSXElementMock('span', [], [
                    JSXTextMock('A fancy label'),
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
        6,
      ),
      true,
      'deep nesting, returns true',
    );

    st.end();
  });

  t.test('image content', (st) => {
    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXElementMock('img', [
          JSXAttributeMock('src', 'some/path'),
        ]),
      ])),
      false,
      'without alt, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXElementMock('img', [
          JSXAttributeMock('src', 'some/path'),
          JSXAttributeMock('alt', 'A sensible label'),
        ]),
      ])),
      true,
      'with alt, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXElementMock('img', [
          JSXAttributeMock('src', 'some/path'),
          JSXAttributeMock('aria-label', 'A sensible label'),
        ]),
      ])),
      true,
      'with aria-label, returns true',
    );

    st.end();
  });

  t.test('Intederminate situations', (st) => {
    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [], [
        JSXExpressionContainerMock('mysteryBox'),
      ])),
      true,
      'expression container children, returns true',
    );

    st.equal(
      mayHaveAccessibleLabel(JSXElementMock('div', [
        JSXAttributeMock('style', 'some-junk'),
        JSXSpreadAttributeMock('props'),
      ], [])),
      true,
      'spread operator in attributes, returns true',
    );

    st.end();
  });

  t.end();
});
