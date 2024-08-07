/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs';
import { join } from 'path';
import ObjectID from 'bson-objectid';
import glob from 'glob';
import matter from 'gray-matter';

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
import {
  createChallengeFile,
  createStepFile,
  insertStepIntoMeta,
  updateStepTitles,
  validateBlockName
} from './utils';

const basePath = join(
  process.cwd(),
  '__fixtures__' + process.env.JEST_WORKER_ID
);
const commonPath = join(basePath, 'curriculum', 'challenges');

const block = 'utils-project';
const metaPath = join(commonPath, '_meta', block);
const superBlockPath = join(commonPath, 'english', 'utils-superblock');
const projectPath = join(superBlockPath, block);

describe('Challenge utils helper scripts', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath, { recursive: true });
    fs.mkdirSync(projectPath, { recursive: true });
    fs.mkdirSync(metaPath, { recursive: true });
  });
  describe('createStepFile util', () => {
    it('should create next step and return its identifier', () => {
      fs.writeFileSync(
        join(projectPath, 'step-001.md'),
        'Lorem ipsum...',
        'utf-8'
      );
      fs.writeFileSync(
        join(projectPath, 'step-002.md'),
        'Lorem ipsum...',
        'utf-8'
      );
      process.env.CALLING_DIR = projectPath;
      const step = createStepFile({
        stepNum: 3,
        challengeType: 0
      });

      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      expect(step.toString()).toEqual(mockChallengeId);
      expect(ObjectID).toHaveBeenCalledTimes(1);

      // Internal tasks
      // - Should generate a template for the step that is being created
      expect(getStepTemplate).toHaveBeenCalledTimes(1);

      // - Should write a file with a given name and template
      const files = glob.sync(`${projectPath}/*.md`);

      expect(files).toEqual([
        `${projectPath}/${mockChallengeId}.md`,
        `${projectPath}/step-001.md`,
        `${projectPath}/step-002.md`
      ]);
    });
  });

  describe('createProject util', () => {
    it('should allow alphanumerical names with trailing whitespace', () => {
      expect(
        validateBlockName('learn-callbacks-by-creating-a-bookshelf ')
      ).toBe(true);
    });
    it('should allow alphanumerical names with no trailing whitespace', () => {
      expect(validateBlockName('learn-callbacks-by-creating-a-bookshelf')).toBe(
        true
      );
    });
    it('should not allow non-kebab case names', () => {
      expect(validateBlockName('learnCallbacksBetter')).toBe(
        'please use alphanumerical characters and kebab case'
      );
    });
    it('should not allow white space names', () => {
      expect(validateBlockName(' ')).toBe('please enter a dashed name');
    });
    it('should not allow empty names', () => {
      expect(validateBlockName('')).toBe('please enter a dashed name');
    });
  });

  describe('createChallengeFile util', () => {
    it('should create the challenge', () => {
      fs.writeFileSync(
        join(projectPath, 'fake-challenge.md'),
        'Lorem ipsum...',
        'utf-8'
      );
      fs.writeFileSync(
        join(projectPath, 'so-many-fakes.md'),
        'Lorem ipsum...',
        'utf-8'
      );

      process.env.CALLING_DIR = projectPath;

      createChallengeFile('hi', 'pretend this is a template');
      // - Should write a file with a given name and template
      const files = glob.sync(`${projectPath}/*.md`);

      expect(files).toEqual([
        `${projectPath}/fake-challenge.md`,
        `${projectPath}/hi.md`,
        `${projectPath}/so-many-fakes.md`
      ]);
    });
  });

  describe('insertStepIntoMeta util', () => {
    it('should update the meta with a new file id and name', () => {
      fs.writeFileSync(
        join(metaPath, 'meta.json'),
        `{"id": "mock-id",
        "challengeOrder": [
          {
            "id": "id-1",
            "title": "Step 1"
          },
          {
            "id": "id-2",
            "title": "Step 2"
          },
          {
            "id": "id-3",
            "title": "Step 3"
          }
        ]}`,
        'utf-8'
      );
      process.env.CALLING_DIR = projectPath;

      insertStepIntoMeta({ stepNum: 3, stepId: new ObjectID(mockChallengeId) });

      const meta = JSON.parse(
        fs.readFileSync(join(metaPath, 'meta.json'), 'utf-8')
      );
      expect(meta).toEqual({
        id: 'mock-id',
        challengeOrder: [
          {
            id: 'id-1',
            title: 'Step 1'
          },
          {
            id: 'id-2',
            title: 'Step 2'
          },
          {
            id: mockChallengeId,
            title: 'Step 3'
          },
          {
            id: 'id-3',
            title: 'Step 4'
          }
        ]
      });
    });
  });

  describe('updateStepTitles util', () => {
    it('should apply meta.challengeOrder to step files', () => {
      fs.writeFileSync(
        join(metaPath, 'meta.json'),
        `{"id": "mock-id", "challengeOrder": [{"id": "id-1", "title": "Step 1"}, {"id": "id-3", "title": "Step 2"}, {"id": "id-2", "title": "Step 3"}]}`,
        'utf-8'
      );
      fs.writeFileSync(
        join(projectPath, 'id-1.md'),
        `---
id: id-1
title: Step 2
challengeType: a
dashedName: step-2
---
`,
        'utf-8'
      );
      fs.writeFileSync(
        join(projectPath, 'id-2.md'),
        `---
id: id-2
title: Step 1
challengeType: b
dashedName: step-1
---
`,
        'utf-8'
      );
      fs.writeFileSync(
        join(projectPath, 'id-3.md'),
        `---
id: id-3
title: Step 3
challengeType: c
dashedName: step-3
---
`,
        'utf-8'
      );

      process.env.CALLING_DIR = projectPath;

      updateStepTitles();

      expect(matter.read(join(projectPath, 'id-1.md')).data).toEqual({
        id: 'id-1',
        title: 'Step 1',
        challengeType: 'a',
        dashedName: 'step-1'
      });
      expect(matter.read(join(projectPath, 'id-2.md')).data).toEqual({
        id: 'id-2',
        title: 'Step 3',
        challengeType: 'b',
        dashedName: 'step-3'
      });
      expect(matter.read(join(projectPath, 'id-3.md')).data).toEqual({
        id: 'id-3',
        title: 'Step 2',
        challengeType: 'c',
        dashedName: 'step-2'
      });
    });
  });
  afterEach(() => {
    delete process.env.CALLING_DIR;
    try {
      fs.rmSync(basePath, { recursive: true });
    } catch (err) {
      console.log(err);
      console.log('Could not remove fixtures folder.');
    }
  });
});
