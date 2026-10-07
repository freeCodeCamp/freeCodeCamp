"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalNpmRegistry = getGlobalNpmRegistry;
exports.removeRecursive = removeRecursive;
exports.downloadedNodePath = downloadedNodePath;
exports.getNapiInfoFromPackageJson = getNapiInfoFromPackageJson;
exports.getNapiNativeTarget = getNapiNativeTarget;
exports.getNapiNativeTargets = getNapiNativeTargets;
exports.getErrorMessage = getErrorMessage;
exports.errorLog = errorLog;
exports.errorMessage = errorMessage;
const node_child_process_1 = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const constants_js_1 = require("./constants.js");
const target_js_1 = require("./target.js");
function getGlobalNpmRegistry() {
    try {
        const registry = (0, node_child_process_1.execSync)('npm config get registry', {
            encoding: 'utf8',
        }).trim();
        return registry.endsWith('/') ? registry : `${registry}/`;
    }
    catch {
        return constants_js_1.DEFAULT_NPM_REGISTRY;
    }
}
function removeRecursive(dir) {
    for (const entry of fs.readdirSync(dir)) {
        const entryPath = path.join(dir, entry);
        let stats;
        try {
            stats = fs.lstatSync(entryPath);
        }
        catch {
            continue;
        }
        if (stats.isDirectory()) {
            removeRecursive(entryPath);
        }
        else {
            fs.unlinkSync(entryPath);
        }
    }
    fs.rmdirSync(dir);
}
function downloadedNodePath(name, subpath) {
    const pkgLibDir = path.dirname(require.resolve(name + '/package.json'));
    return path.join(pkgLibDir, path.basename(subpath));
}
function getNapiInfoFromPackageJson(packageJson, checkVersion) {
    const { name, napi: napi_, optionalDependencies } = packageJson;
    const targets = napi_?.targets ?? napi_?.triples?.additional;
    if (!targets?.length) {
        throw new Error(errorMessage(`No \`napi.targets\` nor \`napi.triples.additional\` field found in \`${name}\`'s \`package.json\`. Please ensure the package is built with NAPI support.`));
    }
    const napi = napi_;
    napi.binaryName ?? (napi.binaryName = napi.name);
    napi.packageName ?? (napi.packageName = napi.package?.name ?? name);
    napi.targets = targets;
    if (!optionalDependencies) {
        return { napi };
    }
    let version;
    for (const target of targets) {
        const { platformArchABI } = (0, target_js_1.parseTriple)(target);
        const pkg = `${napi.packageName}-${platformArchABI}`;
        const packageVersion = optionalDependencies[pkg];
        if (!packageVersion) {
            continue;
        }
        if (version) {
            if (checkVersion && version !== packageVersion) {
                throw new Error(errorMessage(`Inconsistent package versions found for \`${name}\` with \`${pkg}\` v${packageVersion} vs v${version}.`));
            }
        }
        else if (packageVersion) {
            version = packageVersion;
            if (!checkVersion) {
                break;
            }
        }
    }
    return { napi, version };
}
function isMusl() {
    let musl = false;
    if (process.platform === 'linux') {
        musl = isMuslFromFilesystem();
        if (musl === null) {
            musl = isMuslFromReport();
        }
        if (musl === null) {
            musl = isMuslFromChildProcess();
        }
    }
    return musl;
}
const isFileMusl = (f) => f.includes('libc.musl-') || f.includes('ld-musl-');
function isMuslFromFilesystem() {
    try {
        return fs.readFileSync('/usr/bin/ldd', 'utf8').includes('musl');
    }
    catch {
        return null;
    }
}
function isMuslFromReport() {
    let report = null;
    if (typeof process.report.getReport === 'function') {
        process.report.excludeNetwork = true;
        report = process.report.getReport();
    }
    if (!report) {
        return null;
    }
    if ('header' in report &&
        report.header != null &&
        typeof report.header === 'object' &&
        'glibcVersionRuntime' in report.header &&
        report.header.glibcVersionRuntime) {
        return false;
    }
    return ('sharedObjects' in report &&
        Array.isArray(report.sharedObjects) &&
        report.sharedObjects.some(isFileMusl));
}
function isMuslFromChildProcess() {
    try {
        return (0, node_child_process_1.execSync)('ldd --version', { encoding: 'utf8' }).includes('musl');
    }
    catch {
        return false;
    }
}
function getNapiNativeTarget() {
    switch (process.platform) {
        case 'android': {
            if (process.arch === 'arm64') {
                return 'android-arm64';
            }
            if (process.arch === 'arm') {
                return 'android-arm-eabi';
            }
            break;
        }
        case 'win32': {
            if (process.arch === 'x64') {
                return 'win32-x64-msvc';
            }
            if (process.arch === 'ia32') {
                return 'win32-ia32-msvc';
            }
            if (process.arch === 'arm64') {
                return 'win32-arm64-msvc';
            }
            break;
        }
        case 'darwin': {
            const targets = ['darwin-universal'];
            if (process.arch === 'x64') {
                targets.push('darwin-x64');
            }
            else if (process.arch === 'arm64') {
                targets.push('darwin-arm64');
            }
            return targets;
        }
        case 'freebsd': {
            if (process.arch === 'x64') {
                return 'freebsd-x64';
            }
            if (process.arch === 'arm64') {
                return 'freebsd-arm64';
            }
            break;
        }
        case 'linux': {
            if (process.arch === 'x64') {
                if (isMusl()) {
                    return 'linux-x64-musl';
                }
                return 'linux-x64-gnu';
            }
            if (process.arch === 'arm64') {
                if (isMusl()) {
                    return 'linux-arm64-musl';
                }
                return 'linux-arm64-gnu';
            }
            if (process.arch === 'arm') {
                if (isMusl()) {
                    return 'linux-arm-musleabihf';
                }
                return 'linux-arm-gnueabihf';
            }
            if (process.arch === 'riscv64') {
                if (isMusl()) {
                    return 'linux-riscv64-musl';
                }
                return 'linux-riscv64-gnu';
            }
            if (process.arch === 'ppc64') {
                return 'linux-ppc64-gnu';
            }
            if (process.arch === 's390x') {
                return 'linux-s390x-gnu';
            }
            break;
        }
    }
    return [];
}
const WASI_TARGET = 'wasm32-wasi';
function getNapiNativeTargets() {
    if (process.versions.webcontainer) {
        return [WASI_TARGET];
    }
    const targets = getNapiNativeTarget();
    if (Array.isArray(targets)) {
        return [...targets, WASI_TARGET];
    }
    return [targets, WASI_TARGET];
}
function getErrorMessage(err) {
    return err?.message || String(err);
}
function errorLog(message, ...args) {
    console.error(`${constants_js_1.LOG_PREFIX}${message}`, ...args);
}
function errorMessage(message, extra) {
    return `${constants_js_1.LOG_PREFIX}${message}` + (extra ? ': ' + extra : '');
}
//# sourceMappingURL=helpers.js.map