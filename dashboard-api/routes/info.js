const router = require('express').Router();
const { INFO } = require('../models');

router.get('/', (request, response) => {
  INFO.find({})
  .then(info => {
     response.json(...{ ok: true }, ...info);
  })
  .catch(err => console.log(err));
});

module.exports = router;
