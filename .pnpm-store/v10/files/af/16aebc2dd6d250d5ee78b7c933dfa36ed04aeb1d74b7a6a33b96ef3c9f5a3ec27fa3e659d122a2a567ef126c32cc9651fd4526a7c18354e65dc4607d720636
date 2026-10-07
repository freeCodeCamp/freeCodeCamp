"use strict";

const path = require(`path`);
exports.onCreateBabelConfig = ({
  actions
}) => {
  // rewrites import { get }from 'lodash' into import get from 'lodash/get';
  actions.setBabelPlugin({
    name: `@sigmacomputing/babel-plugin-lodash`
  });
};
exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  stage,
  actions
}) {
  const objectAssignStub = path.join(__dirname, `polyfills/object-assign.js`);
  const noOp = path.join(__dirname, `polyfills/no-op.js`);
  const fetchStub = path.join(__dirname, `polyfills/fetch.js`);
  const whatwgFetchStub = path.join(__dirname, `polyfills/whatwg-fetch.js`);
  const alias = {
    // These files are already polyfilled so these should return in a no-op
    // Stub Package: object.assign & object-assign
    "object.assign": objectAssignStub,
    "object-assign$": objectAssignStub,
    "@babel/runtime/helpers/extends.js$": objectAssignStub,
    // Stub package: fetch
    unfetch$: fetchStub,
    "unfetch/polyfill$": noOp,
    "isomorphic-unfetch$": fetchStub,
    "isomorphic-fetch$": fetchStub,
    "whatwg-fetch$": whatwgFetchStub
  };
  if (stage === `build-javascript` || stage === `develop`) {
    alias[`url-polyfill$`] = noOp;
  }
  actions.setWebpackConfig({
    resolve: {
      alias
    }
  });
};
//# sourceMappingURL=gatsby-node.js.map