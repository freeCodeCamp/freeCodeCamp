import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { find } from 'lodash-es';
import * as schemas from '../../schemas.js';
import {
  certSlugTypeMap,
  certTypeTitleMap,
  certTypeIdMap,
  completionHours,
  oldDataVizId
} from '../../../../shared/config/certification-settings.js';
import {
  getFallbackFullStackDate,
  isKnownCertSlug
} from '../helpers/certificate-utils.js';
import { normalizeDate } from '../../utils/normalize.js';

/**
 * Plugin for the unprotected certificate endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const unprotectedCertificateRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/certificate/showCert/:username/:certSlug',
    {
      schema: schemas.certSlug
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      const username = req.params.username.toLowerCase();
      const certSlug = req.params.certSlug;

      if (!isKnownCertSlug(certSlug)) {
        logger.warn(`Unknown certSlug: ${certSlug}`);
        void reply.code(404);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.cert-not-found',
              variables: { certSlug }
            }
          ]
        });
      }

      const certType = certSlugTypeMap[certSlug];
      const certId = certTypeIdMap[certType];
      const certTitle = certTypeTitleMap[certType];
      const completionTime = completionHours[certType] || 300;
      const user = await fastify.prisma.user.findFirst({
        where: { username },
        select: {
          isBanned: true,
          isCheater: true,
          isFrontEndCert: true,
          isBackEndCert: true,
          isFullStackCert: true,
          isRespWebDesignCert: true,
          isRespWebDesignCertV9: true,
          isFrontEndLibsCert: true,
          isJavascriptCertV9: true,
          isJsAlgoDataStructCert: true,
          isJsAlgoDataStructCertV8: true,
          isDataVisCert: true,
          is2018DataVisCert: true,
          isApisMicroservicesCert: true,
          isInfosecQaCert: true,
          isQaCertV7: true,
          isInfosecCertV7: true,
          isSciCompPyCertV7: true,
          isDataAnalysisPyCertV7: true,
          isMachineLearningPyCertV7: true,
          isRelationalDatabaseCertV8: true,
          isCollegeAlgebraPyCertV8: true,
          isFoundationalCSharpCertV8: true,
          isHonest: true,
          username: true,
          name: true,
          completedChallenges: true,
          profileUI: true
        }
      });

      if (user === null) {
        logger.info(`User ${username} not found.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.username-not-found',
              variables: { username }
            }
          ]
        });
      }

      if (user.isCheater || user.isBanned) {
        logger.info(`User ${username} is banned or a cheater.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.not-eligible'
            }
          ]
        });
      }

      if (!user.isHonest) {
        logger.info(`User ${username} has not accepted honesty policy.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.not-honest',
              variables: { username }
            }
          ]
        });
      }

      if (user.profileUI?.isLocked) {
        logger.info(`User ${username} has a locked profile.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.profile-private',
              variables: { username }
            }
          ]
        });
      }

      if (!user.name) {
        logger.info(`User ${username} has not added a name.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.add-name'
            }
          ]
        });
      }

      if (!user.profileUI?.showCerts) {
        logger.info(`User ${username} has private certs.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.certs-private',
              variables: { username }
            }
          ]
        });
      }

      if (!user.profileUI?.showTimeLine) {
        logger.info(`User ${username} has private timeline.`);
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.timeline-private',
              variables: { username }
            }
          ]
        });
      }

      if (!user[certType]) {
        const cert = certTypeTitleMap[certType];
        logger.info(
          `User ${username} has not completed the ${cert} certification.`
        );
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.user-not-certified',
              variables: { username, cert }
            }
          ]
        });
      }

      const { completedChallenges } = user;
      const certChallenge = find(
        completedChallenges,
        ({ id }) => certId === id
      );

      let { completedDate = Date.now() } = certChallenge || {};

      // the challenge id has been rotated for isDataVisCert
      if (certType === 'isDataVisCert' && !certChallenge) {
        const oldDataVisIdChall = find(
          completedChallenges,
          ({ id }) => oldDataVizId === id
        );

        if (oldDataVisIdChall) {
          completedDate = oldDataVisIdChall.completedDate || completedDate;
        }
      }

      // if fullcert is not found, return the latest completedDate
      if (certType === 'isFullStackCert' && !certChallenge) {
        completedDate = getFallbackFullStackDate(
          completedChallenges,
          completedDate
        );
      }

      const { name } = user;

      if (!user.profileUI.showName) {
        logger.info(`User ${username} has private name.`);
        void reply.code(200);
        return reply.send({
          certSlug,
          certTitle,
          username,
          date: normalizeDate(completedDate),
          completionTime
        });
      }

      void reply.code(200);
      return reply.send({
        certSlug,
        certTitle,
        username,
        name,
        date: normalizeDate(completedDate),
        completionTime
      });
    }
  );

  done();
};
