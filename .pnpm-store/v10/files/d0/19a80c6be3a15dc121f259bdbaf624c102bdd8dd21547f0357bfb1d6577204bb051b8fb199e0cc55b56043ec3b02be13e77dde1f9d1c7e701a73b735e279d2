import {systemArchitecture, systemArchitectureSync} from 'system-architecture';

const archtectures64bit = new Set([
	'arm64',
	'x64',
	'ppc64',
	'riscv64',
]);

export async function is64bit() {
	return archtectures64bit.has(await systemArchitecture());
}

export function is64bitSync() {
	return archtectures64bit.has(systemArchitectureSync());
}
