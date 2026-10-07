'use strict'

const path = require('path')
const commist = require('commist')()
const help = require('./')({
  dir: path.join(path.dirname(require.main.filename), 'doc')
})

commist.register('help', help.toStdout)
commist.register('start', function () {
  console.log('Starting the script!')
})

const res = commist.parse(process.argv.splice(2))

if (res) {
  help.toStdout()
}
