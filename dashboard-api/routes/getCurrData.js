const router = require('express').Router();

const container = require ('../data');

router.get('/', (request, response) => {
  response.json(container.data);
});

module.exports = router;
