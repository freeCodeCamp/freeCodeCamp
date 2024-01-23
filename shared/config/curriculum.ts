import { challengeTypes } from './challenge-types';
import { SuperBlocks } from './superblocks';

// These are challenges that have blocks with a grid layout

export const isGridBased = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.SciCompPy
];

// The are challenges that need to conform to a project layout

export const isProjectBased = [
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.jsProject,
  challengeTypes.pythonProject,
  challengeTypes.codeAllyCert,
  challengeTypes.multifileCertProject,
  challengeTypes.exam,
  challengeTypes.codeAllyPractice
];
