var needle = require('./../');

var url  = 'http://posttestserver.com/post.php?dir=needle';

var black_pixel = new Buffer("R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", 'base64');

var data = {
  foo: 'bar',
  nested: {
    test: 123
  },
  image: { buffer: black_pixel, content_type: 'image/gif' }
}

var resp = needle.post(url, data, { multipart: true });

resp.on('readable', function() {
  while (data = this.read()) {
    console.log(data.toString());
  }
})

resp.on('done', function(data) {
  console.log('Done.');
})
