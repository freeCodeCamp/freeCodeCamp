var R = require('ramda'),
    debug = require('debug')('freecc:cntr:story'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    User = require('./../models/User'),
    moment = require('../public/js/lib/moment/moment.js'),
    resources = require('./resources'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    secrets = require('../config/secrets'),
    User = require('./../models/User');

exports.hotJSON = function(req, res, next) {
    var story = Story.find({}).sort({'rank': -1, 'timePosted': -1});
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

exports.preSubmit = function(req, res, next) {

    var data = req.params.newStory;


    data = data.replace(/url=/gi, '').replace(/&title=/gi, ',').split(',');
    var url = data[0];
    var title = data[1];
    res.render('stories/index', {
        page: 'storySubmission',
        storyURL: url,
        storyTitle: title
    });
};


exports.returnIndividualStory = function(req, res, next) {
    var dashedName = req.params.storyName;

    var storyName = dashedName.replace(/\-/g, ' ');

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
        var dashedNameFull = story.storyLink.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull !== dashedName) {
            return res.redirect('../stories/' + dashedNameFull);
        }

        res.render('stories/index', {
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
            image: story.image,
            page: 'show'
        });
    });
};

exports.getStories = function(req, res, next) {
    MongoClient.connect(secrets.db, function(err, database) {
        var db = database;
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
            if (items.length !== 0) {
                return res.json(items);
            }
            return res.status(404);
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

exports.newStory = function(req, res, next) {
    var url = req.body.data.url;
    if (url.search(/^https?:\/\//g) === -1) {
        url = 'http://' + url;
    }
    debug('In pre submit with a url', url);

    Story.find({'link': url}, function(err, story) {
        debug('Attempting to find a story');
        if (err) {
            debug('oops');
            return res.status(500);
        }
        if (story.length) {
            debug('Found a story already, here\'s the return from find', story);
            req.flash('errors', {
                msg: "Someone's already posted that link. Here's the discussion."
            });
            debug('Redirecting the user with', story[0].storyLink);
            return res.json({
                alreadyPosted: true,
                storyURL: story.pop().storyLink
            });
        }
        resources.getURLTitle(url, processResponse);
    });

    function processResponse(err, storyTitle) {
        if (err) {
            res.json({
                alreadyPosted: false,
                storyURL: url,
                storyTitle: ''
            });
        } else {
            storyTitle = storyTitle ? storyTitle : '';
            res.json({
                alreadyPosted: false,
                storyURL: url,
                storyTitle: storyTitle.title
            });
        }
    }
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
    debug('comment submit fired');
    var data = req.body.data;
    var comment = new Comment({
        associatedPost: data.associatedPost,
        body: data.body,
        rank: 0,
        upvotes: 0,
        author: data.author,
        comments: [],
        topLevel: true,
        commentOn: Date.now()
    });
    commentSave(comment, Story, res);
};

exports.commentOnCommentSubmit = function(req, res, next) {
    debug('comment on comment submit');
    var idToFind = req.params.id;
    var data = req.body.data;
    var comment = new Comment({
        associatedPost: data.associatedPost,
        body: data.body,
        rank: 0,
        upvotes: 0,
        author: data.author,
        comments: [],
        topLevel: false,
        commentOn: Date.now()
    });
    commentSave(comment, Comment, res);
};

function commentSave(comment, Context, res) {
    comment.save(function(err, data) {
        if (err) {
            return res.status(500);
        }
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
