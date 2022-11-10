import Joi from 'joi';

const schema = Joi.object()
  .min(60)
  .max(60)
  .pattern(/article\d+title/, [Joi.string().required()])
  .pattern(/article\d+link/, [
    Joi.string().uri({ scheme: 'https' }).required()
  ]);

export const trendingSchemaValidator = trendingObj => {
  return schema.validate(trendingObj);
};
