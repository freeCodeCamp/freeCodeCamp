/* eslint-disable no-catch-shadow, no-unused-vars */
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
  nodemailer = require('nodemailer'),
  sanitizeHtml = require('sanitize-html');

function hotRank(timeValue, rank) {
  /*
   * Hotness ranking algorithm: http://amix.dk/blog/post/19588
   * tMS = postedOnDate - foundationTime;
   * Ranking...
   * f(ts, 1, rank) = log(10)z + (ts)/45000;
   */
  var hotness;
  var z = Math.log(rank) / Math.log(10);
  hotness = z + (timeValue / 115200000);
  return hotness;

}

exports.hotJSON = function(req, res, next) {
  var story = Story.find({}).sort({'timePosted': -1}).limit(1000);
  story.exec(function(err, stories) {
    if (err) {
      return next(err);
    }

    var foundationDate = 1413298800000;

    var sliceVal = stories.length >= 100 ? 100 : stories.length;
    return res.json(stories.map(function(elem) {
      return elem;
    }).sort(function(a, b) {
      return hotRank(b.timePosted - foundationDate, b.rank, b.headline)
        - hotRank(a.timePosted - foundationDate, a.rank, a.headline);
    }).slice(0, sliceVal));

  });
};

exports.recentJSON = function(req, res, next) {
  var story = Story.find({}).sort({'timePosted': -1}).limit(100);
  story.exec(function(err, stories) {
    if (err) {
      return next(err);
    }
    return res.json(stories);
  });
};

exports.hot = function(req, res) {
 return res.render('stories/index', {
    title: 'Hot stories currently trending on Camper News',
    page: 'hot'
  });
};

exports.submitNew = function(req, res) {
  return res.render('stories/index', {
    title: 'Submit a new story to Camper News',
    page: 'submit'
  });
};

exports.search = function(req, res) {
  return res.render('stories/index', {
    title: 'Search the archives of Camper News',
    page: 'search'
  });
};

exports.recent = function(req, res) {
  return res.render('stories/index', {
    title: 'Recently submitted stories on Camper News',
    page: 'recent'
  });
};

exports.preSubmit = function(req, res) {

  var data = req.query;
  var cleanData = sanitizeHtml(data.url, {
    allowedTags: [],
    allowedAttributes: []
  }).replace(/&quot;;/g, '"');
  if (data.url.replace(/&/g, '&amp;') !== cleanData) {

    req.flash('errors', {
      msg: 'The data for this post is malformed'
    });
    return res.render('stories/index', {
      page: 'stories/submit'
    });
  }

  var title = data.title || '';
  var image = data.image || '';
  var description = data.description || '';
  return res.render('stories/index', {
    title: 'Confirm your Camper News story submission',
    page: 'storySubmission',
    storyURL: data.url,
    storyTitle: title,
    storyImage: image,
    storyMetaDescription: description
  });
};


