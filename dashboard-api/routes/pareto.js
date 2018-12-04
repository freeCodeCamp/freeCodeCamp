const router = require('express').Router();

const { indices, prs } = require('../data.json');

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


router.get('/', (reqeust, response) => {
  response.json({ ok: true, pareto });
});

module.exports = router;