const data = require('../data.json');
const router = require('express').Router();

router.get('/', (request, response) => {
  response.json(data);
});

module.exports = router;