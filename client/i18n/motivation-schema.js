/* eslint-disable camelcase */
/* This is used for testing to make sure the motivation.json files
 * in each language have the correct structure
 */
const {
  arrayOfItems,
  strictObject,
  stringType
} = require('jest-json-schema-extended');

const motivationSchema = strictObject({
  compliments: arrayOfItems(stringType, { minItems: 1 }),
  motivationalQuotes: arrayOfItems(
    strictObject({
      quote: stringType,
      author: stringType
    }),
    { minItems: 1 }
  )
});

exports.motivationSchema = motivationSchema;
