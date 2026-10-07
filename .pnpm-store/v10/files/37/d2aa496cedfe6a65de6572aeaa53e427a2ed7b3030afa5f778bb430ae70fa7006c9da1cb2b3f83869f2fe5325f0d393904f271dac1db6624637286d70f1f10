'use strict';

module.exports = hrtime => {
	const nanoseconds = (hrtime[0] * 1e9) + hrtime[1];
	const milliseconds = nanoseconds / 1e6;
	const seconds = nanoseconds / 1e9;

	return {
		seconds,
		milliseconds,
		nanoseconds
	};
};
