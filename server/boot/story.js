var Rx = require('rx'),
    assign = require('object.assign'),
    sanitizeHtml = require('sanitize-html'),
    moment = require('moment'),
    debug = require('debug')('freecc:cntr:story'),
    utils = require('../utils'),
    observeMethod = require('../utils/rx').observeMethod,
    saveUser = require('../utils/rx').saveUser,
    saveInstance = require('../utils/rx').saveInstance,
    validator = require('validator');

import {
  ifNoUser401,
  ifNoUserRedirectTo
} from '../utils/middleware';

const foundationDate = 1413298800000;
const time48Hours = 172800000;

const unDasherize = utils.unDasherize;
const dasherize = utils.dasherize;
const getURLTitle = utils.getURLTitle;
const sendNonUserToNews = ifNoUserRedirectTo('/news');

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

  var Story = app.models.Story;
  var findStory = observeMethod(Story, 'find');
  var findOneStory = observeMethod(Story, 'findOne');
  var findStoryById = observeMethod(Story, 'findById');
  var countStories = observeMethod(Story, 'count');

  router.post('/news/userstories', userStories);
  router.get('/news/hot', hotJSON);
  router.get('/stories/hotStories', hotJSON);
  router.get(
    '/stories/submit',
    sendNonUserToNews,
    submitNew
  );
  router.get(
    '/stories/submit/new-story',
    sendNonUserToNews,
    preSubmit
  );
  router.post('/stories/preliminary', ifNoUser401, newStory);
  router.post('/stories/', ifNoUser401, storySubmission);
  router.get('/news/', hot);
  router.post('/stories/search', getStories);
  router.get('/news/:storyName', returnIndividualStory);
  router.post('/stories/upvote/', ifNoUser401, upvote);
  router.get('/stories/:storyName', redirectToNews);

  app.use(router);

  function redirectToNews(req, res) {
    var url = req.originalUrl.replace(/^\/stories/, '/news');
    return res.redirect(url);
  }

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
      title: 'Top Stories on Camper News',
      page: 'hot'
    });
  }

  function submitNew(req, res) {
    if (!req.user.isGithubCool) {
      req.flash('errors', {
        msg: 'You must link GitHub with your account before you can post' +
          ' on Camper News.'
      });
      return res.redirect('/news');
    }

    return res.render('stories/index', {
      title: 'Submit a new story to Camper News',
      page: 'submit'
    });
  }

  function preSubmit(req, res) {
    var data = req.query;
    if (typeof data.url !== 'string') {
      req.flash('errors', { msg: 'No URL supplied with story' });
      return res.redirect('/news');
    }
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
          return res.redirect('/news');
        }

        var dashedNameFull = story.storyLink.toLowerCase()
          .replace(/\s+/g, ' ')
          .replace(/\s/g, '-');

        if (dashedNameFull !== dashedName) {
          return res.redirect('../stories/' + dashedNameFull);
        }

        var username = req.user ? req.user.username : '';
        // true if any of votes are made by user
        var userVoted = story.upVotes.some(function(upvote) {
          return upvote.upVotedByUsername === username;
        });

        res.render('stories/index', {
          title: story.headline,
          link: story.link,
          originalStoryLink: dashedName,
          author: story.author,
          rank: story.upVotes.length,
          upVotes: story.upVotes,
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

  function userStories({ body: { search = '' } = {} }, res, next) {
    if (!search || typeof search !== 'string') {
      return res.sendStatus(404);
    }

    return app.dataSources.db.connector
      .collection('story')
      .find({
        'author.username': search.toLowerCase().replace('$', '')
      })
      .toArray(function(err, items) {
        if (err) {
          return next(err);
        }
        if (items && items.length !== 0) {
          return res.json(items.sort(sortByRank));
        }
        return res.sendStatus(404);
      });
  }

  function getStories({ body: { search = '' } = {} }, res, next) {
    if (!search || typeof search !== 'string') {
      return res.sendStatus(404);
    }

    const query = {
      '$text': {
        // protect against NoSQL injection
        '$search': search.replace('$', '')
      }
    };

    const fields = {
      headline: 1,
      timePosted: 1,
      link: 1,
      description: 1,
      rank: 1,
      upVotes: 1,
      author: 1,
      image: 1,
      storyLink: 1,
      metaDescription: 1,
      textScore: {
        $meta: 'textScore'
      }
    };

    const options = {
      sort: {
        textScore: {
          $meta: 'textScore'
        }
      }
    };

    return app.dataSources.db.connector
      .collection('story')
      .find(query, fields, options)
      .toArray(function(err, items) {
        if (err) {
          return next(err);
        }
        if (items && items.length !== 0) {
          return res.json(items);
        }
        return res.sendStatus(404);
      });
  }

  function upvote(req, res, next) {
    const { id } = req.body;
    var story$ = findStoryById(id).shareReplay();

    story$.flatMap(function(story) {
        // find story author
        return findUserById(story.author.userId);
      })
      .flatMap(function(user) {
        // if user deletes account then this will not exist
        if (user) {
          user.progressTimestamps.push({
            timestamp: Date.now()
          });
        }
        return saveUser(user);
      })
      .flatMap(function() {
        return story$;
      })
      .flatMap(function(story) {
        debug('upvoting');
        story.rank += 1;
        story.upVotes.push({
          upVotedBy: req.user.id,
          upVotedByUsername: req.user.username
        });
        return saveInstance(story);
      })
      .subscribe(
        function(story) {
          return res.send(story);
        },
        next
      );
  }

  function newStory(req, res, next) {
    if (!req.user.isGithubCool) {
      req.flash('errors', {
        msg: 'You must authenticate with Github to post to Camper News'
      });
      return res.redirect('/news');
    }
    var url = req.body.data.url;

    if (!validator.isURL(url)) {
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
            username: req.user.username
          },
          image: data.image,
          storyLink: storyLink,
          metaDescription: data.storyMetaDescription
        });
        return saveInstance(newStory);
      });

    req.user.progressTimestamps.push({
      timestamp: Date.now()
    });
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
};
