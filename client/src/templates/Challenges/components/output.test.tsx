import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Output from './output';

describe('Output', () => {
  it.each(['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'])(
    'renders %s as text instead of decoding it',
    entity => {
      render(<Output defaultOutput='' output={entity} />);

      expect(screen.getByText(entity)).toBeInTheDocument();
    }
  );

  it('renders HTML entities inside a larger string as text instead of decoding them', () => {
    render(<Output defaultOutput='' output={'Dolce &amp; Gabbana'} />);

    expect(screen.getByText('Dolce &amp; Gabbana')).toBeInTheDocument();
    expect(screen.queryByText('Dolce & Gabbana')).not.toBeInTheDocument();
  });

  it('does not change normal ampersands', () => {
    render(<Output defaultOutput='' output={'Tom & Jerry'} />);

    expect(screen.getByText('Tom & Jerry')).toBeInTheDocument();
  });

  it('renders allowed HTML tags in console output', () => {
    render(
      <Output
        defaultOutput=''
        output={
          'You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon'
        }
      />
    );

    expect(
      screen.getByText('myName', { selector: 'code' })
    ).toBeInTheDocument();
    expect(screen.getByText('var', { selector: 'code' })).toBeInTheDocument();
  });

  it('renders encoded HTML tags as text instead of interpreting them as HTML', () => {
    render(
      <Output defaultOutput='' output={'&lt;code&gt;myName&lt;/code&gt;'} />
    );

    expect(
      screen.getByText('&lt;code&gt;myName&lt;/code&gt;')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('myName', { selector: 'code' })
    ).not.toBeInTheDocument();
  });

  it('renders the default output when output is empty', () => {
    render(<Output defaultOutput='Default output' output='' />);

    expect(screen.getByText('Default output')).toBeInTheDocument();
  });

  it('removes disallowed HTML tags from console output', () => {
    render(
      <Output
        defaultOutput=''
        output={
          '<img alt="bad" src=x onerror=alert("bad")><iframe title="bad"></iframe>'
        }
      />
    );

    expect(screen.queryByAltText('bad')).not.toBeInTheDocument();
    expect(screen.queryByTitle('bad')).not.toBeInTheDocument();
  });
});
