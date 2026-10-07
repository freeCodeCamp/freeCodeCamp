'use strict';
// See https://github.com/facebook/jest/issues/2549
// eslint-disable-next-line node/prefer-global/url
const {URL} = require('url');
const checkType = require('../utils/check-type.js');

module.exports = (self, proxyOptions) => {
	checkType('proxyOptions', proxyOptions, ['object']);
	checkType('proxyOptions.headers', proxyOptions.headers, ['object', 'undefined']);
	checkType('proxyOptions.raw', proxyOptions.raw, ['boolean', 'undefined']);
	checkType('proxyOptions.url', proxyOptions.url, [URL, 'string']);

	const url = new URL(proxyOptions.url);

	self.proxyOptions = {
		raw: true,
		...proxyOptions,
		headers: {...proxyOptions.headers},
		url
	};
};
