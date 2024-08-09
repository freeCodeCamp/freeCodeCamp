const Joi = require('joi');

const slugRE = new RegExp('^[a-z0-9-]+$');
const slugWithSlashRE = new RegExp('^[a-z0-9-/]+$');

const schema = Joi.object()
  .keys({
    name: Joi.string().required(),
    blockType: Joi.valid('workshop', 'lab', 'lecture', 'quiz', 'exam'),
    isUpcomingChange: Joi.boolean().required(),
    dashedName: Joi.string().regex(slugRE).required(),
    superBlock: Joi.string().regex(slugWithSlashRE).required(),
    order: Joi.number().required(),
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
  return schema.validate(meta);
};
