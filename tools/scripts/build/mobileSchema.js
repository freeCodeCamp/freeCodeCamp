const Joi = require('Joi');

const challengeSchema = Joi.object({
  name: Joi.string(),
  isUpcomingChange: Joi.bool(),
  dashedName: Joi.string(),
  order: Joi.number(),
  template: Joi.string().allow(''),
  required: Joi.array(),
  superBlock: Joi.string(),
  challengeOrder: Joi.array().items(Joi.array().min(1))
});

const blockSchema = Joi.object({
  desc: Joi.array().min(1),
  challenges: Joi.object({}).pattern(/^/, Joi.object().concat(challengeSchema))
});

const subSchema = Joi.object({
  blocks: Joi.object({}).pattern(/^/, Joi.object().concat(blockSchema))
});

const schema = Joi.object({}).pattern(/^/, Joi.object().concat(subSchema));

exports.mobileSchemaValidator = () => {
  return superblock => schema.validate(superblock);
};
