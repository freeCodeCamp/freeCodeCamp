const mock = require('mock-fs');
const { getLastStepFileContent } = require('./get-last-step-file-content');

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
        'part-001.md': 'Lorem ipsum...',
        'part-004.md': 'Lorem ipsum...',
        'final.md': 'Lorem ipsum...'
      }
    });

    expect(() => {
      getLastStepFileContent();
    }).toThrow();

    mock.restore();
  });

  it('should return information if steps count is correct', () => {
    mock({
      'mock-project': {
        'part-001.md': 'Lorem ipsum...',
        'part-002.md': 'Lorem ipsum...',
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

    mock.restore();
  });
});
