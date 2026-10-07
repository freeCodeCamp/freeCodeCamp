"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createCli = void 0;
var _path = _interopRequireDefault(require("path"));
var _resolveCwd = _interopRequireDefault(require("resolve-cwd"));
var _yargs = _interopRequireDefault(require("yargs"));
var _envinfo = _interopRequireDefault(require("envinfo"));
var _fsExistsCached = require("fs-exists-cached");
var _createGatsby = require("create-gatsby");
var _reporter = _interopRequireDefault(require("./reporter"));
var _redux = require("./reporter/redux");
var _version = require("./util/version");
var _initStarter = require("./init-starter");
var _login = require("./login");
var _logout = require("./logout");
var _whoami = require("./whoami");
var _packageManager = require("./util/package-manager");
const handlerP = fn => args => {
  Promise.resolve(fn(args)).then(() => process.exit(0), err => _reporter.default.panic(err));
};
function buildLocalCommands(cli, isLocalSite) {
  const defaultHost = `localhost`;
  const defaultPort = `8000`;
  const directory = _path.default.resolve(`.`);

  // 'not dead' query not available in browserslist used in Gatsby v1
  const DEFAULT_BROWSERS = getLocalGatsbyMajorVersion() === 1 ? [`> 1%`, `last 2 versions`, `IE >= 9`] : [`>0.25%`, `not dead`];
  const siteInfo = {
    directory,
    browserslist: DEFAULT_BROWSERS,
    sitePackageJson: undefined
  };
  const useYarn = (0, _fsExistsCached.sync)(_path.default.join(directory, `yarn.lock`));
  if (isLocalSite) {
    const json = require(_path.default.join(directory, `package.json`));
    siteInfo.sitePackageJson = json;
    siteInfo.browserslist = json.browserslist || siteInfo.browserslist;
  }
  function getLocalGatsbyMajorVersion() {
    const version = (0, _version.getLocalGatsbyVersion)();
    if (version) {
      return Number(version.split(`.`)[0]);
    }
    return undefined;
  }
  function resolveLocalCommand(command) {
    if (!isLocalSite) {
      cli.showHelp();
      _reporter.default.verbose(`current directory: ${directory}`);
      return _reporter.default.panic(`gatsby <${command}> can only be run for a gatsby site.\n` + `Either the current working directory does not contain a valid package.json or ` + `'gatsby' is not specified as a dependency`);
    }
    try {
      const cmdPath = _resolveCwd.default.silent(`gatsby/dist/commands/${command}`) ||
      // Old location of commands
      _resolveCwd.default.silent(`gatsby/dist/utils/${command}`);
      if (!cmdPath) return _reporter.default.panic(`There was a problem loading the local ${command} command. Gatsby may not be installed in your site's "node_modules" directory. Perhaps you need to run "npm install"? You might need to delete your "package-lock.json" as well.`);
      _reporter.default.verbose(`loading local command from: ${cmdPath}`);
      const cmd = require(cmdPath);
      if (cmd instanceof Function) {
        return cmd;
      }
      return _reporter.default.panic(`Handler for command "${command}" is not a function. Your Gatsby package might be corrupted, try reinstalling it and running the command again.`);
    } catch (err) {
      cli.showHelp();
      return _reporter.default.panic(`There was a problem loading the local ${command} command. Gatsby may not be installed. Perhaps you need to run "npm install"?`, err);
    }
  }
  function getCommandHandler(command, handler, nodeEnv) {
    return argv => {
      _reporter.default.setVerbose(!!argv.verbose);
      _reporter.default.setNoColor(!!(argv.noColor || process.env.NO_COLOR));
      process.env.gatsby_log_level = argv.verbose ? `verbose` : `normal`;
      _reporter.default.verbose(`set gatsby_log_level: "${process.env.gatsby_log_level}"`);
      process.env.gatsby_executing_command = command;
      _reporter.default.verbose(`set gatsby_executing_command: "${command}"`);

      // This is to make sure that the NODE_ENV is set before resolveLocalCommand is called
      // This way, cache-lmdb uses the same DB files in main & workers
      if (nodeEnv) {
        process.env.NODE_ENV = nodeEnv;
      }
      const localCmd = resolveLocalCommand(command);
      const args = {
        ...argv,
        ...siteInfo,
        report: _reporter.default,
        useYarn,
        setStore: _redux.setStore
      };
      _reporter.default.verbose(`running command: ${command}`);
      return handler ? handler(args, localCmd) : localCmd(args);
    };
  }
  cli.command({
    command: `develop`,
    describe: `Start development server. Watches files, rebuilds, and hot reloads ` + `if something changes`,
    builder: _ => _.option(`H`, {
      alias: `host`,
      type: `string`,
      default: process.env.GATSBY_HOST || defaultHost,
      describe: process.env.GATSBY_HOST ? `Set host. Defaults to ${process.env.GATSBY_HOST} (set by env.GATSBY_HOST) (otherwise defaults ${defaultHost})` : `Set host. Defaults to ${defaultHost}`
    }).option(`p`, {
      alias: `port`,
      type: `string`,
      default: process.env.PORT || defaultPort,
      describe: process.env.PORT ? `Set port. Defaults to ${process.env.PORT} (set by env.PORT) (otherwise defaults ${defaultPort})` : `Set port. Defaults to ${defaultPort}`
    }).option(`o`, {
      alias: `open`,
      type: `boolean`,
      describe: `Open the site in your (default) browser for you.`
    }).option(`S`, {
      alias: `https`,
      type: `boolean`,
      describe: `Use HTTPS. See https://www.gatsbyjs.com/docs/local-https/ as a guide`
    }).option(`c`, {
      alias: `cert-file`,
      type: `string`,
      default: ``,
      describe: `Custom HTTPS cert file (also required: --https, --key-file). See https://www.gatsbyjs.com/docs/local-https/`
    }).option(`k`, {
      alias: `key-file`,
      type: `string`,
      default: ``,
      describe: `Custom HTTPS key file (also required: --https, --cert-file). See https://www.gatsbyjs.com/docs/local-https/`
    }).option(`ca-file`, {
      type: `string`,
      default: ``,
      describe: `Custom HTTPS CA certificate file (also required: --https, --cert-file, --key-file).  See https://www.gatsbyjs.com/docs/local-https/`
    }).option(`graphql-tracing`, {
      type: `boolean`,
      describe: `Trace every graphql resolver, may have performance implications`,
      default: false
    }).option(`open-tracing-config-file`, {
      type: `string`,
      describe: `Tracer configuration file (OpenTracing compatible). See https://gatsby.dev/tracing`
    }).option(`inspect`, {
      type: `number`,
      describe: `Opens a port for debugging. See https://www.gatsbyjs.com/docs/debugging-the-build-process/`
    }).option(`inspect-brk`, {
      type: `number`,
      describe: `Opens a port for debugging. Will block until debugger is attached. See https://www.gatsbyjs.com/docs/debugging-the-build-process/`
    }),
    handler: handlerP(getCommandHandler(`develop`, (args, cmd) => {
      if (Object.prototype.hasOwnProperty.call(args, `inspect`)) {
        args.inspect = args.inspect || 9229;
      }
      if (Object.prototype.hasOwnProperty.call(args, `inspect-brk`)) {
        args.inspectBrk = args[`inspect-brk`] || 9229;
      }
      cmd(args);
      // Return an empty promise to prevent handlerP from exiting early.
      // The development server shouldn't ever exit until the user directly
      // kills it so this is fine.
      return new Promise(() => {});
    }, process.env.NODE_ENV || `development`))
  });
  cli.command({
    command: `build`,
    describe: `Build a Gatsby project.`,
    builder: _ => _.option(`prefix-paths`, {
      type: `boolean`,
      default: process.env.PREFIX_PATHS === `true` || process.env.PREFIX_PATHS === `1`,
      describe: `Build site with link paths prefixed with the pathPrefix value in gatsby-config.js. Default is env.PREFIX_PATHS or false.`
    }).option(`no-uglify`, {
      type: `boolean`,
      default: false,
      describe: `Build site without uglifying JS bundles (for debugging).`
    }).option(`profile`, {
      type: `boolean`,
      default: process.env.REACT_PROFILE === `true` || process.env.REACT_PROFILE === `1`,
      describe: `Build site with react profiling (this can add some additional overhead). See https://reactjs.org/docs/profiler`
    }).option(`graphql-tracing`, {
      type: `boolean`,
      describe: `Trace every graphql resolver, may have performance implications`,
      default: false
    }).option(`open-tracing-config-file`, {
      type: `string`,
      describe: `Tracer configuration file (OpenTracing compatible). See https://gatsby.dev/tracing`
    })
    // log-pages and write-to-file were added specifically to experimental GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES feature
    // in gatsby@2. They are useful, but not very applicable (specifically `--write-to-file`) as generic approach, as it only
    // list pages without other artifacts, so it's useful in very narrow scope. Because we don't have alternative right now
    // those toggles are kept for users that rely on them, but we won't promote them and will keep them "hidden".
    .option(`log-pages`, {
      type: `boolean`,
      default: false,
      describe: `Log the pages that changes since last build.`,
      hidden: true
    }).option(`write-to-file`, {
      type: `boolean`,
      default: false,
      describe: `Save the log of changed pages for future comparison.`,
      hidden: true
    }).option(`functions-platform`, {
      type: `string`,
      describe: `The platform bundled functions will execute on. Defaults to current platform or settings provided by used adapter.`
    }).option(`functions-arch`, {
      type: `string`,
      describe: `The architecture bundled functions will execute on. Defaults to current architecture or settings provided by used adapter.`
    }),
    handler: handlerP(getCommandHandler(`build`, (args, cmd) => cmd(args), `production`))
  });
  cli.command({
    command: `serve`,
    describe: `Serve previously built Gatsby site.`,
    builder: _ => _.option(`H`, {
      alias: `host`,
      type: `string`,
      default: defaultHost,
      describe: `Set host. Defaults to ${defaultHost}`
    }).option(`p`, {
      alias: `port`,
      type: `string`,
      default: `9000`,
      describe: `Set port. Defaults to 9000`
    }).option(`o`, {
      alias: `open`,
      type: `boolean`,
      describe: `Open the site in your (default) browser for you.`
    }).option(`prefix-paths`, {
      type: `boolean`,
      default: process.env.PREFIX_PATHS === `true` || process.env.PREFIX_PATHS === `1`,
      describe: `Serve site with link paths prefixed with the pathPrefix value in gatsby-config.js.Default is env.PREFIX_PATHS or false.`
    }).option(`open-tracing-config-file`, {
      type: `string`,
      describe: `Tracer configuration file (OpenTracing compatible). See https://gatsby.dev/tracing`
    }),
    handler: getCommandHandler(`serve`, (args, cmd) => cmd(args), process.env.NODE_ENV || `production`)
  });
  cli.command({
    command: `info`,
    describe: `Get environment information for debugging and issue reporting`,
    builder: _ => _.option(`C`, {
      alias: `clipboard`,
      type: `boolean`,
      default: false,
      describe: `Automagically copy environment information to clipboard`
    }),
    handler: args => {
      try {
        const copyToClipboard =
        // Clipboard is not accessible when on a linux tty
        process.platform === `linux` && !process.env.DISPLAY ? false : args.clipboard;
        _envinfo.default.run({
          System: [`OS`, `CPU`, `Shell`],
          Binaries: [`Node`, `npm`, `Yarn`],
          Browsers: [`Chrome`, `Edge`, `Firefox`, `Safari`],
          Languages: [`Python`],
          npmPackages: `gatsby*`,
          npmGlobalPackages: `gatsby*`
        }).then(envinfoOutput => {
          console.log(envinfoOutput);
          if (copyToClipboard) {
            // clipboardy is ESM-only package
            import(`clipboardy`).then(({
              default: clipboardy
            }) => {
              clipboardy.writeSync(envinfoOutput);
            });
          }
        });
      } catch (err) {
        console.log(`Error: Unable to print environment info`);
        console.log(err);
      }
    }
  });
  cli.command({
    command: `feedback`,
    builder: _ => _.option(`disable`, {
      type: `boolean`,
      describe: `Opt out of future feedback requests`
    }).option(`enable`, {
      type: `boolean`,
      describe: `Opt into future feedback requests`
    }),
    handler: getCommandHandler(`feedback`)
  });
  cli.command({
    command: `clean`,
    describe: `Wipe the local gatsby environment including built assets and cache`,
    handler: getCommandHandler(`clean`)
  });
  cli.command({
    command: `repl`,
    describe: `Get a node repl with context of Gatsby environment, see (https://www.gatsbyjs.com/docs/gatsby-repl/)`,
    handler: getCommandHandler(`repl`, (args, cmd) => cmd(args), process.env.NODE_ENV || `development`)
  });
  cli.command({
    command: `plugin <cmd> [plugins...]`,
    describe: `Useful commands relating to Gatsby plugins`,
    builder: yargs => yargs.positional(`cmd`, {
      choices: [`docs`, `ls`],
      describe: "Valid commands include `docs`, `ls`.",
      type: `string`
    }),
    handler: async ({
      cmd
    }) => {
      const pluginHandler = require(`./handlers/plugin`).default;
      await pluginHandler(siteInfo.directory, cmd);
    }
  });
  if (process.env.GATSBY_EXPERIMENTAL_CLOUD_CLI) {
    cli.command({
      command: `login`,
      describe: `Log in to Gatsby Cloud.`,
      handler: handlerP(async () => {
        await (0, _login.login)();
      })
    });
    cli.command({
      command: `logout`,
      describe: `Sign out of Gatsby Cloud.`,
      handler: handlerP(async () => {
        await (0, _logout.logout)();
      })
    });
    cli.command({
      command: `whoami`,
      describe: `Gives the username of the current logged in user.`,
      handler: handlerP(async () => {
        await (0, _whoami.whoami)();
      })
    });
  }
}
function isLocalGatsbySite() {
  let inGatsbySite = false;
  try {
    const {
      dependencies,
      devDependencies
    } = require(_path.default.resolve(`./package.json`));
    inGatsbySite = dependencies && dependencies.gatsby || devDependencies && devDependencies.gatsby;
  } catch (err) {
    /* ignore */
  }
  return !!inGatsbySite;
}
function getVersionInfo() {
  const {
    version
  } = require(`../package.json`);
  const isGatsbySite = isLocalGatsbySite();
  if (isGatsbySite) {
    // we need to get the version from node_modules
    let gatsbyVersion = (0, _version.getLocalGatsbyVersion)();
    if (!gatsbyVersion) {
      gatsbyVersion = `unknown`;
    }
    return `Gatsby CLI version: ${version}
Gatsby version: ${gatsbyVersion}
  Note: this is the Gatsby version for the site at: ${process.cwd()}`;
  } else {
    return `Gatsby CLI version: ${version}`;
  }
}
const createCli = argv => {
  const cli = (0, _yargs.default)(argv).parserConfiguration({
    "boolean-negation": false
  });
  const isLocalSite = isLocalGatsbySite();
  cli.scriptName(`gatsby`).usage(`Usage: $0 <command> [options]`).alias(`h`, `help`).alias(`v`, `version`).option(`verbose`, {
    default: false,
    type: `boolean`,
    describe: `Turn on verbose output`,
    global: true
  }).option(`no-color`, {
    alias: `no-colors`,
    default: false,
    type: `boolean`,
    describe: `Turn off the color in output`,
    global: true
  }).option(`json`, {
    describe: `Turn on the JSON logger`,
    default: false,
    type: `boolean`,
    global: true
  });
  buildLocalCommands(cli, isLocalSite);
  try {
    cli.version(`version`, `Show the version of the Gatsby CLI and the Gatsby package in the current project`, getVersionInfo());
  } catch (e) {
    // ignore
  }
  return cli.command({
    command: `new [rootPath] [starter]`,
    describe: `Create new Gatsby project.`,
    handler: handlerP(async ({
      rootPath,
      starter
    }) => {
      const starterStr = starter ? String(starter) : undefined;
      const rootPathStr = rootPath ? String(rootPath) : undefined;

      // We only run the interactive CLI when there are no arguments passed in
      if (!starterStr && !rootPathStr) {
        await (0, _createGatsby.run)();
      } else {
        await (0, _initStarter.initStarter)(starterStr, rootPathStr);
      }
    })
  }).command({
    command: `telemetry`,
    describe: `Enable or disable Gatsby anonymous analytics collection.`,
    builder: yargs => yargs.option(`enable`, {
      type: `boolean`,
      description: `Enable telemetry (default)`
    }).option(`disable`, {
      type: `boolean`,
      description: `Disable telemetry`
    }),
    handler: handlerP(() => {
      _reporter.default.log(`Telemetry is no longer gathered and is always disabled`);
    })
  }).command({
    command: `options [cmd] [key] [value]`,
    describe: `View or set your gatsby-cli configuration settings.`,
    builder: yargs => yargs.positional(`cmd`, {
      choices: [`set`],
      type: `string`,
      describe: `Configure your package manager.`
    }).positional(`key`, {
      choices: [`pm`, `package-manager`],
      type: `string`,
      describe: `Set the package manager \`gatsby new\` is using.`
    }).positional(`value`, {
      choices: [`npm`, `yarn`],
      type: `string`,
      describe: `Set package manager as \`npm\` or \`yarn\`.`
    }),
    handler: handlerP(({
      cmd,
      key,
      value
    }) => {
      if (!(0, _packageManager.getPackageManager)()) {
        (0, _packageManager.setPackageManager)(`npm`);
      }
      if (cmd === `set`) {
        if (key === `pm` || key === `package-manager`) {
          if (value && value !== `yarn` && value !== `npm`) {
            _reporter.default.panic(`Package manager must be yarn or npm.`);
          }
          if (value) {
            // @ts-ignore
            (0, _packageManager.setPackageManager)(value);
            return;
          } else {
            (0, _packageManager.setPackageManager)(`npm`);
          }
        } else {
          _reporter.default.warn(`Please pass your desired config key and value. Currently you can only set your package manager using \`pm\`.`);
        }
        return;
      }
      console.log(`
        Package Manager: ${(0, _packageManager.getPackageManager)()}
        `);
    })
  }).wrap(cli.terminalWidth()).demandCommand(1, `Pass --help to see all available commands and options.`).strict().recommendCommands().parse(argv.slice(2));
};
exports.createCli = createCli;