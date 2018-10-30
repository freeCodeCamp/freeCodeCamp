# get Makefile directory name: http://stackoverflow.com/a/5982798/376773
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# Path
PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

# applications
NODE ?= $(shell which node)
YARN ?= $(shell which yarn)
PKG ?= $(if $(YARN),$(YARN),$(NODE) $(shell which npm))
BROWSERIFY ?= $(NODE) $(BIN)/browserify

install: node_modules

browser: dist/debug.js

node_modules: package.json
	@NODE_ENV= $(PKG) install
	@touch node_modules

dist/debug.js: src/*.js node_modules
	@mkdir -p dist
	@$(BROWSERIFY) \
		--standalone debug \
		. > dist/debug.js

lint:
	@eslint *.js src/*.js

test-node:
	@istanbul cover node_modules/mocha/bin/_mocha -- test/**.js
	@cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

test-browser:
	@$(MAKE) browser
	@karma start --single-run

test-all:
	@concurrently \
		"make test-node" \
		"make test-browser"

test:
	@if [ "x$(BROWSER)" = "x" ]; then \
		$(MAKE) test-node; \
		else \
		$(MAKE) test-browser; \
	fi

clean:
	rimraf dist coverage

.PHONY: browser install clean lint test test-all test-node test-browser
