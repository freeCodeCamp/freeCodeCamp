jest.mock('fs', () => {
  return {
    readFileSync: jest.fn()
  };
});

const mockPath = '/mock/path';
const { readFileSync } = require('fs');
const { getMetaData } = require('./get-project-path-metadata');

describe('getMetaData helper', () => {
  it('should process requested file', () => {
    readFileSync.mockImplementation(() => '{"name": "Test Project"}');

    const expected = {
      name: 'Test Project'
    };

    expect(getMetaData(mockPath)).toEqual(expected);
  });

  it('should throw if file is not found', () => {
    readFileSync.mockImplementation(() => {
      throw new Error();
    });

    expect(() => {
      getMetaData(mockPath);
    }).toThrowError(new Error(`No _meta.json file exists at ${mockPath}`));
  });
});
