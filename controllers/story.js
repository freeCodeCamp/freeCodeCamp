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

    var storyName = dashedName.replace(/\-/g, ' ');

    debug('looking for %s', storyName);

    Story.find({'storyLink' : new RegExp(storyName, 'i')}, function(err, story) {
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
            description: story.description,
            rank: story.rank,
            upVotes: story.upVotes,
            comments: story.comments,
            id: story._id,
            user: req.user,
            timeAgo: moment(story.timePosted).fromNow(),
            image: story.image
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

/*

 author: {},
 comments: {
 type: Array,
 default: []
 },
 image:
 */

exports.storySubmission = function(req, res, next) {
    var data = req.body.data;
    var storyLink = data.headline
        .replace(/\'/g, '')
        .replace(/\"/g, '')
        .replace(/,/g, '')
        .replace(/[^a-z0-9]/gi, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase();
    var link = data.link;
    if (link.search(/^https?:\/\//g) === -1) {
        link = 'http://' + link;
    }
    var story = new Story({
        headline: data.headline,
        timePosted: Date.now(),
        link: link,
        description: data.description,
        rank: 0,
        upVotes: 0,
        author: data.author,
        comments: [],
        image: data.image,
        storyLink: storyLink
    });

    debug('this is a story', story);

    story.save(function(err, data) {
        if (err) {
            return res.status(500);
        }
        res.send(JSON.stringify({
            storyLink: story.storyLink.replace(/\s/g, '-').toLowerCase()
        }));
    });
};
