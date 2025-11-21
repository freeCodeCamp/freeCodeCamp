import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SuperBlockAccordion } from './super-block-accordion';
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';

// Mocks mínimos
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string, o?: { completedSteps?: number; totalSteps?: number }) =>
      k === 'learn.steps-completed'
        ? `${o?.completedSteps ?? 0} of ${o?.totalSteps ?? 0} steps completed`
        : k
  })
}));

vi.mock('../../../components/helpers', () => ({
  Link: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) =>
    React.createElement('a', props, children)
}));

vi.mock('../../../assets/icons/dropdown', () => () => React.createElement('div', { 'data-testid': 'dropdown' }, '▼'));
vi.mock('../../../assets/chapter-icon', () => ({
  ChapterIcon: ({ chapter }: { chapter: string }) =>
    React.createElement('div', { 'data-testid': `chapter-icon-${chapter}` }, '📖')
}));

vi.mock('./check-mark', () => ({
  default: ({ isCompleted }: { isCompleted: boolean }) =>
    React.createElement('div', { 'data-testid': 'checkmark' }, isCompleted ? '✓' : '○')
}));

vi.mock('./block', () => ({ default: () => React.createElement('div', { 'data-testid': 'block' }, 'Block Component') }));

const mockChallenge = (id: string) => ({
  id,
  block: 'test-block',
  blockLabel: 'Lab' as any,
  title: 'Test Challenge',
  fields: { slug: 'test-challenge' },
  dashedName: 'test-challenge',
  challengeType: 0,
  blockLayout: 'ChallengeGrid' as any,
  superBlock: SuperBlocks.FullStackDeveloper
});

const mockStructure = {
  superBlock: SuperBlocks.FullStackDeveloper,
  chapters: [
    {
      dashedName: 'chapter-1',
      modules: [
        {
          dashedName: 'module-1',
          blocks: ['test-block']
        }
      ]
    }
  ]
};

describe('SuperBlockAccordion - Partial Progress', () => {
  it('shows "1 of 3 steps completed" when 1 of 3 challenges completed', () => {
    const challenges = [mockChallenge('c1'), mockChallenge('c2'), mockChallenge('c3')];
    const props = {
      challenges,
      superBlock: SuperBlocks.FullStackDeveloper,
      structure: mockStructure,
      chosenBlock: 'test-block',
      completedChallengeIds: ['c1']
    } as any;

    render(<SuperBlockAccordion {...props} />);

    expect(screen.getByText('1 of 3 steps completed')).toBeInTheDocument();
    expect(screen.getByTestId('checkmark')).toHaveTextContent('○');
  });
});
