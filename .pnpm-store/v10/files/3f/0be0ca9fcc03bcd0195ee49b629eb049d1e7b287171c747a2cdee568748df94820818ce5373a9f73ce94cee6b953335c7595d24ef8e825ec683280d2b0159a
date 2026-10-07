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
		if (!(inspector.url() !== void 0)) {
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
	return config.watch && config.isolate === false && config.maxWorkers === 1;
}

export { closeInspector as c, setupInspect as s };
