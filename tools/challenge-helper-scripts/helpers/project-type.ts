import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getBaseMeta, type Meta } from './get-base-meta.js';

export type ProjectMetaType =
  | 'Lab'
  | 'Workshop'
  | 'Lecture'
  | 'Review'
  | 'Quiz'
  | 'FullStack';

export const labChallengeTypes = [
  challengeTypes.lab,
  challengeTypes.jsLab,
  challengeTypes.pyLab
];

export function isLabChallengeType(value: unknown): value is number {
  return typeof value === 'number' && labChallengeTypes.includes(value);
}

export function getProjectMetaType(blockLabel: BlockLabel): ProjectMetaType {
  const blockLabelToMetaType: Partial<Record<BlockLabel, ProjectMetaType>> = {
    [BlockLabel.lab]: 'Lab',
    [BlockLabel.workshop]: 'Workshop',
    [BlockLabel.lecture]: 'Lecture',
    [BlockLabel.review]: 'Review',
    [BlockLabel.quiz]: 'Quiz'
  };

  return blockLabelToMetaType[blockLabel] ?? 'FullStack';
}

export function getDefaultBlockLayout(blockLabel: BlockLabel): BlockLayouts {
  const blockLabelToLayout: Partial<Record<BlockLabel, BlockLayouts>> = {
    [BlockLabel.workshop]: BlockLayouts.ChallengeGrid,
    [BlockLabel.lab]: BlockLayouts.Link,
    [BlockLabel.review]: BlockLayouts.Link,
    [BlockLabel.quiz]: BlockLayouts.Link
  };

  return blockLabelToLayout[blockLabel] ?? BlockLayouts.ChallengeList;
}

export function getChallengeOrderTitle(
  blockLabel: BlockLabel | undefined,
  title: string
): string {
  return blockLabel === BlockLabel.lab ||
    blockLabel === BlockLabel.review ||
    blockLabel === BlockLabel.quiz
    ? title
    : 'Step 1';
}

type BuildProjectMetaArgs = {
  isChapterBased: boolean;
  block: string;
  title: string;
  helpCategory: string;
  challengeId: string;
  order?: number;
  blockLabel?: BlockLabel;
  blockLayout?: BlockLayouts;
};

export function buildProjectMeta({
  isChapterBased,
  block,
  title,
  helpCategory,
  challengeId,
  order,
  blockLabel,
  blockLayout
}: BuildProjectMetaArgs): Meta {
  if (isChapterBased && (!blockLabel || !blockLayout)) {
    throw new Error(
      'Missing one of the following arguments: blockLabel, blockLayout'
    );
  }

  const baseMeta =
    isChapterBased && blockLabel
      ? getBaseMeta(getProjectMetaType(blockLabel))
      : getBaseMeta('Step');

  return {
    ...baseMeta,
    dashedName: block,
    helpCategory,
    ...(isChapterBased ? { blockLabel, blockLayout } : { order }),
    challengeOrder: [
      {
        id: challengeId,
        title: getChallengeOrderTitle(blockLabel, title)
      }
    ]
  };
}
