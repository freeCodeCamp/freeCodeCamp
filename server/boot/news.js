export default function newsBoot(app) {
  const router = app.loopback.Router();

  router.get('/', (req, res) => {
    res.render('layout-news', {title: 'Hello News?'});
  });

  app.use('/news', router);
}
