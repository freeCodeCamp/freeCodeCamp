const router = require('express').Router();
const { INFO } = require('../models');

router.get('/', async(request, response) => {
  const info = await INFO.find({});
  const { lastUpdate, numPRs, prRange } = info[0];
  response.json({ ok: true, lastUpdate, numPRs, prRange });
});

module.exports = router;
