/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline';
import { Browser, resolveBuildId, BrowserPlatform, } from './browser-data/browser-data.js';
import { Cache } from './Cache.js';
import { detectBrowserPlatform } from './detectPlatform.js';
import { install } from './install.js';
import { computeExecutablePath, computeSystemExecutablePath, launch, } from './launch.js';
function isValidBrowser(browser) {
    return Object.values(Browser).includes(browser);
}
function isValidPlatform(platform) {
    return Object.values(BrowserPlatform).includes(platform);
}
// If moved update release-please config
// x-release-please-start-version
const packageVersion = '3.0.3';
// x-release-please-end
/**
 * @public
 */
export class CLI {
    #cachePath;
    #rl;
    #scriptName;
    #version;
    #allowCachePathOverride;
    #pinnedBrowsers;
    #prefixCommand;
    constructor(opts, rl) {
        if (!opts) {
            opts = {};
        }
        if (typeof opts === 'string') {
            opts = {
                cachePath: opts,
            };
        }
        this.#cachePath = opts.cachePath ?? process.cwd();
        this.#rl = rl;
        this.#scriptName = opts.scriptName ?? '@puppeteer/browsers';
        this.#version = opts.version ?? packageVersion;
        this.#allowCachePathOverride = opts.allowCachePathOverride ?? true;
        this.#pinnedBrowsers = opts.pinnedBrowsers;
        this.#prefixCommand = opts.prefixCommand;
    }
    #defineBrowserParameter(yargs, required) {
        return yargs.positional('browser', {
            description: 'Which browser to install <browser>[@<buildId|latest>]. `latest` will try to find the latest available build. `buildId` is a browser-specific identifier such as a version or a revision.',
            type: 'string',
            coerce: (opt) => {
                const browser = {
                    name: this.#parseBrowser(opt),
                    buildId: this.#parseBuildId(opt),
                };
                if (!isValidBrowser(browser.name)) {
                    throw new Error(`Unsupported browser '${browser.name}'`);
                }
                return browser;
            },
            demandOption: required,
        });
    }
    #definePlatformParameter(yargs) {
        return yargs.option('platform', {
            type: 'string',
            desc: 'Platform that the binary needs to be compatible with.',
            choices: Object.values(BrowserPlatform),
            default: detectBrowserPlatform(),
            coerce: platform => {
                if (!isValidPlatform(platform)) {
                    throw new Error(`Unsupported platform '${platform}'`);
                }
                return platform;
            },
            defaultDescription: 'Auto-detected',
        });
    }
    #definePathParameter(yargs, required = false) {
        if (!this.#allowCachePathOverride) {
            return yargs;
        }
        return yargs.option('path', {
            type: 'string',
            desc: 'Path to the root folder for the browser downloads and installation. If a relative path is provided, it will be resolved relative to the current working directory. The installation folder structure is compatible with the cache structure used by Puppeteer.',
            defaultDescription: 'Current working directory',
            ...(required ? {} : { default: process.cwd() }),
            demandOption: required,
        });
    }
    async run(argv) {
        const { default: yargs } = await import('yargs');
        const { hideBin } = await import('yargs/helpers');
        const yargsInstance = yargs(hideBin(argv));
        let target = yargsInstance
            .scriptName(this.#scriptName)
            .version(this.#version);
        if (this.#prefixCommand) {
            target = target.command(this.#prefixCommand.cmd, this.#prefixCommand.description, yargs => {
                return this.#build(yargs);
            });
        }
        else {
            target = this.#build(target);
        }
        await target
            .demandCommand(1)
            .help()
            .wrap(Math.min(120, yargsInstance.terminalWidth()))
            .parseAsync();
    }
    #build(yargs) {
        const latestOrPinned = this.#pinnedBrowsers ? 'pinned' : 'latest';
        // If there are pinned browsers allow the positional arg to be optional
        const browserArgType = this.#pinnedBrowsers ? '[browser]' : '<browser>';
        return yargs
            .command(`install ${browserArgType}`, 'Download and install the specified browser. If successful, the command outputs the actual browser buildId that was installed and the absolute path to the browser executable (see --format).', yargs => {
            if (this.#pinnedBrowsers) {
                yargs.example('$0 install', 'Install all pinned browsers');
            }
            yargs
                .example('$0 install chrome', `Install the ${latestOrPinned} available build of the Chrome browser.`)
                .example('$0 install chrome@latest', 'Install the latest available build for the Chrome browser.')
                .example('$0 install chrome@stable', 'Install the latest available build for the Chrome browser from the stable channel.')
                .example('$0 install chrome@beta', 'Install the latest available build for the Chrome browser from the beta channel.')
                .example('$0 install chrome@dev', 'Install the latest available build for the Chrome browser from the dev channel.')
                .example('$0 install chrome@canary', 'Install the latest available build for the Chrome Canary browser.')
                .example('$0 install chrome@115', 'Install the latest available build for Chrome 115.')
                .example('$0 install chromedriver@canary', 'Install the latest available build for ChromeDriver Canary.')
                .example('$0 install chromedriver@115', 'Install the latest available build for ChromeDriver 115.')
                .example('$0 install chromedriver@115.0.5790', 'Install the latest available patch (115.0.5790.X) build for ChromeDriver.')
                .example('$0 install chrome-headless-shell', 'Install the latest available chrome-headless-shell build.')
                .example('$0 install chrome-headless-shell@beta', 'Install the latest available chrome-headless-shell build corresponding to the Beta channel.')
                .example('$0 install chrome-headless-shell@118', 'Install the latest available chrome-headless-shell 118 build.')
                .example('$0 install chromium@1083080', 'Install the revision 1083080 of the Chromium browser.')
                .example('$0 install firefox', 'Install the latest nightly available build of the Firefox browser.')
                .example('$0 install firefox@stable', 'Install the latest stable build of the Firefox browser.')
                .example('$0 install firefox@beta', 'Install the latest beta build of the Firefox browser.')
                .example('$0 install firefox@devedition', 'Install the latest devedition build of the Firefox browser.')
                .example('$0 install firefox@esr', 'Install the latest ESR build of the Firefox browser.')
                .example('$0 install firefox@nightly', 'Install the latest nightly build of the Firefox browser.')
                .example('$0 install firefox@stable_111.0.1', 'Install a specific version of the Firefox browser.')
                .example('$0 install firefox --platform mac', 'Install the latest Mac (Intel) build of the Firefox browser.');
            if (this.#allowCachePathOverride) {
                yargs.example('$0 install firefox --path /tmp/my-browser-cache', 'Install to the specified cache directory.');
            }
            const yargsWithBrowserParam = this.#defineBrowserParameter(yargs, !Boolean(this.#pinnedBrowsers));
            const yargsWithPlatformParam = this.#definePlatformParameter(yargsWithBrowserParam);
            return this.#definePathParameter(yargsWithPlatformParam, false)
                .option('base-url', {
                type: 'string',
                desc: 'Base URL to download from',
            })
                .option('install-deps', {
                type: 'boolean',
                desc: 'Whether to attempt installing system dependencies (only supported on Linux, requires root privileges).',
                default: false,
            })
                .option('format', {
                type: 'string',
                desc: 'Format to use for the output. Supported placeholders: {{browser}}, {{buildId}}, {{path}}, {{platform}}',
                default: '{{browser}}@{{buildId}} {{path}}',
            });
        }, async (args) => {
            if (this.#pinnedBrowsers && !args.browser) {
                // Use allSettled to avoid scenarios that
                // a browser may fail early and leave the other
                // installation in a faulty state
                const result = await Promise.allSettled(Object.entries(this.#pinnedBrowsers).map(async ([browser, options]) => {
                    if (options.skipDownload) {
                        return;
                    }
                    await this.#install({
                        ...args,
                        browser: {
                            name: browser,
                            buildId: options.buildId,
                        },
                    });
                }));
                for (const install of result) {
                    if (install.status === 'rejected') {
                        throw install.reason;
                    }
                }
            }
            else {
                await this.#install(args);
            }
        })
            .command('launch <browser>', 'Launch the specified browser', yargs => {
            yargs
                .example('$0 launch chrome@115.0.5790.170', 'Launch Chrome 115.0.5790.170')
                .example('$0 launch firefox@112.0a1', 'Launch the Firefox browser identified by the milestone 112.0a1.')
                .example('$0 launch chrome@115.0.5790.170 --detached', 'Launch the browser but detach the sub-processes.')
                .example('$0 launch chrome@canary --system', 'Try to locate the Canary build of Chrome installed on the system and launch it.')
                .example('$0 launch chrome@115.0.5790.170 -- --version', 'Launch Chrome 115.0.5790.170 and pass custom argument to the binary.');
            const yargsWithExtraAgs = yargs.parserConfiguration({
                'populate--': true,
                // Yargs does not have the correct overload for this.
            });
            const yargsWithBrowserParam = this.#defineBrowserParameter(yargsWithExtraAgs, true);
            const yargsWithPlatformParam = this.#definePlatformParameter(yargsWithBrowserParam);
            return this.#definePathParameter(yargsWithPlatformParam)
                .option('detached', {
                type: 'boolean',
                desc: 'Detach the child process.',
                default: false,
            })
                .option('system', {
                type: 'boolean',
                desc: 'Search for a browser installed on the system instead of the cache folder.',
                default: false,
            })
                .option('dumpio', {
                type: 'boolean',
                desc: "Forwards the browser's process stdout and stderr",
                default: false,
            });
        }, async (args) => {
            const extraArgs = args['--']?.filter(arg => {
                return typeof arg === 'string';
            });
            args.browser.buildId = this.#resolvePinnedBrowserIfNeeded(args.browser.buildId, args.browser.name);
            const executablePath = args.system
                ? computeSystemExecutablePath({
                    browser: args.browser.name,
                    // TODO: throw an error if not a ChromeReleaseChannel is provided.
                    channel: args.browser.buildId,
                    platform: args.platform,
                })
                : computeExecutablePath({
                    browser: args.browser.name,
                    buildId: args.browser.buildId,
                    cacheDir: args.path ?? this.#cachePath,
                    platform: args.platform,
                });
            launch({
                args: extraArgs,
                executablePath,
                dumpio: args.dumpio,
                detached: args.detached,
            });
        })
            .command('clear', this.#allowCachePathOverride
            ? 'Removes all installed browsers from the specified cache directory'
            : `Removes all installed browsers from ${this.#cachePath}`, yargs => {
            return this.#definePathParameter(yargs, true);
        }, async (args) => {
            const cacheDir = args.path ?? this.#cachePath;
            const rl = this.#rl ?? readline.createInterface({ input, output });
            rl.question(`Do you want to permanently and recursively delete the content of ${cacheDir} (yes/No)? `, answer => {
                rl.close();
                if (!['y', 'yes'].includes(answer.toLowerCase().trim())) {
                    console.log('Cancelled.');
                    return;
                }
                const cache = new Cache(cacheDir);
                cache.clear();
                console.log(`${cacheDir} cleared.`);
            });
        })
            .command('list', 'List all installed browsers in the cache directory', yargs => {
            yargs.example('$0 list', 'List all installed browsers in the cache directory');
            if (this.#allowCachePathOverride) {
                yargs.example('$0 list --path /tmp/my-browser-cache', 'List browsers installed in the specified cache directory');
            }
            return this.#definePathParameter(yargs);
        }, async (args) => {
            const cacheDir = args.path ?? this.#cachePath;
            const cache = new Cache(cacheDir);
            const browsers = cache.getInstalledBrowsers();
            for (const browser of browsers) {
                console.log(`${browser.browser}@${browser.buildId} (${browser.platform}) ${browser.executablePath}`);
            }
        })
            .command('bisect <path>', '(experimental) Bisect Chrome for Testing using the specified script. Downloads https://chromium.googlesource.com/chromium/src.git/+/main/tools/bisect-builds.py to ~/bisect-builds.py if needed.', yargs => {
            return yargs
                .positional('path', {
                type: 'string',
                description: 'Path to a script or test name to bisect.',
                demandOption: true,
            })
                .option('good', {
                type: 'string',
                alias: 'g',
                demandOption: true,
                desc: 'Last known good version',
            })
                .option('bad', {
                type: 'string',
                alias: 'b',
                demandOption: true,
                desc: 'First known bad version',
            })
                .option('cft', {
                type: 'boolean',
                desc: 'Use -cft',
                default: true,
            });
        }, async (args) => {
            const isScript = args.path.endsWith('.mjs') ||
                args.path.endsWith('.cjs') ||
                args.path.endsWith('.js');
            const testCommand = isScript
                ? `PUPPETEER_EXECUTABLE_PATH=%p node ${args.path}`
                : `BINARY=%p npm run ${args.path}`;
            const bisectScriptPath = path.join(os.homedir(), 'bisect-builds.py');
            if (!fs.existsSync(bisectScriptPath)) {
                console.log('Downloading bisect-builds.py...');
                const response = await fetch('https://chromium.googlesource.com/chromium/src.git/+/main/tools/bisect-builds.py?format=TEXT');
                if (!response.ok) {
                    throw new Error(`Failed to download bisect-builds.py: ${response.statusText}`);
                }
                const base64Text = await response.text();
                const decodedText = Buffer.from(base64Text, 'base64').toString('utf-8');
                fs.writeFileSync(bisectScriptPath, decodedText, { mode: 0o755 });
                console.log(`Saved bisect-builds.py to ${bisectScriptPath}`);
            }
            const pythonExecutable = 'python3';
            const bisectArgs = [
                bisectScriptPath,
                '-g',
                args.good,
                '-b',
                args.bad,
                args.cft ? '-cft' : '-s',
                '-v',
                '--verify-range',
                '--not-interactive',
                '-c',
                testCommand,
            ];
            await new Promise((resolve, reject) => {
                const createProcess = spawn(pythonExecutable, bisectArgs, {
                    stdio: 'inherit',
                });
                createProcess.on('error', message => {
                    reject(message);
                });
                createProcess.on('exit', code => {
                    if (code !== 0) {
                        reject(new Error(`Process exited with code ${code}`));
                    }
                    else {
                        resolve();
                    }
                });
            });
        })
            .demandCommand(1)
            .help();
    }
    #parseBrowser(version) {
        return version.split('@').shift();
    }
    #parseBuildId(version) {
        const parts = version.split('@');
        return parts.length === 2
            ? parts[1]
            : this.#pinnedBrowsers
                ? 'pinned'
                : 'latest';
    }
    #resolvePinnedBrowserIfNeeded(buildId, browserName) {
        if (buildId === 'pinned') {
            const options = this.#pinnedBrowsers?.[browserName];
            if (!options || !options.buildId) {
                throw new Error(`No pinned version found for ${browserName}`);
            }
            return options.buildId;
        }
        return buildId;
    }
    async #install(args) {
        if (!args.browser) {
            throw new Error(`No browser arg provided`);
        }
        if (!args.platform) {
            throw new Error(`Could not resolve the current platform`);
        }
        args.browser.buildId = this.#resolvePinnedBrowserIfNeeded(args.browser.buildId, args.browser.name);
        const originalBuildId = args.browser.buildId;
        args.browser.buildId = await resolveBuildId(args.browser.name, args.platform, args.browser.buildId);
        await install({
            browser: args.browser.name,
            buildId: args.browser.buildId,
            platform: args.platform,
            cacheDir: args.path ?? this.#cachePath,
            downloadProgressCallback: 'default',
            baseUrl: args.baseUrl,
            buildIdAlias: originalBuildId !== args.browser.buildId ? originalBuildId : undefined,
            installDeps: args.installDeps,
        });
        const executablePath = computeExecutablePath({
            browser: args.browser.name,
            buildId: args.browser.buildId,
            cacheDir: args.path ?? this.#cachePath,
            platform: args.platform,
        });
        console.log(args.format
            .replace(/{{browser}}/g, args.browser.name)
            .replace(/{{buildId}}/g, args.browser.buildId)
            .replace(/{{path}}/g, executablePath)
            .replace(/{{platform}}/g, args.platform));
    }
}
//# sourceMappingURL=CLI.js.map