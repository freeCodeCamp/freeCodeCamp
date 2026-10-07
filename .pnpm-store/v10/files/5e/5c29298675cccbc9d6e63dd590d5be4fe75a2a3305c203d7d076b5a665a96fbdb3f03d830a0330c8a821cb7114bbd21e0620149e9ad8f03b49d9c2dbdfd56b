'use strict';

function sendUserRes(Container) {
  if (!Container.user.res.headersSent) {
    if (Container.options.stream) {
      Container.proxy.res.pipe(Container.user.res);
    } else {
      Container.user.res.send(Container.proxy.resData);
    }
  }
  return Promise.resolve(Container);
}


module.exports = sendUserRes;
