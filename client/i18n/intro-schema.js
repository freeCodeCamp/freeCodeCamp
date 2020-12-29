/* eslint-disable camelcase */
/* This is used for testing to make sure the intro.json files
 * in each language have the correct structure
 */
const { strictObject, stringType } = require('jest-json-schema-extended');

const introSchema = strictObject({
  'responsive-web-design': strictObject({
    superblock: stringType
  })
});

exports.introSchema = introSchema;
