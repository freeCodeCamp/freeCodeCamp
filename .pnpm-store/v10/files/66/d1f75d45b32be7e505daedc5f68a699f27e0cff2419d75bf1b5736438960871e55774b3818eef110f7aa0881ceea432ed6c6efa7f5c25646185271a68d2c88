//.CommonJS
var CSSOM = {
	CSSRule: require("./CSSRule").CSSRule,
	CSSGroupingRule: require("./CSSGroupingRule").CSSGroupingRule,
	CSSConditionRule: require("./CSSConditionRule").CSSConditionRule,
};
///CommonJS


/**
 * @constructor
 * @see https://drafts.csswg.org/css-contain-3/
 * @see https://www.w3.org/TR/css-contain-3/
 */
CSSOM.CSSContainerRule = function CSSContainerRule() {
	CSSOM.CSSConditionRule.call(this);
};

CSSOM.CSSContainerRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSContainerRule.prototype.constructor = CSSOM.CSSContainerRule;
CSSOM.CSSContainerRule.prototype.type = 17;

Object.defineProperties(CSSOM.CSSContainerRule.prototype, {
  "conditionText": {
    get: function() {
      return this.containerText;
    },
    set: function(value) {
      this.containerText = value;
    },
    configurable: true,
    enumerable: true
  },
  "cssText": {
    get: function() {
      var cssTexts = [];
      for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@container " + this.containerText + " {" + cssTexts.join("") + "}";
    },
    configurable: true,
    enumerable: true
  }
});


//.CommonJS
exports.CSSContainerRule = CSSOM.CSSContainerRule;
///CommonJS
