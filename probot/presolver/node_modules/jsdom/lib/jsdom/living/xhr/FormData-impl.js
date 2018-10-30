"use strict";
const idlUtils = require("../generated/utils");
const { closest } = require("../helpers/traversal");
const { isDisabled, isSubmittable, isButton, normalizeToCRLF } = require("../helpers/form-controls");
const Blob = require("../generated/Blob.js");
const File = require("../generated/File.js");
const conversions = require("webidl-conversions");

exports.implementation = class FormDataImpl {
  constructor(args) {
    this._entries = [];

    if (args[0] !== undefined) {
      this._entries = constructTheFormDataSet(args[0]);
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
    return foundEntry !== undefined ? foundEntry.value : null;
  }

  getAll(name) {
    return this._entries.filter(entry => entry.name === name).map(entry => entry.value);
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
    value = File.createImpl([
      [],
      "blob",
      { type: oldValue.type }
    ]);
    // "representing the same bytes"
    value._buffer = oldValue._buffer;
  }

  if (File.isImpl(value) && filename !== undefined) {
    const oldValue = value;
    value = File.createImpl([
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

function constructTheFormDataSet(form, submitter) {
  // https://html.spec.whatwg.org/multipage/forms.html#constructing-form-data-set

  const controls = form.elements.filter(isSubmittable); // submittable is a subset of listed
  const formDataSet = [];

  for (const fieldWrapper of controls) {
    const field = fieldWrapper;

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
    if (field.type !== "image" && (!field.hasAttribute("name") || field.getAttribute("name") === "")) {
      continue;
    }
    if (field.localName === "object") { // in jsdom, no objects are "using a plugin"
      continue;
    }

    const { type } = field;

    // Omit special processing of <input type="image"> since so far we don't actually ever pass submitter

    const nameAttr = field.getAttribute("name");
    const name = nameAttr === null ? "" : nameAttr;

    if (field.localName === "select") {
      for (const option of field.options) {
        if (option._selectedness === true && !isDisabled(field)) {
          formDataSet.push({ name, value: option.value, type });
        }
      }
    } else if (field.localName === "input" && (type === "checkbox" || type === "radio")) {
      const value = field.hasAttribute("value") ? field.getAttribute("value") : "on";
      formDataSet.push({ name, value, type });
    } else if (type === "file") {
      for (let i = 0; i < field.files.length; ++i) {
        formDataSet.push({ name, value: field.files.item(i), type });
      }

      if (field.files.length === 0) {
        formDataSet.push({ name, value: "", type: "application/octet-stream" });
      }
    } /* skip plugins */ else {
      formDataSet.push({ name, value: field._getValue(), type });
    }

    const dirname = field.getAttribute("dirname");
    if (dirname !== null && dirname !== "") {
      const dir = "ltr"; // jsdom does not (yet?) implement actual directionality
      formDataSet.push({ name: dirname, value: dir, type: "direction" });
    }
  }

  for (const entry of formDataSet) {
    entry.name = conversions.USVString(normalizeToCRLF(entry.name));

    if (entry.type !== "file" && entry.type !== "textarea") {
      entry.value = normalizeToCRLF(entry.value);
    }

    if (entry.type !== "file") {
      entry.value = conversions.USVString(entry.value);
    }
  }

  return formDataSet;
}
