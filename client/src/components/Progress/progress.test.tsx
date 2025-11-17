import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '../../../utils/test-utils';

// Mock gatsby's useStaticQuery before importing the component
vi.mock('gatsby', () => ({
  useStaticQuery: vi.fn(() => ({
    allChallengeNode: { nodes: [] },
    allCertificateNode: { nodes: [] },
    allSuperBlockStructure: { nodes: [] }
  })),
  graphql: (s: string) => s
}));

import { Progress } from './progress';

type TestProps = {
  currentBlockIds: string[];
  block: string;
  id: string;
  superBlock: string;
  challengeType: number;
  completedChallengesInBlock: number;
  completedPercent: number;
  t: (key: string, opts?: { percent?: number }) => string;
  updateAllChallengesInfo: () => void;
  updateSuperBlockStructures: () => void;
  superBlockStructures: Record<string, unknown>;
};

describe('<Progress />', () => {
  const defaultProps: TestProps = {
    currentBlockIds: ['a', 'b', 'c', 'd'],
    block: 'test-block',
    id: 'test-id',
    superBlock: 'test-super',
    challengeType: 0,
    completedChallengesInBlock: 1,
    completedPercent: 25,
    t: (key: string, opts?: { percent?: number }) => {
      if (key === 'learn.percent-complete')
        return `Completed ${opts?.percent ?? 0}%`;
      return key;
    },
    updateAllChallengesInfo: vi.fn(),
    updateSuperBlockStructures: vi.fn(),
    superBlockStructures: {}
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders percent meta and does not render project-count text', () => {
    render(<Progress {...defaultProps} />);

    // The percent meta should be present
    expect(screen.getByText(/Completed 25%/)).toBeTruthy();

    // The old project-count string should not be rendered
    expect(screen.queryByText(/certification projects/)).toBeNull();
  });
});
