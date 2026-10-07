var escapeCarriageReturn = require("../index");
var escapeCarriageReturnSafe = require("../index").escapeCarriageReturnSafe;
var expect = require("chai").expect;

describe("Escape carrigage return", function() {
  it("can handle carrigage symbol", function() {
    var txt = escapeCarriageReturn("This sentence\rThat\nwill make you pause.");
    expect(txt).to.equal("That sentence\nwill make you pause.");
  });

  it("can handle carrigage symbol without new line", function() {
    var txt = escapeCarriageReturn("1\r2\r3");
    expect(txt).to.equal("3");
  });

  it("can handle complicated carrigage symbol", function() {
    var input = [
      "hasrn\r\n",
      "hasn\n",
      "\n",
      "abcdef\r",
      "hello\n",
      "ab3\r",
      "x2\r\r",
      "1\r"
    ].join("");

    var output = ["hasrn\n", "hasn\n", "\n", "hellof\n", "123\r"].join("");

    expect(escapeCarriageReturn(input)).to.equal(output);
  });
});

describe("Escape carrigage return safe", function() {
  it("safely escapes multiline text", function() {
    var txt = escapeCarriageReturnSafe(
      "This sentence\rThat\nwill make you\r pause even longer."
    );
    expect(txt).to.equal("That sentence\n pause even longer.");
  });

  it("safely escapes multiline text", function() {
    var txt = escapeCarriageReturnSafe(
      "This sentence\rThat\nwill make you\r pause."
    );
    expect(txt).to.equal("That sentence\nwill make you\r pause.");
  });

  it("can safely handle complicated carrigage symbol", function() {
    var input = [
      "hasrn\r\n",
      "hasn\n",
      "\n",
      "abcdef\r",
      "hello\n",
      "ab3\r",
      "x2\r\r",
      "1\r"
    ].join("");

    var output = [
      "hasrn\n",
      "hasn\n",
      "\n",
      "hellof\n",
      "ab3\r",
      "x2\r",
      "1\r"
    ].join("");

    expect(escapeCarriageReturnSafe(input)).to.equal(output);
  });

  it("safely escapes single line: 1\r2\r3", function() {
    var txt = escapeCarriageReturnSafe("1\r2\r3");
    expect(txt).to.equal("3");
  });

  it("safely escapes single line: 1\r23\r4", function() {
    var txt = escapeCarriageReturnSafe("1\r23\r4");
    expect(txt).to.equal("23\r4");
  });

  it("safely escapes complicated single line", function() {
    var txt = escapeCarriageReturnSafe("12\rabcdef\rg\rhi\rjklm\rn");
    expect(txt).to.equal("abcdef\rjklm\rn");
  });
});
