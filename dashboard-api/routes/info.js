const PR = require('../models/pr.js');
const { requestPrs } = require('../utils/requestPRs');
const router = require('express').Router();

router.get('/', (request, response) => {
  PR.find({}, (err, prs) => {
    if (err) {
      // TODO: better err handler
      console.log(err)
    }
    if (prs.length === 0) {
      requestPrs((err, results) => {
        const firstPR = results.openPRs[0].number;
        const lastPR = results.openPRs[results.openPRs.length - 1].number;
        response.json({
          ok: true,
          lastUpdate: results.startTime,
          numPRs: results.openPRs.length,
          prRange: `${firstPR}-${lastPR}`
        });
      })
    } else {
      const firstPR = prs[0].number;
      const lastPR = prs[prs.length - 1].number;
      response.json({
        ok: true,
        // todo: store date after polling
        lastUpdate: new Date(),
        numPRs: prs.length,
        prRange: `${firstPR}-${lastPR}`
      });
    }
    
  });
});

module.exports = router;
