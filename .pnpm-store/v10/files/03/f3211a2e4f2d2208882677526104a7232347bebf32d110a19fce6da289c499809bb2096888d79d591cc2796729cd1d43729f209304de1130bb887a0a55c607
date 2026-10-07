"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// lib/npm/node-platform.ts
var fs = require("fs");
var os = require("os");
var path = require("path");
var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
var knownWindowsPackages = {
  "win32 arm64 LE": "@esbuild/win32-arm64",
  "win32 ia32 LE": "@esbuild/win32-ia32",
  "win32 x64 LE": "@esbuild/win32-x64"
};
var knownUnixlikePackages = {
  "aix ppc64 BE": "@esbuild/aix-ppc64",
  "android arm64 LE": "@esbuild/android-arm64",
  "darwin arm64 LE": "@esbuild/darwin-arm64",
  "darwin x64 LE": "@esbuild/darwin-x64",
  "freebsd arm64 LE": "@esbuild/freebsd-arm64",
  "freebsd x64 LE": "@esbuild/freebsd-x64",
  "linux arm LE": "@esbuild/linux-arm",
  "linux arm64 LE": "@esbuild/linux-arm64",
  "linux ia32 LE": "@esbuild/linux-ia32",
  "linux mips64el LE": "@esbuild/linux-mips64el",
  "linux ppc64 LE": "@esbuild/linux-ppc64",
  "linux riscv64 LE": "@esbuild/linux-riscv64",
  "linux s390x BE": "@esbuild/linux-s390x",
  "linux x64 LE": "@esbuild/linux-x64",
  "linux loong64 LE": "@esbuild/linux-loong64",
  "netbsd arm64 LE": "@esbuild/netbsd-arm64",
  "netbsd x64 LE": "@esbuild/netbsd-x64",
  "openbsd arm64 LE": "@esbuild/openbsd-arm64",
  "openbsd x64 LE": "@esbuild/openbsd-x64",
  "sunos x64 LE": "@esbuild/sunos-x64"
};
var knownWebAssemblyFallbackPackages = {
  "android arm LE": "@esbuild/android-arm",
  "android x64 LE": "@esbuild/android-x64",
  "openharmony arm64 LE": "@esbuild/openharmony-arm64"
};
function pkgAndSubpathForCurrentPlatform() {
  let pkg;
  let subpath;
  let isWASM = false;
  let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
  if (platformKey in knownWindowsPackages) {
    pkg = knownWindowsPackages[platformKey];
    subpath = "esbuild.exe";
  } else if (platformKey in knownUnixlikePackages) {
    pkg = knownUnixlikePackages[platformKey];
    subpath = "bin/esbuild";
  } else if (platformKey in knownWebAssemblyFallbackPackages) {
    pkg = knownWebAssemblyFallbackPackages[platformKey];
    subpath = "bin/esbuild";
    isWASM = true;
  } else {
    throw new Error(`Unsupported platform: ${platformKey}`);
  }
  return { pkg, subpath, isWASM };
}
function downloadedBinPath(pkg, subpath) {
  const esbuildLibDir = path.dirname(require.resolve("esbuild"));
  return path.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path.basename(subpath)}`);
}

// lib/npm/node-install.ts
var fs2 = require("fs");
var os2 = require("os");
var path2 = require("path");
var zlib = require("zlib");
var https = require("https");
var child_process = require("child_process");
var versionFromPackageJSON = require(path2.join(__dirname, "package.json")).version;
var toPath = path2.join(__dirname, "bin", "esbuild");
var isToPathJS = true;
function validateBinaryVersion(...command) {
  command.push("--version");
  let stdout;
  try {
    stdout = child_process.execFileSync(command.shift(), command, {
      // Without this, this install script strangely crashes with the error
      // "EACCES: permission denied, write" but only on Ubuntu Linux when node is
      // installed from the Snap Store. This is not a problem when you download
      // the official version of node. The problem appears to be that stderr
      // (i.e. file descriptor 2) isn't writable?
      //
      // More info:
      // - https://snapcraft.io/ (what the Snap Store is)
      // - https://nodejs.org/dist/ (download the official version of node)
      // - https://github.com/evanw/esbuild/issues/1711#issuecomment-1027554035
      //
      stdio: "pipe"
    }).toString().trim();
  } catch (err) {
    if (os2.platform() === "darwin" && /_SecTrustEvaluateWithError/.test(err + "")) {
      let os3 = "this version of macOS";
      try {
        os3 = "macOS " + child_process.execFileSync("sw_vers", ["-productVersion"]).toString().trim();
      } catch {
      }
      throw new Error(`The "esbuild" package cannot be installed because ${os3} is too outdated.

The Go compiler (which esbuild relies on) no longer supports ${os3},
which means the "esbuild" binary executable can't be run. You can either:

  * Update your version of macOS to one that the Go compiler supports
  * Use the "esbuild-wasm" package instead of the "esbuild" package
  * Build esbuild yourself using an older version of the Go compiler
