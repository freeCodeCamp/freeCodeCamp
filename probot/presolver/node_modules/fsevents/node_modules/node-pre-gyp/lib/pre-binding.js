"use strict";

var versioning = require('../lib/util/versioning.js');
var napi = require('../lib/util/napi.js');
var existsSync = require('fs').existsSync || require('path').existsSync;
var path = require('path');

module.exports = exports;

exports.usage = 'Finds the require path for the node-pre-gyp installed module';

exports.validate = function(package_json) {
    versioning.validate_config(package_json);
};

exports.find = function(package_json_path,opts) {
   if (!existsSync(package_json_path)) {
        throw new Error("package.json does not exist at " + package_json_path);
   }
   var package_json = require(package_json_path);
   versioning.validate_config(package_json);
   var napi_build_version;
   if (napi.get_napi_build_versions (package_json)) {
       napi_build_version = napi.get_best_napi_build_version(package_json);
   }
   opts = opts || {};
   if (!opts.module_root) opts.module_root = path.dirname(package_json_path);
   var meta = versioning.evaluate(package_json,opts,napi_build_version);
   return meta.module;
};
