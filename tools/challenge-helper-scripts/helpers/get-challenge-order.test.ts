import fs from 'fs';
import { join } from 'path';

import {
  getChallengeOrderFromFileTree,
  getChallengeOrderFromMeta
} from './get-challenge-order';

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

describe('getChallengeOrderFromMeta helper', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
    fs.mkdirSync(metaPath);
    fs.writeFileSync(
      join(projectPath, 'this-is-a-challenge.md'),
      '---\nid: 1\ntitle: This is a Challenge\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'what-a-cool-thing.md'),
      '---\nid: 100\ntitle: What a Cool Thing\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'i-dunno.md'),
      '---\nid: 2\ntitle: I Dunno\n---'
    );
    fs.writeFileSync(
      join(metaPath, 'meta.json'),
      `{
      "id": "mock-id",
      "challengeOrder": [{"id": "1", "title": "This title is wrong"}, {"id": "2", "title": "I Dunno"}, {"id": "100", "title": "What a Cool Thing"}]}`,
      'utf-8'
    );
  });

  it('should load the file order', () => {
    process.env.CALLING_DIR = projectPath;
    const challengeOrder = getChallengeOrderFromMeta();
    expect(challengeOrder).toEqual([
      { id: '1', title: 'This title is wrong' },
      { id: '2', title: 'I Dunno' },
      { id: '100', title: 'What a Cool Thing' }
    ]);
  });

  afterEach(() => {
    delete process.env.CALLING_DIR;
    cleanFiles();
  });
});

describe('getChallengeOrderFromFileTree helper', () => {
  beforeEach(() => {
    fs.mkdirSync(superBlockPath);
    fs.mkdirSync(projectPath);
    fs.mkdirSync(metaPath);
    fs.writeFileSync(
      join(projectPath, 'step-001.md'),
      '---\nid: a8d97bd4c764e91f9d2bda01\ntitle: Step 1\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'step-002.md'),
      '---\nid: a6b0bb188d873cb2c8729495\ntitle: Step 2\n---',
      'utf-8'
    );
    fs.writeFileSync(
      join(projectPath, 'step-003.md'),
      '---\nid: a5de63ebea8dbee56860f4f2\ntitle: Step 3\n---'
    );
    fs.writeFileSync(
      join(metaPath, 'meta.json'),
      `{
      "id": "mock-id",
      "challengeOrder": [{"id": "a8d97bd4c764e91f9d2bda01", "title": "Step 1"}, {"id": "a6b0bb188d873cb2c8729495", "title": "Step 3"}, {"id": "a5de63ebea8dbee56860f4f2", "title": "Step 2"}]}`,
      'utf-8'
    );
  });

  it('should load the file order', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = projectPath;
    const challengeOrder = await getChallengeOrderFromFileTree();
    expect(challengeOrder).toEqual([
      { id: 'a8d97bd4c764e91f9d2bda01', title: 'Step 1' },
      { id: 'a6b0bb188d873cb2c8729495', title: 'Step 2' },
      { id: 'a5de63ebea8dbee56860f4f2', title: 'Step 3' }
    ]);
  });

  afterEach(() => {
    cleanFiles();
    delete process.env.CALLING_DIR;
  });
});
