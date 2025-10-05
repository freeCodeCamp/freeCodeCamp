import { Type } from '@fastify/type-provider-typebox';

export const updateMyKeyboardShortcuts = {
  body: Type.Object({
    keyboardShortcuts: Type.Boolean()
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.keyboard-shortcut-updated'),
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
