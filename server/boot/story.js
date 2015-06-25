var Rx = require('rx'),
    nodemailer = require('nodemailer'),
    assign = require('object.assign'),
    sanitizeHtml = require('sanitize-html'),
    moment = require('moment'),
    mongodb = require('mongodb'),
    // debug = require('debug')('freecc:cntr:story'),
    utils = require('../utils'),
    observeMethod = require('../utils/rx').observeMethod,
    saveUser = require('../utils/rx').saveUser,
    saveInstance = require('../utils/rx').saveInstance,
    MongoClient = mongodb.MongoClient,
    secrets = require('../../config/secrets');

var foundationDate = 1413298800000;
var time48Hours = 172800000;

var unDasherize = utils.unDasherize;
var dasherize = utils.dasherize;
var getURLTitle = utils.getURLTitle;

var transporter = nodemailer.createTransport({
  service: 'Mandrill',
  auth: {
    user: secrets.mandrill.user,
    pass: secrets.mandrill.password
  }
});

function sendMailWhillyNilly(mailOptions) {
  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      console.log('err sending mail whilly nilly', err);
      console.log('logging err but not carring');
    }
  });
}

function hotRank(timeValue, rank) {
  /*
  * Hotness ranking algorithm: http://amix.dk/blog/post/19588
  * tMS = postedOnDate - foundationTime;
  * Ranking...
  * f(ts, 1, rank) = log(10)z + (ts)/45000;
  */
  var z = Math.log(rank) / Math.log(10);
  var hotness = z + (timeValue / time48Hours);
  return hotness;
}

function sortByRank(a, b) {
  return hotRank(b.timePosted - foundationDate, b.rank) -
    hotRank(a.timePosted - foundationDate, a.rank);
}

