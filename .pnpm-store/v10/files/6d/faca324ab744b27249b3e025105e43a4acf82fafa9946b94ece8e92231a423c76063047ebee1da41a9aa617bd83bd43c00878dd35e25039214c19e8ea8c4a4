"use strict";

var _path = require("../../utils/path");
const fs = require(`fs-extra`);
const apiRunnerNode = require(`../../utils/api-runner-node`);
exports.onPreBootstrap = async ({
  store,
  parentSpan
}) => {
  const {
    directory,
    browserslist
  } = store.getState().program;
  const directoryPath = (0, _path.withBasePath)(directory);
  await apiRunnerNode(`onCreateBabelConfig`, {
    stage: `develop`,
    parentSpan
  });
  await apiRunnerNode(`onCreateBabelConfig`, {
    stage: `develop-html`,
    parentSpan
  });
  await apiRunnerNode(`onCreateBabelConfig`, {
    stage: `build-javascript`,
    parentSpan
  });
  await apiRunnerNode(`onCreateBabelConfig`, {
    stage: `build-html`,
    parentSpan
  });
  const babelState = JSON.stringify({
    ...store.getState().babelrc,
    browserslist
  }, null, 2);
  await fs.writeFile(directoryPath(`.cache/babelState.json`), babelState);
};
//# sourceMappingURL=gatsby-node.js.map