import { Type } from '@fastify/type-provider-typebox';
import { genericError, isCertMap } from '../types';

export const certificateVerify = {
  // TODO(POST_MVP): Remove partial validation from route for schema validation
  body: Type.Object({
    certSlug: Type.String({ maxLength: 1024 })
  }),
  response: {
    200: Type.Object({
      response: Type.Union([
        Type.Object({
          type: Type.Literal('info'),
          message: Type.Union([Type.Literal('flash.already-claimed')]),
          variables: Type.Object({
            name: Type.String()
          })
        }),
        Type.Object({
          type: Type.Literal('success'),
          message: Type.Literal('flash.cert-claim-success'),
          variables: Type.Object({
            username: Type.String(),
            name: Type.String()
          })
        })
      ]),
      isCertMap,
      completedChallenges: Type.Array(
        Type.Object({
          id: Type.String(),
          completedDate: Type.Number(),
          solution: Type.Optional(Type.String()),
          githubLink: Type.Optional(Type.String()),
          challengeType: Type.Optional(Type.Number()),
          // Technically, files is optional, but the db default was [] and
          // the client treats null, undefined and [] equivalently.
          // TODO(Post-MVP): make this optional.
          files: Type.Array(
            Type.Object({
              contents: Type.String(),
              key: Type.String(),
              ext: Type.String(),
              name: Type.String(),
              path: Type.Optional(Type.String())
            })
          ),
          isManuallyApproved: Type.Optional(Type.Boolean())
        })
      )
    }),
    400: Type.Union([
      Type.Object({
        response: Type.Object({
          type: Type.Literal('info'),
          message: Type.Union([Type.Literal('flash.incomplete-steps')]),
          variables: Type.Object({
            name: Type.String()
          })
        }),
        isCertMap,
        completedChallenges: Type.Array(
          Type.Object({
            id: Type.String(),
            completedDate: Type.Number(),
            solution: Type.Optional(Type.String()),
            githubLink: Type.Optional(Type.String()),
            challengeType: Type.Optional(Type.Number()),
            // Technically, files is optional, but the db default was [] and
            // the client treats null, undefined and [] equivalently.
            // TODO(Post-MVP): make this optional.
            files: Type.Array(
              Type.Object({
                contents: Type.String(),
                key: Type.String(),
                ext: Type.String(),
                name: Type.String(),
                path: Type.Optional(Type.String())
              })
            ),
            isManuallyApproved: Type.Optional(Type.Boolean())
          })
        )
      }),
      Type.Object({
        response: Type.Object({
          type: Type.Literal('danger'),
          message: Type.Union([Type.Literal('flash.wrong-name')]),
          variables: Type.Object({
            name: Type.String()
          })
        })
      }),
      Type.Object({
        response: Type.Object({
          type: Type.Literal('info'),
          message: Type.Union([Type.Literal('flash.name-needed')])
        }),
        isCertMap,
        completedChallenges: Type.Array(
          Type.Object({
            id: Type.String(),
            completedDate: Type.Number(),
            solution: Type.Optional(Type.String()),
            githubLink: Type.Optional(Type.String()),
            challengeType: Type.Optional(Type.Number()),
            // Technically, files is optional, but the db default was [] and
            // the client treats null, undefined and [] equivalently.
            // TODO(Post-MVP): make this optional.
            files: Type.Array(
              Type.Object({
                contents: Type.String(),
                key: Type.String(),
                ext: Type.String(),
                name: Type.String(),
                path: Type.Optional(Type.String())
              })
            ),
            isManuallyApproved: Type.Optional(Type.Boolean())
          })
        )
      })
    ]),
    500: Type.Union([
      Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal('flash.went-wrong')
      }),
      genericError
    ]),
    default: genericError
  }
};
