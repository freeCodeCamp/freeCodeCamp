import { Type } from '@fastify/type-provider-typebox';

/**
 * Schema for updating classroom mode.
 *
 * IMPORTANT: This is a ONE-WAY operation. Classroom mode can only be ENABLED,
 * never disabled via the API. This is intentional business logic to prevent
 * accidental disabling of classroom accounts.
 *
 * The body schema uses Type.Literal(true) instead of Type.Boolean() to enforce
 * this at the type level. Any attempt to send false will result in a 400 error.
 *
 * This follows the same pattern as update-my-honesty.ts for irrevocable settings.
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
