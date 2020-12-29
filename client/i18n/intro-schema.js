/* eslint-disable camelcase */
/* This is used for testing to make sure the intro.json files
 * in each language have the correct structure
 */
const {
  arrayOfItems,
  strictObject,
  stringType
} = require('jest-json-schema-extended');

const introSchema = strictObject({
  'responsive-web-design': strictObject({
    'superblock-intro': arrayOfItems(stringType, { minItems: 1 })
  }),
  'javascript-algorithms-and-data-structures': strictObject({
    'superblock-intro': arrayOfItems(stringType, { minItems: 1 })
  })
});

exports.introSchema = introSchema;
