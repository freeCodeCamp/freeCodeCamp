import { Type } from '@fastify/type-provider-typebox';

/**
 * Classroom mode is one-way: can only be enabled, not disabled.
 * Consent revocation is not currently supported but may be added later.
 *
 * Type.Literal(true) enforces this. To allow revocation, change to Type.Boolean().
 * Body payload is kept so the API contract won't change when revocation is added.
 */
export const updateMyClassroomMode = {
  body: Type.Object({
    isClassroomAccount: Type.Literal(true)
  }),
  response: {
    200: Type.Object({
      message: Type.Literal('flash.classroom-mode-updated'),
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
