import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const coderoadChallengeCompleted = {
  body: Type.Object({
    tutorialId: Type.String()
  }),
  headers: Type.Object({ 'coderoad-user-token': Type.String() }),
  response: {
    200: Type.Object({
      type: Type.Literal('success'),
      msg: Type.String()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      msg: Type.String()
    }),
    default: genericError
  }
};
