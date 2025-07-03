import { createPoly, createSource } from './polyvinyl';

const polyData = {
  name: 'test',
  ext: 'js',
  contents: 'var hello = world;',
  history: ['test.js']
};

describe('createSource', () => {
  it('should return a vinyl object with a source matching the contents', () => {
    const original = createPoly(polyData);

    const updated = createSource(original);
    expect(original).not.toHaveProperty('source');
    expect(updated).toHaveProperty('source', 'var hello = world;');
    expect(updated).toMatchObject(original);
  });

  it('should not update the source if it already exists', () => {
    const original = createPoly({
      ...polyData,
      source: 'const hello = world;'
    });

    const updated = createSource(original);
    expect(updated).toStrictEqual(original);
  });
});
