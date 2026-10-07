var CSSOM = {};


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 */
CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration(){
	this.length = 0;
	this.parentRule = null;

	// NON-STANDARD
	this._importants = {};
};


CSSOM.CSSStyleDeclaration.prototype = {

	constructor: CSSOM.CSSStyleDeclaration,

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set.
	 */
	getPropertyValue: function(name) {
		return this[name] || "";
	},

	/**
	 *
	 * @param {string} name
	 * @param {string} value
	 * @param {string} [priority=null] "important" or null
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
	 */
	setProperty: function(name, value, priority) {
		if (this[name]) {
			// Property already exist. Overwrite it.
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) {
				this[this.length] = name;
				this.length++;
			}
		} else {
			// New property.
			this[this.length] = name;
			this.length++;
		}
		this[name] = value + "";
		this._importants[name] = priority;
	},

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
	 */
	removeProperty: function(name) {
		if (!(name in this)) {
			return "";
		}
		var index = Array.prototype.indexOf.call(this, name);
		if (index < 0) {
			return "";
		}
		var prevValue = this[name];
		this[name] = "";

		// That's what WebKit and Opera do
		Array.prototype.splice.call(this, index, 1);

		// That's what Firefox does
		//this[index] = ""

		return prevValue;
	},

	getPropertyCSSValue: function() {
		//FIXME
	},

	/**
	 *
	 * @param {String} name
	 */
	getPropertyPriority: function(name) {
		return this._importants[name] || "";
	},


	/**
	 *   element.style.overflow = "auto"
	 *   element.style.getPropertyShorthand("overflow-x")
	 *   -> "overflow"
	 */
	getPropertyShorthand: function() {
		//FIXME
	},

	isPropertyImplicit: function() {
		//FIXME
	},

	// Doesn't work in IE < 9
	get cssText(){
		var properties = [];
		for (var i=0, length=this.length; i < length; ++i) {
			var name = this[i];
			var value = this.getPropertyValue(name);
			var priority = this.getPropertyPriority(name);
			if (priority) {
				priority = " !" + priority;
			}
			properties[i] = name + ": " + value + priority + ";";
		}
		return properties.join(" ");
	},

	set cssText(text){
		var i, name;
		for (i = this.length; i--;) {
			name = this[i];
			this[name] = "";
		}
		Array.prototype.splice.call(this, 0, this.length);
		this._importants = {};

		var dummyRule = CSSOM.parse('#bogus{' + text + '}').cssRules[0].style;
		var length = dummyRule.length;
		for (i = 0; i < length; ++i) {
			name = dummyRule[i];
			this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
		}
	}
};



/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
CSSOM.CSSRule = function CSSRule() {
  this.parentRule = null;
  this.parentStyleSheet = null;
};

CSSOM.CSSRule.UNKNOWN_RULE = 0; // obsolete
CSSOM.CSSRule.STYLE_RULE = 1;
CSSOM.CSSRule.CHARSET_RULE = 2; // obsolete
CSSOM.CSSRule.IMPORT_RULE = 3;
CSSOM.CSSRule.MEDIA_RULE = 4;
CSSOM.CSSRule.FONT_FACE_RULE = 5;
CSSOM.CSSRule.PAGE_RULE = 6;
CSSOM.CSSRule.KEYFRAMES_RULE = 7;
CSSOM.CSSRule.KEYFRAME_RULE = 8;
CSSOM.CSSRule.MARGIN_RULE = 9;
CSSOM.CSSRule.NAMESPACE_RULE = 10;
CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
CSSOM.CSSRule.SUPPORTS_RULE = 12;
CSSOM.CSSRule.DOCUMENT_RULE = 13;
CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSOM.CSSRule.VIEWPORT_RULE = 15;
CSSOM.CSSRule.REGION_STYLE_RULE = 16;
CSSOM.CSSRule.CONTAINER_RULE = 17;
CSSOM.CSSRule.LAYER_BLOCK_RULE = 18;
CSSOM.CSSRule.STARTING_STYLE_RULE = 1002;

CSSOM.CSSRule.prototype = {
  constructor: CSSOM.CSSRule,
  //FIXME
};

