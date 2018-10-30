"use strict";

var getTime = Date.prototype.getTime;

module.exports = function () {
 return new Date(getTime.call(this));
};
