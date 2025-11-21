import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

// Mock shared-dist modules to avoid Vite import-analysis failures during tests
vi.mock('../../../../../shared-dist/config/blocks', () => ({
  BlockLayouts: { ChallengeGrid: 'ChallengeGrid' },
  BlockLabel: { exam: 'exam', lab: 'lab' }
}));

vi.mock('../../../../../shared-dist/config/curriculum', () => ({
  SuperBlocks: { FullStackDeveloper: 'full-stack-developer' }
}));
import { describe, it, expect, afterEach } from 'vitest';


// Mocks como nos ciclos anteriores
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
  superBlock: 'full-stack-developer'
});

const mockStructure = {
  superBlock: 'full-stack-developer',
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

afterEach(() => {
  vi.clearAllMocks();
});

describe('SuperBlockAccordion - Complete Progress', () => {
  it('shows "3 of 3 steps completed" and a checked checkmark when all 3 challenges completed', async () => {
    const challenges = [mockChallenge('c1'), mockChallenge('c2'), mockChallenge('c3')];
    const props = {
      challenges,
  superBlock: 'full-stack-developer',
      structure: mockStructure,
      chosenBlock: 'test-block',
      completedChallengeIds: ['c1', 'c2', 'c3']
    } as any;

  // Import component dynamically after mocks are registered so Vite doesn't
  // attempt static resolution of generated `shared-dist` files.
  const { SuperBlockAccordion } = (await import('./super-block-accordion')) as any;

  render(<SuperBlockAccordion {...props} />);

    // usar regex para evitar fragilidade exata de string
    expect(screen.getByText(/3 of 3 steps completed/)).toBeInTheDocument();
    expect(screen.getByTestId('checkmark')).toHaveTextContent('✓');
  });
});
