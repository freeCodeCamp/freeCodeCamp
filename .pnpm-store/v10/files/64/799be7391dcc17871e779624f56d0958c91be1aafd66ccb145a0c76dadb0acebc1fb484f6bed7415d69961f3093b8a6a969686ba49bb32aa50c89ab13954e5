"use strict";

const parsers = require("../parsers");
const fontStyle = require("./fontStyle");
const fontVariant = require("./fontVariant");
const fontWeight = require("./fontWeight");
const fontSize = require("./fontSize");
const lineHeight = require("./lineHeight");
const fontFamily = require("./fontFamily");

const shorthandFor = new Map([
  ["font-style", fontStyle],
  ["font-variant", fontVariant],
  ["font-weight", fontWeight],
  ["font-size", fontSize],
  ["line-height", lineHeight],
  ["font-family", fontFamily]
]);

module.exports.parse = function parse(v) {
  const keywords = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];
  const key = parsers.parseKeyword(v, keywords);
  if (key) {
    return key;
  }
  const [fontBlock, ...families] = parsers.splitValue(v, {
    delimiter: ","
  });
  const [fontBlockA, fontBlockB] = parsers.splitValue(fontBlock, {
    delimiter: "/"
  });
  const font = {
    "font-style": "normal",
    "font-variant": "normal",
    "font-weight": "normal"
  };
  const fontFamilies = new Set();
  if (fontBlockB) {
    const [lineB, ...familiesB] = fontBlockB.trim().split(" ");
    if (!lineB || !lineHeight.isValid(lineB) || !familiesB.length) {
      return;
    }
    const lineHeightB = lineHeight.parse(lineB);
    const familyB = familiesB.join(" ");
    if (fontFamily.isValid(familyB)) {
      fontFamilies.add(fontFamily.parse(familyB));
    } else {
      return;
    }
    const parts = parsers.splitValue(fontBlockA.trim());
    const properties = ["font-style", "font-variant", "font-weight", "font-size"];
    for (const part of parts) {
      if (part === "normal") {
        continue;
      } else {
        for (const property of properties) {
          switch (property) {
            case "font-style":
            case "font-variant":
            case "font-weight":
            case "font-size": {
              const value = shorthandFor.get(property);
              if (value.isValid(part)) {
                font[property] = value.parse(part);
              }
              break;
            }
            default:
          }
        }
      }
    }
    if (Object.hasOwn(font, "font-size")) {
      font["line-height"] = lineHeightB;
    } else {
      return;
    }
  } else {
    // FIXME: Switch to toReversed() when we can drop Node.js 18 support.
    const revParts = [...parsers.splitValue(fontBlockA.trim())].reverse();
    const revFontFamily = [];
    const properties = ["font-style", "font-variant", "font-weight", "line-height"];
    font["font-style"] = "normal";
    font["font-variant"] = "normal";
    font["font-weight"] = "normal";
    font["line-height"] = "normal";
    let fontSizeA;
    for (const part of revParts) {
      if (fontSizeA) {
        if (part === "normal") {
          continue;
        } else {
          for (const property of properties) {
            switch (property) {
              case "font-style":
              case "font-variant":
              case "font-weight":
              case "line-height": {
                const value = shorthandFor.get(property);
                if (value.isValid(part)) {
                  font[property] = value.parse(part);
                }
                break;
              }
              default:
            }
          }
        }
      } else if (fontSize.isValid(part)) {
        fontSizeA = fontSize.parse(part);
      } else if (fontFamily.isValid(part)) {
        revFontFamily.push(part);
      } else {
        return;
      }
    }
    const family = revFontFamily.reverse().join(" ");
    if (fontSizeA && fontFamily.isValid(family)) {
      font["font-size"] = fontSizeA;
      fontFamilies.add(fontFamily.parse(family));
    } else {
      return;
    }
  }
  for (const family of families) {
    if (fontFamily.isValid(family)) {
      fontFamilies.add(fontFamily.parse(family));
    } else {
      return;
    }
  }
  font["font-family"] = [...fontFamilies].join(", ");
  return font;
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (v === "" || parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("font", v);
    } else {
      const obj = module.exports.parse(v);
      if (!obj) {
        return;
      }
      const str = new Set();
      for (const [key] of shorthandFor) {
        const val = obj[key];
        if (typeof val === "string") {
          this._setProperty(key, val);
          if (val && val !== "normal" && !str.has(val)) {
            if (key === "line-height") {
              str.add(`/ ${val}`);
            } else {
              str.add(val);
            }
          }
        }
      }
      this._setProperty("font", [...str].join(" "));
    }
  },
  get() {
    const val = this.getPropertyValue("font");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    const str = new Set();
    for (const [key] of shorthandFor) {
      const v = this.getPropertyValue(key);
      if (parsers.hasVarFunc(v)) {
        return "";
      }
      if (v && v !== "normal" && !str.has(v)) {
        if (key === "line-height") {
          str.add(`/ ${v}`);
        } else {
          str.add(`${v}`);
        }
      }
    }
    return [...str].join(" ");
  },
  enumerable: true,
  configurable: true
};
