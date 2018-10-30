"use strict";

module.exports = function (t, a) {
	// Just sanity check, as real tests are in 'round', 'ceil' and 'floor' variants
	a(t("round")(55.55, -1), 55.6);
};
