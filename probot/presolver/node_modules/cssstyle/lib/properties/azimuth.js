'use strict';

var parsers = require('../parsers');

module.exports.definition = {
    set: function (v) {
        var valueType = parsers.valueType(v);
        if (valueType === parsers.TYPES.ANGLE) {
            return this._setProperty('azimuth', parsers.parseAngle(v));
        }
        if (valueType === parsers.TYPES.KEYWORD) {
            var keywords = v.toLowerCase().trim().split(/\s+/);
            var hasBehind = false;
            if (keywords.length > 2) {
                return;
            }
            var behindIndex = keywords.indexOf('behind');
            hasBehind = (behindIndex !== -1);

            if (keywords.length === 2) {
                if (!hasBehind) {
                    return;
                }
                keywords.splice(behindIndex, 1);
            }
            if (keywords[0] === 'leftwards' || keywords[0] === 'rightwards') {
                if (hasBehind) {
                    return;
                }
                return this._setProperty('azimuth', keywords[0]);
            }
            if (keywords[0] === 'behind') {
                return this._setProperty('azimuth', '180deg');
            }
            var deg;
            switch (keywords[0]) {
            case 'left-side':
                return this._setProperty('azimuth', '270deg');
            case 'far-left':
                return this._setProperty('azimuth', (hasBehind ? 240 : 300) + 'deg');
            case 'left':
                return this._setProperty('azimuth', (hasBehind ? 220 : 320) + 'deg');
            case 'center-left':
                return this._setProperty('azimuth', (hasBehind ? 200 : 340) + 'deg');
            case 'center':
                return this._setProperty('azimuth', (hasBehind ? 180 : 0) + 'deg');
            case 'center-right':
                return this._setProperty('azimuth', (hasBehind ? 160 : 20) + 'deg');
            case 'right':
                return this._setProperty('azimuth', (hasBehind ? 140 : 40) + 'deg');
            case 'far-right':
                return this._setProperty('azimuth', (hasBehind ? 120 : 60) + 'deg');
            case 'right-side':
                return this._setProperty('azimuth', '90deg');
            default:
                return;
            }
        }
    },
    get: function () {
        return this.getPropertyValue('azimuth');
    },
    enumerable: true,
    configurable: true
};
