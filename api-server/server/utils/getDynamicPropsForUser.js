function getCompletedCertCount(user) {
  return [
    'isApisMicroservicesCert',
    'is2018DataVisCert',
    'isFrontEndLibsCert',
    'is2020QaCert',
    'is2020InfosecCert',
    'isJsAlgoDataStructCert',
    'isRespWebDesignCert',
    'is2020SciCompPyCert',
    'is2020DataAnalysisPyCert',
    'is2020MachineLearningPyCert'
  ].reduce((sum, key) => (user[key] ? sum + 1 : sum), 0);
}

function getLegacyCertCount(user) {
  return [
    'isFrontEndCert',
    'isBackEndCert',
    'isDataVisCert',
    'isInfosecQaCert'
  ].reduce((sum, key) => (user[key] ? sum + 1 : sum), 0);
}

export default function populateUser(db, user) {
  return new Promise((resolve, reject) => {
    let populatedUser = { ...user };
    db.collection('user')
      .aggregate([
        { $match: { _id: user.id } },
        { $project: { points: { $size: '$progressTimestamps' } } }
      ])
      .get(function(err, [{ points = 1 } = {}]) {
        if (err) {
          return reject(err);
        }
        user.points = points;
        let completedChallengeCount = 0;
        let completedProjectCount = 0;
        if ('completedChallenges' in user) {
          completedChallengeCount = user.completedChallenges.length;
          user.completedChallenges.forEach(item => {
            if (
              'challengeType' in item &&
              (item.challengeType === 3 || item.challengeType === 4)
            ) {
              completedProjectCount++;
            }
          });
        }
        populatedUser.completedChallengeCount = completedChallengeCount;
        populatedUser.completedProjectCount = completedProjectCount;
        populatedUser.completedCertCount = getCompletedCertCount(user);
        populatedUser.completedLegacyCertCount = getLegacyCertCount(user);
        populatedUser.completedChallenges = [];
        return resolve(populatedUser);
      });
  });
}
