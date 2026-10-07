'use strict'

const os = require('os')
const childProcess = require('child_process')

function exec (command) {
  const output = childProcess.execSync(command, {encoding: 'utf8'})
  return output
}

let amount
const platform = os.platform()

if (platform === 'linux') {
  const output = exec('lscpu -p | egrep -v "^#" | sort -u -t, -k 2,4 | wc -l')
  amount = parseInt(output.trim(), 10)
} else if (platform === 'darwin') {
  const output = exec('sysctl -n hw.physicalcpu_max')
  amount = parseInt(output.trim(), 10)
} else if (platform === 'windows') {
  const output = exec('WMIC CPU Get NumberOfCores')
  amount = output.split(os.EOL)
    .map(function parse (line) { return parseInt(line) })
    .filter(function numbers (value) { return !isNaN(value) })
    .reduce(function add (sum, number) { return sum + number }, 0)
} else {
  const cores = os.cpus().filter(function (cpu, index) {
    const hasHyperthreading = cpu.model.includes('Intel')
    const isOdd = index % 2 === 1
    return !hasHyperthreading || isOdd
  })
  amount = cores.length
}

module.exports = amount
