import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { find } from 'lodash';
import { CompletedChallenge } from '@prisma/client';

import { schemas } from '../schemas';
import {
  certSlugTypeMap,
  certTypeIdMap,
  certTypeTitleMap,
  completionHours,
  oldDataVizId,
  certIds
} from '../../../shared/config/certification-settings';
import { formatCertificationValidation } from '../utils/error-formatting';

const {
  legacyInfosecQaId,
  respWebDesignId,
  frontEndDevLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId
} = certIds;

function getFallbackFullStackDate(
  completedChallenges: CompletedChallenge[],
  completedDate: number
) {
  const chalIds = [
    respWebDesignId,
    jsAlgoDataStructId,
    frontEndDevLibsId,
    dataVis2018Id,
    apisMicroservicesId,
    legacyInfosecQaId
  ];

  const latestCertDate = completedChallenges
    .filter(chal => chalIds.includes(chal.id))
    .sort((a, b) => b.completedDate - a.completedDate)[0]?.completedDate;

  return latestCertDate ? latestCertDate : completedDate;
}

/**
 * Plugin for the certification submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const certRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/certificate/:username/:certSlug',
    {
      schema: schemas.certSlug,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatCertificationValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      try {
        let { username } = req.params;
        const { certSlug } = req.params;
        username = username.toLowerCase();

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
            // isFoundationalCSharpCertV8: true,
            isHonest: true,
            username: true,
            name: true,
            completedChallenges: true,
            profileUI: true
          }
        });
        if (user === null) {
          return {
            type: 'info',
            message: 'flash.username-not-found',
            variables: { username: username }
          } as const;
        }
        if (!user.name) {
          return {
            type: 'info',
            message: 'flash.add-name'
          } as const;
        }

        if (user.isCheater || user.isBanned) {
          return {
            type: 'info',
            message: 'flash.not-eligible'
          } as const;
        }
        if (!user.isHonest) {
          return {
            type: 'info',
            message: 'flash.not-honest',
            variables: { username: username }
          } as const;
        }

        if (user.profileUI?.isLocked) {
          return {
            type: 'info',
            message: 'flash.profile-private',
            variables: { username: username }
          } as const;
        }
        if (!user.profileUI?.showCerts) {
          return {
            type: 'info',
            message: 'flash.certs-private',
            variables: { username: username }
          } as const;
        }
        if (!user.profileUI?.showTimeLine) {
          return {
            type: 'info',
            message: 'flash.timeline-private',
            variables: { username: username }
          } as const;
        }

        if (user[certType]) {
          const { completedChallenges } = user;
          const certChallenge = find(
            completedChallenges,
            ({ id }) => certId === id
          );
          let { completedDate } = certChallenge || {};

          if (!completedDate) completedDate = Date.now();

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

          // if fullcert is not found, return the latest completedDate
          if (certType === 'isFullStackCert' && !certChallenge) {
            completedDate = getFallbackFullStackDate(
              completedChallenges,
              completedDate
            );
          }

          const { username, name } = user;

          if (!user.profileUI.showName) {
            return {
              certSlug,
              certTitle,
              username,
              date: completedDate,
              completionTime
            };
          }

          return {
            certSlug,
            certTitle,
            username,
            name,
            date: completedDate,
            completionTime
          };
        }
      } catch (err) {
        fastify.log.error(err);
        void reply.code(400);
        return { message: 'flash.user-not-certified', type: 'info' } as const;
      }
    }
  );

  done();
};
