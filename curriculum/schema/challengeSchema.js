const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const { challengeTypes } = require('../../client/utils/challenge-types');

const slugRE = new RegExp('^[a-z0-9-]+$');
const slugWithSlashRE = new RegExp('^[a-z0-9-/]+$');

const fileJoi = Joi.object().keys({
  fileKey: Joi.string(),
  ext: Joi.string(),
  name: Joi.string(),
  editableRegionBoundaries: [Joi.array().items(Joi.number())],
  path: Joi.string(),
  error: Joi.valid(null),
  head: Joi.string().allow(''),
  tail: Joi.string().allow(''),
  seed: Joi.string().allow(''),
  contents: Joi.string().allow(''),
  id: Joi.string().allow(''),
  history: Joi.array().items(Joi.string().allow(''))
});

const schema = Joi.object()
  .keys({
    block: Joi.string().regex(slugRE).required(),
    blockId: Joi.objectId(),
    challengeOrder: Joi.number(),
    removeComments: Joi.bool(),
    certification: Joi.string().regex(slugRE),
    challengeType: Joi.number().min(0).max(15).required(),
    checksum: Joi.number(),
    // __commentCounts is only used to test the comment replacement
    __commentCounts: Joi.object(),
    // TODO: require this only for normal challenges, not certs
    dashedName: Joi.string().regex(slugRE),
    description: Joi.when('challengeType', {
      is: [challengeTypes.step, challengeTypes.video],
      then: Joi.string().allow(''),
      otherwise: Joi.string().required()
    }),
    challengeFiles: Joi.array().items(fileJoi),
    guideUrl: Joi.string().uri({ scheme: 'https' }),
    hasEditableBoundaries: Joi.boolean(),
    helpCategory: Joi.valid(
      'JavaScript',
      'HTML-CSS',
      'Python',
      'Backend Development'
    ),
    videoUrl: Joi.string().allow(''),
    forumTopicId: Joi.number(),
    id: Joi.objectId().required(),
    instructions: Joi.string().allow(''),
    isComingSoon: Joi.bool(),
    isLocked: Joi.bool(),
    isPrivate: Joi.bool(),
    notes: Joi.string().allow(''),
    order: Joi.number(),
    // video challenges only:
    videoId: Joi.when('challengeType', {
      is: challengeTypes.video,
      then: Joi.string().required()
    }),
    videoLocaleIds: Joi.when('challengeType', {
      is: challengeTypes.video,
      then: Joi.object().keys({
        espanol: Joi.string(),
        italian: Joi.string(),
        portuguese: Joi.string()
      })
    }),
    bilibiliIds: Joi.when('challengeType', {
      is: challengeTypes.video,
      then: Joi.object().keys({
        aid: Joi.number().required(),
        bvid: Joi.string().required(),
        cid: Joi.number().required()
      })
    }),
    question: Joi.object().keys({
      text: Joi.string().required(),
      answers: Joi.array().items(Joi.string()).required(),
      solution: Joi.number().required()
    }),
    required: Joi.array().items(
      Joi.object().keys({
        link: Joi.string(),
        raw: Joi.bool(),
        src: Joi.string(),
        crossDomain: Joi.bool()
      })
    ),
    assignments: Joi.array().items(Joi.string()),
    solutions: Joi.array().items(Joi.array().items(fileJoi).min(1)),
    superBlock: Joi.string().regex(slugWithSlashRE),
    superOrder: Joi.number(),
    suborder: Joi.number(),
    tests: Joi.array().items(
      // public challenges
      Joi.object().keys({
        id: Joi.string().allow(''),
        text: Joi.string().required(),
        testString: Joi.string().allow('').required()
      }),
      // our tests used in certification verification
      Joi.object().keys({
        id: Joi.string().required(),
        title: Joi.string().required()
      })
    ),
    template: Joi.string().allow(''),
    time: Joi.string().allow(''),
    title: Joi.string().required(),
    translationPending: Joi.bool().required(),
    url: Joi.when('challengeType', {
      is: [challengeTypes.codeAllyPractice, challengeTypes.codeAllyCert],
      then: Joi.string().required()
    }),
    usesMultifileEditor: Joi.boolean()
  })
  .xor('helpCategory', 'isPrivate');

exports.challengeSchemaValidator = () => {
  return challenge => schema.validate(challenge);
};
