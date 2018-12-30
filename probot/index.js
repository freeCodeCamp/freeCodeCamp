#! /usr/bin/env node
const debug = require('debug')('probot:presolver')
const Presolver = require('./lib/presolver')

async function probotPlugin (robot) {
  const events = [
    'pull_request.opened',
    'pull_request.edited',
    'pull_request.synchronize',
    'pull_request.reopened',
    'pull_request.labeled'
  ]

  robot.on(events, presolve.bind(null, robot))
}

async function presolve (app, context) {
  const presolver = forRepository(context)
  const pullRequest = getPullRequest(context)
  return presolver.presolve(pullRequest)
}

function forRepository (context) {
  const config = Object.assign({}, context.repo({ logger: debug }))
  return new Presolver(context, config)
}

function getPullRequest (context) {
  return context.payload.pull_request || context.payload.review.pull_request
}

module.exports = probotPlugin
