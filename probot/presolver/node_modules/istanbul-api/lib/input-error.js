/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
module.exports.create = function (message) {
    var err = new Error(message);
    err.inputError = true;
    return err;
};
