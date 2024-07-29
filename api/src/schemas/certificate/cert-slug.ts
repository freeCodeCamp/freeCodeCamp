import { Type } from '@fastify/type-provider-typebox';
import { Certification } from '../../../../shared/config/certification-settings';
import { genericError } from '../types';

export const certSlug = {
  params: Type.Object({
    certSlug: Type.String(),
    username: Type.String()
  }),
  response: {
    // TODO(POST_MVP): Most of these should not be 200s
    200: Type.Union([
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.username-not-found'),
            variables: Type.Object({
              username: Type.String()
            })
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.not-eligible')
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.not-honest'),
            variables: Type.Object({
              username: Type.String()
            })
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.profile-private'),
            variables: Type.Object({
              username: Type.String()
            })
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.add-name')
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.certs-private'),
            variables: Type.Object({
              username: Type.String()
            })
          })
        )
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.timeline-private'),
            variables: Type.Object({
              username: Type.String()
            })
          })
        )
      }),
      Type.Object({
        certSlug: Type.Enum(Certification),
        certTitle: Type.String(),
        username: Type.String(),
        date: Type.Number(),
        completionTime: Type.Number()
      }),
      Type.Object({
        certSlug: Type.Enum(Certification),
        certTitle: Type.String(),
        username: Type.String(),
        name: Type.String(),
        date: Type.Number(),
        completionTime: Type.Number()
      }),
      Type.Object({
        messages: Type.Array(
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Literal('flash.user-not-certified'),
            variables: Type.Object({
              username: Type.String(),
              cert: Type.String()
            })
          })
        )
      })
    ]),
    404: Type.Object({
      messages: Type.Array(
        Type.Object({
          message: Type.Literal('flash.cert-not-found'),
          type: Type.Literal('info'),
          variables: Type.Object({
            certSlug: Type.String()
          })
        })
      )
    }),
    default: genericError
  }
};
