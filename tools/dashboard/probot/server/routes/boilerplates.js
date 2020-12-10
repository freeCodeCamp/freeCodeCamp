const router = require('express').Router();
const { BOILERPLATE } = require('../models');
const { reqLimiter } = require('../req-limiter');

router.get('/', reqLimiter, async (request, response) => {
  let boilerplates = await BOILERPLATE.find({}).then(data => data);
  boilerplates.sort((a, b) => a._id - b._id);
  boilerplates = boilerplates.reduce((boilerplatesArr, boilerplate) => {
    const { _id, prs } = boilerplate;
    if (prs.length) {
      prs.sort((a, b) => a._id - b._id);
      return boilerplatesArr.concat({ _id, prs });
    }
    return boilerplates;
  }, []);

  response.json({ ok: true, boilerplates });
});

module.exports = router;