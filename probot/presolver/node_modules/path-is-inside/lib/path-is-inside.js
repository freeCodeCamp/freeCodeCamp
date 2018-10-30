"use strict";

var path = require("path");

module.exports = function (thePath, potentialParent) {
    // For inside-directory checking, we want to allow trailing slashes, so normalize.
    thePath = stripTrailingSep(thePath);
    potentialParent = stripTrailingSep(potentialParent);

    // Node treats only Windows as case-insensitive in its path module; we follow those conventions.
    if (process.platform === "win32") {
        thePath = thePath.toLowerCase();
        potentialParent = potentialParent.toLowerCase();
    }

    return thePath.lastIndexOf(potentialParent, 0) === 0 &&
		(
			thePath[potentialParent.length] === path.sep ||
			thePath[potentialParent.length] === undefined
		);
};

function stripTrailingSep(thePath) {
    if (thePath[thePath.length - 1] === path.sep) {
        return thePath.slice(0, -1);
    }
    return thePath;
}
