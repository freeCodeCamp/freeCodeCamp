import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import SolutionForm from './solution-form';

describe('SolutionForm', () => {
  test('warns and prevents completion when backend project source code links are private', () => {
    const onSubmit = vi.fn();
    const updateSolutionForm = vi.fn();

    render(
      <SolutionForm
        challengeType={challengeTypes.backEndProject}
        onSubmit={onSubmit}
        updateSolutionForm={updateSolutionForm}
      />
    );

    const solutionInput = screen.getByLabelText('learn.solution-link');
    const sourceCodeInput = screen.getByLabelText('learn.source-code-link');

    fireEvent.change(solutionInput, {
      target: { value: 'https://example.com' }
    });
    fireEvent.change(sourceCodeInput, {
      target: { value: 'https://localhost:3000' }
    });

    expect(sourceCodeInput).toHaveAccessibleDescription(
      'validation.source-code-link-public'
    );
    expect(solutionInput).not.toHaveAccessibleDescription(
      'validation.source-code-link-public'
    );

    fireEvent.click(screen.getByRole('button', { name: 'learn.i-completed' }));

    expect(updateSolutionForm).toHaveBeenNthCalledWith(1, {});
    expect(updateSolutionForm).toHaveBeenLastCalledWith({
      githubLink: 'https://localhost:3000',
      solution: 'https://example.com'
    });
    expect(updateSolutionForm).toHaveBeenCalledTimes(2);
    expect(onSubmit).toHaveBeenCalledWith({ showCompletionModal: false });
  });
});
