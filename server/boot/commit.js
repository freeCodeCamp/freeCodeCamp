import _ from 'lodash';
import debugFactory from 'debug';
import dedent from 'dedent';
import nonprofits from '../utils/commit.json';

import {
  unDasherize
} from '../utils';

import {
  observeQuery,
  saveInstance
} from '../utils/rx';

import {
  ifNoUserRedirectTo
} from '../utils/middleware';

const sendNonUserToFront = ifNoUserRedirectTo('/');
const debug = debugFactory('freecc:commit');

export default function commit(app) {
  const router = app.loopback.Router();
  const { Pledge } = app.models;

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
    let nonprofitName = unDasherize(req.query.nonprofit);
    let nonprofit;

    debug('looking for nonprofit', nonprofitName);
    if (nonprofitName) {
      nonprofit = _.find(nonprofits, (nonprofit) => {
        return nonprofitName === nonprofit.name;
      });
    }

    nonprofit = nonprofit || nonprofits[0];

    res.render(
      'commit/',
      Object.assign(
        { title: 'Commit to a nonprofit. Commit to your goal.' },
        nonprofit
      )
    );
  }

  function pledge(req, res, next) {
    const { user } = req;
    const {
      nonprofit = 'girl develop it',
      amount = '5',
      goal = 'Front End Development Certification'
    } = req.query;

    observeQuery(user, 'pledge')
      .flatMap(oldPledge => {
        // create new pledge for user
        const pledge = Pledge({
          nonprofit,
          amount,
          goal,
          userId: user.id
        });

        if (oldPledge) {
          debug('user already has pledge, creating a new one');
          // we orphan last pledge since a user only has one pledge at a time
          oldPledge.userId = '';
          oldPledge.formerUser = user.id;
          oldPledge.endDate = new Date();
          oldPledge.isOrphaned = true;
          return saveInstance(oldPledge)
            .flatMap(() => {
              return saveInstance(pledge);
            });
        }
        return saveInstance(pledge);
      })
      .subscribe(
        ({ nonprofit, goal, amount }) => {
          req.flash('success', {
            msg: dedent`
              Congratulations, you have committed to giving
              ${nonprofit} $${amount} each month until you have completed
              your ${goal}.
            `
          });
          res.redirect('/' + user.username);
        },
        next
      );

  }
}
