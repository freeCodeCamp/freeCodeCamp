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
          "challengeOrder": [{"id": "1", "title": "This title is wrong"}, {"id": "2", "title": "I Dunno"}, {"id": "100", "title": "What a Cool Thing"}]}
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
      { id: '1', title: 'This title is wrong' },
      { id: '2', title: 'I Dunno' },
      { id: '100', title: 'What a Cool Thing' }
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
                'step-001.md':
                  '---\nid: a8d97bd4c764e91f9d2bda01\ntitle: Step 1\n---',
                'step-002.md':
                  '---\nid: a6b0bb188d873cb2c8729495\ntitle: Step 2\n---',
                'step-003.md':
                  '---\nid: a5de63ebea8dbee56860f4f2\ntitle: Step 3\n---'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
          "id": "mock-id",
          "challengeOrder": [{"id": "a8d97bd4c764e91f9d2bda01", "title": "Step 1"}, {"id": "a6b0bb188d873cb2c8729495", "title": "Step 3"}, {"id": "a5de63ebea8dbee56860f4f2", "title": "Step 2"}]}
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
      { id: 'a8d97bd4c764e91f9d2bda01', title: 'Step 1' },
      { id: 'a6b0bb188d873cb2c8729495', title: 'Step 2' },
      { id: 'a5de63ebea8dbee56860f4f2', title: 'Step 3' }
    ]);
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
