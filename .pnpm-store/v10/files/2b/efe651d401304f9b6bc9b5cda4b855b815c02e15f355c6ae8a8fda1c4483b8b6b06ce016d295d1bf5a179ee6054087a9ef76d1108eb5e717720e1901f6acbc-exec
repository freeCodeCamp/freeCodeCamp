#!/usr/bin/env node
kill = require('.')
try {
  kill(process.argv[2], process.argv[3], function(err){
    if (err) {
      console.log(err.message)
      process.exit(1)
    }
  })
}
catch (err) {
  console.log(err.message)
  process.exit(1)
}
