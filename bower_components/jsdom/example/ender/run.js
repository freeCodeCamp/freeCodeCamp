var jsdom  = require("../../lib/jsdom");

jsdom.env("<html><body></body></html>", ["ender.js"], function(errors, window) {
	if (errors) {
		console.error(errors);
		return;
	}
  window.$('body').append("<div class='testing'>Hello World, It works!</div>");
  console.log(window.$(".testing").text());
});
