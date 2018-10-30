'use strict';

//all requires must be explicit because browserify won't work with dynamic requires
module.exports = {
  '$ref': require('../dotjs/ref'),
  allOf: require('../dotjs/allOf'),
  anyOf: require('../dotjs/anyOf'),
  const: require('../dotjs/const'),
  contains: require('../dotjs/contains'),
  dependencies: require('../dotjs/dependencies'),
  'enum': require('../dotjs/enum'),
  format: require('../dotjs/format'),
  items: require('../dotjs/items'),
  maximum: require('../dotjs/_limit'),
  minimum: require('../dotjs/_limit'),
  maxItems: require('../dotjs/_limitItems'),
  minItems: require('../dotjs/_limitItems'),
  maxLength: require('../dotjs/_limitLength'),
  minLength: require('../dotjs/_limitLength'),
  maxProperties: require('../dotjs/_limitProperties'),
  minProperties: require('../dotjs/_limitProperties'),
  multipleOf: require('../dotjs/multipleOf'),
  not: require('../dotjs/not'),
  oneOf: require('../dotjs/oneOf'),
  pattern: require('../dotjs/pattern'),
  properties: require('../dotjs/properties'),
  propertyNames: require('../dotjs/propertyNames'),
  required: require('../dotjs/required'),
  uniqueItems: require('../dotjs/uniqueItems'),
  validate: require('../dotjs/validate')
};
