const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const { challengeTypes } = require('../../client/utils/challengeTypes');

const fileJoi = Joi.object().keys({
  key: Joi.string(),
  ext: Joi.string(),
  name: Joi.string(),
  editableRegionBoundaries: [Joi.array().items(Joi.number())],
  path: Joi.string(),
  error: Joi.empty(),
  head: Joi.string().allow(''),
  tail: Joi.string().allow(''),
  seed: Joi.string().allow(''),
  contents: Joi.string().allow(''),
  history: [Joi.array().items(Joi.string().allow('')), Joi.string().allow('')]
});

const schema = Joi.object().keys({
  block: Joi.string(),
  blockId: Joi.objectId(),
  challengeOrder: Joi.number(),
  challengeType: Joi.number()
    .min(0)
    .max(11)
    .required(),
  checksum: Joi.number(),
  dashedName: Joi.string(),
  description: Joi.when('challengeType', {
    is: Joi.only([challengeTypes.step, challengeTypes.video]),
    then: Joi.string().allow(''),
    otherwise: Joi.string().required()
  }),
  fileName: Joi.string(),
  files: Joi.object().keys({
    indexcss: fileJoi,
    indexhtml: fileJoi,
    indexjs: fileJoi,
    indexjsx: fileJoi
  }),
  guideUrl: Joi.string().uri({ scheme: 'https' }),
  videoUrl: Joi.string().allow(''),
  forumTopicId: Joi.number(),
  helpRoom: Joi.string(),
  id: Joi.objectId().required(),
  instructions: Joi.string().allow(''),
  isComingSoon: Joi.bool(),
  isLocked: Joi.bool(),
  isPrivate: Joi.bool(),
  name: Joi.string(),
  order: Joi.number(),
  // video challenges only:
  videoId: Joi.when('challengeType', {
    is: challengeTypes.video,
    then: Joi.string().required()
  }),
  question: Joi.object().keys({
    text: Joi.string().required(),
    answers: Joi.array()
      .items(Joi.string())
      .required(),
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
  solutions: Joi.array().items(
    Joi.object().keys({
      indexcss: fileJoi,
      indexhtml: fileJoi,
      indexjs: fileJoi,
      indexjsx: fileJoi,
      indexpy: fileJoi
    })
  ),
  superBlock: Joi.string(),
  superOrder: Joi.number(),
  suborder: Joi.number(),
  tests: Joi.array().items(
    // public challenges
    Joi.object().keys({
      text: Joi.string().required(),
      testString: Joi.string()
        .allow('')
        .required()
    }),
    // our tests used in certification verification
    Joi.object().keys({
      id: Joi.string().required(),
      title: Joi.string().required()
    })
  ),
  template: Joi.string().allow(''),
  time: Joi.string().allow(''),
  title: Joi.string().required()
});

exports.challengeSchemaValidator = () => {
  return challenge => Joi.validate(challenge, schema);
};
