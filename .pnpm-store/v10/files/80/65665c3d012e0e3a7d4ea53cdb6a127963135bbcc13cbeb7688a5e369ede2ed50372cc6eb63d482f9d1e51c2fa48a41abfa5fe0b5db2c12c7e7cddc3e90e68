"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getDebugInfo = void 0;
var _path = _interopRequireDefault(require("path"));
var _tmp = _interopRequireDefault(require("tmp"));
var _execa = _interopRequireDefault(require("execa"));
var _detectPortInUseAndPrompt = require("../utils/detect-port-in-use-and-prompt");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _signalExit = _interopRequireDefault(require("signal-exit"));
var _uuid = require("gatsby-core-utils/uuid");
var _path2 = require("gatsby-core-utils/path");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _getSslCert = require("../utils/get-ssl-cert");
// NOTE(@mxstbr): Do not use the reporter in this file, as that has side-effects on import which break structured logging

// Adapted from https://stackoverflow.com/a/16060619
const requireUncached = file => {
  try {
    delete require.cache[require.resolve(file)];
  } catch (e) {
    return null;
  }
  try {
    return require(file);
  } catch (e) {
    return null;
  }
};

// Return a user-supplied port otherwise the default Node.js debugging port
const getDebugPort = port => port !== null && port !== void 0 ? port : 9229;
const getDebugInfo = program => {
  if (Object.prototype.hasOwnProperty.call(program, `inspect`)) {
    return {
      port: getDebugPort(program.inspect),
      break: false
    };
  } else if (Object.prototype.hasOwnProperty.call(program, `inspectBrk`)) {
    return {
      port: getDebugPort(program.inspectBrk),
      break: true
    };
  } else {
    return null;
  }
};
exports.getDebugInfo = getDebugInfo;
class ControllableScript {
  constructor(script, debugInfo) {
    this.script = script;
    this.debugInfo = debugInfo;
  }
  start() {
    var _global$__GATSBY;
    const args = [];
    const dotCachePath = _path.default.join(process.cwd(), `.cache`);
    _fsExtra.default.mkdirpSync(dotCachePath);
    const tmpFileName = _tmp.default.tmpNameSync({
      tmpdir: dotCachePath
    });
    _fsExtra.default.outputFileSync(tmpFileName, this.script);
    this.isRunning = true;
    // Passing --inspect isn't necessary for the child process to launch a port but it allows some editors to automatically attach
    if (this.debugInfo) {
      if (this.debugInfo.break) {
        args.push(`--inspect-brk=${this.debugInfo.port}`);
      } else {
        args.push(`--inspect=${this.debugInfo.port}`);
      }
    }
    this.process = _execa.default.node(tmpFileName, args, {
      env: {
        ...process.env,
        GATSBY_NODE_GLOBALS: JSON.stringify((_global$__GATSBY = global.__GATSBY) !== null && _global$__GATSBY !== void 0 ? _global$__GATSBY : {})
      },
      stdio: [`inherit`, `inherit`, `inherit`, `ipc`]
    });
  }
  async stop(signal = null, code) {
    if (!this.process) {
      throw new Error(`Trying to stop the process before starting it`);
    }
    this.isRunning = false;
    try {
      if (signal) {
        this.process.kill(signal);
      } else {
        this.process.send({
          type: `COMMAND`,
          action: {
            type: `EXIT`,
            payload: code
          }
        }, () => {
          // The try/catch won't suffice for this process.send
          // So use the callback to manually catch the Error, otherwise it'll be thrown
          // Ref: https://nodejs.org/api/child_process.html#child_process_subprocess_send_message_sendhandle_options_callback
        });
      }
    } catch (err) {
      // Ignore error if process has crashed or already quit.
      // Ref: https://github.com/gatsbyjs/gatsby/issues/28011#issuecomment-877302917
    }
    return new Promise(resolve => {
      if (!this.process) {
        throw new Error(`Trying to stop the process before starting it`);
      }
      this.process.on(`exit`, () => {
        if (this.process) {
          this.process.removeAllListeners();
        }
        this.process = undefined;
        resolve();
      });
    });
  }
  onMessage(callback) {
    if (!this.process) {
      throw new Error(`Trying to attach message handler before process started`);
    }
    this.process.on(`message`, callback);
  }
  onExit(callback) {
    if (!this.process) {
      throw new Error(`Trying to attach exit handler before process started`);
    }
    this.process.on(`exit`, callback);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  send(msg) {
    if (!this.process) {
      throw new Error(`Trying to send a message before process started`);
    }
    this.process.send(msg);
  }
}
let isRestarting;

// checks if a string is a valid ip
const REGEX_IP = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/;
module.exports = async program => {
  global.__GATSBY = {
    buildId: (0, _uuid.v4)(),
    root: program.directory
  };

  // In some cases, port can actually be a string. But our codebase is expecting it to be a number.
  // So we want to early just force it to a number to ensure we always act on a correct type.
  program.port = parseInt(program.port + ``, 10);
  const developProcessPath = (0, _path2.slash)(require.resolve(`./develop-process`));
  try {
    program.port = await (0, _detectPortInUseAndPrompt.detectPortInUseAndPrompt)(program.port, program.host);
  } catch (e) {
    if (e.message === `USER_REJECTED`) {
      process.exit(0);
    }
    throw e;
  }

  // Run the actual develop server on a random port, and the proxy on the program port
  // which users will access
  const debugInfo = getDebugInfo(program);
  const rootFile = file => _path.default.join(program.directory, file);

  // Require gatsby-config.js before accessing process.env, to enable the user to change
  // environment variables from the config file.
  requireUncached(rootFile(`gatsby-config`));
  const developPort = program.port;

  // In order to enable custom ssl, --cert-file --key-file and -https flags must all be
  // used together
  if ((program[`cert-file`] || program[`key-file`]) && !program.https) {
    _reporter.default.panic(`for custom ssl --https, --cert-file, and --key-file must be used together`);
  }

  // Check if https is enabled, then create or get SSL cert.
  // Certs are named 'devcert' and issued to the host.
  // NOTE(@mxstbr): We mutate program.ssl _after_ passing it
  // to the develop process controllable script above because
  // that would mean we double SSL browser => proxy => server
  if (program.https) {
    const sslHost = program.host === `0.0.0.0` || program.host === `::` ? `localhost` : program.host;
    if (REGEX_IP.test(sslHost)) {
      _reporter.default.panic(`You're trying to generate a ssl certificate for an IP (${sslHost}). Please use a hostname instead.`);
    }
    const ssl = await (0, _getSslCert.getSslCert)({
      name: sslHost,
      caFile: program[`ca-file`],
      certFile: program[`cert-file`],
      keyFile: program[`key-file`],
      directory: program.directory
    });
    if (ssl) {
      program.ssl = ssl;
    }
  }
  const developProcess = new ControllableScript(`
    const cmd = require(${JSON.stringify(developProcessPath)});
    const args = ${JSON.stringify({
    ...program,
    port: developPort,
    // TODO(v5): remove
    proxyPort: developPort,
    debugInfo
  })};
    cmd(args);
  `, debugInfo);
  const handleChildProcessIPC = msg => {
    if (msg.type === `HEARTBEAT`) return;
    if (process.send) {
      // Forward IPC
      process.send(msg);
    }
  };
  developProcess.start();
  developProcess.onMessage(handleChildProcessIPC);

  // Plugins can call `process.exit` which would be sent to `develop-process` (child process)
  // This needs to be propagated back to the parent process
  developProcess.onExit((code, signal) => {
    if (isRestarting) return;
    if (signal !== null) {
      process.kill(process.pid, signal);
      return;
    }
    if (code !== null) {
      process.exit(code);
    }

    // This should not happen:
    // https://nodejs.org/api/child_process.html#child_process_event_exit
    // The 'exit' event is emitted after the child process ends. If the process
    // exited, code is the final exit code of the process, otherwise null.
    // If the process terminated due to receipt of a signal, signal is the
    // string name of the signal, otherwise null. One of the two will always be
    // non - null.
    //
    // but just in case let do non-zero exit, because we are in situation
    // we don't expect to be possible
    process.exit(1);
  });

  // route ipc messaging to the original develop process
  process.on(`message`, msg => {
    developProcess.send(msg);
  });
  process.on(`SIGINT`, async () => {
    await shutdownServices({
      developProcess
    }, `SIGINT`);
    process.exit(0);
  });
  process.on(`SIGTERM`, async () => {
    await shutdownServices({
      developProcess
    }, `SIGTERM`);
    process.exit(0);
  });
  (0, _signalExit.default)((_code, signal) => {
    shutdownServices({
      developProcess
    }, signal);
  });
};
function shutdownServices({
  developProcess
}, signal) {
  const services = [developProcess.stop(signal)];
  return Promise.all(services).catch(() => {}).then(() => {});
}
//# sourceMappingURL=develop.js.map