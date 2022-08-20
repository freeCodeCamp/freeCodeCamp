/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs';
import ObjectID from 'bson-objectid';
import glob from 'glob';
import * as matter from 'gray-matter';
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

const mockChallengeId = '60d35cf3fe32df2ce8e31b03';
import { getStepTemplate } from './helpers/get-step-template';
import { createStepFile, insertStepIntoMeta, updateStepTitles } from './utils';

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

  describe('updateStepTitles util', () => {
    it('should apply meta.challengeOrder to step files', () => {
      mock({
        '_meta/project/': {
          'meta.json':
            '{"id": "mock-id", "challengeOrder": [["id-1", "Step 1"], ["id-3", "Step 2"], ["id-2", "Step 3"]]}'
        },
        'english/superblock/project/': {
          'id-1.md': `---
id: id-1
title: Step 2
challengeType: a
dashedName: step-2
---
`,
          'id-2.md': `---
id: id-2
title: Step 1
challengeType: b
dashedName: step-1
---
`,
          'id-3.md': `---
id: id-3
title: Step 3
challengeType: c
dashedName: step-3
---
`
        }
      });

      process.env.CALLING_DIR = 'english/superblock/project';

      updateStepTitles();

      expect(matter.read('english/superblock/project/id-1.md').data).toEqual({
        id: 'id-1',
        title: 'Step 1',
        challengeType: 'a',
        dashedName: 'step-1'
      });
      expect(matter.read('english/superblock/project/id-2.md').data).toEqual({
        id: 'id-2',
        title: 'Step 3',
        challengeType: 'b',
        dashedName: 'step-3'
      });
      expect(matter.read('english/superblock/project/id-3.md').data).toEqual({
        id: 'id-3',
        title: 'Step 2',
        challengeType: 'c',
        dashedName: 'step-2'
      });
    });
  });
  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
