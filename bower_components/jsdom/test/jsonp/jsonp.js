"use strict";

var jsdom = require("../../").jsdom;
var url = require("url");
var path = require("path");
var http = require("http");
var querystring = require("querystring");
var jQueryFile = path.resolve(__dirname, "../jquery-fixtures/jquery-1.6.4.min.js");

exports["making a JSONP request from a jsdom window using jQuery"] = function (t) {
  var server = http.createServer(function (req, res) {
    res.writeHead(200);
    var u = url.parse(req.url, true);
    res.write(u.query.jsoncallback + "({\"message\":\"jsonp works!\"});");
    res.end();
  });

  server.listen(43213, "127.0.0.1", function () {
    jsdom.env({
      html: "<!DOCTYPE html><html><head></head><body></body></html>",
      scripts: [jQueryFile],
      features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"]
      },
      done: function (errors, window) {
        t.ifError(errors);

        window.jQuery.getJSON("http://localhost:43213?jsoncallback=?", function (data) {
          t.equal(data.message, "jsonp works!");
          server.close();
          t.done();
        });
      }
    });
  });
};
