import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import CustomMonacoEditor from './custom-monaco-editor';

vi.mock('@codesandbox/sandpack-react', () => ({
  useActiveCode: () => ({
    code: '<h4>Early Challenges</h4>',
    updateCode: vi.fn()
  }),
  useSandpack: () => ({
    sandpack: { activeFile: '/index.html' }
  })
}));

vi.mock('@loadable/component', () => ({
  default:
    () =>
    ({
      language,
      options
    }: {
      language: string;
      options: { linkedEditing?: boolean };
    }) =>
      React.createElement('div', {
        'data-testid': 'monaco-editor',
        'data-language': language,
        'data-linked-editing': String(options.linkedEditing)
      })
}));

describe('<CustomMonacoEditor />', () => {
  it('does not link HTML opening and closing tags while editing', () => {
    render(<CustomMonacoEditor />);

    const editor = screen.getByTestId('monaco-editor');
    expect(editor).toHaveAttribute('data-language', 'html');
    expect(editor).toHaveAttribute('data-linked-editing', 'false');
  });
});