exports.CSSRule = CSSOM.CSSRule;
///CommonJS
/**
 * @constructor
 * @see https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface
 */
CSSOM.CSSGroupingRule = function CSSGroupingRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;


/**
 * Used to insert a new CSS rule to a list of CSS rules.
 *
 * @example
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *   cssGroupingRule.insertRule("img{border:none;}", 1)
 *   -> 1
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}img{border:none;}"
 *
 * @param {string} rule
 * @param {number} [index]
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-insertrule
 * @return {number} The index within the grouping rule's collection of the newly inserted rule.
 */
 CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	var cssRule = CSSOM.parse(rule).cssRules[0];
	cssRule.parentRule = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};

/**
 * Used to delete a rule from the grouping rule.
 *
 *   cssGroupingRule.cssText
 *   -> "img{border:none;}body{margin:0;}"
 *   cssGroupingRule.deleteRule(0)
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the grouping rule's rule list of the rule to remove.
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-deleterule
 */
 CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
	if (index < 0 || index >= this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	this.cssRules.splice(index, 1)[0].parentRule = null;
};


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


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssstylerule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
CSSOM.CSSStyleRule = function CSSStyleRule() {
	CSSOM.CSSRule.call(this);
	this.selectorText = "";
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
CSSOM.CSSStyleRule.prototype.type = 1;

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
	get: function() {
		var text;
		if (this.selectorText) {
			text = this.selectorText + " {" + this.style.cssText + "}";
		} else {
			text = "";
		}
		return text;
	},
	set: function(cssText) {
		var rule = CSSOM.CSSStyleRule.parse(cssText);
		this.style = rule.style;
		this.selectorText = rule.selectorText;
	}
});


/**
 * NON-STANDARD
 * lightweight version of parse.js.
 * @param {string} ruleText
 * @return CSSStyleRule
 */
CSSOM.CSSStyleRule.parse = function(ruleText) {
	var i = 0;
	var state = "selector";
	var index;
	var j = i;
	var buffer = "";

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true
	};

	var styleRule = new CSSOM.CSSStyleRule();
	var name, priority="";

	for (var character; (character = ruleText.charAt(i)); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				// Squash 2 or more white-spaces in the row into 1
				switch (ruleText.charAt(i - 1)) {
					case " ":
					case "\t":
					case "\r":
					case "\n":
					case "\f":
						break;
					default:
						buffer += " ";
						break;
				}
			}
			break;

		// String
		case '"':
			j = i + 1;
			index = ruleText.indexOf('"', j) + 1;
			if (!index) {
				throw '" is missing';
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		case "'":
			j = i + 1;
			index = ruleText.indexOf("'", j) + 1;
			if (!index) {
				throw "' is missing";
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		// Comment
		case "/":
			if (ruleText.charAt(i + 1) === "*") {
				i += 2;
				index = ruleText.indexOf("*/", i);
				if (index === -1) {
					throw new SyntaxError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			break;

		case "{":
			if (state === "selector") {
				styleRule.selectorText = buffer.trim();
				buffer = "";
				state = "name";
			}
			break;

		case ":":
			if (state === "name") {
				name = buffer.trim();
				buffer = "";
				state = "value";
			} else {
				buffer += character;
			}
			break;

		case "!":
			if (state === "value" && ruleText.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
				state = "name";
			} else {
				buffer += character;
			}
			break;

		case "}":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
			} else if (state === "name") {
				break;
			} else {
				buffer += character;
			}
			state = "selector";
			break;

		default:
			buffer += character;
			break;

		}
	}

	return styleRule;

};



/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
 */
CSSOM.MediaList = function MediaList(){
	this.length = 0;
};

CSSOM.MediaList.prototype = {

	constructor: CSSOM.MediaList,

	/**
	 * @return {string}
	 */
	get mediaText() {
		return Array.prototype.join.call(this, ", ");
	},

	/**
	 * @param {string} value
	 */
	set mediaText(value) {
		var values = value.split(",");
		var length = this.length = values.length;
		for (var i=0; i<length; i++) {
			this[i] = values[i].trim();
		}
	},

	/**
	 * @param {string} medium
	 */
	appendMedium: function(medium) {
		if (Array.prototype.indexOf.call(this, medium) === -1) {
			this[this.length] = medium;
			this.length++;
		}
	},

	/**
	 * @param {string} medium
	 */
	deleteMedium: function(medium) {
		var index = Array.prototype.indexOf.call(this, medium);
		if (index !== -1) {
			Array.prototype.splice.call(this, index, 1);
		}
	}

};



