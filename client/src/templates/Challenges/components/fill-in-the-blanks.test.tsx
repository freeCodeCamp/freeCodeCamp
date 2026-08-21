import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { FillInTheBlank } from '../../../redux/prop-types';
import FillInTheBlanks from './fill-in-the-blanks';

const fillInTheBlank = {
  sentence: '<p>Is BLANK your book? No, BLANK is my book.</p>',
  blanks: [
    { answer: 'this', feedback: null, audioId: null },
    {
      answer: 'that',
      feedback: '<p>Use <code>that</code> for something further away.</p>',
      audioId: null
    }
  ]
} satisfies FillInTheBlank;

type FillInTheBlanksProps = React.ComponentProps<typeof FillInTheBlanks>;

const defaultProps = {
  fillInTheBlank,
  answersCorrect: [null, null],
  showFeedback: false,
  feedback: null,
  showWrong: false,
  handleInputChange: vi.fn()
} satisfies FillInTheBlanksProps;

function renderFillInTheBlanks(overrides: Partial<FillInTheBlanksProps> = {}) {
  const props = { ...defaultProps, ...overrides };

  render(<FillInTheBlanks {...props} />);
}

describe('<FillInTheBlanks />', () => {
  it('marks incorrect blanks and shows feedback', () => {
    renderFillInTheBlanks({
      answersCorrect: [true, false],
      showWrong: true,
      showFeedback: true,
      feedback: fillInTheBlank.blanks[1].feedback
    });

    expect(screen.getByText('learn.wrong-answer')).toBeInTheDocument();
    expect(screen.getByText('this')).toHaveClass('correct-blank-answer');
    expect(screen.getByText(/for something further away/)).toBeInTheDocument();

    const blanks = screen.getAllByRole('textbox', {
      name: 'learn.fill-in-the-blank.blank'
    });
    expect(blanks).toHaveLength(1);
    expect(blanks[0]).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders every blank as text when every answer is correct', () => {
    renderFillInTheBlanks({
      answersCorrect: [true, true]
    });

    expect(screen.queryByText('learn.wrong-answer')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('textbox', {
        name: 'learn.fill-in-the-blank.blank'
      })
    ).not.toBeInTheDocument();
    expect(screen.getByText('this')).toHaveClass('correct-blank-answer');
    expect(screen.getByText('that')).toHaveClass('correct-blank-answer');
  });

  it('calls the input change handler with the blank index and value', async () => {
    const user = userEvent.setup();
    const handleInputChange = vi.fn();
    renderFillInTheBlanks({ handleInputChange });

    await user.type(
      screen.getAllByRole('textbox', {
        name: 'learn.fill-in-the-blank.blank'
      })[1],
      'that'
    );

    expect(handleInputChange).toHaveBeenLastCalledWith(1, 'that');
  });
});
