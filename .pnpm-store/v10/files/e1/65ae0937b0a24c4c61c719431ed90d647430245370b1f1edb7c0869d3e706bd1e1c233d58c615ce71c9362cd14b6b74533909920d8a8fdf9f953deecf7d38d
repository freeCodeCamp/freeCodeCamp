import {promisify} from 'node:util';
import process from 'node:process';
import childProcess from 'node:child_process';

const execFilePromises = promisify(childProcess.execFile);

export async function systemArchitecture() {
	const {arch, platform, env} = process;

	// Detect Node.js x64 binary running under Rosetta 2 on a ARM64 Mac.
	if (platform === 'darwin' && arch === 'x64') {
		const {stdout} = await execFilePromises('sysctl', ['-inq', 'sysctl.proc_translated'], {encoding: 'utf8'});
		return stdout.trim() === '1' ? 'arm64' : 'x64';
	}

	if (arch === 'arm64' || arch === 'x64') {
		return arch;
	}

	if (platform === 'win32' && Object.hasOwn(env, 'PROCESSOR_ARCHITEW6432')) {
		return 'x64';
	}

	if (platform === 'linux') {
		const {stdout} = await execFilePromises('getconf', ['LONG_BIT'], {encoding: 'utf8'});
		if (stdout.trim() === '64') {
			return 'x64';
		}
	}

	return arch;
}

export function systemArchitectureSync() {
	const {arch, platform, env} = process;

	// Detect Node.js x64 binary running under Rosetta 2 on a ARM64 Mac.
	if (platform === 'darwin' && arch === 'x64') {
		const stdout = childProcess.execFileSync('sysctl', ['-inq', 'sysctl.proc_translated'], {encoding: 'utf8'});
		return stdout.trim() === '1' ? 'arm64' : 'x64';
	}

	if (arch === 'arm64' || arch === 'x64') {
		return arch;
	}

	if (platform === 'win32' && Object.hasOwn(env, 'PROCESSOR_ARCHITEW6432')) {
		return 'x64';
	}

	if (platform === 'linux') {
		const stdout = childProcess.execFileSync('getconf', ['LONG_BIT'], {encoding: 'utf8'});
		if (stdout.trim() === '64') {
			return 'x64';
		}
	}

	return arch;
}
