"use strict";

const DOMException = require("../generated/DOMException");

const alignmentStringsByIndex = [
  "unknown", "none",
  "xMinYMin", "xMidYMin", "xMaxYMin",
  "xMinYMid", "xMidYMid", "xMaxYMid",
  "xMinYMax", "xMidYMax", "xMaxYMax"
];
const alignmentIndicesByString = {
  __proto__: null,
  unknown: 0,
  none: 1,
  xMinYMin: 2,
  xMidYMin: 3,
  xMaxYMin: 4,
  xMinYMid: 5,
  xMidYMid: 6,
  xMaxYMid: 7,
  xMinYMax: 8,
  xMidYMax: 9,
  xMaxYMax: 10
};

const meetOrSliceStringsByIndex = ["unknown", "meet", "slice"];
const meetOrSliceIndicesByString = {
  __proto__: null,
  unknown: 0,
  meet: 1,
  slice: 2
};

// https://svgwg.org/svg2-draft/coords.html#PreserveAspectRatioAttribute
const preserveAspectRatioRegExp = /^(none|x(?:Min|Mid|Max)Y(?:Min|Mid|Max))(?: +(meet|slice))?$/;

class SVGPreserveAspectRatioImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;
    this._element = privateData.element;
    this._readOnly = Boolean(privateData.readOnly);
  }

  _parse() {
    const attrValue = this._element.getAttributeNS(null, "preserveAspectRatio");
    if (attrValue) {
      const value = preserveAspectRatioRegExp.exec(attrValue);
      if (value) {
        return {
          align: value[1],
          meetOrSlice: value[2] || "meet"
        };
      }
    }
    return {
      align: "xMidYMid",
      meetOrSlice: "meet"
    };
  }

  get align() {
    const { align } = this._parse();
    return alignmentIndicesByString[align];
  }

  set align(value) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, [
        "Attempting to modify a read-only SVGPreserveAspectRatio",
        "NoModificationAllowedError"
      ]);
    }
    const string = alignmentStringsByIndex[value];
    if (string === "unknown" || string === undefined) {
      throw new TypeError("Invalid alignment");
    }
    this._element.setAttributeNS(null, "preserveAspectRatio", `${string} ${this._parse().meetOrSlice}`);
  }

  get meetOrSlice() {
    const { meetOrSlice } = this._parse();
    return meetOrSliceIndicesByString[meetOrSlice];
  }

  set meetOrSlice(value) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, [
        "Attempting to modify a read-only SVGPreserveAspectRatio",
        "NoModificationAllowedError"
      ]);
    }
    const string = meetOrSliceStringsByIndex[value];
    if (string === "unknown" || string === undefined) {
      throw new TypeError("Invalid meet-or-slice value");
    }
    this._element.setAttributeNS(null, "preserveAspectRatio", `${this._parse().align} ${string}`);
  }
}

exports.implementation = SVGPreserveAspectRatioImpl;
