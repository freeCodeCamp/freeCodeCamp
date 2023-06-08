// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  FastifyPluginCallbackTypebox,
  Type
} from '@fastify/type-provider-typebox';
import { ObjectId } from 'bson';
import isNumeric from 'validator/lib/isNumeric';
import isURL from 'validator/lib/isURL';

export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  // NOTE: This would be better if it could be added as a hook instead of
  //       being called in each submission route
  function isValidChallengeCompletion(req, reply) {
    const {
      body: { id, challengeType, solution }
    } = req;

    const isValidChallengeCompletionErrorMsg = {
      type: 'error',
      message: 'That does not appear to be a valid challenge submission.'
    };

    if (!ObjectId.isValid(id)) {
      fastify.log.info(`isObjectId - ${id} - ${ObjectId.isValid(id)}`);
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
    if ('challengeType' in req.body && !String(challengeType)) {
      fastify.log.info(
        `challengeType - ${challengeType} - ${isNumeric(challengeType)}`
      );
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
    if ('solution' in req.body && !isURL(solution)) {
      fastify.log.info(`isObjectId - ${id} - ${ObjectId.isValid(id)}`);
      return reply.code(403).send(isValidChallengeCompletionErrorMsg);
    }
  }

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: {
        body: Type.Object({
          id: Type.String(),
          solution: Type.String()
        })
      }
    },
    async (req, reply) => {
      try {
        console.log(req.body);
        await isValidChallengeCompletion(req, reply);
        if (reply.sent) return;
        return {
          message: 'flash.challenge-completed',
          type: 'success'
        };
      } catch (error) {
        fastify.log.error(error);
        void reply.code(500);
        return {
          message: 'flash.wrong-updating',
          type: 'danger'
        };
      }
    }
  );

  done();
};
