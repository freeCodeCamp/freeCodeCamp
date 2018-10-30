(function () {
  "use strict";

  var atob = require('.');
  var encoded = "SGVsbG8sIFdvcmxkIQ=="
  var unencoded = "Hello, World!";
  /*
    , encoded = "SGVsbG8sIBZM"
    , unencoded = "Hello, 世界"
  */

  if (unencoded !== atob(encoded)) {
    console.log('[FAIL]', unencoded, atob(encoded));
    return;
  }

  console.log('[PASS] all tests pass');
}());
