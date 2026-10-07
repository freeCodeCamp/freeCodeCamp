"use strict";

exports.__esModule = true;
exports.testImportError = void 0;
const testImportError = (moduleName, err) => {
  // PnP will return the following code when an import is allowed per the
  // dependency tree rules but the requested file doesn't exist
  if (err.code === `QUALIFIED_PATH_RESOLUTION_FAILED` || err.pnpCode === `QUALIFIED_PATH_RESOLUTION_FAILED`) {
    return true;
  }
  const regex = new RegExp(
  // stderr will show ModuleNotFoundError, but Error is correct since we toString below
  `Error:\\s(\\S+\\s)?[Cc]annot find module\\s.${moduleName.replace(/[-/\\^$*+?.()|[\]{}]/g, `\\$&`)}`);
  const [firstLine] = err.toString().split(`\n`);
  return regex.test(firstLine.replace(/\\\\/g, `\\`));
};
exports.testImportError = testImportError;
//# sourceMappingURL=test-import-error.js.map