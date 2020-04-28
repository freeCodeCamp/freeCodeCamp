const router = require('express').Router();
const { INFO } = require('../models');

router.get('/', async (request, response) => {
  const [{ lastUpdate, numPRs, prRange }] = await INFO.find({});
  response.json({ ok: true, lastUpdate, numPRs, prRange });
});

module.exports = router;
