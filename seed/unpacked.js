/* eslint-disable no-unused-vars,max-len */
window._ = require('lodash');
window.test = require('tape').test;

// check for Browser TAP chrome extension, available here:
// https://chrome.google.com/webstore/detail/browser-tap/ncfblaiipckncgeipgmpdioedcdmofei?hl=en
if (window.tapExtension) {
  window.test = window.tapExtension(window.test);
}

window.addAssertsToTapTest = require('./addAssertsToTapTest');
window.$ = require('jquery');

test('framework', function(t) {
  t.plan(1);
  t.equal(1, 1, 'one equals one');
});

