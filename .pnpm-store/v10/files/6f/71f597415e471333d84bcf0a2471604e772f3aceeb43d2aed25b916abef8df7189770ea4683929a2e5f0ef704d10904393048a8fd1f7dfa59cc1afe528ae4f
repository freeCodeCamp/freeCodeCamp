import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const __require = createRequire(import.meta.url);
let inspector;
let session;
/**
* Enables debugging inside `worker_threads` and `child_process`.
* Should be called as early as possible when worker/process has been set up.
*/
function setupInspect(ctx) {
	const config = ctx.config;
	const isEnabled = config.inspector.enabled;
	if (isEnabled) {
		inspector = __require("node:inspector");
		// Inspector may be open already if "isolate: false" is used
		const isOpen = inspector.url() !== void 0;
		if (!isOpen) {
			inspector.open(config.inspector.port, config.inspector.host, config.inspector.waitForDebugger);
			if (config.inspectBrk) {
				const firstTestFile = typeof ctx.files[0] === "string" ? ctx.files[0] : ctx.files[0].filepath;
				// Stop at first test file
				if (firstTestFile) {
					session = new inspector.Session();
					session.connect();
					session.post("Debugger.enable");
					session.post("Debugger.setBreakpointByUrl", {
						lineNumber: 0,
						url: pathToFileURL(firstTestFile)
					});
				}
			}
		}
	}
	const keepOpen = shouldKeepOpen(config);
	return function cleanup() {
		if (isEnabled && !keepOpen && inspector) {
			inspector.close();
			session?.disconnect();
		}
	};
}
function closeInspector(config) {
	const keepOpen = shouldKeepOpen(config);
	if (inspector && !keepOpen) {
		inspector.close();
		session?.disconnect();
	}
}
function shouldKeepOpen(config) {
	// In watch mode the inspector can persist re-runs if isolation is disabled and a single worker is used
	const isIsolatedSingleThread = config.pool === "threads" && config.poolOptions?.threads?.isolate === false && config.poolOptions?.threads?.singleThread;
	const isIsolatedSingleFork = config.pool === "forks" && config.poolOptions?.forks?.isolate === false && config.poolOptions?.forks?.singleFork;
	return config.watch && (isIsolatedSingleFork || isIsolatedSingleThread);
}

export { closeInspector as c, setupInspect as s };
