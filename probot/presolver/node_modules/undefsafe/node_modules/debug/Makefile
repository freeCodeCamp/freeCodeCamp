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

.FORCE:

install: node_modules

node_modules: package.json
	@NODE_ENV= $(PKG) install
	@touch node_modules

lint: .FORCE
	eslint browser.js debug.js index.js node.js

test-node: .FORCE
	istanbul cover node_modules/mocha/bin/_mocha -- test/**.js

test-browser: .FORCE
	mkdir -p dist

	@$(BROWSERIFY) \
		--standalone debug \
		. > dist/debug.js

	karma start --single-run
	rimraf dist

test: .FORCE
	concurrently \
		"make test-node" \
		"make test-browser"

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

.PHONY: all install clean distclean
