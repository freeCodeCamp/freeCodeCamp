'use strict';
const http2 = require('http2');
const {
	Agent,
	globalAgent
} = require('./agent.js');
const ClientRequest = require('./client-request.js');
const IncomingMessage = require('./incoming-message.js');
const auto = require('./auto.js');
const {
	HttpOverHttp2,
	HttpsOverHttp2
} = require('./proxies/h1-over-h2.js');
const Http2OverHttp2 = require('./proxies/h2-over-h2.js');
const {
	Http2OverHttp,
	Http2OverHttps
} = require('./proxies/h2-over-h1.js');
const validateHeaderName = require('./utils/validate-header-name.js');
const validateHeaderValue = require('./utils/validate-header-value.js');

const request = (url, options, callback) => new ClientRequest(url, options, callback);

const get = (url, options, callback) => {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const req = new ClientRequest(url, options, callback);
	req.end();

	return req;
};

module.exports = {
	...http2,
	ClientRequest,
	IncomingMessage,
	Agent,
	globalAgent,
	request,
	get,
	auto,
	proxies: {
		HttpOverHttp2,
		HttpsOverHttp2,
		Http2OverHttp2,
		Http2OverHttp,
		Http2OverHttps
	},
	validateHeaderName,
	validateHeaderValue
};
