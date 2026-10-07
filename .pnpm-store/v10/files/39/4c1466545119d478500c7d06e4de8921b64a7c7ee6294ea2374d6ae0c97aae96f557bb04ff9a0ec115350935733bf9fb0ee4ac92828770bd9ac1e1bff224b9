"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectJestVersion = void 0;
let cachedJestVersion = null;

const detectJestVersion = () => {
  if (cachedJestVersion) {
    return cachedJestVersion;
  }

  try {
    const jestPath = require.resolve('jest/package.json');

    const jestPackageJson = // eslint-disable-next-line @typescript-eslint/no-require-imports
    require(jestPath);

    if (jestPackageJson.version) {
      const [majorVersion] = jestPackageJson.version.split('.');
      return cachedJestVersion = parseInt(majorVersion, 10);
    }
  } catch {}

  throw new Error('Unable to detect Jest version - please ensure jest package is installed, or otherwise set version explicitly');
};

exports.detectJestVersion = detectJestVersion;