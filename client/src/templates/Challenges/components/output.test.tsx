import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  createFormattedOutput,
  createTextOutput
} from '../utils/console-output';
import Output from './output';

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

describe('<Output />', () => {
  it('renders the default output when the console is empty', () => {
    render(<Output defaultOutput='Default output' output={[]} />);

    expect(screen.getByRole('region')).toHaveTextContent('Default output');
  });

  it('renders user output as text without interpreting HTML', () => {
    render(
      <Output
        defaultOutput=''
        output={[
          createTextOutput('Dolce &amp; <code>Gabbana</code> <script />')
        ]}
      />
    );

    const output = screen.getByRole('region');
    expect(output).toHaveTextContent(
      'Dolce &amp; <code>Gabbana</code> <script />'
    );
    expect(
      screen.queryByText('Gabbana', { selector: 'code' })
    ).not.toBeInTheDocument();
  });

  it('renders supported formatting in test feedback', () => {
    render(
      <Output
        defaultOutput=''
        output={[
          createFormattedOutput(
            '<p>Use <code>&lt;main&gt;</code> and <strong>try again</strong>.</p>'
          )
        ]}
      />
    );

    const output = screen.getByRole('region');
    expect(output).toHaveTextContent('Use <main> and try again.');
    expect(screen.getByText('<main>', { selector: 'code' })).toBeVisible();
    expect(screen.getByText('try again', { selector: 'strong' })).toBeVisible();
  });

  it('separates console entries with new lines', () => {
    render(
      <Output
        defaultOutput=''
        output={[createTextOutput('first'), createTextOutput('second')]}
      />
    );

    expect(screen.getByRole('region').textContent).toBe('first\nsecond');
  });
});
