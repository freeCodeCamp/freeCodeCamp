import debugFactory from 'debug';

const debug = debugFactory('fcc:services:hikes');

export default function hikesService(app) {
  const Challenge = app.models.Challenge;

  return {
    name: 'hikes',
    read: (req, resource, { dashedName } = {}, config, cb) => {
      const query = {
        where: {
          challengeType: '6',
          isComingSoon: false
        },
        order: ['order ASC', 'suborder ASC' ]
      };

      debug('dashedName', dashedName);
      if (dashedName) {
        query.where.dashedName = { like: dashedName, options: 'i' };
      }
      debug('query', query);
      Challenge.find(query, (err, hikes) => {
        if (err) {
          return cb(err);
        }
        return cb(null, hikes.map(hike => hike.toJSON()));
      });
    }
  };
}
