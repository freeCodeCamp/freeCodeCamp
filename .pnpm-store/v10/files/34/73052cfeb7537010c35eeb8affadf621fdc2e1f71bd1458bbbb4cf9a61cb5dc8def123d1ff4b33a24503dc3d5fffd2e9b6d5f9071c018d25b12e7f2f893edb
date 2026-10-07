"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTSConfigRootDirFromStack = getTSConfigRootDirFromStack;
const node_path_1 = __importDefault(require("node:path"));
const node_url_1 = require("node:url");
/**
 * Infers the `tsconfigRootDir` from the current call stack, using the V8 API.
 *
 * See https://v8.dev/docs/stack-trace-api
 *
 * This API is implemented in Deno and Bun as well.
 */
function getTSConfigRootDirFromStack() {
    function getStack() {
        const stackTraceLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = Infinity;
        const prepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, structuredStackTrace) => structuredStackTrace;
        const dummyObject = {};
        Error.captureStackTrace(dummyObject, getTSConfigRootDirFromStack);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- stack is set by captureStackTrace
        const rv = dummyObject.stack;
        Error.prepareStackTrace = prepareStackTrace;
        Error.stackTraceLimit = stackTraceLimit;
        return rv;
    }
    for (const callSite of getStack()) {
        const stackFrameFilePathOrUrl = callSite.getFileName();
        if (!stackFrameFilePathOrUrl) {
            continue;
        }
        // ESM seem to return a file URL, so we'll convert it to a file path.
        // AFAICT this isn't documented in the v8 API docs, but it seems to be the case.
        // See https://github.com/typescript-eslint/typescript-eslint/issues/11429
        const stackFrameFilePath = stackFrameFilePathOrUrl.startsWith('file://')
            ? (0, node_url_1.fileURLToPath)(stackFrameFilePathOrUrl)
            : stackFrameFilePathOrUrl;
        const parsedPath = node_path_1.default.parse(stackFrameFilePath);
        if (/^eslint\.config\.(c|m)?(j|t)s$/.test(parsedPath.base)) {
            if (process.platform === 'win32') {
                // workaround for https://github.com/typescript-eslint/typescript-eslint/issues/11530
                // (caused by https://github.com/unjs/jiti/issues/397)
                return parsedPath.dir.replaceAll('/', node_path_1.default.sep);
            }
            return parsedPath.dir;
        }
    }
    return undefined;
}
//# sourceMappingURL=getTSConfigRootDirFromStack.js.map