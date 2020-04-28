const router = require('express').Router();
const shell = require('shelljs');

router.get('/', (request, response) => {
  // not working yet
  shell
    .exec('npm run presolver')
    .then(function() {
      return response.status(200).send('ok');
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
