const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  block: Joi.string(),
  blockId: Joi.objectId(),
  challengeSeed: Joi.array().items(
    Joi.string().allow('')
  ),
  challengeType: Joi.number().min(0).max(9).required(),
  checksum: Joi.number(),
  dashedName: Joi.string(),
  description: Joi.array().items(

    // classic/modern challenges
    Joi.string().allow(''),

    // step challenges
    Joi.array().items(
      Joi.string().allow('')
    ).length(4),

    // quiz challenges
    Joi.object().keys({
      subtitle: Joi.string(),
      question: Joi.string(),
      choices: Joi.array(),
      answer: Joi.number(),
      explanation: Joi.string()
    })

  ).required(),
  fileName: Joi.string(),
  files: Joi.object().pattern(
    /(jsx?|html|css|sass)$/,
    Joi.object().keys({
      key: Joi.string(),
      ext: Joi.string(),
      name: Joi.string(),
      head: Joi.string().allow(''),
      tail: Joi.string().allow(''),
      contents: Joi.string()
    })
  ),
  guideUrl: Joi.string().uri({ scheme: 'https' }),
  head: Joi.array().items(
    Joi.string().allow('')
  ),
  helpRoom: Joi.string(),
  id: Joi.objectId().required(),
  isBeta: Joi.bool(),
  isComingSoon: Joi.bool(),
  isLocked: Joi.bool(),
  isPrivate: Joi.bool(),
  isRequired: Joi.bool(),
  name: Joi.string(),
  order: Joi.number(),
  required: Joi.array().items(
    Joi.object().keys({
      link: Joi.string(),
      raw: Joi.bool(),
      src: Joi.string(),
      crossDomain: Joi.bool()
    })
  ),
  solutions: Joi.array().items(
    Joi.string().optional()
  ),
  superBlock: Joi.string(),
  superOrder: Joi.number(),
  suborder: Joi.number(),
  tail: Joi.array().items(
    Joi.string().allow('')
  ),
  tests: Joi.array().items(
    Joi.string().min(2),
    Joi.object().keys({
      text: Joi.string().required(),
      testString: Joi.string().allow('').required()
    }),
    Joi.object().keys({
      id: Joi.objectId().required(),
      title: Joi.string().required()
    })
  ),
  template: Joi.string(),
  time: Joi.string().allow(''),
  title: Joi.string().required()
});

exports.validateChallenge = function validateChallenge(challenge) {
  return Joi.validate(challenge, schema);
};
