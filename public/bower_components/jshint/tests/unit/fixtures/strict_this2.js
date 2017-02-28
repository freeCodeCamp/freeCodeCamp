/*global console*/

this.myx = 'mineX';

(function () {
  "use strict";
  function x() {
    /*jshint validthis:true */
    if (this) {
      console.log(this.myx);
    } else {
      console.log(this);
    }
  }

  x();
  x.call(this);
}.call(this));