"use strict";
var import_coreBundle = require("../coreBundle");
var import_package = require("../package");
const { program } = require("../utilsBundle");
const p = program.version("Version " + import_package.packageJSON.version).name("Playwright MCP");
import_coreBundle.tools.decorateMCPCommand(p);
program.parseAsync(process.argv).catch((e) => {
  console.error(e.message);
  import_coreBundle.utils.gracefullyProcessExitDoNotHang(1);
});
