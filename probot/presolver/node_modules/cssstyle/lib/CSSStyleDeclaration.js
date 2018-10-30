/*********************************************************************
 * This is a fork from the CSS Style Declaration part of
 * https://github.com/NV/CSSOM
 ********************************************************************/
"use strict";
var CSSOM = require('cssom');
var validProperties = require('./validProperties');

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 */
var CSSStyleDeclaration = function CSSStyleDeclaration(onChangeCallback) {
    this._values = {};
    this._importants = {};
    this._length = 0;
    this._onChange = onChangeCallback || function () { return; };
};
CSSStyleDeclaration.prototype = {
    constructor: CSSStyleDeclaration,

    /**
     *
     * @param {string} name
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
     * @return {string} the value of the property if it has been explicitly set for this declaration block.
     * Returns the empty string if the property has not been set.
     */
    getPropertyValue: function (name) {
        if (!this._values.hasOwnProperty(name)) {
            return "";
        }
        return this._values[name].toString();
    },

    /**
     *
     * @param {string} name
     * @param {string} value
     * @param {string} [priority=null] "important" or null
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
     */
    setProperty: function (name, value, priority) {
        if (value === undefined) {
            return;
        }
        if (value === null || value === '') {
            this.removeProperty(name);
            return;
        }
        var lowercaseName = name.toLowerCase();
        if (!validProperties.has(lowercaseName)) {
            return;
        }

        this[lowercaseName] = value;
        this._importants[lowercaseName] = priority;
    },
    _setProperty: function (name, value, priority) {
        if (value === undefined) {
            return;
        }
        if (value === null || value === '') {
            this.removeProperty(name);
            return;
        }
        if (this._values[name]) {
            // Property already exist. Overwrite it.
            var index = Array.prototype.indexOf.call(this, name);
            if (index < 0) {
                this[this._length] = name;
                this._length++;
            }
        } else {
            // New property.
            this[this._length] = name;
            this._length++;
        }
        this._values[name] = value;
        this._importants[name] = priority;
        this._onChange(this.cssText);
    },

    /**
     *
     * @param {string} name
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
     * @return {string} the value of the property if it has been explicitly set for this declaration block.
     * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
     */
    removeProperty: function (name) {
        if (!this._values.hasOwnProperty(name)) {
            return "";
        }

        var prevValue = this._values[name];
        delete this._values[name];
        delete this._importants[name];

        var index = Array.prototype.indexOf.call(this, name);
        if (index < 0) {
            return prevValue;
        }

        // That's what WebKit and Opera do
        Array.prototype.splice.call(this, index, 1);

        // That's what Firefox does
        //this[index] = ""

        this._onChange(this.cssText);
        return prevValue;
    },


    /**
     *
     * @param {String} name
     */
    getPropertyPriority: function (name) {
        return this._importants[name] || "";
    },


    getPropertyCSSValue: function () {
        //FIXME
        return;
    },

    /**
     *   element.style.overflow = "auto"
     *   element.style.getPropertyShorthand("overflow-x")
     *   -> "overflow"
     */
    getPropertyShorthand: function () {
        //FIXME
        return;
    },

    isPropertyImplicit: function () {
        //FIXME
        return;
    },

    /**
     *   http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-item
     */
    item: function (index) {
        index = parseInt(index, 10);
        if (index < 0 || index >= this._length) {
            return '';
        }
        return this[index];
    }
};

Object.defineProperties(CSSStyleDeclaration.prototype, {
    cssText: {
        get: function () {
            var properties = [];
            var i;
            var name;
            var value;
            var priority;
            for (i = 0; i < this._length; i++) {
                name = this[i];
                value = this.getPropertyValue(name);
                priority = this.getPropertyPriority(name);
                if (priority !== '') {
                    priority = " !" + priority;
                }
                properties.push([name, ': ', value, priority, ';'].join(''));
            }
            return properties.join(' ');
        },
        set: function (value) {
            var i;
            this._values = {};
            Array.prototype.splice.call(this, 0, this._length);
            this._importants = {};
            var dummyRule;
            try {
                dummyRule = CSSOM.parse('#bogus{' + value + '}').cssRules[0].style;
            } catch (err) {
                // malformed css, just return
                return;
            }
            var rule_length = dummyRule.length;
            var name;
            for (i = 0; i < rule_length; ++i) {
                name = dummyRule[i];
                this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
            }
            this._onChange(this.cssText);
        },
        enumerable: true,
        configurable: true
    },
    parentRule: {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    },
    length: {
        get: function () { return this._length; },
        /**
         * This deletes indices if the new length is less then the current
         * length. If the new length is more, it does nothing, the new indices
         * will be undefined until set.
         **/
        set: function (value) {
            var i;
            for (i = value; i < this._length; i++) {
                delete this[i];
            }
            this._length = value;
        },
        enumerable: true,
        configurable: true
    },
    'float': {
        get: function () { return this.cssFloat; },
        set: function (value) {
            this.cssFloat = value;
        },
        enumerable: true,
        configurable: true
    }
});

require('./properties')(CSSStyleDeclaration.prototype);

exports.CSSStyleDeclaration = CSSStyleDeclaration;
