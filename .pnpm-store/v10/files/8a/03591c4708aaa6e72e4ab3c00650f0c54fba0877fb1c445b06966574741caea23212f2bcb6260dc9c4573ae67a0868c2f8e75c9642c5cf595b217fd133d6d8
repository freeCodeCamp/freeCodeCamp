(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	Prism.hooks.add('before-sanity-check', function (env) {
		if (env.code) {
			var pre = env.element.parentNode;
			var clsReg = /(?:^|\s)keep-initial-line-feed(?:\s|$)/;
			if (
				pre && pre.nodeName.toLowerCase() === 'pre' &&
				// Apply only if nor the <pre> or the <code> have the class
				(!clsReg.test(pre.className) && !clsReg.test(env.element.className))
			) {
				env.code = env.code.replace(/^(?:\r?\n|\r)/, '');
			}
		}
	});

}());
