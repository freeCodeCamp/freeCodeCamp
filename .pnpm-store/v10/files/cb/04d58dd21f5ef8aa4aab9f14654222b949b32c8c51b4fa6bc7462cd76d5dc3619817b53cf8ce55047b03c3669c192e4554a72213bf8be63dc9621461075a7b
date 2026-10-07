var _ = require('lodash')
var api = require('./saucelabs-api')

module.exports = {
	setAuth: api.setAuth,
	listAllSupportedPlatforms: listAllSupportedPlatforms,
	runTest: runTest,
	platformSets: require('./saucelabs-platformSets'),
}

function listAllSupportedPlatforms(callback) {
	api.get('info/platforms/webdriver', function(platformsInfo) {
		var platforms = _.map(platformsInfo, function(info) {
			return [info['os'], info['api_name'], info['short_version']]
		})
		platforms.sort(function(a, b) {
			a = a.join('-')
			b = b.join('-')
			return a < b ? -1 : b < a ? 1 : 0
		})
		callback(null, filterUniquePlatforms(platforms))
	})
}

function runTests(url, platforms, callback) {
	var params = { maxDuration:1800, url:url, platforms:platforms, framework:'custom', recordVideo:false, recordScreenshots:false, recordLogs:true }
	api.post('js-tests', params, callback)
}

function getPlatformId(platform) {
	return platform.join('-')
		.replace('OS X', 'Mac')
		.replace('Windows XP', 'Windows 2003')
		.replace('Windows 7', 'Windows 2008')
		.replace('Windows 8', 'Windows 2012')
}

function filterUniquePlatforms(platforms) {
	var seen = {}
	return _.filter(platforms, function(platform) {
		var platformId = getPlatformId(platform)
		if (seen[platformId]) { return false }
		seen[platformId] = true
		return true
	})
}

function runTest(url, platformSets, callback) {
	getPlatformsArg(platformSets, function(platforms) {
		var runTestsRes
		runTests(url, platforms, function(res) {
			runTestsRes = res
			loopCheckStatus()
		})
		function loopCheckStatus() {
			getTestsStatus(runTestsRes, function(res) {
				var pending = []
				var running = []
				var passed = []
				var failed = []
				_.each(res['js tests'], function(test) {
					var status = getTestStatus(test)
					if (status == PENDING) { pending.push(test) }
					else if (status == PASSED) { passed.push(test) }
					else if (status == RUNNING) { running.push(test) }
					else if (status == FAILED) { failed.push(test) }
					else { throw new Error('Bad status') }
				})
				_.each(_.flatten([passed, pending, running, failed]), function(test) {
					console.log(getTestStatus(test), test.id, test.platform, test.status || 'test finished')
				})
				if (pending.length == 0 && running.length == 0) {
					console.log("Test suite completed")
					callback(checkTestResults(res))
				} else if (res.completed) {
					throw new Error('No pending tests, but res.completed == true')
				} else {
					var delay = 5
					console.log("Check again in", delay, "seconds")
					setTimeout(loopCheckStatus, delay * 1000)
				}
			})
		}
	})
}

function getPlatformsArg(platformSets, callback) {
	listAllSupportedPlatforms(function(err, supportedPlatforms) {
		if (err) { return callback(err) }
		var allSupportedPlatforms = {}
		_.each(supportedPlatforms, function(platform) {
			allSupportedPlatforms[getPlatformId(platform)] = true
		})
		
		var platforms = _.flatten(_.flatten(_.flatten(
			_.map(platformSets, function(platformSet) {
				return _.map(platformSet, function(browserSpecs, osName) {
					return _.map(browserSpecs, function(browserVersions, browserName) {
						if (typeof browserVersions == 'string') {
							browserVersions = [browserVersions]
						}
						return _.map(browserVersions, function(browserVersion) {
							return [osName, browserName, browserVersion]
						})
					})
				})
			})
		)))
		
		_.each(platforms, function(platform) {
			if (!platform[2]) { return } // Don't sanity-check CURRENT_VERSION
			var platformId = getPlatformId(platform)
			if (!allSupportedPlatforms[platformId]) {
				throw new Error('Unsupported platform: '+platform.join(', ')+' ('+platformId+')')
			}
		})
		
		callback(filterUniquePlatforms(platforms))
	})
}

function getTestsStatus(runTestsRes, callback) {
	api.post('js-tests/status', { 'js tests':runTestsRes['js tests'] }, function(res) {
		callback(res)
	})
}

var PENDING = 'PENDING'
var RUNNING = 'RUNNING'
var FAILED  = 'FAILED '
var PASSED  = 'PASSED '
function getTestStatus(test) {
	if (test.status == 'test error') {
		return FAILED
	} else if (test.status == 'test session in progress') {
		return RUNNING
	} else if (test.result) {
		return (test.result.failed ? FAILED : PASSED)
	} else {
		return PENDING
	}
}

function checkTestResults(res) {
	var failed = 0
	_.each(res['js tests'], function(test) {
		console.log(getTestStatus(test), test.id, test.status, test.platform, test.url)
		if (getTestStatus(test) == FAILED) {
			failed += 1
			console.log('Result:', test.result)
		}
	})
	return (failed ? failed+' tests failed' : null)
}
