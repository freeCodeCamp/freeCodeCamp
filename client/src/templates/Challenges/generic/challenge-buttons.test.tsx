import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import GenericChallengeButtons from './challenge-buttons';

describe('GenericChallengeButtons', () => {
  test('renders check answer and help buttons for question challenges', () => {
    const onSubmit = vi.fn();

    render(
      <GenericChallengeButtons
        hasQuestions={true}
        onSubmit={onSubmit}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'buttons.check-answer' })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('renders submit for challenges without questions', () => {
    render(
      <GenericChallengeButtons
        hasQuestions={false}
        onSubmit={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'buttons.submit' })
    ).toBeInTheDocument();
  });
});
