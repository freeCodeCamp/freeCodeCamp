import { createRequire } from 'module';
import { setRequire } from './open.js';
import { nativeAddon, setNativeFunctions } from './native.js';
import { setFlagsFromString } from 'v8';
setRequire(createRequire(import.meta.url));
export let v8AccelerationEnabled = false

let versions = process.versions;
let [ majorVersion, minorVersion ] = versions.node.split('.')

if (versions.v8 && +majorVersion == nativeAddon.version.nodeCompiledVersion) {
	let v8Funcs = {};
	let fastApiCalls = (majorVersion == 17 || majorVersion == 18 || majorVersion == 16 && minorVersion > 6) && !process.env.DISABLE_TURBO_CALLS;
	if (fastApiCalls)
		setFlagsFromString('--turbo-fast-api-calls')
	nativeAddon.enableDirectV8(v8Funcs, fastApiCalls);
	Object.assign(nativeAddon, v8Funcs);
	v8AccelerationEnabled = true;
} else if (majorVersion == 14) {
	// node v14 only has ABI compatibility with node v16 for zero-arg clearKeptObjects
	let v8Funcs = {};
	nativeAddon.enableDirectV8(v8Funcs, false);
	nativeAddon.clearKeptObjects = v8Funcs.clearKeptObjects;
}
setNativeFunctions(nativeAddon);

export * from './index.js'
export { default } from './index.js'
