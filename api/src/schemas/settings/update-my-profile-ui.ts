import { Type } from '@fastify/type-provider-typebox';

import { profileUI } from '../types.js';

export const updateMyProfileUI = {
  body: Type.Object({
    profileUI
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.privacy-updated'),
      type: Type.Literal('success')
    }),
    400: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    }),
    500: Type.Object({
      message: Type.Literal('flash.wrong-updating'),
      type: Type.Literal('danger')
    })
  }
};
