import type { FastifyInstanceWithTypeProvider } from '..';
import { schemaFragment } from './schema';

export const testValidatedRoutes = (
  fastify: FastifyInstanceWithTypeProvider,
  _options: never,
  done: (err?: Error) => void
) => {
  fastify.get(
    '/route-with-validation',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            foo: { type: 'string' },
            bar: { type: 'number' }
          },
          required: ['foo', 'bar']
        }
      } as const
    },
    request => {
      const { foo, bar } = request.query;

      // Eslint can use the types by JsonSchemaToTsProvider:
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const fooBar = foo + bar;
      return { foo, bar, fooBar };
    }
  );

  // Uncomment below  to see the errors caused by the malformed schema. We don't
  // need to run the app to discover that we made a typo in the schema.
  // fastify.get(
  //   '/bad-route',
  //   {
  //     schema: {
  //       querystring: {
  //         type: 'object',
  //         properties: {
  //           // typo:
  //           foo: { type: 'strng' },
  //           bar: { type: 'number' }
  //         },
  //         required: ['foo', 'bar']
  //       }
  //     } as const
  //   },
  //   request => {
  //     const { foo, bar } = request.query;
  //     const fooBar = foo + bar;
  //     return { foo, bar, fooBar };
  //   }
  // );

  // And now for the limitations. This is the same route as above, but the
  // type inference fails.
  fastify.addSchema({
    $id: 'test',
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    required: ['foo', 'bar']
  } as const);

  fastify.get(
    '/route-with-validation-from-add-schema',
    {
      schema: {
        querystring: {
          $ref: 'test#'
        }
      }
    },
    request => {
      // @ts-expect-error validation works perfectly, but the type provider
      // operates on the schema object and all it sees is { querystring: { $ref:
      // 'test#' } which it can't do much with.
      const { foo, bar } = request.query;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return { foo, bar };
    }
  );

  // The workaround (of sorts) is to pass around the bits of schema you want to
  // compose. It's not as powerful as $ref, but it works.

  fastify.get(
    '/route-with-validation-shared-schema',
    {
      schema: {
        querystring: schemaFragment
      }
    },
    request => {
      const { foo, bar } = request.query;
      return { foo, bar };
    }
  );

  done();
};
