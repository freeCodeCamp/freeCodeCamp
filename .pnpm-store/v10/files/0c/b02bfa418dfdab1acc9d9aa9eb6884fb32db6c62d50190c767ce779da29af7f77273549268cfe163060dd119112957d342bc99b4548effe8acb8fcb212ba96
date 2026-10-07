"use strict";

const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
exports.onCreateWebpackConfig = ({
  stage,
  actions
}, {
  disable = false,
  devMode = false,
  ...options
}) => {
  if (disable) return;
  if (stage === 'develop' && devMode || stage === 'build-javascript') {
    // Prevent server to keep runing in Gatsby Cloud
    const defaultOptions = process.env.GATSBY_CLOUD ? {
      analyzerMode: 'static'
    } : {
      analyzerMode: 'server',
      analyzerPort: 3001
    };
    actions.setWebpackConfig({
      plugins: [new BundleAnalyzerPlugin({
        ...defaultOptions,
        ...options
      })]
    });
  }
};