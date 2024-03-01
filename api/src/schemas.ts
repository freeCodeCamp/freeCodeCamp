import { Type } from '@fastify/type-provider-typebox';

const generic500 = Type.Object({
  message: Type.Literal(
    'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
  ),
  type: Type.Literal('danger')
});

const isCertMap = Type.Object({
  isRespWebDesignCert: Type.Boolean(),
  isJsAlgoDataStructCert: Type.Boolean(),
  isFrontEndLibsCert: Type.Boolean(),
  is2018DataVisCert: Type.Boolean(),
  isApisMicroservicesCert: Type.Boolean(),
  isInfosecQaCert: Type.Boolean(),
  isQaCertV7: Type.Boolean(),
  isInfosecCertV7: Type.Boolean(),
  isFrontEndCert: Type.Boolean(),
  isBackEndCert: Type.Boolean(),
  isDataVisCert: Type.Boolean(),
  isFullStackCert: Type.Boolean(),
  isSciCompPyCertV7: Type.Boolean(),
  isDataAnalysisPyCertV7: Type.Boolean(),
  isMachineLearningPyCertV7: Type.Boolean(),
  isRelationalDatabaseCertV8: Type.Boolean(),
  isCollegeAlgebraPyCertV8: Type.Boolean(),
  isFoundationalCSharpCertV8: Type.Boolean()
});

const file = Type.Object({
  contents: Type.String(),
  key: Type.String(),
  ext: Type.String(),
  name: Type.String(),
  history: Type.Array(Type.String())
});

const saveChallengeBody = Type.Object({
  id: Type.String({
    format: 'objectid',
    maxLength: 24,
    minLength: 24
  }),
  files: Type.Array(file)
});

const examResults = Type.Object({
  numberOfCorrectAnswers: Type.Number(),
  numberOfQuestionsInExam: Type.Number(),
  percentCorrect: Type.Number(),
  passingPercent: Type.Number(),
  passed: Type.Boolean(),
  examTimeInSeconds: Type.Number()
});

