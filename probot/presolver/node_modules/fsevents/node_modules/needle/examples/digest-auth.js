var needle = require('./..');

var opts = {
  username: 'user3',
  password: 'user3',
  auth: 'digest'
}

needle.get('http://test.webdav.org/auth-digest/', opts, function(err, resp, body) {
  console.log(resp.headers);

  if (resp.statusCode == 401)
    console.log('\nIt failed.')
  else
    console.log('\nIt worked!')
});
