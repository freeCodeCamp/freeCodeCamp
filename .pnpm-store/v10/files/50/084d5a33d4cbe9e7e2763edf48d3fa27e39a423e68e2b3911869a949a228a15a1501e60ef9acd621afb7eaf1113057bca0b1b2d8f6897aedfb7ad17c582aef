var through = require("through")
var test    = require("tape")

var duplex  = require("../index")

var readable = through()
var writable = through(write)
var written = 0
var data = 0

var stream = duplex(writable, readable)

function write() {
    written++
}

stream.on("data", ondata)

function ondata() {
    data++
}

test("emit and write", function(t) {
    t.plan(2)

    stream.write()
    readable.emit("data")

    t.equal(written, 1, "should have written once")
    t.equal(data, 1, "should have received once")
})
