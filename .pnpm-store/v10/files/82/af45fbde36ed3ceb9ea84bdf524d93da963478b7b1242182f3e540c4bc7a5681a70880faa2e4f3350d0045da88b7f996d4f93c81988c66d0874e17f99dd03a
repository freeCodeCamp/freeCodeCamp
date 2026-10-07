const { assert } = require("chai");

const { decode, encode } = require("../lib");

describe("UTF8", () => {
  it("should f-1(f(x)) = x", () => {
    assert.equal(decode(encode("foo")), "foo");
    assert.equal(decode(encode("éé")), "éé");

    // TODO(sven): utf8 encoder fails here
    // assert.equal(decode(encode("🤣见見")), "🤣见見");
  });
});
