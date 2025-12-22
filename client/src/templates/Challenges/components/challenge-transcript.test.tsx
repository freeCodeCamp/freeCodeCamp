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

  describe('isDialogue prop', () => {
    it('renders PrismFormatted when isDialogue is false (default)', () => {
      render(<ChallengeTranscript {...baseProps} />);
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      // PrismFormatted renders the transcript text, verify it's still visible
      expect(screen.getByText('Sample transcript text')).toBeInTheDocument();
    });

    it('renders a table when isDialogue is explicitly true', () => {
      render(<ChallengeTranscript {...baseProps} isDialogue={true} />);
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('renders PrismFormatted when isDialogue is explicitly false', () => {
      render(<ChallengeTranscript {...baseProps} isDialogue={false} />);
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      // PrismFormatted renders the transcript text, verify it's still visible
      expect(screen.getByText('Sample transcript text')).toBeInTheDocument();
    });
  });
});
