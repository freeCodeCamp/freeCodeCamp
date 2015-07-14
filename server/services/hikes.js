export default function hikesService(app) {
  const Challenge = app.models.Challenge;

  return {
    name: 'hikes',
    read: (req, resource, params, config, cb) => {
      const query = {
        where: { challengeType: '6' },
        order: 'difficulty ASC'
      };
      Challenge.find(query, (err, hikes) => {
        if (err) {
          return cb(err);
        }
        cb(null, hikes);
      });
    }
  };
}
