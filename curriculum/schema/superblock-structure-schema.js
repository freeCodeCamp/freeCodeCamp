const Joi = require('joi');

const slugRE = new RegExp('^[a-z0-9-]+$');

const schema = Joi.object()
  .keys({
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
                Joi.object().keys({
                  dashedName: Joi.string().regex(slugRE).required()
                })
              )
            })
          )
          .required()
      })
    )
  })
  // this makes sure there is no unknown key in the object
  .unknown(false);

exports.assertSuperBlockStructure = structure => Joi.assert(structure, schema);
