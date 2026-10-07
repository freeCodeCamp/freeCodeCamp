"use strict";
const http = require("http");
const https = require("https");
const { parse: parseURLToNodeOptions } = require("url");
const HttpProxyAgent = require("http-proxy-agent");
const HttpsProxyAgent = require("https-proxy-agent");

module.exports = function agentFactory(proxy, rejectUnauthorized) {
  const agentOpts = { keepAlive: true, rejectUnauthorized };
  if (proxy) {
    const proxyOpts = { ...parseURLToNodeOptions(proxy), ...agentOpts };
    return { https: new HttpsProxyAgent(proxyOpts), http: new HttpProxyAgent(proxyOpts) };
  }
  return { http: new http.Agent(agentOpts), https: new https.Agent(agentOpts) };
};
