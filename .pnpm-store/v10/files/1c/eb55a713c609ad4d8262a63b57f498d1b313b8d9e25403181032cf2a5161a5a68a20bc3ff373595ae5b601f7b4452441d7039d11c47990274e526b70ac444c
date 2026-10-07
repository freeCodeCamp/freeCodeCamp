"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semver = __importStar(require("semver"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const os_1 = __importDefault(require("os"));
const TypeScriptVueExtensionSupport_1 = require("./extension/vue/TypeScriptVueExtensionSupport");
function assertTypeScriptSupport(configuration) {
    let typescriptVersion;
    try {
        typescriptVersion = require(configuration.typescriptPath).version;
    }
    catch (error) { }
    if (!typescriptVersion) {
        throw new Error('When you use ForkTsCheckerWebpackPlugin with typescript reporter enabled, you must install `typescript` package.');
    }
    if (semver.lt(typescriptVersion, '2.7.0')) {
        throw new Error([
            `ForkTsCheckerWebpackPlugin cannot use the current typescript version of ${typescriptVersion}.`,
            'The minimum required version is 2.7.0.',
        ].join(os_1.default.EOL));
    }
    if (configuration.build && semver.lt(typescriptVersion, '3.6.0')) {
        throw new Error([
            `ForkTsCheckerWebpackPlugin cannot use the current typescript version of ${typescriptVersion} because of the "build" option enabled.`,
            'The minimum version that supports "build" option is 3.6.0.',
            'Consider upgrading `typescript` or disabling "build" option.',
        ].join(os_1.default.EOL));
    }
    if (!fs_extra_1.default.existsSync(configuration.configFile)) {
        throw new Error([
            `Cannot find the "${configuration.configFile}" file.`,
            `Please check webpack and ForkTsCheckerWebpackPlugin configuration.`,
            `Possible errors:`,
            '  - wrong `context` directory in webpack configuration (if `configFile` is not set or is a relative path in the fork plugin configuration)',
            '  - wrong `typescript.configFile` path in the plugin configuration (should be a relative or absolute path)',
        ].join(os_1.default.EOL));
    }
    if (configuration.extensions.vue.enabled) {
        TypeScriptVueExtensionSupport_1.assertTypeScriptVueExtensionSupport(configuration.extensions.vue);
    }
}
exports.assertTypeScriptSupport = assertTypeScriptSupport;
