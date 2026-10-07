/*
  @license
	Rollup.js v4.60.2
	Sat, 18 Apr 2026 13:58:01 GMT - commit a6be82b8abd747458afdc7484319f7b5deb92535

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

const promises = require('node:fs/promises');
const path = require('node:path');
const process$1 = require('node:process');
const node_url = require('node:url');
const rollup = require('./rollup.js');
const parseAst_js = require('./parseAst.js');
const getLogFilter_js = require('../getLogFilter.js');

function batchWarnings(command) {
    const silent = !!command.silent;
    const logFilter = generateLogFilter(command);
    let count = 0;
    const deferredWarnings = new Map();
    let warningOccurred = false;
    const add = (warning) => {
        count += 1;
        warningOccurred = true;
        if (silent)
            return;
        if (warning.code in deferredHandlers) {
            rollup.getOrCreate(deferredWarnings, warning.code, rollup.getNewArray).push(warning);
        }
        else if (warning.code in immediateHandlers) {
            immediateHandlers[warning.code](warning);
        }
        else {
            title(warning.message);
            defaultBody(warning);
        }
    };
    return {
        add,
        get count() {
            return count;
        },
        flush() {
            if (count === 0 || silent)
                return;
            const codes = [...deferredWarnings.keys()].sort((a, b) => deferredWarnings.get(b).length - deferredWarnings.get(a).length);
            for (const code of codes) {
                deferredHandlers[code](deferredWarnings.get(code));
            }
            deferredWarnings.clear();
            count = 0;
        },
        log(level, log) {
            if (!logFilter(log))
                return;
            switch (level) {
                case parseAst_js.LOGLEVEL_WARN: {
                    return add(log);
                }
                case parseAst_js.LOGLEVEL_DEBUG: {
                    if (!silent) {
                        rollup.stderr(rollup.bold(rollup.pc.blue(log.message)));
                        defaultBody(log);
                    }
                    return;
                }
                default: {
                    if (!silent) {
                        rollup.stderr(rollup.bold(rollup.pc.cyan(log.message)));
                        defaultBody(log);
                    }
                }
            }
        },
        get warningOccurred() {
            return warningOccurred;
        }
    };
}
const immediateHandlers = {
    MISSING_NODE_BUILTINS(warning) {
        title(`Missing shims for Node.js built-ins`);
        rollup.stderr(`Creating a browser bundle that depends on ${parseAst_js.printQuotedStringList(warning.ids)}. You might need to include https://github.com/FredKSchott/rollup-plugin-polyfill-node`);
    },
    UNKNOWN_OPTION(warning) {
        title(`You have passed an unrecognized option`);
        rollup.stderr(warning.message);
    }
};
const deferredHandlers = {
    CIRCULAR_DEPENDENCY(warnings) {
        title(`Circular dependenc${warnings.length > 1 ? 'ies' : 'y'}`);
        const displayed = warnings.length > 5 ? warnings.slice(0, 3) : warnings;
        for (const warning of displayed) {
            rollup.stderr(warning.ids.map(parseAst_js.relativeId).join(' -> '));
        }
        if (warnings.length > displayed.length) {
            rollup.stderr(`...and ${warnings.length - displayed.length} more`);
        }
    },
    EMPTY_BUNDLE(warnings) {
        title(`Generated${warnings.length === 1 ? ' an' : ''} empty ${warnings.length > 1 ? 'chunks' : 'chunk'}`);
        rollup.stderr(parseAst_js.printQuotedStringList(warnings.map(warning => warning.names[0])));
    },
    EVAL(warnings) {
        title('Use of eval is strongly discouraged');
        info(parseAst_js.getRollupUrl(parseAst_js.URL_AVOIDING_EVAL));
        showTruncatedWarnings(warnings);
    },
    MISSING_EXPORT(warnings) {
        title('Missing exports');
        info(parseAst_js.getRollupUrl(parseAst_js.URL_NAME_IS_NOT_EXPORTED));
        for (const warning of warnings) {
            rollup.stderr(rollup.bold(parseAst_js.relativeId(warning.id)));
            rollup.stderr(`${warning.binding} is not exported by ${parseAst_js.relativeId(warning.exporter)}`);
            rollup.stderr(rollup.gray(warning.frame));
        }
    },
    MISSING_GLOBAL_NAME(warnings) {
        title(`Missing global variable ${warnings.length > 1 ? 'names' : 'name'}`);
        info(parseAst_js.getRollupUrl(parseAst_js.URL_OUTPUT_GLOBALS));
        rollup.stderr(`Use "output.globals" to specify browser global variable names corresponding to external modules:`);
        for (const warning of warnings) {
            rollup.stderr(`${rollup.bold(warning.id)} (guessing "${warning.names[0]}")`);
        }
    },
    MIXED_EXPORTS(warnings) {
        title('Mixing named and default exports');
        info(parseAst_js.getRollupUrl(parseAst_js.URL_OUTPUT_EXPORTS));
        rollup.stderr(rollup.bold('The following entry modules are using named and default exports together:'));
        warnings.sort((a, b) => (a.id < b.id ? -1 : 1));
        const displayedWarnings = warnings.length > 5 ? warnings.slice(0, 3) : warnings;
        for (const warning of displayedWarnings) {
            rollup.stderr(parseAst_js.relativeId(warning.id));
        }
        if (displayedWarnings.length < warnings.length) {
            rollup.stderr(`...and ${warnings.length - displayedWarnings.length} other entry modules`);
        }
        rollup.stderr(`\nConsumers of your bundle will have to use chunk.default to access their default export, which may not be what you want. Use \`output.exports: "named"\` to disable this warning.`);
    },
    NAMESPACE_CONFLICT(warnings) {
        title(`Conflicting re-exports`);
        for (const warning of warnings) {
            rollup.stderr(`"${rollup.bold(parseAst_js.relativeId(warning.reexporter))}" re-exports "${warning.binding}" from both "${parseAst_js.relativeId(warning.ids[0])}" and "${parseAst_js.relativeId(warning.ids[1])}" (will be ignored).`);
        }
    },
    PLUGIN_WARNING(warnings) {
        const nestedByPlugin = nest(warnings, 'plugin');
        for (const { items } of nestedByPlugin) {
            const nestedByMessage = nest(items, 'message');
            let lastUrl = '';
            for (const { key: message, items } of nestedByMessage) {
                title(message);
                for (const warning of items) {
                    if (warning.url && warning.url !== lastUrl)
                        info((lastUrl = warning.url));
                    const loc = formatLocation(warning);
                    if (loc) {
                        rollup.stderr(rollup.bold(loc));
                    }
                    if (warning.frame)
                        info(warning.frame);
                }
            }
        }
    },
    SOURCEMAP_BROKEN(warnings) {
        title(`Broken sourcemap`);
        info(parseAst_js.getRollupUrl(parseAst_js.URL_SOURCEMAP_IS_LIKELY_TO_BE_INCORRECT));
        const plugins = [...new Set(warnings.map(({ plugin }) => plugin).filter(Boolean))];
        rollup.stderr(`Plugins that transform code (such as ${parseAst_js.printQuotedStringList(plugins)}) should generate accompanying sourcemaps.`);
    },
    THIS_IS_UNDEFINED(warnings) {
        title('"this" has been rewritten to "undefined"');
        info(parseAst_js.getRollupUrl(parseAst_js.URL_THIS_IS_UNDEFINED));
        showTruncatedWarnings(warnings);
    },
    UNRESOLVED_IMPORT(warnings) {
        title('Unresolved dependencies');
        info(parseAst_js.getRollupUrl(parseAst_js.URL_TREATING_MODULE_AS_EXTERNAL_DEPENDENCY));
        const dependencies = new Map();
        for (const warning of warnings) {
            rollup.getOrCreate(dependencies, parseAst_js.relativeId(warning.exporter), rollup.getNewArray).push(parseAst_js.relativeId(warning.id));
        }
        for (const [dependency, importers] of dependencies) {
            rollup.stderr(`${rollup.bold(dependency)} (imported by ${parseAst_js.printQuotedStringList(importers)})`);
        }
    },
    UNUSED_EXTERNAL_IMPORT(warnings) {
        title('Unused external imports');
        for (const warning of warnings) {
            rollup.stderr(warning.names +
                ' imported from external module "' +
                warning.exporter +
                '" but never used in ' +
                parseAst_js.printQuotedStringList(warning.ids.map(parseAst_js.relativeId)) +
                '.');
        }
    }
};
function defaultBody(log) {
    if (log.url) {
        info(log.url);
    }
    const loc = formatLocation(log);
    if (loc) {
        rollup.stderr(rollup.bold(loc));
    }
    if (log.frame)
        info(log.frame);
}
function title(string_) {
    rollup.stderr(rollup.bold(rollup.yellow(`(!) ${string_}`)));
}
function info(url) {
    rollup.stderr(rollup.gray(url));
}
function nest(array, property) {
    const nested = [];
    const lookup = new Map();
    for (const item of array) {
        const key = item[property];
        rollup.getOrCreate(lookup, key, () => {
            const items = {
                items: [],
                key
            };
            nested.push(items);
            return items;
        }).items.push(item);
    }
    return nested;
}
function showTruncatedWarnings(warnings) {
    const nestedByModule = nest(warnings, 'id');
    const displayedByModule = nestedByModule.length > 5 ? nestedByModule.slice(0, 3) : nestedByModule;
    for (const { key: id, items } of displayedByModule) {
        rollup.stderr(rollup.bold(parseAst_js.relativeId(id)));
        rollup.stderr(rollup.gray(items[0].frame));
        if (items.length > 1) {
            rollup.stderr(`...and ${items.length - 1} other ${items.length > 2 ? 'occurrences' : 'occurrence'}`);
        }
    }
    if (nestedByModule.length > displayedByModule.length) {
        rollup.stderr(`\n...and ${nestedByModule.length - displayedByModule.length} other files`);
    }
}
function generateLogFilter(command) {
    const filters = rollup.ensureArray(command.filterLogs).flatMap(filter => String(filter).split(','));
    if (process.env.ROLLUP_FILTER_LOGS) {
        filters.push(...process.env.ROLLUP_FILTER_LOGS.split(','));
    }
    return getLogFilter_js.getLogFilter(filters);
}
function formatLocation(log) {
    const id = log.loc?.file || log.id;
    if (!id)
        return null;
    return log.loc ? `${id}:${log.loc.line}:${log.loc.column}` : id;
}

const stdinName = '-';
let stdinResult = null;
function stdinPlugin(argument) {
    const suffix = typeof argument == 'string' && argument.length > 0 ? '.' + argument : '';
    return {
        load(id) {
            if (id === stdinName || id.startsWith(stdinName + '.')) {
                return stdinResult || (stdinResult = readStdin());
            }
        },
        name: 'stdin',
        resolveId(id) {
            if (id === stdinName) {
                return id + suffix;
            }
        }
    };
}
function readStdin() {
    return new Promise((resolve, reject) => {
        const chunks = [];
        process$1.stdin.setEncoding('utf8');
        process$1.stdin
            .on('data', chunk => chunks.push(chunk))
            .on('end', () => {
            const result = chunks.join('');
            resolve(result);
        })
            .on('error', error => {
            reject(error);
        });
    });
}

function waitForInputPlugin() {
    return {
        async buildStart(options) {
            const inputSpecifiers = Array.isArray(options.input)
                ? options.input
                : Object.keys(options.input);
            let lastAwaitedSpecifier = null;
            checkSpecifiers: while (true) {
                for (const specifier of inputSpecifiers) {
                    if ((await this.resolve(specifier)) === null) {
                        if (lastAwaitedSpecifier !== specifier) {
                            rollup.stderr(`waiting for input ${rollup.bold(specifier)}...`);
                            lastAwaitedSpecifier = specifier;
                        }
                        await new Promise(resolve => setTimeout(resolve, 500));
                        continue checkSpecifiers;
                    }
                }
                break;
            }
        },
        name: 'wait-for-input'
    };
}

async function addCommandPluginsToInputOptions(inputOptions, command) {
    if (command.stdin !== false) {
        inputOptions.plugins.push(stdinPlugin(command.stdin));
    }
    if (command.waitForBundleInput === true) {
        inputOptions.plugins.push(waitForInputPlugin());
    }
    await addPluginsFromCommandOption(command.plugin, inputOptions);
}
async function addPluginsFromCommandOption(commandPlugin, inputOptions) {
    if (commandPlugin) {
        const plugins = await rollup.normalizePluginOption(commandPlugin);
        for (const plugin of plugins) {
            if (/[={}]/.test(plugin)) {
                // -p plugin=value
                // -p "{transform(c,i){...}}"
                await loadAndRegisterPlugin(inputOptions, plugin);
            }
            else {
                // split out plugins joined by commas
                // -p node-resolve,commonjs,buble
                for (const p of plugin.split(',')) {
                    await loadAndRegisterPlugin(inputOptions, p);
                }
            }
        }
    }
}
async function loadAndRegisterPlugin(inputOptions, pluginText) {
    let plugin = null;
    let pluginArgument = undefined;
    if (pluginText[0] === '{') {
        // -p "{transform(c,i){...}}"
        plugin = new Function('return ' + pluginText);
    }
    else {
        const match = pluginText.match(/^([\w./:@\\^{|}-]+)(=(.*))?$/);
        if (match) {
            // -p plugin
            // -p plugin=arg
            pluginText = match[1];
            pluginArgument = new Function('return ' + match[3])();
        }
        else {
            throw new Error(`Invalid --plugin argument format: ${JSON.stringify(pluginText)}`);
        }
        if (!/^\.|^rollup-plugin-|[/@\\]/.test(pluginText)) {
            // Try using plugin prefix variations first if applicable.
            // Prefix order is significant - left has higher precedence.
            for (const prefix of ['@rollup/plugin-', 'rollup-plugin-']) {
                try {
                    plugin = await requireOrImport(prefix + pluginText);
                    break;
                }
                catch {
                    // if this does not work, we try requiring the actual name below
                }
            }
        }
        if (!plugin) {
            try {
                if (pluginText[0] == '.')
                    pluginText = path.resolve(pluginText);
                // Windows absolute paths must be specified as file:// protocol URL
                // Note that we do not have coverage for Windows-only code paths
                else if (/^[A-Za-z]:\\/.test(pluginText)) {
                    pluginText = node_url.pathToFileURL(path.resolve(pluginText)).href;
                }
                plugin = await requireOrImport(pluginText);
            }
            catch (error) {
                throw new Error(`Cannot load plugin "${pluginText}": ${error.message}.`, { cause: error });
            }
        }
    }
    // some plugins do not use `module.exports` for their entry point,
    // in which case we try the named default export and the plugin name
    if (typeof plugin === 'object') {
        plugin = plugin.default || plugin[getCamelizedPluginBaseName(pluginText)];
    }
    if (!plugin) {
        throw new Error(`Cannot find entry for plugin "${pluginText}". The plugin needs to export a function either as "default" or "${getCamelizedPluginBaseName(pluginText)}" for Rollup to recognize it.`);
    }
    inputOptions.plugins.push(typeof plugin === 'function' ? plugin.call(plugin, pluginArgument) : plugin);
}
function getCamelizedPluginBaseName(pluginText) {
    return (pluginText.match(/(@rollup\/plugin-|rollup-plugin-)(.+)$/)?.[2] || pluginText)
        .split(/[/\\]/)
        .slice(-1)[0]
        .split('.')[0]
        .split('-')
        .map((part, index) => (index === 0 || !part ? part : part[0].toUpperCase() + part.slice(1)))
        .join('');
}
async function requireOrImport(pluginPath) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require(pluginPath);
    }
    catch {
        return import(pluginPath);
    }
}

const loadConfigFile = async (fileName, commandOptions = {}, watchMode = false) => {
    const configs = await getConfigList(getDefaultFromCjs(await getConfigFileExport(fileName, commandOptions, watchMode)), commandOptions);
    const warnings = batchWarnings(commandOptions);
    try {
        const normalizedConfigs = [];
        for (const config of configs) {
            const options = await rollup.mergeOptions(config, watchMode, commandOptions, warnings.log);
            await addCommandPluginsToInputOptions(options, commandOptions);
            normalizedConfigs.push(options);
        }
        return { options: normalizedConfigs, warnings };
    }
    catch (error_) {
        warnings.flush();
        throw error_;
    }
};
async function getConfigFileExport(fileName, commandOptions, watchMode) {
    if (commandOptions.configPlugin || commandOptions.bundleConfigAsCjs) {
        try {
            return await loadTranspiledConfigFile(fileName, commandOptions);
        }
        catch (error_) {
            if (error_.message.includes('not defined in ES module scope')) {
                return parseAst_js.error(parseAst_js.logCannotBundleConfigAsEsm(error_));
            }
            throw error_;
        }
    }
    let cannotLoadEsm = false;
    const handleWarning = (warning) => {
        if (warning.message?.includes('To load an ES module') ||
            warning.message?.includes('Failed to load the ES module')) {
            cannotLoadEsm = true;
        }
    };
    process$1.on('warning', handleWarning);
    try {
        const fileUrl = node_url.pathToFileURL(fileName);
        if (watchMode) {
            // We are adding the current date to allow reloads in watch mode
            fileUrl.search = `?${Date.now()}`;
        }
        return (await import(fileUrl.href)).default;
    }
    catch (error_) {
        if (cannotLoadEsm) {
            return parseAst_js.error(parseAst_js.logCannotLoadConfigAsCjs(error_));
        }
        if (error_.message.includes('not defined in ES module scope')) {
            return parseAst_js.error(parseAst_js.logCannotLoadConfigAsEsm(error_));
        }
        throw error_;
    }
    finally {
        process$1.off('warning', handleWarning);
    }
}
function getDefaultFromCjs(namespace) {
    return namespace.default || namespace;
}
function getConfigImportAttributesKey(input) {
    if (input === 'assert' || input === 'with')
        return input;
    return;
}
async function loadTranspiledConfigFile(fileName, commandOptions) {
    const { bundleConfigAsCjs, configPlugin, configImportAttributesKey, silent } = commandOptions;
    const warnings = batchWarnings(commandOptions);
    const inputOptions = {
        // Do *not* specify external callback here - instead, perform the externality check it via fallback-plugin just below this comment.
        // This allows config plugin to first decide whether some import is external or not, and only then trigger the check in fallback-plugin.
        // Since the check is ultra-simple during this stage of transforming the config file itself, it should be fallback instead of primary check.
        // That way, e.g. importing workspace packages will work as expected - the workspace package will be bundled.
        input: fileName,
        onwarn: warnings.add,
        plugins: [],
        treeshake: false
    };
    await addPluginsFromCommandOption(configPlugin, inputOptions);
    // Add plugin as *last* item after addPluginsFromCommandOption is complete.
    // This plugin will trigger for imports not resolved by config plugin, and mark all non-relative imports as external.
    inputOptions.plugins.push({
        name: 'external-fallback',
        resolveId: source => {
            const looksLikeExternal = (source[0] !== '.' && !path.isAbsolute(source)) || source.slice(-5) === '.json';
            return looksLikeExternal ? false : null;
        }
    });
    const bundle = await rollup.rollup(inputOptions);
    const { output: [{ code }] } = await bundle.generate({
        exports: 'named',
        format: bundleConfigAsCjs ? 'cjs' : 'es',
        importAttributesKey: getConfigImportAttributesKey(configImportAttributesKey),
        plugins: [
            {
                name: 'transpile-import-meta',
                resolveImportMeta(property, { moduleId }) {
                    if (property === 'url') {
                        return `'${node_url.pathToFileURL(moduleId).href}'`;
                    }
                    if (property == 'filename') {
                        return `'${moduleId}'`;
                    }
                    if (property == 'dirname') {
                        return `'${path.dirname(moduleId)}'`;
                    }
                    if (property == null) {
                        return `{url:'${node_url.pathToFileURL(moduleId).href}', filename: '${moduleId}', dirname: '${path.dirname(moduleId)}'}`;
                    }
                }
            }
        ]
    });
    if (!silent && warnings.count > 0) {
        rollup.stderr(rollup.bold(`loaded ${parseAst_js.relativeId(fileName)} with warnings`));
        warnings.flush();
    }
    return loadConfigFromWrittenFile(path.join(path.dirname(fileName), `rollup.config-${Date.now()}.${bundleConfigAsCjs ? 'cjs' : 'mjs'}`), code);
}
async function loadConfigFromWrittenFile(bundledFileName, bundledCode) {
    await promises.writeFile(bundledFileName, bundledCode);
    try {
        return (await import(node_url.pathToFileURL(bundledFileName).href)).default;
    }
    finally {
        promises.unlink(bundledFileName).catch(error => console.warn(error?.message || error));
    }
}
async function getConfigList(configFileExport, commandOptions) {
    const config = await (typeof configFileExport === 'function'
        ? configFileExport(commandOptions)
        : configFileExport);
    if (Object.keys(config).length === 0) {
        return parseAst_js.error(parseAst_js.logMissingConfig());
    }
    return Array.isArray(config) ? config : [config];
}

exports.addCommandPluginsToInputOptions = addCommandPluginsToInputOptions;
exports.batchWarnings = batchWarnings;
exports.loadConfigFile = loadConfigFile;
exports.stdinName = stdinName;
//# sourceMappingURL=loadConfigFile.js.map
