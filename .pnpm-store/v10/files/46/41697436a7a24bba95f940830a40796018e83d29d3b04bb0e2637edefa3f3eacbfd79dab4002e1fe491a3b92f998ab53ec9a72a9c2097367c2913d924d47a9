/**
 * @filedescription Merge Strategy Tests
 */
/* global it, describe, beforeEach */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const assert = require("chai").assert;
const { ValidationStrategy } = require("../src/");

//-----------------------------------------------------------------------------
// Class
//-----------------------------------------------------------------------------

describe("ValidationStrategy", () => {

    describe("boolean", () => {
        it("should not throw an error when the value is a boolean", () => {
            ValidationStrategy.boolean(true);
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy.boolean(null);
            }, /Expected a Boolean/);
        });

        it("should throw an error when the value is a string", () => {
            assert.throws(() => {
                ValidationStrategy.boolean("foo");
            }, /Expected a Boolean/);
        });

        it("should throw an error when the value is a number", () => {
            assert.throws(() => {
                ValidationStrategy.boolean(123);
            }, /Expected a Boolean/);
        });

        it("should throw an error when the value is an object", () => {
            assert.throws(() => {
                ValidationStrategy.boolean({});
            }, /Expected a Boolean/);
        });
    });

    describe("number", () => {
        it("should not throw an error when the value is a number", () => {
            ValidationStrategy.number(25);
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy.number(null);
            }, /Expected a number/);
        });

        it("should throw an error when the value is a string", () => {
            assert.throws(() => {
                ValidationStrategy.number("foo");
            }, /Expected a number/);
        });

        it("should throw an error when the value is a boolean", () => {
            assert.throws(() => {
                ValidationStrategy.number(true);
            }, /Expected a number/);
        });

        it("should throw an error when the value is an object", () => {
            assert.throws(() => {
                ValidationStrategy.number({});
            }, /Expected a number/);
        });
    });

    describe("object", () => {
        it("should not throw an error when the value is an object", () => {
            ValidationStrategy.object({});
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy.object(null);
            }, /Expected an object/);
        });

        it("should throw an error when the value is a string", () => {
            assert.throws(() => {
                ValidationStrategy.object("");
            }, /Expected an object/);
        });
    });

    describe("array", () => {
        it("should not throw an error when the value is an array", () => {
            ValidationStrategy.array([]);
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy.array(null);
            }, /Expected an array/);
        });

        it("should throw an error when the value is a string", () => {
            assert.throws(() => {
                ValidationStrategy.array("");
            }, /Expected an array/);
        });

        it("should throw an error when the value is an object", () => {
            assert.throws(() => {
                ValidationStrategy.array({});
            }, /Expected an array/);
        });
    });

    describe("object?", () => {
        it("should not throw an error when the value is an object", () => {
            ValidationStrategy["object?"]({});
        });

        it("should not throw an error when the value is null", () => {
            ValidationStrategy["object?"](null);
        });

        it("should throw an error when the value is a string", () => {
            assert.throws(() => {
                ValidationStrategy["object?"]("");
            }, /Expected an object/);
        });
    });

    describe("string", () => {
        it("should not throw an error when the value is a string", () => {
            ValidationStrategy.string("foo");
        });

        it("should not throw an error when the value is an empty string", () => {
            ValidationStrategy.string("");
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy.string(null);
            }, /Expected a string/);
        });

        it("should throw an error when the value is an object", () => {
            assert.throws(() => {
                ValidationStrategy.string({});
            }, /Expected a string/);
        });
    });

    describe("string!", () => {
        it("should not throw an error when the value is an string", () => {
            ValidationStrategy["string!"]("foo");
        });

        it("should throw an error when the value is an empty string", () => {
            assert.throws(() => {
                ValidationStrategy["string!"]("");
            }, /Expected a non-empty string/);
        });

        it("should throw an error when the value is null", () => {
            assert.throws(() => {
                ValidationStrategy["string!"](null);
            }, /Expected a non-empty string/);
        });

        it("should throw an error when the value is an object", () => {
            assert.throws(() => {
                ValidationStrategy["string!"]({});
            }, /Expected a non-empty string/);
        });
    });


});
