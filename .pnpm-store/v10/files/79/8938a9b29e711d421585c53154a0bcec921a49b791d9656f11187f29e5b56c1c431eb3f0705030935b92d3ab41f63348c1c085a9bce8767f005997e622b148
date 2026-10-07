import test from 'tape';

import { generateObjSchema, arraySchema, enumArraySchema } from '../../../src/util/schemas';

test('schemas', (t) => {
  t.test('should generate an object schema with correct properties', (st) => {
    const schema = generateObjSchema({
      foo: 'bar',
      baz: arraySchema,
    });
    const properties = schema.properties || {};

    st.deepEqual(properties.foo, properties.foo, 'bar');
    st.deepEqual(properties.baz.type, 'array');

    st.end();
  });

  t.deepEqual(
    enumArraySchema(),
    {
      additionalItems: false,
      items: {
        enum: [],
        type: 'string',
      },
      minItems: 0,
      type: 'array',
      uniqueItems: true,
    },
    'enumArraySchema works with no arguments',
  );

  t.end();
});
