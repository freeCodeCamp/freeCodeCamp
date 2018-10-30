"use strict";

module.exports = exports = publish;

exports.usage = 'Publishes pre-built binary (requires aws-sdk)';

var fs = require('fs');
var path = require('path');
var log = require('npmlog');
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var s3_setup = require('./util/s3_setup.js');
var existsAsync = fs.exists || path.exists;
var url = require('url');
var config = require('rc')("node_pre_gyp",{acl:"public-read"});

function publish(gyp, argv, callback) {
    var AWS = require("aws-sdk");
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    var tarball = opts.staged_tarball;
    existsAsync(tarball,function(found) {
        if (!found) {
            return callback(new Error("Cannot publish because " + tarball + " missing: run `node-pre-gyp package` first"));
        }
        log.info('publish', 'Detecting s3 credentials');
        s3_setup.detect(opts.hosted_path,config);
        var key_name = url.resolve(config.prefix,opts.package_name);
        log.info('publish', 'Authenticating with s3');
        AWS.config.update(config);
        var s3 =  new AWS.S3();
        var s3_opts = {  Bucket: config.bucket,
                         Key: key_name
                      };
        var remote_package = 'https://' + s3_opts.Bucket + '.s3.amazonaws.com/' + s3_opts.Key;
        log.info('publish', 'Checking for existing binary at ' + remote_package);
        s3.headObject(s3_opts, function(err, meta){
            if (meta) log.info('publish', JSON.stringify(meta));
            if (err && err.code == 'NotFound') {
                // we are safe to publish because
                // the object does not already exist
                log.info('publish', 'Preparing to put object');
                var s3_put = new AWS.S3();
                var s3_put_opts = {  ACL: config.acl,
                                     Body: fs.createReadStream(tarball),
                                     Bucket: config.bucket,
                                     Key: key_name
                                  };
                log.info('publish', 'Putting object');
                try {
                    s3_put.putObject(s3_put_opts, function(err, resp){
                        log.info('publish', 'returned from putting object');
                        if(err) {
                           log.info('publish', 's3 putObject error: "' + err + '"');
                           return callback(err);
                        }
                        if (resp) log.info('publish', 's3 putObject response: "' + JSON.stringify(resp) + '"');
                        log.info('publish', 'successfully put object');
                        console.log('['+package_json.name+'] published to ' + remote_package);
                        return callback();
                    });
              } catch (err) {
                   log.info('publish', 's3 putObject error: "' + err + '"');
                   return callback(err);
              }
            } else if (err) {
                log.info('publish', 's3 headObject error: "' + err + '"');
                return callback(err);
            } else {
                log.error('publish','Cannot publish over existing version');
                log.error('publish',"Update the 'version' field in package.json and try again");
                log.error('publish','If the previous version was published in error see:');
                log.error('publish','\t node-pre-gyp unpublish');
                return callback(new Error('Failed publishing to ' + remote_package));
            }
        });
    });
}
