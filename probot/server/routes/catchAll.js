const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({ ok: true, message: 'catchall' });
});

module.exports = router;
