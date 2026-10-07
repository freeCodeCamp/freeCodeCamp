/* eslint-env browser */
'use strict';

function getChromeVersion() {
	const matches = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);

	if (!matches) {
		return;
	}

	return Number.parseInt(matches.groups.chromeVersion, 10);
}

const colorSupport = getChromeVersion() >= 69 ? {
	level: 1,
	hasBasic: true,
	has256: false,
	has16m: false
} : false;

module.exports = {
	stdout: colorSupport,
	stderr: colorSupport
};
