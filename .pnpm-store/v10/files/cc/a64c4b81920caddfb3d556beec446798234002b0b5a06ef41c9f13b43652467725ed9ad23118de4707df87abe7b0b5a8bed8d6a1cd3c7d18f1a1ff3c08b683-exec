'use strict';

const internals = {};


module.exports = function (string) {

    // Escape ^$.*+-?=!:|\/()[]{},

    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
};
