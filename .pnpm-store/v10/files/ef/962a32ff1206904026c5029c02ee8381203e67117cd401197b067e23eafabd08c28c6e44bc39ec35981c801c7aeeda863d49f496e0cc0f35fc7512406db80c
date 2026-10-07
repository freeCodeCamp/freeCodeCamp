var request = require('request')

module.exports = {
	setAuth: setAuth,
	get: get,
	post: post
}

var auth = {
	user: null,
	password: null,
}

function setAuth(saucelabsUsername, saucelabsToken) {
	auth.user = saucelabsUsername
	auth.password = saucelabsToken
}


function get(path, callback) {
	var params = {
		url: 'https://saucelabs.com/rest/v1/'+path,
		auth: auth
	}
	// console.log("REQ", params)
	request.get(params, function(err, res, body) {
		if (err) {
			throw err
		}
		if (res.statusCode != 200) {
			console.log(params)
			throw new Error('Non-200 status code: '+body)
		}
		// console.log("RES", params.url, body)
		callback(JSON.parse(body))
	})
}


function post(path, data, callback) {
	var params = {
		url: 'https://saucelabs.com/rest/v1/'+auth.user+'/'+path,
		auth: { user:auth.user, password:auth.password },
		json: data
	}
	// console.log("REQ", params)
	request.post(params, function(err, res, body) {
		if (err) {
			throw err
		}
		if (res.statusCode != 200) {
			throw new Error('Non-200 status code: '+body)
		}
		// console.log("RES", params.url, body)
		callback(body)
	})
}

// https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-StartJSUnitTests