function cleanData(data, opts) {
  var options = assign(
    {},
    {
      allowedTags: [],
      allowedAttributes: []
    },
    opts || {}
  );
  return sanitizeHtml(data, options).replace(/&quot;;/g, '"');
}

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
  var findUserById = observeMethod(User, 'findById');
  var findOneUser = observeMethod(User, 'findOne');

  var Story = app.models.Story;
  var findStory = observeMethod(Story, 'find');
  var findOneStory = observeMethod(Story, 'findOne');
  var findStoryById = observeMethod(Story, 'findById');
  var countStories = observeMethod(Story, 'count');

  var Comment = app.models.Comment;
  var findCommentById = observeMethod(Comment, 'findById');

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

  function hotJSON(req, res, next) {
    var query = {
      order: 'timePosted DESC',
      limit: 1000
    };
    findStory(query).subscribe(
      function(stories) {
        var sliceVal = stories.length >= 100 ? 100 : stories.length;
        var data = stories.sort(sortByRank).slice(0, sliceVal);
        res.json(data);
      },
      next
    );
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

  function preSubmit(req, res) {
    var data = req.query;
    var cleanedData = cleanData(data.url);

    if (data.url.replace(/&/g, '&amp;') !== cleanedData) {
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
    var storyName = unDasherize(dashedName);

    findOneStory({ where: { storyLink: storyName } }).subscribe(
      function(story) {
        if (!story) {
          req.flash('errors', {
            msg: "404: We couldn't find a story with that name. " +
            'Please double check the name.'
          });

          var dashedNameFull = story.storyLink.toLowerCase()
            .replace(/\s+/g, ' ')
            .replace(/\s/g, '-');

          if (dashedNameFull !== dashedName) {
            return res.redirect('../stories/' + dashedNameFull);
          }
          return res.redirect('/stories/');
        }

        // true if any of votes are made by user
        var userVoted = story.upVotes.some(function(upvote) {
          return upvote.upVotedByUsername === req.user.username;
        });

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
      },
      next
    );
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
    var id = req.body.data.id;
    var savedStory = findStoryById(id)
      .flatMap(function(story) {
        story.rank += 1;
        story.upVotes.push({
          upVotedBy: req.user.id,
          upVotedByUsername: req.user.username
        });
        return saveInstance(story);
      })
      .shareReplay();

    savedStory.flatMap(function(story) {
        // find story author
        return findUserById(story.author.userId);
      })
      .flatMap(function(user) {
        // if user deletes account then this will not exist
        if (user) {
          user.progressTimestamps.push(Date.now());
        }
        return saveUser(user);
      })
      .flatMap(function() {
        req.user.progressTimestamps.push(Date.now());
        return saveUser(req.user);
      })
      .flatMap(savedStory)
      .subscribe(
        function(story) {
          return res.send(story);
        },
        next
      );
  }

  function comments(req, res, next) {
    var id = req.params.id;
    findCommentById(id).subscribe(
      function(comment) {
        res.send(comment);
      },
      next
    );
  }

  function newStory(req, res, next) {
    if (!req.user) {
      return next(new Error('Must be logged in'));
    }
    var url = req.body.data.url;
    var cleanURL = cleanData(url);

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

    findStory({ where: { link: url } })
      .map(function(stories) {
        if (stories.length) {
          return {
            alreadyPosted: true,
            storyURL: '/stories/' + stories.pop().storyLink
          };
        }
        return {
          alreadyPosted: false,
          storyURL: url
        };
      })
      .flatMap(function(data) {
        if (data.alreadyPosted) {
          return Rx.Observable.just(data);
        }
        return Rx.Observable.fromNodeCallback(getURLTitle)(data.storyURL)
          .map(function(story) {
            return {
              alreadyPosted: false,
              storyURL: data.storyURL,
              storyTitle: story.title,
              storyImage: story.image,
              storyMetaDescription: story.description
            };
          });
      })
      .subscribe(
        function(story) {
          if (story.alreadyPosted) {
            req.flash('errors', {
              msg: "Someone's already posted that link. Here's the discussion."
            });
          }
          res.json(story);
        },
        next
      );
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

    var query = {
      storyLink: {
        like: ('^' + storyLink + '(?: [0-9]+)?$'),
        options: 'i'
      }
    };

    var savedStory = countStories(query)
      .flatMap(function(storyCount) {
        // if duplicate storyLink add unique number
        storyLink = (storyCount === 0) ?
          storyLink :
          storyLink + ' ' + storyCount;

        var link = data.link;
        if (link.search(/^https?:\/\//g) === -1) {
          link = 'http://' + link;
        }
        var newStory = new Story({
          headline: cleanData(data.headline),
          timePosted: Date.now(),
          link: link,
          description: cleanData(data.description),
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
        return saveInstance(newStory);
      });

    req.user.progressTimestamps.push(Date.now());
    return saveUser(req.user)
      .flatMap(savedStory)
      .subscribe(
        function(story) {
          res.json({
            storyLink: dasherize(story.storyLink)
          });
        },
        next
      );
  }

  function commentSubmit(req, res, next) {
    var data = req.body.data;
    if (!req.user) {
      return next(new Error('Not authorized'));
    }
    var sanitizedBody = cleanData(data.body);

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

    commentSave(comment, findStoryById).subscribe(
      function() {},
      next,
      function() {
        res.send(true);
      }
    );
  }

  function commentOnCommentSubmit(req, res, next) {
    var data = req.body.data;
    if (!req.user) {
      return next(new Error('Not authorized'));
    }

    var sanitizedBody = cleanData(data.body);

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
    commentSave(comment, findCommentById).subscribe(
      function() {},
      next,
      function() {
        res.send(true);
      }
    );
  }

  function commentEdit(req, res, next) {
    findCommentById(req.params.id)
      .doOnNext(function(comment) {
        if (!req.user && comment.author.userId !== req.user.id) {
          throw new Error('Not authorized');
        }
      })
      .flatMap(function(comment) {
        var sanitizedBody = cleanData(req.body.body);
        if (req.body.body !== sanitizedBody) {
          req.flash('errors', {
            msg: 'HTML is not allowed'
          });
        }
        comment.body = sanitizedBody;
        comment.commentOn = Date.now();
        return saveInstance(comment);
      })
      .subscribe(
        function() {
          res.send(true);
        },
        next
      );
  }

  function commentSave(comment, findContextById) {
    return saveInstance(comment)
      .flatMap(function(comment) {
        // Based on the context retrieve the parent
        // object of the comment (Story/Comment)
        return findContextById(comment.associatedPost);
      })
      .flatMap(function(associatedContext) {
        if (associatedContext) {
          associatedContext.comments.push(comment.id);
        }
        // NOTE(berks): saveInstance is safe
        // it will automatically call onNext with null and onCompleted if
        // argument is falsey or has no method save
        return saveInstance(associatedContext);
      })
      .flatMap(function(associatedContext) {
        // Find the author of the parent object
        // if no username
        var username = associatedContext && associatedContext.author ?
          associatedContext.author.username :
          null;

        var query = { where: { username: username } };
        return findOneUser(query);
      })
      // if no user is found we don't want to hit the doOnNext
      // filter here will call onCompleted without running through the following
      // steps
      .filter(function(user) {
        return !!user;
      })
      // if this is called user is guarenteed to exits
      // this is a side effect, hence we use do/tap observable methods
      .doOnNext(function(user) {
        // If the emails of both authors differ,
        // only then proceed with email notification
        if (
          comment.author &&
          comment.author.email &&
          user.email &&
          (comment.author.email !== user.email)
        ) {
          sendMailWhillyNilly({
            to: user.email,
            from: 'Team@freecodecamp.com',
            subject: comment.author.username +
            ' replied to your post on Camper News',
            text: [
              'Just a quick heads-up: ',
              comment.author.username,
              ' replied to you on Camper News.',
              'You can keep this conversation going.',
              'Just head back to the discussion here: ',
              'http://freecodecamp.com/stories/',
              comment.originalStoryLink,
              '- the Free Code Camp Volunteer Team'
            ].join('\n')
          });
        }
      });
  }
};
