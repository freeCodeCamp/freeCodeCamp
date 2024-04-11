import { Type } from '@fastify/type-provider-typebox';

export const deleteUserToken = {
  response: {
    200: Type.Object({
      userToken: Type.Null()
    }),
    404: Type.Object({
      message: Type.Literal('userToken not found'),
      type: Type.Literal('info')
    }),
    500: Type.Object({
      message: Type.Literal(
        'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
      ),
      type: Type.Literal('danger')
    })
  }
};
