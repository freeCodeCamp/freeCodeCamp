var RGX = /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/,
	SEC = 1e3,
	MIN = SEC * 60,
	HOUR = MIN * 60,
	DAY = HOUR * 24,
	YEAR = DAY * 365.25;

function parse(val) {
	var num, arr = val.toLowerCase().match(RGX);
	if (arr != null && (num = parseFloat(arr[1]))) {
		if (arr[3] != null) return num * SEC;
		if (arr[4] != null) return num * MIN;
		if (arr[5] != null) return num * HOUR;
		if (arr[6] != null) return num * DAY;
		if (arr[7] != null) return num * DAY * 7;
		if (arr[8] != null) return num * YEAR;
		return num;
	}
}

function fmt(val, pfx, str, long) {
	var num = (val | 0) === val ? val : ~~(val + 0.5);
	return pfx + num + (long ? (' ' + str + (num != 1 ? 's' : '')) : str[0]);
}

function format(num, long) {
	var pfx = num < 0  ? '-' : '', abs = num < 0 ? -num : num;
	if (abs < SEC) return num + (long ? ' ms' : 'ms');
	if (abs < MIN) return fmt(abs / SEC, pfx, 'second', long);
	if (abs < HOUR) return fmt(abs / MIN, pfx, 'minute', long);
	if (abs < DAY) return fmt(abs / HOUR, pfx, 'hour', long);
	if (abs < YEAR) return fmt(abs / DAY, pfx, 'day', long);
	return fmt(abs / YEAR, pfx, 'year', long);
}

exports.format = format;
exports.parse = parse;