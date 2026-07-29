import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import GenericChallengeButtons from './challenge-buttons';

describe('GenericChallengeButtons', () => {
  test('renders check answer and help buttons for question challenges', () => {
    const onHelp = vi.fn();
    const onSubmit = vi.fn();

    render(
      <GenericChallengeButtons
        hasQuestions={true}
        onHelp={onHelp}
        onSubmit={onSubmit}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.check-answer' })
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.ask-for-help' })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onHelp).toHaveBeenCalledTimes(1);
  });

  test('renders submit for challenges without questions', () => {
    render(
      <GenericChallengeButtons
        hasQuestions={false}
        onHelp={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'buttons.submit' })
    ).toBeInTheDocument();
  });
});
