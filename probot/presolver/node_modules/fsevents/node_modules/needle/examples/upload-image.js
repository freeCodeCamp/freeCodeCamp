var needle = require('../'),
    path   = require('path');

var image = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png';

function upload(obj, cb) {
  console.log('Uploading image...');

  var url = 'http://deviantsart.com';

  var opts = {
    timeout:  10000,
    follow:    3,
    multipart: true
  };

  var params = {
    file: obj
  }

  needle.post(url, params, opts, function(err, resp) {
    if (err || !resp.body.match('url'))
      return cb(err || new Error('No image URL found.'))

    cb(null, JSON.parse(resp.body).url)
  })
}

function download(url, cb) {
  console.log('Getting ' + url);
  needle.get(url, function(err, resp) {
    if (err) throw err;

    cb(null, resp.body);
  })
}

////////////////////////////////////////
// ok, now go.

download(image, function(err, buffer) {
  if (err) throw err;

  var obj = { buffer: buffer, content_type: 'image/png' };

  upload(obj, function(err, url) {
    if (err) throw err;

    console.log('Image uploaded to ' + url);
  })
})