/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssmediarule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
CSSOM.CSSMediaRule = function CSSMediaRule() {
	CSSOM.CSSConditionRule.call(this);
	this.media = new CSSOM.MediaList();
};

CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
CSSOM.CSSMediaRule.prototype.type = 4;

// https://opensource.apple.com/source/WebCore/WebCore-7611.1.21.161.3/css/CSSMediaRule.cpp
Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
  "conditionText": {
    get: function() {
      return this.media.mediaText;
    },
    set: function(value) {
      this.media.mediaText = value;
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
      return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
    },
    configurable: true,
    enumerable: true
  }
});



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



/**
 * @constructor
 * @see https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface
 */
CSSOM.CSSSupportsRule = function CSSSupportsRule() {
  CSSOM.CSSConditionRule.call(this);
};

CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
CSSOM.CSSSupportsRule.prototype.type = 12;

Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];

    for (var i = 0, length = this.cssRules.length; i < length; i++) {
      cssTexts.push(this.cssRules[i].cssText);
    }

    return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
  }
});


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssimportrule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
 */
CSSOM.CSSImportRule = function CSSImportRule() {
	CSSOM.CSSRule.call(this);
	this.href = "";
	this.media = new CSSOM.MediaList();
	this.styleSheet = new CSSOM.CSSStyleSheet();
};

CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
CSSOM.CSSImportRule.prototype.type = 3;

Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
  get: function() {
    var mediaText = this.media.mediaText;
    return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
  },
  set: function(cssText) {
    var i = 0;

    /**
     * @import url(partial.css) screen, handheld;
     *        ||               |
     *        after-import     media
     *         |
     *         url
     */
    var state = '';

    var buffer = '';
    var index;
    for (var character; (character = cssText.charAt(i)); i++) {

      switch (character) {
        case ' ':
        case '\t':
        case '\r':
        case '\n':
        case '\f':
          if (state === 'after-import') {
            state = 'url';
          } else {
            buffer += character;
          }
          break;

        case '@':
          if (!state && cssText.indexOf('@import', i) === i) {
            state = 'after-import';
            i += 'import'.length;
            buffer = '';
          }
          break;

        case 'u':
          if (state === 'url' && cssText.indexOf('url(', i) === i) {
            index = cssText.indexOf(')', i + 1);
            if (index === -1) {
              throw i + ': ")" not found';
            }
            i += 'url('.length;
            var url = cssText.slice(i, index);
            if (url[0] === url[url.length - 1]) {
              if (url[0] === '"' || url[0] === "'") {
                url = url.slice(1, -1);
              }
            }
            this.href = url;
            i = index;
            state = 'media';
          }
          break;

        case '"':
          if (state === 'url') {
            index = cssText.indexOf('"', i + 1);
            if (!index) {
              throw i + ": '\"' not found";
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case "'":
          if (state === 'url') {
            index = cssText.indexOf("'", i + 1);
            if (!index) {
              throw i + ': "\'" not found';
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case ';':
          if (state === 'media') {
            if (buffer) {
              this.media.mediaText = buffer.trim();
            }
          }
          break;

        default:
          if (state === 'media') {
            buffer += character;
          }
          break;
      }
    }
  }
});



/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
 */
CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
	CSSOM.CSSRule.call(this);
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
CSSOM.CSSFontFaceRule.prototype.type = 5;
//FIXME
//CSSOM.CSSFontFaceRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSFontFaceRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSFontFaceRule.cpp
Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
  get: function() {
    return "@font-face {" + this.style.cssText + "}";
  }
});



/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM.CSSHostRule = function CSSHostRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
CSSOM.CSSHostRule.prototype.type = 1001;
//FIXME
//CSSOM.CSSHostRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSHostRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@host {" + cssTexts.join("") + "}";
	}
});



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



/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
 */
