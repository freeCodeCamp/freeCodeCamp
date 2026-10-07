'use strict';
var $ = require('../internals/export');
var NATIVE_RAW_JSON = require('../internals/native-raw-json');
var isRawJSON = require('../internals/is-raw-json');

// `JSON.isRawJSON` method
// https://tc39.es/proposal-json-parse-with-source/#sec-json.israwjson
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: !NATIVE_RAW_JSON }, {
  isRawJSON: isRawJSON
});
