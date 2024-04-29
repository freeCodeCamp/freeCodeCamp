const Joi = require('joi');

const blockSchema = Joi.object({}).keys({
  desc: Joi.array().min(1),
  challenges: Joi.object({}).keys({
    name: Joi.string(),
    isUpcomingChange: Joi.bool(),
    usesMultifileEditor: Joi.bool().optional(),
    hasEditableBoundaries: Joi.bool().optional(),
    dashedName: Joi.string(),
    helpCategory: Joi.valid(
      'JavaScript',
      'HTML-CSS',
      'Python',
      'Backend Development',
      'C-Sharp',
      'English',
      'Odin',
      'Euler',
      'Rosetta'
    ),
    order: Joi.number(),
    time: Joi.string().allow(''),
    template: Joi.string().allow(''),
    required: Joi.array(),
    superBlock: Joi.string(),
    challengeOrder: Joi.array().items(
      Joi.object({}).keys({
        id: Joi.string(),
        title: Joi.string()
      })
    ),
    disableLoopProtectTests: Joi.boolean(),
    disableLoopProtectPreview: Joi.boolean(),
    superOrder: Joi.number()
  })
});

const subSchema = Joi.object({}).keys({
  intro: Joi.array(),
  blocks: Joi.object({}).pattern(Joi.string(), Joi.object().concat(blockSchema))
});

const schema = Joi.object({}).pattern(
  Joi.string(),
  Joi.object().concat(subSchema)
);

const availableSuperBlocksSchema = Joi.object({
  superblocks: Joi.array().items(
    Joi.object({
      dashedName: Joi.string().required(),
      title: Joi.string().required(),
      public: Joi.bool().required()
    })
  )
});

exports.superblockSchemaValidator = () => superblock =>
  schema.validate(superblock);

exports.availableSuperBlocksValidator = () => data =>
  availableSuperBlocksSchema.validate(data);
