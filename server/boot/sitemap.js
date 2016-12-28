import moment from 'moment';
import { Scheduler, Observable } from 'rx';
import { timeCache, observeQuery } from '../utils/rx';
import { dasherize } from '../utils';

const cacheTimeout = [ 24, 'hours' ];
const appUrl = 'https://www.freecodecamp.com';

// getCachedObservable(
//   app: ExpressApp,
//   modelName: String,
//   nameProp: String,
//   map: (nameProp: String) => String
// ) => Observable[models]
function getCachedObservable(app, modelName, nameProp, map) {
  return observeQuery(
    app.models[modelName],
    'find',
    { fields: { [nameProp]: true } }
  )
    .flatMap(models => {
      return Observable.from(models, null, null, Scheduler.default);
    })
    .filter(model => !!model[nameProp])
    .map(model => model[nameProp])
    .map(map ? map : (x) => x)
    .toArray()
    ::timeCache(cacheTimeout[0], cacheTimeout[1]);
}

export default function sitemapRouter(app) {
  const router = app.loopback.Router();
  const challenges$ = getCachedObservable(app, 'Challenge', 'dashedName');
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
