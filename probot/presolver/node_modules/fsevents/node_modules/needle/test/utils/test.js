// TODO: write specs. :)

var fs = require('fs'),
    client = require('./../../');

process.env.DEBUG = true;

var response_callback = function(err, resp, body){
	console.log(err);
	if(resp) console.log("Got status code " + resp.statusCode)
	console.log(body);
}

function simple_head(){
	client.head('http://www.amazon.com', response_callback);
}

function simple_get(){
	client.get('http://www.nodejs.org', response_callback);
}

function proxy_get(){
	client.get('https://www.google.com/search?q=nodejs', {proxy: 'http://localhost:1234'}, response_callback);
}

function auth_get(){
	client.get('https://www.twitter.com', {username: 'asd', password: '123'}, response_callback);
}

function simple_post(url){

	var data = {
		foo: 'bar',
		baz: {
			nested: 'attribute'
		}
	}

	client.post(url, data, response_callback);

}

function multipart_post(url){

	var filename = 'test_file.txt';
	var data = 'Plain text data.\nLorem ipsum dolor sit amet.\nBla bla bla.\n';
	fs.writeFileSync(filename, data);

	var black_pixel = new Buffer("data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=".replace(/^data:image\/\w+;base64,/, ""), "base64");

	var data = {
		foo: 'bar',
		bar: 'baz',
		nested: {
			my_document: { file: filename, content_type: 'text/plain' },
			even: {
				more: 'nesting'
			}
		},
    pixel: { filename: 'black_pixel.gif', buffer: black_pixel, content_type: 'image/gif' },
    field2: {value: JSON.stringify({"json":[ {"one":1}, {"two":2} ]}), content_type: 'application/json' }
	}

	client.post(url, data, {multipart: true}, function(err, resp, body){

		console.log(err);
		console.log("Got status code " + resp.statusCode)
		console.log(body);
		fs.unlink(filename);

	});

}

switch(process.argv[2]){
	case 'head':
		simple_head();
		break;
	case 'get':
		simple_get();
		break;
	case 'auth':
		auth_get();
		break;
	case 'proxy':
		proxy_get();
		break;
	case 'post':
		simple_post(process.argv[3] || 'http://posttestserver.com/post.php');
		break;
	case 'multipart':
		multipart_post(process.argv[3] || 'http://posttestserver.com/post.php?dir=example');
		break;
	case 'all':
		simple_head();
		simple_get();
		auth_get();
		proxy_get();
		simple_post(process.argv[3] || 'http://posttestserver.com/post.php');
		multipart_post(process.argv[3] || 'http://posttestserver.com/post.php?dir=example');
		break;
	default:
		console.log("Usage: ./test.js [head|get|auth|proxy|multipart]")
}
