import type { CompletedChallenge } from '@prisma/client';
import validator from 'validator';
import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { challenges, getChallenges } from '../../utils/get-challenges.js';
import {
  Certification,
  type CertificationFlags,
  certSlugTypeMap,
  certToIdMap,
  certToTitleMap,
  currentCertifications,
  legacyCertifications,
  legacyFullStackCertification,
  upcomingCertifications
} from '@freecodecamp/shared/config/certification-settings';

import * as schemas from '../../schemas.js';
import { normalizeChallenges, removeNulls } from '../../utils/normalize.js';

import { SHOW_UPCOMING_CHANGES } from '../../utils/env.js';
import { isKnownCertSlug } from '../helpers/certificate-utils.js';

function isCertAllowed(certSlug: string): boolean {
  if (
    currentCertifications.includes(certSlug) ||
    legacyCertifications.includes(certSlug) ||
    legacyFullStackCertification.includes(certSlug)
  ) {
    return true;
  }
  if (SHOW_UPCOMING_CHANGES && upcomingCertifications.includes(certSlug)) {
    return true;
  }
  return false;
}

function renderCertifiedEmail({
  username,
  name
}: {
  username: string;
  name: string;
}) {
  const certifiedEmailTemplate = `Hi ${name || username},

Congratulations on completing the Certified Full-Stack Developer Curriculum!

All of your certifications are now live at: https://www.freecodecamp.org/${username}

Please tell me a bit more about you and your near-term goals.

Also, check out https://contribute.freecodecamp.org/ for some fun and convenient ways you can contribute to the community.

Happy coding,

- Quincy Larson, teacher at freeCodeCamp
`;
  return certifiedEmailTemplate;
}

function hasCompletedTests(
  tests: { id: string }[],
  completedChallenges: CompletedChallenge[]
) {
  return tests.every(({ id }) =>
    completedChallenges.some(({ id: completedId }) => completedId === id)
  );
}

function assertTestsExist(
  tests: ReturnType<typeof getChallenges>[number]['tests']
): asserts tests is { id: string }[] {
  if (!Array.isArray(tests)) {
    throw new Error('Tests is not an array');
  }
  if (!tests.every(test => typeof test === 'object' && test !== null)) {
    throw new Error('Tests contains non-object values');
  }
  if (!tests.every(test => typeof test.id === 'string')) {
    throw new Error('Tests contain non-string ids');
  }
}

function getCertBySlug(
  cert: Certification,
  challenges: ReturnType<typeof getChallenges>
): { id: string; tests: { id: string }[]; challengeType: number } {
  const challengeId = certToIdMap[cert];
  const challengeById = challenges.filter(({ id }) => id === challengeId)[0];
  if (!challengeById) {
    throw new Error(`Challenge with id '${challengeId}' not found`);
  }
  const { id, tests, challengeType } = challengeById;
  assertTestsExist(tests);
  return { id, tests, challengeType };
}

type CertLookup = Record<
  Certification,
  { id: string; tests: { id: string }[]; challengeType: number }
>;

/**
 * Create a lookup from Certification enum values to their corresponding
 * challenge metadata (id, tests and challengeType) using the provided
 * challenges array.
 *
 * @param challenges - The array returned by getChallenges().
 * @returns A record mapping each Certification to an object with id, tests and challengeType.
 */
export function createCertLookup(
  challenges: ReturnType<typeof getChallenges>
): CertLookup {
  const certLookup = {} as CertLookup;

  for (const cert of Object.values(Certification)) {
    certLookup[cert] = getCertBySlug(cert, challenges);
  }
  return certLookup;
}

