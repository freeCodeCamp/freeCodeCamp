import { Observable } from 'rx';
import dedent from 'dedent';
import moment from 'moment';

import { timeCache, observeMethod } from '../utils/rx';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// userCount(where: Object) => Observable[Number]
// getCertCount(userCount: userCount, cert: String) => Observable[Number]
function getCertCount(userCount, cert) {
  return userCount({ [cert]: true })
    // using This-Bind operator
    ::timeCache(2, 'hours');
}

function getAllThreeCertsCount(userCount) {
  return userCount({
    isFrontEndCert: true,
    isDataVisCert: true,
    isBackEndCert: true
  })
    ::timeCache(2, 'hours');
}

export default function about(app) {
  const router = app.loopback.Router();
  const User = app.models.User;
  const userCount = observeMethod(User, 'count');
  const frontEndCount$ = getCertCount(userCount, 'isFrontEndCert');
  const dataVisCount$ = getCertCount(userCount, 'isDataVisCert');
  const backEndCount$ = getCertCount(userCount, 'isBackEndCert');
  const allThreeCount$ = getAllThreeCertsCount(userCount);

  function showAbout(req, res, next) {
    const daysRunning = moment().diff(new Date('10/15/2014'), 'days');

    Observable.combineLatest(
      frontEndCount$,
      dataVisCount$,
      backEndCount$,
      allThreeCount$,
      (
        frontEndCount = 0,
        dataVisCount = 0,
        backEndCount = 0,
        allThreeCount = 0
      ) => ({
        frontEndCount,
        dataVisCount,
        backEndCount,
        allThreeCount
      })
    )
      .doOnNext(({
        frontEndCount,
        dataVisCount,
        backEndCount,
        allThreeCount
      }) => {
        res.render('resources/about', {
          frontEndCount: numberWithCommas(frontEndCount),
          dataVisCount: numberWithCommas(dataVisCount),
          backEndCount: numberWithCommas(backEndCount),
          allThreeCount: numberWithCommas(allThreeCount),
          daysRunning,
          title: dedent`
            About our Open Source Community, our social media presence,
            and how to contact us
          `.split('\n').join(' '),
          globalCompletedCount: numberWithCommas(
            5612952 + (Math.floor((Date.now() - 1446268581061) / 1800))
          ),
          globalPledgedAmount: numberWithCommas(Math.floor(
            28000 +
            ((Date.now() - 1456207176902) / (2629746000 / 2000) * 8.30)
          ))
        });
      })
      .subscribe(() => {}, next);
  }

  router.get('/about', showAbout);
  app.use('/:lang', router);
}
