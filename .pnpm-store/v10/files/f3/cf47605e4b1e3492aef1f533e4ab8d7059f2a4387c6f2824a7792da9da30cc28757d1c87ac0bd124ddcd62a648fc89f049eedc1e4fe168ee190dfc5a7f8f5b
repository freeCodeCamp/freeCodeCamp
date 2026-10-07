/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Maël Nison @arcanis
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/**
 * @typedef {object} PnpApiImpl
 * @property {(packageName: string, issuer: string, options: { considerBuiltins: boolean }) => string | null} resolveToUnqualified resolve to unqualified
 */

module.exports = class PnpPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {PnpApiImpl} pnpApi pnpApi
	 * @param {string | ResolveStepHook} target target
	 * @param {string | ResolveStepHook} alternateTarget alternateTarget
	 */
	constructor(source, pnpApi, target, alternateTarget) {
		this.source = source;
		this.pnpApi = pnpApi;
		this.target = target;
		this.alternateTarget = alternateTarget;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		/** @type {ResolveStepHook} */
		const target = resolver.ensureHook(this.target);
		const alternateTarget = resolver.ensureHook(this.alternateTarget);
		resolver
			.getHook(this.source)
			.tapAsync("PnpPlugin", (request, resolveContext, callback) => {
				const req = request.request;
				if (!req) return callback();

				// The trailing slash indicates to PnP that this value is a folder rather than a file
				const issuer = `${request.path}/`;

				const packageMatch = /^(@[^/]+\/)?[^/]+/.exec(req);
				if (!packageMatch) return callback();

				const [packageName] = packageMatch;
				const innerRequest = `.${req.slice(packageName.length)}`;

				/** @type {string | undefined | null} */
				let resolution;
				/** @type {string | undefined | null} */
				let apiResolution;
				try {
					resolution = this.pnpApi.resolveToUnqualified(packageName, issuer, {
						considerBuiltins: false,
					});

					if (resolution === null) {
						// This is either not a PnP managed issuer or it's a Node builtin
						// Try to continue resolving with our alternatives
						resolver.doResolve(
							alternateTarget,
							request,
							"issuer is not managed by a pnpapi",
							resolveContext,
							(err, result) => {
								if (err) return callback(err);
								if (result) return callback(null, result);
								// Skip alternatives
								return callback(null, null);
							},
						);
						return;
					}

					if (resolveContext.fileDependencies) {
						apiResolution = this.pnpApi.resolveToUnqualified("pnpapi", issuer, {
							considerBuiltins: false,
						});
					}
				} catch (/** @type {unknown} */ error) {
					if (
						/** @type {Error & { code: string }} */
						(error).code === "MODULE_NOT_FOUND" &&
						/** @type {Error & { pnpCode: string }} */
						(error).pnpCode === "UNDECLARED_DEPENDENCY"
					) {
						// This is not a PnP managed dependency.
						// Try to continue resolving with our alternatives
						if (resolveContext.log) {
							resolveContext.log("request is not managed by the pnpapi");
							for (const line of /** @type {Error} */ (error).message
								.split("\n")
								.filter(Boolean)) {
								resolveContext.log(`  ${line}`);
							}
						}
						return callback();
					}
					return callback(/** @type {Error} */ (error));
				}

				if (resolution === packageName) return callback();

				if (apiResolution && resolveContext.fileDependencies) {
					resolveContext.fileDependencies.add(apiResolution);
				}
				/** @type {ResolveRequest} */
				const obj = {
					...request,
					path: resolution,
					request: innerRequest,
					ignoreSymlinks: true,
					fullySpecified: request.fullySpecified && innerRequest !== ".",
				};
				resolver.doResolve(
					target,
					obj,
					`resolved by pnp to ${resolution}`,
					resolveContext,
					(err, result) => {
						if (err) return callback(err);
						if (result) return callback(null, result);
						// Skip alternatives
						return callback(null, null);
					},
				);
			});
	}
};
