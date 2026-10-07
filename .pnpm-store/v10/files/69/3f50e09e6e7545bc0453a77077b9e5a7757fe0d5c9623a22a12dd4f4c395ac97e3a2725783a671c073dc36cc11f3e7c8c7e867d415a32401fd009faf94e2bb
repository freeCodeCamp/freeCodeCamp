minify: real-minify test-minified

real-minify: format.js
	rm -f format-min.js
	closure <format.js >|format-min.js

test:
	node test_format.js

test-minified:
	node test_format.js ./format-min.js

.PHONY: test test-minified
