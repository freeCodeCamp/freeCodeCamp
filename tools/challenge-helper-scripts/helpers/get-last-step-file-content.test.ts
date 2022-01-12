import mock from 'mock-fs';

import { getLastStepFileContent } from './get-last-step-file-content';

jest.mock('../utils', () => {
  return {
    getChallengeSeeds: jest.fn(() => {
      return {
        lorem: 'ipsum'
      };
    })
  };
});

describe('getLastStepFileContent helper', () => {
  it('should throw if last step count does not match with numbers of steps', () => {
    mock({
      'mock-project/': {
        'step-001.md': 'Lorem ipsum...',
        'step-004.md': 'Lorem ipsum...',
        'final.md': 'Lorem ipsum...'
      }
    });

    expect(() => {
      getLastStepFileContent();
    }).toThrow();
  });

  it('should return information if steps count is correct', () => {
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

    // it feels like an off-by-one error, but I think it's assuming that
    // final.md is the last 'step'. That's never really been used and it works
    // just fine.
    const expected = {
      nextStepNum: 4,
      challengeSeeds: {
        lorem: 'ipsum'
      }
    };

    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mock-project';

    expect(getLastStepFileContent()).toEqual(expected);
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
