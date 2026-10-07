"use strict";
const idlUtils = require("../generated/utils");
const { closest } = require("../helpers/traversal");
const { isDisabled, isSubmittable, isButton } = require("../helpers/form-controls");
const Blob = require("../generated/Blob.js");
const File = require("../generated/File.js");
const conversions = require("webidl-conversions");

exports.implementation = class FormDataImpl {
  constructor(globalObject, args) {
    this._globalObject = globalObject;
    this._entries = [];

    if (args[0] !== undefined) {
      this._entries = constructTheEntryList(args[0]);
    }
  }

  append(name, value, filename) {
    const entry = createAnEntry(name, value, filename);
    this._entries.push(entry);
  }

  delete(name) {
    this._entries = this._entries.filter(entry => entry.name !== name);
  }

  get(name) {
    const foundEntry = this._entries.find(entry => entry.name === name);
    return foundEntry !== undefined ? idlUtils.tryWrapperForImpl(foundEntry.value) : null;
  }

  getAll(name) {
    return this._entries.filter(entry => entry.name === name).map(entry => idlUtils.tryWrapperForImpl(entry.value));
  }

  has(name) {
    return this._entries.findIndex(entry => entry.name === name) !== -1;
  }

  set(name, value, filename) {
    const entry = createAnEntry(name, value, filename);

    const foundIndex = this._entries.findIndex(e => e.name === name);
    if (foundIndex !== -1) {
      this._entries[foundIndex] = entry;
      this._entries = this._entries.filter((e, i) => e.name !== name || i === foundIndex);
    } else {
      this._entries.push(entry);
    }
  }

  * [Symbol.iterator]() {
    for (const entry of this._entries) {
      yield [entry.name, idlUtils.tryWrapperForImpl(entry.value)];
    }
  }
};

function createAnEntry(name, value, filename) {
  const entry = { name };

  // https://github.com/whatwg/xhr/issues/75

  if (Blob.isImpl(value) && !File.isImpl(value)) {
    const oldValue = value;
    value = File.createImpl(value._globalObject, [
      [],
      "blob",
      { type: oldValue.type }
    ]);
    // "representing the same bytes"
    value._buffer = oldValue._buffer;
  }

  if (File.isImpl(value) && filename !== undefined) {
    const oldValue = value;
    value = File.createImpl(value._globalObject, [
      [],
      filename,
      // spec makes no mention of `lastModified`; assume it is inherited
      // (Chrome's behavior)
      { type: oldValue.type, lastModified: oldValue.lastModified }
    ]);
    // "representing the same bytes"
    value._buffer = oldValue._buffer;
  }

  entry.value = value;

  return entry;
}

function constructTheEntryList(form, submitter) {
  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#constructing-the-form-data-set
  // TODO: handle encoding
  // TODO: handling "constructing entry list"

  const controls = form.elements.filter(isSubmittable); // submittable is a subset of listed
  const entryList = [];

  for (const field of controls) {
    if (closest(field, "datalist") !== null) {
      continue;
    }
    if (isDisabled(field)) {
      continue;
    }
    if (isButton(field) && field !== submitter) {
      continue;
    }
    if (field.type === "checkbox" && field._checkedness === false) {
      continue;
    }
    if (field.type === "radio" && field._checkedness === false) {
      continue;
    }
    if (field.localName === "object") { // in jsdom, no objects are "using a plugin"
      continue;
    }

    // TODO: Handle <input type="image">
    // TODO: handle form-associated custom elements.

    const name = field.getAttributeNS(null, "name");
    if (name === null || name === "") {
      continue;
    }

    if (field.localName === "select") {
      for (const option of field.options) {
        if (option._selectedness === true && !isDisabled(field)) {
          appendAnEntry(entryList, name, option._getValue());
        }
      }
    } else if (field.localName === "input" && (field.type === "checkbox" || field.type === "radio")) {
      const value = field.hasAttributeNS(null, "value") ? field.getAttributeNS(null, "value") : "on";
      appendAnEntry(entryList, name, value);
    } else if (field.type === "file") {
      if (field.files.length === 0) {
        const value = File.createImpl(form._globalObject, [[], "", { type: "application/octet-stream" }]);
        appendAnEntry(entryList, name, value);
      } else {
        for (let i = 0; i < field.files.length; ++i) {
          appendAnEntry(entryList, name, field.files.item(i));
        }
      }
    } else {
      appendAnEntry(entryList, name, field._getValue());
    }

    const dirname = field.getAttributeNS(null, "dirname");
    if (dirname !== null && dirname !== "") {
      const dir = "ltr"; // jsdom does not (yet?) implement actual directionality
      appendAnEntry(entryList, dirname, dir);
    }
  }

  // TODO: formdata event

  return entryList;
}

function appendAnEntry(entryList, name, value) {
  name = conversions.USVString(name);
  if (!File.isImpl(value)) {
    value = conversions.USVString(value);
  }
  const entry = createAnEntry(name, value);
  entryList.push(entry);
}
