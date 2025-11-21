import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import { SuperBlockAccordion } from './super-block-accordion';

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

    it('displays module progress when totalSteps is provided and module is not coming soon', () => {
    const mockWithProgress = {
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

    const mockChallenge = {
      id: 'test-challenge-id',
      block: 'test-block',
      title: 'Test Challenge',
      fields: { slug: '/test-slug' },
      dashedName: 'test-challenge',
      challengeType: 0,
      superBlock: SuperBlocks.RespWebDesign
    };

    render(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockWithProgress}
        chosenBlock={'test-block'}
        completedChallengeIds={[]}
      />
    );

    const moduleSteps = screen.getByText(/0 of 1 steps completed/i);
    expect(moduleSteps).toBeInTheDocument();
    expect(moduleSteps).toHaveClass('module-steps');
  });

  it('does not display module progress when module is coming soon', () => {
    const mockComingSoon = {
      superBlock: SuperBlocks.RespWebDesign,
      chapters: [
        {
          dashedName: 'test-chapter',
          modules: [
            {
              dashedName: 'test-module',
              blocks: ['test-block'],
              comingSoon: true
            }
          ]
        }
      ]
    };

    const mockChallenge = {
      id: 'test-challenge-id',
      block: 'test-block',
      title: 'Test Challenge',
      fields: { slug: '/test-slug' },
      dashedName: 'test-challenge',
      challengeType: 0,
      superBlock: SuperBlocks.RespWebDesign
    };

    render(
      <SuperBlockAccordion
        challenges={[mockChallenge]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockComingSoon}
        chosenBlock={'test-block'}
        completedChallengeIds={[]}
      />
    );

    expect(screen.queryByText(/steps completed/i)).not.toBeInTheDocument();
  });

  it('does not display module progress when totalSteps is zero', () => {
    const mockNoSteps = {
      superBlock: SuperBlocks.RespWebDesign,
      chapters: [
        {
          dashedName: 'test-chapter',
          modules: [
            {
              dashedName: 'test-module',
              blocks: []
            }
          ]
        }
      ]
    };

    render(
      <SuperBlockAccordion
        challenges={[]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockNoSteps}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    expect(screen.queryByText(/steps completed/i)).not.toBeInTheDocument();
  });
});
