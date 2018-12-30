const PR = require('../models/pr.js');
const startTime = new Date()
const router = require('express').Router();

router.get('/', (request, response) => {
  PR.find({}, (err, prs) => {
    if (err) {
      // TODO: better err handler
      console.log(err)
    }
    response.json({ ok: true, foundPRs: prs });
  });
});

module.exports = router;
