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

exports.returnIndividualStory = function(req, res, next) {
    var dashedName = req.params.storyName;

    storyName = dashedName.replace(/\-/g, ' ');

    Story.find({'headline' : new RegExp(storyName, 'i')}, function(err, story) {
        if (err) {
            next(err);
        }


        if (story.length < 1) {
            req.flash('errors', {
                msg: "404: We couldn't find a story with that name. Please double check the name."
            });

            return res.redirect('/stories/');
        }

        story = story.pop();
        var dashedNameFull = story.headline.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull != dashedName) {
            return res.redirect('../stories/' + dashedNameFull);
        }

        res.render('post/show', {
            title: story.headline,
            dashedName: story.link,
            author: story.author,
            body: story.body,
            rank: story.rank,
            upVotes: story.upVotes,
            comments: story.comments
        });
    });
};
