import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import { SuperBlockAccordion } from './super-block-accordion';
import {
  BlockLabel,
  BlockLayouts
} from '../../../../../shared-dist/config/blocks';

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
    render(
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

    render(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureWithProgress}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    const moduleButtons = screen.getAllByRole('button', {
      name: /test-module/i
    });
    const moduleButton = moduleButtons[0];

    const moduleRight = within(moduleButton).getByTestId('module-button-right');
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

    render(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureComingSoon}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    const moduleButtons = screen.getAllByRole('button', {
      name: /test-module/i
    });
    const moduleButton = moduleButtons[0];

    const moduleRight = within(moduleButton).getByTestId('module-button-right');
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

    render(
      <SuperBlockAccordion
        challenges={[]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={structureZeroSteps}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    const moduleButtons = screen.getAllByRole('button', {
      name: /test-module/i
    });
    const moduleButton = moduleButtons[0];

    const moduleRight = within(moduleButton).getByTestId('module-button-right');
    expect(within(moduleRight).queryByText(/steps/i)).not.toBeInTheDocument();
  });
});
