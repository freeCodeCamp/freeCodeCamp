"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_7PMGXL6S_exports = {};
__export(chunk_7PMGXL6S_exports, {
  computeLibSSLSpecificPaths: () => computeLibSSLSpecificPaths,
  getArchFromUname: () => getArchFromUname,
  getBinaryTargetForCurrentPlatform: () => getBinaryTargetForCurrentPlatform,
  getBinaryTargetForCurrentPlatformInternal: () => getBinaryTargetForCurrentPlatformInternal,
  getPlatformInfo: () => getPlatformInfo,
  getPlatformInfoMemoized: () => getPlatformInfoMemoized,
  getSSLVersion: () => getSSLVersion,
  getos: () => getos,
  parseDistro: () => parseDistro,
  parseLibSSLVersion: () => parseLibSSLVersion,
  parseOpenSSLVersion: () => parseOpenSSLVersion,
  resolveDistro: () => resolveDistro
});
module.exports = __toCommonJS(chunk_7PMGXL6S_exports);
var import_chunk_FWMN4WME = require("./chunk-FWMN4WME.js");
var import_debug = __toESM(require("@prisma/debug"));
var import_child_process = __toESM(require("child_process"));
var import_promises = __toESM(require("fs/promises"));
var import_os = __toESM(require("os"));
var import_util = require("util");
var t = Symbol.for("@ts-pattern/matcher");
var e = Symbol.for("@ts-pattern/isVariadic");
var n = "@ts-pattern/anonymous-select-key";
var r = (t2) => Boolean(t2 && "object" == typeof t2);
var i = (e2) => e2 && !!e2[t];
var s = (n2, o2, c2) => {
  if (i(n2)) {
    const e2 = n2[t](), { matched: r2, selections: i2 } = e2.match(o2);
    return r2 && i2 && Object.keys(i2).forEach((t2) => c2(t2, i2[t2])), r2;
  }
  if (r(n2)) {
    if (!r(o2)) return false;
    if (Array.isArray(n2)) {
      if (!Array.isArray(o2)) return false;
      let t2 = [], r2 = [], a = [];
      for (const s2 of n2.keys()) {
        const o3 = n2[s2];
        i(o3) && o3[e] ? a.push(o3) : a.length ? r2.push(o3) : t2.push(o3);
      }
      if (a.length) {
        if (a.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (o2.length < t2.length + r2.length) return false;
        const e2 = o2.slice(0, t2.length), n3 = 0 === r2.length ? [] : o2.slice(-r2.length), i2 = o2.slice(t2.length, 0 === r2.length ? Infinity : -r2.length);
        return t2.every((t3, n4) => s(t3, e2[n4], c2)) && r2.every((t3, e3) => s(t3, n3[e3], c2)) && (0 === a.length || s(a[0], i2, c2));
      }
      return n2.length === o2.length && n2.every((t3, e2) => s(t3, o2[e2], c2));
    }
    return Reflect.ownKeys(n2).every((e2) => {
      const r2 = n2[e2];
      return (e2 in o2 || i(a = r2) && "optional" === a[t]().matcherType) && s(r2, o2[e2], c2);
      var a;
    });
  }
  return Object.is(o2, n2);
};
var o = (e2) => {
  var n2, s2, a;
  return r(e2) ? i(e2) ? null != (n2 = null == (s2 = (a = e2[t]()).getSelectionKeys) ? void 0 : s2.call(a)) ? n2 : [] : Array.isArray(e2) ? c(e2, o) : c(Object.values(e2), o) : [];
};
var c = (t2, e2) => t2.reduce((t3, n2) => t3.concat(e2(n2)), []);
function u(t2) {
  return Object.assign(t2, { optional: () => h(t2), and: (e2) => m(t2, e2), or: (e2) => d(t2, e2), select: (e2) => void 0 === e2 ? y(t2) : y(e2, t2) });
}
function h(e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return void 0 === t2 ? (o(e2).forEach((t3) => r2(t3, void 0)), { matched: true, selections: n2 }) : { matched: s(e2, t2, r2), selections: n2 };
  }, getSelectionKeys: () => o(e2), matcherType: "optional" }) });
}
function m(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return { matched: e2.every((e3) => s(e3, t2, r2)), selections: n2 };
  }, getSelectionKeys: () => c(e2, o), matcherType: "and" }) });
}
function d(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return c(e2, o).forEach((t3) => r2(t3, void 0)), { matched: e2.some((e3) => s(e3, t2, r2)), selections: n2 };
  }, getSelectionKeys: () => c(e2, o), matcherType: "or" }) });
}
function p(e2) {
  return { [t]: () => ({ match: (t2) => ({ matched: Boolean(e2(t2)) }) }) };
}
function y(...e2) {
  const r2 = "string" == typeof e2[0] ? e2[0] : void 0, i2 = 2 === e2.length ? e2[1] : "string" == typeof e2[0] ? void 0 : e2[0];
  return u({ [t]: () => ({ match: (t2) => {
    let e3 = { [null != r2 ? r2 : n]: t2 };
    return { matched: void 0 === i2 || s(i2, t2, (t3, n2) => {
      e3[t3] = n2;
    }), selections: e3 };
  }, getSelectionKeys: () => [null != r2 ? r2 : n].concat(void 0 === i2 ? [] : o(i2)) }) });
}
function v(t2) {
  return "number" == typeof t2;
}
function b(t2) {
  return "string" == typeof t2;
}
function w(t2) {
  return "bigint" == typeof t2;
}
var S = u(p(function(t2) {
  return true;
}));
var j = (t2) => Object.assign(u(t2), { startsWith: (e2) => {
  return j(m(t2, (n2 = e2, p((t3) => b(t3) && t3.startsWith(n2)))));
  var n2;
}, endsWith: (e2) => {
  return j(m(t2, (n2 = e2, p((t3) => b(t3) && t3.endsWith(n2)))));
  var n2;
}, minLength: (e2) => j(m(t2, ((t3) => p((e3) => b(e3) && e3.length >= t3))(e2))), length: (e2) => j(m(t2, ((t3) => p((e3) => b(e3) && e3.length === t3))(e2))), maxLength: (e2) => j(m(t2, ((t3) => p((e3) => b(e3) && e3.length <= t3))(e2))), includes: (e2) => {
  return j(m(t2, (n2 = e2, p((t3) => b(t3) && t3.includes(n2)))));
  var n2;
}, regex: (e2) => {
  return j(m(t2, (n2 = e2, p((t3) => b(t3) && Boolean(t3.match(n2))))));
  var n2;
} });
var K = j(p(b));
var x = (t2) => Object.assign(u(t2), { between: (e2, n2) => x(m(t2, ((t3, e3) => p((n3) => v(n3) && t3 <= n3 && e3 >= n3))(e2, n2))), lt: (e2) => x(m(t2, ((t3) => p((e3) => v(e3) && e3 < t3))(e2))), gt: (e2) => x(m(t2, ((t3) => p((e3) => v(e3) && e3 > t3))(e2))), lte: (e2) => x(m(t2, ((t3) => p((e3) => v(e3) && e3 <= t3))(e2))), gte: (e2) => x(m(t2, ((t3) => p((e3) => v(e3) && e3 >= t3))(e2))), int: () => x(m(t2, p((t3) => v(t3) && Number.isInteger(t3)))), finite: () => x(m(t2, p((t3) => v(t3) && Number.isFinite(t3)))), positive: () => x(m(t2, p((t3) => v(t3) && t3 > 0))), negative: () => x(m(t2, p((t3) => v(t3) && t3 < 0))) });
var E = x(p(v));
var A = (t2) => Object.assign(u(t2), { between: (e2, n2) => A(m(t2, ((t3, e3) => p((n3) => w(n3) && t3 <= n3 && e3 >= n3))(e2, n2))), lt: (e2) => A(m(t2, ((t3) => p((e3) => w(e3) && e3 < t3))(e2))), gt: (e2) => A(m(t2, ((t3) => p((e3) => w(e3) && e3 > t3))(e2))), lte: (e2) => A(m(t2, ((t3) => p((e3) => w(e3) && e3 <= t3))(e2))), gte: (e2) => A(m(t2, ((t3) => p((e3) => w(e3) && e3 >= t3))(e2))), positive: () => A(m(t2, p((t3) => w(t3) && t3 > 0))), negative: () => A(m(t2, p((t3) => w(t3) && t3 < 0))) });
var P = A(p(w));
var T = u(p(function(t2) {
  return "boolean" == typeof t2;
}));
var B = u(p(function(t2) {
  return "symbol" == typeof t2;
}));
var _ = u(p(function(t2) {
  return null == t2;
}));
var k = u(p(function(t2) {
  return null != t2;
}));
var W = class extends Error {
  constructor(t2) {
    let e2;
    try {
      e2 = JSON.stringify(t2);
    } catch (n2) {
      e2 = t2;
    }
    super(`Pattern matching error: no pattern matches value ${e2}`), this.input = void 0, this.input = t2;
  }
};
var $ = { matched: false, value: void 0 };
function z(t2) {
  return new I(t2, $);
}
var I = class _I {
  constructor(t2, e2) {
    this.input = void 0, this.state = void 0, this.input = t2, this.state = e2;
  }
  with(...t2) {
    if (this.state.matched) return this;
    const e2 = t2[t2.length - 1], r2 = [t2[0]];
    let i2;
    3 === t2.length && "function" == typeof t2[1] ? i2 = t2[1] : t2.length > 2 && r2.push(...t2.slice(1, t2.length - 1));
    let o2 = false, c2 = {};
    const a = (t3, e3) => {
      o2 = true, c2[t3] = e3;
    }, u2 = !r2.some((t3) => s(t3, this.input, a)) || i2 && !Boolean(i2(this.input)) ? $ : { matched: true, value: e2(o2 ? n in c2 ? c2[n] : c2 : this.input, this.input) };
    return new _I(this.input, u2);
  }
  when(t2, e2) {
    if (this.state.matched) return this;
    const n2 = Boolean(t2(this.input));
    return new _I(this.input, n2 ? { matched: true, value: e2(this.input, this.input) } : $);
  }
  otherwise(t2) {
    return this.state.matched ? this.state.value : t2(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    throw new W(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
};
var exec = (0, import_util.promisify)(import_child_process.default.exec);
var debug = (0, import_debug.default)("prisma:get-platform");
var supportedLibSSLVersions = ["1.0.x", "1.1.x", "3.0.x"];
async function getos() {
  const platform = import_os.default.platform();
  const arch = process.arch;
  if (platform === "freebsd") {
    const version = await getCommandOutput(`freebsd-version`);
    if (version && version.trim().length > 0) {
      const regex = /^(\d+)\.?/;
      const match = regex.exec(version);
      if (match) {
        return {
          platform: "freebsd",
          targetDistro: `freebsd${match[1]}`,
          arch
        };
      }
    }
  }
  if (platform !== "linux") {
    return {
      platform,
      arch
    };
  }
  const distroInfo = await resolveDistro();
  const archFromUname = await getArchFromUname();
  const libsslSpecificPaths = computeLibSSLSpecificPaths({ arch, archFromUname, familyDistro: distroInfo.familyDistro });
  const { libssl } = await getSSLVersion(libsslSpecificPaths);
  return {
    platform: "linux",
    libssl,
    arch,
    archFromUname,
    ...distroInfo
  };
}
function parseDistro(osReleaseInput) {
  const idRegex = /^ID="?([^"\n]*)"?$/im;
  const idLikeRegex = /^ID_LIKE="?([^"\n]*)"?$/im;
  const idMatch = idRegex.exec(osReleaseInput);
  const id = idMatch && idMatch[1] && idMatch[1].toLowerCase() || "";
  const idLikeMatch = idLikeRegex.exec(osReleaseInput);
  const idLike = idLikeMatch && idLikeMatch[1] && idLikeMatch[1].toLowerCase() || "";
  const distroInfo = z({ id, idLike }).with(
    { id: "alpine" },
    ({ id: originalDistro }) => ({
      targetDistro: "musl",
      familyDistro: originalDistro,
      originalDistro
    })
  ).with(
    { id: "raspbian" },
    ({ id: originalDistro }) => ({
      targetDistro: "arm",
      familyDistro: "debian",
      originalDistro
    })
  ).with(
    { id: "nixos" },
    ({ id: originalDistro }) => ({
      targetDistro: "nixos",
      originalDistro,
      familyDistro: "nixos"
    })
  ).with(
    { id: "debian" },
    { id: "ubuntu" },
    ({ id: originalDistro }) => ({
      targetDistro: "debian",
      familyDistro: "debian",
      originalDistro
    })
  ).with(
    { id: "rhel" },
    { id: "centos" },
    { id: "fedora" },
    ({ id: originalDistro }) => ({
      targetDistro: "rhel",
      familyDistro: "rhel",
      originalDistro
    })
  ).when(
    ({ idLike: idLike2 }) => idLike2.includes("debian") || idLike2.includes("ubuntu"),
    ({ id: originalDistro }) => ({
      targetDistro: "debian",
      familyDistro: "debian",
      originalDistro
    })
  ).when(
    ({ idLike: idLike2 }) => id === "arch" || idLike2.includes("arch"),
    ({ id: originalDistro }) => ({
      targetDistro: "debian",
      familyDistro: "arch",
      originalDistro
    })
  ).when(
    ({ idLike: idLike2 }) => idLike2.includes("centos") || idLike2.includes("fedora") || idLike2.includes("rhel") || idLike2.includes("suse"),
    ({ id: originalDistro }) => ({
      targetDistro: "rhel",
      familyDistro: "rhel",
      originalDistro
    })
  ).otherwise(({ id: originalDistro }) => {
    return {
      targetDistro: void 0,
      familyDistro: void 0,
      originalDistro
    };
  });
  debug(`Found distro info:
${JSON.stringify(distroInfo, null, 2)}`);
  return distroInfo;
}
async function resolveDistro() {
  const osReleaseFile = "/etc/os-release";
  try {
    const osReleaseInput = await import_promises.default.readFile(osReleaseFile, { encoding: "utf-8" });
    return parseDistro(osReleaseInput);
  } catch (_2) {
    return {
      targetDistro: void 0,
      familyDistro: void 0,
      originalDistro: void 0
    };
  }
}
function parseOpenSSLVersion(input) {
  const match = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(input);
  if (match) {
    const partialVersion = `${match[1]}.x`;
    return sanitiseSSLVersion(partialVersion);
  }
  return void 0;
}
function parseLibSSLVersion(input) {
  const match = /libssl\.so\.(\d)(\.\d)?/.exec(input);
  if (match) {
    const partialVersion = `${match[1]}${match[2] ?? ".0"}.x`;
    return sanitiseSSLVersion(partialVersion);
  }
  return void 0;
}
function sanitiseSSLVersion(version) {
  const sanitisedVersion = (() => {
    if (isLibssl1x(version)) {
      return version;
    }
    const versionSplit = version.split(".");
    versionSplit[1] = "0";
    return versionSplit.join(".");
  })();
  if (supportedLibSSLVersions.includes(sanitisedVersion)) {
    return sanitisedVersion;
  }
  return void 0;
}
function computeLibSSLSpecificPaths(args) {
  return z(args).with({ familyDistro: "musl" }, () => {
    debug('Trying platform-specific paths for "alpine"');
    return ["/lib", "/usr/lib"];
  }).with({ familyDistro: "debian" }, ({ archFromUname }) => {
    debug('Trying platform-specific paths for "debian" (and "ubuntu")');
    return [`/usr/lib/${archFromUname}-linux-gnu`, `/lib/${archFromUname}-linux-gnu`];
  }).with({ familyDistro: "rhel" }, () => {
    debug('Trying platform-specific paths for "rhel"');
    return ["/lib64", "/usr/lib64"];
  }).otherwise(({ familyDistro, arch, archFromUname }) => {
    debug(`Don't know any platform-specific paths for "${familyDistro}" on ${arch} (${archFromUname})`);
    return [];
  });
}
async function getSSLVersion(libsslSpecificPaths) {
  const excludeLibssl0x = 'grep -v "libssl.so.0"';
  const libsslFilenameFromSpecificPath = await findLibSSLInLocations(libsslSpecificPaths);
  if (libsslFilenameFromSpecificPath) {
    debug(`Found libssl.so file using platform-specific paths: ${libsslFilenameFromSpecificPath}`);
    const libsslVersion = parseLibSSLVersion(libsslFilenameFromSpecificPath);
    debug(`The parsed libssl version is: ${libsslVersion}`);
    if (libsslVersion) {
      return { libssl: libsslVersion, strategy: "libssl-specific-path" };
    }
  }
  debug('Falling back to "ldconfig" and other generic paths');
  let libsslFilename = await getCommandOutput(
    /**
     * The `ldconfig -p` returns the dynamic linker cache paths, where libssl.so files are likely to be included.
     * Each line looks like this:
     * 	libssl.so (libc6,hard-float) => /usr/lib/arm-linux-gnueabihf/libssl.so.1.1
     * But we're only interested in the filename, so we use sed to remove everything before the `=>` separator,
     * and then we remove the path and keep only the filename.
     * The second sed commands uses `|` as a separator because the paths may contain `/`, which would result in the
     * `unknown option to 's'` error (see https://stackoverflow.com/a/9366940/6174476) - which would silently
     * fail with error code 0.
     */
    `ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${excludeLibssl0x}`
  );
  if (!libsslFilename) {
    libsslFilename = await findLibSSLInLocations(["/lib64", "/usr/lib64", "/lib", "/usr/lib"]);
  }
  if (libsslFilename) {
    debug(`Found libssl.so file using "ldconfig" or other generic paths: ${libsslFilename}`);
    const libsslVersion = parseLibSSLVersion(libsslFilename);
    debug(`The parsed libssl version is: ${libsslVersion}`);
    if (libsslVersion) {
      return { libssl: libsslVersion, strategy: "ldconfig" };
    }
  }
  const openSSLVersionLine = await getCommandOutput("openssl version -v");
  if (openSSLVersionLine) {
    debug(`Found openssl binary with version: ${openSSLVersionLine}`);
    const openSSLVersion = parseOpenSSLVersion(openSSLVersionLine);
    debug(`The parsed openssl version is: ${openSSLVersion}`);
    if (openSSLVersion) {
      return { libssl: openSSLVersion, strategy: "openssl-binary" };
    }
  }
  debug(`Couldn't find any version of libssl or OpenSSL in the system`);
  return {};
}
async function findLibSSLInLocations(directories) {
  for (const dir of directories) {
    const libssl = await findLibSSL(dir);
    if (libssl) {
      return libssl;
    }
  }
  return void 0;
}
async function findLibSSL(directory) {
  try {
    const dirContents = await import_promises.default.readdir(directory);
    return dirContents.find((value) => value.startsWith("libssl.so.") && !value.startsWith("libssl.so.0"));
  } catch (e2) {
    if (e2.code === "ENOENT") {
      return void 0;
    }
    throw e2;
  }
}
async function getBinaryTargetForCurrentPlatform() {
  const { binaryTarget } = await getPlatformInfoMemoized();
  return binaryTarget;
}
function isPlatformInfoDefined(args) {
  return args.binaryTarget !== void 0;
}
async function getPlatformInfo() {
  const { memoized: _2, ...rest } = await getPlatformInfoMemoized();
  return rest;
}
var memoizedPlatformWithInfo = {};
async function getPlatformInfoMemoized() {
  if (isPlatformInfoDefined(memoizedPlatformWithInfo)) {
    return Promise.resolve({ ...memoizedPlatformWithInfo, memoized: true });
  }
  const args = await getos();
  const binaryTarget = getBinaryTargetForCurrentPlatformInternal(args);
  memoizedPlatformWithInfo = { ...args, binaryTarget };
  return { ...memoizedPlatformWithInfo, memoized: false };
}
function getBinaryTargetForCurrentPlatformInternal(args) {
  const { platform, arch, archFromUname, libssl, targetDistro, familyDistro, originalDistro } = args;
  if (platform === "linux" && !["x64", "arm64"].includes(arch)) {
    (0, import_chunk_FWMN4WME.warn)(
      `Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${arch}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${archFromUname}".`
    );
  }
  const defaultLibssl = "1.1.x";
  if (platform === "linux" && libssl === void 0) {
    const additionalMessage = z({ familyDistro }).with({ familyDistro: "debian" }, () => {
      return "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.";
    }).otherwise(() => {
      return "Please manually install OpenSSL and try installing Prisma again.";
    });
    (0, import_chunk_FWMN4WME.warn)(
      `Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${defaultLibssl}".
${additionalMessage}`
    );
  }
  const defaultDistro = "debian";
  if (platform === "linux" && targetDistro === void 0) {
    debug(`Distro is "${originalDistro}". Falling back to Prisma engines built for "${defaultDistro}".`);
  }
  if (platform === "darwin" && arch === "arm64") {
    return "darwin-arm64";
  }
  if (platform === "darwin") {
    return "darwin";
  }
  if (platform === "win32") {
    return "windows";
  }
  if (platform === "freebsd") {
    return targetDistro;
  }
  if (platform === "openbsd") {
    return "openbsd";
  }
  if (platform === "netbsd") {
    return "netbsd";
  }
  if (platform === "linux" && targetDistro === "nixos") {
    return "linux-nixos";
  }
  if (platform === "linux" && arch === "arm64") {
    const baseName = targetDistro === "musl" ? "linux-musl-arm64" : "linux-arm64";
    return `${baseName}-openssl-${libssl || defaultLibssl}`;
  }
  if (platform === "linux" && arch === "arm") {
    return `linux-arm-openssl-${libssl || defaultLibssl}`;
  }
  if (platform === "linux" && targetDistro === "musl") {
    const base = "linux-musl";
    if (!libssl) {
      return base;
    }
    if (isLibssl1x(libssl)) {
      return base;
    } else {
      return `${base}-openssl-${libssl}`;
    }
  }
  if (platform === "linux" && targetDistro && libssl) {
    return `${targetDistro}-openssl-${libssl}`;
  }
  if (platform !== "linux") {
    (0, import_chunk_FWMN4WME.warn)(`Prisma detected unknown OS "${platform}" and may not work as expected. Defaulting to "linux".`);
  }
  if (libssl) {
    return `${defaultDistro}-openssl-${libssl}`;
  }
  if (targetDistro) {
    return `${targetDistro}-openssl-${defaultLibssl}`;
  }
  return `${defaultDistro}-openssl-${defaultLibssl}`;
}
async function discardError(runPromise) {
  try {
    return await runPromise();
  } catch (e2) {
    return void 0;
  }
}
function getCommandOutput(command) {
  return discardError(async () => {
    const result = await exec(command);
    debug(`Command "${command}" successfully returned "${result.stdout}"`);
    return result.stdout;
  });
}
async function getArchFromUname() {
  if (typeof import_os.default["machine"] === "function") {
    return import_os.default["machine"]();
  }
  const arch = await getCommandOutput("uname -m");
  return arch?.trim();
}
function isLibssl1x(libssl) {
  return libssl.startsWith("1.");
}
