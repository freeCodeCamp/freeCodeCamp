import { Type } from '@fastify/type-provider-typebox';
import { genericError, surveyTitles } from '../types.js';

export const submitSurvey = {
  body: Type.Object({
    surveyResults: Type.Object({
      title: surveyTitles,
      responses: Type.Array(
        Type.Object({
          question: Type.String(),
          response: Type.String()
        })
      )
    })
  }),
  response: {
    200: Type.Object({
      type: Type.Literal('success'),
      message: Type.Literal('flash.survey.success')
    }),
    400: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.survey.err-1')
    }),
    403: genericError,
    409: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.survey.err-2')
    }),
    500: Type.Object({
      type: Type.Literal('error'),
      message: Type.Literal('flash.survey.err-3')
    })
  }
};
