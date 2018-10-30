
all: help

help:
	bake -h

test:
	cd test && ../node_modules/.bin/mocha -R spec .

eslint:
	eslint .

fix:
	eslint . --fix

release: version push publish

version:
	standard-version -m '%s'

push:
	git push origin master --tags

publish:
	npm publish

.PHONY: test
