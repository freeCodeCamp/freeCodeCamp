"use strict";

var error = require("../valid-error");

module.exports = function () {
 throw error(this);
};
