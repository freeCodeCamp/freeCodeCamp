const { indices, prs } = require('../data.json');
const router = require('express').Router();

router.get('/:number', (request, response) => {
  const { number: refNumber } = request.params;
  const index = indices[refNumber];
  
  if (!index) {
    response.json({ ok: true, message: 'Not a valid PR #.', results: [] });
    return;
  }
  
  const pr = prs[index];
  const results = [];
  const { filenames: refFilenames } = pr;

  prs.forEach(({ number, filenames, username }) => {
    if (number != refNumber) {
      const matchedFilenames = filenames.filter((filename) => {
        return refFilenames.includes(filename);
      });

      if (matchedFilenames.length) {
        results.push({ number, filenames: matchedFilenames, username });
      }
    }
  });
  
  if (!results.length) {
    response.json({ ok: true, message: 'No matching results.', results: [] });
    return;
  }

  response.json({ ok: true, results });
});

module.exports = router;