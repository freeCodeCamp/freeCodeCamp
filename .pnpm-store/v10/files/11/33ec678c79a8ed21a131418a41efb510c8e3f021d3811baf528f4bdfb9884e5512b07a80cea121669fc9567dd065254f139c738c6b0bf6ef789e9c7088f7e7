/* globals WorkerGlobalScope, DedicatedWorkerGlobalScope, SharedWorkerGlobalScope, ServiceWorkerGlobalScope */

export const isBrowser = globalThis.window?.document !== undefined;

export const isNode = globalThis.process?.versions?.node !== undefined;

export const isBun = globalThis.process?.versions?.bun !== undefined;

export const isDeno = globalThis.Deno?.version?.deno !== undefined;

export const isElectron = globalThis.process?.versions?.electron !== undefined;

export const isJsDom = globalThis.navigator?.userAgent?.includes('jsdom') === true;

export const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && globalThis instanceof WorkerGlobalScope;

export const isDedicatedWorker = typeof DedicatedWorkerGlobalScope !== 'undefined' && globalThis instanceof DedicatedWorkerGlobalScope;

export const isSharedWorker = typeof SharedWorkerGlobalScope !== 'undefined' && globalThis instanceof SharedWorkerGlobalScope;

export const isServiceWorker = typeof ServiceWorkerGlobalScope !== 'undefined' && globalThis instanceof ServiceWorkerGlobalScope;

// Note: I'm intentionally not DRYing up the other variables to keep them "lazy".
const platform = globalThis.navigator?.userAgentData?.platform;

export const isMacOs = platform === 'macOS'
	|| globalThis.navigator?.platform === 'MacIntel' // Even on Apple silicon Macs.
	|| globalThis.navigator?.userAgent?.includes(' Mac ') === true
	|| globalThis.process?.platform === 'darwin';

export const isWindows = platform === 'Windows'
	|| globalThis.navigator?.platform === 'Win32'
	|| globalThis.process?.platform === 'win32';

export const isLinux = platform === 'Linux'
	|| globalThis.navigator?.platform?.startsWith('Linux') === true
	|| globalThis.navigator?.userAgent?.includes(' Linux ') === true
	|| globalThis.process?.platform === 'linux';

export const isIos = platform === 'iOS'
	|| (globalThis.navigator?.platform === 'MacIntel' && globalThis.navigator?.maxTouchPoints > 1)
	|| /iPad|iPhone|iPod/.test(globalThis.navigator?.platform);

export const isAndroid = platform === 'Android'
	|| globalThis.navigator?.platform === 'Android'
	|| globalThis.navigator?.userAgent?.includes(' Android ') === true
	|| globalThis.process?.platform === 'android';
