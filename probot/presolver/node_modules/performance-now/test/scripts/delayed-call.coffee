#!/usr/bin/env ./node_modules/.bin/coffee

###
Expected output is a number above 350 and below 600.
The time reported is relative to the time the node.js process was started
this is approximately at `(Date.now() process.uptime() * 1000)`
###

delay = require "call-delayed"
now = require "../../lib/performance-now"
delay 250, -> console.log now().toFixed 3
