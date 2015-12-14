import debugFactory from 'debug';
import assign from 'object.assign';

const debug = debugFactory('freecc:services:hikes');

export default function hikesService(app) {
  const Challenge = app.models.Challenge;

  return {
    name: 'hikes',
    read: (req, resource, params, config, cb) => {
      const query = {
        where: { challengeType: '6' },
        order: 'suborder ASC'
      };

      debug('params', params);
      if (params) {
        assign(query.where, {
          dashedName: { like: params.dashedName, options: 'i' }
        });
      }
      debug('query', query);
      Challenge.find(query, (err, hikes) => {
        if (err) {
          return cb(err);
        }
        cb(null, hikes);
      });
    }
  };
}
