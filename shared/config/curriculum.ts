import { challengeTypes } from './challenge-types';
import { SuperBlocks } from './superblocks';

// Show a grid layout on the superblock level

export const isGridBased = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.SciCompPy
];

// Show a single project in a certification layout

export const isProjectBased = [
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.jsProject,
  challengeTypes.codeAllyCert,
  challengeTypes.multifileCertProject,
  challengeTypes.exam,
  challengeTypes.codeAllyPractice
];

// Show a list layout on a block that has multiple projects

export const isMultipleProjectBased = [challengeTypes.pythonProject];
