var R = require('ramda'),
    debug = require('debug')('freecc:cntr:story'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    User = require('./../models/User'),
    moment = require('../public/js/lib/moment/moment.js'),
    resources = require('./resources');

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
        res.render('stories/index');
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
        if (dashedNameFull !== dashedName) {
            return res.redirect('../stories/' + dashedNameFull);
        }
        debug('Story', story);

        res.render('stories/show', {
            title: story.headline,
            link: story.link,
            author: story.author,
            body: story.body,
            rank: story.rank,
            upVotes: story.upVotes,
            comments: story.comments,
            id: story._id,
            user: req.user,
            timeAgo: moment(story.timePosted).fromNow()
        });
    });
};

exports.upvote = function(req, res, next) {
    var data = req.body.data;
    Story.find({'_id': data.id}, function(err, story) {
        if (err) {
            throw err;
        }
        story = story.pop();
        story.rank++;
        story.upVotes.push(
            {
                upVotedBy: data.upVoter._id,
                upVotedByUsername: data.upVoter.profile.username
            }
        );
        story.save();
        return res.send(story);
    });
};

exports.comments = function(req, res, next) {
    var data = req.params.id;
    Comment.find({'_id': data}, function(err, comment) {
        if (err) {
            throw err;
        }
        comment = comment.pop();
        return res.send(comment);
    });
};
