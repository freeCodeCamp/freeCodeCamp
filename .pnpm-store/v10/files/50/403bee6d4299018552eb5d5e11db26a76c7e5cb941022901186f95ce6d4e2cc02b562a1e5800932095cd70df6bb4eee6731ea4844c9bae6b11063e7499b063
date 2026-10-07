#!/usr/local/bin/node

var port = 9574
var username = 'storejs'
var password = new Buffer('ZjhjMzUyNjgtNzc2ZC00ZjlkLWEwNWUtN2FkM2Q0ZDgyNzk5', 'base64').toString('utf8')

// TODO: Contribute to npm-saucelabs? Create new module?
var saucelabs = require('./saucelabs/saucelabs')
var tunnel = require('./saucelabs/tunnel')

main(function(err) {
	if (err) { throw err }
	log('All done!')
})

function main() {
	var platformSetNames = process.argv.slice(2)
	var platformSets = platformSetNames.map(function(platformSetName) {
		var platformSet = saucelabs.platformSets[platformSetName]
		if (!platformSet) {
			throw new Error("Unknown platform set: "+platformSetName)
		}
		return platformSet
	})
	if (platformSets.length == 0) {
		var s = saucelabs.platformSets
		var platformSets = [
			// All supported platforms:
			///////////////////////////
			s.ie,
			s.safari,
			s.firefox,
			s.chrome,
			s.android,
			s.ios,
			s.opera,

			// Specific test targets for development:
			/////////////////////////////////////////
			// s.fast,
			// s.ie6, s.ie7, s.ie8,
			// s.ie9, s.ie10, s.ie11,
			// s.firefox4, s.firefox5,
			// s.ie10,
		]
	}
	
	tunnel.setup(port, function(err, url) {
		if (err) { throw err }
		saucelabs.setAuth(username, password)
		saucelabs.runTest(url, platformSets, onDone)
		function onDone(err) {
			if (err) {
				console.log('Error', err)
				process.exit(1)
			} else {
				log('All tests passed!')
				process.exit(0)				
			}
		}			
	})
}

function log() {
	console.log.apply(console, arguments)
}
