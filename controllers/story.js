var R = require('ramda'),
    debug = require('debug')('freecc:cntr:post'),
    Post = require('./../models/Post'),
    Comment = require('./../models/Comment'),
    User = require('./../models/User'),
    resources = require('./resources');

/**
 *  Post Controller
 */

exports.index = function(req, res, next) {
    var posts = Post.find({}).sort({'rank': -1});
    posts.exec(function(err, listings) {
        if (err) {
            throw err;
        }
        res.json(listing);
    });
};