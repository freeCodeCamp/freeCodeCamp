var nodemailer = require('nodemailer'),
    sanitizeHtml = require('sanitize-html'),
    moment = require('moment'),
    mongodb = require('mongodb'),
    // debug = require('debug')('freecc:cntr:story'),
    utils = require('../utils'),
    MongoClient = mongodb.MongoClient,
    secrets = require('../../config/secrets');

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
  var Story = app.models.Story;
  var Comment = app.models.Comment;

  router.get('/stories/hotStories', hotJSON);
  router.get('/stories/comments/:id', comments);
  router.post('/stories/comment/', commentSubmit);
  router.post('/stories/comment/:id/comment', commentOnCommentSubmit);
  router.put('/stories/comment/:id/edit', commentEdit);
  router.get('/stories/submit', submitNew);
  router.get('/stories/submit/new-story', preSubmit);
  router.post('/stories/preliminary', newStory);
  router.post('/stories/', storySubmission);
  router.get('/stories/', hot);
  router.post('/stories/search', getStories);
  router.get('/stories/:storyName', returnIndividualStory);
  router.post('/stories/upvote/', upvote);

  app.use(router);

  function hotRank(timeValue, rank) {
    /*
    * Hotness ranking algorithm: http://amix.dk/blog/post/19588
    * tMS = postedOnDate - foundationTime;
    * Ranking...
    * f(ts, 1, rank) = log(10)z + (ts)/45000;
    */
    var time48Hours = 172800000;
    var hotness;
    var z = Math.log(rank) / Math.log(10);
    hotness = z + (timeValue / time48Hours);
    return hotness;
  }

  function hotJSON(req, res, next) {
    Story.find({
      order: 'timePosted DESC',
      limit: 1000
    }, function(err, stories) {
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
  }

  function hot(req, res) {
    return res.render('stories/index', {
      title: 'Hot stories currently trending on Camper News',
      page: 'hot'
    });
  }

  function submitNew(req, res) {
    return res.render('stories/index', {
      title: 'Submit a new story to Camper News',
      page: 'submit'
    });
  }

  /*
  * no used anywhere
  function search(req, res) {
    return res.render('stories/index', {
      title: 'Search the archives of Camper News',
      page: 'search'
    });
  }

  function recent(req, res) {
    return res.render('stories/index', {
      title: 'Recently submitted stories on Camper News',
      page: 'recent'
    });
  }
  */

  function preSubmit(req, res) {

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
  }


  function returnIndividualStory(req, res, next) {
    var dashedName = req.params.storyName;

    var storyName = dashedName.replace(/\-/g, ' ').trim();

    Story.find({ where: { storyLink: storyName } }, function(err, story) {
      if (err) {
        return next(err);
      }


      if (story.length < 1) {
        req.flash('errors', {
          msg: "404: We couldn't find a story with that name. " +
          'Please double check the name.'
        });

        return res.redirect('/stories/');
      }

      story = story.pop();
      var dashedNameFull = story.storyLink.toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/\s/g, '-');
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
      } catch(e) {
        userVoted = false;
      }
      res.render('stories/index', {
        title: story.headline,
        link: story.link,
        originalStoryLink: dashedName,
        originalStoryAuthorEmail: story.author.email || '',
        author: story.author,
        description: story.description,
        rank: story.upVotes.length,
        upVotes: story.upVotes,
        comments: story.comments,
        id: story.id,
        timeAgo: moment(story.timePosted).fromNow(),
        image: story.image,
        page: 'show',
        storyMetaDescription: story.metaDescription,
        hasUserVoted: userVoted
      });
    });
  }

  function getStories(req, res, next) {
    MongoClient.connect(secrets.db, function(err, database) {
      if (err) {
        return next(err);
      }
      database.collection('stories').find({
        '$text': {
          '$search': req.body.data ? req.body.data.searchValue : ''
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
  }

  function upvote(req, res, next) {
    var data = req.body.data;
    Story.find({ where: { id: data.id } }, function(err, story) {
      if (err) {
        return next(err);
      }
      story = story.pop();
      story.rank += 1;
      story.upVotes.push({
        upVotedBy: req.user.id,
        upVotedByUsername: req.user.username
      });
      story.save();
      // NOTE(Berks): This logic is full of wholes and race conditions
      // this could be the source of many 'can't set headers after
      // they are sent'
      // errors. This needs cleaning
      User.findOne(
        { where: { id: story.author.userId } },
        function(err, user) {
          if (err) { return next(err); }

          user.progressTimestamps.push(Date.now() || 0);
          user.save(function (err) {
            req.user.save(function (err) {
              if (err) { return next(err); }
            });
            req.user.progressTimestamps.push(Date.now() || 0);
            if (err) {
              return next(err);
            }
          });
        }
      );
      return res.send(story);
    });
  }

  function comments(req, res, next) {
    var data = req.params.id;
    Comment.find(
      { where: { id: data } },
      function(err, comment) {
        if (err) {
          return next(err);
        }
        comment = comment.pop();
        return res.send(comment);
      });
  }

  function newStory(req, res, next) {
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
    Story.find(
      { where: { link: url } },
      function(err, story) {
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
        utils.getURLTitle(url, processResponse);
      }
    );

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
  }

  function storySubmission(req, res, next) {
    var data = req.body.data;
    if (!req.user) {
      return next(new Error('Not authorized'));
    }
    var storyLink = data.headline
      .replace(/[^a-z0-9\s]/gi, '')
      .replace(/\s+/g, ' ')
      .toLowerCase()
      .trim();

    var link = data.link;

    if (link.search(/^https?:\/\//g) === -1) {
      link = 'http://' + link;
    }

    Story.count({
      storyLink: {
        like: ('^' + storyLink + '(?: [0-9]+)?$'),
        options: 'i'
      }
    }, function (err, storyCount) {
      if (err) {
        return next(err);
      }

      // if duplicate storyLink add unique number
      storyLink = (storyCount === 0) ? storyLink : storyLink + ' ' + storyCount;

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
        upVotes: [({
          upVotedBy: req.user.id,
          upVotedByUsername: req.user.username
        })],
        author: {
          picture: req.user.picture,
          userId: req.user.id,
          username: req.user.username,
          email: req.user.email
        },
        comments: [],
        image: data.image,
        storyLink: storyLink,
        metaDescription: data.storyMetaDescription,
        originalStoryAuthorEmail: req.user.email
      });
      story.save(function (err) {
        if (err) {
          return next(err);
        }
        req.user.progressTimestamps.push(Date.now() || 0);
        req.user.save(function (err) {
          if (err) {
            return next(err);
          }
          res.send(JSON.stringify({
            storyLink: story.storyLink.replace(/\s+/g, '-').toLowerCase()
          }));
        });
      });
    });
  }

  function commentSubmit(req, res, next) {
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
      originalStoryAuthorEmail: data.originalStoryAuthorEmail,
      body: sanitizedBody,
      rank: 0,
      upvotes: 0,
      author: {
        picture: req.user.picture,
        userId: req.user.id,
        username: req.user.username,
        email: req.user.email
      },
      comments: [],
      topLevel: true,
      commentOn: Date.now()
    });

    commentSave(comment, Story, res, next);
  }

  function commentOnCommentSubmit(req, res, next) {
    var data = req.body.data;
    if (!req.user) {
      return next(new Error('Not authorized'));
    }

    var sanitizedBody = sanitizeHtml(
      data.body,
      {
        allowedTags: [],
        allowedAttributes: []
      }
    ).replace(/&quot;/g, '"');

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
        picture: req.user.picture,
        userId: req.user.id,
        username: req.user.username,
        email: req.user.email
      },
      comments: [],
      topLevel: false,
      commentOn: Date.now()
    });
    commentSave(comment, Comment, res, next);
  }

  function commentEdit(req, res, next) {

    Comment.find({ where: { id: req.params.id } }, function(err, cmt) {
      if (err) {
        return next(err);
      }
      cmt = cmt.pop();

      if (!req.user && cmt.author.userId !== req.user.id) {
        return next(new Error('Not authorized'));
      }

      var sanitizedBody = sanitizeHtml(req.body.body, {
        allowedTags: [],
        allowedAttributes: []
      }).replace(/&quot;/g, '"');
      if (req.body.body !== sanitizedBody) {
        req.flash('errors', {
          msg: 'HTML is not allowed'
        });
        return res.send(true);
      }

      cmt.body = sanitizedBody;
      cmt.commentOn = Date.now();
      cmt.save(function(err) {
        if (err) {
          return next(err);
        }
        res.send(true);
      });

    });

  }

  function commentSave(comment, Context, res, next) {
    comment.save(function(err, data) {
      if (err) {
        return next(err);
      }
      try {
        // Based on the context retrieve the parent
        // object of the comment (Story/Comment)
        Context.find({
          where: { id: data.associatedPost }
        }, function (err, associatedContext) {
          if (err) {
            return next(err);
          }
          associatedContext = associatedContext.pop();
          if (associatedContext) {
            associatedContext.comments.push(data.id);
            associatedContext.save(function (err) {
              if (err) {
                return next(err);
              }
              res.send(true);
            });
          }
          // Find the author of the parent object
          User.findOne({
            username: associatedContext.author.username
          }, function(err, recipient) {
            if (err) {
              return next(err);
            }
            // If the emails of both authors differ,
            // only then proceed with email notification
            if (
              typeof data.author !== 'undefined' &&
              data.author.email &&
              typeof recipient !== 'undefined' &&
              recipient.email &&
              (data.author.email !== recipient.email)
            ) {
              var transporter = nodemailer.createTransport({
                service: 'Mandrill',
                auth: {
                  user: secrets.mandrill.user,
                  pass: secrets.mandrill.password
                }
              });

              var mailOptions = {
                to: recipient.email,
                from: 'Team@freecodecamp.com',
                subject: data.author.username +
                ' replied to your post on Camper News',
                text: [
                  'Just a quick heads-up: ',
                  data.author.username + ' replied to you on Camper News.',
                  'You can keep this conversation going.',
                  'Just head back to the discussion here: ',
                  'http://freecodecamp.com/stories/' + data.originalStoryLink,
                  '- the Free Code Camp Volunteer Team'
                ].join('\n')
              };

              transporter.sendMail(mailOptions, function (err) {
                if (err) {
                  return err;
                }
              });
            }
          });
        });
      } catch (e) {
        return next(err);
      }
    });
  }
};
