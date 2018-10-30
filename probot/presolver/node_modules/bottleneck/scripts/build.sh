#!/usr/bin/env bash

set -e

if [ ! -d node_modules ]; then
	echo "Running 'npm install' first"
	sleep 1
	npm install
fi

node_modules/ejs-cli/bin/ejs-cli bottleneck.d.ts.ejs > bottleneck.d.ts

if [[ $1 = 'dev' ]]; then
  node_modules/coffeescript/bin/coffee --compile --no-header src/*.coffee
else
  node_modules/coffeescript/bin/coffee --compile --no-header --transpile src/*.coffee
fi

rm -rf lib/*
node scripts/assemble_lua.js > lib/lua.json
mv src/*.js lib/

if [[ $1 = 'dev' ]]; then
  echo 'Compiling bottleneck...'
else
  echo 'Building bottleneck...'
  node_modules/typescript/bin/tsc --noEmit --strict test.ts
  node_modules/browserify/bin/cmd.js -u redis lib/index.js > bottleneck.js
  node_modules/uglify-es/bin/uglifyjs bottleneck.js -o bottleneck.min.js
fi
echo 'Done!'
