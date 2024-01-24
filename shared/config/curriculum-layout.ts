import { challengeTypes } from './challenge-types';
import { SuperBlocks } from './superblocks';

// Show a grid layout on the superblock level

const gridBasedSuperBlocks = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.SciCompPy
];

export const isGridBased = (superBlock: SuperBlocks) =>
  gridBasedSuperBlocks.includes(superBlock);

// Show a single project in a certification layout

const projectBasedChallengeTypes = [
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.jsProject,
  challengeTypes.codeAllyCert,
  challengeTypes.multifileCertProject,
  challengeTypes.exam,
  challengeTypes.codeAllyPractice
];

export const isProjectBased = (challengeType: number) =>
  projectBasedChallengeTypes.includes(challengeType);
