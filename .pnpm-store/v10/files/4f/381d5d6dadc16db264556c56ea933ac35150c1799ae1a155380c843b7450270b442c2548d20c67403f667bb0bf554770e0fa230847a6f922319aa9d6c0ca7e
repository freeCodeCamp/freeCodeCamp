"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNpm = isNpm;
exports.isPnp = isPnp;
exports.checkAndPreparePackage = checkAndPreparePackage;
const node_child_process_1 = require("node:child_process");
const fs = require("node:fs");
const https = require("node:https");
const path = require("node:path");
const zlib = require("node:zlib");
const constants_js_1 = require("./constants.js");
const helpers_js_1 = require("./helpers.js");
function fetch(url) {
    return new Promise((resolve, reject) => {
        https
            .get(url, res => {
            if ((res.statusCode === 301 || res.statusCode === 302) &&
                res.headers.location) {
                fetch(res.headers.location).then(resolve, reject);
                return;
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Server responded with ${res.statusCode}`));
            }
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
        })
            .on('error', reject);
    });
}
function extractFileFromTarGzip(buffer, subpath) {
    try {
        buffer = zlib.unzipSync(buffer);
    }
    catch (err) {
        throw new Error((0, helpers_js_1.errorMessage)(`Invalid gzip data in archive`, (0, helpers_js_1.getErrorMessage)(err)));
    }
    const str = (i, n) => String.fromCodePoint(...buffer.subarray(i, i + n)).replace(/\0.*$/, '');
    let offset = 0;
    subpath = `package/${subpath}`;
    while (offset < buffer.length) {
        const name = str(offset, 100);
        const size = Number.parseInt(str(offset + 124, 12), 8);
        offset += 512;
        if (!Number.isNaN(size)) {
            if (name === subpath) {
                return buffer.subarray(offset, offset + size);
            }
            offset += (size + 511) & ~511;
        }
    }
    throw new Error((0, helpers_js_1.errorMessage)(`Could not find \`${subpath}\` in archive`));
}
function isNpm() {
    return process.env.npm_config_user_agent?.startsWith('npm/');
}
function isPnp() {
    return !!process.versions.pnp;
}
function installUsingNPM(hostPkg, pkg, version, target, subpath, nodePath) {
    const isWasm32Wasi = target === constants_js_1.WASM32_WASI;
    const env = { ...process.env, npm_config_global: undefined };
    const pkgDir = path.dirname(require.resolve(hostPkg + `/${constants_js_1.PACKAGE_JSON}`));
    const installDir = path.join(pkgDir, 'npm-install');
    try {
        fs.mkdirSync(installDir, { recursive: true });
    }
    catch (err) {
        const error = err;
        if (error.code === 'EROFS') {
            (0, helpers_js_1.errorLog)(`Failed to create the temporary directory on read-only location: ${error.message}`);
            (0, helpers_js_1.errorLog)(`You have to install \`${pkg}\` manually in this case.`);
            return;
        }
        throw err;
    }
    try {
        const packageJsonPath = path.join(installDir, constants_js_1.PACKAGE_JSON);
        fs.writeFileSync(packageJsonPath, '{}');
        (0, node_child_process_1.execSync)(`npm install --loglevel=error --prefer-offline --no-audit --progress=false${isWasm32Wasi ? ` --cpu=${constants_js_1.WASM32} --force` : ''} ${pkg}@${version}`, { cwd: installDir, stdio: 'pipe', env });
        if (isWasm32Wasi) {
            fs.unlinkSync(packageJsonPath);
        }
        const nodeModulesDir = path.join(installDir, 'node_modules');
        try {
            if (isWasm32Wasi) {
                const newNodeModulesDir = path.resolve(installDir, '../node_modules');
                const dirs = fs.readdirSync(nodeModulesDir);
                for (const dir of dirs) {
                    if (dir.startsWith('@')) {
                        const newPath = path.join(newNodeModulesDir, dir);
                        fs.mkdirSync(newPath, { recursive: true });
                        const subdir = path.join(nodeModulesDir, dir);
                        const nestedDirs = fs.readdirSync(subdir);
                        for (const nestedDir of nestedDirs) {
                            try {
                                fs.renameSync(path.join(subdir, nestedDir), path.join(newPath, nestedDir));
                            }
                            catch {
                            }
                        }
                    }
                    else {
                        try {
                            fs.renameSync(path.join(nodeModulesDir, dir), path.join(newNodeModulesDir, dir));
                        }
                        catch {
                        }
                    }
                }
            }
            else {
                const newPath = path.resolve(pkgDir, hostPkg
                    .split('/')
                    .map(() => '..')
                    .join('/'), pkg);
                fs.mkdirSync(newPath, { recursive: true });
                fs.renameSync(path.join(nodeModulesDir, pkg), newPath);
            }
        }
        catch {
            fs.renameSync(path.join(nodeModulesDir, pkg, subpath), nodePath);
        }
    }
    finally {
        try {
            (0, helpers_js_1.removeRecursive)(installDir);
        }
        catch {
        }
    }
}
async function downloadDirectlyFromNPM(pkg, version, subpath, nodePath) {
    const url = `${(0, helpers_js_1.getGlobalNpmRegistry)()}${pkg}/-/${pkg.startsWith('@') ? pkg.split('/')[1] : pkg}-${version}.tgz`;
    (0, helpers_js_1.errorLog)(`Trying to download ${JSON.stringify(url)}`);
    try {
        fs.writeFileSync(nodePath, extractFileFromTarGzip(await fetch(url), subpath));
    }
    catch (err) {
        (0, helpers_js_1.errorLog)(`Failed to download ${JSON.stringify(url)}`, (0, helpers_js_1.getErrorMessage)(err));
        throw err;
    }
}
async function checkAndPreparePackage(packageNameOrPackageJson, versionOrCheckVersion, checkVersion) {
    let packageJson;
    if (typeof packageNameOrPackageJson === 'string') {
        try {
            packageJson = require(packageNameOrPackageJson + `/${constants_js_1.PACKAGE_JSON}`);
        }
        catch {
            if (typeof versionOrCheckVersion !== 'string') {
                throw new TypeError((0, helpers_js_1.errorMessage)(`Failed to load \`${constants_js_1.PACKAGE_JSON}\` from \`${packageNameOrPackageJson}\`, please provide a version.`));
            }
            const pkg = packageNameOrPackageJson;
            const packageJsonBuffer = await fetch(`${(0, helpers_js_1.getGlobalNpmRegistry)()}${pkg}/${versionOrCheckVersion}`);
            packageJson = JSON.parse(packageJsonBuffer.toString('utf8'));
        }
    }
    else {
        packageJson = packageNameOrPackageJson;
        if (checkVersion === undefined &&
            typeof versionOrCheckVersion === 'boolean') {
            checkVersion = versionOrCheckVersion;
        }
    }
    const { name, version: pkgVersion, optionalDependencies } = packageJson;
    const { napi, version = pkgVersion } = (0, helpers_js_1.getNapiInfoFromPackageJson)(packageJson, checkVersion);
    if (checkVersion && pkgVersion !== version) {
        throw new Error((0, helpers_js_1.errorMessage)(`Inconsistent package versions found for \`${name}\` v${pkgVersion} vs \`${napi.packageName}\` v${version}.`));
    }
    const targets = (0, helpers_js_1.getNapiNativeTargets)();
    for (const target of targets) {
        const pkg = `${napi.packageName}-${target}`;
        if (!optionalDependencies?.[pkg]) {
            continue;
        }
        const isWasm32Wasi = target === constants_js_1.WASM32_WASI;
        const binaryPrefix = napi.binaryName ? `${napi.binaryName}.` : '';
        const subpath = `${binaryPrefix}${target}.${isWasm32Wasi ? 'wasm' : 'node'}`;
        try {
            require.resolve(`${pkg}/${subpath}`);
            break;
        }
        catch {
            try {
                require.resolve(`${name}/${subpath}`);
                break;
            }
            catch { }
            if (isPnp()) {
                if (isWasm32Wasi) {
                    try {
                        (0, node_child_process_1.execSync)(`yarn add -D ${pkg}@${version}`);
                    }
                    catch (err) {
                        (0, helpers_js_1.errorLog)(`Failed to install package \`${pkg}\` automatically in the yarn P'n'P environment`, (0, helpers_js_1.getErrorMessage)(err));
                        (0, helpers_js_1.errorLog)("You'll have to install it manually in this case.");
                    }
                }
                return;
            }
            if (!isNpm()) {
                (0, helpers_js_1.errorLog)(`Failed to find package "${pkg}" on the file system

This can happen if you use the "--no-optional" flag. The "optionalDependencies"
${constants_js_1.PACKAGE_JSON} feature is used by ${name} to install the correct napi binary
for your current platform. This install script will now attempt to work around
this. If that fails, you need to remove the "--no-optional" flag to use ${name}.
`);
            }
            let nodePath;
            try {
                nodePath = (0, helpers_js_1.downloadedNodePath)(name, subpath);
            }
            catch {
                const nodeModulesDir = path.resolve(require.resolve(constants_js_1.meta.name + `/${constants_js_1.PACKAGE_JSON}`), '../..');
                nodePath = path.join(nodeModulesDir, name, subpath);
                fs.mkdirSync(path.dirname(nodePath), { recursive: true });
            }
            try {
                (0, helpers_js_1.errorLog)(`Trying to install package "${pkg}" using npm`);
                installUsingNPM(name, pkg, version, target, subpath, nodePath);
                break;
            }
            catch (err) {
                (0, helpers_js_1.errorLog)(`Failed to install package "${pkg}" using npm`, (0, helpers_js_1.getErrorMessage)(err));
                try {
                    await downloadDirectlyFromNPM(pkg, version, subpath, nodePath);
                    break;
                }
                catch (err) {
                    throw new Error((0, helpers_js_1.errorMessage)(`Failed to install package "${pkg}"`, (0, helpers_js_1.getErrorMessage)(err)));
                }
            }
        }
    }
}
//# sourceMappingURL=index.js.map