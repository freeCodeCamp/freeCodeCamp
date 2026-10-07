var levenshtien = require("./../index");

var assert = require("assert");

describe("Damerau - Levenshtein", function() {
  describe("Equality", function() {
    it("returns 0 steps for equal strings", function() {
      assert.deepEqual(levenshtien("test", "test"), {
        steps: 0,
        relative: 0,
        similarity: 1
      });
    });
  });

  describe("Additions", function() {
    it("returns 1 step when appending one char", function() {
      assert.deepEqual(levenshtien("test", "tests"), {
        steps: 1,
        relative: 1 / 5,
        similarity: 1 - 1 / 5
      });
    });

    it("returns 1 step when prepending one char", function() {
      assert.deepEqual(levenshtien("test", "stest"), {
        steps: 1,
        relative: 1 / 5,
        similarity: 1 - 1 / 5
      });
    });

    it("returns 2 steps when appending two char", function() {
      assert.deepEqual(levenshtien("test", "mytest"), {
        steps: 2,
        relative: 2 / 6,
        similarity: 1 - 2 / 6
      });
    });

    it("returns 7 steps when appending seven char", function() {
      assert.deepEqual(levenshtien("test", "mycrazytest"), {
        steps: 7,
        relative: 7 / 11,
        similarity: 1 - 7 / 11
      });
    });

    it("returns 9 steps when prepend two chars and append seven chars", function() {
      assert.deepEqual(levenshtien("test", "mytestiscrazy"), {
        steps: 9,
        relative: 9 / 13,
        similarity: 1 - 9 / 13
      });
    });
  });


  describe("Addition of repeated chars", function() {
    it("returns 1 step when repeating a character", function() {
      assert.deepEqual(levenshtien("test", "teest"), {
        steps: 1,
        relative: 1 / 5,
        similarity: 1 - 1 / 5
      });
    });

    it("returns 2 step when repeating a character twice", function() {
      assert.deepEqual(levenshtien("test", "teeest"), {
        steps: 2,
        relative: 2 / 6,
        similarity: 1 - 2 / 6
      });
    });
  });


  describe("#Deletion", function() {
    it("returns 1 step when removing one char", function() {
      assert.deepEqual(levenshtien("test", "tst"), {
        steps: 1,
        relative: 1 / 4,
        similarity: 1 - 1 / 4
      });
    });
  });


  describe("Transposition", function() {
    it("returns 1 step when transposing one char", function() {
      assert.deepEqual(levenshtien("test", "tset"), {
        steps: 1,
        relative: 1 / 4,
        similarity: 1 - 1 / 4
      });
    });
  });


  describe("Addition with transposition", function() {
    it("returns 2 step when transposing one char and append another", function() {
      assert.deepEqual(levenshtien("test", "tsets"), {
        steps: 2,
        relative: 2 / 5,
        similarity: 1 - 2 / 5
      });
    });
    it("returns 2 step when transposing a char and repeating it", function() {
      assert.deepEqual(levenshtien("test", "tsset"), {
        steps: 2,
        relative: 2 / 5,
        similarity: 1 - 2 / 5
      });
    });
  });

  describe("Transposition of multiple chars", function() {
    it("returns 1 step when transposing two neighbouring characters", function() {
      assert.deepEqual(levenshtien("banana", "banaan"), {
        steps: 1,
        relative: 1 / 6,
        similarity: 1 - 1 / 6
      });
    });

    it("returns 2 step when transposing two neighbouring characters by two places", function() {
      assert.deepEqual(levenshtien("banana", "nabana"), {
        steps: 2,
        relative: 2 / 6,
        similarity: 1 - 2 / 6
      });
    });

    it("returns 2 step when transposing two pairs of characters", function() {
      assert.deepEqual(levenshtien("banana", "abnaan"), {
        steps: 2,
        relative: 2 / 6,
        similarity: 1 - 2 / 6
      });
    });
  });

  describe("Empty strings", function() {
    it("returns 0 step and 0 relative when both are empty", function() {
      assert.deepEqual(levenshtien("", ""), {
        steps: 0,
        relative: 0,
        similarity: 1
      });
    });

    it("returns steps equal to first string lenght when second string is empty", function() {
      assert.deepEqual(levenshtien("test", ""), {
        steps: 4,
        relative: 4 / 4,
        similarity: 0
      });
    });

    it("returns steps equal to second string lenght when first string is empty", function() {
      assert.deepEqual(levenshtien("", "test"), {
        steps: 4,
        relative: 1,
        similarity: 0
      });
    });
  });
});
