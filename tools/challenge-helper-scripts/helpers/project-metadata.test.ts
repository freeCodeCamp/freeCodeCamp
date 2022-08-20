import path from 'path';
import mock from 'mock-fs';
import {
  getMetaData,
  getProjectMetaPath,
  validateMetaData
} from './project-metadata';

describe('getProjectMetaPath helper', () => {
  it('should return the meta path', () => {
    const expected = path.join(
      'curriculum',
      'challenges',
      `_meta/mock-project/meta.json`
    );

    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mock-project';

    expect(getProjectMetaPath()).toEqual(expected);
  });

  afterEach(() => {
    delete process.env.CALLING_DIR;
  });
});

describe('getMetaData helper', () => {
  beforeEach(() => {
    mock({
      curriculum: {
        challenges: {
          english: {
            superblock: {
              'mock-project': {
                'step-001.md': 'Lorem ipsum...',
                'step-002.md': 'Lorem ipsum...',
                'step-003.md': 'Lorem ipsum...'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
      "id": "mock-id",
      "challengeOrder": [["1","step1"], ["2","step2"], ["1","step3"]]}
      `
            }
          }
        }
      }
    });
  });

  it('should process requested file', () => {
    const expected = {
      id: 'mock-id',
      challengeOrder: [
        ['1', 'step1'],
        ['2', 'step2'],
        ['1', 'step3']
      ]
    };
    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mock-project';
    expect(getMetaData()).toEqual(expected);
  });

  it('should throw if file is not found', () => {
    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mick-priject';

    const errorPath = path.join(
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
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});

describe('validateMetaData helper', () => {
  it('should throw if a stepfile is missing', () => {
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

    expect(() => validateMetaData()).toThrow(
      "ENOENT: no such file or directory, access 'english/superblock/project/id-2.md'"
    );
  });

  it('should throw if a step is present in the project, but not the meta', () => {
    mock({
      '_meta/project/': {
        'meta.json':
          '{"id": "mock-id", "challengeOrder": [["id-1", "Step 1"], ["id-2", "Step 3"]]}'
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

    expect(() => validateMetaData()).toThrow(
      "File english/superblock/project/id-3.md should be in the meta.json's challengeOrder"
    );
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
