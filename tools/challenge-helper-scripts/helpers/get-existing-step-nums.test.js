const mock = require('mock-fs');
const { getExistingStepNums } = require('./get-existing-step-nums');

// NOTE:
// Use `console.log()` before mocking the filesystem or use
// `process.stdout.write()` instead. There are issues when using `mock-fs` and
// `require`.

describe('getExistingStepNums helper', () => {
  it('should return the number portion of the project paths', () => {
    mock({
      'mock-project': {
        'part-001.md': 'Lorem ipsum...',
        'part-002.md': 'Lorem ipsum...'
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
        'part-001.md': 'Lorem ipsum...'
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
        'part-001.md': 'Lorem ipsum...',
        'part-002.md': 'Lorem ipsum...',
        'part002.md': 'Lorem ipsum...'
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
        'part-001.js': 'Lorem ipsum...',
        'part-002.css': 'Lorem ipsum...'
      }
    });

    const folder = `${process.cwd()}/mock-project/`;
    const steps = getExistingStepNums(folder);
    const expected = [];

    expect(steps).toEqual(expected);
  });

  afterAll(() => {
    mock.restore();
  });
});
