import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { find } from 'lodash';
import * as schemas from '../../schemas';
import {
  certSlugTypeMap,
  certTypeTitleMap,
  certTypeIdMap,
  completionHours,
  oldDataVizId
} from '../../../../shared/config/certification-settings';
import {
  getFallbackFullStackDate,
  isKnownCertSlug
} from '../helpers/certificate-utils';

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
      const username = req.params.username.toLowerCase();
      const certSlug = req.params.certSlug;

      fastify.log.info(`certSlug: ${certSlug}`);

      if (!isKnownCertSlug(certSlug)) {
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
          isFrontEndLibsCert: true,
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
          isUpcomingPythonCertV8: true,
          isHonest: true,
          username: true,
          name: true,
          completedChallenges: true,
          profileUI: true
        }
      });

      if (user === null) {
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
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.user-not-certified',
              variables: { username, cert: certTypeTitleMap[certType] }
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
        void reply.code(200);
        return reply.send({
          certSlug,
          certTitle,
          username,
          date: completedDate,
          completionTime
        });
      }

      void reply.code(200);
      return reply.send({
        certSlug,
        certTitle,
        username,
        name,
        date: completedDate,
        completionTime
      });
    }
  );

  done();
};
