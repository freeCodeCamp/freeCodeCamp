Bluebird = require "bluebird"
exec = require("child_process").execSync
{assert} = require "chai"

describe "scripts/initital-value.coffee (module.uptime(), expressed in milliseconds)", ->
  result = exec("./test/scripts/initial-value.coffee").toString().trim()
  it "printed #{result}", ->
  it "printed a value above 100", -> assert.isAbove result, 100
  it "printed a value below 350", -> assert.isBelow result, 350

describe "scripts/delayed-require.coffee (sum of uptime and 250 ms delay`)", ->
  result = exec("./test/scripts/delayed-require.coffee").toString().trim()
  it "printed #{result}", ->
  it "printed a value above 350", -> assert.isAbove result, 350
  it "printed a value below 600", -> assert.isBelow result, 600

describe "scripts/delayed-call.coffee (sum of uptime and 250 ms delay`)", ->
  result = exec("./test/scripts/delayed-call.coffee").toString().trim()
  it "printed #{result}", ->
  it "printed a value above 350", -> assert.isAbove result, 350
  it "printed a value below 600", -> assert.isBelow result, 600

describe "scripts/difference.coffee", ->
  result = exec("./test/scripts/difference.coffee").toString().trim()
  it "printed #{result}", ->
  it "printed a value above 0.005", -> assert.isAbove result, 0.005
  it "printed a value below 0.07", -> assert.isBelow result, 0.07
