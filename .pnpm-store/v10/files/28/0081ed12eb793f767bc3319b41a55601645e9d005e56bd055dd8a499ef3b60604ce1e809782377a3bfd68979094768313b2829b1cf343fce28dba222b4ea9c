"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPlugin = void 0;
class CLIPlugin {
    constructor(options) {
        this.options = options;
    }
    setupHotPlugin(compiler) {
        const { HotModuleReplacementPlugin } = compiler.webpack || require("webpack");
        const hotModuleReplacementPlugin = Boolean(compiler.options.plugins.find((plugin) => plugin instanceof HotModuleReplacementPlugin));
        if (!hotModuleReplacementPlugin) {
            new HotModuleReplacementPlugin().apply(compiler);
        }
    }
    setupPrefetchPlugin(compiler) {
        const { PrefetchPlugin } = compiler.webpack || require("webpack");
        new PrefetchPlugin(null, this.options.prefetch).apply(compiler);
    }
    async setupBundleAnalyzerPlugin(compiler) {
        // eslint-disable-next-line node/no-extraneous-require,@typescript-eslint/no-var-requires
        const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
        const bundleAnalyzerPlugin = Boolean(compiler.options.plugins.find((plugin) => plugin instanceof BundleAnalyzerPlugin));
        if (!bundleAnalyzerPlugin) {
            new BundleAnalyzerPlugin().apply(compiler);
        }
    }
    setupProgressPlugin(compiler) {
        const { ProgressPlugin } = compiler.webpack || require("webpack");
        const progressPlugin = Boolean(compiler.options.plugins.find((plugin) => plugin instanceof ProgressPlugin));
        if (!progressPlugin) {
            new ProgressPlugin({
                profile: this.options.progress === "profile",
            }).apply(compiler);
        }
    }
    setupHelpfulOutput(compiler) {
        const pluginName = "webpack-cli";
        const getCompilationName = () => (compiler.name ? `'${compiler.name}'` : "");
        const logCompilation = (message) => {
            if (process.env.WEBPACK_CLI_START_FINISH_FORCE_LOG) {
                process.stderr.write(message);
            }
            else {
                this.logger.log(message);
            }
        };
        const { configPath } = this.options;
        compiler.hooks.run.tap(pluginName, () => {
            const name = getCompilationName();
            logCompilation(`Compiler${name ? ` ${name}` : ""} starting... `);
            if (configPath) {
                this.logger.log(`Compiler${name ? ` ${name}` : ""} is using config: '${configPath}'`);
            }
        });
        compiler.hooks.watchRun.tap(pluginName, (compiler) => {
            const { bail, watch } = compiler.options;
            if (bail && watch) {
                this.logger.warn('You are using "bail" with "watch". "bail" will still exit webpack when the first error is found.');
            }
            const name = getCompilationName();
            logCompilation(`Compiler${name ? ` ${name}` : ""} starting... `);
            if (configPath) {
                this.logger.log(`Compiler${name ? ` ${name}` : ""} is using config: '${configPath}'`);
            }
        });
        compiler.hooks.invalid.tap(pluginName, (filename, changeTime) => {
            const date = new Date(changeTime);
            this.logger.log(`File '${filename}' was modified`);
            this.logger.log(`Changed time is ${date} (timestamp is ${changeTime})`);
        });
        (compiler.webpack ? compiler.hooks.afterDone : compiler.hooks.done).tap(pluginName, () => {
            const name = getCompilationName();
            logCompilation(`Compiler${name ? ` ${name}` : ""} finished`);
            process.nextTick(() => {
                if (compiler.watchMode) {
                    this.logger.log(`Compiler${name ? `${name}` : ""} is watching files for updates...`);
                }
            });
        });
    }
    apply(compiler) {
        this.logger = compiler.getInfrastructureLogger("webpack-cli");
        if (this.options.progress) {
            this.setupProgressPlugin(compiler);
        }
        if (this.options.hot) {
            this.setupHotPlugin(compiler);
        }
        if (this.options.prefetch) {
            this.setupPrefetchPlugin(compiler);
        }
        if (this.options.analyze) {
            this.setupBundleAnalyzerPlugin(compiler);
        }
        this.setupHelpfulOutput(compiler);
    }
}
exports.CLIPlugin = CLIPlugin;
module.exports = CLIPlugin;
