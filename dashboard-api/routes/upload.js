require('dotenv').config();
const fs = require('fs');
const path = require('path');
const multer  = require('multer');
const router = require('express').Router();

const container = require('../data');

const upload = multer({ dest: 'uploads' });

router.post('/', upload.single('file'), (request, response) => {
  const secret = process.env.UPLOAD_SECRET;
  const { password } = request.query;
  if (!secret) {
    console.log('Environment variable for upload secret has not been set!');
  }

  if (!!secret && password === secret) {
    const { file: { path: filePath } } = request;
    const uploaded = path.resolve(__dirname, '../' + filePath);
    const dest = path.resolve(__dirname, '../data.json');
    const data = JSON.parse(fs.readFileSync(uploaded));
    const { indices, prs } = data;
    const dataOK = Object.keys(data).every((key) => {
      return !!data[key];
    });
    const lengthsMatch = Object.keys(indices).length === prs.length;

    if (dataOK && lengthsMatch) {
      container.update(data);
      fs.renameSync(uploaded, dest);
    }
    else {
      const logPath = path.resolve(__dirname, '../log.txt');
      const errorMsg = `Upload failed with ${uploaded}, dataOK: ${dataOK}, lengthsMatch: ${lengthsMatch}.`;
      fs.appendFileSync(logPath, errorMsg);
    }

    response.send(dest);
  }
});

module.exports = router;
