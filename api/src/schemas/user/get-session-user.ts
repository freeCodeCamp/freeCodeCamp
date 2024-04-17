import { Type } from '@fastify/type-provider-typebox';
import { examResults, saveChallengeBody } from '../types';

export const getSessionUser = {
  response: {
    200: Type.Object({
      user: Type.Record(
        Type.String(),
        Type.Object({
          about: Type.String(),
          acceptedPrivacyTerms: Type.Boolean(),
          calendar: Type.Record(Type.Number(), Type.Literal(1)),
          completedChallenges: Type.Array(
            Type.Object({
              id: Type.String(),
              completedDate: Type.Number(),
              solution: Type.Optional(Type.String()),
              githubLink: Type.Optional(Type.String()),
              challengeType: Type.Optional(Type.Number()),
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
              isManuallyApproved: Type.Optional(Type.Boolean())
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
          completedChallengeCount: Type.Number(),
          currentChallengeId: Type.Optional(Type.String()),
          email: Type.String(),
          emailVerified: Type.Boolean(),
          githubProfile: Type.Optional(Type.String()),
          id: Type.String(),
          isApisMicroservicesCert: Type.Optional(Type.Boolean()),
          isBackEndCert: Type.Optional(Type.Boolean()),
          isCheater: Type.Optional(Type.Boolean()),
          isDonating: Type.Boolean(),
          is2018DataVisCert: Type.Optional(Type.Boolean()),
          isDataVisCert: Type.Optional(Type.Boolean()),
          isFrontEndCert: Type.Optional(Type.Boolean()),
          isFullStackCert: Type.Optional(Type.Boolean()),
          isFrontEndLibsCert: Type.Optional(Type.Boolean()),
          isHonest: Type.Optional(Type.Boolean()),
          isInfosecCertV7: Type.Optional(Type.Boolean()),
          isInfosecQaCert: Type.Optional(Type.Boolean()),
          isQaCertV7: Type.Optional(Type.Boolean()),
          isJsAlgoDataStructCert: Type.Optional(Type.Boolean()),
          isRelationalDatabaseCertV8: Type.Optional(Type.Boolean()),
          isRespWebDesignCert: Type.Optional(Type.Boolean()),
          isSciCompPyCertV7: Type.Optional(Type.Boolean()),
          isDataAnalysisPyCertV7: Type.Optional(Type.Boolean()),
          isMachineLearningPyCertV7: Type.Optional(Type.Boolean()),
          isCollegeAlgebraPyCertV8: Type.Optional(Type.Boolean()),
          keyboardShortcuts: Type.Optional(Type.Boolean()),
          linkedin: Type.Optional(Type.String()),
          location: Type.Optional(Type.String()),
          name: Type.Optional(Type.String()),
          partiallyCompletedChallenges: Type.Optional(
            Type.Array(
              Type.Object({ id: Type.String(), completedDate: Type.Number() })
            )
          ),
          picture: Type.String(), // TODO(Post-MVP): format as url/uri?
          points: Type.Number(),
          portfolio: Type.Array(
            Type.Object({
              description: Type.String(),
              id: Type.String(),
              image: Type.String(),
              title: Type.String(),
              url: Type.String()
            })
          ),
          profileUI: Type.Optional(
            Type.Object({
              isLocked: Type.Optional(Type.Boolean()),
              showAbout: Type.Optional(Type.Boolean()),
              showCerts: Type.Optional(Type.Boolean()),
              showDonation: Type.Optional(Type.Boolean()),
              showHeatMap: Type.Optional(Type.Boolean()),
              showLocation: Type.Optional(Type.Boolean()),
              showName: Type.Optional(Type.Boolean()),
              showPoints: Type.Optional(Type.Boolean()),
              showPortfolio: Type.Optional(Type.Boolean()),
              showTimeLine: Type.Optional(Type.Boolean())
            })
          ),
          sendQuincyEmail: Type.Boolean(),
          theme: Type.Optional(Type.String()),
          twitter: Type.Optional(Type.String()),
          website: Type.Optional(Type.String()),
          yearsTopContributor: Type.Array(Type.String()), // TODO(Post-MVP): convert to number?
          isEmailVerified: Type.Boolean(),
          joinDate: Type.String(),
          savedChallenges: Type.Optional(
            Type.Array(
              Type.Intersect([
                saveChallengeBody,
                Type.Object({ lastSavedDate: Type.Number() })
              ])
            )
          ),
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
