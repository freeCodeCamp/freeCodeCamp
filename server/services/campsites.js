// don't return deleted campsites to client
const whereFilt = {
  where: {
    isDeleted: false
  }
};

export default function getCampsiteServices(app) {
  const { Campsite } = app.models;

  return {
    name: 'campsites',
    create(req, resource, { formattedCampsite } = {}, body, config, cb) {
      if (!formattedCampsite) {
        return cb(new Error('campsite creation should get a campsite object'));
      }

      return Campsite.create(formattedCampsite, (err, savedCampsite) => {
        cb(err, savedCampsite.toJSON());
      });
    },
    read(req, resource, params, config, cb) {
      return Campsite.find(whereFilt)
        .then(campsites => cb(null, campsites.map(
          campsite=> campsite.toJSON()
        )))
        .catch(cb);

    },
    update(req, resource, { campsite } = {}, body, config, cb) {
      if (!campsite) {
        return cb(new Error('campsite creation should get a campsite object'));
      }
      // update campsite based on campsite object passed in
      // Note: this overwrites all fields
      return Campsite.updateOrCreate(campsite, (err, campsite) => {
        cb(err, campsite.toJSON());

      });
    }
  };
}
