import { challengeTypes } from '../../../shared/config/challenge-types';
import { SuperBlocks } from '../../../shared/config/superblocks';

// Show a grid layout on the superblock level

const gridBasedSuperBlocks = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.SciCompPy,
  SuperBlocks.A2English
];

export const isGridBased = (
  superBlock: SuperBlocks,
  challengeType: unknown = null
) => {
  // Python projects should not be displayed as a grid, but should be displayed
  // as a list of projects. Otherwise, if we do not do this the project will be
  // shown as a single certificaton project, which is not what we want.

  if (challengeType === 10) return false;

  return gridBasedSuperBlocks.includes(superBlock);
};

// Show a single project in a certification layout

const projectBasedChallengeTypes = [
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.jsProject,
  challengeTypes.pythonProject,
  challengeTypes.codeAllyCert,
  challengeTypes.multifileCertProject,
  challengeTypes.exam,
  challengeTypes.codeAllyPractice
];

export const isProjectBased = (
  challengeType: number,
  blockDashedName: unknown = null
) => {
  // Is project based but should be collapsable, this differs from the
  // other projects which are not collapsable.
  if (blockDashedName === 'take-home-projects') return false;

  return projectBasedChallengeTypes.includes(challengeType);
};
