export default function hikesService(app) {
  const Challenge = app.models.Challenge;

  return {
    name: 'hikes',
    read: (req, resource, params, config, cb) => {
      Challenge.find({ where: { challengeType: '6' } }, (err, hikes) => {
        if (err) {
          return cb(err);
        }
        cb(null, hikes);
      });
    }
  };
}
