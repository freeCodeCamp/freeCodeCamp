/**
 * @fileoverview Helpers to test EventGenerator interface.
 * @author Toru Nagashima
 */
"use strict";

/* global describe, it */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {

    /**
     * Overrideable `describe` function to test.
     * @param {string} text - A description.
     * @param {Function} method - A test logic.
     * @returns {any} The returned value with the test logic.
     */
    describe: (typeof describe === "function") ? describe : /* istanbul ignore next */ function(text, method) {
        return method.apply(this);
    },

    /**
     * Overrideable `it` function to test.
     * @param {string} text - A description.
     * @param {Function} method - A test logic.
     * @returns {any} The returned value with the test logic.
     */
    it: (typeof it === "function") ? it : /* istanbul ignore next */ function(text, method) {
        return method.apply(this);
    },

    /**
     * Does some tests to check a given object implements the EventGenerator interface.
     * @param {Object} instance - An object to check.
     * @returns {void}
     */
    testEventGeneratorInterface(instance) {
        this.describe("should implement EventGenerator interface", () => {
            this.it("should have `emitter` property.", () => {
                assert.equal(typeof instance.emitter, "object");
                assert.equal(typeof instance.emitter.emit, "function");
            });

            this.it("should have `enterNode` property.", () => {
                assert.equal(typeof instance.enterNode, "function");
            });

            this.it("should have `leaveNode` property.", () => {
                assert.equal(typeof instance.leaveNode, "function");
            });
        });
    }
};
