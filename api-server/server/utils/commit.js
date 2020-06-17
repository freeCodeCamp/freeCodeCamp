import dedent from 'dedent';
import debugFactory from 'debug';
import { Observable } from 'rx';
import commitGoals from './commit-goals.json';

const debug = debugFactory('fcc:utils/commit');

export { commitGoals };

export function completeCommitment$(user) {
  const {
    isFrontEndCert,
    isBackEndCert,
    isFullStackCert,
    isRespWebDesignCert,
    isFrontEndLibsCert,
    isJsAlgoDataStructCert,
    isDataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7
  } = user;

  return Observable.fromNodeCallback(user.pledge, user)().flatMap(pledge => {
    if (!pledge) {
      return Observable.just('No pledge found');
    }

    const { goal } = pledge;

    if (
      (isFrontEndCert && goal === commitGoals.frontEndCert) ||
      (isBackEndCert && goal === commitGoals.backEndCert) ||
      (isFullStackCert && goal === commitGoals.fullStackCert) ||
      (isRespWebDesignCert && goal === commitGoals.respWebDesignCert) ||
      (isFrontEndLibsCert && goal === commitGoals.frontEndLibsCert) ||
      (isJsAlgoDataStructCert && goal === commitGoals.jsAlgoDataStructCert) ||
      (isDataVisCert && goal === commitGoals.dataVisCert) ||
      (isApisMicroservicesCert && goal === commitGoals.apisMicroservicesCert) ||
      (isInfosecQaCert && goal === commitGoals.infosecQaCert) ||
      (isQaCertV7 && goal === commitGoals.QaCert) ||
      (isInfosecCertV7 && goal === commitGoals.infosecCert) ||
      (isSciCompPyCertV7 && goal === commitGoals.sciCompPyCert) ||
      (isDataAnalysisPyCertV7 && goal === commitGoals.dataAnalysisPyCert) ||
      (isMachineLearningPyCertV7 && goal === commitGoals.machineLearningPyCert)
    ) {
      debug('marking goal complete');
      pledge.isCompleted = true;
      pledge.dateEnded = new Date();
      pledge.formerUserId = pledge.userId;
      pledge.userId = null;
      return Observable.fromNodeCallback(pledge.save, pledge)();
    }
    return Observable.just(dedent`
        You have not yet reached your goal of completing the ${goal}
        Please retry when you have met the requirements.
      `);
  });
}
