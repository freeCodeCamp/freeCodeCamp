import {
  createServeNewsApp,
  createShortLinkHandler
} from '../utils/news-handlers';
import { createPopularityHandler } from '../utils/popularity-handlers';

export default function newsBoot(app) {
  const router = app.loopback.Router();
  const api = app.loopback.Router();

  const serveNewsApp = createServeNewsApp(app);

  router.get('/n', (req, res) => res.redirect('/news'));
  router.get('/n/:shortId', createShortLinkHandler(app));

  router.get('/news', serveNewsApp);
  router.get('/news/*', serveNewsApp);

  api.post('/p', createPopularityHandler(app));

  app.use(api);
  app.use(router);
}
