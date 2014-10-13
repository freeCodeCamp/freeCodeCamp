"use strict";

var jsdom  = require("../../lib/jsdom");
var window = jsdom.jsdom().parentWindow;

jsdom.jQueryify(window, "http://code.jquery.com/jquery.js", function() {
  window.jQuery("body").append("<div class='testing'>Hello World, It works!</div>");
  console.log(window.jQuery(".testing").text());
});
