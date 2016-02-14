import _ from 'lodash';
import { Observable } from 'rx';
import debugFactory from 'debug';
import dedent from 'dedent';

import nonprofits from '../utils/commit.json';
import {
  commitGoals,
  completeCommitment$
} from '../utils/commit';

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

const sendNonUserToSignIn = ifNoUserRedirectTo(
  '/login',
  'You must be signed in to commit to a nonprofit.',
  'info'
);

const sendNonUserToCommit = ifNoUserRedirectTo(
  '/commit',
  'You must be signed in to update commit',
  'info'
);

const debug = debugFactory('freecc:commit');

function findNonprofit(name) {
  let nonprofit;
  if (name) {
    nonprofit = _.find(nonprofits, (nonprofit) => {
      return name === nonprofit.name;
    });
  }

  nonprofit = nonprofit || nonprofits[ _.random(0, nonprofits.length - 1) ];
  return nonprofit;
}

export default function commit(app) {
  const router = app.loopback.Router();
  const { Pledge } = app.models;

  router.get(
    '/commit',
    commitToNonprofit
  );

  router.get(
    '/commit/pledge',
    sendNonUserToSignIn,
    pledge
  );

  router.get(
    '/commit/directory',
    renderDirectory
  );

  router.post(
    '/commit/stop-commitment',
    sendNonUserToCommit,
    stopCommit
  );

  router.post(
    '/commit/complete-goal',
    sendNonUserToCommit,
    completeCommitment
  );

  app.use(router);

  function commitToNonprofit(req, res, next) {
    const { user } = req;
    let nonprofitName = unDasherize(req.query.nonprofit);

    debug('looking for nonprofit', nonprofitName);
    const nonprofit = findNonprofit(nonprofitName);

    Observable.just(user)
      .flatMap(user => {
        if (user) {
          debug('getting user pledge');
          return observeQuery(user, 'pledge');
        }
        return Observable.just();
      })
      .subscribe(
        pledge => {
          if (pledge) {
            debug('found previous pledge');
            req.flash('info', {
              msg: dedent`
                Looks like you already have a pledge to ${pledge.displayName}.
                Hitting commit here will replace your old commitment.
              `
            });
          }
          res.render(
            'commit/',
            Object.assign(
              {
                title: 'Commit to a nonprofit. Commit to your goal.',
                pledge
              },
              commitGoals,
              nonprofit
            )
          );
        },
        next
      );

  }

  function pledge(req, res, next) {
    const { user } = req;
    const {
      nonprofit: nonprofitName = 'girl develop it',
      amount = '5',
      goal = commitGoals.frontEndCert
    } = req.query;

    const nonprofit = findNonprofit(nonprofitName);

    observeQuery(user, 'pledge')
      .flatMap(oldPledge => {
        // create new pledge for user
        const pledge = Pledge(
          Object.assign(
            {
              amount,
              goal,
              userId: user.id
            },
            nonprofit
          )
        );

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
        ({ displayName, goal, amount }) => {
          req.flash('success', {
            msg: dedent`
              Congratulations, you have committed to giving
              ${displayName} $${amount} each month until you have completed
              your ${goal}.
            `
          });
          res.redirect('/' + user.username);
        },
        next
      );
  }

  function renderDirectory(req, res) {
    res.render('commit/directory', {
      title: 'Commit Directory',
      nonprofits
    });
  }

  function completeCommitment(req, res, next) {
    const { user } = req;

    return completeCommitment$(user)
      .subscribe(
        msgOrPledge => {
          if (typeof msgOrPledge === 'string') {
            return res.send(msgOrPledge);
          }
          return res.send(true);
        },
        next
      );
  }

  function stopCommit(req, res, next) {
    const { user } = req;

    observeQuery(user, 'pledge')
      .flatMap(pledge => {
        if (!pledge) {
          return Observable.just();
        }

        pledge.formerUserId = pledge.userId;
        pledge.userId = null;
        pledge.isOrphaned = true;
        pledge.dateEnded = new Date();
        return saveInstance(pledge);
      })
      .subscribe(
        pledge => {
          let msg = `You have successfully stopped your pledge.`;
          if (!pledge) {
            msg = `No pledge found for user ${user.username}.`;
          }
          req.flash('errors', { msg });
          return res.redirect(`/${user.username}`);
        },
        next
      );
  }
}
