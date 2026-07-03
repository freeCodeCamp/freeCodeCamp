import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { CompletedChallenge } from '../../redux/prop-types';
import { SolutionDisplayWidget } from '.';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { projectTitle?: string }) => {
      switch (key) {
        case 'buttons.view':
          return 'View';
        case 'settings.labels.solution-for':
          return `Solution for ${options?.projectTitle}`;
        case 'certification.project.solution':
          return 'Solution';
        case 'certification.project.source':
          return 'Source';
        case 'aria.opens-new-window':
          return 'Opens in new window';
        default:
          return key;
      }
    }
  })
}));

const projectTitle = 'Palindrome Checker';

function renderWidget({
  completedChallenge,
  showUserCode = vi.fn()
}: {
  completedChallenge: CompletedChallenge;
  showUserCode?: () => void;
}) {
  render(
    <SolutionDisplayWidget
      completedChallenge={completedChallenge}
      projectTitle={projectTitle}
      displayContext='certification'
      showUserCode={showUserCode}
    />
  );
}

describe('<SolutionDisplayWidget />', () => {
  it('shows the user code on click when the solution is stored as code', async () => {
    const user = userEvent.setup();
    const showUserCode = vi.fn();
    renderWidget({
      completedChallenge: {
        id: 'palindrome-checker',
        completedDate: 1655158158000,
        solution: 'function palindrome(str) { return true; }',
        challengeFiles: null
      },
      showUserCode
    });

    await user.click(
      screen.getByRole('button', {
        name: `View Solution for ${projectTitle}`
      })
    );

    expect(showUserCode).toHaveBeenCalledTimes(1);
  });

  it('renders an external link when the solution is a project URL', () => {
    renderWidget({
      completedChallenge: {
        id: 'random-quote-machine',
        completedDate: 1655158158000,
        solution: 'https://codepen.io/camper/pen/abcdef',
        challengeFiles: null
      }
    });

    const link = screen.getByRole('link', {
      name: `View Solution for ${projectTitle} (Opens in new window)`
    });
    expect(link).toHaveAttribute(
      'href',
      'https://codepen.io/camper/pen/abcdef'
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders a dropdown with solution and source links when a GitHub link is also stored', async () => {
    const user = userEvent.setup();
    renderWidget({
      completedChallenge: {
        id: 'metric-imperial-converter',
        completedDate: 1655158158000,
        solution: 'https://metric-imperial-converter.camper.repl.co',
        githubLink: 'https://github.com/camper/metric-imperial-converter',
        challengeFiles: null
      }
    });

    await user.click(
      screen.getByRole('button', {
        name: `View Solution for ${projectTitle}`
      })
    );

    const solutionLink = screen.getByRole('menuitem', {
      name: 'Solution (Opens in new window)'
    });
    expect(solutionLink).toHaveAttribute(
      'href',
      'https://metric-imperial-converter.camper.repl.co'
    );
    expect(solutionLink).toHaveAttribute('target', '_blank');

    const sourceLink = screen.getByRole('menuitem', {
      name: 'Source (Opens in new window)'
    });
    expect(sourceLink).toHaveAttribute(
      'href',
      'https://github.com/camper/metric-imperial-converter'
    );
    expect(sourceLink).toHaveAttribute('target', '_blank');
  });
});
