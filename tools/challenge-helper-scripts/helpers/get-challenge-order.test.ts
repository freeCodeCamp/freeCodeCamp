import { join } from 'path';

import mock from 'mock-fs';
import {
  getChallengeOrderFromFileTree,
  getChallengeOrderFromMeta
} from './get-challenge-order';

describe('getChallengeOrderFromMeta helper', () => {
  beforeEach(() => {
    mock({
      curriculum: {
        challenges: {
          english: {
            superblock: {
              'mock-project': {
                'this-is-a-challenge.md':
                  '---\nid: 1\ntitle: This is a Challenge\n---',
                'what-a-cool-thing.md':
                  '---\nid: 100\ntitle: What a Cool Thing\n---',
                'i-dunno.md': '---\nid: 2\ntitle: I Dunno\n---'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
          "id": "mock-id",
          "challengeOrder": [["1","This title is wrong"], ["2","I Dunno"], ["100","What a Cool Thing"]]}
          `
            }
          }
        }
      }
    });
  });

  it('should load the file order', () => {
    process.env.CALLING_DIR = join(
      process.cwd(),
      'curriculum',
      'challenges',
      'english',
      'superblock',
      'mock-project'
    );
    const challengeOrder = getChallengeOrderFromMeta();
    expect(challengeOrder).toEqual([
      ['1', 'This title is wrong'],
      ['2', 'I Dunno'],
      ['100', 'What a Cool Thing']
    ]);
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});

describe('getChallengeOrderFromFileTree helper', () => {
  beforeEach(() => {
    mock({
      curriculum: {
        challenges: {
          english: {
            superblock: {
              'mock-project': {
                'step-001.md': '---\nid: 1\ntitle: Step 1\n---',
                'step-002.md': '---\nid: 100\ntitle: Step 2\n---',
                'step-003.md': '---\nid: 2\ntitle: Step 3\n---'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
          "id": "mock-id",
          "challengeOrder": [["1","step1"], ["100","step2"], ["2","step3"]]}
          `
            }
          }
        }
      }
    });
  });

  it('should load the file order', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = join(
      process.cwd(),
      'curriculum',
      'challenges',
      'english',
      'superblock',
      'mock-project'
    );
    const challengeOrder = await getChallengeOrderFromFileTree();
    expect(challengeOrder).toEqual([
      [1, 'Step 1'],
      [100, 'Step 2'],
      [2, 'Step 3']
    ]);
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
