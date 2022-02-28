import mock from 'mock-fs';
import { getLastStepFileContent } from './get-last-step-file-content';

jest.mock('./get-project-path', () => {
  return {
    getProjectPath: jest.fn(() => 'mock-project/')
  };
});

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
      'mock-project': {
        'step-001.md': 'Lorem ipsum...',
        'step-002.md': 'Lorem ipsum...',
        'final.md': 'Lorem ipsum...'
      }
    });

    const expected = {
      nextStepNum: 3,
      challengeSeeds: {
        lorem: 'ipsum'
      }
    };

    expect(getLastStepFileContent()).toEqual(expected);
  });

  afterEach(() => {
    mock.restore();
  });
});
