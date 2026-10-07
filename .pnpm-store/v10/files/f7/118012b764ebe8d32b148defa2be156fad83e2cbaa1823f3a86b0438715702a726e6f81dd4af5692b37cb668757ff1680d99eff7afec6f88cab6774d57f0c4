// @flow

import {Resolver} from '@parcel/plugin';
import NodeResolver from '@parcel/node-resolver-core';

// Throw user friendly errors on special webpack loader syntax
// ex. `imports-loader?$=jquery!./example.js`
const WEBPACK_IMPORT_REGEX = /^\w+-loader(?:\?\S*)?!/;

export default (new Resolver({
  resolve({dependency, options, specifier, logger}) {
    if (WEBPACK_IMPORT_REGEX.test(dependency.specifier)) {
      throw new Error(
        `The import path: ${dependency.specifier} is using webpack specific loader import syntax, which isn't supported by Parcel.`,
      );
    }

    const resolver = new NodeResolver({
      fs: options.inputFS,
      projectRoot: options.projectRoot,
      // Extensions are always required in URL dependencies.
      extensions:
        dependency.specifierType === 'commonjs' ||
        dependency.specifierType === 'esm'
          ? ['ts', 'tsx', 'mjs', 'js', 'jsx', 'cjs', 'json']
          : [],
      mainFields: ['source', 'browser', 'module', 'main'],
      packageManager: options.packageManager,
      shouldAutoInstall: options.shouldAutoInstall,
      logger,
    });

    return resolver.resolve({
      filename: specifier,
      specifierType: dependency.specifierType,
      range: dependency.range,
      parent: dependency.resolveFrom,
      env: dependency.env,
      sourcePath: dependency.sourcePath,
      loc: dependency.loc,
    });
  },
}): Resolver);
