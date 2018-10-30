"use strict";

module.exports = exports = self.fetch;

// Needed for TypeScript and Webpack.
exports.default = self.fetch.bind(self);

exports.Headers = self.Headers;
exports.Request = self.Request;
exports.Response = self.Response;
