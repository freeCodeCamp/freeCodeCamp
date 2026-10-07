"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getPhysicalCpuCount = getPhysicalCpuCount;
var _os = _interopRequireDefault(require("os"));
var _child_process = _interopRequireDefault(require("child_process"));
// Forked from physical-cpu-count package from npm

function exec(command) {
  const output = _child_process.default.execSync(command, {
    encoding: `utf8`
  });
  return output;
}

/*
 * Fallback if child process fails to receive CPU count
 */
function fallbackToNodeJSCheck() {
  const cores = _os.default.cpus().filter(function (cpu, index) {
    const hasHyperthreading = cpu.model.includes(`Intel`);
    const isOdd = index % 2 === 1;
    return !hasHyperthreading || isOdd;
  });
  return cores.length;
}
function getPhysicalCpuCount() {
  const platform = _os.default.platform();
  try {
    if (platform === `linux`) {
      const output = exec(`lscpu -p | grep -E -v "^#" | sort -u -t, -k 2,4 | wc -l`);
      return Number(output.trim());
    }
    if (platform === `darwin`) {
      const output = exec(`sysctl -n hw.physicalcpu_max`);
      return Number(output.trim());
    }
    if (platform === `win32`) {
      const output = exec(`WMIC CPU Get NumberOfCores`);
      return output.replace(/\r/g, ``).split(`\n`).map(line => Number(line)).filter(value => !isNaN(value)).reduce((sum, number) => sum + number, 0);
    }
  } catch (err) {
    // carry on
  }
  return fallbackToNodeJSCheck();
}