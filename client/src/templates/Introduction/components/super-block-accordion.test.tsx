import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { SuperBlockAccordion } from './super-block-accordion';
import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: Record<string, string>) => {
      // Only translate aria labels for reset buttons, return key for everything else
      if (key === 'learn.reset-progress-aria-chapter') {
        return `Reset progress for ${options?.chapterLabel || ''}`;
      }
      if (key === 'learn.reset-progress-aria-module') {
        return `Reset progress for ${options?.moduleLabel || ''}`;
      }
      if (key.startsWith('intro:')) {
        return key.split('.').pop() || key;
      }
      return key;
    }
  }),
  withTranslation:
    () =>
    <P extends object>(Component: React.ComponentType<P>) =>
      Component
}));

// Create a minimal mock store for testing
const createMockStore = () =>
  configureStore({
    reducer: {
      app: () => ({})
    }
  });

const renderWithProvider = (ui: React.ReactElement) => {
  const store = createMockStore();
  return render(<Provider store={store}>{ui}</Provider>);
};

const mockStructure = {
  superBlock: SuperBlocks.RespWebDesign,
  chapters: [
    {
      dashedName: 'test-chapter',
      modules: [
        {
          dashedName: 'test-module',
          blocks: ['test-block']
        }
      ]
    }
  ]
};

// Representative challenge used to populate module content.
const mockChallenge = {
  id: 'test-challenge-id',
  block: 'test-block',
  blockLabel: BlockLabel.lecture,
  title: 'Test Challenge',
  fields: { slug: '/test-slug' },
  dashedName: 'test-challenge',
  challengeType: 0,
  blockLayout: BlockLayouts.ChallengeList,
  superBlock: SuperBlocks.RespWebDesign
};

