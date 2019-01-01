const router = require('express').Router();
const { INFO } = require('../models');

router.get('/', (request, response) => {
  (async() => {
    const info = await INFO.find({}).then(info => info);
    return info[0];
  })()
  .then(({ lastUpdate, numPRS, prRange }) => {
    response.json({ ok: true, lastUpdate, numPRS, prRange });
  })
  .catch(err => console.log(err));
});

module.exports = router;