const surveyTitles = Type.Union([
  Type.Literal('Foundational C# with Microsoft Survey')
]);

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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyAbout: {
    body: Type.Object({
      // TODO(Post-MVP): make these required
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
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      }),
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyPortfolio: {
    body: Type.Object({
      portfolio: Type.Array(
        Type.Object({
          description: Type.Optional(Type.String()),
          id: Type.Optional(Type.String()),
          image: Type.Optional(Type.String()),
          title: Type.Optional(Type.String()),
          url: Type.Optional(Type.String())
        })
      )
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.portfolio-item-updated'),
        type: Type.Literal('success')
      }),
      // TODO(Post-MVP): give more detailed response (i.e. which item is
      // missing)
      400: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      }),
      // TODO(Post-MVP): differentiate with more than just the status
      500: Type.Object({
        message: Type.Literal('flash.wrong-updating'),
        type: Type.Literal('danger')
      })
    }
  },
  updateMyEmail: {
    body: Type.Object({
      email: Type.String({ format: 'email', maxLength: 1024 })
    }),
    response: {
      200: Type.Object({
        message: Type.Literal('flash.email-valid'),
        type: Type.Literal('success')
      }),
      '4xx': Type.Object({
        message: Type.String(),
        type: Type.Union([Type.Literal('danger'), Type.Literal('info')])
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
      500: generic500
    }
  },
  resetMyProgress: {
    response: {
      200: Type.Object({}),
      500: generic500
    }
  },
  getSessionUser: {
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
            )
          })
        ),
        result: Type.String()
      }),
      500: Type.Object({
        user: Type.Object({}),
        result: Type.Literal('')
      })
    }
  },
  deleteUserToken: {
    response: {
      200: Type.Object({
        userToken: Type.Null()
      }),
      404: Type.Object({
        message: Type.Literal('userToken not found'),
        type: Type.Literal('info')
      }),
      500: Type.Object({
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        ),
        type: Type.Literal('danger')
      })
    }
  },
  reportUser: {
    body: Type.Object({
      username: Type.String(),
      reportDescription: Type.String()
    }),
    response: {
      200: Type.Object({
        type: Type.Literal('info'),
        message: Type.Literal('flash.report-sent'),
        variables: Type.Object({
          email: Type.String()
        })
      }),
      400: Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal('flash.provide-username')
      }),
      500: generic500
    }
  },
  deleteMsUsername: {
    response: {
      200: Type.Object({ msUsername: Type.Null() }),
      500: Type.Object({
        message: Type.Literal('flash.ms.transcript.unlink-err'),
        type: Type.Literal('error')
      })
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
  },
  // Challenges:
  projectCompleted: {
    body: Type.Object({
      id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
      challengeType: Type.Optional(Type.Number()),
      solution: Type.String({ format: 'url', maxLength: 1024 }),
      // TODO(Post-MVP): require format: 'url' for githubLink
      githubLink: Type.Optional(Type.String())
    }),
    response: {
      200: Type.Object({
        // TODO(Post-MVP): delete completedDate and alreadyCompleted? As far as
        // I can tell, they are not used anywhere
        completedDate: Type.Number(),
        points: Type.Number(),
        alreadyCompleted: Type.Boolean()
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        message: Type.Union([
          Type.Literal(
            'That does not appear to be a valid challenge submission.'
          ),
          Type.Literal(
            'You have not provided the valid links for us to inspect your work.'
          )
        ])
      }),
      403: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal(
          'You have to complete the project before you can submit a URL.'
        )
      }),
      500: Type.Object({
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        ),
        type: Type.Literal('danger')
      })
    }
  },
  coderoadChallengeCompleted: {
    body: Type.Object({
      tutorialId: Type.String()
    }),
    headers: Type.Object({ 'coderoad-user-token': Type.String() }),
    response: {
      200: Type.Object({
        type: Type.Literal('success'),
        msg: Type.String()
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        msg: Type.String()
      }),
      500: Type.Object({
        type: Type.Literal('danger'),
        msg: Type.String()
      })
    }
  },
  backendChallengeCompleted: {
    body: Type.Object({
      id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
    }),
    response: {
      200: Type.Object({
        completedDate: Type.Number(),
        points: Type.Number(),
        alreadyCompleted: Type.Boolean()
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal(
          'That does not appear to be a valid challenge submission.'
        )
      }),
      500: Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        )
      })
    }
  },
  chargeStripeCard: {
    body: Type.Object({
      paymentMethodId: Type.String(),
      amount: Type.Number(),
      duration: Type.Literal('month')
    }),
    response: {
      200: Type.Object({
        isDonating: Type.Boolean(),
        type: Type.Literal('success')
      }),
      400: Type.Object({
        message: Type.String(),
        type: Type.Literal('info')
      }),
      402: Type.Object({
        message: Type.String(),
        type: Type.String(),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        client_secret: Type.Optional(Type.String())
      }),
      500: Type.Object({
        message: Type.String(),
        type: Type.Literal('danger')
      })
    }
  },
  modernChallengeCompleted: {
    body: Type.Object({
      id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
      challengeType: Type.Number(),
      files: Type.Optional(
        Type.Array(
          Type.Object({
            contents: Type.String(),
            key: Type.String(),
            ext: Type.String(),
            name: Type.String(),
            history: Type.Array(Type.String())
          })
        )
      )
    }),
    response: {
      200: Type.Object({
        completedDate: Type.Number(),
        points: Type.Number(),
        alreadyCompleted: Type.Boolean(),
        savedChallenges: Type.Array(
          Type.Intersect([
            saveChallengeBody,
            Type.Object({ lastSavedDate: Type.Number() })
          ])
        )
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal(
          'That does not appear to be a valid challenge submission.'
        )
      }),
      500: Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        )
      })
    }
  },
  msTrophyChallengeCompleted: {
    body: Type.Object({
      id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 })
    }),
    response: {
      200: Type.Object({
        completedDate: Type.Number(),
        points: Type.Number(),
        alreadyCompleted: Type.Boolean()
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-2')
      }),
      403: Type.Union([
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.trophy.err-1')
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.trophy.err-3')
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.trophy.err-4'),
          variables: Type.Object({
            msUsername: Type.String()
          })
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.trophy.err-6')
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.profile.err'),
          variables: Type.Object({
            msUsername: Type.String()
          })
        })
      ]),
      500: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.trophy.err-5')
      })
    }
  },
  saveChallenge: {
    body: saveChallengeBody,
    response: {
      200: Type.Object({
        savedChallenges: Type.Array(
          Type.Intersect([
            saveChallengeBody,
            Type.Object({ lastSavedDate: Type.Number() })
          ])
        )
      }),
      403: Type.Literal('That challenge type is not saveable.'),
      500: Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal(
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        )
      })
    }
  },
  exam: {
    params: Type.Object({
      id: Type.String({
        format: 'objectid',
        maxLength: 24,
        minLength: 24
      })
    }),
    response: {
      200: Type.Object({
        generatedExam: Type.Array(
          Type.Object({
            id: Type.String(),
            question: Type.String(),
            answers: Type.Array(
              Type.Object({
                id: Type.String(),
                answer: Type.String()
              })
            )
          })
        )
      }),
      // TODO: Standardize error responses - e.g. { type, message }
      400: Type.Object({
        error: Type.String()
      }),
      403: Type.Object({
        error: Type.String()
      }),
      500: Type.Object({
        error: Type.String()
      })
    }
  },
  postMsUsername: {
    body: Type.Object({
      msTranscriptUrl: Type.String({ maxLength: 1000 })
    }),
    response: {
      200: Type.Object({
        msUsername: Type.String()
      }),
      400: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-1')
      }),
      404: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-2')
      }),
      403: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.ms.transcript.link-err-4')
      }),
      500: Type.Union([
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.transcript.link-err-6')
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.ms.transcript.link-err-3')
        })
      ])
    }
  },
  submitSurvey: {
    body: Type.Object({
      surveyResults: Type.Object({
        title: surveyTitles,
        responses: Type.Array(
          Type.Object({
            question: Type.String(),
            response: Type.String()
          })
        )
      })
    }),
    response: {
      200: Type.Object({
        type: Type.Literal('success'),
        message: Type.Literal('flash.survey.success')
      }),
      400: Type.Union([
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.survey.err-1')
        }),
        Type.Object({
          type: Type.Literal('error'),
          message: Type.Literal('flash.survey.err-2')
        })
      ]),
      500: Type.Object({
        type: Type.Literal('error'),
        message: Type.Literal('flash.survey.err-3')
      })
    }
  },
  // /certificate/
  certificateVerify: {
    // TODO(POST_MVP): Remove partial validation from route for schema validation
    body: Type.Object({
      certSlug: Type.String({ maxLength: 1024 })
    }),
    response: {
      200: Type.Object({
        response: Type.Union([
          Type.Object({
            type: Type.Literal('info'),
            message: Type.Union([Type.Literal('flash.already-claimed')]),
            variables: Type.Object({
              name: Type.String()
            })
          }),
          Type.Object({
            type: Type.Literal('success'),
            message: Type.Literal('flash.cert-claim-success'),
            variables: Type.Object({
              username: Type.String(),
              name: Type.String()
            })
          })
        ]),
        isCertMap,
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
        )
      }),
      400: Type.Union([
        Type.Object({
          response: Type.Object({
            type: Type.Literal('info'),
            message: Type.Union([Type.Literal('flash.incomplete-steps')]),
            variables: Type.Object({
              name: Type.String()
            })
          }),
          isCertMap,
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
          )
        }),
        Type.Object({
          response: Type.Object({
            type: Type.Literal('danger'),
            message: Type.Union([Type.Literal('flash.wrong-name')]),
            variables: Type.Object({
              name: Type.String()
            })
          })
        }),
        Type.Object({
          response: Type.Object({
            type: Type.Literal('info'),
            message: Type.Union([Type.Literal('flash.name-needed')])
          }),
          isCertMap,
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
          )
        })
      ]),
      500: Type.Object({
        type: Type.Literal('danger'),
        message: Type.Literal('flash.went-wrong')
      })
    }
  },
  examChallengeCompleted: {
    body: Type.Object({
      id: Type.String({ format: 'objectid', maxLength: 24, minLength: 24 }),
      challengeType: Type.Number(),
      userCompletedExam: Type.Object({
        examTimeInSeconds: Type.Number(),
        userExamQuestions: Type.Array(
          Type.Object({
            id: Type.String(),
            question: Type.String(),
            answer: Type.Object({
              id: Type.String(),
              answer: Type.String()
            })
          }),
          { minItems: 1 }
        )
      })
    }),
    response: {
      200: Type.Object({
        completedDate: Type.Number(),
        points: Type.Number(),
        alreadyCompleted: Type.Boolean(),
        examResults
      }),
      400: Type.Object({
        error: Type.String()
      }),
      403: Type.Object({
        error: Type.String()
      }),
      500: Type.Object({
        error: Type.String()
      })
    }
  }
};
