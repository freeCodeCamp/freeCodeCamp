import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi, Mock } from 'vitest';
import type { TFunction } from 'i18next';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  ChallengeFiles,
  PrerequisiteChallenge,
  Test,
  Fields,
  Question,
  FileKeyChallenge,
  BilibiliIds
} from '../../../redux/prop-types';
import { isAuditedSuperBlock } from '@freecodecamp/shared/utils/is-audited';
import { BlockLayouts, BlockLabel } from '@freecodecamp/shared/config/blocks';
import { Block } from './block';

vi.mock('@freecodecamp/shared/utils/is-audited', () => ({
  isAuditedSuperBlock: vi.fn().mockReturnValueOnce(true)
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: Record<string, string>) => {
      if (key === 'learn.reset-progress-aria-block') {
        return `Reset progress for ${options?.blockLabel || ''}`;
      }
      return key;
    }
  }),
  withTranslation:
    () =>
    <P extends object>(Component: React.ComponentType<P>) =>
      Component
}));

const defaultProps = {
  block: 'test-block',
  blockLabel: null,
  challenges: [
    {
      block: 'testblock',
      blockLabel: BlockLabel.lab,
      blockLayout: BlockLayouts.ChallengeGrid,
      certification: 'mockCertification',
      challengeOrder: 1,
      challengeType: 0,
      dashedName: 'mock-dashed-name',
      description: 'mockDescription',
      challengeFiles: {} as ChallengeFiles,
      fields: {} as Fields,
      forumTopicId: 12345,
      guideUrl: 'https://mockurl.com',
      hasEditableBoundaries: false,
      helpCategory: 'mockHelpCategory',
      id: 'mockId',
      instructions: 'mockInstructions',
      internal: {
        content: 'mockContent',
        contentDigest: 'mockContentDigest',
        description: 'mockInternalDescription',
        fieldOwners: ['mockOwner'],
        ignoreType: null,
        mediaType: 'mockMediaType',
        owner: 'mockOwner',
        type: 'mockType'
      },
      notes: 'mockNotes',
      prerequisites: [] as PrerequisiteChallenge[],
      isLocked: false,
      order: 1,
      questions: [] as Question[],
      assignments: ['mockAssignment'],
      required: [],
      solutions: {
        ['indexhtml']: {} as FileKeyChallenge,
        ['scriptjs']: {} as FileKeyChallenge,
        ['stylescss']: {} as FileKeyChallenge,
        ['indexjsx']: {} as FileKeyChallenge
      },
      sourceInstanceName: 'mockSourceInstanceName',
      superOrder: 1,
      superBlock: SuperBlocks.FullStackDeveloperV9,
      template: 'mockTemplate',
      tests: [] as Test[],
      title: 'mockTitle',
      translationPending: false,
      url: 'https://mockurl.com',
      usesMultifileEditor: false,
      videoId: 'mockVideoId',
      videoLocaleIds: {},
      bilibiliIds: {} as BilibiliIds,
      videoUrl: 'https://mockvideourl.com'
    }
  ],
  completedChallengeIds: ['testchallengeIds'],
  isExpanded: true,
  t: vi.fn((key: string) => [key]) as unknown as TFunction,
  superBlock: SuperBlocks.FullStackDeveloperV9,
  toggleBlock: vi.fn(),
  resetModule: vi.fn(),
  removeModuleChallenges: vi.fn()
};

const rwdCatPhotoAppBlock = 'learn-html-by-building-a-cat-photo-app';

const rwdCatPhotoAppTitle = 'Learn HTML by Building a Cat Photo App';

const rwdCatPhotoAppIntro =
  'HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.';

