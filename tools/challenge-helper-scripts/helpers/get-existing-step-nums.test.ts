import mock from 'mock-fs';
import { getExistingStepNums } from './get-existing-step-nums';

// NOTE:
// Use `console.log()` before mocking the filesystem or use
// `process.stdout.write()` instead. There are issues when using `mock-fs` and
// `require`.

describe('getExistingStepNums helper', () => {
  it('should return the number portion of the project paths', () => {
    mock({
      'mock-project': {
        'step-001.md': 'Lorem ipsum...',
        'step-002.md': 'Lorem ipsum...'
      }
    });

    const folder = `${process.cwd()}/mock-project/`;
    const steps = getExistingStepNums(folder);
    const expected = [1, 2];

    expect(steps).toEqual(expected);
  });

  it('should ignore text formatting and files named final.md', () => {
    mock({
      'mock-project': {
        'final.md': 'Lorem ipsum...',
        'step-001.md': 'Lorem ipsum...'
      }
    });

    const folder = `${process.cwd()}/mock-project/`;
    const steps = getExistingStepNums(folder);
    const expected = [1];

    expect(steps).toEqual(expected);
  });

  it('should throw if file names do not follow naming convention', () => {
    mock({
      'mock-project': {
        'step-001.md': 'Lorem ipsum...',
        'step-002.md': 'Lorem ipsum...',
        'step002.md': 'Lorem ipsum...'
      }
    });

    const folder = `${process.cwd()}/mock-project/`;

    expect(() => {
      getExistingStepNums(folder);
    }).toThrow();
  });

  it('should return empty array if there are no markdown files', () => {
    mock({
      'mock-project': {
        'step-001.js': 'Lorem ipsum...',
        'step-002.css': 'Lorem ipsum...'
      }
    });

    const folder = `${process.cwd()}/mock-project/`;
    const steps = getExistingStepNums(folder);
    const expected = [];

    expect(steps).toEqual(expected);
  });

  afterEach(() => {
    mock.restore();
  });
});
