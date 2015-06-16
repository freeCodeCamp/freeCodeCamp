/**
 * Created by nathanleniz on 6/16/15.
 */

var path = require('path');
var fs = require('fs');

if (process.env.NODE_ENV === 'production') {
  exports.privateKey =
    fs.readFileSync(path.join(__dirname,
      '../../private/privatekey.pem'));
  exports.certificate =
    fs.readFileSync(path.join(__dirname,
      '../../private/certificate.pem'));

}
