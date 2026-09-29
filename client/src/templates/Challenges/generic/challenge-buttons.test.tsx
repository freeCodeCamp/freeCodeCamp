import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import GenericChallengeButtons from './challenge-buttons';

describe('GenericChallengeButtons', () => {
  test('renders check answer and help buttons for question challenges', () => {
    const onHelp = vi.fn();
    const onSubmit = vi.fn();

    render(
      <GenericChallengeButtons
        hasQuestions={true}
        superBlock={SuperBlocks.RespWebDesignV9}
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
        superBlock={SuperBlocks.RespWebDesignV9}
        onHelp={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'buttons.submit' })
    ).toBeInTheDocument();
  });
});
