import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import InteractiveEditor, { type InteractiveFile } from './interactive-editor';

vi.mock('@codesandbox/sandpack-react', async () => {
  const React = await import('react');

  const Panel = ({
    children,
    fallbackTestId
  }: {
    children?: React.ReactNode;
    fallbackTestId: string;
  }) => React.createElement('div', { 'data-testid': fallbackTestId }, children);

  return {
    FileTabs: () => React.createElement('div', { 'data-testid': 'file-tabs' }),
    SandpackConsole: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      'data-playwright-test-label'?: string;
    }) =>
      React.createElement(
        Panel,
        { fallbackTestId: props['data-playwright-test-label'] ?? 'sp-console' },
        children
      ),
    SandpackLayout: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(
        Panel,
        { fallbackTestId: 'sandpack-layout' },
        children
      ),
    SandpackPreview: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      'data-playwright-test-label'?: string;
    }) =>
      React.createElement(
        Panel,
        { fallbackTestId: props['data-playwright-test-label'] ?? 'sp-preview' },
        children
      ),
    SandpackProvider: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(
        Panel,
        { fallbackTestId: 'sandpack-provider' },
        children
      ),
    SandpackStack: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children)
  };
});

vi.mock('./custom-monaco-editor', () => ({
  default: () => <div data-testid='custom-monaco-editor' />
}));

const htmlFile: InteractiveFile = {
  ext: 'html',
  name: 'index',
  contents: '<h1>Hello</h1>',
  contentsHtml: '<h1>Hello</h1>'
};

const jsFile: InteractiveFile = {
  ext: 'js',
  name: 'script',
  contents: 'console.log("Hello");',
  contentsHtml: 'console.log("Hello");'
};

describe('<InteractiveEditor />', () => {
  it('shows preview and console panels for HTML with JavaScript', () => {
    render(<InteractiveEditor files={[htmlFile, jsFile]} />);

    expect(screen.getByTestId('sp-preview')).toBeInTheDocument();
    expect(screen.getByTestId('sp-console')).toBeInTheDocument();
  });

  it('shows only the console panel for JavaScript-only files', () => {
    render(<InteractiveEditor files={[jsFile]} />);

    expect(screen.getByTestId('sp-console')).toBeInTheDocument();
    expect(screen.queryByTestId('sp-preview')).not.toBeInTheDocument();
  });
});
