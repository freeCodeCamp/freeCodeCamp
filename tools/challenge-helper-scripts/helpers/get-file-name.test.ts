import fs from 'fs';
import { join } from 'path';

import { getFileName } from './get-file-name';

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

describe('getFileName helper', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
    fs.writeFileSync(
      join(projectPath, 'this-is-a-challenge.md'),
      '---\nid: a\ntitle: This is a Challenge\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'what-a-cool-thing.md'),
      '---\nid: b\ntitle: What a Cool Thing\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'i-dunno.md'),
      '---\nid: c\ntitle: I Dunno\n---',
      'utf-8'
    );
    fs.mkdirSync(metaPath);
    fs.writeFileSync(
      join(metaPath, 'meta.json'),
      `{
        "id": "mock-id",
        "challengeOrder": [{"id": "a", "title": "This title is wrong"}, {"id": "b", "title": "I Dunno"}, {"id": "c", "title": "What a Cool Thing"}}}]}`,
      'utf-8'
    );
  });

  it('should return the file name if found', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = projectPath;
    const fileName = await getFileName('a');
    expect(fileName).toEqual('this-is-a-challenge.md');
  });

  it('should return null if not found', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = projectPath;
    const fileName = await getFileName('d');
    expect(fileName).toBeNull();
  });

  afterEach(() => {
    delete process.env.CALLING_DIR;
    cleanFiles();
  });
});
