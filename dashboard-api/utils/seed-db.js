const config = require('../config/config');
// config should be imported before importing any other file
const mongoose = require('mongoose');
const fetch = require('node-fetch');

// connect to mongo db
const mongoUri = config.mongo.host;
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
const { PR, INFO } = require('../models');

db.then(() => {
  console.log('MongoDB is connected');

  mongoose.connection.db.listCollections().toArray((err, names) => {
    if (err) {
      throw err;
    }
    if (names) {
      names.forEach(({ name }) => {
        mongoose.connection.db.dropCollection(name)
        .catch((err) => console.log(err));
      });
    }
  });

  fetch('https://pr-relations.glitch.me/getData', { method: 'GET' })
  .then((response) => response.json())
  .then(({ startTime, prs }) => {
    if (!prs.length) {
      throw 'Unable to retrieve data';
    }
    const documents = prs.map(({
      number, updatedAt, username, title, filenames
    }) => {
      return { _id: number, updatedAt, username, title, filenames };
    });

    PR.insertMany(documents)
    .catch((err) => console.log(err));

    const firstPR = prs[0].number;
    const lastPR = prs[prs.length - 1].number;
    const info = {
      lastUpdate: startTime,
      numPRs: prs.length,
      prRange: `${firstPR}-${lastPR}`
    };
    INFO.create(info)
    .then(() => {
      console.log('Sucessfully seeded data');
      mongoose.connection.close();
      console.log('Closed MongoDB connection');
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });

}).catch((err) => {
  console.log(err);
});
