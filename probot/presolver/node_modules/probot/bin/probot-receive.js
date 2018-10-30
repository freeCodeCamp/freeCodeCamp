#!/usr/bin/env node
// Usage: probot receive -e push -p path/to/payload app.js

require('dotenv').config()

const path = require('path')
const uuid = require('uuid')
const program = require('commander')

const { findPrivateKey } = require('../lib/private-key')
const { createProbot } = require('../')

program
  .usage('[options] [path/to/app.js...]')
  .option('-e, --event <event-name>', 'Event name', process.env.GITHUB_EVENT_NAME)
  .option('-p, --payload-path <payload-path>', 'Path to the event payload', process.env.GITHUB_EVENT_PATH)
  .option('-t, --token <access-token>', 'Access token', process.env.GITHUB_TOKEN)
  .option('-a, --app <id>', 'ID of the GitHub App', process.env.APP_ID)
  .option('-P, --private-key <file>', 'Path to certificate of the GitHub App', findPrivateKey)
  .parse(process.argv)

const githubToken = program.token

if (!program.event || !program.payloadPath || !githubToken) {
  program.help()
}

if (githubToken) {
  process.env.DISABLE_STATS = 'true'
}

const payload = require(path.join(process.cwd(), program.payloadPath))

const probot = createProbot({
  id: program.app,
  cert: findPrivateKey(),
  githubToken: githubToken
})

probot.setup(program.args)

probot.logger.debug('Receiving event', program.event)
probot.receive({ name: program.event, payload, id: uuid.v4() }).catch(() => {
  // Process must exist non-zero to indicate that the action failed to run
  process.exit(1)
})
