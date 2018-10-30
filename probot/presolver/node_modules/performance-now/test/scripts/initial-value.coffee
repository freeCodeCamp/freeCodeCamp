#!/usr/bin/env ./node_modules/.bin/coffee

###
Expected output is a number above 100 and below 350.
The time reported is relative to the time the node.js process was started
this is approximately at `(Date.now() process.uptime() * 1000)`
###

now = require '../../lib/performance-now'
console.log now().toFixed 3
