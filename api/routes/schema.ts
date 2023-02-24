// a whole schema can be passed around...
export const schema = {
  querystring: {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    required: ['foo', 'bar']
  }
} as const;

// ...or just a part of it
export const schemaFragment = {
  type: 'object',
  properties: {
    foo: { type: 'string' },
    bar: { type: 'number' }
  },
  required: ['foo', 'bar']
} as const;
