import { describe, expect, it } from 'vitest';

import {
  createFormattedOutput,
  createTextOutput,
  getConsoleOutputText,
  truncateConsoleOutput
} from './console-output';

describe('console output helpers', () => {
  it('converts allowed markup into structured output', () => {
    expect(
      createFormattedOutput(
        '<p>Use <code>&lt;main&gt;</code> and <em>retry</em>.</p>'
      )
    ).toEqual({
      type: 'formatted',
      nodes: [
        { type: 'text', value: 'Use ' },
        {
          type: 'element',
          tag: 'code',
          children: [{ type: 'text', value: '<main>' }]
        },
        { type: 'text', value: ' and ' },
        {
          type: 'element',
          tag: 'em',
          children: [{ type: 'text', value: 'retry' }]
        },
        { type: 'text', value: '.' }
      ]
    });
  });

  it('drops unsupported elements', () => {
    expect(
      getConsoleOutputText(
        createFormattedOutput(
          '<span>visible</span><script>not visible</script>'
        )
      )
    ).toBe('visible');
  });

  it('truncates text without flattening entries that fit', () => {
    const formatted = createFormattedOutput('<code>first</code>');

    expect(
      truncateConsoleOutput(
        [formatted, createTextOutput('second')],
        9,
        ' truncated'
      )
    ).toEqual([formatted, { type: 'text', value: 'sec truncated' }]);
  });
});
