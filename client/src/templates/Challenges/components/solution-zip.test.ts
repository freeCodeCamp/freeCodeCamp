import { strFromU8, unzipSync } from 'fflate';
import { describe, expect, it } from 'vitest';

import { createSolutionZipBlob } from './use-solution-download';

describe('solution ZIP downloads', () => {
  it.each([
    {
      name: 'multiple files',
      files: [
        { name: 'index', ext: 'html', contents: '<h1>Hello</h1>' },
        { name: 'styles', ext: 'css', contents: 'h1 { color: red; }' },
        { name: 'script', ext: 'js', contents: 'console.log("hello");' }
      ]
    },
    {
      name: 'a Python file with Unicode',
      files: [{ name: 'main', ext: 'py', contents: 'print("Olá, 世界 🌍")\n' }]
    },
    {
      name: 'an empty file',
      files: [{ name: 'empty', ext: 'js', contents: '' }]
    }
  ])('creates a readable archive for $name', async ({ files }) => {
    const blob = createSolutionZipBlob(files);
    const entries = unzipSync(new Uint8Array(await blob.arrayBuffer()));

    expect(blob.type).toBe('application/zip');
    expect(Object.keys(entries)).toEqual(
      files.map(file => `${file.name}.${file.ext}`)
    );
    for (const file of files) {
      expect(strFromU8(entries[`${file.name}.${file.ext}`])).toBe(
        file.contents
      );
    }
  });
});
