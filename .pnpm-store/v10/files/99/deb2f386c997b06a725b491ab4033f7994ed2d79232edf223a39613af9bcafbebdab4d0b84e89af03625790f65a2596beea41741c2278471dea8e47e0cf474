/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("http").IncomingMessage} IncomingMessage */
/** @typedef {import("http").RequestListener} RequestListener */
/** @typedef {import("http").ServerOptions} HttpServerOptions */
/** @typedef {import("http").ServerResponse} ServerResponse */
/** @typedef {import("https").ServerOptions} HttpsServerOptions */
/** @typedef {import("net").AddressInfo} AddressInfo */
/** @typedef {import("net").Server} Server */
/** @typedef {import("../../declarations/WebpackOptions").LazyCompilationDefaultBackendOptions} LazyCompilationDefaultBackendOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("./LazyCompilationPlugin").BackendApi} BackendApi */
/** @typedef {import("./LazyCompilationPlugin").BackendHandler} BackendHandler */

/**
 * @param {Omit<LazyCompilationDefaultBackendOptions, "client"> & { client: NonNullable<LazyCompilationDefaultBackendOptions["client"]>}} options additional options for the backend
 * @returns {BackendHandler} backend
 */
module.exports = options => (compiler, callback) => {
	const logger = compiler.getInfrastructureLogger("LazyCompilationBackend");
	const activeModules = new Map();
	const prefix = "/lazy-compilation-using-";

	const isHttps =
		options.protocol === "https" ||
		(typeof options.server === "object" &&
			("key" in options.server || "pfx" in options.server));

	const createServer =
		typeof options.server === "function"
			? options.server
			: (() => {
					const http = isHttps ? require("https") : require("http");
					return http.createServer.bind(
						http,
						/** @type {HttpServerOptions | HttpsServerOptions} */
						(options.server)
					);
				})();
	/** @type {function(Server): void} */
	const listen =
		typeof options.listen === "function"
			? options.listen
			: server => {
					let listen = options.listen;
					if (typeof listen === "object" && !("port" in listen))
						listen = { ...listen, port: undefined };
					server.listen(listen);
				};

	const protocol = options.protocol || (isHttps ? "https" : "http");

	/** @type {RequestListener} */
	const requestListener = (req, res) => {
		if (req.url === undefined) return;
		const keys = req.url.slice(prefix.length).split("@");
		req.socket.on("close", () => {
			setTimeout(() => {
				for (const key of keys) {
					const oldValue = activeModules.get(key) || 0;
					activeModules.set(key, oldValue - 1);
					if (oldValue === 1) {
						logger.log(
							`${key} is no longer in use. Next compilation will skip this module.`
						);
					}
				}
			}, 120000);
		});
		req.socket.setNoDelay(true);
		res.writeHead(200, {
			"content-type": "text/event-stream",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Headers": "*"
		});
		res.write("\n");
		let moduleActivated = false;
		for (const key of keys) {
			const oldValue = activeModules.get(key) || 0;
			activeModules.set(key, oldValue + 1);
			if (oldValue === 0) {
				logger.log(`${key} is now in use and will be compiled.`);
				moduleActivated = true;
			}
		}
		if (moduleActivated && compiler.watching) compiler.watching.invalidate();
	};

	const server = /** @type {Server} */ (createServer());
	server.on("request", requestListener);

	let isClosing = false;
	/** @type {Set<import("net").Socket>} */
	const sockets = new Set();
	server.on("connection", socket => {
		sockets.add(socket);
		socket.on("close", () => {
			sockets.delete(socket);
		});
		if (isClosing) socket.destroy();
	});
	server.on("clientError", e => {
		if (e.message !== "Server is disposing") logger.warn(e);
	});

	server.on(
		"listening",
		/**
		 * @param {Error} err error
		 * @returns {void}
		 */
		err => {
			if (err) return callback(err);
			const _addr = server.address();
			if (typeof _addr === "string")
				throw new Error("addr must not be a string");
			const addr = /** @type {AddressInfo} */ (_addr);
			const urlBase =
				addr.address === "::" || addr.address === "0.0.0.0"
					? `${protocol}://localhost:${addr.port}`
					: addr.family === "IPv6"
						? `${protocol}://[${addr.address}]:${addr.port}`
						: `${protocol}://${addr.address}:${addr.port}`;
			logger.log(
				`Server-Sent-Events server for lazy compilation open at ${urlBase}.`
			);
			callback(null, {
				dispose(callback) {
					isClosing = true;
					// Removing the listener is a workaround for a memory leak in node.js
					server.off("request", requestListener);
					server.close(err => {
						callback(err);
					});
					for (const socket of sockets) {
						socket.destroy(new Error("Server is disposing"));
					}
				},
				module(originalModule) {
					const key = `${encodeURIComponent(
						originalModule.identifier().replace(/\\/g, "/").replace(/@/g, "_")
					).replace(/%(2F|3A|24|26|2B|2C|3B|3D)/g, decodeURIComponent)}`;
					const active = activeModules.get(key) > 0;
					return {
						client: `${options.client}?${encodeURIComponent(urlBase + prefix)}`,
						data: key,
						active
					};
				}
			});
		}
	);
	listen(server);
};
