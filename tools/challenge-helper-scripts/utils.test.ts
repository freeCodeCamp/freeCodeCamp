/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs';
import ObjectID from 'bson-objectid';
import glob from 'glob';
import mock from 'mock-fs';

// NOTE:
// Use `console.log()` before mocking the filesystem or use
// `process.stdout.write()` instead. There are issues when using `mock-fs` and
// `require`.

jest.mock('bson-objectid', () => {
  return jest.fn(() => ({ toString: () => mockChallengeId }));
});

jest.mock('./helpers/get-step-template', () => {
  return {
    getStepTemplate: jest.fn(() => 'Mock template...')
  };
});

jest.mock('gray-matter', () => {
  return {
    read: jest.fn(() => ({
      data: { id: mockChallengeId }
    })),
    stringify: jest.fn(() => 'Lorem ipsum...')
  };
});

const mockChallengeId = '60d35cf3fe32df2ce8e31b03';
import { getStepTemplate } from './helpers/get-step-template';
import { createStepFile, insertStepIntoMeta, reorderSteps } from './utils';

describe('Challenge utils helper scripts', () => {
  describe('createStepFile util', () => {
    it('should create next step and return its identifier', () => {
      mock({
        'project/': {
          'step-001.md': 'Lorem ipsum...',
          'step-002.md': 'Lorem ipsum...'
        }
      });

      const step = createStepFile({
        projectPath: 'project/',
        stepNum: 3
      });

      expect(step.toString()).toEqual(mockChallengeId);
      expect(ObjectID).toHaveBeenCalledTimes(1);

      // Internal tasks
      // - Should generate a template for the step that is being created
      expect(getStepTemplate).toHaveBeenCalledTimes(1);

      // - Should write a file with a given name and template
      const files = glob.sync(`project/*.md`);

      expect(files).toEqual([
        `project/${mockChallengeId}.md`,
        `project/step-001.md`,
        `project/step-002.md`
      ]);
    });
  });

  describe('insertStepIntoMeta util', () => {
    it('should update the meta with a new file id and name', () => {
      mock({
        '_meta/project/': {
          'meta.json': `{"id": "mock-id",
          "challengeOrder": [
            [
              "id-1",
              "Step 1"
            ],
            [
              "id-2",
              "Step 2"
            ],
            [
              "id-3",
              "Step 3"
            ]
          ]}`
        }
      });
      process.env.CALLING_DIR = 'english/superblock/project';

      insertStepIntoMeta({ stepNum: 3, stepId: new ObjectID(mockChallengeId) });

      const meta = JSON.parse(
        fs.readFileSync('_meta/project/meta.json', 'utf8')
      );
      expect(meta).toEqual({
        id: 'mock-id',
        challengeOrder: [
          ['id-1', 'Step 1'],
          ['id-2', 'Step 2'],
          [mockChallengeId, 'Step 3'],
          ['id-3', 'Step 4']
        ]
      });
    });
  });

  describe('reorderSteps util', () => {
    it('should sort files found in given path', () => {
      mock({
        '_meta/project/': {
          'meta.json': '{"id": "mock-id"}'
        },
        'english/superblock/project/': {
          'step-001.md': 'Lorem ipsum 1...',
          'step-002.md': 'Lorem ipsum 2...',
          'step-002b.md': 'Lorem ipsum 3...'
        }
      });

      // This seems odd, but it's necessary so that all the mocked files are at
      // the correct relative depth. _meta is the lowest level we care about
      // and that's a sibling of english.
      process.env.CALLING_DIR = 'english/superblock/project';

      reorderSteps();

      // - Should write a file with a given name and template
      const files = glob.sync(`english/superblock/project/*.md`);

      expect(files).toEqual([
        'english/superblock/project/step-001.md',
        'english/superblock/project/step-002.md',
        'english/superblock/project/step-003.md'
      ]);

      const result = JSON.parse(
        fs.readFileSync('_meta/project/meta.json', 'utf8')
      );

      const expectedResult = {
        id: 'mock-id',
        challengeOrder: [
          ['60d35cf3fe32df2ce8e31b03', 'Step 1'],
          ['60d35cf3fe32df2ce8e31b03', 'Step 2'],
          ['60d35cf3fe32df2ce8e31b03', 'Step 3']
        ]
      };

      expect(result).toEqual(expectedResult);
    });
  });
  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
