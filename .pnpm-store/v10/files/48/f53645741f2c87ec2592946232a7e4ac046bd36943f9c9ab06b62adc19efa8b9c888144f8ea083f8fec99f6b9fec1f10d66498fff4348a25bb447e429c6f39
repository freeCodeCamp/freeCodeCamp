"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InclusiveNodeWatchFileSystem_1 = require("../watch/InclusiveNodeWatchFileSystem");
function tapAfterEnvironmentToPatchWatching(compiler, state) {
    compiler.hooks.afterEnvironment.tap('ForkTsCheckerWebpackPlugin', () => {
        const watchFileSystem = compiler.watchFileSystem;
        if (watchFileSystem) {
            // wrap original watch file system
            compiler.watchFileSystem = new InclusiveNodeWatchFileSystem_1.InclusiveNodeWatchFileSystem(watchFileSystem, compiler, state);
        }
    });
}
exports.tapAfterEnvironmentToPatchWatching = tapAfterEnvironmentToPatchWatching;
