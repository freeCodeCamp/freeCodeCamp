import { Type } from '@sinclair/typebox';

import type { FastifyInstanceWithTypeProvider } from '..';

// The schema that TypeBox generates is compatible with ajv, e.g. the
// Type.Object call below puts the following object into subSchema.
/*
{
  type: 'object',
  properties: {
    bat: { type: 'number' },
    baz: { type: 'string' }
  },
  required: ['bat', 'baz']
}
  */

const subSchema = Type.Object({
  bat: Type.Integer(),
  baz: Type.String()
});

export const testValidatedRoutes = (
  fastify: FastifyInstanceWithTypeProvider,
  _options: never,
  done: (err?: Error) => void
) => {
  fastify.get(
    '/route-with-validation',
    {
      schema: {
        querystring: Type.Object({
          foo: Type.Number(),
          bar: Type.String()
        })
      }
    },
    request => {
      const { foo, bar } = request.query;

      // Eslint can use the types given by TypeBoxTypeProvider:
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const fooBar = foo + bar;
      return { foo, bar, fooBar };
    }
  );

  fastify.post(
    '/route-with-validation-shared-schema',
    {
      schema: {
        body: Type.Object({
          foo: Type.Number(),
          bar: Type.String(),
          sub: subSchema
        })
      }
    },
    request => {
      const { foo, bar, sub } = request.body;
      return { foo, bar, sub };
    }
  );

  done();
};
