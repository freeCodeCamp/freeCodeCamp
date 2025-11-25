import Joi from 'joi';
import { chapterBasedSuperBlocks } from '../../../shared-dist/config/curriculum';

const blockSchema = Joi.object({}).keys({
  desc: Joi.array().min(1),
  challenges: Joi.object({})
    .keys({
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
      order: Joi.number().required(),
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
        'exam',
        'warm-up',
        'learn',
        'practice'
      ).when('superBlock', {
        is: chapterBasedSuperBlocks,
        then: Joi.required(),
        otherwise: Joi.optional()
      }),
      challengeOrder: Joi.array()
        .items(
          Joi.object({}).keys({
            id: Joi.string(),
            title: Joi.string()
          })
        )
        .min(1)
        .required(),
      disableLoopProtectTests: Joi.boolean(),
      disableLoopProtectPreview: Joi.boolean(),
      superOrder: Joi.number()
    })
    .required()
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

export const superblockSchemaValidator = () => (superblock: unknown) =>
  schema.validate(superblock);

export const availableSuperBlocksValidator = () => (data: unknown) =>
  availableSuperBlocksSchema.validate(data);
