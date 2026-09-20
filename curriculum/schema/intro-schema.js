const Joi = require('joi');

const blockIntroSchema = Joi.object()
  .keys({
    title: Joi.string().trim().min(1).required(),
    intro: Joi.array().items(Joi.string().allow('')).required()
  })
  .unknown(true);

const superBlockIntroSchema = Joi.object()
  .keys({
    title: Joi.string().trim().min(1).required(),
    intro: Joi.array().items(Joi.string().allow('')).required(),
    blocks: Joi.object().pattern(Joi.string(), blockIntroSchema).required()
  })
  .unknown(true);

function createIntroSchema(expectedBlocksBySuperblock) {
  return Joi.object()
    .unknown(true)
    .custom((intros, helpers) => {
      for (const [superblock, blocks] of Object.entries(
        expectedBlocksBySuperblock
      )) {
        const superBlockIntro = intros[superblock];

        if (!superBlockIntro) {
          return helpers.error('any.custom', {
            message: `Missing intro.json entry for superblock "${superblock}"`
          });
        }

        const { error: superBlockError } =
          superBlockIntroSchema.validate(superBlockIntro);
        if (superBlockError) {
          return helpers.error('any.custom', {
            message: `Invalid intro.json shape for superblock "${superblock}": ${superBlockError.message}`
          });
        }

        for (const block of blocks) {
          const blockIntro = superBlockIntro.blocks?.[block];
          if (!blockIntro) {
            return helpers.error('any.custom', {
              message: `Missing intro.json block title entry for "${superblock}/${block}"`
            });
          }

          const { error: blockError } = blockIntroSchema.validate(blockIntro);
          if (blockError) {
            return helpers.error('any.custom', {
              message: `Invalid intro.json block entry for "${superblock}/${block}": ${blockError.message}`
            });
          }
        }
      }

      return intros;
    }, 'intro block coverage validation')
    .messages({
      'any.custom': '{{#message}}'
    });
}

exports.validateIntroSchema = (intros, expectedBlocksBySuperblock) => {
  return createIntroSchema(expectedBlocksBySuperblock).validate(intros, {
    abortEarly: false
  });
};
