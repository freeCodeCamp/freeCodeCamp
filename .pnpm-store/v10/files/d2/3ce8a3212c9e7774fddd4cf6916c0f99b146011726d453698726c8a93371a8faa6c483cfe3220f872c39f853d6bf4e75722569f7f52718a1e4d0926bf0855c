module.exports = function (x) {
	const colonIndex = x.indexOf(':');
	if (colonIndex === -1) {
		return normalize(x);
	}
	const firstPart = x.substr(0, colonIndex);
	const secondPart = x.substr(colonIndex + 1);
	return `${firstPart}:${normalize(secondPart)}`;
}

function normalize (s) {
	s = s.toLowerCase();
	if (s === '_authtoken') return '_authToken';
	let r = s[0];
	for (let i = 1; i < s.length; i++) {
		r += s[i] === '_' ? '-' : s[i];
	}
	return r;
}
