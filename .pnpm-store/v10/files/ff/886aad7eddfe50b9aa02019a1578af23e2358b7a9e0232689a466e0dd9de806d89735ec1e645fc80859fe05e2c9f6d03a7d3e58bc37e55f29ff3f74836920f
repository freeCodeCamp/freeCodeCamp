"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calls a specific handler function for all events that are encountered.
 */
var MultiplexHandler = /** @class */ (function () {
    /**
     * @param func The function to multiplex all events to.
     */
    function MultiplexHandler(func) {
        this.func = func;
    }
    MultiplexHandler.prototype.onattribute = function (name, value, quote) {
        this.func("onattribute", name, value, quote);
    };
    MultiplexHandler.prototype.oncdatastart = function () {
        this.func("oncdatastart");
    };
    MultiplexHandler.prototype.oncdataend = function () {
        this.func("oncdataend");
    };
    MultiplexHandler.prototype.ontext = function (text) {
        this.func("ontext", text);
    };
    MultiplexHandler.prototype.onprocessinginstruction = function (name, value) {
        this.func("onprocessinginstruction", name, value);
    };
    MultiplexHandler.prototype.oncomment = function (comment) {
        this.func("oncomment", comment);
    };
    MultiplexHandler.prototype.oncommentend = function () {
        this.func("oncommentend");
    };
    MultiplexHandler.prototype.onclosetag = function (name) {
        this.func("onclosetag", name);
    };
    MultiplexHandler.prototype.onopentag = function (name, attribs) {
        this.func("onopentag", name, attribs);
    };
    MultiplexHandler.prototype.onopentagname = function (name) {
        this.func("onopentagname", name);
    };
    MultiplexHandler.prototype.onerror = function (error) {
        this.func("onerror", error);
    };
    MultiplexHandler.prototype.onend = function () {
        this.func("onend");
    };
    MultiplexHandler.prototype.onparserinit = function (parser) {
        this.func("onparserinit", parser);
    };
    MultiplexHandler.prototype.onreset = function () {
        this.func("onreset");
    };
    return MultiplexHandler;
}());
exports.default = MultiplexHandler;
