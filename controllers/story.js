var R = require('ramda'),
    debug = require('debug')('freecc:cntr:post'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    User = require('./../models/User'),
    resources = require('./resources');

/**
 *  Post Controller
 */

exports.json = function(req, res, next) {
    var story = Story.find({}).sort({'rank': -1});
    story.exec(function(err, stories) {
        if (err) {
            throw err;
        }
        res.json(stories);
    });
};

exports.index = function(req, res, next) {
    var story = Story.find({}).sort({'rank': -1});
    story.exec(function(err, stories) {
        if (err) {
            throw err;
        }
        res.render('post/index');
    });
};
