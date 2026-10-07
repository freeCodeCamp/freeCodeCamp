const { existsSync } = require('node:fs');
const path = require('node:path');
const { platform, arch, report } = require('node:process');
const { spawnSync } = require('node:child_process');

const getReportHeader = () => {
	try {
		if (platform !== 'win32') {
			return report.getReport().header;
		}

		// This is needed because report.getReport() crashes the process on Windows sometimes.
		const script =
			"console.log(JSON.stringify(require('node:process').report.getReport().header));";
		const child = spawnSync(process.execPath, ['-p', script], {
			encoding: 'utf8',
			timeout: 3000,
			windowsHide: true
		});

		if (child.status !== 0) {
			return null;
		}

		// The output from node -p might include a trailing 'undefined' and newline
		const stdout = child.stdout?.replace(/undefined\r?\n?$/, '').trim();
		if (!stdout) {
			return null;
		}

		return JSON.parse(stdout);
	} catch {
		return null;
	}
};

let reportHeader;
const isMingw32 = () => {
	reportHeader ??= getReportHeader();

	return reportHeader?.osName?.startsWith('MINGW32_NT') ?? false;
};

const isMusl = () => {
	reportHeader ??= getReportHeader();

	return reportHeader ? !reportHeader.glibcVersionRuntime : false;
};

const bindingsByPlatformAndArch = {
	android: {
		arm: { base: 'android-arm-eabi' },
		arm64: { base: 'android-arm64' }
	},
	darwin: {
		arm64: { base: 'darwin-arm64' },
		x64: { base: 'darwin-x64' }
	},
	freebsd: {
		arm64: { base: 'freebsd-arm64' },
		x64: { base: 'freebsd-x64' }
	},
	linux: {
		arm: { base: 'linux-arm-gnueabihf', musl: 'linux-arm-musleabihf' },
		arm64: { base: 'linux-arm64-gnu', musl: 'linux-arm64-musl' },
		loong64: { base: 'linux-loong64-gnu', musl: 'linux-loong64-musl' },
		ppc64: { base: 'linux-ppc64-gnu', musl: 'linux-ppc64-musl' },
		riscv64: { base: 'linux-riscv64-gnu', musl: 'linux-riscv64-musl' },
		s390x: { base: 'linux-s390x-gnu', musl: null },
		x64: { base: 'linux-x64-gnu', musl: 'linux-x64-musl' }
	},
	openbsd: {
		x64: { base: 'openbsd-x64' }
	},
	openharmony: {
		arm64: { base: 'openharmony-arm64' }
	},
	win32: {
		arm64: { base: 'win32-arm64-msvc' },
		ia32: { base: 'win32-ia32-msvc' },
		x64: {
			base: isMingw32() ? 'win32-x64-gnu' : 'win32-x64-msvc'
		}
	}
};

const msvcLinkFilenameByArch = {
	arm64: 'vc_redist.arm64.exe',
	ia32: 'vc_redist.x86.exe',
	x64: 'vc_redist.x64.exe'
};

const packageBase = getPackageBase();
const localName = `./rollup.${packageBase}.node`;
const requireWithFriendlyError = id => {
	try {
		return require(id);
	} catch (error) {
		if (
			platform === 'win32' &&
			error instanceof Error &&
			error.code === 'ERR_DLOPEN_FAILED' &&
			error.message.includes('The specified module could not be found')
		) {
			const msvcDownloadLink = `https://aka.ms/vs/17/release/${msvcLinkFilenameByArch[arch]}`;
			throw new Error(
				`Failed to load module ${id}. ` +
					'Required DLL was not found. ' +
					'This error usually happens when Microsoft Visual C++ Redistributable is not installed. ' +
					`You can download it from ${msvcDownloadLink}`,
				{ cause: error }
			);
		}

		throw new Error(
			`Cannot find module ${id}. ` +
				`npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). ` +
				'Please try `npm i` again after removing both package-lock.json and node_modules directory.',
			{ cause: error }
		);
	}
};

const { parse, parseAsync, xxhashBase64Url, xxhashBase36, xxhashBase16 } = requireWithFriendlyError(
	existsSync(path.join(__dirname, localName)) ? localName : `@rollup/rollup-${packageBase}`
);

function getPackageBase() {
	const imported = bindingsByPlatformAndArch[platform]?.[arch];
	if (!imported) {
		throwUnsupportedError(false);
	}
	if ('musl' in imported && isMusl()) {
		return imported.musl || throwUnsupportedError(true);
	}
	return imported.base;
}

function throwUnsupportedError(isMusl) {
	throw new Error(
		`Your current platform "${platform}${isMusl ? ' (musl)' : ''}" and architecture "${arch}" combination is not yet supported by the native Rollup build. Please use the WASM build "@rollup/wasm-node" instead.

The following platform-architecture combinations are supported:
${Object.entries(bindingsByPlatformAndArch)
	.flatMap(([platformName, architectures]) =>
		Object.entries(architectures).flatMap(([architectureName, { musl }]) => {
			const name = `${platformName}-${architectureName}`;
			return musl ? [name, `${name} (musl)`] : [name];
		})
	)
	.join('\n')}

If this is important to you, please consider supporting Rollup to make a native build for your platform and architecture available.`
	);
}

module.exports.parse = parse;
module.exports.parseAsync = parseAsync;
module.exports.xxhashBase64Url = xxhashBase64Url;
module.exports.xxhashBase36 = xxhashBase36;
module.exports.xxhashBase16 = xxhashBase16;
