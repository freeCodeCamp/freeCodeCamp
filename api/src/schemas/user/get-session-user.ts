import { Type } from '@fastify/type-provider-typebox';
import { examResults, Nullable, profileUI, savedChallenge } from '../types';

export const getSessionUser = {
  response: {
    200: Type.Object({
      user: Type.Record(
        Type.String(),
        Type.Object({
          about: Nullable(Type.String()),
          acceptedPrivacyTerms: Type.Boolean(),
          calendar: Type.Record(Type.Number(), Type.Literal(1)),
          completedChallenges: Type.Array(
            Type.Object({
              id: Type.String(),
              completedDate: Type.Number(),
              solution: Nullable(Type.String()),
              githubLink: Nullable(Type.String()),
              challengeType: Nullable(Type.Number()),
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
              isManuallyApproved: Nullable(Type.Boolean()),
              examResults: Nullable(examResults)
            })
          ),
          completedExams: Type.Array(
            Type.Object({
              id: Type.String(),
              completedDate: Type.Number(),
              challengeType: Type.Optional(Type.Number()),
              examResults
            })
          ),
          quizAttempts: Type.Array(
            Type.Object({
              challengeId: Type.String({
                format: 'objectid',
                maxLength: 24,
                minLength: 24
              }),
              quizId: Type.String(),
              timestamp: Type.Number()
            })
          ),
          completedChallengeCount: Type.Number(),
          currentChallengeId: Nullable(Type.String()),
          email: Type.String(),
          emailVerified: Type.Boolean(),
          githubProfile: Nullable(Type.String()),
          id: Type.String(),
          is2018DataVisCert: Type.Boolean(),
          is2018FullStackCert: Type.Boolean(),
          isApisMicroservicesCert: Type.Boolean(),
          isBackEndCert: Type.Boolean(),
          isCheater: Type.Boolean(),
          isCollegeAlgebraPyCertV8: Type.Boolean(),
          isDataAnalysisPyCertV7: Type.Boolean(),
          isDataVisCert: Type.Boolean(),
          isDonating: Type.Boolean(),
          isFoundationalCSharpCertV8: Type.Boolean(),
          isFrontEndCert: Type.Boolean(),
          isFrontEndLibsCert: Type.Boolean(),
          isFullStackCert: Type.Boolean(),
          isHonest: Type.Boolean(),
          isInfosecCertV7: Type.Boolean(),
          isInfosecQaCert: Type.Boolean(),
          isJsAlgoDataStructCert: Type.Boolean(),
          isJsAlgoDataStructCertV8: Type.Boolean(),
          isMachineLearningPyCertV7: Type.Boolean(),
          isQaCertV7: Type.Boolean(),
          isRelationalDatabaseCertV8: Type.Boolean(),
          isRespWebDesignCert: Type.Boolean(),
          isSciCompPyCertV7: Type.Boolean(),
          keyboardShortcuts: Type.Boolean(),
          linkedin: Nullable(Type.String()),
          location: Type.String(),
          name: Type.String(),
          partiallyCompletedChallenges: Type.Array(
            Type.Object({ id: Type.String(), completedDate: Type.Number() })
          ),
          picture: Nullable(Type.String()), // TODO(Post-MVP): format as url/uri?
          points: Type.Number(),
          portfolio: Type.Array(
            Type.Object({
              description: Nullable(Type.String()),
              id: Type.String(),
              image: Nullable(Type.String()),
              title: Nullable(Type.String()),
              url: Nullable(Type.String())
            })
          ),
          profileUI: Type.Optional(profileUI),
          sendQuincyEmail: Type.Boolean(),
          theme: Type.String(),
          twitter: Type.Optional(Type.String()),
          website: Nullable(Type.String()),
          yearsTopContributor: Type.Array(Type.String()), // TODO(Post-MVP): convert to number?
          isEmailVerified: Type.Boolean(),
          joinDate: Type.String(),
          savedChallenges: Type.Optional(Type.Array(savedChallenge)),
          username: Type.String(),
          userToken: Type.Optional(Type.String()),
          completedSurveys: Type.Array(
            Type.Object({
              title: Type.String(),
              responses: Type.Array(
                Type.Object({
                  question: Type.String(),
                  response: Type.String()
                })
              )
            })
          ),
          msUsername: Type.Optional(Type.String())
        })
      ),
      result: Type.String()
    }),
    500: Type.Object({
      user: Type.Object({}),
      result: Type.Literal('')
    })
  }
};
