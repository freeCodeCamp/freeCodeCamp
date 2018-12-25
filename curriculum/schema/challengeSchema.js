const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { LOCALE: lang = 'english' } = process.env;

let schema = Joi.object().keys({
  block: Joi.string(),
  blockId: Joi.objectId(),
  challengeOrder: Joi.number(),
  challengeType: Joi.number()
    .min(0)
    .max(9)
    .required(),
  checksum: Joi.number(),
  dashedName: Joi.string(),
  description: Joi.string().required(),
  fileName: Joi.string(),
  files: Joi.array().items(
    Joi.object().keys({
      key: Joi.string(),
      ext: Joi.string(),
      name: Joi.string(),
      head: [Joi.array().items(Joi.string().allow('')), Joi.string().allow('')],
      tail: [Joi.array().items(Joi.string().allow('')), Joi.string().allow('')],
      contents: [
        Joi.array().items(Joi.string().allow('')),
        Joi.string().allow('')
      ]
    })
  ),
  guideUrl: Joi.string().uri({ scheme: 'https' }),
  videoUrl: Joi.string().allow(''),
  helpRoom: Joi.string(),
  id: Joi.objectId().required(),
  instructions: Joi.string().required(),
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
  solutions: Joi.array().items(Joi.string().optional()),
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

if (lang !== 'english') {
  schema = schema.append({
    localeTitle: Joi.string().required()
  });
}

exports.validateChallenge = function validateChallenge(challenge) {
  return Joi.validate(challenge, schema);
};
