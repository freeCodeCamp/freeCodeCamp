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

function getAllSixCertsCount(userCount) {
  return userCount({
    isRespWebDesignCert: true,
    isFrontEndLibsCert: true,
    isJsAlgoDataStructCert: true,
    isDataVisCert: true,
    isApisMicroservicesCert: true,
    isInfosecQaCert: true
  })
    ::timeCache(2, 'hours');
}

export default function about(app) {
  const router = app.loopback.Router();
  const User = app.models.User;
  const userCount = observeMethod(User, 'count');
  const respWebDesignCount$ = getCertCount(userCount, 'isRespWebDesignCert');
  const frontEndLibsCount$ = getCertCount(userCount, 'isFrontEndLibsCert');
  const jsAlgoDataStructCount$ =
  getCertCount(userCount, 'isJsAlgoDataStructCert');
  const dataVisCount$ = getCertCount(userCount, 'isDataVisCert');
  const apisMicroservicesCount$ =
  getCertCount(userCount, 'isApisMicroservicesCert');
  const infosecQaCount$ = getCertCount(userCount, 'isInfosecQaCert');
  const allSixCount$ = getAllSixCertsCount(userCount);

  function showAbout(req, res, next) {
    const daysRunning = moment().diff(new Date('10/15/2014'), 'days');

    Observable.combineLatest(
      respWebDesignCount$,
      frontEndLibsCount$,
      jsAlgoDataStructCount$,
      dataVisCount$,
      apisMicroservicesCount$,
      infosecQaCount$,
      allSixCount$,
      (
        respWebDesignCount = 0,
        frontEndLibsCount = 0,
        jsAlgoDataStructCount = 0,
        dataVisCount = 0,
        apisMicroservicesCount = 0,
        infosecQaCount = 0,
        allSixCount = 0
      ) => ({
        respWebDesignCount,
        frontEndLibsCount,
        jsAlgoDataStructCount,
        dataVisCount,
        apisMicroservicesCount,
        infosecQaCount,
        allSixCount
      })
    )
      .doOnNext(({
        respWebDesignCount,
        frontEndLibsCount,
        jsAlgoDataStructCount,
        dataVisCount,
        apisMicroservicesCount,
        infosecQaCount,
        allSixCount
      }) => {
        res.render('resources/about', {
          respWebDesignCount: numberWithCommas(respWebDesignCount),
          frontEndLibsCount: numberWithCommas(frontEndLibsCount),
          jsAlgoDataStructCount: numberWithCommas(jsAlgoDataStructCount),
          dataVisCount: numberWithCommas(dataVisCount),
          apisMicroservicesCount: numberWithCommas(apisMicroservicesCount),
          infosecQaCount: numberWithCommas(infosecQaCount),
          allSixCount: numberWithCommas(allSixCount),
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
