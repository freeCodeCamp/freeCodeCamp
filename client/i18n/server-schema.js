/* eslint-disable camelcase */
/* This is used for testing to make sure the server.json files
 * have the same exact keys in each language
 */
const { strictObject, stringType } = require('jest-json-schema-extended');

const serverSchema = strictObject({
  'msg-1': stringType,
  'msg-2': stringType,
  'msg-3': stringType,
  'msg-4': stringType,
  'msg-5': stringType,
  'msg-6': stringType,
  'msg-7': stringType,
  'msg-8': stringType,
  'msg-9': stringType,
  'msg-10': stringType,
  'msg-11': stringType,
  'msg=12': stringType,
  'msg-13': stringType,
  'msg-14': stringType,
  'msg-15': stringType,
  'msg-16': stringType,
  'msg-17': stringType,
  'msg-18': stringType,
  'msg-19': stringType,
  'msg-20': stringType,
  'msg-21': stringType,
  'msg-22': stringType,
  'msg-23': stringType,
  'msg-24': stringType,
  'msg-25': stringType,
  'msg-26': stringType,
  'msg-27': stringType,
  'msg-28': stringType,
  'msg-29': stringType,
  'msg-30': stringType,
  'msg-31': stringType,
  'msg-32': stringType,
  'msg-33': stringType,
  'msg-34': stringType,
  'msg-35': stringType,
  'msg-36': stringType,
  'msg-37': stringType,
  settings: strictObject({
    username: strictObject({
      invalid: stringType,
      'too-short': stringType,
      reserved: stringType
    })
  })
});

exports.serverSchema = serverSchema;
