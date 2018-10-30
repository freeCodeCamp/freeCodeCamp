'use strict';

var KEYWORDS = require('./keywords');

module.exports = defineKeywords;


/**
 * Defines one or several keywords in ajv instance
 * @param  {Ajv} ajv validator instance
 * @param  {String|Array<String>|undefined} keyword keyword(s) to define
 * @return {Ajv} ajv instance (for chaining)
 */
function defineKeywords(ajv, keyword) {
  if (Array.isArray(keyword)) {
    for (var i=0; i<keyword.length; i++)
      get(keyword[i])(ajv);
    return ajv;
  }
  if (keyword) {
    get(keyword)(ajv);
    return ajv;
  }
  for (keyword in KEYWORDS) get(keyword)(ajv);
  return ajv;
}


defineKeywords.get = get;

function get(keyword) {
  var defFunc = KEYWORDS[keyword];
  if (!defFunc) throw new Error('Unknown keyword ' + keyword);
  return defFunc;
}
