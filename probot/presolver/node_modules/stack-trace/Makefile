SHELL := /bin/bash

test:
	@./test/run.js

release:
	git push
	git push --tags
	npm publish .

.PHONY: test
