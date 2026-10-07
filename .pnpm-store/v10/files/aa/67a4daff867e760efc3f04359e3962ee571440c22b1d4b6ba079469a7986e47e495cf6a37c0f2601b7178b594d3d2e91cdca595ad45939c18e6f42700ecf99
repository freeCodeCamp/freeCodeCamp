"use strict";

const conversions = require("webidl-conversions");

const idlUtils = require("../generated/utils.js");
const ValidityState = require("../generated/ValidityState");
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const NODE_TYPE = require("../node-type");
const HTMLCollection = require("../generated/HTMLCollection");
const HTMLOptionsCollection = require("../generated/HTMLOptionsCollection");
const { domSymbolTree } = require("../helpers/internal-constants");
const { getLabelsForLabelable, formOwner, isDisabled } = require("../helpers/form-controls");
const { parseNonNegativeInteger } = require("../helpers/strings");

class HTMLSelectElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._options = HTMLOptionsCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => {
        // Customized domSymbolTree.treeToArray() clone.
        const array = [];
        for (const child of domSymbolTree.childrenIterator(this)) {
          if (child._localName === "option") {
            array.push(child);
          } else if (child._localName === "optgroup") {
            for (const childOfGroup of domSymbolTree.childrenIterator(child)) {
              if (childOfGroup._localName === "option") {
                array.push(childOfGroup);
              }
            }
          }
        }
        return array;
      }
    });
    this._selectedOptions = null; // lazy

    this._customValidityErrorMessage = "";

    this._labels = null;
  }

  _formReset() {
    for (const option of this.options) {
      option._selectedness = option.hasAttributeNS(null, "selected");
      option._dirtyness = false;
    }
    this._askedForAReset();
  }

  _askedForAReset() {
    if (this.hasAttributeNS(null, "multiple")) {
      return;
    }

    const selected = this.options.filter(opt => opt._selectedness);

    const size = this._displaySize;
    if (size === 1 && !selected.length) {
      // select the first option that is not disabled
      for (const option of this.options) {
        let disabled = option.hasAttributeNS(null, "disabled");
        const parentNode = domSymbolTree.parent(option);
        if (parentNode &&
          parentNode.nodeName.toUpperCase() === "OPTGROUP" &&
          parentNode.hasAttributeNS(null, "disabled")) {
          disabled = true;
        }

        if (!disabled) {
          // (do not set dirty)
          option._selectedness = true;
          break;
        }
      }
    } else if (selected.length >= 2) {
      // select the last selected option
      selected.forEach((option, index) => {
        option._selectedness = index === selected.length - 1;
      });
    }
  }

  _descendantAdded(parent, child) {
    if (child.nodeType === NODE_TYPE.ELEMENT_NODE) {
      this._askedForAReset();
    }

    super._descendantAdded(parent, child);
  }

  _descendantRemoved(parent, child) {
    if (child.nodeType === NODE_TYPE.ELEMENT_NODE) {
      this._askedForAReset();
    }

    super._descendantRemoved(parent, child);
  }

  _attrModified(name, value, oldValue) {
    if (name === "multiple" || name === "size") {
      this._askedForAReset();
    }
    super._attrModified(name, value, oldValue);
  }

  get _displaySize() {
    if (this.hasAttributeNS(null, "size")) {
      const size = parseNonNegativeInteger(this.getAttributeNS(null, "size"));
      if (size !== null) {
        return size;
      }
    }
    return this.hasAttributeNS(null, "multiple") ? 4 : 1;
  }

  get _mutable() {
    return !isDisabled(this);
  }

  get options() {
    return this._options;
  }

  get selectedOptions() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => domSymbolTree.treeToArray(this, {
        filter: node => node._localName === "option" && node._selectedness === true
      })
    });
  }

  get selectedIndex() {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options.item(i)._selectedness) {
        return i;
      }
    }
    return -1;
  }

  set selectedIndex(index) {
    for (let i = 0; i < this.options.length; i++) {
      this.options.item(i)._selectedness = false;
    }

    const selectedOption = this.options.item(index);
    if (selectedOption) {
      selectedOption._selectedness = true;
      selectedOption._dirtyness = true;
    }
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get value() {
    for (const option of this.options) {
      if (option._selectedness) {
        return option.value;
      }
    }

    return "";
  }

  set value(val) {
    for (const option of this.options) {
      if (option.value === val) {
        option._selectedness = true;
        option._dirtyness = true;
      } else {
        option._selectedness = false;
      }

      option._modified();
    }
  }

  get form() {
    return formOwner(this);
  }

  get type() {
    return this.hasAttributeNS(null, "multiple") ? "select-multiple" : "select-one";
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this.options[idlUtils.supportedPropertyIndices];
  }

  get length() {
    return this.options.length;
  }

  set length(value) {
    this.options.length = value;
  }

  item(index) {
    return this.options.item(index);
  }

  namedItem(name) {
    return this.options.namedItem(name);
  }

  [idlUtils.indexedSetNew](index, value) {
    return this.options[idlUtils.indexedSetNew](index, value);
  }

  [idlUtils.indexedSetExisting](index, value) {
    return this.options[idlUtils.indexedSetExisting](index, value);
  }

  add(opt, before) {
    this.options.add(opt, before);
  }

  remove(index) {
    if (arguments.length > 0) {
      index = conversions.long(index, {
        context: "Failed to execute 'remove' on 'HTMLSelectElement': parameter 1"
      });
      this.options.remove(index);
    } else {
      super.remove();
    }
  }

  _barredFromConstraintValidationSpecialization() {
    return this.hasAttributeNS(null, "readonly");
  }

  // Constraint validation: If the element has its required attribute specified,
  // and either none of the option elements in the select element's list of options
  // have their selectedness set to true, or the only option element in the select
  // element's list of options with its selectedness set to true is the placeholder
  // label option, then the element is suffering from being missing.
  get validity() {
    if (!this._validity) {
      const state = {
        valueMissing: () => {
          if (!this.hasAttributeNS(null, "required")) {
            return false;
          }
          const selectedOptionIndex = this.selectedIndex;
          return selectedOptionIndex < 0 || (selectedOptionIndex === 0 && this._hasPlaceholderOption);
        }
      };

      this._validity = ValidityState.createImpl(this._globalObject, [], {
        element: this,
        state
      });
    }
    return this._validity;
  }

  // If a select element has a required attribute specified, does not have a multiple attribute
  // specified, and has a display size of 1; and if the value of the first option element in the
  // select element's list of options (if any) is the empty string, and that option element's parent
  // node is the select element(and not an optgroup element), then that option is the select
  // element's placeholder label option.
  // https://html.spec.whatwg.org/multipage/form-elements.html#placeholder-label-option
  get _hasPlaceholderOption() {
    return this.hasAttributeNS(null, "required") && !this.hasAttributeNS(null, "multiple") &&
      this._displaySize === 1 && this.options.length > 0 && this.options.item(0).value === "" &&
      this.options.item(0).parentNode._localName !== "optgroup";
  }
}

mixin(HTMLSelectElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLSelectElementImpl
};
