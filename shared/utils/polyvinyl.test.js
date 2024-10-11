import polyvinyl from './polyvinyl';

const polyData = {
  name: 'test',
  ext: 'js',
  contents: 'var hello = world;',
  history: ['test.js']
};

describe('createSource', () => {
  it('should return a vinyl object with a source matching the contents', () => {
    const original = polyvinyl.createPoly(polyData);

    const updated = polyvinyl.createSource(original);
    expect(original).not.toHaveProperty('source');
    expect(updated).toHaveProperty('source', 'var hello = world;');
    expect(updated).toMatchObject(original);
  });

  it('should not update the source if it already exists', () => {
    const original = polyvinyl.createPoly({
      ...polyData,
      source: 'const hello = world;'
    });

    const updated = polyvinyl.createSource(original);
    expect(updated).toStrictEqual(original);
  });
});
