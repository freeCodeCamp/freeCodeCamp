const router = require('express').Router();
const { INFO } = require('../models');
const { reqLimiter } = require('../req-limiter');

router.get('/', reqLimiter, async (request, response) => {
  const [{ lastUpdate, numPRs, prRange }] = await INFO.find({});
  response.json({ ok: true, lastUpdate, numPRs, prRange });
});

module.exports = router;
