const { prs, startTime } = require('../data.json');
const router = require('express').Router();

const firstPR = prs[0].number;
const lastPR = prs[prs.length - 1].number;
router.get('/', (request, response) => {
  response.json({
    ok: true,
    lastUpdate: startTime,
    numPRs: prs.length,
    prRange: `${firstPR}-${lastPR}`
  });
});

module.exports = router;