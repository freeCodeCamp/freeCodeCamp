const { findAll } = require('./find-all');

const testTree = {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [{ type: 'text', value: 'test', testId: 1 }]
    },
    {
      type: 'paragraph',
      children: [{ type: 'text', value: 'different', testId: 2 }]
    },
    {
      type: 'heading',
      depth: 2,
      children: [{ type: 'text', value: 'test', testId: 3 }]
    },
    {
      type: 'heading',
      depth: 1,
      children: [{ type: 'text', value: 'test', testId: 4 }]
    }
  ]
};

describe('findAll', () => {
  it('should return an array', () => {
    expect(findAll(testTree, _node => false)).toEqual([]);
  });
  it('should return an array of nodes that match the test', () => {
    expect(findAll(testTree, { type: 'text', value: 'test' })).toEqual([
      { type: 'text', value: 'test', testId: 1 },
      { type: 'text', value: 'test', testId: 3 },
      { type: 'text', value: 'test', testId: 4 }
    ]);
  });
});
