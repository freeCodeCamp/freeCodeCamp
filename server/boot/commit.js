export default function commit(app) {
  const router = app.loopback.Router();
  router.get(
    '/commit',
    commitToNonprofit
  );

  app.use(router);

  function commitToNonprofit(req, res) {
    res.render('commit/', {
      title: 'Commit to a nonprofit. Commit to your goal.'
    });
  }
}
