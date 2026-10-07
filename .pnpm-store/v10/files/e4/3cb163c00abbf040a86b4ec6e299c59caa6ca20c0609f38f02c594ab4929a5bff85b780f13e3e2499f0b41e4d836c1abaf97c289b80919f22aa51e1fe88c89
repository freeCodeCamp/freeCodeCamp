"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkerEntryPointPlugin = void 0;
function getCompilerHook(compiler, { id, entry, filename, chunkFilename, plugins }) {
    var _a;
    const webpack = (_a = compiler.webpack) !== null && _a !== void 0 ? _a : require('webpack');
    return function (compilation, callback) {
        var _a;
        const outputOptions = {
            filename,
            chunkFilename,
            publicPath: compilation.outputOptions.publicPath,
            // HACK: globalObject is necessary to fix https://github.com/webpack/webpack/issues/6642
            globalObject: 'this'
        };
        const childCompiler = compilation.createChildCompiler(id, outputOptions, [
            new webpack.webworker.WebWorkerTemplatePlugin(),
            new webpack.LoaderTargetPlugin('webworker')
        ]);
        const SingleEntryPlugin = (_a = webpack.EntryPlugin) !== null && _a !== void 0 ? _a : webpack.SingleEntryPlugin;
        new SingleEntryPlugin(compiler.context, entry, 'main').apply(childCompiler);
        plugins.forEach((plugin) => plugin.apply(childCompiler));
        childCompiler.runAsChild((err) => callback(err));
    };
}
class AddWorkerEntryPointPlugin {
    constructor({ id, entry, filename, chunkFilename = undefined, plugins }) {
        this.options = { id, entry, filename, chunkFilename, plugins };
    }
    apply(compiler) {
        var _a;
        const webpack = (_a = compiler.webpack) !== null && _a !== void 0 ? _a : require('webpack');
        const compilerHook = getCompilerHook(compiler, this.options);
        const majorVersion = webpack.version.split('.')[0];
        if (parseInt(majorVersion) < 4) {
            compiler.plugin('make', compilerHook);
        }
        else {
            compiler.hooks.make.tapAsync('AddWorkerEntryPointPlugin', compilerHook);
        }
    }
}
exports.AddWorkerEntryPointPlugin = AddWorkerEntryPointPlugin;
