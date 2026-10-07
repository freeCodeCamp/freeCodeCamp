//.CommonJS
var CSSOM = {
	CSSRule: require("./CSSRule").CSSRule
};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM.CSSStartingStyleRule = function CSSStartingStyleRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSStartingStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStartingStyleRule.prototype.constructor = CSSOM.CSSStartingStyleRule;
CSSOM.CSSStartingStyleRule.prototype.type = 1002;
//FIXME
//CSSOM.CSSStartingStyleRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSStartingStyleRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSStartingStyleRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@starting-style {" + cssTexts.join("") + "}";
	}
});


//.CommonJS
exports.CSSStartingStyleRule = CSSOM.CSSStartingStyleRule;
///CommonJS
