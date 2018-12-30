const router = require('express').Router();
const PR = require('../models/pr.js');
const { requestPrs } = require('../utils/requestPRs');

router.get('/', (request, response, next) => {
  const value  = request.query.value;

  if (value) {
    const filesFound = {};
    const regex = new RegExp(`/${value.trim().toLowerCase()}/`);
    PR.find({}, (err, prs) => {
      if (err) return next(err);
      if (prs.length === 0) {
        requestPrs((error, prs) => {
          if (error) return next(error);
          PR.aggregate([
            {$unwind: '$filenames'},
            {$match:{filenames: {$regex: regex}}},
            {$group: {_id: null, filenames: {$push:'$filenames'}  }}
          ], (err, results) => {
            if (err) return next(err)
            console.log(results);
            return response.json({ ok: true, results });
          })
        })
      } else {
        // not sure if this works yet
        PR.aggregate([
          {$unwind: '$filenames'},
          {$match:{filenames: {$regex: regex}}},
          {$group: {_id: null, filenames: {$push:'$filenames'}  }}
        ], (err, results) => {
          if (err) return next(err)
          console.log(results);
          return response.json({ ok: true, results });
        })
      }
    })
  } else {
    return response.json({ ok: true, message: 'No matching results.', results: [] });
  }
});

module.exports = router;
