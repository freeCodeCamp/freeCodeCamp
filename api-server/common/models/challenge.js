import { Observable } from 'rx';
import { isEmpty } from 'lodash';

export default function(Challenge) {
  let challengeIdToNameMap;

  Challenge.on('dataSourceAttached', () => {
    Challenge.findOne$ = Observable.fromNodeCallback(
      Challenge.findOne,
      Challenge
    );
    Challenge.findById$ = Observable.fromNodeCallback(
      Challenge.findById,
      Challenge
    );
    Challenge.find$ = Observable.fromNodeCallback(Challenge.find, Challenge);

    Challenge.find({ isPrivate: false }, (err, challenges) => {
      if (err) {
        throw Error(err);
      }
      challengeIdToNameMap = challenges.reduce((map, challenge) => {
        const { id, title } = challenge;
        map[id] = title;
        return map;
      }, {});
    });

    function getIdToNameMap(cb) {
      if (isEmpty(challengeIdToNameMap)) {
        // We are waiting for the find query to resolve
        return setTimeout(() => getIdToNameMap(cb), 50);
      }
      return cb(null, challengeIdToNameMap);
    }
    Challenge.getIdToNameMap = getIdToNameMap;
  });

  Challenge.remoteMethod('getIdToNameMap', {
    returns: [
      {
        arg: 'user',
        type: 'object',
        root: true
      }
    ],
    http: {
      path: '/get-id-to-name',
      verb: 'GET'
    }
  });
}
