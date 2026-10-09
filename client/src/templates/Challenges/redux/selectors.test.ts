import { beforeEach, describe, expect, it } from 'vitest';
import { completionStateSelector } from '../../../redux/selectors';
import { curriculumData } from '../../../services/curriculum-data';
import type {
  ChallengeNode,
  SuperBlockStructure
} from '../../../redux/prop-types';
import { mockCurriculumData } from '../utils/__fixtures__/curriculum-data';
import {
  isBlockNewlyCompletedSelector,
  isModuleNewlyCompletedSelector
} from './selectors';

interface TestState {
  app: { user: { sessionUser: { completedChallenges: { id: string }[] } } };
  challenge: {
    challengeMeta: {
      id: string;
      superBlock: string;
      chapter: string;
      module: string;
      block: string;
      challengeType: number;
    };
  };
}

interface CompletionBlock {
  name: string;
  isCompleted: boolean;
}

interface CompletionModule {
  name: string;
  blocks: CompletionBlock[];
  isCompleted: boolean;
}

interface CompletionChapter {
  name: string;
  modules: CompletionModule[];
  isCompleted: boolean;
}

const superBlockStructure = mockCurriculumData.allSuperBlockStructure
  .nodes[0] as SuperBlockStructure;

const makeNode = (id: string, block: string) =>
  ({ challenge: { id, block } }) as ChallengeNode;

const buildState = ({
  completedIds,
  currentId
}: {
  completedIds: string[];
  currentId: string;
}): TestState => ({
  app: {
    user: {
      sessionUser: {
        completedChallenges: completedIds.map(id => ({ id }))
      }
    }
  },
  challenge: {
    challengeMeta: {
      id: currentId,
      superBlock: superBlockStructure.superBlock,
      chapter: 'chapter-1',
      module: 'module-1',
      block:
        currentId === 'c3' || currentId === 'c4'
          ? 'another-block'
          : 'test-block',
      challengeType: 0
    }
  }
});

describe('module completion selectors', () => {
  beforeEach(() => {
    curriculumData.initialize({
      challengeNodes: [
        makeNode('c1', 'test-block'),
        makeNode('c2', 'test-block'),
        makeNode('c3', 'another-block'),
        makeNode('c4', 'another-block')
      ],
      certificateNodes: [],
      superBlockStructures: {
        [superBlockStructure.superBlock]: superBlockStructure
      }
    });
  });

  describe('completionStateSelector', () => {
    it('marks a block complete only when all of its challenges are completed', () => {
      const state = buildState({
        completedIds: ['c1', 'c2', 'c3'],
        currentId: 'c4'
      });

      const [chapter] = completionStateSelector(state) as CompletionChapter[];
      const [module] = chapter.modules;

      expect(module.blocks).toEqual([
        { name: 'test-block', isCompleted: true },
        { name: 'another-block', isCompleted: false }
      ]);
      expect(module.isCompleted).toBe(false);
    });

    it('marks the module complete when every block is complete', () => {
      const state = buildState({
        completedIds: ['c1', 'c2', 'c3', 'c4'],
        currentId: 'c4'
      });

      const [chapter] = completionStateSelector(state) as CompletionChapter[];

      expect(chapter.modules[0].isCompleted).toBe(true);
      expect(chapter.isCompleted).toBe(true);
    });
  });

  describe('isBlockNewlyCompletedSelector', () => {
    it('is true when the current challenge completes its block', () => {
      const state = buildState({ completedIds: ['c3'], currentId: 'c4' });

      expect(isBlockNewlyCompletedSelector(state)).toBe(true);
    });

    it('is false when other challenges in the block are incomplete', () => {
      const state = buildState({ completedIds: [], currentId: 'c4' });

      expect(isBlockNewlyCompletedSelector(state)).toBe(false);
    });

    it('is false when the current challenge was already completed', () => {
      const state = buildState({
        completedIds: ['c3', 'c4'],
        currentId: 'c4'
      });

      expect(isBlockNewlyCompletedSelector(state)).toBe(false);
    });
  });

  describe('isModuleNewlyCompletedSelector', () => {
    it('is true when the last block of a multi-block module is completed', () => {
      const state = buildState({
        completedIds: ['c1', 'c2', 'c3'],
        currentId: 'c4'
      });

      expect(isModuleNewlyCompletedSelector(state)).toBe(true);
    });

    it('is false when another block in the module is still incomplete', () => {
      const state = buildState({
        completedIds: ['c3'],
        currentId: 'c4'
      });

      expect(isModuleNewlyCompletedSelector(state)).toBeFalsy();
    });

    it('is false when the current block is not newly completed', () => {
      const state = buildState({
        completedIds: ['c1', 'c2'],
        currentId: 'c3'
      });

      expect(isModuleNewlyCompletedSelector(state)).toBeFalsy();
    });
  });
});
