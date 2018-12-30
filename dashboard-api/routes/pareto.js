const router = require('express').Router();
const PR = require('../models/pr.js');
const request = require('request');
const { requestPrs } = require('../utils/requestPRs');


function getPareto(prs, cb) {
  console.log(prs)
  
  const reportObj = prs.reduce((obj, pr) => {
    const { number, filenames, username } = pr;
    
    filenames.forEach((filename) => {
      if (obj[filename]) {
        const { count, prs } = obj[filename];
        obj[filename] = { count: count + 1, prs: prs.concat({ number, username } ) };
      }
      else {
        obj[filename] = { count: 1, prs: [ { number, username } ] };
      }
    });
    return obj;
  }, {});
  const pareto = Object.keys(reportObj)
    .map((filename) => {
      const { count, prs } = reportObj[filename];
      return { filename, count, prs };
    })
    .sort((a, b) => b.count - a.count);
  cb(pareto);
}

router.get('/', (reqeust, response, next) => {
  PR.find({}, (err, prs) => {
    if (err) {
      // TODO: better err handler
      console.log(err)
    }
    if (prs.length === 0) {
      requestPrs((err, prs) => {
        if (err) return next(err)
        
        PR.find({}, (err, prs) => {
          if (err) return next(err)
          getPareto(prs, (pareto) => {
            response.json({ ok: true, pareto });
          })
        })
        
      })
    } else {
      getPareto(prs, (pareto) => {
        response.json({ ok: true, pareto });
      })
    }
  });
  
});

module.exports = router;
