import moment from 'moment';
import { Scheduler, Observable } from 'rx';
import { timeCache, observeQuery } from '../utils/rx';
import { dasherize } from '../utils';

const cacheTimeout = [ 24, 'hours' ];
const appUrl = 'https://www.freecodecamp.org';

// getCachedObservable(
//   app: ExpressApp,
//   modelName: String,
//   nameProp: String,
//   blockProp: String,
//   map: (nameProp: String) => String
// ) => Observable[models]
function getCachedObservable(app, modelName, nameProp, blockProp, map) {
  return observeQuery(
    app.models[modelName],
    'find',
    { fields: { [nameProp]: true, [blockProp]: true } }
  )
    .flatMap(models => {
      return Observable.from(models, null, null, Scheduler.default);
    })
    .filter(model => !!model[nameProp] && !!model[blockProp])
    .map(map ? map : (x) => x)
    .toArray()
    ::timeCache(cacheTimeout[0], cacheTimeout[1]);
}

export default function sitemapRouter(app) {
  const router = app.loopback.Router();
  const challengeProps = ['dashedName', 'block'];
  const challenges$ = getCachedObservable(app, 'Challenge', ...challengeProps);
  const stories$ = getCachedObservable(app, 'Story', 'storyLink', dasherize);
  function sitemap(req, res, next) {
    const now = moment(new Date()).format('YYYY-MM-DD');
    return Observable.combineLatest(
      challenges$,
      stories$,
      (
        challenges,
        stories,
      ) => ({ challenges, stories })
    )
      .subscribe(
        ({ challenges, stories }) => {
          res.header('Content-Type', 'application/xml');
          res.render('resources/sitemap', {
            appUrl,
            now,
            challenges,
            stories
          });
        },
        next
      );
  }
  router.get('/sitemap.xml', sitemap);
  app.use(router);
}
