import { readFileSync } from 'fs';
import { getMetaData } from './get-project-path-metadata';

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn()
  };
});

const mockPath = '/mock/path';

describe('getMetaData helper', () => {
  it('should process requested file', () => {
    // @ts-expect-error - readFileSync is mocked
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    readFileSync.mockImplementation(() => '{"name": "Test Project"}');

    const expected = {
      name: 'Test Project'
    };

    expect(getMetaData(mockPath)).toEqual(expected);
  });

  it('should throw if file is not found', () => {
    // @ts-expect-error - readFileSync is mocked
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    readFileSync.mockImplementation(() => {
      throw new Error();
    });

    expect(() => {
      getMetaData(mockPath);
    }).toThrowError(new Error(`No _meta.json file exists at ${mockPath}`));
  });
});
