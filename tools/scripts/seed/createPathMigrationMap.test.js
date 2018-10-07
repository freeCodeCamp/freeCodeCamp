/* global describe expect */
const { isPlainObject } = require('lodash');

const { createPathMigrationMap } = require('./createPathMigrationMap');
const mockCurriculum = require('./__mocks__/curriculum.json');

describe('createPathMigrationMap', () => {
  const pathMap = createPathMigrationMap(mockCurriculum);

  it('is a function', () => {
    expect(typeof createPathMigrationMap).toEqual('function');
  });

  it('returns an object', () => {
    expect(isPlainObject(pathMap)).toBe(true);
  });

  it('maps a challenge title to the correct uri slug', () => {
    expect.assertions(3);
    const slugOne = '/learn/super-block-b/block-one/challenge-ten';
    const slugTwo = '/learn/super-block-a/block-two/challenge-five';
    const slugThree = '/learn/super-block-a/block-one/challenge-three';

    expect(pathMap['challenge-ten']).toEqual(slugOne);
    expect(pathMap['challenge-five']).toEqual(slugTwo);
    expect(pathMap['challenge-three']).toEqual(slugThree);
  });

  it('does not add uri migrations for private challenges', () => {
    expect(pathMap['challenge-nine']).toBeUndefined();
  });

  it('output snapshot', () => {
    expect(createPathMigrationMap(mockCurriculum)).toMatchSnapshot();
  });
});
