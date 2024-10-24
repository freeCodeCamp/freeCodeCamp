const Joi = require('joi');

const fileSchema = Joi.object().keys({
  fileKey: Joi.string(),
  ext: Joi.string(),
  name: Joi.string(),
  editableRegionBoundaries: Joi.array().items(Joi.number()),
  path: Joi.string(),
  error: Joi.valid(null),
  head: Joi.string().allow(''),
  tail: Joi.string().allow(''),
  seed: Joi.string().allow(''),
  contents: Joi.string().allow(''),
  id: Joi.string().allow(''),
  history: Joi.array().items(Joi.string().allow(''))
});

module.exports = fileSchema;


 const Joi = require('joi');

const prerequisitesSchema = Joi.object().keys({
  id: Joi.objectId().required(),
  title: Joi.string().required()
});

module.exports = prerequisitesSchema;

const Joi = require('joi');

const positionSchema = Joi.object().keys({
  x: Joi.number().required().strict(),
  y: Joi.number().required().strict(),
  z: Joi.number().required().strict()
});

module.exports = positionSchema;

const Joi = require('joi');
const { availableCharacters } = require('./scene-assets');
const positionSchema = require('./positionSchema');

const setupCharacterSchema = Joi.object().keys({
  character: Joi.string()
    .valid(...availableCharacters)
    .required(),
  position: positionSchema.required(),
  opacity: Joi.number().strict()
});

module.exports = setupCharacterSchema;

const Joi = require('joi');
const { availableAudios } = require('./scene-assets');

const setupAudioSchema = Joi.object().keys({
  filename: Joi.string()
    .valid(...availableAudios)
    .required(),
  startTime: Joi.number().required().strict(),
  startTimestamp: Joi.number().strict(),
  finishTimestamp: Joi.number().strict()
});

module.exports = setupAudioSchema;

const Joi = require('joi');
const setupCharacterSchema = require('./setupCharacterSchema');
const setupAudioSchema = require('./setupAudioSchema');
const { availableBackgrounds } = require('./scene-assets');

const setupSchema = Joi.object().keys({
  background: Joi.string()
    .valid(...availableBackgrounds)
    .required(),
  characters: Joi.array().items(setupCharacterSchema).min(1).required(),
  audio: setupAudioSchema.required(),
  alwaysShowDialogue: Joi.boolean()
});

module.exports = setupSchema;

const Joi = require('joi');
const fileSchema = require('./fileSchema');
const prerequisitesSchema = require('./prerequisitesSchema');
const setupSchema = require('./setupSchema');
const { challengeTypes, SuperBlocks } = require('../../shared/config/challenge-types');

const slugRE = new RegExp('^[a-z0-9-]+$');
const slugWithSlashRE = new RegExp('^[a-z0-9-/]+$');

const schema = Joi.object().keys({
  block: Joi.string().regex(slugRE).required(),
  blockId: Joi.objectId(),
  blockType: Joi.when('superBlock', {
    is: [SuperBlocks.FrontEndDevelopment],
    then: Joi.valid('workshop', 'lab', 'lecture', 'review', 'quiz', 'exam').required(),
    otherwise: Joi.valid(null)
  }),
  blockLayout: Joi.when('superBlock', {
    is: [SuperBlocks.FrontEndDevelopment],
    then: Joi.valid('challenge-list', 'challenge-grid', 'link', 'project-list', 'legacy-challenge-list', 'legacy-link').required()
  }),
  challengeOrder: Joi.number(),
  certification: Joi.string().regex(slugWithSlashRE),
  challengeType: Joi.number().min(0).max(24).required(),
  challengeFiles: Joi.array().items(fileSchema),
  prerequisites: Joi.when('challengeType', {
    is: [challengeTypes.exam],
    then: Joi.array().items(prerequisitesSchema)
  }),
  setup: setupSchema.required(),
  // Additional fields can be added here as needed
});

exports.validateChallenge = (challenge) => {
  return schema.validate(challenge);
};
