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
});
