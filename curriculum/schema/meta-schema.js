const Joi = require('joi');

const {
  SuperBlocks,
  chapterBasedSuperBlocks
} = require('../../shared/config/curriculum');

const slugRE = new RegExp('^[a-z0-9-]+$');
const slugWithSlashRE = new RegExp('^[a-z0-9-/]+$');

const schema = Joi.object()
  .keys({
    name: Joi.string().required(),
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
      'workshop',
      'lab',
      'lecture',
      'review',
      'quiz',
      'exam'
    ).when('superBlock', {
      is: 'full-stack-developer',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    isUpcomingChange: Joi.boolean().required(),
    dashedName: Joi.string().regex(slugRE).required(),
    superBlock: Joi.string()
      .regex(slugWithSlashRE)
      .valid(...Object.values(SuperBlocks))
      .required(),
    order: Joi.number().when('superBlock', {
      is: chapterBasedSuperBlocks,
      then: Joi.forbidden(),
      otherwise: Joi.required()
    }),
    usesMultifileEditor: Joi.boolean(),
    hasEditableBoundaries: Joi.boolean(),
    disableLoopProtectTests: Joi.boolean(),
    disableLoopProtectPreview: Joi.boolean(),
    template: Joi.string(),
    required: Joi.array()
      .items(
        Joi.object().keys({
          link: Joi.string(),
          raw: Joi.bool(),
          src: Joi.string()
        })
      )
      .min(1)
      .message(
        `'required' must contain at least one item or not exist. Add an item or delete the property`
      ),
    challengeOrder: Joi.array()
      .items(
        Joi.object().keys({
          id: Joi.string().required(),
          title: Joi.string().required()
        })
      )
      .min(1)
      .required(),
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
    ).required()
  })
  // this makes sure there is no unknown key in the object
  .unknown(false);

exports.metaSchemaValidator = meta => {
  return schema.validate(meta, { abortEarly: false });
};
