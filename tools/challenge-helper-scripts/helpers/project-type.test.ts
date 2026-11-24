import { describe, expect, it } from 'vitest';
import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';
import {
  buildProjectMeta,
  getChallengeOrderTitle,
  getDefaultBlockLayout,
  getProjectMetaType,
  titleToDashedName
} from './project-type.js';

describe('project type helpers', () => {
  it.each([
    [BlockLabel.workshop, 'Workshop', BlockLayouts.ChallengeGrid],
    [BlockLabel.lab, 'Lab', BlockLayouts.Link],
    [BlockLabel.review, 'Review', BlockLayouts.Link],
    [BlockLabel.quiz, 'Quiz', BlockLayouts.Link],
    [BlockLabel.lecture, 'Lecture', BlockLayouts.ChallengeList]
  ] as const)(
    'maps the %s block label to its metadata and default layout',
    (blockLabel, metaType, blockLayout) => {
      expect(getProjectMetaType(blockLabel)).toBe(metaType);
      expect(getDefaultBlockLayout(blockLabel)).toBe(blockLayout);
    }
  );

  it.each([
    ['What Are IDs?', 'what-are-ids'],
    ["What's New in HTML5?", 'whats-new-in-html5'],
    ['ARIA & the DOM', 'aria-the-dom'],
    ['  First Lecture  ', 'first-lecture']
  ])('converts the title %s to a dashed name', (title, dashedName) => {
    expect(titleToDashedName(title)).toBe(dashedName);
  });

  it.each([
    [BlockLabel.workshop, 'Step 1'],
    [BlockLabel.lab, 'Project title'],
    [BlockLabel.lecture, 'Project title'],
    [BlockLabel.review, 'Project title'],
    [BlockLabel.quiz, 'Project title']
  ] as const)(
    'creates the expected challenge order title for %s blocks',
    (blockLabel, expectedTitle) => {
      expect(getChallengeOrderTitle(blockLabel, 'Project title')).toBe(
        expectedTitle
      );
    }
  );

  it.each([
    {
      blockLabel: BlockLabel.workshop,
      blockLayout: BlockLayouts.ChallengeGrid,
      expectedTitle: 'Step 1',
      expectedProperties: {
        usesMultifileEditor: true,
        hasEditableBoundaries: true
      }
    },
    {
      blockLabel: BlockLabel.lab,
      blockLayout: BlockLayouts.Link,
      expectedTitle: 'Project title',
      expectedProperties: { usesMultifileEditor: true }
    },
    {
      blockLabel: BlockLabel.lecture,
      blockLayout: BlockLayouts.ChallengeList,
      expectedTitle: 'First lecture title',
      expectedProperties: {}
    },
    {
      blockLabel: BlockLabel.review,
      blockLayout: BlockLayouts.Link,
      expectedTitle: 'Project title',
      expectedProperties: {}
    },
    {
      blockLabel: BlockLabel.quiz,
      blockLayout: BlockLayouts.Link,
      expectedTitle: 'Project title',
      expectedProperties: {}
    }
  ])(
    'builds metadata for $blockLabel blocks',
    ({ blockLabel, blockLayout, expectedTitle, expectedProperties }) => {
      const challengeTitle =
        blockLabel === BlockLabel.lecture ? 'First lecture title' : undefined;
      const meta = buildProjectMeta({
        isChapterBased: true,
        block: `${blockLabel}-project`,
        title: 'Project title',
        helpCategory: 'JavaScript',
        challengeId: '507f1f77bcf86cd799439011',
        blockLabel,
        blockLayout,
        challengeTitle
      });

      expect(meta).toEqual({
        isUpcomingChange: true,
        dashedName: `${blockLabel}-project`,
        helpCategory: 'JavaScript',
        blockLabel,
        blockLayout,
        challengeOrder: [
          { id: '507f1f77bcf86cd799439011', title: expectedTitle }
        ],
        ...expectedProperties
      });
      expect(meta).not.toHaveProperty('superBlock');
    }
  );

  it('builds metadata for a flat superblock without chapter metadata', () => {
    expect(
      buildProjectMeta({
        isChapterBased: false,
        block: 'flat-project',
        title: 'Flat project',
        helpCategory: 'General',
        challengeId: '507f1f77bcf86cd799439011',
        order: 3
      })
    ).toEqual({
      isUpcomingChange: true,
      dashedName: 'flat-project',
      helpCategory: 'General',
      blockLayout: BlockLayouts.LegacyChallengeList,
      order: 3,
      usesMultifileEditor: true,
      hasEditableBoundaries: true,
      challengeOrder: [{ id: '507f1f77bcf86cd799439011', title: 'Step 1' }]
    });
  });

  it('rejects chapter-based metadata without a label and layout', () => {
    expect(() =>
      buildProjectMeta({
        isChapterBased: true,
        block: 'missing-metadata',
        title: 'Missing metadata',
        helpCategory: 'General',
        challengeId: '507f1f77bcf86cd799439011'
      })
    ).toThrow(
      'Missing one of the following arguments: blockLabel, blockLayout'
    );
  });
});
