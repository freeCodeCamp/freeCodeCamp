import { Type } from '@sinclair/typebox';

import type { FastifyInstanceWithTypeProvider } from '..';
import { responseSchema, subSchema } from '../schemas/example';

export const testValidatedRoutes = (
  fastify: FastifyInstanceWithTypeProvider,
  _options: never,
  done: (err?: Error) => void
): void => {
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
        }),
        response: {
          200: responseSchema
        }
      }
    },
    request => {
      const { foo, bar } = request.body;
      // The TypeProvider constrains this by requiring value: string and
      // otherValue: boolean. Anything else is a type error. 'ignored' is
      // neither type checked nor returned, so it's safe. 'optional' is
      // self-explanatory.
      return {
        value: bar,
        otherValue: !foo,
        ignored: 'not in reply',
        ...(foo == 2 && { optional: 'optional' })
      };
    }
  );

  done();
};
