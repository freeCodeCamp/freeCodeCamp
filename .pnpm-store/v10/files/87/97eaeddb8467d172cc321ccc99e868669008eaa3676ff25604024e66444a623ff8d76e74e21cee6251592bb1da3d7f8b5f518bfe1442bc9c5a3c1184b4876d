var assert = require("assert"),
    sprintfjs = require("../src/sprintf.js"),
    sprintf = sprintfjs.sprintf,
    vsprintf = sprintfjs.vsprintf

describe("sprintfjs", function() {
    var pi = 3.141592653589793

    it("should return formated strings for simple placeholders", function() {
        assert.equal("%", sprintf("%%"))
        assert.equal("10", sprintf("%b", 2))
        assert.equal("A", sprintf("%c", 65))
        assert.equal("2", sprintf("%d", 2))
        assert.equal("2", sprintf("%i", 2))
        assert.equal("2", sprintf("%d", "2"))
        assert.equal("2", sprintf("%i", "2"))
        assert.equal('{"foo":"bar"}', sprintf("%j", {foo: "bar"}))
        assert.equal('["foo","bar"]', sprintf("%j", ["foo", "bar"]))
        assert.equal("2e+0", sprintf("%e", 2))
        assert.equal("2", sprintf("%u", 2))
        assert.equal("4294967294", sprintf("%u", -2))
        assert.equal("2.2", sprintf("%f", 2.2))
        assert.equal("3.141592653589793", sprintf("%g", pi))
        assert.equal("10", sprintf("%o", 8))
        assert.equal("%s", sprintf("%s", "%s"))
        assert.equal("ff", sprintf("%x", 255))
        assert.equal("FF", sprintf("%X", 255))
        assert.equal("Polly wants a cracker", sprintf("%2$s %3$s a %1$s", "cracker", "Polly", "wants"))
        assert.equal("Hello world!", sprintf("Hello %(who)s!", {"who": "world"}))
    })

    it("should return formated strings for complex placeholders", function() {
        // sign
        assert.equal("2", sprintf("%d", 2))
        assert.equal("-2", sprintf("%d", -2))
        assert.equal("+2", sprintf("%+d", 2))
        assert.equal("-2", sprintf("%+d", -2))
        assert.equal("2", sprintf("%i", 2))
        assert.equal("-2", sprintf("%i", -2))
        assert.equal("+2", sprintf("%+i", 2))
        assert.equal("-2", sprintf("%+i", -2))
        assert.equal("2.2", sprintf("%f", 2.2))
        assert.equal("-2.2", sprintf("%f", -2.2))
        assert.equal("+2.2", sprintf("%+f", 2.2))
        assert.equal("-2.2", sprintf("%+f", -2.2))
        assert.equal("-2.3", sprintf("%+.1f", -2.34))
        assert.equal("-0.0", sprintf("%+.1f", -0.01))
        assert.equal("3.14159", sprintf("%.6g", pi))
        assert.equal("3.14", sprintf("%.3g", pi))
        assert.equal("3", sprintf("%.1g", pi))
        assert.equal("-000000123", sprintf("%+010d", -123))
        assert.equal("______-123", sprintf("%+'_10d", -123))
        assert.equal("-234.34 123.2", sprintf("%f %f", -234.34, 123.2))

        // padding
        assert.equal("-0002", sprintf("%05d", -2))
        assert.equal("-0002", sprintf("%05i", -2))
        assert.equal("    <", sprintf("%5s", "<"))
        assert.equal("0000<", sprintf("%05s", "<"))
        assert.equal("____<", sprintf("%'_5s", "<"))
        assert.equal(">    ", sprintf("%-5s", ">"))
        assert.equal(">0000", sprintf("%0-5s", ">"))
        assert.equal(">____", sprintf("%'_-5s", ">"))
        assert.equal("xxxxxx", sprintf("%5s", "xxxxxx"))
        assert.equal("1234", sprintf("%02u", 1234))
        assert.equal(" -10.235", sprintf("%8.3f", -10.23456))
        assert.equal("-12.34 xxx", sprintf("%f %s", -12.34, "xxx"))
        assert.equal('{\n  "foo": "bar"\n}', sprintf("%2j", {foo: "bar"}))
        assert.equal('[\n  "foo",\n  "bar"\n]', sprintf("%2j", ["foo", "bar"]))

        // precision
        assert.equal("2.3", sprintf("%.1f", 2.345))
        assert.equal("xxxxx", sprintf("%5.5s", "xxxxxx"))
        assert.equal("    x", sprintf("%5.1s", "xxxxxx"))

    })

    it("should return formated strings for callbacks", function() {
        assert.equal("foobar", sprintf("%s", function() { return "foobar" }))
        assert.equal(Date.now(), sprintf("%s", Date.now)) // should pass...
    })
})
