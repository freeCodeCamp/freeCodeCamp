import { Type } from '@fastify/type-provider-typebox';
import { genericError } from '../types';

export const reportUser = {
  body: Type.Object({
    username: Type.String(),
    reportDescription: Type.String()
  }),
  response: {
    200: Type.Object({
      type: Type.Literal('info'),
      message: Type.Literal('flash.report-sent'),
      variables: Type.Object({
        email: Type.String()
      })
    }),
    400: Type.Object({
      type: Type.Literal('danger'),
      message: Type.Literal('flash.provide-username')
    }),
    default: genericError
  }
};
