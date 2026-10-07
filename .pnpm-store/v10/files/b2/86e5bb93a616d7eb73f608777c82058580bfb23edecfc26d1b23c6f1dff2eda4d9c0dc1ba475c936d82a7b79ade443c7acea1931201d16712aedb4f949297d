TAP=node_modules/.bin/tap
LINT=node_modules/.bin/jshint

test:   lint
	$(TAP) test/*.js

lint:
	$(LINT) index.js
	$(LINT) test/*.js
  
