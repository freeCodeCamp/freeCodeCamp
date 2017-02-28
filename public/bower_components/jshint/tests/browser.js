"use strict";

var path = require("path");
var phantom = require("phantom");
var createTestServer = require("./helpers/browser/server");
var options = {
  /**
   * The `phantom` module provides a Node.js API for the PhantomJS binary,
   * while the `phantomjs` module includes the binary itself.
   */
  path: path.dirname(require("phantomjs").path) + "/",

  /**
   * Disable the optional `weak` module due to installation difficulties in
   * Windows environments.
   */
  dnodeOpts: {
    weak: false
  }
};
var port = process.env.NODE_PORT || 8045;

phantom.create(function(ph) {
  ph.createPage(function(page) {
    createTestServer(port, function(server) {
      page.onConsoleMessage(function(str) {
        console.log(str);
      });

      page.set("onCallback", function(err) {
        ph.exit();
        server.close();
        if (err) {
          process.exit(1);
        }
      });

      page.set("onError", function(msg, trace) {
        console.error(msg);
        console.error(trace);
        process.exit(1);
      });

      page.open("http://localhost:" + port, function () {});
    });
  });
}, options);
