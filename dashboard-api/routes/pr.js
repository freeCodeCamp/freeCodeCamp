const router = require('express').Router();
const { PR } = require('../models');

router.get('/:number', (request, response) => {
  (async() => {
    const prs = await PR.find({}).then(data => data);
    return prs;
  })()
  .then((prs) => {
    const indices = prs.reduce((obj, { _id }, index) => {
      obj[_id] = index;
      return obj;
    }, {});
    const { number: refNumber } = request.params;
    const index = indices[refNumber];

    if (!index && index !== 0) {
      response.json({
        ok: true,
        message: 'Unable to find that open PR #.',
        results: []
      });
      return;
    }

    const pr = prs[index];
    const results = [];
    const { filenames: refFilenames } = pr;

    prs.forEach(({ _id: number, filenames, username, title }) => {
      if (number !== refNumber) {
        const matchedFilenames = filenames.filter((filename) => {
          return refFilenames.includes(filename);
        });

        if (matchedFilenames.length) {
          results.push({
            number,
            filenames: matchedFilenames,
            username,
            title
          });
        }
      }
    });

    if (!results.length) {
      let message = 'No other open PRs with at least one filename which PR #';
      message += `${refNumber} has.`;
      response.json({
        ok: true,
        message,
        results: []
      });
      return;
    }

    response.json({ ok: true, results });
  });
});

module.exports = router;
