var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  EventEmitter: { enumerable: true, value: process.EventEmitter },
  //_debugEnd: // skipping
  //_debugPause: // skipping
  //_debugProcess: // skipping
  //_events: // skipping
  //_eventsCount: // skipping
  //_exiting: // skipping
  //_fatalException: // skipping
  //_getActiveHandles: // skipping
  //_getActiveRequests: // skipping
  //_immediateCallback: // skipping
  //_kill: // skipping
  //_linkedBinding: // skipping
  //_maxListeners: // skipping
  //_rawDebug: // skipping
  //_startProfilerIdleNotifier: // skipping
  //_stopProfilerIdleNotifier: // skipping
  //_tickCallback: // skipping
  abort: { enumerable: true, value: bind(process, process.abort) },
  arch: { enumerable: true, get: function() { return process.arch; }, set: function(v) { process.arch = v; } },
  argv: { enumerable: true, get: function() { return process.argv; }, set: function(v) { process.argv = v; } },
  argv0: { enumerable: true, get: function() { return process.argv0; }, set: function(v) { process.argv0 = v; } },
  assert: { enumerable: true, value: bind(process, process.assert) },
  binding: { enumerable: true, value: bind(process, process.binding) },
  chdir: { enumerable: true, value: bind(process, process.chdir) },
  config: { enumerable: true, get: function() { return process.config; }, set: function(v) { process.config = v; } },
  cpuUsage: { enumerable: true, value: bind(process, process.cpuUsage) },
  cwd: { enumerable: true, value: bind(process, process.cwd) },
  debugPort: { enumerable: true, get: function() { return process.debugPort; }, set: function(v) { process.debugPort = v; } },
  dlopen: { enumerable: true, value: bind(process, process.dlopen) },
  domain: { enumerable: true, get: function() { return process.domain; }, set: function(v) { process.domain = v; } },
  emitWarning: { enumerable: true, value: bind(process, process.emitWarning) },
  env: { enumerable: true, get: function() { return process.env; }, set: function(v) { process.env = v; } },
  execArgv: { enumerable: true, get: function() { return process.execArgv; }, set: function(v) { process.execArgv = v; } },
  execPath: { enumerable: true, get: function() { return process.execPath; }, set: function(v) { process.execPath = v; } },
  exit: { enumerable: true, value: bind(process, process.exit) },
  features: { enumerable: true, get: function() { return process.features; }, set: function(v) { process.features = v; } },
  getegid: { enumerable: true, value: bind(process, process.getegid) },
  geteuid: { enumerable: true, value: bind(process, process.geteuid) },
  getgid: { enumerable: true, value: bind(process, process.getgid) },
  getgroups: { enumerable: true, value: bind(process, process.getgroups) },
  getuid: { enumerable: true, value: bind(process, process.getuid) },
  hasUncaughtExceptionCaptureCallback: { enumerable: true, value: bind(process, process.hasUncaughtExceptionCaptureCallback) },
  hrtime: { enumerable: true, value: bind(process, process.hrtime) },
  initgroups: { enumerable: true, value: bind(process, process.initgroups) },
  kill: { enumerable: true, value: bind(process, process.kill) },
  mainModule: { enumerable: true, get: function() { return process.mainModule; }, set: function(v) { process.mainModule = v; } },
  memoryUsage: { enumerable: true, value: bind(process, process.memoryUsage) },
  moduleLoadList: { enumerable: true, get: function() { return process.moduleLoadList; }, set: function(v) { process.moduleLoadList = v; } },
  nextTick: { enumerable: true, value: promisify(process, process.nextTick, 0) },
  openStdin: { enumerable: true, value: bind(process, process.openStdin) },
  pid: { enumerable: true, get: function() { return process.pid; }, set: function(v) { process.pid = v; } },
  platform: { enumerable: true, get: function() { return process.platform; }, set: function(v) { process.platform = v; } },
  ppid: { enumerable: true, get: function() { return process.ppid; }, set: function(v) { process.ppid = v; } },
  reallyExit: { enumerable: true, value: bind(process, process.reallyExit) },
  release: { enumerable: true, get: function() { return process.release; }, set: function(v) { process.release = v; } },
  setUncaughtExceptionCaptureCallback: { enumerable: true, value: bind(process, process.setUncaughtExceptionCaptureCallback) },
  setegid: { enumerable: true, value: bind(process, process.setegid) },
  seteuid: { enumerable: true, value: bind(process, process.seteuid) },
  setgid: { enumerable: true, value: bind(process, process.setgid) },
  setgroups: { enumerable: true, value: bind(process, process.setgroups) },
  setuid: { enumerable: true, value: bind(process, process.setuid) },
  stderr: { enumerable: true, get: function() { return process.stderr; }, set: function(v) { process.stderr = v; } },
  stdin: { enumerable: true, get: function() { return process.stdin; }, set: function(v) { process.stdin = v; } },
  stdout: { enumerable: true, get: function() { return process.stdout; }, set: function(v) { process.stdout = v; } },
  title: { enumerable: true, get: function() { return process.title; }, set: function(v) { process.title = v; } },
  umask: { enumerable: true, value: bind(process, process.umask) },
  uptime: { enumerable: true, value: bind(process, process.uptime) },
  version: { enumerable: true, get: function() { return process.version; }, set: function(v) { process.version = v; } },
  versions: { enumerable: true, get: function() { return process.versions; }, set: function(v) { process.versions = v; } },
});