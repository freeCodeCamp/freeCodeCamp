"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pitch = void 0;
const loaderUtils = require("loader-utils");
const pitch = function pitch(remainingRequest) {
    const { globals = undefined, pre = [], post = [] } = this.query || {};
    // HACK: NamedModulesPlugin overwrites existing modules when requesting the same module via
    // different loaders, so we need to circumvent this by appending a suffix to make the name unique
    // See https://github.com/webpack/webpack/issues/4613#issuecomment-325178346 for details
    if (this._module && this._module.userRequest) {
        this._module.userRequest = `include-loader!${this._module.userRequest}`;
    }
    const stringifyRequest = (request) => {
        if (this.utils) {
            return JSON.stringify(this.utils.contextify(this.context || this.rootContext, request));
        }
        return loaderUtils.stringifyRequest(this, request);
    };
    return [
        ...(globals
            ? Object.keys(globals).map((key) => `self[${JSON.stringify(key)}] = ${globals[key]};`)
            : []),
        ...pre.map((include) => `import ${stringifyRequest(include)};`),
        `
import * as monaco from ${stringifyRequest(`!!${remainingRequest}`)};
export * from ${stringifyRequest(`!!${remainingRequest}`)};
export default monaco;
		`,
        ...post.map((include) => `import ${stringifyRequest(include)};`)
    ].join('\n');
};
exports.pitch = pitch;
