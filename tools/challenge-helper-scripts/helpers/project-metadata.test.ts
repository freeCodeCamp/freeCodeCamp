import mock from 'mock-fs';
import { getMetaData } from './project-metadata';

describe('getMetaData helper', () => {
  beforeEach(() => {
    mock({
      curriculum: {
        challenges: {
          english: {
            superblock: {
              'mock-project': {
                'step-001.md': 'Lorem ipsum...',
                'step-002.md': 'Lorem ipsum...',
                'step-003.md': 'Lorem ipsum...'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
      "id": "mock-id",
      "challengeOrder": [["1","step1"], ["2","step2"], ["1","step3"]]}
      `
            }
          }
        }
      }
    });
  });

  it('should process requested file', () => {
    const expected = {
      id: 'mock-id',
      challengeOrder: [
        ['1', 'step1'],
        ['2', 'step2'],
        ['1', 'step3']
      ]
    };
    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mock-project';
    expect(getMetaData()).toEqual(expected);
  });

  it('should throw if file is not found', () => {
    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mick-priject';
    expect(() => {
      getMetaData();
    }).toThrowError(
      new Error(
        `ENOENT: no such file or directory, open 'curriculum/challenges/_meta/mick-priject/meta.json'`
      )
    );
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