function getUserIsCertMap(user: Partial<CertificationFlags>) {
  const {
    is2018DataVisCert = false,
    isA1ChineseCert = false,
    isA2ChineseCert = false,
    isA2EnglishCert = false,
    isA2SpanishCert = false,
    isApisMicroservicesCert = false,
    isB1EnglishCert = false,
    isBackEndCert = false,
    isBackEndDevApisCertV9 = false,
    isCollegeAlgebraPyCertV8 = false,
    isDataAnalysisPyCertV7 = false,
    isDataVisCert = false,
    isFoundationalCSharpCertV8 = false,
    isFrontEndCert = false,
    isFrontEndLibsCert = false,
    isFrontEndLibsCertV9 = false,
    isFullStackCert = false,
    isFullStackDeveloperCertV9 = false,
    isInfosecCertV7 = false,
    isInfosecQaCert = false,
    isJavascriptCertV9 = false,
    isJsAlgoDataStructCert = false,
    isJsAlgoDataStructCertV8 = false,
    isMachineLearningPyCertV7 = false,
    isPythonCertV9 = false,
    isQaCertV7 = false,
    isRelationalDatabaseCertV8 = false,
    isRelationalDatabaseCertV9 = false,
    isRespWebDesignCert = false,
    isRespWebDesignCertV9 = false,
    isSciCompPyCertV7 = false
  } = user;

  return {
    is2018DataVisCert,
    isA1ChineseCert,
    isA2ChineseCert,
    isA2EnglishCert,
    isA2SpanishCert,
    isApisMicroservicesCert,
    isB1EnglishCert,
    isBackEndCert,
    isBackEndDevApisCertV9,
    isCollegeAlgebraPyCertV8,
    isDataAnalysisPyCertV7,
    isDataVisCert,
    isFoundationalCSharpCertV8,
    isFrontEndCert,
    isFrontEndLibsCert,
    isFrontEndLibsCertV9,
    isFullStackCert,
    isFullStackDeveloperCertV9,
    isInfosecCertV7,
    isInfosecQaCert,
    isJavascriptCertV9,
    isJsAlgoDataStructCert,
    isJsAlgoDataStructCertV8,
    isMachineLearningPyCertV7,
    isPythonCertV9,
    isQaCertV7,
    isRelationalDatabaseCertV8,
    isRelationalDatabaseCertV9,
    isRespWebDesignCert,
    isRespWebDesignCertV9,
    isSciCompPyCertV7
  };
}

