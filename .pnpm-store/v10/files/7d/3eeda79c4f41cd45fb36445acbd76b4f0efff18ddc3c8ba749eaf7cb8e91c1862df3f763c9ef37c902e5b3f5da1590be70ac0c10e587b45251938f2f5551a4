BASE = .

NYC = ./node_modules/.bin/nyc
COVERAGE_OPTS = --lines 99 --statements 95 --branches 90 --functions 95

main: lint test docs

cover:
	$(NYC) test/run.js

check-coverage:
	$(NYC) check-coverage $(COVERAGE_OPTS)

test: cover check-coverage


test-cov: cover check-coverage
	open coverage/lcov-report/index.html

test-travis: lint
	./node_modules/.bin/nyc test/run.js --report lcovonly \
	  -- -T unit,functional -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
lint:
	./node_modules/.bin/eslint ./lib && \
	./node_modules/.bin/eslint ./test && \
	./node_modules/.bin/eslint ./examples

docs:
	./node_modules/.bin/jsdoc lib --recurse --readme README.md --package package.json
	echo docs available in ./out/index.html

.PHONY: test
