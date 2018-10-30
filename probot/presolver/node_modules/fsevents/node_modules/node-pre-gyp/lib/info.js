"use strict";

module.exports = exports = unpublish;

exports.usage = 'Lists all published binaries (requires aws-sdk)';

var fs = require('fs');
var log = require('npmlog');
var versioning = require('./util/versioning.js');
var s3_setup = require('./util/s3_setup.js');
var config = require('rc')("node_pre_gyp",{acl:"public-read"});

function unpublish(gyp, argv, callback) {
    var AWS = require("aws-sdk");
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var opts = versioning.evaluate(package_json, gyp.opts);
    s3_setup.detect(opts.hosted_path,config);
    AWS.config.update(config);
    var s3 =  new AWS.S3();
    var s3_opts = {  Bucket: config.bucket,
                     Prefix: config.prefix
                  };
    s3.listObjects(s3_opts, function(err, meta){
        if (err && err.code == 'NotFound') {
            return callback(new Error('['+package_json.name+'] Not found: https://' + s3_opts.Bucket + '.s3.amazonaws.com/'+config.prefix));
        } else if(err) {
            return callback(err);
        } else {
            log.verbose(JSON.stringify(meta,null,1));
            if (meta && meta.Contents) {
                meta.Contents.forEach(function(obj) {
                    console.log(obj.Key);
                });
            } else {
                console.error('['+package_json.name+'] No objects found at https://' + s3_opts.Bucket + '.s3.amazonaws.com/'+config.prefix );
            }
            return callback();
        }
    });
}
