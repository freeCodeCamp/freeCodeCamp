// See https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?_ga=1.24059122.934400320.1451142104#/
// See ./list-saucelabs-platforms.js
var CURRENT_VERSION = ''
var BETA_VERSION = 'beta'
var CHROME_VERSIONS = ['31', CURRENT_VERSION]
var FIREFOX_VERSIONS = ['4', '5', '6', '7', CURRENT_VERSION]
var OPERA_VERSIONS = ['11', '12']

var platforms = module.exports = {
	// Fast trial runs
	//////////////////
	fast: {
		'Linux': { 'chrome': [CURRENT_VERSION] },
	},

	// Common browser sets
	//////////////////////
	ie: {
		'Windows XP': { 'internet explorer': ['6', '7', '8'] },
		'Windows 7': { 'internet explorer': ['9'] },
		'Windows 8': { 'internet explorer': ['10'] },
		'Windows 10': { 'internet explorer': ['11'], 'microsoftedge': [CURRENT_VERSION] },
	},
	safari: {
		'Windows 7': { 'safari': ['5'] },
		'OS X 10.8': { 'safari': ['6'] },
		'OS X 10.9': { 'safari': ['7'] },
		'OS X 10.10': { 'safari': ['8'] },
		'OS X 10.11': { 'safari': ['9'] },
		'OS X 10.12': { 'safari': ['10'] },
	},
	firefox: {
		'Linux': { 'firefox': ['40'] },
		'Windows XP': { 'firefox': ['4', '5'] },
		'Windows 10': { 'firefox': [CURRENT_VERSION] },
		'Mac 10.12': { 'firefox': [CURRENT_VERSION] },
	},
	android: {
		'Linux': { 'android': ['4.4','5.0','5.1'] },
	},
	ios: {
		'Mac 10.10': {
			'ipad':  ['8.4'],
			'iphone':['8.4'],
		},
		'Mac 10.11': {
			'ipad':  ['9.3', '10.0'],
			'iphone':['9.3', '10.0'],
		}
	},
	chrome: {
		'Mac 10.12': { 'chrome':['27', CURRENT_VERSION] },
		'Windows 10': { 'chrome':['26', CURRENT_VERSION] },
	},
	opera: {
		'Windows XP': { 'opera':'11' },
		'Linux': { 'opera':'12' },
	},

	// Individual browser versions
	//////////////////////////////
	ie6: { 'Windows XP': { 'internet explorer': ['6'] } },
	ie7: { 'Windows XP': { 'internet explorer': ['7'] } },
	ie8: { 'Windows XP': { 'internet explorer': ['8'] } },
	ie9: { 'Windows 7':  { 'internet explorer': ['9'] } },
	ie10:{ 'Windows 8':  { 'internet explorer': ['10'] } },
	ie11:{ 'Windows 10': { 'internet explorer': ['11'] } },

	firefox4: { 'Windows XP': { 'firefox': ['4'] } },
	firefox5: { 'Windows XP': { 'firefox': ['5'] } },
}
