const fs = require('fs');
const mock = require('mock-fs');
const glob = require('glob');

// NOTE:
// Use `console.log()` before mocking the filesystem or use
// `process.stdout.write()` instead. There are issues when using `mock-fs` and
// `require`.

jest.mock('bson-objectid', () => {
  return jest.fn(() => mockChallengeId);
});

jest.mock('./helpers/get-step-template', () => {
  return {
    getStepTemplate: jest.fn(() => 'Mock template...')
  };
});

jest.mock('./helpers/get-project-meta-path', () => {
  return {
    getProjectMetaPath: jest.fn(() => '_meta/project/meta.json')
  };
});

jest.mock('./helpers/get-project-path', () => {
  return {
    getProjectPath: jest.fn(() => 'project/')
  };
});

jest.mock('gray-matter', () => {
  return {
    read: jest.fn(() => ({
      data: { id: mockChallengeId },
      stringify: jest.fn(() => 'Lorem ipsum...')
    }))
  };
});

jest.mock(
  '../challenge-helper-scripts/helpers/get-project-path-metadata',
  () => ({
    getMetaData: jest.fn(() => ({
      id: 'mock-id'
    }))
  })
);

const mockChallengeId = '60d35cf3fe32df2ce8e31b03';
const ObjectID = require('bson-objectid');
const { getStepTemplate } = require('./helpers/get-step-template');
const { createStepFile, reorderSteps } = require('./utils');

describe('Challenge utils helper scripts', () => {
  describe('createStepFile util', () => {
    it('should create next step and return its identifier', () => {
      mock({
        'project/': {
          'part-001.md': 'Lorem ipsum...',
          'part-002.md': 'Lorem ipsum...'
        }
      });

      const step = createStepFile({
        projectPath: 'project/',
        stepNum: 3
      });

      expect(step).toEqual(mockChallengeId);
      expect(ObjectID).toHaveBeenCalledTimes(1);

      // Internal tasks
      // - Should generate a template for the step that is being created
      expect(getStepTemplate).toHaveBeenCalledTimes(1);

      // - Should write a file with a given name and template
      const files = glob.sync(`project/*.md`);

      expect(files).toEqual([
        `project/part-001.md`,
        `project/part-002.md`,
        `project/part-003.md`
      ]);

      mock.restore();
    });
  });

  describe('reorderSteps util', () => {
    it('should sort files found in given path', () => {
      mock({
        '_meta/project/': {
          'meta.json': 'Lorem ipsum meta content...'
        },
        'project/': {
          'part-001.md': 'Lorem ipsum 1...',
          'part-002.md': 'Lorem ipsum 2...',
          'part-002b.md': 'Lorem ipsum 3...'
        }
      });

      reorderSteps();

      // - Should write a file with a given name and template
      const files = glob.sync(`project/*.md`);

      expect(files).toEqual([
        'project/part-001.md',
        'project/part-002.md',
        'project/part-003.md'
      ]);

      const result = fs.readFileSync('_meta/project/meta.json', 'utf8');

      const expectedResult = `{
  "id": "mock-id",
  "challengeOrder": [
    [
      "60d35cf3fe32df2ce8e31b03",
      "Part 1"
    ],
    [
      "60d35cf3fe32df2ce8e31b03",
      "Part 2"
    ],
    [
      "60d35cf3fe32df2ce8e31b03",
      "Part 3"
    ]
  ]
}`;

      expect(result).toEqual(expectedResult);

      mock.restore();
    });
  });
});
