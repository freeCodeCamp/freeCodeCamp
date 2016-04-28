import moment from 'moment';

import { unDasherize } from '../utils';
import { observeMethod } from '../utils/rx';

const foundationDate = 1413298800000;
const time48Hours = 172800000;

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

module.exports = function(app) {
  const router = app.loopback.Router();
  const Story = app.models.Story;
  const findStory = observeMethod(Story, 'find');
  const findOneStory = observeMethod(Story, 'findOne');
  const query = {
    order: 'timePosted DESC',
    limit: 1000
  };
  const storiesData$ = findStory(query)
    .map(stories => {
      const sliceVal = stories.length >= 100 ? 100 : stories.length;
      return stories.sort(sortByRank).slice(0, sliceVal);
    })
    .shareReplay();

  const redirectToNews = (req, res) => res.redirect('/news');
  const deprecated = (req, res) => res.sendStatus(410);
  router.get('/news', showNews);
  router.post('/news/userstories', deprecated);
  router.get('/news/hot', hotJSON);
  router.get('/news/feed', RSSFeed);
  router.get('/stories/hotStories', hotJSON);
  router.get('/stories/submit', redirectToNews);
  router.get('/stories/submit/new-story', redirectToNews);
  router.post('/stories/preliminary', deprecated);
  router.post('/stories/', deprecated);
  router.post('/stories/search', deprecated);
  router.get('/news/:storyName', returnIndividualStory);
  router.post('/stories/upvote/', deprecated);
  router.get('/stories/:storyName', replaceStoryWithNews);

  app.use(router);

  function showNews(req, res) {
    res.render('news/deprecated', { title: 'Camper News' });
  }

  function replaceStoryWithNews(req, res) {
    var url = req.originalUrl.replace(/^\/stories/, '/news');
    return res.redirect(url);
  }

  function hotJSON(req, res, next) {
    storiesData$.subscribe(
      stories => res.json(stories),
      next
    );
  }

  function RSSFeed(req, res, next) {
    storiesData$.subscribe(
      data => {
        res.set('Content-Type', 'text/xml');
        res.render('news/feed', {
          title: 'FreeCodeCamp Camper News RSS Feed',
          description: 'RSS Feed for FreeCodeCamp Top 100 Hot Camper News',
          url: 'http://www.freecodecamp.com/news',
          FeedPosts: data
        });
      },
      next
    );
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

        return res.render('news/index', {
          title: story.headline || 'news',
          link: story.link,
          originalStoryLink: dashedName,
          author: story.author,
          rank: story.upVotes.length,
          id: story.id,
          timeAgo: moment(story.timePosted).fromNow(),
          image: story.image,
          storyMetaDescription: story.metaDescription
        });
      },
      next
    );
  }
};
