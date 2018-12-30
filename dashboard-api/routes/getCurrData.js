const PR = require('../models/pr.js');
const router = require('express').Router();
const { requestPrs } = require('../utils/requestPRs');
router.route('/')
.get((request, response, next) => {
  return PR.find({}, (err, prs) => {
    if (err) {
      // TODO: better err handler
      return next(err)
    }
    console.log('stored prs')
    console.log(prs)
    if (prs.length === 0) {
      

      requestPrs((error, results) => {
        if (!error) {
          return response.json({ ok: true, results});
        } else {
          console.log(error)
          return next(error)
        }
      })
    } else {
      return response.json({ ok: true, prs});
      
    }
    
  });
});

module.exports = router;