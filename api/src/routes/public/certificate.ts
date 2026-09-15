import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { find } from 'lodash-es';
import * as schemas from '../../schemas.js';
import {
  certSlugTypeMap,
  certToTitleMap,
  certToIdMap,
  completionHours,
  oldDataVizId
} from '@freecodecamp/shared/config/certification-settings';
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
      const username = req.params.username.toLowerCase();
      const certSlug = req.params.certSlug;

      if (!isKnownCertSlug(certSlug)) {
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'unknown_cert_slug' }
        });
        req.log.warn({ certSlug }, 'Unknown certSlug');
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
      const certId = certToIdMap[certSlug];
      const certTitle = certToTitleMap[certSlug];
      const completionTime = completionHours[certSlug] || 300;
      const user = await fastify.prisma.user.findFirst({
        where: { username },
        select: {
          isBanned: true,
          isCheater: true,
          isA2EnglishCert: true,
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
          isPythonCertV9: true,
          isQaCertV7: true,
          isInfosecCertV7: true,
          isSciCompPyCertV7: true,
          isDataAnalysisPyCertV7: true,
          isMachineLearningPyCertV7: true,
          isRelationalDatabaseCertV8: true,
          isRelationalDatabaseCertV9: true,
          isCollegeAlgebraPyCertV8: true,
          isFoundationalCSharpCertV8: true,
          isFrontEndLibsCertV9: true,
          isBackEndDevApisCertV9: true,
          isFullStackDeveloperCertV9: true,
          isB1EnglishCert: true,
          isA2SpanishCert: true,
          isA2ChineseCert: true,
          isA1ChineseCert: true,
          isHonest: true,
          username: true,
          name: true,
          completedChallenges: true,
          profileUI: true
        }
      });

      if (user === null) {
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'user_not_found' }
        });
        req.log.debug({ username }, 'User not found');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'user_ineligible' }
        });
        req.log.debug({ username }, 'User is banned or a cheater');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'not_honest' }
        });
        req.log.debug({ username }, 'User has not accepted honesty policy');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'profile_locked' }
        });
        req.log.debug({ username }, 'User has a locked profile');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'missing_name' }
        });
        req.log.debug({ username }, 'User has not added a name');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'certs_private' }
        });
        req.log.debug({ username }, 'User has private certs');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'timeline_private' }
        });
        req.log.debug({ username }, 'User has private timeline');
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
        fastify.Sentry?.metrics?.count('certificate.public_view_blocked', 1, {
          attributes: { reason: 'cert_not_completed' }
        });
        req.log.debug(
          { username, certTitle },
          'User has not completed the certification'
        );
        return reply.send({
          messages: [
            {
              type: 'info',
              message: 'flash.user-not-certified',
              variables: { username, cert: certTitle }
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
        req.log.debug({ username }, 'User has private name');
        fastify.Sentry?.metrics?.count('certificate.public_viewed', 1, {
          attributes: { certSlug, nameVisibility: 'hidden' }
        });
        void reply.code(200);
        return reply.send({
          certSlug,
          certTitle,
          username,
          date: normalizeDate(completedDate),
          completionTime
        });
      }

      fastify.Sentry?.metrics?.count('certificate.public_viewed', 1, {
        attributes: { certSlug, nameVisibility: 'shown' }
      });
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