const rwdT = vi.fn((key: string, options?: { returnObjects?: boolean }) => {
  if (
    key ===
    `intro:${SuperBlocks.RespWebDesignNew}.blocks.${rwdCatPhotoAppBlock}.title`
  ) {
    return rwdCatPhotoAppTitle;
  }

  if (
    key ===
    `intro:${SuperBlocks.RespWebDesignNew}.blocks.${rwdCatPhotoAppBlock}.intro`
  ) {
    return options?.returnObjects ? [rwdCatPhotoAppIntro] : rwdCatPhotoAppIntro;
  }

  if (key === 'intro:misc-text.collapse') return 'Collapse';
  if (key === 'intro:misc-text.expand') return 'Expand';
  if (key === 'learn.not-started') return 'Not started';
  if (key === 'learn.completed') return 'Completed';
  if (key === 'learn.challenges-completed') return '0 of 1 complete';

  return key;
}) as unknown as TFunction;

describe('<Block />', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should expand the block when isExpanded is true and expandAll is false', () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(true);
    render(<Block {...defaultProps} isExpanded={true} expandAll={false} />);
    expect(screen.getByRole('button', { expanded: true })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('should expand the block when expandAll is true and isExpanded is false', () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(true);
    render(<Block {...defaultProps} isExpanded={false} expandAll={true} />);
    expect(screen.getByRole('button', { expanded: true })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('should not expand the block when both expandAll and isExpanded are false', () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(true);
    render(<Block {...defaultProps} isExpanded={false} expandAll={false} />);
    expect(screen.getByRole('button', { expanded: false })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('The "Help us translate" badge does not appear on any English blocks', () => {
    render(<Block {...defaultProps} />);
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does not appear on any i18n blocks when the superblock is audited`, () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(true);
    render(<Block {...defaultProps} />);
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does appear on i18n blocks when the superblock is not audited`, () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(false);
    render(<Block {...defaultProps} />);
    expect(screen.getByText(/misc.translation-pending/)).toBeInTheDocument();
  });

  it('renders Responsive Web Design block intro copy and delegates block toggling', () => {
    const toggleBlock = vi.fn();

    render(
      <Block
        {...defaultProps}
        block={rwdCatPhotoAppBlock}
        challenges={[
          {
            ...defaultProps.challenges[0],
            blockLayout: BlockLayouts.ChallengeGrid,
            id: 'rwd-cat-photo-app-step-1',
            superBlock: SuperBlocks.RespWebDesignNew
          }
        ]}
        completedChallengeIds={[]}
        isExpanded={true}
        superBlock={SuperBlocks.RespWebDesignNew}
        t={rwdT}
        toggleBlock={toggleBlock}
      />
    );

    const toggleButton = screen.getByRole('button', { expanded: true });

    expect(toggleButton).toHaveTextContent(rwdCatPhotoAppTitle);
    expect(screen.getByText(rwdCatPhotoAppIntro)).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(toggleBlock).toHaveBeenCalledWith(rwdCatPhotoAppBlock);
  });

  describe('Reset functionality', () => {
    it('renders a reset button for the block', () => {
      render(<Block {...defaultProps} />);
      const resetButton = screen.getByRole('button', {
        name: /reset progress for/i
      });
      expect(resetButton).toBeInTheDocument();
    });

    it('disables the reset button when no challenges are completed', () => {
      render(<Block {...defaultProps} completedChallengeIds={[]} />);
      const resetButton = screen.getByRole('button', {
        name: /reset progress for/i
      });
      expect(resetButton).toBeDisabled();
    });

    it('calls removeModuleChallenges with correct payload when handleResetConfirm is triggered', () => {
      const mockRemove = vi.fn();
      render(<Block {...defaultProps} removeModuleChallenges={mockRemove} />);

      expect(
        screen.getByRole('button', { name: /reset progress for/i })
      ).toBeInTheDocument();

      const removedIds = ['id-1', 'id-2'];
      mockRemove({ removedChallengeIds: removedIds });
      expect(mockRemove).toHaveBeenCalledWith({
        removedChallengeIds: removedIds
      });
    });
  });
});
