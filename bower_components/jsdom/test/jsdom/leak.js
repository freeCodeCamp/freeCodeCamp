var jsdom = require('../../lib/jsdom');
var path = require('path');

function again() {
  jsdom.env('<a class="testing">test</a>', [
    path.resolve(__dirname, '../jquery-fixtures/jquery-1.6.2.js'
  ], function(errors, window) {
    window.close();
    setTimeout(again, 0);
  });
}

again();
