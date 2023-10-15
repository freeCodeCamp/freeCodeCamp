import fs from 'fs';
import { join } from 'path';
import {
  getMetaData,
  getProjectMetaPath,
  validateMetaData
} from './project-metadata';

const metaPath = join(
  process.cwd(),
  'curriculum',
  'challenges',
  '_meta',
  'project'
);
const superBlockPath = join(
  process.cwd(),
  'curriculum',
  'challenges',
  'english',
  'superblock'
);
const projectPath = join(superBlockPath, 'project');

const cleanFiles = () => {
  try {
    fs.rmSync(superBlockPath, { recursive: true });
  } catch (err) {
    console.log('Could not remove superblock mock folder. ');
  }
  try {
    fs.rmSync(metaPath, { recursive: true });
  } catch (err) {
    console.log('Could not remove meta mock folder.');
  }
};

describe('getProjectMetaPath helper', () => {
  it('should return the meta path', () => {
    const expected = join(metaPath, 'meta.json');

    process.env.CALLING_DIR = projectPath;

    expect(getProjectMetaPath()).toEqual(expected);
  });

  afterEach(() => {
    cleanFiles();
    delete process.env.CALLING_DIR;
  });
});

describe('getMetaData helper', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
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
    fs.mkdirSync(metaPath);
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

  afterEach(() => {
    cleanFiles();
    delete process.env.CALLING_DIR;
  });
});

describe('validateMetaData helper', () => {
  it('should throw if a stepfile is missing', () => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
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
    fs.mkdirSync(metaPath);
    fs.writeFileSync(
      join(metaPath, 'meta.json'),
      `{
      "id": "mock-id",
      "challengeOrder": [{"id": "1", "title": "Step 1"}, {"id": "2", "title": "Step 2"}, {"id": "1", "title": "Step 3"}]}`,
      'utf-8'
    );

    process.env.CALLING_DIR = projectPath;

    expect(() => validateMetaData()).toThrow(
      `ENOENT: no such file or directory, access '${projectPath}/1.md'`
    );
  });

  it('should throw if a step is present in the project, but not the meta', () => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
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
    fs.mkdirSync(metaPath);
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

  afterEach(() => {
    delete process.env.CALLING_DIR;
    cleanFiles();
  });
});
