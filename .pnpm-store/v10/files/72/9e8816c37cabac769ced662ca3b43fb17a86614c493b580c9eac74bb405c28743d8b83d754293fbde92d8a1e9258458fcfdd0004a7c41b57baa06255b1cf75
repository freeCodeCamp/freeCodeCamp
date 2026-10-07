var http = require('http')
var fs = require('fs')
var ngrok = require('ngrok')

module.exports = {
	setup: setup,
}

function setup(port, callback) {
	startServer(port, function(err) {
		if (err) { return callback(err) }
		console.log("Creating tunnel - this might take a few seconds")
		startTunnel(port, function(err, url) {
			if (err) { return callback(err) }
			console.log("tunnel up at", url)
			callback(null, url)
		})
	})
}

function startTunnel(port, callback) {
	// return callback(null, 'https://07f51ed4.ngrok.io')
	var authtoken = new Buffer('NTJuelB1dUpVSDNycDNjZ3pldHVEXzVnWlNObkpuMlFaR013WjZ0eUZUQw==', 'base64').toString('utf8')
	ngrok.connect({ addr:port, subdomain:'storejs-test', authtoken:authtoken }, function(err, url) {
		if (err) { return callback(err) }
		url = url.replace('https:', 'http:')
		callback(null, url)
	})
}

function startServer(port, callback) {
	var server = http.createServer(handleReq)
	server.listen(port)
	server.on('listening', function(err) {
		if (err) { return callback(err) }
		console.log('local server listening on http://localhost:'+port+'/')
		callback()
	})
	
	function handleReq(req, res) {
		console.log(req.url)
		if (req.url == '/') {
			res.writeHead(200, { 'Content-Type':'text/html' })
			res.end(testRunnerHTML)

		} else if (req.url == '/store.tests.min.js') {
			var headers = {
				'Content-Type':'application/javascript',
				'Cache-Control': 'no-cache, no-store, must-revalidate',
				'Pragma': 'no-cache',
				'Expires': '0'
			}
			res.writeHead(200, headers)
			fs.createReadStream(__dirname+'/../../dist/store.tests.min.js').pipe(res)

		} else {
			res.writeHead(404)
			res.end('Not found')
		}
	}
	
	var testRunnerHTML = `
		<!doctype html>
		<head>
			<title>store.js test runner</title>
		</head>
		<body>
			<h1>store.js test runner</h1>
			<script src="/store.tests.min.js"></script>
		</body>
		</html>
	`.replace(/\n\t\t/g, '\n').replace(/^\n/, '')
}
