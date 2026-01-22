import { Type } from '@fastify/type-provider-typebox';

const socratesHint = Type.Object({
  text: Type.String(),
  failed: Type.Optional(Type.Boolean())
});

export const askSocrates = {
  body: Type.Object(
    {
      userId: Type.String(),
      description: Type.String(),
      userInput: Type.String(),
      seed: Type.String(),
      hints: Type.Array(socratesHint)
    },
    { additionalProperties: false }
  ),
  response: {
    200: Type.Object({
      hint: Type.String()
    }),
    400: Type.Object({
      error: Type.Literal('Too many requests.'),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      error: Type.Literal('Something went wrong.'),
      type: Type.Literal('danger')
    })
  }
};
