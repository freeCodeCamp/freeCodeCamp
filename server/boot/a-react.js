import debugFactory from 'debug';
import { app$ } from '../common/app';
import { Cat } from 'thundercats';

const debug = debugFactory('freecc:servereact');

// add routes here as they slowly get reactified
// remove their individual controllers
const routes = [
  '/jobs'
];

export default function reactSubRouter(app) {
  var router = app.Router();

  routes.forEach(function(route) {
    router.get(route, serveReactApp);
  });

  app.use(router);

  function serveReactApp(req, res, next) {
    var fcc = new Cat();
    var decodedUrl = decodeURI(req.path);

    // returns a router wrapped app
    app$(decodedUrl)
      // if react-router does not find a route send down the chain
      .filter(function(data) {
        var state = data.state;
        // this may not work with react-router 1.0.0
        var notFound = state.routes.some(route => route.isNotFound);
        if (notFound) {
          debug('tried to find %s but got 404', state.path);
          next();
        }
        return !notFound;
      })
      .flatMap(function(app) {
        // call thundercats renderToString
        // prefetches data and sets up it up for current state
        return fcc.renderToString(app);
      })
      // makes sure we only get one onNext and closes subscription
      .firstOrDefault()
      .flatMap(function(dats) {
        debug('react rendered');
        res.expose(dats.data, 'data');
        // now render jade file with markup injected from react
        return res.render$('layout-react', { markup: dats.markup });
      })
      .subscribe(
        function(markup) {
          debug('jade rendered');
          res.send(markup);
        },
        next
      );
  }
}
