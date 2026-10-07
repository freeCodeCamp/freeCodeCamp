//.CommonJS
var CSSOM = {
	CSSStyleSheet: require("./CSSStyleSheet").CSSStyleSheet,
	CSSRule: require("./CSSRule").CSSRule,
	CSSStyleRule: require("./CSSStyleRule").CSSStyleRule,
	CSSGroupingRule: require("./CSSGroupingRule").CSSGroupingRule,
	CSSConditionRule: require("./CSSConditionRule").CSSConditionRule,
	CSSMediaRule: require("./CSSMediaRule").CSSMediaRule,
	CSSContainerRule: require("./CSSContainerRule").CSSContainerRule,
	CSSSupportsRule: require("./CSSSupportsRule").CSSSupportsRule,
	CSSStyleDeclaration: require("./CSSStyleDeclaration").CSSStyleDeclaration,
	CSSKeyframeRule: require('./CSSKeyframeRule').CSSKeyframeRule,
	CSSKeyframesRule: require('./CSSKeyframesRule').CSSKeyframesRule,
	CSSLayerBlockRule: require('./CSSLayerBlockRule').CSSLayerBlockRule
};
///CommonJS


/**
 * Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
 * @param {CSSStyleSheet|CSSOM.CSSStyleSheet} stylesheet
 * @nosideeffects
 * @return {CSSOM.CSSStyleSheet}
 */
CSSOM.clone = function clone(stylesheet) {

	var cloned = new CSSOM.CSSStyleSheet();

	var rules = stylesheet.cssRules;
	if (!rules) {
		return cloned;
	}

	for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
		var rule = rules[i];
		var ruleClone = cloned.cssRules[i] = new rule.constructor();

		var style = rule.style;
		if (style) {
			var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
			for (var j = 0, styleLength = style.length; j < styleLength; j++) {
				var name = styleClone[j] = style[j];
				styleClone[name] = style[name];
				styleClone._importants[name] = style.getPropertyPriority(name);
			}
			styleClone.length = style.length;
		}

		if (rule.hasOwnProperty('keyText')) {
			ruleClone.keyText = rule.keyText;
		}

		if (rule.hasOwnProperty('selectorText')) {
			ruleClone.selectorText = rule.selectorText;
		}

		if (rule.hasOwnProperty('mediaText')) {
			ruleClone.mediaText = rule.mediaText;
		}

		if (rule.hasOwnProperty('conditionText')) {
			ruleClone.conditionText = rule.conditionText;
		}

		if (rule.hasOwnProperty('layerName')) {
			ruleClone.layerName = rule.layerName;
		}

		if (rule.hasOwnProperty('cssRules')) {
			ruleClone.cssRules = clone(rule).cssRules;
		}
	}

	return cloned;

};

//.CommonJS
exports.clone = CSSOM.clone;
///CommonJS
