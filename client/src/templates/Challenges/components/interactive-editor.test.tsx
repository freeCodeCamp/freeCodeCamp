import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import InteractiveEditor, { type InteractiveFile } from './interactive-editor';

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
