import { defaultProfileImage } from '../../common/utils/constantStrings.json';
import { getRandomQuote } from '../../common/app/utils/quotes';
import { cachedMap } from '../utils/map';
import NewsFeed from '../rss';

const news = new NewsFeed();

module.exports = function(app, done) {
  var router = app.loopback.Router();
  let challengeCount = 0;
  cachedMap(app.models)
    .do(({ entities: { challenge } }) => {
      challengeCount = Object.keys(challenge).length;
    })
    .subscribe(
      () => {},
      err => {throw new Error(err);},
      () => {
        router.get('/', addDefaultImage, index);
        app.use(router);
        done();
      }
    );

  function addDefaultImage(req, res, next) {
    if (!req.user || req.user.picture) {
      return next();
    }
    return req.user.update$({ picture: defaultProfileImage })
    .subscribe(
      () => next(),
      next
    );
  }

  function index(req, res) {
    const { user } = req;
    const homePage = user ? 'userHome' : 'noUserHome';
    const { quote, author} = getRandomQuote();
    const title = user ?
      `Welcome back ${user.name ? user.name : 'Camper'}` :
      'Learn to Code and Help Nonprofits';
    const completedChallengeCount = user && user.completedChallengeCount || 0;
    news.getFeed().then(feed => {
      return res.render(
        homePage, {
          author,
          challengeCount,
          completedChallengeCount,
          feed,
          quote,
          title
        });
      });
      }
};
