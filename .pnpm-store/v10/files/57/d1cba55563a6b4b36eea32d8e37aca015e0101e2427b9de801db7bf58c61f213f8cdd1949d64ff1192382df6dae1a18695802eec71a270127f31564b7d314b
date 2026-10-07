const userAgentSignatures = [
	'amd64',
	'ia64',
	'irix64',
	'ppc64',
	'sparc64',
	'win64',
	'wow64',
	'x64;', // The semicolon is important to prevent false-positives.
	'x64_64',
	'x86-64',
	'x86_64',
];

export async function is64bit() {
	if (!globalThis.navigator) {
		return false;
	}

	const {navigator} = globalThis;

	if (navigator.userAgentData?.getHighEntropyValues) {
		// It can throw if the user-agent decides that one or more of the hints requested should not be returned.
		try {
			const {bitness} = await navigator.userAgentData.getHighEntropyValues(['bitness']);
			return bitness === '64';
		} catch {}
	}

	return is64bitSync();
}

export function is64bitSync() {
	if (!globalThis.navigator) {
		return false;
	}

	const {navigator} = globalThis;

	const userAgent = navigator.userAgent.toLowerCase();
	if (userAgentSignatures.some(signature => userAgent.includes(signature))) {
		return true;
	}

	if (navigator.cpuClass.toLowerCase() === 'x64') {
		return true;
	}

	return false;
}

