"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initStarter = initStarter;
var _betterOpn = _interopRequireDefault(require("better-opn"));
var _child_process = require("child_process");
var _execa = _interopRequireDefault(require("execa"));
var _fsExistsCached = require("fs-exists-cached");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _hostedGitInfo = _interopRequireDefault(require("hosted-git-info"));
var _isValidPath = _interopRequireDefault(require("is-valid-path"));
var _path = _interopRequireDefault(require("path"));
var _prompts = _interopRequireDefault(require("prompts"));
var _url = _interopRequireDefault(require("url"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("./reporter"));
var _packageManager = require("./util/package-manager");
const spawnWithArgs = (file, args, options) => (0, _execa.default)(file, args, {
  stdio: `inherit`,
  preferLocal: false,
  ...options
});
const spawn = (cmd, options) => {
  // Split on spaces, tabs, new lines
  const [file, ...args] = cmd.split(/\s+/);
  return spawnWithArgs(file, args, options);
};
// Checks the existence of yarn package
// We use yarnpkg instead of yarn to avoid conflict with Hadoop yarn
// Refer to https://github.com/yarnpkg/yarn/issues/673
const checkForYarn = () => {
  try {
    (0, _child_process.execSync)(`yarnpkg --version`, {
      stdio: `ignore`
    });
    return true;
  } catch (e) {
    return false;
  }
};
const isAlreadyGitRepository = async () => {
  try {
    return await spawn(`git rev-parse --is-inside-work-tree`, {
      stdio: `pipe`
    }).then(output => output.stdout === `true`);
  } catch (err) {
    return false;
  }
};

// Initialize newly cloned directory as a git repo
const gitInit = async rootPath => {
  _reporter.default.info(`Initialising git in ${rootPath}`);
  return await spawn(`git init`, {
    cwd: rootPath
  });
};

// Create a .gitignore file if it is missing in the new directory
const maybeCreateGitIgnore = async rootPath => {
  if ((0, _fsExistsCached.sync)(_path.default.join(rootPath, `.gitignore`))) {
    return;
  }
  _reporter.default.info(`Creating minimal .gitignore in ${rootPath}`);
  await _fsExtra.default.writeFile(_path.default.join(rootPath, `.gitignore`), `.cache\nnode_modules\npublic\n`);
};

// Create an initial git commit in the new directory
const createInitialGitCommit = async (rootPath, starterUrl) => {
  _reporter.default.info(`Create initial git commit in ${rootPath}`);
  await spawn(`git add -A`, {
    cwd: rootPath
  });
  // use execSync instead of spawn to handle git clients using
  // pgp signatures (with password)
  try {
    (0, _child_process.execSync)(`git commit -m "Initial commit from gatsby: (${starterUrl})"`, {
      cwd: rootPath
    });
  } catch {
    // Remove git support if initial commit fails
    _reporter.default.info(`Initial git commit failed - removing git support\n`);
    _fsExtra.default.removeSync(_path.default.join(rootPath, `.git`));
  }
};

// Executes `npm install` or `yarn install` in rootPath.
const install = async rootPath => {
  const prevDir = process.cwd();
  _reporter.default.info(`Installing packages...`);
  process.chdir(rootPath);
  const npmConfigUserAgent = process.env.npm_config_user_agent;
  try {
    if (!(0, _packageManager.getPackageManager)()) {
      if (npmConfigUserAgent !== null && npmConfigUserAgent !== void 0 && npmConfigUserAgent.includes(`yarn`)) {
        (0, _packageManager.setPackageManager)(`yarn`);
      } else {
        (0, _packageManager.setPackageManager)(`npm`);
      }
    }
    if ((0, _packageManager.getPackageManager)() === `yarn` && checkForYarn()) {
      await _fsExtra.default.remove(`package-lock.json`);
      await spawn(`yarnpkg`);
    } else {
      await _fsExtra.default.remove(`yarn.lock`);
      await spawn(`npm install --loglevel error --color always --legacy-peer-deps --no-audit`);
    }
  } finally {
    process.chdir(prevDir);
  }
};
const ignored = path => !/^\.(git|hg)$/.test(_path.default.basename(path));

// Copy starter from file system.
const copy = async (starterPath, rootPath) => {
  // Chmod with 755.
  // 493 = parseInt('755', 8)
  await _fsExtra.default.ensureDir(rootPath, {
    mode: 493
  });
  if (!(0, _fsExistsCached.sync)(starterPath)) {
    throw new Error(`starter ${starterPath} doesn't exist`);
  }
  if (starterPath === `.`) {
    throw new Error(`You can't create a starter from the existing directory. If you want to
      create a new site in the current directory, the trailing dot isn't
      necessary. If you want to create a new site from a local starter, run
      something like "gatsby new new-gatsby-site ../my-gatsby-starter"`);
  }
  _reporter.default.info(`Creating new site from local starter: ${starterPath}`);
  _reporter.default.log(`Copying local starter to ${rootPath} ...`);
  await _fsExtra.default.copy(starterPath, rootPath, {
    filter: ignored
  });
  _reporter.default.success(`Created starter directory layout`);
  await install(rootPath);
  return true;
};

// Clones starter from URI.
const clone = async (hostInfo, rootPath) => {
  let url;
  // Let people use private repos accessed over SSH.
  if (hostInfo.getDefaultRepresentation() === `sshurl`) {
    url = hostInfo.ssh({
      noCommittish: true
    });
    // Otherwise default to normal git syntax.
  } else {
    url = hostInfo.https({
      noCommittish: true,
      noGitPlus: true
    });
  }
  const branch = hostInfo.committish ? [`-b`, hostInfo.committish] : [];
  _reporter.default.info(`Creating new site from git: ${url}`);
  const args = [`clone`, ...branch, url, rootPath, `--recursive`, `--depth=1`].filter(arg => Boolean(arg));
  await spawnWithArgs(`git`, args);
  _reporter.default.success(`Created starter directory layout`);
  await _fsExtra.default.remove(_path.default.join(rootPath, `.git`));
  await install(rootPath);
  const isGit = await isAlreadyGitRepository();
  if (!isGit) await gitInit(rootPath);
  await maybeCreateGitIgnore(rootPath);
  if (!isGit) await createInitialGitCommit(rootPath, url);
};
const getPaths = async (starterPath, rootPath) => {
  let selectedOtherStarter = false;

  // if no args are passed, prompt user for path and starter
  if (!starterPath && !rootPath) {
    const response = await _prompts.default.prompt([{
      type: `text`,
      name: `path`,
      message: `What is your project called?`,
      initial: `my-gatsby-project`
    }, {
      type: `select`,
      name: `starter`,
      message: `What starter would you like to use?`,
      choices: [{
        title: `gatsby-starter-default`,
        value: `gatsby-starter-default`
      }, {
        title: `gatsby-starter-hello-world`,
        value: `gatsby-starter-hello-world`
      }, {
        title: `gatsby-starter-blog`,
        value: `gatsby-starter-blog`
      }, {
        title: `(Use a different starter)`,
        value: `different`
      }],
      initial: 0
    }]);
    // exit gracefully if responses aren't provided
    if (!response.starter || !response.path.trim()) {
      throw new Error(`Please mention both starter package and project name along with path(if its not in the root)`);
    }
    selectedOtherStarter = response.starter === `different`;
    starterPath = `gatsbyjs/${response.starter}`;
    rootPath = response.path;
  }

  // set defaults if no root or starter has been set yet
  rootPath = rootPath || process.cwd();
  starterPath = starterPath || `gatsbyjs/gatsby-starter-default`;
  return {
    starterPath,
    rootPath,
    selectedOtherStarter
  };
};
const successMessage = path => {
  _reporter.default.info(`
Your new Gatsby site has been successfully bootstrapped. Start developing it by running:

  cd ${path}
  gatsby develop
`);
};

/**
 * Main function that clones or copies the starter.
 */
async function initStarter(starter, root) {
  const {
    starterPath,
    rootPath,
    selectedOtherStarter
  } = await getPaths(starter, root);
  const urlObject = _url.default.parse(rootPath);
  if (selectedOtherStarter) {
    _reporter.default.info(`Opening the starter library at https://gatsby.dev/starters?v=2...\nThe starter library has a variety of options for starters you can browse\n\nYou can then use the gatsby new command with the link to a repository of a starter you'd like to use, for example:\ngatsby new ${rootPath} https://github.com/gatsbyjs/gatsby-starter-default`);
    (0, _betterOpn.default)(`https://gatsby.dev/starters?v=2`);
    return;
  }
  if (urlObject.protocol && urlObject.host) {
    const isStarterAUrl = starter && !_url.default.parse(starter).hostname && !_url.default.parse(starter).protocol;
    if (/gatsby-starter/gi.test(rootPath) && isStarterAUrl) {
      _reporter.default.panic({
        id: `11610`,
        context: {
          starter,
          rootPath
        }
      });
      return;
    }
    _reporter.default.panic({
      id: `11611`,
      context: {
        rootPath
      }
    });
    return;
  }
  if (!(0, _isValidPath.default)(rootPath)) {
    _reporter.default.panic({
      id: `11612`,
      context: {
        path: _path.default.resolve(rootPath)
      }
    });
    return;
  }
  if ((0, _fsExistsCached.sync)(_path.default.join(rootPath, `package.json`))) {
    _reporter.default.panic({
      id: `11613`,
      context: {
        rootPath
      }
    });
    return;
  }
  const hostedInfo = _hostedGitInfo.default.fromUrl(starterPath);
  if (hostedInfo) {
    await clone(hostedInfo, rootPath);
  } else {
    await copy(starterPath, rootPath);
  }
  const sitePath = _path.default.resolve(rootPath);
  const sitePackageJson = await _fsExtra.default.readJSON(_path.default.join(sitePath, `package.json`)).catch(() => {
    _reporter.default.verbose(`Could not read "${_path.default.join(sitePath, `package.json`)}"`);
  });
  await (0, _gatsbyCoreUtils.updateInternalSiteMetadata)({
    name: (sitePackageJson === null || sitePackageJson === void 0 ? void 0 : sitePackageJson.name) || rootPath,
    sitePath,
    lastRun: Date.now()
  }, false);
  successMessage(rootPath);
}