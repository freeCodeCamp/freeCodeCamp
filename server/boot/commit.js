import dedent from 'dedent';
import {
  ifNoUserRedirectTo
} from '../utils/middleware';

const sendNonUserToFront = ifNoUserRedirectTo('/');

export default function commit(app) {
  const router = app.loopback.Router();
  router.get(
    '/commit',
    commitToNonprofit
  );
  router.get(
    '/commit/pledge',
    sendNonUserToFront,
    pledge
  );

  app.use(router);

  function commitToNonprofit(req, res) {
    res.render('commit/', {
      title: 'Commit to a nonprofit. Commit to your goal.'
    });
  }

  function pledge(req, res) {
    const { user } = req;
    const {
      nonprofit = 'girl develop it',
      amount = '5',
      goal = 'front end certification'
    } = req.query;

    req.flash('success', {
      msg: dedent`
        Congratulations, you have commit to giving ${nonprofit} ${amount}
        dollars a month until you have reached your goal
        of completing your ${goal}
      `
    });

    res.redirect('/' + user.username);
  }
}
