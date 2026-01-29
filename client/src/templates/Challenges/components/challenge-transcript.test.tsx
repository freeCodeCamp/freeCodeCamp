import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import store from 'store';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ChallengeTranscript from './challenge-transcript';

const baseProps = {
  transcript: 'Sample transcript text',
  shouldPersistExpanded: false
};

describe('<ChallengeTranscript />', () => {
  afterEach(() => {
    store.clearAll();
  });

  it('renders the transcript heading', () => {
    render(<ChallengeTranscript {...baseProps} />);
    expect(screen.getByText('learn.transcript')).toBeVisible();
  });

  it('renders collapsed by default', () => {
    render(<ChallengeTranscript {...baseProps} />);
    expect(screen.getByTestId('challenge-transcript')).not.toHaveAttribute(
      'open'
    );
    expect(screen.getByText('Sample transcript text')).not.toBeVisible();
  });

  it("renders collapsed when localstorage 'fcc-transcript-expanded = false'", () => {
    store.set('fcc-transcript-expanded', false);
    render(<ChallengeTranscript {...baseProps} />);
    expect(screen.getByTestId('challenge-transcript')).not.toHaveAttribute(
      'open'
    );
    expect(screen.getByText('Sample transcript text')).not.toBeVisible();
  });

  it("renders expanded when 'fcc-transcript-expanded = true' and shouldPersistExpanded = true", () => {
    store.set('fcc-transcript-expanded', true);
    render(<ChallengeTranscript {...baseProps} shouldPersistExpanded={true} />);
    expect(screen.getByTestId('challenge-transcript')).toHaveAttribute('open');
    expect(screen.getByText('Sample transcript text')).toBeVisible();
  });

  it('writes to localstorage when shouldPersistExpanded = true', () => {
    const setSpy = vi.spyOn(store, 'set');
    render(<ChallengeTranscript {...baseProps} shouldPersistExpanded={true} />);
    fireEvent.click(screen.getByText('learn.transcript'));
    expect(setSpy).toHaveBeenCalledWith('fcc-transcript-expanded', true);
    setSpy.mockRestore();
  });

  it('does not write to localstorage when shouldPersistExpanded = false', () => {
    const setSpy = vi.spyOn(store, 'set');
    render(<ChallengeTranscript {...baseProps} />);
    fireEvent.click(screen.getByText('learn.transcript'));
    expect(setSpy).not.toHaveBeenCalled();
    setSpy.mockRestore();
  });

  it('should render the transcript as paragraphs when isDialogue is true', () => {
    store.set('fcc-transcript-expanded', true);

    render(
      <ChallengeTranscript
        {...baseProps}
        transcript={'<p><b>Alice</b>: Hello</p><p><b>Bob</b>: World</p>'}
        shouldPersistExpanded={true}
        isDialogue={true}
      />
    );

    /* eslint-disable testing-library/no-node-access */
    const aliceB = screen.getByText('Alice');
    expect(aliceB).toBeVisible();
    expect(aliceB.tagName).toBe('B');

    const aliceP = aliceB.parentElement;
    expect(aliceP?.tagName).toBe('P');
    expect(aliceP?.textContent).toBe('Alice: Hello');

    const bobB = screen.getByText('Bob');
    expect(bobB).toBeVisible();
    expect(bobB.tagName).toBe('B');

    const bobP = bobB.parentElement;
    expect(bobP?.tagName).toBe('P');
    expect(bobP?.textContent).toBe('Bob: World');
    /* eslint-enable testing-library/no-node-access */
  });

  it('should render the transcript with PrismFormatted when isDialogue is false', () => {
    store.set('fcc-transcript-expanded', true);

    render(
      <ChallengeTranscript
        {...baseProps}
        transcript='<pre><code class="language-js">console.log("hi")</code></pre>'
        shouldPersistExpanded={true}
        isDialogue={false}
      />
    );

    const preElement = screen.getByRole('region');
    expect(preElement).toBeVisible();
    expect(preElement.tagName).toBe('PRE');

    // eslint-disable-next-line testing-library/no-node-access
    const codeElement = preElement.querySelector('code');
    expect(codeElement).toBeInTheDocument();
    expect(preElement).toHaveTextContent('console.log("hi")');
  });
});
