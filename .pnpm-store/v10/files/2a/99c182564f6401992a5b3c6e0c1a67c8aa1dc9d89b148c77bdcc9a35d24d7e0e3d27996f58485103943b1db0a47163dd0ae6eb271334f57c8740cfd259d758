"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initializeYurnalistLogger = initializeYurnalistLogger;
var _path = _interopRequireDefault(require("path"));
var _redux = require("../../redux");
var _constants = require("../../constants");
var _yurnalist = require("yurnalist");
var _progress = _interopRequireDefault(require("progress"));
var _chalk = _interopRequireDefault(require("chalk"));
var _boxen = _interopRequireDefault(require("boxen"));
var _generateTrees = require("../../../util/generate-trees");
var _parseComponentPath = require("gatsby-core-utils/parse-component-path");
function treeGenerator({
  path,
  pages,
  slices,
  isFirst,
  isLast
}) {
  let topLevelIcon = `├`;
  if (isFirst) {
    topLevelIcon = `┌`;
  }
  if (isLast) {
    topLevelIcon = `└`;
  }
  const componentTree = [`${topLevelIcon} ${path}`];
  let items = [];
  if (pages) {
    items = (0, _generateTrees.generatePageTree)(pages);
  } else if (slices) {
    items = (0, _generateTrees.generateSliceTree)(slices);
  }
  items.map((page, index) => {
    componentTree.push([isLast ? ` ` : `│`, ` ${index === items.length - 1 ? `└` : `├`} `, `${page.symbol} ${page.text}`].join(``));
  });
  return componentTree.join(`\n`);
}
function generatePageTreeToConsole(yurnalist, state) {
  const root = state.root;
  const componentWithPages = new Map();
  const sliceWithComponents = new Map();
  for (const {
    componentPath,
    pages,
    isSlice
  } of state.components.values()) {
    const layoutComponent = (0, _parseComponentPath.getPathToLayoutComponent)(componentPath);
    const relativePath = _path.default.posix.relative(root, layoutComponent);
    const pagesByMode = componentWithPages.get(relativePath) || {
      SSG: new Set(),
      DSG: new Set(),
      SSR: new Set(),
      FN: new Set()
    };
    const sliceByComponent = sliceWithComponents.get(relativePath) || new Set();
    if (isSlice) {
      pages.forEach(sliceName => {
        sliceByComponent.add(sliceName);
      });
      sliceWithComponents.set(relativePath, sliceByComponent);
    } else {
      pages.forEach(pagePath => {
        const gatsbyPage = state.pages.get(pagePath);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        pagesByMode[gatsbyPage.mode].add(pagePath);
      });
      componentWithPages.set(relativePath, pagesByMode);
    }
  }
  for (const {
    originalAbsoluteFilePath,
    functionRoute
  } of state.functions.values()) {
    componentWithPages.set(_path.default.posix.relative(root, originalAbsoluteFilePath), {
      SSG: new Set(),
      DSG: new Set(),
      SSR: new Set(),
      FN: new Set([`/api/${functionRoute}`])
    });
  }
  const pageTreeConsole = [];
  pageTreeConsole.push(`\n${_chalk.default.underline(`Pages`)}\n`);
  let i = 0;
  for (const [componentPath, pages] of componentWithPages) {
    const isFirst = i === 0;
    const isLast = i === componentWithPages.size - 1;
    const output = treeGenerator({
      isFirst,
      isLast,
      path: componentPath,
      pages
    });
    pageTreeConsole.push(output);
    i++;
  }
  if (sliceWithComponents.size > 0) {
    pageTreeConsole.push(``);
    pageTreeConsole.push(`\n${_chalk.default.underline(`Slices`)}\n`);
    let i = 0;
    for (const [componentPath, slicesName] of sliceWithComponents) {
      const isFirst = i === 0;
      const isLast = i === sliceWithComponents.size - 1;
      const output = treeGenerator({
        isFirst,
        isLast,
        path: componentPath,
        slices: slicesName
      });
      pageTreeConsole.push(output);
      i++;
    }
  }
  pageTreeConsole.push(``);
  pageTreeConsole.push((0, _boxen.default)([`  (SSG) Generated at build time`, `D (DSG) Deferred static generation - page generated at runtime`, `∞ (SSR) Server-side renders at runtime (uses getServerData)`, `λ (Function) Gatsby function`].join(`\n`), {
    padding: 1,
    margin: {
      left: 2,
      right: 2,
      top: 0,
      bottom: 0
    },
    // @ts-ignore - bad type in boxen
    borderStyle: `round`
  }));
  yurnalist.log(pageTreeConsole.join(`\n`));
}
function initializeYurnalistLogger() {
  const activities = {};
  const yurnalist = (0, _yurnalist.createReporter)({
    emoji: true,
    verbose: true
  });
  const levelToYurnalist = {
    [_constants.LogLevels.Log]: yurnalist.log.bind(yurnalist),
    [_constants.LogLevels.Warning]: yurnalist.warn.bind(yurnalist),
    [_constants.LogLevels.Error]: yurnalist.error.bind(yurnalist),
    [_constants.LogLevels.Info]: yurnalist.info.bind(yurnalist),
    [_constants.LogLevels.Success]: yurnalist.success.bind(yurnalist),
    [_constants.LogLevels.Debug]: yurnalist.verbose.bind(yurnalist),
    [_constants.ActivityLogLevels.Success]: yurnalist.success.bind(yurnalist),
    [_constants.ActivityLogLevels.Failed]: text => {
      yurnalist.log(`${_chalk.default.red(`failed`)} ${text}`);
    },
    [_constants.ActivityLogLevels.Interrupted]: text => {
      yurnalist.log(`${_chalk.default.gray(`not finished`)} ${text}`);
    }
  };
  (0, _redux.onLogAction)(action => {
    switch (action.type) {
      case _constants.Actions.Log:
        {
          const yurnalistMethod = levelToYurnalist[action.payload.level];
          if (!yurnalistMethod) {
            process.stdout.write(`NO "${action.payload.level}" method\n`);
          } else {
            let message = action.payload.text;
            if (action.payload.duration) {
              message += ` - ${action.payload.duration.toFixed(3)}s`;
            }
            if (action.payload.statusText) {
              message += ` - ${action.payload.statusText}`;
            }
            yurnalistMethod(message);
          }
          break;
        }
      case _constants.Actions.StartActivity:
        {
          if (action.payload.type === _constants.ActivityTypes.Spinner) {
            const spinner = yurnalist.activity();
            spinner.tick(action.payload.text);
            const activity = {
              text: action.payload.text,
              statusText: action.payload.statusText,
              update(payload) {
                // TODO: I'm not convinced that this is ever called with a text property.
                // From searching the codebase it appears that we do not ever assign a text
                // property during the IUpdateActivity action.
                if (payload.text) {
                  activity.text = payload.text;
                }
                if (payload.statusText) {
                  activity.statusText = payload.statusText;
                }
                let message = activity.text;
                if (activity.statusText) {
                  message += ` - ${activity.statusText}`;
                }
                message += ` id:"${action.payload.id}"`;
                spinner.tick(message);
              },
              end() {
                spinner.end();
              }
            };
            activities[action.payload.id] = activity;
          } else if (action.payload.type === _constants.ActivityTypes.Progress) {
            const bar = new _progress.default(` [:bar] :current/:total :elapsed s :rate /s :percent ${action.payload.text}`, {
              total: Math.max(action.payload.total || 1, 1) || 1,
              // Not zero. Otherwise you get 0/0 errors.
              // curr: action.payload.current, // see below
              width: 30,
              clear: true
            });

            // There is a bug in the `progress` package where the timer doesn't
            // start until the first tick and setting `curr` will cause the
            // time/eta to remain zero: https://github.com/visionmedia/node-progress/issues/81
            // This is a workaround although the eta will initially be wrong
            // until it settles, if starting at non-zero.
            if (typeof action.payload.current === `number` && action.payload.current >= 0) {
              bar.tick(action.payload.current);
            }
            activities[action.payload.id] = {
              text: undefined,
              statusText: undefined,
              update(payload) {
                if (payload.total) {
                  bar.total = payload.total;
                }
                if (payload.current) {
                  bar.curr = payload.current;
                }
                bar.tick(0);
              },
              end() {}
            };
          }
          break;
        }
      case _constants.Actions.UpdateActivity:
        {
          const activity = activities[action.payload.id];
          if (activity) {
            activity.update(action.payload);
          }
          break;
        }
      case _constants.Actions.EndActivity:
        {
          const activity = activities[action.payload.id];
          if (activity) {
            activity.end();
            delete activities[action.payload.id];
          }
          break;
        }
      case _constants.Actions.RenderPageTree:
        {
          generatePageTreeToConsole(yurnalist, action.payload);
          break;
        }
    }
  });
}