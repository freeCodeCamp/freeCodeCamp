'use strict'

const assert = require('assert')
const { exec: _exec } = require('child_process')
const { platform } = require('os')
const path = require('path')
const { promisify: pify } = require('util')

const exec = pify(_exec)

const { trueCasePath, trueCasePathSync } = require('../')

const expected = path.join(__dirname, 'fixture/fOoBaR/BAZ')
const requested = expected.toLowerCase()

function testSync() {
  assert.equal(trueCasePathSync(requested), expected, 'trueCasePathSync works')
}

function testAsync() {
  return trueCasePath(requested).then((actual) =>
    assert.equal(actual, expected, 'trueCasePath (async) works')
  )
}

function testRelative() {
  assert.equal(
    trueCasePathSync(requested.replace(process.cwd() + '/', '')),
    expected,
    'works with relative paths'
  )
}

function testSpecialChars() {
  assert.equal(
    trueCasePathSync('test/fixture/F[U&N%K)Y'),
    path.join(__dirname, 'fixture/f[u&n%k)y'),
    'works with file names w/ special chars'
  )
}

async function testSharedHostingWorkaround() {
  await exec('mkdir -p fixture/home/casey', { cwd: __dirname })
  await exec('touch fixture/home/casey/fOoBaR', { cwd: __dirname })
  await exec('chmod 100 fixture/home', { cwd: __dirname })

  assert.throws(() => trueCasePathSync('fixture/home/casey/foobar', __dirname))

  assert.equal(
    trueCasePathSync('foobar', path.join(__dirname, 'fixture/home/casey')),
    path.join(__dirname, 'fixture/home/casey/fOoBaR')
  )
  assert.equal(
    await trueCasePath('foobar', path.join(__dirname, 'fixture/home/casey')),
    path.join(__dirname, 'fixture/home/casey/fOoBaR')
  )
}

Promise.all([
  // testSync(),
  // testRelative(),
  // testAsync(),
  testSpecialChars(),
  platform() === 'linux' ? testSharedHostingWorkaround() : Promise.resolve()
])
  .then(() => {
    console.log('All tests passed!')
  })
  .catch((err) => {
    console.log('Test failed!')
    console.error(err)
    process.exitCode = 1
  })
