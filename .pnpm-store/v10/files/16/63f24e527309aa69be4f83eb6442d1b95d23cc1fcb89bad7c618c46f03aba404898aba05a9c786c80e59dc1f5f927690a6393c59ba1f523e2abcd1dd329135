/* global __resourceQuery */

"use strict";

var urlBase = decodeURIComponent(__resourceQuery.slice(1));

/**
 * @param {{ data: string, onError: (err: Error) => void, active: boolean, module: module }} options options
 * @returns {() => void} function to destroy response
 */
exports.keepAlive = function (options) {
	var data = options.data;
	var onError = options.onError;
	var active = options.active;
	var module = options.module;
	/** @type {import("http").IncomingMessage} */
	var response;
	var request = (
		urlBase.startsWith("https") ? require("https") : require("http")
	).request(
		urlBase + data,
		{
			agent: false,
			headers: { accept: "text/event-stream" }
		},
		function (res) {
			response = res;
			response.on("error", errorHandler);
			if (!active && !module.hot) {
				console.log(
					"Hot Module Replacement is not enabled. Waiting for process restart..."
				);
			}
		}
	);

	/**
	 * @param {Error} err error
	 */
	function errorHandler(err) {
		err.message =
			"Problem communicating active modules to the server: " + err.message;
		onError(err);
	}
	request.on("error", errorHandler);
	request.end();
	return function () {
		response.destroy();
	};
};