exports.returnIndividualStory = function(req, res, next) {
  var dashedName = req.params.storyName;

  var storyName = dashedName.replace(/\-/g, ' ');

  Story.find({'storyLink': new RegExp(storyName, 'i')}, function(err, story) {
    if (err) {
      return next(err);
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

    var userVoted = false;
    try {
      var votedObj = story.upVotes.filter(function(a) {
        return a['upVotedByUsername'] === req.user['profile']['username'];
      });
      if (votedObj.length > 0) {
        userVoted = true;
      }
    } catch(err) {
      userVoted = false;
    }
    res.render('stories/index', {
      title: story.headline,
      link: story.link,
      originalStoryLink: dashedName,
      originalStoryAuthorEmail: story.author.email || "",
      author: story.author,
      description: story.description,
      rank: story.upVotes.length,
      upVotes: story.upVotes,
      comments: story.comments,
      id: story._id,
      timeAgo: moment(story.timePosted).fromNow(),
      image: story.image,
      page: 'show',
      storyMetaDescription: story.metaDescription,
      hasUserVoted: userVoted
    });
  });
};

exports.getStories = function(req, res, next) {
  MongoClient.connect(secrets.db, function(err, database) {
    if (err) {
      return next(err);
    }
    database.collection('stories').find({
      '$text': {
        '$search': req.body.data.searchValue
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
      metaDescription: 1,
      textScore: {
        $meta: 'textScore'
      }
    }, {
      sort: {
        textScore: {
          $meta: 'textScore'
        }
      }
    }).toArray(function(err, items) {
      if (err) {
        return next(err);
      }
      if (items !== null && items.length !== 0) {
        return res.json(items);
      }
      return res.sendStatus(404);
    });
  });
};

exports.upvote = function(req, res, next) {
  var data = req.body.data;
  Story.find({'_id': data.id}, function(err, story) {
    if (err) {
      return next(err);
    }
    story = story.pop();
    story.rank++;
    story.upVotes.push(
      {
        upVotedBy: req.user._id,
        upVotedByUsername: req.user.profile.username
      }
    );
    story.markModified('rank');
    story.save();
    User.find({'_id': story.author.userId}, function(err, user) {
      'use strict';
      if (err) {
        return next(err);
      }
      user = user.pop();
      user.progressTimestamps.push(Date.now());
      user.save();
    });
    return res.send(story);
  });
};

exports.comments = function(req, res, next) {
  var data = req.params.id;
  Comment.find({'_id': data}, function(err, comment) {
    if (err) {
      return next(err);
    }
    comment = comment.pop();
    return res.send(comment);
  });
};

exports.newStory = function(req, res, next) {
  if (!req.user) {
    return next(new Error('Must be logged in'));
  }
  var url = req.body.data.url;
  var cleanURL = sanitizeHtml(url, {
    allowedTags: [],
    allowedAttributes: []
  }).replace(/&quot;/g, '"');
  if (cleanURL !== url) {
    req.flash('errors', {
      msg: "The URL you submitted doesn't appear valid"
    });
    return res.json({
      alreadyPosted: true,
      storyURL: '/stories/submit'
    });

  }
  if (url.search(/^https?:\/\//g) === -1) {
    url = 'http://' + url;
  }
  Story.find({'link': url}, function(err, story) {
    if (err) {
      return next(err);
    }
    if (story.length) {
      req.flash('errors', {
        msg: "Someone's already posted that link. Here's the discussion."
      });
      return res.json({
        alreadyPosted: true,
        storyURL: '/stories/' + story.pop().storyLink
      });
    }
    resources.getURLTitle(url, processResponse);
  });

  function processResponse(err, story) {
    if (err) {
      res.json({
        alreadyPosted: false,
        storyURL: url,
        storyTitle: '',
        storyImage: '',
        storyMetaDescription: ''
      });
    } else {
      res.json({
        alreadyPosted: false,
        storyURL: url,
        storyTitle: story.title,
        storyImage: story.image,
        storyMetaDescription: story.description
      });
    }
  }
};

exports.storySubmission = function(req, res, next) {
  var data = req.body.data;
  if (!req.user) {
    return next(new Error('Not authorized'));
  }
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
    headline: sanitizeHtml(data.headline, {
      allowedTags: [],
      allowedAttributes: []
    }).replace(/&quot;/g, '"'),
    timePosted: Date.now(),
    link: link,
    description: sanitizeHtml(data.description, {
      allowedTags: [],
      allowedAttributes: []
    }).replace(/&quot;/g, '"'),
    rank: 1,
    upVotes: data.upVotes,
    author: {
      picture: req.user.profile.picture,
      userId: req.user._id,
      username: req.user.profile.username,
      email: req.user.email
    },
    comments: [],
    image: data.image,
    storyLink: storyLink,
    metaDescription: data.storyMetaDescription,
    originalStoryAuthorEmail: req.user.email
  });

    story.save(function(err) {
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
  if (!req.user) {
    return next(new Error('Not authorized'));
  }
  var sanitizedBody = sanitizeHtml(data.body,
    {
      allowedTags: [],
      allowedAttributes: []
    }).replace(/&quot;/g, '"');
  if (data.body !== sanitizedBody) {
    req.flash('errors', {
      msg: 'HTML is not allowed'
    });
    return res.send(true);
  }
  var comment = new Comment({
    associatedPost: data.associatedPost,
    originalStoryLink: data.originalStoryLink,
    originalStoryAuthorEmail: req.user.email,
    body: sanitizedBody,
    rank: 0,
    upvotes: 0,
    author: {
      picture: req.user.profile.picture,
      userId: req.user._id,
      username: req.user.profile.username,
      email: req.user.email
    },
    comments: [],
    topLevel: true,
    commentOn: Date.now()
  });

  commentSave(comment, Story, res, next);
};

exports.commentOnCommentSubmit = function(req, res, next) {
  var data = req.body.data;
  if (!req.user) {
    return next(new Error('Not authorized'));
  }

  var sanitizedBody = sanitizeHtml(data.body,
    {
      allowedTags: [],
      allowedAttributes: []
    }).replace(/&quot;/g, '"');
  if (data.body !== sanitizedBody) {
    req.flash('errors', {
      msg: 'HTML is not allowed'
    });
    return res.send(true);
  }
  var comment = new Comment({
    associatedPost: data.associatedPost,
    body: sanitizedBody,
    rank: 0,
    upvotes: 0,
    originalStoryLink: data.originalStoryLink,
    originalStoryAuthorEmail: data.originalStoryAuthorEmail,
    author: {
      picture: req.user.profile.picture,
      userId: req.user._id,
      username: req.user.profile.username,
      email: req.user.email
    },
    comments: [],
    topLevel: false,
    commentOn: Date.now()
  });
  commentSave(comment, Comment, res, next);
};

function commentSave(comment, Context, res, next) {
  comment.save(function(err, data) {
    if (err) {
      return next(err);
    }
    try {
      Context.find({'_id': comment.associatedPost}, function (err, associatedStory) {
        if (err) {
          return next(err);
        }
        associatedStory = associatedStory.pop();
        if (associatedStory) {
          associatedStory.comments.push(data._id);
          associatedStory.save(function (err) {
            if (err) {
              return next(err);
            }
            res.send(true);
          });
        }
        User.findOne({'profile.username': associatedStory.author.username}, function(err, recipient) {
          if (err) {
            return next(err);
          }
          var recipients = '';
          if (data.originalStoryAuthorEmail && (data.originalStoryAuthorEmail !== recipient.email)) {
             recipients = data.originalStoryAuthorEmail + ',' + recipient.email;
           } else {
             recipients = recipient.email;
           }
            var transporter = nodemailer.createTransport({
              service: 'Mandrill',
              auth: {
                user: secrets.mandrill.user,
                pass: secrets.mandrill.password
              }
            });
            var mailOptions = {
              to: recipients,
              from: 'Team@freecodecamp.com',
              subject: associatedStory.author.username + " replied to your post on Camper News",
              text: [
                "Just a quick heads-up: " + associatedStory.author.username + " replied to you on Camper News.",
                "You can keep this conversation going.",
                "Just head back to the discussion here: http://freecodecamp.com/stories/" + comment.originalStoryLink,
                '- the Free Code Camp Volunteer Team'
              ].join('\n')
            };
            transporter.sendMail(mailOptions, function (err) {
              if (err) {
                return err;
              }
            });
        });
      });
    } catch (e) {
      // delete comment
      return next(err);
    }
  });
}
