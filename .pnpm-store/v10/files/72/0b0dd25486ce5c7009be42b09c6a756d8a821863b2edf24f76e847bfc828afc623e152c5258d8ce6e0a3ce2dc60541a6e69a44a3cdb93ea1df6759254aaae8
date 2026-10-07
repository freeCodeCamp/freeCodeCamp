'use strict'

const { spawn } = require('child_process')

const chalk = require('chalk')
const inquirer = require('inquirer')
const simpleGit = require('simple-git')

const git = simpleGit(process.cwd())

const COMMAND = 'npm run bench'
const DEFAULT_BRANCH = 'main'
const PERCENT_THRESHOLD = 5

async function selectBranchName (message, branches) {
  const result = await inquirer.prompt([{
    type: 'list',
    name: 'branch',
    choices: branches,
    loop: false,
    pageSize: 20,
    message
  }])
  return result.branch
}

async function executeCommandOnBranch (command, branch) {
  console.log(chalk.grey(`Checking out "${branch}"`))
  await git.checkout(branch)

  console.log(chalk.grey(`Execute "${command}"`))
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

  for (const line of text.split('\n')) {
    const match = /^(.+?)(\.*) x (.+) ops\/sec .*$/.exec(line)
    if (match !== null) {
      results.push({
        name: match[1],
        alignedName: match[1] + match[2],
        result: parseInt(match[3].replaceAll(',', ''))
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
        console.log(chalk.green(message))
      } else if (roundedPercent < -PERCENT_THRESHOLD) {
        console.log(chalk.red(message))
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

  console.log(chalk.gray(`Back to ${currentBranch.name} ${currentBranch.commit}`))
})()
