
const { indices, prs } = require('../data.json');
const router = require('express').Router();

router.get('/', (request, response) => {
  const value  = request.query.value;
  
  if (value) {
    const filesFound = {};

    prs.forEach(({ number, filenames }) => {
      filenames.forEach((filename) => {
        if (filename.toLowerCase().includes(value.toLowerCase())) {
          const prObj = {
            number,
            fileCount: prs[indices[number]].filenames.length
          };

          if (filesFound.hasOwnProperty(filename)) {
            filesFound[filename].push(prObj);        
          }
          else {
            filesFound[filename] = [prObj]
          }
        }
      });
    });

    let results = Object.keys(filesFound)
      .map((filename) => ({ filename, prs: filesFound[filename] }))
      .sort((a, b) => a.filename === b.filename ? 0 : a.filename < b.filename ? -1 : 1);

    if (!results.length) {
      response.json({ ok: true, message: 'No matching results.', results: [] });
      return;
    }

    response.json({ ok: true, results });
  }
});

module.exports = router;