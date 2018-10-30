#!/usr/bin/env ./node_modules/.bin/coffee

# Expected output is above 0.005 and below 0.07.

now = require('../../lib/performance-now')
console.log -(now() - now()).toFixed 3
