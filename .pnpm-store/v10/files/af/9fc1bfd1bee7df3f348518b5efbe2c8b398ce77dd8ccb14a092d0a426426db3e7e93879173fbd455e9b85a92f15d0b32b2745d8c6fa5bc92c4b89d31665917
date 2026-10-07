"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function interceptDoneToGetWebpackDevServerTap(compiler, configuration, state) {
    // inspired by https://github.com/ypresto/fork-ts-checker-async-overlay-webpack-plugin
    compiler.hooks.done.intercept({
        register: (tap) => {
            if (tap.name === 'webpack-dev-server' &&
                tap.type === 'sync' &&
                configuration.logger.devServer) {
                state.webpackDevServerDoneTap = tap;
            }
            return tap;
        },
    });
}
exports.interceptDoneToGetWebpackDevServerTap = interceptDoneToGetWebpackDevServerTap;