describe('SuperBlockAccordion', () => {
  it('does not show completed checkmark when there are zero challenges in a chapter', () => {
    renderWithProvider(
      <SuperBlockAccordion
        challenges={[]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockStructure}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    expect(screen.queryByTestId('green-pass')).not.toBeInTheDocument();

    const chapterButtons = screen.getAllByRole('button', {
      name: /test-chapter/i
    });
    const chapterButton = chapterButtons[0];
    const checkmark = within(chapterButton).getByTestId('green-not-completed');
    expect(checkmark).toBeInTheDocument();
  });

  // With progress data present, the module button should render the steps label.
  it('shows module progress when totalSteps > 0 and not comingSoon', () => {
    const structureWithProgress = {
      superBlock: SuperBlocks.RespWebDesign,
      chapters: [
        {
          dashedName: 'test-chapter',
          modules: [
            {
              dashedName: 'test-module',
              blocks: ['test-block'],
              comingSoon: false,
              totalSteps: 10,
              completedSteps: 5
            }
          ]
        }
      ]
    };

    renderWithProvider(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureWithProgress}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    // The module-button-right is now a separate toggle button with the testid
    const moduleRight = screen.getByTestId('module-button-right');
    const moduleSteps = within(moduleRight).getByText(
      /learn\.steps-completed/i
    );
    expect(moduleSteps).toBeInTheDocument();
    expect(moduleSteps).toHaveClass('module-steps');
  });

  // A coming-soon module should hide the steps summary even if progress exists.
  it('does not show module progress when comingSoon is true', () => {
    const structureComingSoon = {
      superBlock: SuperBlocks.RespWebDesign,
      chapters: [
        {
          dashedName: 'test-chapter',
          modules: [
            {
              dashedName: 'test-module',
              blocks: ['test-block'],
              comingSoon: true,
              totalSteps: 10,
              completedSteps: 5
            }
          ]
        }
      ]
    };

    renderWithProvider(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureComingSoon}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    // The module-button-right is now a separate toggle button with the testid
    const moduleRight = screen.getByTestId('module-button-right');
    expect(within(moduleRight).queryByText(/steps/i)).not.toBeInTheDocument();
  });

  // Modules with zero total steps should not display any progress text.
  it('does not show module progress when totalSteps is zero', () => {
    const structureZeroSteps = {
      superBlock: SuperBlocks.RespWebDesign,
      chapters: [
        {
          dashedName: 'test-chapter',
          modules: [
            {
              dashedName: 'test-module',
              blocks: ['test-block'],
              comingSoon: false,
              totalSteps: 0,
              completedSteps: 0
            }
          ]
        }
      ]
    };

    renderWithProvider(
      <SuperBlockAccordion
        challenges={[]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureZeroSteps}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    // The module-button-right is now a separate toggle button with the testid
    const moduleRight = screen.getByTestId('module-button-right');
    expect(within(moduleRight).queryByText(/steps/i)).not.toBeInTheDocument();
  });

  describe('Reset Button', () => {
    it('renders chapter reset button when chapter has progress', () => {
      const structureWithProgress = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: false,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: false,
                totalSteps: 10,
                completedSteps: 5
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureWithProgress}
          chosenBlock={''}
          completedChallengeIds={['test-challenge-id']}
        />
      );

      const resetButton = screen.getByRole('button', {
        name: /reset progress for.*test-chapter/i
      });
      expect(resetButton).toBeInTheDocument();
    });

    it('disables chapter reset button when no challenges are completed', () => {
      const structureNoProgress = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: false,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: false,
                totalSteps: 10,
                completedSteps: 0
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureNoProgress}
          chosenBlock={''}
          completedChallengeIds={[]}
        />
      );

      const resetButton = screen.getByRole('button', {
        name: /reset progress for.*test-chapter/i
      });
      expect(resetButton).toBeDisabled();
    });

    it('does not render chapter reset button when chapter is comingSoon', () => {
      const structureComingSoon = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: true,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: true,
                totalSteps: 10,
                completedSteps: 5
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureComingSoon}
          chosenBlock={''}
          completedChallengeIds={['test-challenge-id']}
        />
      );

      const resetButton = screen.queryByRole('button', {
        name: /reset progress for.*test-chapter/i
      });
      expect(resetButton).not.toBeInTheDocument();
    });

    it('renders module reset button when module has progress', () => {
      const structureWithProgress = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: false,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: false,
                totalSteps: 10,
                completedSteps: 5
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureWithProgress}
          chosenBlock={''}
          completedChallengeIds={['test-challenge-id']}
        />
      );

      const resetButton = screen.getByRole('button', {
        name: /reset progress for.*test-module/i
      });
      expect(resetButton).toBeInTheDocument();
    });

    it('disables module reset button when no steps are completed', () => {
      const structureNoProgress = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: false,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: false,
                totalSteps: 10,
                completedSteps: 0
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureNoProgress}
          chosenBlock={''}
          completedChallengeIds={[]}
        />
      );

      const resetButton = screen.getByRole('button', {
        name: /reset progress for.*test-module/i
      });
      expect(resetButton).toBeDisabled();
    });

    it('does not render module reset button when module is comingSoon', () => {
      const structureComingSoon = {
        superBlock: SuperBlocks.RespWebDesign,
        chapters: [
          {
            dashedName: 'test-chapter',
            comingSoon: false,
            modules: [
              {
                dashedName: 'test-module',
                blocks: ['test-block'],
                comingSoon: true,
                totalSteps: 10,
                completedSteps: 5
              }
            ]
          }
        ]
      };

      renderWithProvider(
        <SuperBlockAccordion
          challenges={[mockChallenge]}
          superBlock={SuperBlocks.RespWebDesign}
          structure={structureComingSoon}
          chosenBlock={''}
          completedChallengeIds={['test-challenge-id']}
        />
      );

      const resetButton = screen.queryByRole('button', {
        name: /reset progress for.*test-module/i
      });
      expect(resetButton).not.toBeInTheDocument();
    });
  });
});
