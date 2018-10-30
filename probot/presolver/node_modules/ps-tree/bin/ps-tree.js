#!/usr/bin/env node

'use strict';

//
// Change the default parent PID if running
// under Windows.
//
var ppid = 1;
if (process.platform === 'win32') {
  ppid = 0;
}

require('../')(process.argv[2] || ppid, function (err, data) {
  console.log(data);
});
