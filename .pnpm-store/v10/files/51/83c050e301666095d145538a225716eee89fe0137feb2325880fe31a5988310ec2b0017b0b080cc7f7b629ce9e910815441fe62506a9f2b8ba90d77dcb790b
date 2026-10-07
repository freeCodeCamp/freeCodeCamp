/** @type {import('stylelint').PublicApi['formatters']} */
const formatters = {
	get compact() {
		return import('./compactFormatter.mjs').then((m) => m.default);
	},
	get github() {
		return import('./githubFormatter.mjs').then((m) => m.default);
	},
	get json() {
		return import('./jsonFormatter.mjs').then((m) => m.default);
	},
	get string() {
		return import('./stringFormatter.mjs').then((m) => m.default);
	},
	get tap() {
		return import('./tapFormatter.mjs').then((m) => m.default);
	},
	get unix() {
		return import('./unixFormatter.mjs').then((m) => m.default);
	},
	get verbose() {
		return import('./verboseFormatter.mjs').then((m) => m.default);
	},
};

export default formatters;
