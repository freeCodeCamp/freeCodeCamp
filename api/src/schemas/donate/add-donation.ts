import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const addDonation = {
  response: {
    200: Type.Object({
      isDonating: Type.Boolean()
    }),
    400: Type.Object({
      message: Type.Literal('User is already donating.'),
      type: Type.Literal('info')
    }),
    default: genericError
  }
};
