"use strict";

var jsdom = require("../..").jsdom;

exports["should not give CSS parsing errors upon encountering @-moz-document (GH-687)"] = function (t) {
    var css = ".x @-moz-document url-prefix() { .y { color: blue; } }";
    var html = "<!DOCTYPE html><html><head><style>" + css + "</style></head><body><p>Hi</p></body></html>";

    jsdom.env({ html: html, done: function (errors, window) {
        t.strictEqual(errors, null);
        t.done();
    } });
};
