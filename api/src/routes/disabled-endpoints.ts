import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';
import { RouteHandlerMethod } from 'fastify';

const deprecatedEndpoint: RouteHandlerMethod = async (_, res) => {
  void res.status(410);
  return {
    message: {
      type: 'info',
      message: 'Please reload the app, this feature is no longer available.'
    }
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const temporarilyDisabledEndpoint: RouteHandlerMethod = async (_, res) => {
  void res.status(404);
  return {
    message: {
      type: 'info',
      message: 'Please reload the app, this feature is no longer available.'
    }
  };
};

export const disabledEndpoints: FastifyPluginCallbackTypebox = (
  fastify,
  options,
  done
) => {
  fastify.post(
    '/refetch-user-completed-challenges',
    {
      schema: {
        response: {
          410: Type.Object({
            message: Type.Object({
              type: Type.Literal('info'),
              message: Type.Literal(
                'Please reload the app, this feature is no longer available.'
              )
            })
          })
        }
      }
    },
    deprecatedEndpoint
  );

  done();
};
