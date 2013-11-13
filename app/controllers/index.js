/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
