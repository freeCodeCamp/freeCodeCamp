'use strict';

const debug = require('debug')('detect-port');
const net = require('net');
const address = require('address');

module.exports = (port, host, callback) => {
  if (typeof port === 'function') {
    callback = port;
    port = null;
  } else if (typeof host === 'function') {
    callback = host;
    host = null;
  }
  port = parseInt(port) || 0;
  let maxPort = port + 10;
  if (maxPort > 65535) {
    maxPort = 65535;
  }
  debug('detect free port between [%s, %s)', port, maxPort);
  if (typeof callback === 'function') {
    return tryListen(host, port, maxPort, callback);
  }
  // promise
  return new Promise((resolve, reject) => {
    tryListen(host, port, maxPort, (error, realPort) => {
      if (error) {
        reject(error);
      } else {
        resolve(realPort);
      }
    });
  });
};

function tryListen(host, port, maxPort, callback) {
  function handleError() {
    port++;
    if (port >= maxPort) {
      debug(
        'port: %s >= maxPort: %s, give up and use random port',
        port,
        maxPort
      );
      port = 0;
      maxPort = 0;
    }
    tryListen(host, port, maxPort, callback);
  }

  // 1. check specified host (or null)
  listen(port, host, (err, realPort) => {
    // ignore random listening
    if (port === 0) {
      return callback(err, realPort);
    }

    if (err) {
      return handleError(err);
    }

    // 2. check default host
    listen(port, null, err => {
      if (err) {
        return handleError(err);
      }

      // 3. check localhost
      listen(port, 'localhost', err => {
        if (err) {
          return handleError(err);
        }

        // 4. check current ip
        let ip;
        try {
          ip = address.ip();
        } catch (err) {
          // Skip the `ip` check if `address.ip()` fails
          return callback(null, realPort);
        }

        listen(port, ip, (err, realPort) => {
          if (err) {
            return handleError(err);
          }

          callback(null, realPort);
        });
      });
    });
  });
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
