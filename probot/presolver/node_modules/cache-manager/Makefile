BASE = .

ISTANBUL = ./node_modules/.bin/istanbul
COVERAGE_OPTS = --lines 99 --statements 95 --branches 90 --functions 95

main: lint test docs

cover:
	$(ISTANBUL) cover test/run.js

check-coverage:
	$(ISTANBUL) check-coverage $(COVERAGE_OPTS)

test: cover check-coverage


test-cov: cover check-coverage
	open coverage/lcov-report/index.html

test-travis: lint
	./node_modules/.bin/istanbul cover test/run.js --report lcovonly \
	  -- -T unit,functional -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
lint:
	./node_modules/.bin/jscs ./lib && \
	./node_modules/.bin/jscs ./test && \
	./node_modules/.bin/jscs ./examples && \
	./node_modules/.bin/jshint ./lib --config $(BASE)/.jshintrc && \
	./node_modules/.bin/jshint ./test --config $(BASE)/.jshintrc
	./node_modules/.bin/jshint ./examples --config $(BASE)/.jshintrc

docs:
	./node_modules/.bin/jsdoc lib --recurse --readme README.md --package package.json
	echo docs available in ./out/index.html

.PHONY: test
