const Joi = require('Joi');

const blockSchema = Joi.object({}).keys({
  desc: Joi.array().min(1),
  challenges: Joi.object({}).keys({
    name: Joi.string(),
    isUpcomingChange: Joi.bool(),
    usesMultifileEditor: Joi.bool().optional(),
    hasEditableBoundaries: Joi.bool().optional(),
    isBeta: Joi.bool().optional(),
    dashedName: Joi.string(),
    order: Joi.number(),
    time: Joi.string().allow(''),
    template: Joi.string().allow(''),
    required: Joi.array(),
    superBlock: Joi.string(),
    challengeOrder: Joi.array().items(Joi.array().min(1))
  })
});

const subSchema = Joi.object({}).keys({
  blocks: Joi.object({}).pattern(Joi.string(), Joi.object().concat(blockSchema))
});

const schema = Joi.object({}).pattern(
  Joi.string(),
  Joi.object().concat(subSchema)
);

exports.mobileSchemaValidator = () => {
  return superblock => schema.validate(superblock);
};
