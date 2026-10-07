test: test-node lint

test-node:
	node scripts/run-node-tests.js

test-browser:
	node scripts/run-browser-tests-live-reload.js

test-full: build test
	node scripts/run-saucelabs-tests.js
test-ie: build test
	node scripts/run-saucelabs-tests.js ie
test-safari: build test
	node scripts/run-saucelabs-tests.js safari
test-firefox: build test
	node scripts/run-saucelabs-tests.js firefox
test-chrome: build test
	node scripts/run-saucelabs-tests.js chrome
test-android: build test
	node scripts/run-saucelabs-tests.js android
test-ios: build test
	node scripts/run-saucelabs-tests.js ios
test-opera: build test
	node scripts/run-saucelabs-tests.js opera

tunnel:
	node scripts/create-tunnel.js

build:
	node scripts/compile-builds.js

lint:
	./node_modules/.bin/eslint tests/* src/* plugins/* storages/*  \
		--ignore-pattern src/addon/lib/json2.js                    \
