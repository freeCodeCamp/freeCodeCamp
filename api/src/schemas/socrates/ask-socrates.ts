import { Type } from '@fastify/type-provider-typebox';

const socratesHint = Type.Object({
  text: Type.String(),
  failed: Type.Optional(Type.Boolean())
});

export const askSocrates = {
  body: Type.Object(
    {
      description: Type.String({ minLength: 1, maxLength: 2000 }),
      userInput: Type.String({ minLength: 1, maxLength: 50000 }),
      seed: Type.String({ minLength: 1, maxLength: 50000 }),
      hints: Type.Array(socratesHint, { maxItems: 200 })
    },
    { additionalProperties: false }
  ),
  response: {
    200: Type.Object({
      hint: Type.String()
    }),
    400: Type.Object({
      error: Type.String(),
      type: Type.Literal('info')
    }),
    403: Type.Object({
      error: Type.String(),
      type: Type.Literal('danger')
    }),
    429: Type.Object({
      error: Type.String(),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      error: Type.String(),
      type: Type.Literal('danger')
    })
  }
};
