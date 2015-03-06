var R = require('ramda'),
    debug = require('debug')('freecc:cntr:story'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    User = require('./../models/User'),
    moment = require('../public/js/lib/moment/moment.js'),
    resources = require('./resources'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    secrets = require('../config/secrets');

exports.hotJSON = function(req, res, next) {
    var story = Story.find({}).sort({'rank': -1});
    story.exec(function(err, stories) {
        if (err) {
            throw err;
        }
        res.json(stories);
    });
};

exports.recentJSON = function(req, res, next) {
    var story = Story.find({}).sort({'timePosted': -1});
    story.exec(function(err, stories) {
        if (err) {
            throw err;
        }
        res.json(stories);
    });
};

exports.hot = function(req, res, next) {
    res.render('stories/index', {
        page: 'hot'
    });
};

exports.submitNew = function(req,res, next) {
    res.render('stories/index', {
        page: 'submit'
    });
};

exports.search = function(req, res, next) {
    res.render('stories/index', {
        page: 'search'
    });
};

exports.recent = function(req, res, next) {
    res.render('stories/index', {
        page: 'recent'
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
            rank: story.upVotes.length,
            upVotes: story.upVotes,
            comments: story.comments,
            id: story._id,
            user: req.user,
            timeAgo: moment(story.timePosted).fromNow(),
            image: story.image
        });
    });
};

exports.getStories = function(req, res, next) {
    MongoClient.connect(secrets.db, function(err, database) {
        db = database;
        debug('this is data', req.body.data.searchValue);
        db.collection('stories').find({
            "$text": {
                "$search": req.body.data.searchValue
            }
        }, {
            headline: 1,
            timePosted: 1,
            link: 1,
            description: 1,
            rank: 1,
            upVotes: 1,
            author: 1,
            comments: 1,
            image: 1,
            storyLink: 1,
            textScore: {
                $meta: "textScore"
            }
        }, {
            sort: {
                textScore: {
                    $meta: "textScore"
                }
            }
        }).toArray(function(err, items) {
            debug('items', items);
            return res.json(items);
        });
    });
        //Story.find({'headline': new RegExp(req.body.data.searchValue, 'i')}, function (err, results) {
        //    if (err) {
        //        res.status(500);
        //    }
        //    debug('results are', results);
        //
        //    res.json(results);
        //});
    //}a);
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
        rank: 1,
        upVotes: data.upVotes,
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

exports.commentSubmit = function(req, res, next) {
    var data = req.body.data;
    var comment = new Comment({
        associatedPost: data.associatedPost,
        body: data.body,
        rank: 0,
        upvotes: 0,
        author: data.author,
        comments: [],
        topLevel: true
    });
    commentSave(comment, Story, res);
};

exports.commentOnCommentSubmit = function(req, res, next) {
    var idToFind = req.params.id;
    debug('idToFind', idToFind);
    var data = req.body.data;
    var comment = new Comment({
        associatedPost: data.associatedPost,
        body: data.body,
        rank: 0,
        upvotes: 0,
        author: data.author,
        comments: [],
        topLevel: false
    });
    commentSave(comment, Comment, res);
};

function commentSave(comment, Context, res) {
    comment.save(function(err, data) {
        if (err) {
            return res.status(500);
        }
        debug('this is data from save', data);
        try {
            Context.find({'_id': comment.associatedPost}, function (err, associatedStory) {
                if (err) {
                    return res.status(500);
                }
                associatedStory = associatedStory.pop();
                if (associatedStory) {
                    associatedStory.comments.push(data._id);
                    associatedStory.save(function (err, data) {
                        if (err) {
                            res.status(500);
                        }
                        res.send(true);
                    });
                }
            });
        } catch (e) {
            // delete comment
            return res.status(500);
        }
    });
}
