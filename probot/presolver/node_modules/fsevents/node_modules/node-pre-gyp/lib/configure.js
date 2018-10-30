"use strict";

module.exports = exports = configure;

exports.usage = 'Attempts to configure node-gyp or nw-gyp build';

var napi = require('./util/napi.js');
var compile = require('./util/compile.js');
var handle_gyp_opts = require('./util/handle_gyp_opts.js');

function configure(gyp, argv, callback) {
    handle_gyp_opts(gyp,argv,function(err,result) {
        var final_args = result.gyp.concat(result.pre);
        // pull select node-gyp configure options out of the npm environ
        var known_gyp_args = ['dist-url','python','nodedir','msvs_version'];
        known_gyp_args.forEach(function(key) {
            var val = gyp.opts[key] || gyp.opts[key.replace('-','_')];
            if (val) {
               final_args.push('--'+key+'='+val);
            }
        });
        // --ensure=false tell node-gyp to re-install node development headers
        // but it is only respected by node-gyp install, so we have to call install
        // as a separate step if the user passes it
        if (gyp.opts.ensure === false) {
            var install_args = final_args.concat(['install','--ensure=false']);
            compile.run_gyp(install_args,result.opts,function(err) {
                if (err) return callback(err);
                if (result.unparsed.length > 0) {
                    final_args = final_args.
                                  concat(['--']).
                                  concat(result.unparsed);
                }
                compile.run_gyp(['configure'].concat(final_args),result.opts,function(err) {
                    return callback(err);
                });
            });
        } else {
            if (result.unparsed.length > 0) {
                final_args = final_args.
                              concat(['--']).
                              concat(result.unparsed);
            }
            compile.run_gyp(['configure'].concat(final_args),result.opts,function(err) {
                if (!err && result.opts.napi_build_version) {
                    napi.swap_build_dir_out(result.opts.napi_build_version);
                }
                return callback(err);
            });
        }
    });
}
