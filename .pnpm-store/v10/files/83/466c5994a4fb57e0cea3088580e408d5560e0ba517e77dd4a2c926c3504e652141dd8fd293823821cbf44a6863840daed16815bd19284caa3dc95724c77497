var IDX=256, HEX=[];
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

module.exports = function (len) {
	len = len || 16;
	var str='', num=0;
	return function () {
		if (!str || num === 256) {
			str=''; num=(1+len)/2 | 0;
			while (num--) str += HEX[256 * Math.random() | 0];
			str = str.substring(num=0, len-2);
		}
		return str + HEX[num++];
	};
}