CSSOM.StyleSheet = function StyleSheet() {
	this.parentStyleSheet = null;
};



/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
CSSOM.CSSStyleSheet = function CSSStyleSheet() {
	CSSOM.StyleSheet.call(this);
	this.cssRules = [];
};


CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;


/**
 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
 *
 *   sheet = new Sheet("body {margin: 0}")
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *   sheet.insertRule("img {border: none}", 0)
 *   -> 0
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *
 * @param {string} rule
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
 */
CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	var cssRule = CSSOM.parse(rule).cssRules[0];
	cssRule.parentStyleSheet = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};


/**
 * Used to delete a rule from the style sheet.
 *
 *   sheet = new Sheet("img{border:none} body{margin:0}")
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *   sheet.deleteRule(0)
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the style sheet's rule list of the rule to remove.
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 */
CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
	if (index < 0 || index >= this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	this.cssRules.splice(index, 1);
};


/**
 * NON-STANDARD
 * @return {string} serialize stylesheet
 */
CSSOM.CSSStyleSheet.prototype.toString = function() {
	var result = "";
	var rules = this.cssRules;
	for (var i=0; i<rules.length; i++) {
		result += rules[i].cssText + "\n";
	}
	return result;
};



/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
 */
CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
	CSSOM.CSSRule.call(this);
	this.name = '';
	this.cssRules = [];
};

CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
CSSOM.CSSKeyframesRule.prototype.type = 7;
//FIXME
//CSSOM.CSSKeyframesRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframesRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframesRule.cpp
Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
      cssTexts.push("  " + this.cssRules[i].cssText);
    }
    return "@" + (this._vendorPrefix || '') + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
  }
});



/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
 */
CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
	CSSOM.CSSRule.call(this);
	this.keyText = '';
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
CSSOM.CSSKeyframeRule.prototype.type = 8;
//FIXME
//CSSOM.CSSKeyframeRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframeRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframeRule.cpp
Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
  get: function() {
    return this.keyText + " {" + this.style.cssText + "} ";
  }
});



/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.MatcherList = function MatcherList(){
    this.length = 0;
};

CSSOM.MatcherList.prototype = {

    constructor: CSSOM.MatcherList,

    /**
     * @return {string}
     */
    get matcherText() {
        return Array.prototype.join.call(this, ", ");
    },

    /**
     * @param {string} value
     */
    set matcherText(value) {
        // just a temporary solution, actually it may be wrong by just split the value with ',', because a url can include ','.
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i=0; i<length; i++) {
            this[i] = values[i].trim();
        }
    },

    /**
     * @param {string} matcher
     */
    appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
        }
    },

    /**
     * @param {string} matcher
     */
    deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }

};



/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.CSSDocumentRule = function CSSDocumentRule() {
    CSSOM.CSSRule.call(this);
    this.matcher = new CSSOM.MatcherList();
    this.cssRules = [];
};

CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
CSSOM.CSSDocumentRule.prototype.type = 10;
//FIXME
//CSSOM.CSSDocumentRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSDocumentRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
    }
    return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
  }
});



/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 *
 * TODO: add if needed
 */
CSSOM.CSSValue = function CSSValue() {
};

CSSOM.CSSValue.prototype = {
	constructor: CSSOM.CSSValue,

	// @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	set cssText(text) {
		var name = this._getConstructorName();

		throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
	},

	get cssText() {
		var name = this._getConstructorName();

		throw new Error('getter "cssText" of "' + name + '" is not implemented!');
	},

	_getConstructorName: function() {
		var s = this.constructor.toString(),
				c = s.match(/function\s([^\(]+)/),
				name = c[1];

		return name;
	}
};



/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
 *
 */
CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
	this._token = token;
	this._idx = idx;
};

CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;

/**
 * parse css expression() value
 *
 * @return {Object}
 *         - error:
 *         or
 *         - idx:
 *         - expression:
 *
 * Example:
 *
 * .selector {
 *		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
 * }
 */
