"use strict";

module.exports = exports;

var url = require('url');

var URI_REGEX="^(.*)\.(s3(?:-.*)?)\.amazonaws\.com$";

module.exports.detect = function(to,config) {
    var uri = url.parse(to);
    var hostname_matches = uri.hostname.match(URI_REGEX);
    config.prefix = (!uri.pathname || uri.pathname == '/') ? '' : uri.pathname.replace('/','');
    if(!hostname_matches) {
        return;
    }
    if (!config.bucket) {
        config.bucket = hostname_matches[1];
    }
    if (!config.region) {
        var s3_domain = hostname_matches[2];
        if (s3_domain.slice(0,3) == 's3-' &&
            s3_domain.length >= 3) {
            // it appears the region is explicit in the url
            config.region = s3_domain.replace('s3-','');
        }
    }
};
