chai = require "chai"
chai.use(require "chai-increasing")
{assert,expect} = chai
Bluebird = require "bluebird"

now = require "../"

getUptime = -> process.uptime() * 1e3

describe "now", ->
  it "reported time differs at most 1ms from a freshly reported uptime", ->
    assert.isAtMost Math.abs(now()-getUptime()), 1

  it "two subsequent calls return an increasing number", ->
    assert.isBelow now(), now()

  it "has less than 10 microseconds overhead", ->
    assert.isBelow Math.abs(now() - now()), 0.010

  it "can be called 1 million times in under 1 second (averaging under 1 microsecond per call)", ->
    @timeout 1000
    now() for [0...1e6]
    undefined

  it "for 10,000 numbers, number n is never bigger than number n-1", ->
    stamps = (now() for [1...10000])
    expect(stamps).to.be.increasing

  it "shows that at least 0.2 ms has passed after a timeout of 1 ms", ->
    earlier = now()
    Bluebird.resolve().delay(1).then -> assert.isAbove (now()-earlier), 0.2

  it "shows that at most 3 ms has passed after a timeout of 1 ms", ->
    earlier = now()
    Bluebird.resolve().delay(1).then -> assert.isBelow (now()-earlier), 3

  it "shows that at least 190ms ms has passed after a timeout of 200ms", ->
    earlier = now()
    Bluebird.resolve().delay(200).then -> assert.isAbove (now()-earlier), 190

  it "shows that at most 220 ms has passed after a timeout of 200ms", ->
    earlier = now()
    Bluebird.resolve().delay(200).then -> assert.isBelow (now()-earlier), 220
