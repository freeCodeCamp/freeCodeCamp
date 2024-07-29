import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const postMsUsername = {
  body: Type.Object({
    msTranscriptUrl: Type.String({ maxLength: 1000 })
  }),
  response: {
    200: Type.Object({
      msUsername: Type.String()
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.ms.transcript.link-err-1')
    }),
    404: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.ms.transcript.link-err-2')
    }),
    403: Type.Union([
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-4')
      }),
      genericError
    ]),
    500: Type.Union([
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-6')
      }),
      Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-3')
      })
    ])
  }
};
