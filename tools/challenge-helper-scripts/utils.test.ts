import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import ObjectID from 'bson-objectid';

jest.mock('fs', () => {
  return {
    writeFileSync: jest.fn(),
    readdirSync: jest.fn()
  };
});

jest.mock('gray-matter', () => {
  return {
    read: jest.fn(),
    stringify: jest.fn()
  };
});

jest.mock('bson-objectid', () => {
  return jest.fn(() => ({ toString: () => mockChallengeId }));
});

jest.mock('./helpers/get-step-template', () => {
  return {
    getStepTemplate: jest.fn()
  };
});

const mockMeta = {
  challengeOrder: [{ id: 'abc', title: 'mock title' }]
};

jest.mock('./helpers/project-metadata', () => ({
  // ...jest.requireActual('./helpers/project-metadata'),
  getMetaData: jest.fn(() => mockMeta),
  updateMetaData: jest.fn()
}));

const mockChallengeId = '60d35cf3fe32df2ce8e31b03';
import { getStepTemplate } from './helpers/get-step-template';
import {
  createChallengeFile,
  createStepFile,
  insertStepIntoMeta,
  updateStepTitles,
  validateBlockName
} from './utils';
import { updateMetaData } from './helpers/project-metadata';

const basePath = join(
  process.cwd(),
  '__fixtures__' + process.env.JEST_WORKER_ID
);
const commonPath = join(basePath, 'curriculum');

const block = 'utils-project';
const projectPath = join(commonPath, 'challenges', 'english', 'blocks', block);

describe('Challenge utils helper scripts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('createStepFile util', () => {
    it('should create next step and return its identifier', () => {
      process.env.CALLING_DIR = projectPath;
      const mockTemplate = 'Mock template...';
      (getStepTemplate as jest.Mock).mockReturnValue(mockTemplate);
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
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        `${projectPath}/${mockChallengeId}.md`,
        mockTemplate
      );
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
      process.env.CALLING_DIR = projectPath;
      const template = 'pretend this is a template';

      createChallengeFile('hi', template);
      // - Should write a file with a given name and template
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        `${projectPath}/hi.md`,
        template
      );
    });
  });

  describe('insertStepIntoMeta util', () => {
    it('should call updateMetaData with a new file id and name', async () => {
      process.env.CALLING_DIR = projectPath;

      await insertStepIntoMeta({
        stepNum: 3,
        stepId: new ObjectID(mockChallengeId)
      });

      expect(updateMetaData).toHaveBeenCalledWith({
        challengeOrder: [
          { id: 'abc', title: 'Step 1' }, // title gets overwritten
          { id: mockChallengeId, title: 'Step 2' }
        ]
      });
    });
  });

  describe('updateStepTitles util', () => {
    it('should apply meta.challengeOrder to step files', () => {
      process.env.CALLING_DIR = projectPath;
      (getStepTemplate as jest.Mock).mockReturnValue('Mock template...');
      (fs.readdirSync as jest.Mock).mockReturnValue([
        'name.md',
        'another-name.md'
      ]);
      (matter.read as jest.Mock).mockReturnValue({
        data: { id: 'abc' },
        content: 'goes here'
      });

      updateStepTitles();

      expect(fs.readdirSync).toHaveBeenCalledWith(projectPath + '/');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        path.join(projectPath, 'name.md'),
        undefined
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        path.join(projectPath, 'another-name.md'),
        undefined
      );
      expect(matter.stringify).toHaveBeenCalledWith('goes here', {
        dashedName: 'step-1',
        id: 'abc',
        title: 'Step 1'
      });
    });
  });
  afterEach(() => {
    delete process.env.CALLING_DIR;
  });
});
