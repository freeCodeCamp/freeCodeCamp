const Joi = require('joi');

const blockIntroSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  intro: Joi.array().items(Joi.string().allow('')).required()
}).unknown(true);

const superBlockIntroSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  intro: Joi.array().items(Joi.string().allow('')).required(),
  blocks: Joi.object().pattern(Joi.string(), blockIntroSchema).required()
}).unknown(true);

function createIntroSchema(expectedBlocksBySuperblock) {
  return Joi.object()
    .unknown(true)
    .custom((intros, helpers) => {
      const allErrors = [];

      for (const [superblock, blocks] of Object.entries(expectedBlocksBySuperblock)) {
        const superBlockIntro = intros[superblock];

        if (!superBlockIntro) {
          allErrors.push(`Missing superblock entry: "${superblock}"`);
          continue; // skip further checks for this superblock
        }

        const { error: sbError } = superBlockIntroSchema.validate(superBlockIntro, { abortEarly: false });
        if (sbError) {
          allErrors.push(`Invalid superblock "${superblock}": ${sbError.message}`);
        }

        for (const block of blocks) {
          const blockIntro = superBlockIntro.blocks?.[block];
          if (!blockIntro) {
            allErrors.push(`Missing block entry: "${superblock}/${block}"`);
            continue;
          }

          const { error: blockError } = blockIntroSchema.validate(blockIntro, { abortEarly: false });
          if (blockError) {
            allErrors.push(`Invalid block "${superblock}/${block}": ${blockError.message}`);
          }
        }
      }

      if (allErrors.length) {
        return helpers.error('any.custom', { message: allErrors.join('\n') });
      }

      return intros;
    }, 'intro validation')
    .messages({ 'any.custom': '{{#message}}' });
}

exports.validateIntroSchema = (intros, expectedBlocksBySuperblock) => {
  return createIntroSchema(expectedBlocksBySuperblock).validate(intros, { abortEarly: false });
};