`);
    }
    throw err;
  }
  if (stdout !== versionFromPackageJSON) {
    throw new Error(`Expected ${JSON.stringify(versionFromPackageJSON)} but got ${JSON.stringify(stdout)}`);
  }
}
function isYarn() {
  const { npm_config_user_agent } = process.env;
  if (npm_config_user_agent) {
    return /\byarn\//.test(npm_config_user_agent);
  }
  return false;
}
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location)
        return fetch(res.headers.location).then(resolve, reject);
      if (res.statusCode !== 200)
        return reject(new Error(`Server responded with ${res.statusCode}`));
      let chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    }).on("error", reject);
  });
}
function extractFileFromTarGzip(buffer, subpath) {
  try {
    buffer = zlib.unzipSync(buffer);
  } catch (err) {
    throw new Error(`Invalid gzip data in archive: ${err && err.message || err}`);
  }
  let str = (i, n) => String.fromCharCode(...buffer.subarray(i, i + n)).replace(/\0.*$/, "");
  let offset = 0;
  subpath = `package/${subpath}`;
  while (offset < buffer.length) {
    let name = str(offset, 100);
    let size = parseInt(str(offset + 124, 12), 8);
    offset += 512;
    if (!isNaN(size)) {
      if (name === subpath) return buffer.subarray(offset, offset + size);
      offset += size + 511 & ~511;
    }
  }
  throw new Error(`Could not find ${JSON.stringify(subpath)} in archive`);
}
function installUsingNPM(pkg, subpath, binPath) {
  const env = { ...process.env, npm_config_global: void 0 };
  const esbuildLibDir = path2.dirname(require.resolve("esbuild"));
  const installDir = path2.join(esbuildLibDir, "npm-install");
  fs2.mkdirSync(installDir);
  try {
    fs2.writeFileSync(path2.join(installDir, "package.json"), "{}");
    child_process.execSync(
      `npm install --loglevel=error --prefer-offline --no-audit --progress=false ${pkg}@${versionFromPackageJSON}`,
      { cwd: installDir, stdio: "pipe", env }
    );
    const installedBinPath = path2.join(installDir, "node_modules", pkg, subpath);
    fs2.renameSync(installedBinPath, binPath);
  } finally {
    try {
      removeRecursive(installDir);
    } catch {
    }
  }
}
function removeRecursive(dir) {
  for (const entry of fs2.readdirSync(dir)) {
    const entryPath = path2.join(dir, entry);
    let stats;
    try {
      stats = fs2.lstatSync(entryPath);
    } catch {
      continue;
    }
    if (stats.isDirectory()) removeRecursive(entryPath);
    else fs2.unlinkSync(entryPath);
  }
  fs2.rmdirSync(dir);
}
function applyManualBinaryPathOverride(overridePath) {
  const pathString = JSON.stringify(overridePath);
  fs2.writeFileSync(toPath, `#!/usr/bin/env node
require('child_process').execFileSync(${pathString}, process.argv.slice(2), { stdio: 'inherit' });
`);
  const libMain = path2.join(__dirname, "lib", "main.js");
  const code = fs2.readFileSync(libMain, "utf8");
  fs2.writeFileSync(libMain, `var ESBUILD_BINARY_PATH = ${pathString};
${code}`);
}
function maybeOptimizePackage(binPath) {
  const { isWASM } = pkgAndSubpathForCurrentPlatform();
  if (os2.platform() !== "win32" && !isYarn() && !isWASM) {
    const tempPath = path2.join(__dirname, "bin-esbuild");
    try {
      fs2.linkSync(binPath, tempPath);
      fs2.renameSync(tempPath, toPath);
      isToPathJS = false;
      fs2.unlinkSync(tempPath);
    } catch {
    }
  }
}
async function downloadDirectlyFromNPM(pkg, subpath, binPath) {
  const url = `https://registry.npmjs.org/${pkg}/-/${pkg.replace("@esbuild/", "")}-${versionFromPackageJSON}.tgz`;
  console.error(`[esbuild] Trying to download ${JSON.stringify(url)}`);
  try {
    fs2.writeFileSync(binPath, extractFileFromTarGzip(await fetch(url), subpath));
    fs2.chmodSync(binPath, 493);
  } catch (e) {
    console.error(`[esbuild] Failed to download ${JSON.stringify(url)}: ${e && e.message || e}`);
    throw e;
  }
}
async function checkAndPreparePackage() {
  if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
    if (!fs2.existsSync(ESBUILD_BINARY_PATH)) {
      console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
    } else {
      applyManualBinaryPathOverride(ESBUILD_BINARY_PATH);
      return;
    }
  }
  const { pkg, subpath } = pkgAndSubpathForCurrentPlatform();
  let binPath;
  try {
    binPath = require.resolve(`${pkg}/${subpath}`);
  } catch (e) {
    console.error(`[esbuild] Failed to find package "${pkg}" on the file system

This can happen if you use the "--no-optional" flag. The "optionalDependencies"
package.json feature is used by esbuild to install the correct binary executable
for your current platform. This install script will now attempt to work around
this. If that fails, you need to remove the "--no-optional" flag to use esbuild.
`);
    binPath = downloadedBinPath(pkg, subpath);
    try {
      console.error(`[esbuild] Trying to install package "${pkg}" using npm`);
      installUsingNPM(pkg, subpath, binPath);
    } catch (e2) {
      console.error(`[esbuild] Failed to install package "${pkg}" using npm: ${e2 && e2.message || e2}`);
      try {
        await downloadDirectlyFromNPM(pkg, subpath, binPath);
      } catch (e3) {
        throw new Error(`Failed to install package "${pkg}"`);
      }
    }
  }
  maybeOptimizePackage(binPath);
}
checkAndPreparePackage().then(() => {
  if (isToPathJS) {
    validateBinaryVersion(process.execPath, toPath);
  } else {
    validateBinaryVersion(toPath);
  }
});
