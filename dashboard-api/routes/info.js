const router = require('express').Router();

const container = require ('../data');

router.get('/', (request, response) => {
  const { prs, startTime } = container.data;
  const firstPR = prs[0].number;
  const lastPR = prs[prs.length - 1].number;

  response.json({
    ok: true,
    lastUpdate: startTime,
    numPRs: prs.length,
    prRange: `${firstPR}-${lastPR}`
  });
});

module.exports = router;
