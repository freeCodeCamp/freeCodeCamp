import fs from 'fs';
import { join } from 'path';
import {
  getMetaData,
  getProjectMetaPath,
  validateMetaData
} from './project-metadata';

const basePath = join(
  process.cwd(),
  '__fixtures__' + process.env.JEST_WORKER_ID
);
const commonPath = join(basePath, 'curriculum', 'challenges');

const block = 'project-project-metadata';
const metaPath = join(commonPath, '_meta', block);
const superBlockPath = join(
  commonPath,
  'english',
  'superblock-project-metadata'
);
const projectPath = join(superBlockPath, block);

describe('project-metadata helper', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath, { recursive: true });
    fs.mkdirSync(projectPath, { recursive: true });
    fs.mkdirSync(metaPath, { recursive: true });
  });
  describe('getProjectMetaPath helper', () => {
    it('should return the meta path', () => {
      const expected = join(metaPath, 'meta.json');

      process.env.CALLING_DIR = projectPath;

      expect(getProjectMetaPath()).toEqual(expected);
    });
  });

  describe('getMetaData helper', () => {
    beforeEach(() => {
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
      fs.writeFileSync(
        join(projectPath, 'step-003.md'),
        'Lorem ipsum...',
        'utf-8'
      );
      fs.writeFileSync(
        join(metaPath, 'meta.json'),
        `{
      "id": "mock-id",
      "challengeOrder": [{"id": "1", "title": "Step 1"}, {"id": "2", "title": "Step 2"}, {"id": "1", "title": "Step 3"}]}`,
        'utf-8'
      );
    });

    it('should process requested file', () => {
      const expected = {
        id: 'mock-id',
        challengeOrder: [
          { id: '1', title: 'Step 1' },
          { id: '2', title: 'Step 2' },
          { id: '1', title: 'Step 3' }
        ]
      };
      process.env.CALLING_DIR = projectPath;
      expect(getMetaData()).toEqual(expected);
    });

    it('should throw if file is not found', () => {
      process.env.CALLING_DIR =
        'curriculum/challenges/english/superblock/mick-priject';

      const errorPath = join(
        'curriculum',
        'challenges',
        '_meta',
        'mick-priject',
        'meta.json'
      );
      expect(() => {
        getMetaData();
      }).toThrowError(
        new Error(`ENOENT: no such file or directory, open '${errorPath}'`)
      );
    });
  });

  describe('validateMetaData helper', () => {
    it('should throw if a stepfile is missing', () => {
      fs.writeFileSync(
        join(projectPath, 'step-001.md'),
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
        join(projectPath, 'step-003.md'),
        `---
id: id-3
title: Step 3
challengeType: c
dashedName: step-3
---
`,
        'utf-8'
      );
      fs.writeFileSync(
        join(metaPath, 'meta.json'),
        `{
      "id": "mock-id",
      "challengeOrder": [{"id": "1", "title": "Step 1"}, {"id": "2", "title": "Step 2"}, {"id": "1", "title": "Step 3"}]}`,
        'utf-8'
      );

      process.env.CALLING_DIR = projectPath;

      expect(() => validateMetaData()).toThrow(
        `The file
${projectPath}/1.md
does not exist, but is required by the challengeOrder of
${metaPath}/meta.json

To fix this, you can rename the file containing id: 1 to 1.md
If there is no file for this id, then either the challengeOrder needs to be updated, or the file needs to be created.
`
      );
    });

    it('should throw if a step is present in the project, but not the meta', () => {
      fs.writeFileSync(
        join(projectPath, '1.md'),
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
        join(projectPath, '2.md'),
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
        join(projectPath, '3.md'),
        `---
id: id-3
title: Step 3
challengeType: c
dashedName: step-3
---
`,
        'utf-8'
      );
      fs.writeFileSync(
        join(metaPath, 'meta.json'),
        `{
      "id": "mock-id",
      "challengeOrder": [{"id": "1", "title": "Step 1"}, {"id": "2", "title": "Step 2"}, {"id": "1", "title": "Step 3"}]}`,
        'utf-8'
      );

      process.env.CALLING_DIR = projectPath;

      expect(() => validateMetaData()).toThrow(
        `File ${projectPath}/3.md should be in the meta.json's challengeOrder`
      );
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