CSSOM.CSSValueExpression.prototype.parse = function() {
	var token = this._token,
			idx = this._idx;

	var character = '',
			expression = '',
			error = '',
			info,
			paren = [];


	for (; ; ++idx) {
		character = token.charAt(idx);

		// end of token
		if (character === '') {
			error = 'css expression error: unfinished expression!';
			break;
		}

		switch(character) {
			case '(':
				paren.push(character);
				expression += character;
				break;

			case ')':
				paren.pop(character);
				expression += character;
				break;

			case '/':
				if ((info = this._parseJSComment(token, idx))) { // comment?
					if (info.error) {
						error = 'css expression error: unfinished comment in expression!';
					} else {
						idx = info.idx;
						// ignore the comment
					}
				} else if ((info = this._parseJSRexExp(token, idx))) { // regexp
					idx = info.idx;
					expression += info.text;
				} else { // other
					expression += character;
				}
				break;

			case "'":
			case '"':
				info = this._parseJSString(token, idx, character);
				if (info) { // string
					idx = info.idx;
					expression += info.text;
				} else {
					expression += character;
				}
				break;

			default:
				expression += character;
				break;
		}

		if (error) {
			break;
		}

		// end of expression
		if (paren.length === 0) {
			break;
		}
	}

	var ret;
	if (error) {
		ret = {
			error: error
		};
	} else {
		ret = {
			idx: idx,
			expression: expression
		};
	}

	return ret;
};


/**
 *
 * @return {Object|false}
 *          - idx:
 *          - text:
 *          or
 *          - error:
 *          or
 *          false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
	var nextChar = token.charAt(idx + 1),
			text;

	if (nextChar === '/' || nextChar === '*') {
		var startIdx = idx,
				endIdx,
				commentEndChar;

		if (nextChar === '/') { // line comment
			commentEndChar = '\n';
		} else if (nextChar === '*') { // block comment
			commentEndChar = '*/';
		}

		endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
		if (endIdx !== -1) {
			endIdx = endIdx + commentEndChar.length - 1;
			text = token.substring(idx, endIdx + 1);
			return {
				idx: endIdx,
				text: text
			};
		} else {
			var error = 'css expression error: unfinished comment in expression!';
			return {
				error: error
			};
		}
	} else {
		return false;
	}
};


/**
 *
 * @return {Object|false}
 *					- idx:
 *					- text:
 *					or 
 *					false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
	var endIdx = this._findMatchedIdx(token, idx, sep),
			text;

	if (endIdx === -1) {
		return false;
	} else {
		text = token.substring(idx, endIdx + sep.length);

		return {
			idx: endIdx,
			text: text
		};
	}
};


/**
 * parse regexp in css expression
 *
 * @return {Object|false}
 *				- idx:
 *				- regExp:
 *				or 
 *				false
 */

/*

all legal RegExp
 
/a/
(/a/)
[/a/]
[12, /a/]

!/a/

+/a/
-/a/
* /a/
/ /a/
%/a/

===/a/
!==/a/
==/a/
!=/a/
>/a/
>=/a/
</a/
<=/a/

&/a/
|/a/
^/a/
~/a/
<</a/
>>/a/
>>>/a/

&&/a/
||/a/
?/a/
=/a/
,/a/

		delete /a/
				in /a/
instanceof /a/
				new /a/
		typeof /a/
			void /a/

*/
CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
	var before = token.substring(0, idx).replace(/\s+$/, ""),
			legalRegx = [
				/^$/,
				/\($/,
				/\[$/,
				/\!$/,
				/\+$/,
				/\-$/,
				/\*$/,
				/\/\s+/,
				/\%$/,
				/\=$/,
				/\>$/,
				/<$/,
				/\&$/,
				/\|$/,
				/\^$/,
				/\~$/,
				/\?$/,
				/\,$/,
				/delete$/,
				/in$/,
				/instanceof$/,
				/new$/,
				/typeof$/,
				/void$/
			];

	var isLegal = legalRegx.some(function(reg) {
		return reg.test(before);
	});

	if (!isLegal) {
		return false;
	} else {
		var sep = '/';

		// same logic as string
		return this._parseJSString(token, idx, sep);
	}
};


/**
 *
 * find next sep(same line) index in `token`
 *
 * @return {Number}
 *
 */
CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
	var startIdx = idx,
			endIdx;

	var NOT_FOUND = -1;

	while(true) {
		endIdx = token.indexOf(sep, startIdx + 1);

		if (endIdx === -1) { // not found
			endIdx = NOT_FOUND;
			break;
		} else {
			var text = token.substring(idx + 1, endIdx),
					matched = text.match(/\\+$/);
			if (!matched || matched[0] % 2 === 0) { // not escaped
				break;
			} else {
				startIdx = endIdx;
			}
		}
	}

	// boundary must be in the same line(js sting or regexp)
	var nextNewLineIdx = token.indexOf('\n', idx + 1);
	if (nextNewLineIdx < endIdx) {
		endIdx = NOT_FOUND;
	}


	return endIdx;
};