/**
 * Plugin for the protected certificate endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const protectedCertificateRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const certLookup = createCertLookup(challenges);

  // TODO(POST_MVP): Response should not include updated user. If a client wants the updated user, it should make a separate request
  // OR: Always respond with current user - full user object - not random pieces.
  fastify.put(
    '/certificate/verify',
    {
      schema: schemas.certificateVerify,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400).send({
            response: {
              type: 'danger',
              message: 'flash.wrong-name',
              variables: { name: '' }
            }
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      const { certSlug } = req.body;

      if (!isKnownCertSlug(certSlug) || !isCertAllowed(certSlug)) {
        logger.warn(`Unknown certificate slug "${certSlug}"`);
        void reply.code(400);
        return {
          response: {
            type: 'danger',
            // message: 'Certificate type not found'
            message: 'flash.wrong-name',
            variables: { name: certSlug }
          }
        } as const;
      }

      const certType = certSlugTypeMap[certSlug];
      const certName = certToTitleMap[certSlug];

      const user = await fastify.prisma.user.findUnique({
        where: { id: req.user?.id }
      });

      if (!user) {
        void reply.code(500);
        logger.error(`User with id ${req.user?.id} not found`);
        fastify.Sentry.captureException(Error('User not found'));
        return {
          type: 'danger',
          // message: 'User not found'
          message: 'flash.went-wrong'
        } as const;
      }
      const { completedChallenges } = user;
      const isCertMap = getUserIsCertMap(removeNulls(user));

      // TODO: Discuss if this is a requirement still
      if (!user.name) {
        logger.warn(`${user.id} does not have a name property`);
        void reply.code(400);
        return {
          response: {
            type: 'info',
            message: 'flash.name-needed'
          },
          isCertMap,
          completedChallenges: normalizeChallenges(completedChallenges)
        } as const;
      }

      if (user[certType]) {
        logger.info(`${user.id} has already claimed ${certName}`);
        void reply.code(200);
        return {
          response: {
            type: 'info',
            message: 'flash.already-claimed',
            variables: {
              name: certName
            }
          },
          isCertMap,
          completedChallenges: normalizeChallenges(completedChallenges)
        } as const;
      }

      const { id, tests, challengeType } = certLookup[certSlug];
      const hasCompletedTestRequirements = hasCompletedTests(
        tests,
        user.completedChallenges
      );

      if (!hasCompletedTestRequirements) {
        logger.info(`${user.id} has not completed the tests for ${certName}`);
        void reply.code(400);
        return {
          response: {
            type: 'info',
            message: 'flash.incomplete-steps',
            variables: {
              name: certName
            }
          },
          isCertMap,
          completedChallenges: normalizeChallenges(completedChallenges)
        } as const;
      }

      const updatedUser = await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          [certType]: true,
          completedChallenges: {
            push: {
              id,
              completedDate: Date.now(),
              challengeType
            }
          }
        },
        select: {
          completedChallenges: true,
          email: true,
          name: true,
          username: true,
          is2018DataVisCert: true,
          is2018FullStackCert: true,
          isA1ChineseCert: true,
          isA2ChineseCert: true,
          isA2EnglishCert: true,
          isA2SpanishCert: true,
          isApisMicroservicesCert: true,
          isB1EnglishCert: true,
          isBackEndCert: true,
          isBackEndDevApisCertV9: true,
          isCollegeAlgebraPyCertV8: true,
          isDataAnalysisPyCertV7: true,
          isDataVisCert: true,
          isFoundationalCSharpCertV8: true,
          isFrontEndCert: true,
          isFrontEndLibsCert: true,
          isFrontEndLibsCertV9: true,
          isFullStackCert: true,
          isFullStackDeveloperCertV9: true,
          isInfosecCertV7: true,
          isInfosecQaCert: true,
          isJavascriptCertV9: true,
          isJsAlgoDataStructCert: true,
          isJsAlgoDataStructCertV8: true,
          isMachineLearningPyCertV7: true,
          isPythonCertV9: true,
          isQaCertV7: true,
          isRelationalDatabaseCertV8: true,
          isRelationalDatabaseCertV9: true,
          isRespWebDesignCert: true,
          isRespWebDesignCertV9: true,
          isSciCompPyCertV7: true
        }
      });

      const email = updatedUser.email;
      const updatedUserSansNull = removeNulls(updatedUser);
      const updatedIsCertMap = getUserIsCertMap(updatedUserSansNull);

      // TODO(POST-MVP): Consider sending email based on `user.isEmailVerified` as well
      const fullStackV9Claimed = updatedIsCertMap.isFullStackDeveloperCertV9;

      const shouldSendCertifiedEmailToCamper =
        email && validator.default.isEmail(email) && fullStackV9Claimed;

      if (shouldSendCertifiedEmailToCamper) {
        const notifyUser = {
          to: email,
          from: 'quincy@freecodecamp.org',
          subject:
            'Congratulations on completing the Certified Full-Stack Developer Curriculum!',
          text: renderCertifiedEmail({
            username: updatedUser.username,
            // Safety: `user.name` is required to exist earlier. TODO: Assert
            name: updatedUser.name as string
          })
        };

        // Failed email should not prevent successful response.
        try {
          logger.info(`Sending congratulations email to ${user.id}`);
          // TODO(POST-MVP): Ensure Camper knows they **have** claimed the cert, but the email failed to send.
          await fastify.sendEmail(notifyUser);
        } catch (e) {
          logger.error(e);
          fastify.Sentry.captureException(e);
        }
      }

      logger.info(`${user.id} has claimed ${certName}`);
      void reply.code(200);
      return {
        response: {
          type: 'success',
          message: 'flash.cert-claim-success',
          variables: {
            username: updatedUser.username,
            name: certName
          }
        },
        isCertMap: updatedIsCertMap,
        completedChallenges: normalizeChallenges(
          updatedUserSansNull.completedChallenges
        )
      } as const;
    }
  );

  done();
};
