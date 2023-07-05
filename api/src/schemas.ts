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
