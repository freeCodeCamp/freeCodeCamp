"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuProfilerBindings = exports.PrivateCpuProfilerBindings = void 0;
exports.importCppBindingsModule = importCppBindingsModule;
/* eslint-disable no-console */
var detect_libc_1 = require("detect-libc");
var node_abi_1 = require("node-abi");
var node_os_1 = require("node:os");
var node_path_1 = require("node:path");
var node_process_1 = require("node:process");
var node_worker_threads_1 = require("node:worker_threads");
var stdlib = (0, detect_libc_1.familySync)();
var platform = process.env['BUILD_PLATFORM'] || (0, node_os_1.platform)();
var arch = process.env['BUILD_ARCH'] || (0, node_os_1.arch)();
var abi = (0, node_abi_1.getAbi)(node_process_1.versions.node, 'node');
var identifier = [platform, arch, stdlib, abi].filter(function (c) { return c !== undefined && c !== null; }).join('-');
/**
 *  Imports cpp bindings based on the current platform and architecture.
 */
// eslint-disable-next-line complexity
function importCppBindingsModule() {
    // If a binary path is specified, use that.
    if (node_process_1.env['SENTRY_PROFILER_BINARY_PATH']) {
        var envPath = node_process_1.env['SENTRY_PROFILER_BINARY_PATH'];
        return require(envPath);
    }
    // If a user specifies a different binary dir, they are in control of the binaries being moved there
    if (node_process_1.env['SENTRY_PROFILER_BINARY_DIR']) {
        var binaryPath = (0, node_path_1.join)((0, node_path_1.resolve)(node_process_1.env['SENTRY_PROFILER_BINARY_DIR']), "sentry_cpu_profiler-".concat(identifier, ".node"));
        return require(binaryPath);
    }
    if (process.versions.electron) {
        try {
            return require('../build/Release/sentry_cpu_profiler.node');
        }
        catch (e) {
            console.warn("The '@sentry/profiling-node' binary could not be found. Use '@electron/rebuild' to ensure the native module is built for Electron.");
            throw e;
        }
    }
    // We need the fallthrough so that in the end, we can fallback to the dynamic require.
    // This is for cases where precompiled binaries were not provided, but may have been compiled from source.
    if (platform === 'darwin') {
        if (arch === 'x64') {
            if (abi === '108') {
                return require('./sentry_cpu_profiler-darwin-x64-108.node');
            }
            if (abi === '115') {
                return require('./sentry_cpu_profiler-darwin-x64-115.node');
            }
            if (abi === '127') {
                return require('./sentry_cpu_profiler-darwin-x64-127.node');
            }
            if (abi === '137') {
                return require('./sentry_cpu_profiler-darwin-x64-137.node');
            }
            if (abi === '147') {
                return require('./sentry_cpu_profiler-darwin-x64-147.node');
            }
        }
        if (arch === 'arm64') {
            if (abi === '108') {
                return require('./sentry_cpu_profiler-darwin-arm64-108.node');
            }
            if (abi === '115') {
                return require('./sentry_cpu_profiler-darwin-arm64-115.node');
            }
            if (abi === '127') {
                return require('./sentry_cpu_profiler-darwin-arm64-127.node');
            }
            if (abi === '137') {
                return require('./sentry_cpu_profiler-darwin-arm64-137.node');
            }
            if (abi === '147') {
                return require('./sentry_cpu_profiler-darwin-arm64-147.node');
            }
        }
    }
    if (platform === 'win32') {
        if (arch === 'x64') {
            if (abi === '108') {
                return require('./sentry_cpu_profiler-win32-x64-108.node');
            }
            if (abi === '115') {
                return require('./sentry_cpu_profiler-win32-x64-115.node');
            }
            if (abi === '127') {
                return require('./sentry_cpu_profiler-win32-x64-127.node');
            }
            if (abi === '137') {
                return require('./sentry_cpu_profiler-win32-x64-137.node');
            }
            if (abi === '147') {
                return require('./sentry_cpu_profiler-win32-x64-147.node');
            }
        }
    }
    if (platform === 'linux') {
        if (arch === 'x64') {
            if (stdlib === 'musl') {
                if (abi === '108') {
                    return require('./sentry_cpu_profiler-linux-x64-musl-108.node');
                }
                if (abi === '115') {
                    return require('./sentry_cpu_profiler-linux-x64-musl-115.node');
                }
                if (abi === '127') {
                    return require('./sentry_cpu_profiler-linux-x64-musl-127.node');
                }
                if (abi === '137') {
                    return require('./sentry_cpu_profiler-linux-x64-musl-137.node');
                }
                if (abi === '147') {
                    return require('./sentry_cpu_profiler-linux-x64-musl-147.node');
                }
            }
            if (stdlib === 'glibc') {
                if (abi === '108') {
                    return require('./sentry_cpu_profiler-linux-x64-glibc-108.node');
                }
                if (abi === '115') {
                    return require('./sentry_cpu_profiler-linux-x64-glibc-115.node');
                }
                if (abi === '127') {
                    return require('./sentry_cpu_profiler-linux-x64-glibc-127.node');
                }
                if (abi === '137') {
                    return require('./sentry_cpu_profiler-linux-x64-glibc-137.node');
                }
                if (abi === '147') {
                    return require('./sentry_cpu_profiler-linux-x64-glibc-147.node');
                }
            }
        }
        if (arch === 'arm64') {
            if (stdlib === 'musl') {
                if (abi === '108') {
                    return require('./sentry_cpu_profiler-linux-arm64-musl-108.node');
                }
                if (abi === '115') {
                    return require('./sentry_cpu_profiler-linux-arm64-musl-115.node');
                }
                if (abi === '127') {
                    return require('./sentry_cpu_profiler-linux-arm64-musl-127.node');
                }
                if (abi === '137') {
                    return require('./sentry_cpu_profiler-linux-arm64-musl-137.node');
                }
                if (abi === '147') {
                    return require('./sentry_cpu_profiler-linux-arm64-musl-147.node');
                }
            }
            if (stdlib === 'glibc') {
                if (abi === '108') {
                    return require('./sentry_cpu_profiler-linux-arm64-glibc-108.node');
                }
                if (abi === '115') {
                    return require('./sentry_cpu_profiler-linux-arm64-glibc-115.node');
                }
                if (abi === '127') {
                    return require('./sentry_cpu_profiler-linux-arm64-glibc-127.node');
                }
                if (abi === '137') {
                    return require('./sentry_cpu_profiler-linux-arm64-glibc-137.node');
                }
                if (abi === '147') {
                    return require('./sentry_cpu_profiler-linux-arm64-glibc-147.node');
                }
            }
        }
    }
    return require("./sentry_cpu_profiler-".concat(identifier, ".node"));
}
exports.PrivateCpuProfilerBindings = importCppBindingsModule();
var Bindings = /** @class */ (function () {
    function Bindings() {
    }
    Bindings.prototype.startProfiling = function (name) {
        if (!exports.PrivateCpuProfilerBindings) {
            console.log('[Profiling] Bindings not loaded, ignoring call to startProfiling.');
            return;
        }
        if (typeof exports.PrivateCpuProfilerBindings.startProfiling !== 'function') {
            console.log('[Profiling] Native startProfiling function is not available, ignoring call to startProfiling.');
            return;
        }
        return exports.PrivateCpuProfilerBindings.startProfiling(name);
    };
    Bindings.prototype.stopProfiling = function (name, format) {
        if (!exports.PrivateCpuProfilerBindings) {
            console.log('[Profiling] Bindings not loaded or profile was never started, ignoring call to stopProfiling.');
            return null;
        }
        if (typeof exports.PrivateCpuProfilerBindings.stopProfiling !== 'function') {
            console.log('[Profiling] Native stopProfiling function is not available, ignoring call to stopProfiling.');
            return null;
        }
        return exports.PrivateCpuProfilerBindings.stopProfiling(name, format, node_worker_threads_1.threadId, !!global._sentryDebugIds);
    };
    return Bindings;
}());
exports.CpuProfilerBindings = new Bindings();
__exportStar(require("./types"), exports);
