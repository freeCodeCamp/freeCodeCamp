"use strict";

/* global __resourceQuery */

var isNodeLikeEnv =
	typeof global !== "undefined" && typeof global.process !== "undefined";

var handler = isNodeLikeEnv
	? require("./lazy-compilation-node")
	: require("./lazy-compilation-web");

handler.setUrl(decodeURIComponent(__resourceQuery.slice(1)));

/**
 * @param {{ data: string, onError: (err: Error) => void, active: boolean, module: module }} options options
 * @returns {() => void} function to destroy response
 */
module.exports = handler;
