const Joi = require('joi');
const { SuperBlocks } = require('../../../shared/config/curriculum');

const slugRE = new RegExp('^[a-z0-9-]+$');

const blockSchema = Joi.object().keys({
  intro: Joi.array().min(1),
  meta: Joi.object({}).keys({
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
    blockLayout: Joi.string(),
    blockType: Joi.valid(
      'lecture',
      'workshop',
      'lab',
      'review',
      'quiz',
      'exam'
    ),
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

const blockBasedCurriculumSchema = Joi.object().pattern(
  Joi.string(),
  Joi.object().keys({
    intro: Joi.array(),
    blocks: Joi.array().items(blockSchema)
  })
);

const chapterBasedCurriculumSchema = Joi.object().pattern(
  Joi.string(),
  Joi.object().keys({
    intro: Joi.array(),
    chapters: Joi.array().items(
      Joi.object().keys({
        dashedName: Joi.string().regex(slugRE).required(),
        comingSoon: Joi.boolean().optional(),
        chapterType: Joi.valid('exam').optional(),
        modules: Joi.array()
          .items(
            Joi.object().keys({
              moduleType: Joi.valid('review', 'exam').optional(),
              comingSoon: Joi.boolean().optional(),
              dashedName: Joi.string().regex(slugRE).required(),
              blocks: Joi.array().items(
                Joi.object()
                  .keys({
                    dashedName: Joi.string().regex(slugRE).required()
                  })
                  .concat(blockSchema)
              )
            })
          )
          .required()
      })
    )
  })
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

exports.superblockSchemaValidator = () => superblock => {
  const superBlockName = Object.keys(superblock)[0];

  if (superBlockName === SuperBlocks.FullStackDeveloper) {
    return chapterBasedCurriculumSchema.validate(superblock);
  }

  return blockBasedCurriculumSchema.validate(superblock);
};

exports.availableSuperBlocksValidator = () => data =>
  availableSuperBlocksSchema.validate(data);
