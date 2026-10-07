/* global __resourceQuery */

"use strict";

if (typeof EventSource !== "function") {
	throw new Error(
		"Environment doesn't support lazy compilation (requires EventSource)"
	);
}

var urlBase = decodeURIComponent(__resourceQuery.slice(1));
/** @type {EventSource | undefined} */
var activeEventSource;
var activeKeys = new Map();
var errorHandlers = new Set();

var updateEventSource = function updateEventSource() {
	if (activeEventSource) activeEventSource.close();
	if (activeKeys.size) {
		activeEventSource = new EventSource(
			urlBase + Array.from(activeKeys.keys()).join("@")
		);
		/**
		 * @this {EventSource}
		 * @param {Event & { message?: string, filename?: string, lineno?: number, colno?: number, error?: Error }} event event
		 */
		activeEventSource.onerror = function (event) {
			errorHandlers.forEach(function (onError) {
				onError(
					new Error(
						"Problem communicating active modules to the server: " +
							event.message +
							" " +
							event.filename +
							":" +
							event.lineno +
							":" +
							event.colno +
							" " +
							event.error
					)
				);
			});
		};
	} else {
		activeEventSource = undefined;
	}
};

/**
 * @param {{ data: string, onError: (err: Error) => void, active: boolean, module: module }} options options
 * @returns {() => void} function to destroy response
 */
exports.keepAlive = function (options) {
	var data = options.data;
	var onError = options.onError;
	var active = options.active;
	var module = options.module;
	errorHandlers.add(onError);
	var value = activeKeys.get(data) || 0;
	activeKeys.set(data, value + 1);
	if (value === 0) {
		updateEventSource();
	}
	if (!active && !module.hot) {
		console.log(
			"Hot Module Replacement is not enabled. Waiting for process restart..."
		);
	}

	return function () {
		errorHandlers.delete(onError);
		setTimeout(function () {
			var value = activeKeys.get(data);
			if (value === 1) {
				activeKeys.delete(data);
				updateEventSource();
			} else {
				activeKeys.set(data, value - 1);
			}
		}, 1000);
	};
};
