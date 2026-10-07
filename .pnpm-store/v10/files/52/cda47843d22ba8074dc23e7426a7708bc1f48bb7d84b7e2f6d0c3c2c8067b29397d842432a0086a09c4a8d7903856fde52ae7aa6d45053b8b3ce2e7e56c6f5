SHELL := /bin/bash

release-major: test
	npm version major -m "Release %s"
	git push
	npm publish

release-minor: test
	npm version minor -m "Release %s"
	git push
	npm publish

release-patch: test
	npm version patch -m "Release %s"
	git push
	npm publish

.PHONY: test release-major release-minor release-patch
