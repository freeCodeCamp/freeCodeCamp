"use strict";

exports.__esModule = true;
exports.ensureFileContent = ensureFileContent;
var _fsExtra = require("fs-extra");
async function ensureFileContent(file, data) {
  let previousContent = undefined;
  try {
    previousContent = await (0, _fsExtra.readFile)(file, `utf8`);
  } catch (e) {
    // whatever throws, we'll just write the file
  }
  if (previousContent !== data) {
    await (0, _fsExtra.outputFile)(file, data);
    return true;
  }
  return false;
}
//# sourceMappingURL=ensure-file-content.js.map