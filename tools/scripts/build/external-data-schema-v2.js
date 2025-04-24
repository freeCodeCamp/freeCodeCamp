const Joi = require('joi');
const {
  chapterBasedSuperBlocks
} = require('../../../shared/config/curriculum');

const slugRE = new RegExp('^[a-z0-9-]+$');

const blockSchema = Joi.object().keys({
  intro: Joi.array().min(1),
  meta: Joi.object({}).keys({
    name: Joi.string().required(),
    isUpcomingChange: Joi.bool().required(),
    usesMultifileEditor: Joi.bool().optional(),
    hasEditableBoundaries: Joi.bool().optional(),
    dashedName: Joi.string().required(),
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
    ).required(),
    order: Joi.number().when('superBlock', {
      is: chapterBasedSuperBlocks,
      then: Joi.forbidden(),
      otherwise: Joi.required()
    }),
    template: Joi.string().allow(''),
    required: Joi.array(),
    superBlock: Joi.string().required(),
    blockLayout: Joi.valid(
      'challenge-list',
      'challenge-grid',
      'dialogue-grid',
      'link',
      'project-list',
      'legacy-challenge-list',
      'legacy-link',
      'legacy-challenge-grid'
    ).required(),
    blockType: Joi.valid(
      'lecture',
      'workshop',
      'lab',
      'review',
      'quiz',
      'exam'
    ).when('superBlock', {
      is: chapterBasedSuperBlocks,
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
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
              blocks: Joi.array().items(blockSchema)
            })
          )
          .required()
      })
    )
  })
);

const availableSuperBlocksSchema = Joi.object({
  superblocks: Joi.object().pattern(
    Joi.string(),
    Joi.array().items(
      Joi.object({
        dashedName: Joi.string().required(),
        title: Joi.string().required(),
        public: Joi.bool().required()
      })
    )
  )
});

exports.superblockSchemaValidator = () => superBlock => {
  const superBlockName = Object.keys(superBlock)[0];

  if (chapterBasedSuperBlocks.includes(superBlockName)) {
    return chapterBasedCurriculumSchema.validate(superBlock);
  }

  return blockBasedCurriculumSchema.validate(superBlock);
};

exports.availableSuperBlocksValidator = () => data =>
  availableSuperBlocksSchema.validate(data);
