import { beforeEach, describe, expect, it } from 'vitest';
import { completionStateSelector } from '../../../redux/selectors';
import { curriculumData } from '../../../services/curriculum-data';
import {
  isBlockNewlyCompletedSelector,
  isModuleNewlyCompletedSelector
} from './selectors';

const makeNode = (id, block) => ({ challenge: { id, block } });

const buildState = ({ completedIds, currentId }) => ({
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
      superBlock: 'test-super-block',
      chapter: 'test-chapter',
      module: 'test-module',
      block: currentId === 'c3' || currentId === 'c4' ? 'block-b' : 'block-a',
      challengeType: 0
    }
  }
});

describe('module completion selectors', () => {
  beforeEach(() => {
    curriculumData.initialize({
      challengeNodes: [
        makeNode('c1', 'block-a'),
        makeNode('c2', 'block-a'),
        makeNode('c3', 'block-b'),
        makeNode('c4', 'block-b')
      ],
      certificateNodes: [],
      superBlockStructures: {
        'test-super-block': {
          chapters: [
            {
              dashedName: 'test-chapter',
              modules: [
                {
                  dashedName: 'test-module',
                  blocks: ['block-a', 'block-b']
                }
              ]
            }
          ]
        }
      }
    });
  });

  describe('completionStateSelector', () => {
    it('marks a block complete only when all of its challenges are completed', () => {
      const state = buildState({
        completedIds: ['c1', 'c2', 'c3'],
        currentId: 'c4'
      });

      const [chapter] = completionStateSelector(state);
      const [module] = chapter.modules;

      expect(module.blocks).toEqual([
        { name: 'block-a', isCompleted: true },
        { name: 'block-b', isCompleted: false }
      ]);
      expect(module.isCompleted).toBe(false);
    });

    it('marks the module complete when every block is complete', () => {
      const state = buildState({
        completedIds: ['c1', 'c2', 'c3', 'c4'],
        currentId: 'c4'
      });

      const [chapter] = completionStateSelector(state);

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
