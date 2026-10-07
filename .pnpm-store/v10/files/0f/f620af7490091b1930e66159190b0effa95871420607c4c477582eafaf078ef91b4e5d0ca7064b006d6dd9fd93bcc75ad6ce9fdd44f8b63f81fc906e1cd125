"use strict";

const HTMLCollectionImpl = require("./HTMLCollection-impl").implementation;
const RadioNodeList = require("../generated/RadioNodeList");

exports.implementation = class HTMLFormControlsCollectionImpl extends HTMLCollectionImpl {
  namedItem(name) {
    if (name === "") {
      return null;
    }

    this._update();

    const nodeList = RadioNodeList.createImpl(this._globalObject, [], {
      element: this,
      query: () => this._list.filter(
        e => e.getAttributeNS(null, "id") === name || e.getAttributeNS(null, "name") === name
      )
    });

    switch (nodeList.length) {
      case 0: {
        return null;
      }
      case 1: {
        return nodeList.item(0);
      }
      default: {
        return nodeList;
      }
    }
  }
};
