import { Type } from '@fastify/type-provider-typebox';

export const msTrophyChallengeCompleted = {
  body: Type.Object({
    id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
  }),
  response: {
    200: Type.Object({
      completedDate: Type.Number(),
      points: Type.Number(),
      alreadyCompleted: Type.Boolean()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.ms.trophy.err-2')
    }),
    403: Type.Union([
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-1')
      }),
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-3')
      }),
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-4'),
        variables: Type.Object({
          msUsername: Type.String()
        })
      }),
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-6')
      }),
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.profile.err'),
        variables: Type.Object({
          msUsername: Type.String()
        })
      })
    ]),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.ms.trophy.err-5')
    })
  }
};
