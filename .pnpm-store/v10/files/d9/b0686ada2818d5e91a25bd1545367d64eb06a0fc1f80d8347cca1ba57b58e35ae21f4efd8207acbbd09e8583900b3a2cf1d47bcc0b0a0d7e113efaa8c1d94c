"use strict";
const http = require("http");
const https = require("https");
const { HttpProxyAgent } = require("http-proxy-agent");
const { HttpsProxyAgent } = require("https-proxy-agent");

module.exports = function agentFactory(proxy, rejectUnauthorized) {
  const agentOpts = { keepAlive: true, rejectUnauthorized };
  if (proxy) {
    return { https: new HttpsProxyAgent(proxy, agentOpts), http: new HttpProxyAgent(proxy, agentOpts) };
  }
  return { http: new http.Agent(agentOpts), https: new https.Agent(agentOpts) };
};
