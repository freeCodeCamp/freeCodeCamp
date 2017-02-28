// object with "eval" key
var obj = {
	eval: function (str) {
		return str;
	},
	wrapper: function (str) {
		// method calling "eval" key from context
		// permitted use
		return this.eval(str);
	}
};

// object-key use, permitted
obj["eval"]("console.log('hello world');");
obj.eval("console.log('hello world');");

eval("console.log('hello world');");

window.eval("4+2");
window["eval"]("4+2");

document.eval("4+2");
document["eval"]("4+2");

this.eval("2+2");
