//.CommonJS
var CSSOM = {
  CSSRule: require("./CSSRule").CSSRule,
  CSSGroupingRule: require("./CSSGroupingRule").CSSGroupingRule
};
///CommonJS


/**
 * @constructor
 * @see https://www.w3.org/TR/css-conditional-3/#the-cssconditionrule-interface
 */
CSSOM.CSSConditionRule = function CSSConditionRule() {
  CSSOM.CSSGroupingRule.call(this);
  this.cssRules = [];
};

CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
CSSOM.CSSConditionRule.prototype.conditionText = ''
CSSOM.CSSConditionRule.prototype.cssText = ''

//.CommonJS
exports.CSSConditionRule = CSSOM.CSSConditionRule;
///CommonJS
