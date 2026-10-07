Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const INTEGRATION_NAME = "FileSystem";
const fsIntegration = core.defineIntegration(
  (options = {}) => {
    return {
      name: INTEGRATION_NAME,
      setupOnce() {
        nodeCore.generateInstrumentOnce(
          INTEGRATION_NAME,
          () => new instrumentation.FsInstrumentation({
            requireParentSpan: true,
            endHook(functionName, { args, span, error }) {
              span.updateName(`fs.${functionName}`);
              span.setAttributes({
                [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "file",
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.file.fs"
              });
              if (options.recordErrorMessagesAsSpanAttributes) {
                if (typeof args[0] === "string" && FS_OPERATIONS_WITH_PATH_ARG.includes(functionName)) {
                  span.setAttribute("path_argument", args[0]);
                } else if (typeof args[0] === "string" && typeof args[1] === "string" && FS_OPERATIONS_WITH_TARGET_PATH.includes(functionName)) {
                  span.setAttribute("target_argument", args[0]);
                  span.setAttribute("path_argument", args[1]);
                } else if (typeof args[0] === "string" && FS_OPERATIONS_WITH_PREFIX.includes(functionName)) {
                  span.setAttribute("prefix_argument", args[0]);
                } else if (typeof args[0] === "string" && typeof args[1] === "string" && FS_OPERATIONS_WITH_EXISTING_PATH_NEW_PATH.includes(functionName)) {
                  span.setAttribute("existing_path_argument", args[0]);
                  span.setAttribute("new_path_argument", args[1]);
                } else if (typeof args[0] === "string" && typeof args[1] === "string" && FS_OPERATIONS_WITH_SRC_DEST.includes(functionName)) {
                  span.setAttribute("src_argument", args[0]);
                  span.setAttribute("dest_argument", args[1]);
                } else if (typeof args[0] === "string" && typeof args[1] === "string" && FS_OPERATIONS_WITH_OLD_PATH_NEW_PATH.includes(functionName)) {
                  span.setAttribute("old_path_argument", args[0]);
                  span.setAttribute("new_path_argument", args[1]);
                }
              }
              if (error && options.recordErrorMessagesAsSpanAttributes) {
                span.setAttribute("fs_error", error.message);
              }
            }
          })
        )();
      }
    };
  }
);
const FS_OPERATIONS_WITH_OLD_PATH_NEW_PATH = ["rename", "renameSync"];
const FS_OPERATIONS_WITH_SRC_DEST = ["copyFile", "cp", "copyFileSync", "cpSync"];
const FS_OPERATIONS_WITH_EXISTING_PATH_NEW_PATH = ["link", "linkSync"];
const FS_OPERATIONS_WITH_PREFIX = ["mkdtemp", "mkdtempSync"];
const FS_OPERATIONS_WITH_TARGET_PATH = ["symlink", "symlinkSync"];
const FS_OPERATIONS_WITH_PATH_ARG = [
  "access",
  "appendFile",
  "chmod",
  "chown",
  "exists",
  "mkdir",
  "lchown",
  "lstat",
  "lutimes",
  "open",
  "opendir",
  "readdir",
  "readFile",
  "readlink",
  "realpath",
  "realpath.native",
  "rm",
  "rmdir",
  "stat",
  "truncate",
  "unlink",
  "utimes",
  "writeFile",
  "accessSync",
  "appendFileSync",
  "chmodSync",
  "chownSync",
  "existsSync",
  "lchownSync",
  "lstatSync",
  "lutimesSync",
  "opendirSync",
  "mkdirSync",
  "openSync",
  "readdirSync",
  "readFileSync",
  "readlinkSync",
  "realpathSync",
  "realpathSync.native",
  "rmdirSync",
  "rmSync",
  "statSync",
  "truncateSync",
  "unlinkSync",
  "utimesSync",
  "writeFileSync"
];

exports.fsIntegration = fsIntegration;
//# sourceMappingURL=index.js.map