/**
 * @constructor
 * @see https://drafts.csswg.org/css-cascade-5/#csslayerblockrule
 */
CSSOM.CSSLayerBlockRule = function CSSLayerBlockRule() {
  CSSOM.CSSGroupingRule.call(this);
  this.layerName = "";
  this.cssRules = [];
};

CSSOM.CSSLayerBlockRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSLayerBlockRule.prototype.constructor = CSSOM.CSSLayerBlockRule;
CSSOM.CSSLayerBlockRule.prototype.type = 18;

Object.defineProperties(CSSOM.CSSLayerBlockRule.prototype, {
  layerNameText: {
    get: function () {
      return this.layerName;
    },
    set: function (value) {
      this.layerName = value;
    },
    configurable: true,
    enumerable: true,
  },
  cssText: {
    get: function () {
      var cssTexts = [];
      for (var i = 0, length = this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@layer " + this.layerNameText + " {" + cssTexts.join("") + "}";
    },
    configurable: true,
    enumerable: true,
  },
});


/**
 * @param {string} token
 */
CSSOM.parse = function parse(token) {

	var i = 0;

	/**
		"before-selector" or
		"selector" or
		"atRule" or
		"atBlock" or
		"conditionBlock" or
		"before-name" or
		"name" or
		"before-value" or
		"value"
	*/
	var state = "before-selector";

	var index;
	var buffer = "";
	var valueParenthesisDepth = 0;

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true,
		"value-parenthesis": true,
		"atRule": true,
		"importRule-begin": true,
		"importRule": true,
		"atBlock": true,
		"containerBlock": true,
		"conditionBlock": true,
		'documentRule-begin': true,
		"layerBlock": true
	};

	var styleSheet = new CSSOM.CSSStyleSheet();

	// @type CSSStyleSheet|CSSMediaRule|CSSContainerRule|CSSSupportsRule|CSSFontFaceRule|CSSKeyframesRule|CSSDocumentRule
	var currentScope = styleSheet;

	// @type CSSMediaRule|CSSContainerRule|CSSSupportsRule|CSSKeyframesRule|CSSDocumentRule
	var parentRule;

	var ancestorRules = [];
	var hasAncestors = false;
	var prevScope;

	var name, priority="", styleRule, mediaRule, containerRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule, startingStyleRule, layerBlockRule;

	var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;

	var parseError = function(message) {
		var lines = token.substring(0, i).split('\n');
		var lineCount = lines.length;
		var charCount = lines.pop().length + 1;
		var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
		error.line = lineCount;
		/* jshint sub : true */
		error['char'] = charCount;
		error.styleSheet = styleSheet;
		throw error;
	};

	for (var character; (character = token.charAt(i)); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				buffer += character;
			}
			break;

		// String
		case '"':
			index = i + 1;
			do {
				index = token.indexOf('"', index) + 1;
				if (!index) {
					parseError('Unmatched "');
				}
			} while (token[index - 2] === '\\');
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
			}
			break;

		case "'":
			index = i + 1;
			do {
				index = token.indexOf("'", index) + 1;
				if (!index) {
					parseError("Unmatched '");
				}
			} while (token[index - 2] === '\\');
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
			}
			break;

		// Comment
		case "/":
			if (token.charAt(i + 1) === "*") {
				i += 2;
				index = token.indexOf("*/", i);
				if (index === -1) {
					parseError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			if (state === "importRule-begin") {
				buffer += " ";
				state = "importRule";
			}
			break;

		// At-rule
		case "@":
			if (token.indexOf("@-moz-document", i) === i) {
				state = "documentRule-begin";
				documentRule = new CSSOM.CSSDocumentRule();
				documentRule.__starts = i;
				i += "-moz-document".length;
				buffer = "";
				break;
			} else if (token.indexOf("@media", i) === i) {
				state = "atBlock";
				mediaRule = new CSSOM.CSSMediaRule();
				mediaRule.__starts = i;
				i += "media".length;
				buffer = "";
				break;
			} else if (token.indexOf("@container", i) === i) {
				state = "containerBlock";
				containerRule = new CSSOM.CSSContainerRule();
				containerRule.__starts = i;
				i += "container".length;
				buffer = "";
				break;
			} else if (token.indexOf("@layer", i) === i) {
				state = "layerBlock"
				layerBlockRule = new CSSOM.CSSLayerBlockRule();
				layerBlockRule.__starts = i;
				i += "layer".length;
				buffer = "";
				break;
			}  else if (token.indexOf("@supports", i) === i) {
				state = "conditionBlock";
				supportsRule = new CSSOM.CSSSupportsRule();
				supportsRule.__starts = i;
				i += "supports".length;
				buffer = "";
				break;
			} else if (token.indexOf("@host", i) === i) {
				state = "hostRule-begin";
				i += "host".length;
				hostRule = new CSSOM.CSSHostRule();
				hostRule.__starts = i;
				buffer = "";
				break;
			} else if (token.indexOf("@starting-style", i) === i) {
				state = "startingStyleRule-begin";
				i += "starting-style".length;
				startingStyleRule = new CSSOM.CSSStartingStyleRule();
				startingStyleRule.__starts = i;
				buffer = "";
				break;
			} else if (token.indexOf("@import", i) === i) {
				state = "importRule-begin";
				i += "import".length;
				buffer += "@import";
				break;
			} else if (token.indexOf("@font-face", i) === i) {
				state = "fontFaceRule-begin";
				i += "font-face".length;
				fontFaceRule = new CSSOM.CSSFontFaceRule();
				fontFaceRule.__starts = i;
				buffer = "";
				break;
			} else {
				atKeyframesRegExp.lastIndex = i;
				var matchKeyframes = atKeyframesRegExp.exec(token);
				if (matchKeyframes && matchKeyframes.index === i) {
					state = "keyframesRule-begin";
					keyframesRule = new CSSOM.CSSKeyframesRule();
					keyframesRule.__starts = i;
					keyframesRule._vendorPrefix = matchKeyframes[1]; // Will come out as undefined if no prefix was found
					i += matchKeyframes[0].length - 1;
					buffer = "";
					break;
				} else if (state === "selector") {
					state = "atRule";
				}
			}
			buffer += character;
			break;

		case "{":
			if (state === "selector" || state === "atRule") {
				styleRule.selectorText = buffer.trim();
				styleRule.style.__starts = i;
				buffer = "";
				state = "before-name";
			} else if (state === "atBlock") {
				mediaRule.media.mediaText = buffer.trim();

				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = mediaRule;
				mediaRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "containerBlock") {
				containerRule.containerText = buffer.trim();

				if (parentRule) {
					ancestorRules.push(parentRule);
				}
				currentScope = parentRule = containerRule;
				containerRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "conditionBlock") {
				supportsRule.conditionText = buffer.trim();

				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = supportsRule;
				supportsRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "layerBlock") {
				layerBlockRule.layerNameText = buffer.trim();

				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = layerBlockRule;
				layerBlockRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "hostRule-begin") {
				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = hostRule;
				hostRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "startingStyleRule-begin") {
				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = startingStyleRule;
				startingStyleRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";

			} else if (state === "fontFaceRule-begin") {
				if (parentRule) {
					fontFaceRule.parentRule = parentRule;
				}
				fontFaceRule.parentStyleSheet = styleSheet;
				styleRule = fontFaceRule;
				buffer = "";
				state = "before-name";
			} else if (state === "keyframesRule-begin") {
				keyframesRule.name = buffer.trim();
				if (parentRule) {
					ancestorRules.push(parentRule);
					keyframesRule.parentRule = parentRule;
				}
				keyframesRule.parentStyleSheet = styleSheet;
				currentScope = parentRule = keyframesRule;
				buffer = "";
				state = "keyframeRule-begin";
			} else if (state === "keyframeRule-begin") {
				styleRule = new CSSOM.CSSKeyframeRule();
				styleRule.keyText = buffer.trim();
				styleRule.__starts = i;
				buffer = "";
				state = "before-name";
			} else if (state === "documentRule-begin") {
				// FIXME: what if this '{' is in the url text of the match function?
				documentRule.matcher.matcherText = buffer.trim();
				if (parentRule) {
					ancestorRules.push(parentRule);
					documentRule.parentRule = parentRule;
				}
				currentScope = parentRule = documentRule;
				documentRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			}
			break;

		case ":":
			if (state === "name") {
				name = buffer.trim();
				buffer = "";
				state = "before-value";
			} else {
				buffer += character;
			}
			break;

		case "(":
			if (state === 'value') {
				// ie css expression mode
				if (buffer.trim() === 'expression') {
					var info = (new CSSOM.CSSValueExpression(token, i)).parse();

					if (info.error) {
						parseError(info.error);
					} else {
						buffer += info.expression;
						i = info.idx;
					}
				} else {
					state = 'value-parenthesis';
					//always ensure this is reset to 1 on transition
					//from value to value-parenthesis
					valueParenthesisDepth = 1;
					buffer += character;
				}
			} else if (state === 'value-parenthesis') {
				valueParenthesisDepth++;
				buffer += character;
			} else {
				buffer += character;
			}
			break;

		case ")":
			if (state === 'value-parenthesis') {
				valueParenthesisDepth--;
				if (valueParenthesisDepth === 0) state = 'value';
			}
			buffer += character;
			break;

		case "!":
			if (state === "value" && token.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			switch (state) {
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
					state = "before-name";
					break;
				case "atRule":
					buffer = "";
					state = "before-selector";
					break;
				case "importRule":
					importRule = new CSSOM.CSSImportRule();
					importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
					importRule.cssText = buffer + character;
					styleSheet.cssRules.push(importRule);
					buffer = "";
					state = "before-selector";
					break;
				default:
					buffer += character;
					break;
			}
			break;

		case "}":
			switch (state) {
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					/* falls through */
				case "before-name":
				case "name":
					styleRule.__ends = i + 1;
					if (parentRule) {
						styleRule.parentRule = parentRule;
					}
					styleRule.parentStyleSheet = styleSheet;
					currentScope.cssRules.push(styleRule);
					buffer = "";
					if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
						state = "keyframeRule-begin";
					} else {
						state = "before-selector";
					}
					break;
				case "keyframeRule-begin":
				case "before-selector":
				case "selector":
					// End of media/supports/document rule.
					if (!parentRule) {
						parseError("Unexpected }");
					}

					// Handle rules nested in @media or @supports
					hasAncestors = ancestorRules.length > 0;

					while (ancestorRules.length > 0) {
						parentRule = ancestorRules.pop();

						if (
							parentRule.constructor.name === "CSSMediaRule"
							|| parentRule.constructor.name === "CSSSupportsRule"
							|| parentRule.constructor.name === "CSSContainerRule"
							|| parentRule.constructor.name === "CSSLayerBlockRule"
							|| parentRule.constructor.name === "CSSStartingStyleRule"
						) {
							prevScope = currentScope;
							currentScope = parentRule;
							currentScope.cssRules.push(prevScope);
							break;
						}

						if (ancestorRules.length === 0) {
							hasAncestors = false;
						}
					}
					
					if (!hasAncestors) {
						currentScope.__ends = i + 1;
						styleSheet.cssRules.push(currentScope);
						currentScope = styleSheet;
						parentRule = null;
					}

					buffer = "";
					state = "before-selector";
					break;
			}
			break;

		default:
			switch (state) {
				case "before-selector":
					state = "selector";
					styleRule = new CSSOM.CSSStyleRule();
					styleRule.__starts = i;
					break;
				case "before-name":
					state = "name";
					break;
				case "before-value":
					state = "value";
					break;
				case "importRule-begin":
					state = "importRule";
					break;
			}
			buffer += character;
			break;
		}
	}

	return styleSheet;
};



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


