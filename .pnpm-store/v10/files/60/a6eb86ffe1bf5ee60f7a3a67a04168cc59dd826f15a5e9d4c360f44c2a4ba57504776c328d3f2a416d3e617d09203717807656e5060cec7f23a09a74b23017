var combine = require('micromark/dist/util/combine-extensions')
var autolink = require('micromark-extension-gfm-autolink-literal')
var strikethrough = require('micromark-extension-gfm-strikethrough')
var table = require('micromark-extension-gfm-table')
var tasklist = require('micromark-extension-gfm-task-list-item')

module.exports = create

function create(options) {
  return combine([autolink, strikethrough(options), table, tasklist])
}
