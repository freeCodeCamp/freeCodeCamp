import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const projectCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
    challengeType: Type.Optional(Type.Number()),
    // The solution must be a valid URL only if it is a `backEndProject`.
    solution: Type.String({ maxLength: 1024 }),
    githubLink: Type.Optional(Type.String())
  }),
  response: {
    200: Type.Object({
      // TODO(Post-MVP): delete completedDate and alreadyCompleted? As far as
      // I can tell, they are not used anywhere
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Union([
        Type.Literal(
          'That does not appear to be a valid challenge submission.'
        ),
        Type.Literal(
          'You have not provided the valid links for us to inspect your work.'
        )
      ])
    }),
    403: Type.Union([
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Union([
          Type.Literal(
            'You have to complete the project before you can submit a URL.'
          ),
          Type.Literal(
            'That does not appear to be a valid challenge submission.'
          )
        ])
      }),
      genericError
    ]),
    default: genericError
  }
};
