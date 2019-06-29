/**
 * Pingback one url
 */

'use strict';

const URL = require('url');
const http = require('http');
const https = require('https');
const querystring = require('querystring');

module.exports = config => {
  const url = config.url;
  const parsedUrl = !url ? null : URL.parse(url);

  if (!parsedUrl || !parsedUrl.hostname) {
    return {
      ok: false,
      error: 'No hostname found for ' + url,
      send: (data, cb) => {
        process.nextTick(() =>
          cb({
            ok: true,
            message: 'Ignored'
          })
        );
      }
    };
  }

  const send = (data, cb) => {
    if (data && data.result && data.action && data.url) {
      const postData = querystring.stringify({
        result: data.result,
        action: data.action,
        url: data.url,
        'last-modified': data.lastModified,
        source: 'algolia-crawler'
      });

      const httpOptions = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
        path: parsedUrl.path || '/',
        method: 'POST',
        auth: config.http && config.http.auth,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': postData.length
        }
      };
      const client = parsedUrl.protocol === 'https:' ? https : http;
      const req = client.request(httpOptions, res => {
        let data = '';
        res.setEncoding('utf8');

        // Manage error
        if (res.statusCode !== 200) {
          cb({
            ok: false,
            message: 'HTTP error ' + res.statusCode + ' ' + url
          });
          return;
        }

        // Grab all data
        res.on('data', chunk => {
          data += chunk;
        });

        // When done.
        res.on('end', (chunk, encoding) => {
          if (chunk) {
            data += chunk;
          }

          cb({
            ok: true
          });
        });
      });

      req.on('error', e =>
        cb({
          ok: false,
          err: e
        })
      );
      req.write(postData);
      req.end();
    } else {
      cb({
        ok: false,
        message: 'Missing information for the ping back process.'
      });
    }
  };

  return {
    send: send,
    ok: true
  };
};
