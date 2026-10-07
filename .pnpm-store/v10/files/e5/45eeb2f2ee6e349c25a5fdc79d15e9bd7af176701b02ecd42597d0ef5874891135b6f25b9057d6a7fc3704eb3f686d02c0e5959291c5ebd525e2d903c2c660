'use strict';

const net = require('net');
const address = require('address');
const debug = require('debug')('detect-port');

module.exports = (port, callback) => {
  let hostname = '';

  if (typeof port === 'object' && port) {
    hostname = port.hostname;
    callback = port.callback;
    port = port.port;
  } else {
    if (typeof port === 'function') {
      callback = port;
      port = null;
    }
  }

  port = parseInt(port) || 0;
  let maxPort = port + 10;
  if (maxPort > 65535) {
    maxPort = 65535;
  }
  debug('detect free port between [%s, %s)', port, maxPort);
  if (typeof callback === 'function') {
    return tryListen(port, maxPort, hostname, callback);
  }
  // promise
  return new Promise(resolve => {
    tryListen(port, maxPort, hostname, (_, realPort) => {
      resolve(realPort);
    });
  });
};

function tryListen(port, maxPort, hostname, callback) {
  function handleError() {
    port++;
    if (port >= maxPort) {
      debug('port: %s >= maxPort: %s, give up and use random port', port, maxPort);
      port = 0;
      maxPort = 0;
    }
    tryListen(port, maxPort, hostname, callback);
  }

  // use user hostname
  if (hostname) {
    listen(port, hostname, (err, realPort) => {
      if (err) {
        if (err.code === 'EADDRNOTAVAIL') {
          return callback(new Error('the ip that is not unknown on the machine'));
        }
        return handleError();
      }

      callback(null, realPort);
    });
  } else {
    // 1. check null
    listen(port, null, (err, realPort) => {
      // ignore random listening
      if (port === 0) {
        return callback(err, realPort);
      }

      if (err) {
        return handleError(err);
      }

      // 2. check 0.0.0.0
      listen(port, '0.0.0.0', err => {
        if (err) {
          return handleError(err);
        }

        // 3. check localhost
        listen(port, 'localhost', err => {
          // if localhost refer to the ip that is not unkonwn on the machine, you will see the error EADDRNOTAVAIL
          // https://stackoverflow.com/questions/10809740/listen-eaddrnotavail-error-in-node-js
          if (err && err.code !== 'EADDRNOTAVAIL') {
            return handleError(err);
          }

          // 4. check current ip
          listen(port, address.ip(), (err, realPort) => {
            if (err) {
              return handleError(err);
            }

            callback(null, realPort);
          });
        });
      });
    });
  }
}

function listen(port, hostname, callback) {
  const server = new net.Server();

  server.on('error', err => {
    debug('listen %s:%s error: %s', hostname, port, err);
    server.close();
    if (err.code === 'ENOTFOUND') {
      debug('ignore dns ENOTFOUND error, get free %s:%s', hostname, port);
      return callback(null, port);
    }
    return callback(err);
  });

  server.listen(port, hostname, () => {
    port = server.address().port;
    server.close();
    debug('get free %s:%s', hostname, port);
    return callback(null, port);
  });
}
