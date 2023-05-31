import { Type } from '@fastify/type-provider-typebox';

export const schemas = {
  // Settings:
  updateMyProfileUI: {
    body: Type.Object({
      profileUI: Type.Object({
        isLocked: Type.Boolean(),
        showAbout: Type.Boolean(),
        showCerts: Type.Boolean(),
        showDonation: Type.Boolean(),
        showHeatMap: Type.Boolean(),
        showLocation: Type.Boolean(),
        showName: Type.Boolean(),
        showPoints: Type.Boolean(),
        showPortfolio: Type.Boolean(),
        showTimeLine: Type.Boolean()
      })
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.privacy-updated'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyTheme: {
    body: Type.Object({
      theme: Type.Union([Type.Literal('default'), Type.Literal('night')])
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.updated-themes'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyUsername: {
    body: Type.Object({
      username: Type.String({ minLength: 3, maxLength: 1000 })
    }),
    response: {
      200: Type.Object({
        message: Type.String(),
        type: Type.Literal('success'),
        username: Type.String()
      }),
      400: Type.Object({
        message: Type.Optional(Type.String()),
        type: Type.Literal('info')
      }),
      500: Type.Object({
        message: Type.String(),
        type: Type.Literal('danger')
      })
    }
  },
  updateMySocials: {
    body: Type.Object({
      website: Type.Optional(Type.String({ format: 'url', maxLength: 1024 })),
      twitter: Type.Optional(Type.String({ format: 'url', maxLength: 1024 })),
      githubProfile: Type.Optional(
        Type.String({ format: 'url', maxLength: 1024 })
      ),
      linkedin: Type.Optional(Type.String({ format: 'url', maxLength: 1024 }))
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.updated-socials'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyKeyboardShortcuts: {
    body: Type.Object({
      keyboardShortcuts: Type.Boolean()
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.keyboard-shortcut-updated'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyQuincyEmail: {
    body: Type.Object({
      sendQuincyEmail: Type.Boolean()
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.subscribe-to-quincy-updated'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyHonesty: {
    body: Type.Object({
      isHonest: Type.Literal(true)
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('buttons.accepted-honesty'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyAbout: {
    body: Type.Object({
      about: Type.Optional(Type.String()),
      name: Type.Optional(Type.String()),
      picture: Type.Optional(Type.String()),
      location: Type.Optional(Type.String())
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.updated-about-me'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyPrivacyTerms: {
    body: Type.Object({
      quincyEmails: Type.Boolean()
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.privacy-updated'),
        type: Type.Literal('success')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  // User:
  deleteMyAccount: {
    response: {
      200: Type.Object({}),
      500: Type.Object({
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        ),
        type: Type.Literal('danger')
      })
    }
  },
  resetMyProgress: {
    response: {
      200: Type.Object({}),
      500: Type.Object({
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        ),
        type: Type.Literal('danger')
      })
    }
  },
  getSessionUser: {
    response: {
      200: Type.Object({
        // Unfortunately, it's not possible to set a real schema for this
        // object, since the username is dynamic and used as a key.
        user: Type.Record(
          Type.String(),
          Type.Object({
            about: Type.String(),
            acceptedPrivacyTerms: Type.Boolean(),
            completedChallenges: Type.Array(
              Type.Object({
                id: Type.String(),
                completedDate: Type.Number(),
                solution: Type.String(),
                githubLink: Type.String(),
                challengeType: Type.Number(),
                files: Type.Array(Type.Object({})),
                isManuallyApproved: Type.Boolean()
              })
            ),
            currentChallengeId: Type.String(),
            donationEmails: Type.Array(Type.String()),
            email: Type.String(),
            emailVerified: Type.Boolean(),
            githubProfile: Type.String(),
            isApisMicroservicesCert: Type.Boolean(),
            isBackEndCert: Type.Boolean(),
            isCheater: Type.Boolean(),
            isDonating: Type.Boolean(),
            is2018DataVisCert: Type.Boolean(),
            isDataVisCert: Type.Boolean(),
            isFrontEndCert: Type.Boolean(),
            isFullStackCert: Type.Boolean(),
            isFrontEndLibsCert: Type.Boolean(),
            isHonest: Type.Boolean(),
            isInfosecCertV7: Type.Boolean(),
            isInfosecQaCert: Type.Boolean(),
            isQaCertV7: Type.Boolean(),
            isJsAlgoDataStructCert: Type.Boolean(),
            isRelationalDatabaseCertV8: Type.Boolean(),
            isRespWebDesignCert: Type.Boolean(),
            isSciCompPyCertV7: Type.Boolean(),
            isDataAnalysisPyCertV7: Type.Boolean(),
            isMachineLearningPyCertV7: Type.Boolean(),
            isCollegeAlgebraPyCertV8: Type.Boolean(),
            keyboardShortcuts: Type.Boolean(),
            linkedin: Type.String(),
            location: Type.String(),
            name: Type.String(),
            partiallyCompletedChallenges: Type.Array(Type.Object({})),
            portfolio: Type.Array(Type.Object({})),
            profileUI: Type.Object({}),
            sendQuincyEmail: Type.Boolean(),
            theme: Type.String(),
            twitter: Type.String(),
            website: Type.String(),
            yearsTopContributor: Type.Array(Type.Number()),
            sound: Type.Boolean(), // TODO: Handle `null` on server?

            calendar: Type.Record(Type.Number(), Type.Number()),
            isEmailVerified: Type.Boolean(),
            joinDate: Type.Number(),
            points: Type.Array(Type.Object({})),
            savedChallenges: Type.Object({}),
            username: Type.String(),
            userToken: Type.String()
          })
        ),
        result: Type.String()
      })
      // TODO: is there a better status code? Is it really a server error?
      // TODO: add this back in once the success response is typed.
      // 500: Type.Object({
      //   user: Type.Object({}),
      //   result: Type.Literal('')
      // })
    }
  },
  // Deprecated endpoints:
  deprecatedEndpoints: {
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
};
