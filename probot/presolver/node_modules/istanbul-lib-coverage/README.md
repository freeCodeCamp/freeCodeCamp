istanbul-lib-coverage
---------------------

[![Greenkeeper badge](https://badges.greenkeeper.io/istanbuljs/istanbul-lib-coverage.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/istanbuljs/istanbul-lib-coverage.svg?branch=master)](https://travis-ci.org/istanbuljs/istanbul-lib-coverage)

An API that provides a read-only view of coverage information with the ability
to merge and summarize coverage info.

Supersedes `object-utils` and `collector` from the v0 istanbul API.

See the docs for the full API.

```js

var libCoverage = require('istanbul-lib-coverage');
var map = libCoverage.createCoverageMap(globalCoverageVar);
var summary = libCoverage.createCoverageSummary();

// merge another coverage map into the one we created
map.merge(otherCoverageMap);

// inspect and summarize all file coverage objects in the map
map.files().forEach(function (f) {
    var fc = map.fileCoverageFor(f),
    s = fc.toSummary();
    summary.merge(s);
});

console.log('Global summary', summary);

```

