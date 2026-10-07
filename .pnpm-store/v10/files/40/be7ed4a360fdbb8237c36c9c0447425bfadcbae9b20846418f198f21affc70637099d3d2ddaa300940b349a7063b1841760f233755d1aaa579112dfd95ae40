var bun = true;
var bunModules = {
	bun: bun,
	"bun:ffi": true,
	"bun:jsc": true,
	"bun:sqlite": true,
	"bun:test": true,
	"bun:wrap": true
};

var assert = true;
var async_hooks = true;
var buffer = true;
var child_process = true;
var constants = true;
var cluster = ">= 1.1.25";
var console = true;
var crypto = true;
var dgram = ">= 1.1.6";
var diagnostics_channel = true;
var dns = true;
var domain = true;
var events = true;
var fs = true;
var http = true;
var http2 = ">= 1.0.13";
var https = true;
var module = true;
var net = true;
var os = true;
var path = true;
var perf_hooks = true;
var process = true;
var punycode = true;
var querystring = true;
var readline = true;
var stream = true;
var string_decoder = true;
var sys = true;
var timers = true;
var tls = true;
var tty = true;
var url = true;
var util = true;
var v8 = true;
var vm = true;
var wasi = true;
var worker_threads = true;
var zlib = true;
var implementedNodeModules = {
	assert: assert,
	"assert/strict": true,
	"node:assert": true,
	"node:assert/strict": true,
	async_hooks: async_hooks,
	"node:async_hooks": true,
	"async_hooks/async_context": true,
	buffer: buffer,
	"node:buffer": true,
	child_process: child_process,
	"node:child_process": true,
	constants: constants,
	"node:constants": true,
	cluster: cluster,
	"node:cluster": ">= 1.1.25",
	console: console,
	"node:console": true,
	crypto: crypto,
	"node:crypto": true,
	dgram: dgram,
	"node:dgram": ">= 1.1.6",
	diagnostics_channel: diagnostics_channel,
	"node:diagnostics_channel": true,
	dns: dns,
	"dns/promises": true,
	"node:dns": true,
	"node:dns/promises": true,
	domain: domain,
	"node:domain": true,
	events: events,
	"node:events": true,
	fs: fs,
	"fs/promises": true,
	"node:fs": true,
	"node:fs/promises": true,
	http: http,
	"node:http": true,
	http2: http2,
	"node:http2": ">= 1.0.13",
	https: https,
	"node:https": true,
	module: module,
	"node:module": true,
	net: net,
	"node:net": true,
	os: os,
	"node:os": true,
	path: path,
	"path/posix": true,
	"path/win32": true,
	"node:path": true,
	"node:path/posix": true,
	"node:path/win32": true,
	perf_hooks: perf_hooks,
	"node:perf_hooks": true,
	process: process,
	"node:process": true,
	punycode: punycode,
	"node:punycode": true,
	querystring: querystring,
	"node:querystring": true,
	readline: readline,
	"readline/promises": true,
	"node:readline": true,
	"node:readline/promises": true,
	stream: stream,
	"stream/consumers": true,
	"stream/promises": true,
	"stream/web": true,
	"node:stream": true,
	"node:stream/consumers": true,
	"node:stream/promises": true,
	"node:stream/web": true,
	string_decoder: string_decoder,
	"node:string_decoder": true,
	sys: sys,
	"node:sys": true,
	timers: timers,
	"timers/promises": true,
	"node:timers": true,
	"node:timers/promises": true,
	tls: tls,
	"node:tls": true,
	tty: tty,
	"node:tty": true,
	url: url,
	"node:url": true,
	util: util,
	"util/types": true,
	"node:util": true,
	"node:util/types": true,
	v8: v8,
	"node:v8": true,
	vm: vm,
	"node:vm": true,
	wasi: wasi,
	"node:wasi": true,
	worker_threads: worker_threads,
	"node:worker_threads": true,
	zlib: zlib,
	"node:zlib": true,
	"node:test": ">=1.2.6"
};

type SemVerBaseStringified = `${bigint}.${bigint}.${bigint}`;
type SemVerStringifiedWithReleaseName = `${SemVerBaseStringified}-${string}`;
type SemVerStringified = SemVerBaseStringified | SemVerStringifiedWithReleaseName;
type BunVersion = SemVerStringified | "latest";
type Modules = Record<string, string | boolean>;
declare const MINIMUM_BUN_VERSION = "1.0.0";
declare function checkModule(moduleName: string, modules: Modules, bunVersion: BunVersion): boolean;
declare function getModules(modules: Modules, bunVersion?: BunVersion): string[];

export { type BunVersion, MINIMUM_BUN_VERSION, type Modules, bunModules as bundledBunModules, checkModule, getModules, implementedNodeModules };
