import { createRequire } from "node:module";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region src/webcontainer-fallback.cjs
var require_webcontainer_fallback = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fs = __require("node:fs");
	const childProcess = __require("node:child_process");
	const version = JSON.parse(fs.readFileSync(__require.resolve("rolldown/package.json"), "utf-8")).version;
	const baseDir = `/tmp/rolldown-${version}`;
	const bindingEntry = `${baseDir}/node_modules/@rolldown/binding-wasm32-wasi/rolldown-binding.wasi.cjs`;
	if (!fs.existsSync(bindingEntry)) {
		const bindingPkg = `@rolldown/binding-wasm32-wasi@${version}`;
		fs.rmSync(baseDir, {
			recursive: true,
			force: true
		});
		fs.mkdirSync(baseDir, { recursive: true });
		console.log(`[rolldown] Downloading ${bindingPkg} on WebContainer...`);
		childProcess.execFileSync("pnpm", ["i", bindingPkg], {
			cwd: baseDir,
			stdio: "inherit"
		});
	}
	module.exports = __require(bindingEntry);
}));
//#endregion
//#region src/binding.cjs
var require_binding = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { readFileSync } = __require("node:fs");
	let nativeBinding = null;
	const loadErrors = [];
	const isMusl = () => {
		let musl = false;
		if (process.platform === "linux") {
			musl = isMuslFromFilesystem();
			if (musl === null) musl = isMuslFromReport();
			if (musl === null) musl = isMuslFromChildProcess();
		}
		return musl;
	};
	const isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
	const isMuslFromFilesystem = () => {
		try {
			return readFileSync("/usr/bin/ldd", "utf-8").includes("musl");
		} catch {
			return null;
		}
	};
	const isMuslFromReport = () => {
		let report = null;
		if (typeof process.report?.getReport === "function") {
			process.report.excludeNetwork = true;
			report = process.report.getReport();
		}
		if (!report) return null;
		if (report.header && report.header.glibcVersionRuntime) return false;
		if (Array.isArray(report.sharedObjects)) {
			if (report.sharedObjects.some(isFileMusl)) return true;
		}
		return false;
	};
	const isMuslFromChildProcess = () => {
		try {
			return __require("child_process").execSync("ldd --version", { encoding: "utf8" }).includes("musl");
		} catch (e) {
			return false;
		}
	};
	function requireNative() {
		if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) try {
			return __require(process.env.NAPI_RS_NATIVE_LIBRARY_PATH);
		} catch (err) {
			loadErrors.push(err);
		}
		else if (process.platform === "android") if (process.arch === "arm64") {
			try {
				return __require("./rolldown-binding.android-arm64.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-android-arm64");
				const bindingPackageVersion = __require("@rolldown/binding-android-arm64/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "arm") {
			try {
				return __require("./rolldown-binding.android-arm-eabi.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-android-arm-eabi");
				const bindingPackageVersion = __require("@rolldown/binding-android-arm-eabi/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on Android ${process.arch}`));
		else if (process.platform === "win32") if (process.arch === "x64") if (process.config?.variables?.shlib_suffix === "dll.a" || process.config?.variables?.node_target_type === "shared_library") {
			try {
				return __require("./rolldown-binding.win32-x64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-win32-x64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-win32-x64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("./rolldown-binding.win32-x64-msvc.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-win32-x64-msvc");
				const bindingPackageVersion = __require("@rolldown/binding-win32-x64-msvc/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "ia32") {
			try {
				return __require("./rolldown-binding.win32-ia32-msvc.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-win32-ia32-msvc");
				const bindingPackageVersion = __require("@rolldown/binding-win32-ia32-msvc/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "arm64") {
			try {
				return __require("./rolldown-binding.win32-arm64-msvc.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-win32-arm64-msvc");
				const bindingPackageVersion = __require("@rolldown/binding-win32-arm64-msvc/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on Windows: ${process.arch}`));
		else if (process.platform === "darwin") {
			try {
				return __require("./rolldown-binding.darwin-universal.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-darwin-universal");
				const bindingPackageVersion = __require("@rolldown/binding-darwin-universal/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
			if (process.arch === "x64") {
				try {
					return __require("./rolldown-binding.darwin-x64.node");
				} catch (e) {
					loadErrors.push(e);
				}
				try {
					const binding = __require("@rolldown/binding-darwin-x64");
					const bindingPackageVersion = __require("@rolldown/binding-darwin-x64/package.json").version;
					if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
					return binding;
				} catch (e) {
					loadErrors.push(e);
				}
			} else if (process.arch === "arm64") {
				try {
					return __require("./rolldown-binding.darwin-arm64.node");
				} catch (e) {
					loadErrors.push(e);
				}
				try {
					const binding = __require("@rolldown/binding-darwin-arm64");
					const bindingPackageVersion = __require("@rolldown/binding-darwin-arm64/package.json").version;
					if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
					return binding;
				} catch (e) {
					loadErrors.push(e);
				}
			} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on macOS: ${process.arch}`));
		} else if (process.platform === "freebsd") if (process.arch === "x64") {
			try {
				return __require("./rolldown-binding.freebsd-x64.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-freebsd-x64");
				const bindingPackageVersion = __require("@rolldown/binding-freebsd-x64/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "arm64") {
			try {
				return __require("./rolldown-binding.freebsd-arm64.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-freebsd-arm64");
				const bindingPackageVersion = __require("@rolldown/binding-freebsd-arm64/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on FreeBSD: ${process.arch}`));
		else if (process.platform === "linux") if (process.arch === "x64") if (isMusl()) {
			try {
				return __require("./rolldown-binding.linux-x64-musl.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-x64-musl");
				const bindingPackageVersion = __require("@rolldown/binding-linux-x64-musl/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("../rolldown-binding.linux-x64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-x64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-x64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "arm64") if (isMusl()) {
			try {
				return __require("./rolldown-binding.linux-arm64-musl.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-arm64-musl");
				const bindingPackageVersion = __require("@rolldown/binding-linux-arm64-musl/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("./rolldown-binding.linux-arm64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-arm64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-arm64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "arm") if (isMusl()) {
			try {
				return __require("./rolldown-binding.linux-arm-musleabihf.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-arm-musleabihf");
				const bindingPackageVersion = __require("@rolldown/binding-linux-arm-musleabihf/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("./rolldown-binding.linux-arm-gnueabihf.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-arm-gnueabihf");
				const bindingPackageVersion = __require("@rolldown/binding-linux-arm-gnueabihf/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "loong64") if (isMusl()) {
			try {
				return __require("./rolldown-binding.linux-loong64-musl.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-loong64-musl");
				const bindingPackageVersion = __require("@rolldown/binding-linux-loong64-musl/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("./rolldown-binding.linux-loong64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-loong64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-loong64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "riscv64") if (isMusl()) {
			try {
				return __require("./rolldown-binding.linux-riscv64-musl.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-riscv64-musl");
				const bindingPackageVersion = __require("@rolldown/binding-linux-riscv64-musl/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else {
			try {
				return __require("./rolldown-binding.linux-riscv64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-riscv64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-riscv64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		}
		else if (process.arch === "ppc64") {
			try {
				return __require("./rolldown-binding.linux-ppc64-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-ppc64-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-ppc64-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "s390x") {
			try {
				return __require("./rolldown-binding.linux-s390x-gnu.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-linux-s390x-gnu");
				const bindingPackageVersion = __require("@rolldown/binding-linux-s390x-gnu/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on Linux: ${process.arch}`));
		else if (process.platform === "openharmony") if (process.arch === "arm64") {
			try {
				return __require("./rolldown-binding.openharmony-arm64.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-openharmony-arm64");
				const bindingPackageVersion = __require("@rolldown/binding-openharmony-arm64/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "x64") {
			try {
				return __require("./rolldown-binding.openharmony-x64.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-openharmony-x64");
				const bindingPackageVersion = __require("@rolldown/binding-openharmony-x64/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else if (process.arch === "arm") {
			try {
				return __require("./rolldown-binding.openharmony-arm.node");
			} catch (e) {
				loadErrors.push(e);
			}
			try {
				const binding = __require("@rolldown/binding-openharmony-arm");
				const bindingPackageVersion = __require("@rolldown/binding-openharmony-arm/package.json").version;
				if (bindingPackageVersion !== "1.0.0-rc.17" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") throw new Error(`Native binding package version mismatch, expected 1.0.0-rc.17 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
				return binding;
			} catch (e) {
				loadErrors.push(e);
			}
		} else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported architecture on OpenHarmony: ${process.arch}`));
		else loadErrors.push(/* @__PURE__ */ new Error(`Unsupported OS: ${process.platform}, architecture: ${process.arch}`));
	}
	nativeBinding = requireNative();
	if (!nativeBinding || process.env.NAPI_RS_FORCE_WASI) {
		let wasiBinding = null;
		let wasiBindingError = null;
		try {
			wasiBinding = __require("../rolldown-binding.wasi.cjs");
			nativeBinding = wasiBinding;
		} catch (err) {
			if (process.env.NAPI_RS_FORCE_WASI) wasiBindingError = err;
		}
		if (!nativeBinding || process.env.NAPI_RS_FORCE_WASI) try {
			wasiBinding = __require("@rolldown/binding-wasm32-wasi");
			nativeBinding = wasiBinding;
		} catch (err) {
			if (process.env.NAPI_RS_FORCE_WASI) {
				if (!wasiBindingError) wasiBindingError = err;
				else wasiBindingError.cause = err;
				loadErrors.push(err);
			}
		}
		if (process.env.NAPI_RS_FORCE_WASI === "error" && !wasiBinding) {
			const error = /* @__PURE__ */ new Error("WASI binding not found and NAPI_RS_FORCE_WASI is set to error");
			error.cause = wasiBindingError;
			throw error;
		}
	}
	if (!nativeBinding && globalThis.process?.versions?.["webcontainer"]) try {
		nativeBinding = require_webcontainer_fallback();
	} catch (err) {
		loadErrors.push(err);
	}
	if (!nativeBinding) {
		if (loadErrors.length > 0) throw new Error("Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.", { cause: loadErrors.reduce((err, cur) => {
			cur.cause = err;
			return cur;
		}) });
		throw new Error(`Failed to load native binding`);
	}
	module.exports = nativeBinding;
	module.exports.minify = nativeBinding.minify;
	module.exports.minifySync = nativeBinding.minifySync;
	module.exports.Severity = nativeBinding.Severity;
	module.exports.ParseResult = nativeBinding.ParseResult;
	module.exports.ExportExportNameKind = nativeBinding.ExportExportNameKind;
	module.exports.ExportImportNameKind = nativeBinding.ExportImportNameKind;
	module.exports.ExportLocalNameKind = nativeBinding.ExportLocalNameKind;
	module.exports.ImportNameKind = nativeBinding.ImportNameKind;
	module.exports.parse = nativeBinding.parse;
	module.exports.parseSync = nativeBinding.parseSync;
	module.exports.rawTransferSupported = nativeBinding.rawTransferSupported;
	module.exports.ResolverFactory = nativeBinding.ResolverFactory;
	module.exports.EnforceExtension = nativeBinding.EnforceExtension;
	module.exports.ModuleType = nativeBinding.ModuleType;
	module.exports.sync = nativeBinding.sync;
	module.exports.HelperMode = nativeBinding.HelperMode;
	module.exports.isolatedDeclaration = nativeBinding.isolatedDeclaration;
	module.exports.isolatedDeclarationSync = nativeBinding.isolatedDeclarationSync;
	module.exports.moduleRunnerTransform = nativeBinding.moduleRunnerTransform;
	module.exports.moduleRunnerTransformSync = nativeBinding.moduleRunnerTransformSync;
	module.exports.transform = nativeBinding.transform;
	module.exports.transformSync = nativeBinding.transformSync;
	module.exports.BindingBundleEndEventData = nativeBinding.BindingBundleEndEventData;
	module.exports.BindingBundleErrorEventData = nativeBinding.BindingBundleErrorEventData;
	module.exports.BindingBundler = nativeBinding.BindingBundler;
	module.exports.BindingCallableBuiltinPlugin = nativeBinding.BindingCallableBuiltinPlugin;
	module.exports.BindingChunkingContext = nativeBinding.BindingChunkingContext;
	module.exports.BindingDecodedMap = nativeBinding.BindingDecodedMap;
	module.exports.BindingDevEngine = nativeBinding.BindingDevEngine;
	module.exports.BindingLoadPluginContext = nativeBinding.BindingLoadPluginContext;
	module.exports.BindingMagicString = nativeBinding.BindingMagicString;
	module.exports.BindingModuleInfo = nativeBinding.BindingModuleInfo;
	module.exports.BindingNormalizedOptions = nativeBinding.BindingNormalizedOptions;
	module.exports.BindingOutputAsset = nativeBinding.BindingOutputAsset;
	module.exports.BindingOutputChunk = nativeBinding.BindingOutputChunk;
	module.exports.BindingPluginContext = nativeBinding.BindingPluginContext;
	module.exports.BindingRenderedChunk = nativeBinding.BindingRenderedChunk;
	module.exports.BindingRenderedChunkMeta = nativeBinding.BindingRenderedChunkMeta;
	module.exports.BindingRenderedModule = nativeBinding.BindingRenderedModule;
	module.exports.BindingSourceMap = nativeBinding.BindingSourceMap;
	module.exports.BindingTransformPluginContext = nativeBinding.BindingTransformPluginContext;
	module.exports.BindingWatcher = nativeBinding.BindingWatcher;
	module.exports.BindingWatcherBundler = nativeBinding.BindingWatcherBundler;
	module.exports.BindingWatcherChangeData = nativeBinding.BindingWatcherChangeData;
	module.exports.BindingWatcherEvent = nativeBinding.BindingWatcherEvent;
	module.exports.ParallelJsPluginRegistry = nativeBinding.ParallelJsPluginRegistry;
	module.exports.ScheduledBuild = nativeBinding.ScheduledBuild;
	module.exports.TraceSubscriberGuard = nativeBinding.TraceSubscriberGuard;
	module.exports.TsconfigCache = nativeBinding.TsconfigCache;
	module.exports.BindingAttachDebugInfo = nativeBinding.BindingAttachDebugInfo;
	module.exports.BindingBuiltinPluginName = nativeBinding.BindingBuiltinPluginName;
	module.exports.BindingChunkModuleOrderBy = nativeBinding.BindingChunkModuleOrderBy;
	module.exports.BindingLogLevel = nativeBinding.BindingLogLevel;
	module.exports.BindingPluginOrder = nativeBinding.BindingPluginOrder;
	module.exports.BindingPropertyReadSideEffects = nativeBinding.BindingPropertyReadSideEffects;
	module.exports.BindingPropertyWriteSideEffects = nativeBinding.BindingPropertyWriteSideEffects;
	module.exports.BindingRebuildStrategy = nativeBinding.BindingRebuildStrategy;
	module.exports.collapseSourcemaps = nativeBinding.collapseSourcemaps;
	module.exports.enhancedTransform = nativeBinding.enhancedTransform;
	module.exports.enhancedTransformSync = nativeBinding.enhancedTransformSync;
	module.exports.FilterTokenKind = nativeBinding.FilterTokenKind;
	module.exports.initTraceSubscriber = nativeBinding.initTraceSubscriber;
	module.exports.registerPlugins = nativeBinding.registerPlugins;
	module.exports.resolveTsconfig = nativeBinding.resolveTsconfig;
	module.exports.shutdownAsyncRuntime = nativeBinding.shutdownAsyncRuntime;
	module.exports.startAsyncRuntime = nativeBinding.startAsyncRuntime;
}));
//#endregion
export { __toESM as n, require_binding as t };
