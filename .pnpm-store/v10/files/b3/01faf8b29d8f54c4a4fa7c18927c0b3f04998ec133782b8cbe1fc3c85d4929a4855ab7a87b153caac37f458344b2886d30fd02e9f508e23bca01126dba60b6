/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __resourceQuery */
if (module.hot) {
	var log = require("./log");

	/**
	 * @param {boolean=} fromUpdate true when called from update
	 */
	var checkForUpdate = function checkForUpdate(fromUpdate) {
		module.hot
			.check()
			.then(function (updatedModules) {
				if (!updatedModules) {
					if (fromUpdate) log("info", "[HMR] Update applied.");
					else log("warning", "[HMR] Cannot find update.");
					return;
				}

				return module.hot
					.apply({
						ignoreUnaccepted: true,
						onUnaccepted: function (data) {
							log(
								"warning",
								"Ignored an update to unaccepted module " +
									data.chain.join(" -> ")
							);
						}
					})
					.then(function (renewedModules) {
						require("./log-apply-result")(updatedModules, renewedModules);

						checkForUpdate(true);
						return null;
					});
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + log.formatError(err));
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + (err.stack || err.message));
				}
			});
	};

	process.on(__resourceQuery.slice(1) || "SIGUSR2", function () {
		if (module.hot.status() !== "idle") {
			log(
				"warning",
				"[HMR] Got signal but currently in " + module.hot.status() + " state."
			);
			log("warning", "[HMR] Need to be in idle state to start hot update.");
			return;
		}

		checkForUpdate();
	});
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}
