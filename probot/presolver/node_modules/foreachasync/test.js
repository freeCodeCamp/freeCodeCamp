(function () {
  "use strict";

  var forEachAsync = require('./forEachAsync').forEachAsync
    ;

  forEachAsync([0, 500, 70, 200, 400, 100], function (next, element, i, arr) {
    // test that array order is as expected
    console.log(element, 'is element', i, 'of', arr.length);

    // test that thisness is applied
    this[element] = i;

    if (i > 2) {
      // test that synchronous callbacks don't mess things up
      next();
    } else {
      // test asynchronous callbacks
      setTimeout(next, element);
    }
  }, {}).then(function () {
    // test that thisness carries
    console.log(this);
  }).then(function () {
    // test then chaining
    console.log("now wasn't that nice?");
  });

}());
