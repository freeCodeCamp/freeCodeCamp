import { join } from 'path';

import mock from 'mock-fs';
import { getFileName } from './get-file-name';

describe('getFileName helper', () => {
  beforeEach(() => {
    mock({
      curriculum: {
        challenges: {
          english: {
            superblock: {
              'mock-project': {
                'this-is-a-challenge.md':
                  '---\nid: 1\ntitle: This is a Challenge\n---',
                'what-a-cool-thing.md':
                  '---\nid: 100\ntitle: What a Cool Thing\n---',
                'i-dunno.md': '---\nid: 2\ntitle: I Dunno\n---'
              }
            }
          },
          _meta: {
            'mock-project': {
              'meta.json': `{
          "id": "mock-id",
          "challengeOrder": [["1","This title is wrong"], ["2","I Dunno"], ["100","What a Cool Thing"]]}
          `
            }
          }
        }
      }
    });
  });

  it('should return the file name if found', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = join(
      process.cwd(),
      'curriculum',
      'challenges',
      'english',
      'superblock',
      'mock-project'
    );
    const fileName = await getFileName('1');
    expect(fileName).toEqual('this-is-a-challenge.md');
  });

  it('should return null if not found', async () => {
    expect.assertions(1);
    process.env.CALLING_DIR = join(
      process.cwd(),
      'curriculum',
      'challenges',
      'english',
      'superblock',
      'mock-project'
    );
    const fileName = await getFileName('42');
    expect(fileName).toBeNull();
  });

  afterEach(() => {
    mock.restore();
    delete process.env.CALLING_DIR;
  });
});
