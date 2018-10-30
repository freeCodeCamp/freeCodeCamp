"use strict";

module.exports = exports = unpublish;

exports.usage = 'Unpublishes pre-built binary (requires aws-sdk)';

var fs = require('fs');
var log = require('npmlog');
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var s3_setup = require('./util/s3_setup.js');
var url = require('url');
var config = require('rc')("node_pre_gyp",{acl:"public-read"});

function unpublish(gyp, argv, callback) {
    var AWS = require("aws-sdk");
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    s3_setup.detect(opts.hosted_path,config);
    AWS.config.update(config);
    var key_name = url.resolve(config.prefix,opts.package_name);
    var s3 =  new AWS.S3();
    var s3_opts = {  Bucket: config.bucket,
                     Key: key_name
                  };
    s3.headObject(s3_opts, function(err, meta) {
        if (err && err.code == 'NotFound') {
            console.log('['+package_json.name+'] Not found: https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + s3_opts.Key);
            return callback();
        } else if(err) {
            return callback(err);
        } else {
            log.info('unpublish', JSON.stringify(meta));
            s3.deleteObject(s3_opts, function(err, resp) {
                if (err) return callback(err);
                log.info(JSON.stringify(resp));
                console.log('['+package_json.name+'] Success: removed https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + s3_opts.Key);
                return callback();
            });
        }
    });
}
