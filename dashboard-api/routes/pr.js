const router = require('express').Router();
const PR = require('../models/pr.js');
const { requestPrs } = require('../utils/requestPRs');

router.get('/:number', (request, response, next) => {
  const { number: refNumber } = request.params;
  PR.find({}, (err, prs) => {
    if (err) {
      // TODO: better err handler
      console.log(err)
    }
    const results = [];
    
    if (prs.length === 0) {
      requestPrs((error, result) => {
        if (error) return next(error)
        PR.findOne({number: parseInt(refNumber,10)}, (err, pr) => {
          if (err) return next(err)
          if (!pr) return response.json({ ok: true, message: 'Not a valid PR #.', results: [] });
          PR.find({filenames: {$in: pr.filenames}}, (err, prs) => {
            if (err) {
              return next(err)
            }
            return response.json({ ok: true, results: prs });
          })
        })
      })
    } else {
      PR.findOne({number: parseInt(refNumber,10)}, (err, pr) => {
        if (err) return next(err)
        if (!pr) return response.json({ ok: true, message: 'Not a valid PR #.', results: [] });

        PR.find({filenames: {$in: pr.filenames}}, (err, prs) => {
          if (err) {
            return next(err)
          }
          return response.json({ ok: true, results: prs });
        })
      })
    }
  });
});

module.exports = router;
