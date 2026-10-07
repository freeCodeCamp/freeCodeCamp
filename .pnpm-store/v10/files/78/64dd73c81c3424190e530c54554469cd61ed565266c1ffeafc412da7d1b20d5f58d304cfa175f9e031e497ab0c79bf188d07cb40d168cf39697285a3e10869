const url = require('url')
const tunnel = require('tunnel-agent')
const util = require('./util')

function applyProxy (reqOpts, opts) {
  const log = opts.log || util.noopLogger

  const proxy = opts['https-proxy'] || opts.proxy

  if (proxy) {
    // eslint-disable-next-line node/no-deprecated-api
    const parsedDownloadUrl = url.parse(reqOpts.url)
    // eslint-disable-next-line node/no-deprecated-api
    const parsedProxy = url.parse(proxy)
    const uriProtocol = (parsedDownloadUrl.protocol === 'https:' ? 'https' : 'http')
    const proxyProtocol = (parsedProxy.protocol === 'https:' ? 'Https' : 'Http')
    const tunnelFnName = [uriProtocol, proxyProtocol].join('Over')
    reqOpts.agent = tunnel[tunnelFnName]({
      proxy: {
        host: parsedProxy.hostname,
        port: +parsedProxy.port,
        proxyAuth: parsedProxy.auth
      }
    })
    log.http('request', 'Proxy setup detected (Host: ' +
    parsedProxy.hostname + ', Port: ' +
      parsedProxy.port + ', Authentication: ' +
      (parsedProxy.auth ? 'Yes' : 'No') + ')' +
      ' Tunneling with ' + tunnelFnName)
  }

  return reqOpts
}

module.exports = applyProxy
