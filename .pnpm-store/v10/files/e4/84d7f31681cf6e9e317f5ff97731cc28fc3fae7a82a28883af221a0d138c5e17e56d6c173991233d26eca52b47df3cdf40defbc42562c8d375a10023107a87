'use strict'

const { spawn } = require('child_process')

const cliSelect = require('cli-select')
const simpleGit = require('simple-git')

const git = simpleGit(process.cwd())

const COMMAND = 'npm run bench'
const DEFAULT_BRANCH = 'master'
const PERCENT_THRESHOLD = 5
const greyColor = '\x1b[30m'
const redColor = '\x1b[31m'
const greenColor = '\x1b[32m'
const resetColor = '\x1b[0m'

async function selectBranchName (message, branches) {
  console.log(message)
  const result = await cliSelect({
    type: 'list',
    name: 'branch',
    values: branches
  })
  console.log(result.value)
  return result.value
}

async function executeCommandOnBranch (command, branch) {
  console.log(`${greyColor}Checking out "${branch}"${resetColor}`)
  await git.checkout(branch)

  console.log(`${greyColor}Execute "${command}"${resetColor}`)
  const childProcess = spawn(command, { stdio: 'pipe', shell: true })

  let result = ''
  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data.toString())
    result += data.toString()
  })

  await new Promise(resolve => childProcess.on('close', resolve))

  console.log()

  return parseBenchmarksStdout(result)
}

function parseBenchmarksStdout (text) {
  const results = []

  const lines = text.split('\n')
  for (const line of lines) {
    const match = /^(.+?)(\.*) x (.+) ops\/sec .*$/.exec(line)
    if (match !== null) {
      results.push({
        name: match[1],
        alignedName: match[1] + match[2],
        result: parseInt(match[3].split(',').join(''))
      })
    }
  }

  return results
}

function compareResults (featureBranch, mainBranch) {
  for (const { name, alignedName, result: mainBranchResult } of mainBranch) {
    const featureBranchBenchmark = featureBranch.find(result => result.name === name)
    if (featureBranchBenchmark) {
      const featureBranchResult = featureBranchBenchmark.result
      const percent = (featureBranchResult - mainBranchResult) * 100 / mainBranchResult
      const roundedPercent = Math.round(percent * 100) / 100

      const percentString = roundedPercent > 0 ? `+${roundedPercent}%` : `${roundedPercent}%`
      const message = alignedName + percentString.padStart(7, '.')

      if (roundedPercent > PERCENT_THRESHOLD) {
        console.log(`${greenColor}${message}${resetColor}`)
      } else if (roundedPercent < -PERCENT_THRESHOLD) {
        console.log(`${redColor}${message}${resetColor}`)
      } else {
        console.log(message)
      }
    }
  }
}

(async function () {
  const branches = await git.branch()
  const currentBranch = branches.branches[branches.current]

  let featureBranch = null
  let mainBranch = null

  if (process.argv[2] === '--ci') {
    featureBranch = currentBranch.name
    mainBranch = DEFAULT_BRANCH
  } else {
    featureBranch = await selectBranchName('Select the branch you want to compare (feature branch):', branches.all)
    mainBranch = await selectBranchName('Select the branch you want to compare with (main branch):', branches.all)
  }

  try {
    const featureBranchResult = await executeCommandOnBranch(COMMAND, featureBranch)
    const mainBranchResult = await executeCommandOnBranch(COMMAND, mainBranch)
    compareResults(featureBranchResult, mainBranchResult)
  } catch (error) {
    console.error('Switch to origin branch due to an error', error.message)
  }

  await git.checkout(currentBranch.commit)
  await git.checkout(currentBranch.name)

  console.log(`${greyColor}Back to ${currentBranch.name} ${currentBranch.commit}${resetColor}`)
})()
