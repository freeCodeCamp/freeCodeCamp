import { Type } from '@fastify/type-provider-typebox';
import { file, generic500, savedChallenge } from '../types';

export const saveChallenge = {
  body: Type.Object({
    id: Type.String({
      format: 'objectid',
      maxLength: 24,
      minLength: 24
    }),
    files: Type.Array(file)
  }),
  response: {
    200: Type.Object({
      savedChallenges: Type.Array(savedChallenge)
    }),
    403: Type.Literal('That challenge type is not saveable.'),
    500: generic500
  }
};
