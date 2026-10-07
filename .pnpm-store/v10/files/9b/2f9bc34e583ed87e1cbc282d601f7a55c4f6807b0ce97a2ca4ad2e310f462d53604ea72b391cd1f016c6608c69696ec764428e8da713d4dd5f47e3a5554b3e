'use strict';

function copyProxyResHeadersToUserRes(container) {
  return new Promise(function(resolve) {
    var res = container.user.res;
    var rsp = container.proxy.res;

    if (!res.headersSent) {
        res.status(rsp.statusCode);
        Object.keys(rsp.headers)
        .filter(function(item) { return item !== 'transfer-encoding'; })
        .forEach(function(item) {
            res.set(item, rsp.headers[item]);
        });
    }

    resolve(container);
  });
}

module.exports = copyProxyResHeadersToUserRes;

