import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import isEmail from 'validator/lib/isEmail';
import { schemas } from '../schemas';
import { getChallenges } from '../utils/get-challenges';
import {
  certIds,
  certSlugTypeMap,
  certTypeTitleMap,
  certTypes,
  currentCertifications
} from '../../../shared/config/certification-settings';
import { removeNulls } from '../utils/normalize';
import { CompletedChallenge } from '../utils/common-challenge-functions';

const {
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,
  legacyInfosecQaId,
  legacyFullStackId,
  respWebDesignId,
  frontEndDevLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  qaV7Id,
  infosecV7Id,
  sciCompPyV7Id,
  dataAnalysisPyV7Id,
  machineLearningPyV7Id,
  relationalDatabaseV8Id,
  collegeAlgebraPyV8Id,
  foundationalCSharpV8Id
} = certIds;

/**
 * Plugin for the certificate endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const certificateRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const challenges = getChallenges();
  const certTypeIds = createCertTypeIds(challenges);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  // TODO: Do not throw flashes. Return response unless 500
  fastify.put(
    '/certificate/verify',
    {
      schema: schemas.certificateVerify,
      attachValidation: true
    },
    async (req, reply) => {
      const { certSlug } = req.body;

      if (!certSlug) {
        void reply.code(400);
        return {
          type: 'danger',
          // message: '`certSlug` not found in request body'
          message: 'flash.wrong-name'
        } as const;
      }

      if (!assertCertSlugIsKeyofCertSlugTypeMap(certSlug)) {
        void reply.code(400);
        throw {
          type: 'danger',
          // message: 'Certificate type not found'
          message: 'flash.wrong-name'
        } as const;
      }

      const certType = certSlugTypeMap[certSlug];
      const certName = certTypeTitleMap[certType];

      try {
        const user = await fastify.prisma.user.findUnique({
          where: { id: req.session.user.id }
        });

        if (!user) {
          void reply.code(500);
          throw {
            type: 'danger',
            // message: 'User not found'
            message: 'flash.went-wrong'
          } as const;
        }

        // TODO: Discuss if this is a requirement still
        if (!user.name) {
          void reply.code(400);
          return {
            type: 'info',
            message: 'flash.name-needed'
          } as const;
        }

        if (user[certType]) {
          void reply.code(200);
          return {
            type: 'info',
            message: 'flash.already-claimed',
            variables: {
              name: certName
            }
          };
        }

        const { id, tests, challengeType } = certTypeIds[certType];
        const hasCompletedTestRequirements = hasCompletedTests(
          tests,
          user.completedChallenges
        );

        if (!hasCompletedTestRequirements) {
          void reply.code(400);
          return {
            type: 'info',
            message: 'flash.incomplete-steps',
            variables: {
              name: certName
            }
          };
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
          }
        });

        const isCertMap = getUserIsCertMap(removeNulls(updatedUser));

        const certMap = Object.entries(isCertMap);
        // TODO(POST-MVP): Consider sending email based on `user.isEmailVerified`
        const shouldSendCertifiedEmailToCamper =
          isEmail(updatedUser.email) &&
          currentCertifications.every(cert =>
            certMap.some(([name, isClaimed]) => name === cert && isClaimed)
          );

        if (shouldSendCertifiedEmailToCamper) {
          const notifyUser = {
            to: updatedUser.email,
            from: 'quincy@freecodecamp.org',
            subject:
              'Congratulations on completing all of the freeCodeCamp certifications!',
            text: renderCertifiedEmail({
              username: updatedUser.username,
              // Safety: `user.name` is required to exist earlier. TODO: Assert
              name: updatedUser.name as string
            })
          };
          // TODO(POST-MVP): Consider not blocking the updated response if email fails. Ensure Camper knows they **have** claimed the cert, but the email failed to send.
          await fastify.sendEmail(notifyUser);
        }

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
          isCertMap,
          completedChallenges: updatedUser.completedChallenges
        };
      } catch (e) {
        void reply.code(500);
        throw {
          type: 'danger',
          // message: 'Oops! Something went wrong. Please try again in a moment or contact
          message: 'flash.went-wrong'
        } as const;
      }
    }
  );

  done();
};

// TODO: Current api is a bit LB specific. Look into templating.
function renderCertifiedEmail({
  username,
  name
}: {
  username: string;
  name: string;
}) {
  const certifiedEmailTemplate = `Hi ${name || username},

Congratulations on completing all of the freeCodeCamp certifications!

All of your certifications are now live at at: https://www.freecodecamp.org/${username}

Please tell me a bit more about you and your near-term goals.

Are you interested in contributing to our open source projects used by nonprofits?

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

function assertCertSlugIsKeyofCertSlugTypeMap(
  certSlug: unknown
): certSlug is keyof typeof certSlugTypeMap {
  return typeof certSlug === 'string' && certSlug in certSlugTypeMap;
}

function createCertTypeIds(challenges: ReturnType<typeof getChallenges>) {
  return {
    // legacy
    [certTypes.frontEnd]: getCertById(legacyFrontEndChallengeId, challenges),
    [certTypes.backEnd]: getCertById(legacyBackEndChallengeId, challenges),
    [certTypes.dataVis]: getCertById(legacyDataVisId, challenges),
    [certTypes.infosecQa]: getCertById(legacyInfosecQaId, challenges),
    [certTypes.fullStack]: getCertById(legacyFullStackId, challenges),

    // modern
    [certTypes.respWebDesign]: getCertById(respWebDesignId, challenges),
    [certTypes.frontEndDevLibs]: getCertById(frontEndDevLibsId, challenges),
    [certTypes.dataVis2018]: getCertById(dataVis2018Id, challenges),
    [certTypes.jsAlgoDataStruct]: getCertById(jsAlgoDataStructId, challenges),
    [certTypes.apisMicroservices]: getCertById(apisMicroservicesId, challenges),
    [certTypes.qaV7]: getCertById(qaV7Id, challenges),
    [certTypes.infosecV7]: getCertById(infosecV7Id, challenges),
    [certTypes.sciCompPyV7]: getCertById(sciCompPyV7Id, challenges),
    [certTypes.dataAnalysisPyV7]: getCertById(dataAnalysisPyV7Id, challenges),
    [certTypes.machineLearningPyV7]: getCertById(
      machineLearningPyV7Id,
      challenges
    ),
    [certTypes.relationalDatabaseV8]: getCertById(
      relationalDatabaseV8Id,
      challenges
    ),
    [certTypes.collegeAlgebraPyV8]: getCertById(
      collegeAlgebraPyV8Id,
      challenges
    ),
    [certTypes.foundationalCSharpV8]: getCertById(
      foundationalCSharpV8Id,
      challenges
    )
  };
}

function getCertById(
  challengeId: string,
  challenges: ReturnType<typeof getChallenges>
): { id: string; tests: { id: string }[]; challengeType: number } {
  const challengeById = challenges.filter(({ id }) => id === challengeId)[0];
  if (!challengeById) {
    throw new Error(`Challenge with id ${challengeId} not found`);
  }
  const { id, tests, challengeType } = challengeById;
  assertTestsExist(tests);
  return { id, tests, challengeType };
}

function assertTestsExist(tests: unknown): asserts tests is { id: string }[] {
  if (!Array.isArray(tests)) {
    throw new Error('Tests is not an array');
  }
  if (!tests.every(test => typeof test === 'object' && test !== null)) {
    throw new Error('Tests contains non-object values');
  }
  // @ts-expect-error Safety: Checked all tests are objects and non-null, and cannot be undefined
  if (!tests.every(test => typeof test.id === 'string')) {
    throw new Error('Tests contain non-string ids');
  }
}

interface CertI {
  isRespWebDesignCert?: boolean;
  isJsAlgoDataStructCert?: boolean;
  isFrontEndLibsCert?: boolean;
  is2018DataVisCert?: boolean;
  isApisMicroservicesCert?: boolean;
  isInfosecQaCert?: boolean;
  isQaCertV7?: boolean;
  isInfosecCertV7?: boolean;
  isFrontEndCert?: boolean;
  isBackEndCert?: boolean;
  isDataVisCert?: boolean;
  isFullStackCert?: boolean;
  isSciCompPyCertV7?: boolean;
  isDataAnalysisPyCertV7?: boolean;
  isMachineLearningPyCertV7?: boolean;
  isRelationalDatabaseCertV8?: boolean;
  isCollegeAlgebraPyCertV8?: boolean;
  isFoundationalCSharpCertV8?: boolean;
}

function getUserIsCertMap(user: CertI) {
  const {
    isRespWebDesignCert = false,
    isJsAlgoDataStructCert = false,
    isFrontEndLibsCert = false,
    is2018DataVisCert = false,
    isApisMicroservicesCert = false,
    isInfosecQaCert = false,
    isQaCertV7 = false,
    isInfosecCertV7 = false,
    isFrontEndCert = false,
    isBackEndCert = false,
    isDataVisCert = false,
    isFullStackCert = false,
    isSciCompPyCertV7 = false,
    isDataAnalysisPyCertV7 = false,
    isMachineLearningPyCertV7 = false,
    isRelationalDatabaseCertV8 = false,
    isCollegeAlgebraPyCertV8 = false,
    isFoundationalCSharpCertV8 = false
  } = user;

  return {
    isRespWebDesignCert,
    isJsAlgoDataStructCert,
    isFrontEndLibsCert,
    is2018DataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8
  };
}
