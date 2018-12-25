const router = require('express').Router();

const container = require('../data');

router.get('/:number', (request, response) => {
  const { indices, prs } = container.data;
  const { number: refNumber } = request.params;
  const index = indices[refNumber];

  if (!index && index !== 0) {
    response.json({ ok: true, message: 'Unable to find that open PR #.', results: [] });
    return;
  }

  const pr = prs[index];
  const results = [];
  const { filenames: refFilenames } = pr;

  prs.forEach(({ number, filenames, username, title }) => {
    if (number != refNumber) {
      const matchedFilenames = filenames.filter((filename) => {
        return refFilenames.includes(filename);
      });

      if (matchedFilenames.length) {
        results.push({ number, filenames: matchedFilenames, username, title });
      }
    }
  });

  if (!results.length) {
    response.json({ ok: true, message: `No other open PRs with at least one filename which PR #${refNumber} has.`, results: [] });
    return;
  }

  response.json({ ok: true, results });
});

module.exports = router;
