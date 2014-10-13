/*!
 * Firepad is an open-source, collaborative code and text editor. It was designed
 * to be embedded inside larger applications. Since it uses Firebase as a backend,
 * it requires no server-side code and can be added to any web app simply by
 * including a couple JavaScript files.
 *
 * Firepad 1.0.0
 * http://www.firepad.io/
 * License: MIT
 * Copyright: 2014 Firebase
 * With code from ot.js (Copyright 2012-2013 Tim Baumann)
 */

(function (name, definition, context) {
  //try CommonJS, then AMD (require.js), then use global.
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof context['define'] == 'function' && context['define']['amd']) define(definition);
  else context[name] = definition();
})('Firepad', function () {var firepad = firepad || { };
firepad.utils = { };

firepad.utils.makeEventEmitter = function(clazz, opt_allowedEVents) {
  clazz.prototype.allowedEvents_ = opt_allowedEVents;

  clazz.prototype.on = function(eventType, callback, context) {
    this.validateEventType_(eventType);
    this.eventListeners_ = this.eventListeners_ || { };
    this.eventListeners_[eventType] = this.eventListeners_[eventType] || [];
    this.eventListeners_[eventType].push({ callback: callback, context: context });
  };

  clazz.prototype.off = function(eventType, callback) {
    this.validateEventType_(eventType);
    this.eventListeners_ = this.eventListeners_ || { };
    var listeners = this.eventListeners_[eventType] || [];
    for(var i = 0; i < listeners.length; i++) {
      if (listeners[i].callback === callback) {
        listeners.splice(i, 1);
        return;
      }
    }
  };

  clazz.prototype.trigger =  function(eventType /*, args ... */) {
    this.eventListeners_ = this.eventListeners_ || { };
    var listeners = this.eventListeners_[eventType] || [];
    for(var i = 0; i < listeners.length; i++) {
      listeners[i].callback.apply(listeners[i].context, Array.prototype.slice.call(arguments, 1));
    }
  };

  clazz.prototype.validateEventType_ = function(eventType) {
    if (this.allowedEvents_) {
      var allowed = false;
      for(var i = 0; i < this.allowedEvents_.length; i++) {
        if (this.allowedEvents_[i] === eventType) {
          allowed = true;
          break;
        }
      }
      if (!allowed) {
        throw new Error('Unknown event "' + eventType + '"');
      }
    }
  };
};

firepad.utils.elt = function(tag, content, attrs) {
  var e = document.createElement(tag);
  if (typeof content === "string") {
    firepad.utils.setTextContent(e, content);
  } else if (content) {
    for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); }
  }
  for(var attr in (attrs || { })) {
    e.setAttribute(attr, attrs[attr]);
  }
  return e;
};

firepad.utils.setTextContent = function(e, str) {
  e.innerHTML = "";
  e.appendChild(document.createTextNode(str));
};


firepad.utils.on = function(emitter, type, f, capture) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, capture || false);
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f);
  }
};

firepad.utils.off = function(emitter, type, f, capture) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, capture || false);
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f);
  }
};

firepad.utils.preventDefault = function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
};

firepad.utils.stopPropagation = function(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
};

firepad.utils.stopEvent = function(e) {
  firepad.utils.preventDefault(e);
  firepad.utils.stopPropagation(e);
};

firepad.utils.stopEventAnd = function(fn) {
  return function(e) {
    fn(e);
    firepad.utils.stopEvent(e);
    return false;
  };
};

firepad.utils.trim = function(str) {
  return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
};

firepad.utils.stringEndsWith = function(str, suffix) {
  var list = (typeof suffix == 'string') ? [suffix] : suffix;
  for (var i = 0; i < list.length; i++) {
    var suffix = list[i];
    if (str.indexOf(suffix, str.length - suffix.length) !== -1)
      return true;
  }
  return false;
};

firepad.utils.assert = function assert (b, msg) {
  if (!b) {
    throw new Error(msg || "assertion error");
  }
};

firepad.utils.log = function() {
  if (typeof console !== 'undefined' && typeof console.log !== 'undefined') {
    var args = ['Firepad:'];
    for(var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    console.log.apply(console, args);
  }
};

var firepad = firepad || { };
firepad.Span = (function () {
  function Span(pos, length) {
    this.pos = pos;
    this.length = length;
  }

  Span.prototype.end = function() {
    return this.pos + this.length;
  };

  return Span;
}());

var firepad = firepad || { };

firepad.TextOp = (function() {
  var utils = firepad.utils;

  // Operation are essentially lists of ops. There are three types of ops:
  //
  // * Retain ops: Advance the cursor position by a given number of characters.
  //   Represented by positive ints.
  // * Insert ops: Insert a given string at the current cursor position.
  //   Represented by strings.
  // * Delete ops: Delete the next n characters. Represented by negative ints.
  function TextOp(type) {
    this.type = type;
    this.chars = null;
    this.text = null;
    this.attributes = null;

    if (type === 'insert') {
      this.text = arguments[1];
      utils.assert(typeof this.text === 'string');
      this.attributes = arguments[2] || { };
      utils.assert (typeof this.attributes === 'object');
    } else if (type === 'delete') {
      this.chars = arguments[1];
      utils.assert(typeof this.chars === 'number');
    } else if (type === 'retain') {
      this.chars = arguments[1];
      utils.assert(typeof this.chars === 'number');
      this.attributes = arguments[2] || { };
      utils.assert (typeof this.attributes === 'object');
    }
  }

  TextOp.prototype.isInsert = function() { return this.type === 'insert'; };
  TextOp.prototype.isDelete = function() { return this.type === 'delete'; };
  TextOp.prototype.isRetain = function() { return this.type === 'retain'; };

  TextOp.prototype.equals = function(other) {
    return (this.type === other.type &&
        this.text === other.text &&
        this.chars === other.chars &&
        this.attributesEqual(other.attributes));
  };

  TextOp.prototype.attributesEqual = function(otherAttributes) {
    for (var attr in this.attributes) {
      if (this.attributes[attr] !== otherAttributes[attr]) { return false; }
    }

    for (attr in otherAttributes) {
      if (this.attributes[attr] !== otherAttributes[attr]) { return false; }
    }

    return true;
  };

  TextOp.prototype.hasEmptyAttributes = function() {
    var empty = true;
    for (var attr in this.attributes) {
      empty = false;
      break;
    }

    return empty;
  };

  return TextOp;
})();

var firepad = firepad || { };

firepad.TextOperation = (function () {
  'use strict';
  var TextOp = firepad.TextOp;
  var utils = firepad.utils;

  // Constructor for new operations.
  function TextOperation () {
    if (!this || this.constructor !== TextOperation) {
      // => function was called without 'new'
      return new TextOperation();
    }

    // When an operation is applied to an input string, you can think of this as
    // if an imaginary cursor runs over the entire string and skips over some
    // parts, deletes some parts and inserts characters at some positions. These
    // actions (skip/delete/insert) are stored as an array in the "ops" property.
    this.ops = [];
    // An operation's baseLength is the length of every string the operation
    // can be applied to.
    this.baseLength = 0;
    // The targetLength is the length of every string that results from applying
    // the operation on a valid input string.
    this.targetLength = 0;
  }

  TextOperation.prototype.equals = function (other) {
    if (this.baseLength !== other.baseLength) { return false; }
    if (this.targetLength !== other.targetLength) { return false; }
    if (this.ops.length !== other.ops.length) { return false; }
    for (var i = 0; i < this.ops.length; i++) {
      if (!this.ops[i].equals(other.ops[i])) { return false; }
    }
    return true;
  };


  // After an operation is constructed, the user of the library can specify the
  // actions of an operation (skip/insert/delete) with these three builder
  // methods. They all return the operation for convenient chaining.

  // Skip over a given number of characters.
  TextOperation.prototype.retain = function (n, attributes) {
    if (typeof n !== 'number' || n < 0) {
      throw new Error("retain expects a positive integer.");
    }
    if (n === 0) { return this; }
    this.baseLength += n;
    this.targetLength += n;
    attributes = attributes || { };
    var prevOp = (this.ops.length > 0) ? this.ops[this.ops.length - 1] : null;
    if (prevOp && prevOp.isRetain() && prevOp.attributesEqual(attributes)) {
      // The last op is a retain op with the same attributes => we can merge them into one op.
      prevOp.chars += n;
    } else {
      // Create a new op.
      this.ops.push(new TextOp('retain', n, attributes));
    }
    return this;
  };

  // Insert a string at the current position.
  TextOperation.prototype.insert = function (str, attributes) {
    if (typeof str !== 'string') {
      throw new Error("insert expects a string");
    }
    if (str === '') { return this; }
    attributes = attributes || { };
    this.targetLength += str.length;
    var prevOp = (this.ops.length > 0) ? this.ops[this.ops.length - 1] : null;
    var prevPrevOp = (this.ops.length > 1) ? this.ops[this.ops.length - 2] : null;
    if (prevOp && prevOp.isInsert() && prevOp.attributesEqual(attributes)) {
      // Merge insert op.
      prevOp.text += str;
    } else if (prevOp && prevOp.isDelete()) {
      // It doesn't matter when an operation is applied whether the operation
      // is delete(3), insert("something") or insert("something"), delete(3).
      // Here we enforce that in this case, the insert op always comes first.
      // This makes all operations that have the same effect when applied to
      // a document of the right length equal in respect to the `equals` method.
      if (prevPrevOp && prevPrevOp.isInsert() && prevPrevOp.attributesEqual(attributes)) {
        prevPrevOp.text += str;
      } else {
        this.ops[this.ops.length - 1] = new TextOp('insert', str, attributes);
        this.ops.push(prevOp);
      }
    } else {
      this.ops.push(new TextOp('insert', str, attributes));
    }
    return this;
  };

  // Delete a string at the current position.
  TextOperation.prototype['delete'] = function (n) {
    if (typeof n === 'string') { n = n.length; }
    if (typeof n !== 'number' || n < 0) {
      throw new Error("delete expects a positive integer or a string");
    }
    if (n === 0) { return this; }
    this.baseLength += n;
    var prevOp = (this.ops.length > 0) ? this.ops[this.ops.length - 1] : null;
    if (prevOp && prevOp.isDelete()) {
      prevOp.chars += n;
    } else {
      this.ops.push(new TextOp('delete', n));
    }
    return this;
  };

  // Tests whether this operation has no effect.
  TextOperation.prototype.isNoop = function () {
    return this.ops.length === 0 ||
        (this.ops.length === 1 && (this.ops[0].isRetain() && this.ops[0].hasEmptyAttributes()));
  };

  TextOperation.prototype.clone = function() {
    var clone = new TextOperation();
    for(var i = 0; i < this.ops.length; i++) {
      if (this.ops[i].isRetain()) {
        clone.retain(this.ops[i].chars, this.ops[i].attributes);
      } else if (this.ops[i].isInsert()) {
        clone.insert(this.ops[i].text, this.ops[i].attributes);
      } else {
        clone['delete'](this.ops[i].chars);
      }
    }

    return clone;
  };

  // Pretty printing.
  TextOperation.prototype.toString = function () {
    // map: build a new array by applying a function to every element in an old
    // array.
    var map = Array.prototype.map || function (fn) {
      var arr = this;
      var newArr = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        newArr[i] = fn(arr[i]);
      }
      return newArr;
    };
    return map.call(this.ops, function (op) {
      if (op.isRetain()) {
        return "retain " + op.chars;
      } else if (op.isInsert()) {
        return "insert '" + op.text + "'";
      } else {
        return "delete " + (op.chars);
      }
    }).join(', ');
  };

  // Converts operation into a JSON value.
  TextOperation.prototype.toJSON = function () {
    var ops = [];
    for(var i = 0; i < this.ops.length; i++) {
      // We prefix ops with their attributes if non-empty.
      if (!this.ops[i].hasEmptyAttributes()) {
        ops.push(this.ops[i].attributes);
      }
      if (this.ops[i].type === 'retain') {
        ops.push(this.ops[i].chars);
      } else if (this.ops[i].type === 'insert') {
        ops.push(this.ops[i].text);
      } else if (this.ops[i].type === 'delete') {
        ops.push(-this.ops[i].chars);
      }
    }
    // Return an array with /something/ in it, since an empty array will be treated as null by Firebase.
    if (ops.length === 0) {
      ops.push(0);
    }
    return ops;
  };

  // Converts a plain JS object into an operation and validates it.
  TextOperation.fromJSON = function (ops) {
    var o = new TextOperation();
    for (var i = 0, l = ops.length; i < l; i++) {
      var op = ops[i];
      var attributes = { };
      if (typeof op === 'object') {
        attributes = op;
        i++;
        op = ops[i];
      }
      if (typeof op === 'number') {
        if (op > 0) {
          o.retain(op, attributes);
        } else {
          o['delete'](-op);
        }
      } else {
        utils.assert(typeof op === 'string');
        o.insert(op, attributes);
      }
    }
    return o;
  };

  // Apply an operation to a string, returning a new string. Throws an error if
  // there's a mismatch between the input string and the operation.
  TextOperation.prototype.apply = function (str, oldAttributes, newAttributes) {
    var operation = this;
    oldAttributes = oldAttributes || [];
    newAttributes = newAttributes || [];
    if (str.length !== operation.baseLength) {
      throw new Error("The operation's base length must be equal to the string's length.");
    }
    var newStringParts = [], j = 0, k, attr;
    var oldIndex = 0;
    var ops = this.ops;
    for (var i = 0, l = ops.length; i < l; i++) {
      var op = ops[i];
      if (op.isRetain()) {
        if (oldIndex + op.chars > str.length) {
          throw new Error("Operation can't retain more characters than are left in the string.");
        }
        // Copy skipped part of the retained string.
        newStringParts[j++] = str.slice(oldIndex, oldIndex + op.chars);

        // Copy (and potentially update) attributes for each char in retained string.
        for(k = 0; k < op.chars; k++) {
          var currAttributes = oldAttributes[oldIndex + k] || { }, updatedAttributes = { };
          for(attr in currAttributes) {
            updatedAttributes[attr] = currAttributes[attr];
            utils.assert(updatedAttributes[attr] !== false);
          }
          for(attr in op.attributes) {
            if (op.attributes[attr] === false) {
              delete updatedAttributes[attr];
            } else {
              updatedAttributes[attr] = op.attributes[attr];
            }
            utils.assert(updatedAttributes[attr] !== false);
          }
          newAttributes.push(updatedAttributes);
        }

        oldIndex += op.chars;
      } else if (op.isInsert()) {
        // Insert string.
        newStringParts[j++] = op.text;

        // Insert attributes for each char.
        for(k = 0; k < op.text.length; k++) {
          var insertedAttributes = { };
          for(attr in op.attributes) {
            insertedAttributes[attr] = op.attributes[attr];
            utils.assert(insertedAttributes[attr] !== false);
          }
          newAttributes.push(insertedAttributes);
        }
      } else { // delete op
        oldIndex += op.chars;
      }
    }
    if (oldIndex !== str.length) {
      throw new Error("The operation didn't operate on the whole string.");
    }
    var newString = newStringParts.join('');
    utils.assert(newString.length === newAttributes.length);

    return newString;
  };

  // Computes the inverse of an operation. The inverse of an operation is the
  // operation that reverts the effects of the operation, e.g. when you have an
  // operation 'insert("hello "); skip(6);' then the inverse is 'delete("hello ");
  // skip(6);'. The inverse should be used for implementing undo.
  TextOperation.prototype.invert = function (str) {
    var strIndex = 0;
    var inverse = new TextOperation();
    var ops = this.ops;
    for (var i = 0, l = ops.length; i < l; i++) {
      var op = ops[i];
      if (op.isRetain()) {
        inverse.retain(op.chars);
        strIndex += op.chars;
      } else if (op.isInsert()) {
        inverse['delete'](op.text.length);
      } else { // delete op
        inverse.insert(str.slice(strIndex, strIndex + op.chars));
        strIndex += op.chars;
      }
    }
    return inverse;
  };

  // Compose merges two consecutive operations into one operation, that
  // preserves the changes of both. Or, in other words, for each input string S
  // and a pair of consecutive operations A and B,
  // apply(apply(S, A), B) = apply(S, compose(A, B)) must hold.
  TextOperation.prototype.compose = function (operation2) {
    var operation1 = this;
    if (operation1.targetLength !== operation2.baseLength) {
      throw new Error("The base length of the second operation has to be the target length of the first operation");
    }

    function composeAttributes(first, second, firstOpIsInsert) {
      var merged = { }, attr;
      for(attr in first) {
        merged[attr] = first[attr];
      }
      for(attr in second) {
        if (firstOpIsInsert && second[attr] === false) {
          delete merged[attr];
        } else {
          merged[attr] = second[attr];
        }
      }
      return merged;
    }

    var operation = new TextOperation(); // the combined operation
    var ops1 = operation1.clone().ops, ops2 = operation2.clone().ops;
    var i1 = 0, i2 = 0; // current index into ops1 respectively ops2
    var op1 = ops1[i1++], op2 = ops2[i2++]; // current ops
    var attributes;
    while (true) {
      // Dispatch on the type of op1 and op2
      if (typeof op1 === 'undefined' && typeof op2 === 'undefined') {
        // end condition: both ops1 and ops2 have been processed
        break;
      }

      if (op1 && op1.isDelete()) {
        operation['delete'](op1.chars);
        op1 = ops1[i1++];
        continue;
      }
      if (op2 && op2.isInsert()) {
        operation.insert(op2.text, op2.attributes);
        op2 = ops2[i2++];
        continue;
      }

      if (typeof op1 === 'undefined') {
        throw new Error("Cannot compose operations: first operation is too short.");
      }
      if (typeof op2 === 'undefined') {
        throw new Error("Cannot compose operations: first operation is too long.");
      }

      if (op1.isRetain() && op2.isRetain()) {
        attributes = composeAttributes(op1.attributes, op2.attributes);
        if (op1.chars > op2.chars) {
          operation.retain(op2.chars, attributes);
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          operation.retain(op1.chars, attributes);
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          operation.retain(op1.chars, attributes);
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }
      } else if (op1.isInsert() && op2.isDelete()) {
        if (op1.text.length > op2.chars) {
          op1.text = op1.text.slice(op2.chars);
          op2 = ops2[i2++];
        } else if (op1.text.length === op2.chars) {
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          op2.chars -= op1.text.length;
          op1 = ops1[i1++];
        }
      } else if (op1.isInsert() && op2.isRetain()) {
        attributes = composeAttributes(op1.attributes, op2.attributes, /*firstOpIsInsert=*/true);
        if (op1.text.length > op2.chars) {
          operation.insert(op1.text.slice(0, op2.chars), attributes);
          op1.text = op1.text.slice(op2.chars);
          op2 = ops2[i2++];
        } else if (op1.text.length === op2.chars) {
          operation.insert(op1.text, attributes);
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          operation.insert(op1.text, attributes);
          op2.chars -= op1.text.length;
          op1 = ops1[i1++];
        }
      } else if (op1.isRetain() && op2.isDelete()) {
        if (op1.chars > op2.chars) {
          operation['delete'](op2.chars);
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          operation['delete'](op2.chars);
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          operation['delete'](op1.chars);
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }
      } else {
        throw new Error(
          "This shouldn't happen: op1: " +
          JSON.stringify(op1) + ", op2: " +
          JSON.stringify(op2)
        );
      }
    }
    return operation;
  };

  function getSimpleOp (operation) {
    var ops = operation.ops;
    switch (ops.length) {
    case 1:
      return ops[0];
    case 2:
      return ops[0].isRetain() ? ops[1] : (ops[1].isRetain() ? ops[0] : null);
    case 3:
      if (ops[0].isRetain() && ops[2].isRetain()) { return ops[1]; }
    }
    return null;
  }

  function getStartIndex (operation) {
    if (operation.ops[0].isRetain()) { return operation.ops[0].chars; }
    return 0;
  }

  // When you use ctrl-z to undo your latest changes, you expect the program not
  // to undo every single keystroke but to undo your last sentence you wrote at
  // a stretch or the deletion you did by holding the backspace key down. This
  // This can be implemented by composing operations on the undo stack. This
  // method can help decide whether two operations should be composed. It
  // returns true if the operations are consecutive insert operations or both
  // operations delete text at the same position. You may want to include other
  // factors like the time since the last change in your decision.
  TextOperation.prototype.shouldBeComposedWith = function (other) {
    if (this.isNoop() || other.isNoop()) { return true; }

    var startA = getStartIndex(this), startB = getStartIndex(other);
    var simpleA = getSimpleOp(this), simpleB = getSimpleOp(other);
    if (!simpleA || !simpleB) { return false; }

    if (simpleA.isInsert() && simpleB.isInsert()) {
      return startA + simpleA.text.length === startB;
    }

    if (simpleA.isDelete() && simpleB.isDelete()) {
      // there are two possibilities to delete: with backspace and with the
      // delete key.
      return (startB + simpleB.chars === startA) || startA === startB;
    }

    return false;
  };

  // Decides whether two operations should be composed with each other
  // if they were inverted, that is
  // `shouldBeComposedWith(a, b) = shouldBeComposedWithInverted(b^{-1}, a^{-1})`.
  TextOperation.prototype.shouldBeComposedWithInverted = function (other) {
    if (this.isNoop() || other.isNoop()) { return true; }

    var startA = getStartIndex(this), startB = getStartIndex(other);
    var simpleA = getSimpleOp(this), simpleB = getSimpleOp(other);
    if (!simpleA || !simpleB) { return false; }

    if (simpleA.isInsert() && simpleB.isInsert()) {
      return startA + simpleA.text.length === startB || startA === startB;
    }

    if (simpleA.isDelete() && simpleB.isDelete()) {
      return startB + simpleB.chars === startA;
    }

    return false;
  };


  TextOperation.transformAttributes = function(attributes1, attributes2) {
    var attributes1prime = { }, attributes2prime = { };
    var attr, allAttrs = { };
    for(attr in attributes1) { allAttrs[attr] = true; }
    for(attr in attributes2) { allAttrs[attr] = true; }

    for (attr in allAttrs) {
      var attr1 = attributes1[attr], attr2 = attributes2[attr];
      utils.assert(attr1 != null || attr2 != null);
      if (attr1 == null) {
        // Only modified by attributes2; keep it.
        attributes2prime[attr] = attr2;
      } else if (attr2 == null) {
        // only modified by attributes1; keep it
        attributes1prime[attr] = attr1;
      } else if (attr1 === attr2) {
        // Both set it to the same value.  Nothing to do.
      } else {
        // attr1 and attr2 are different. Prefer attr1.
        attributes1prime[attr] = attr1;
      }
    }
    return [attributes1prime, attributes2prime];
  };

  // Transform takes two operations A and B that happened concurrently and
  // produces two operations A' and B' (in an array) such that
  // `apply(apply(S, A), B') = apply(apply(S, B), A')`. This function is the
  // heart of OT.
  TextOperation.transform = function (operation1, operation2) {
    if (operation1.baseLength !== operation2.baseLength) {
      throw new Error("Both operations have to have the same base length");
    }

    var operation1prime = new TextOperation();
    var operation2prime = new TextOperation();
    var ops1 = operation1.clone().ops, ops2 = operation2.clone().ops;
    var i1 = 0, i2 = 0;
    var op1 = ops1[i1++], op2 = ops2[i2++];
    while (true) {
      // At every iteration of the loop, the imaginary cursor that both
      // operation1 and operation2 have that operates on the input string must
      // have the same position in the input string.

      if (typeof op1 === 'undefined' && typeof op2 === 'undefined') {
        // end condition: both ops1 and ops2 have been processed
        break;
      }

      // next two cases: one or both ops are insert ops
      // => insert the string in the corresponding prime operation, skip it in
      // the other one. If both op1 and op2 are insert ops, prefer op1.
      if (op1 && op1.isInsert()) {
        operation1prime.insert(op1.text, op1.attributes);
        operation2prime.retain(op1.text.length);
        op1 = ops1[i1++];
        continue;
      }
      if (op2 && op2.isInsert()) {
        operation1prime.retain(op2.text.length);
        operation2prime.insert(op2.text, op2.attributes);
        op2 = ops2[i2++];
        continue;
      }

      if (typeof op1 === 'undefined') {
        throw new Error("Cannot transform operations: first operation is too short.");
      }
      if (typeof op2 === 'undefined') {
        throw new Error("Cannot transform operations: first operation is too long.");
      }

      var minl;
      if (op1.isRetain() && op2.isRetain()) {
        // Simple case: retain/retain
        var attributesPrime = TextOperation.transformAttributes(op1.attributes, op2.attributes);
        if (op1.chars > op2.chars) {
          minl = op2.chars;
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          minl = op2.chars;
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          minl = op1.chars;
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }

        operation1prime.retain(minl, attributesPrime[0]);
        operation2prime.retain(minl, attributesPrime[1]);
      } else if (op1.isDelete() && op2.isDelete()) {
        // Both operations delete the same string at the same position. We don't
        // need to produce any operations, we just skip over the delete ops and
        // handle the case that one operation deletes more than the other.
        if (op1.chars > op2.chars) {
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }
      // next two cases: delete/retain and retain/delete
      } else if (op1.isDelete() && op2.isRetain()) {
        if (op1.chars > op2.chars) {
          minl = op2.chars;
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          minl = op2.chars;
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          minl = op1.chars;
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }
        operation1prime['delete'](minl);
      } else if (op1.isRetain() && op2.isDelete()) {
        if (op1.chars > op2.chars) {
          minl = op2.chars;
          op1.chars -= op2.chars;
          op2 = ops2[i2++];
        } else if (op1.chars === op2.chars) {
          minl = op1.chars;
          op1 = ops1[i1++];
          op2 = ops2[i2++];
        } else {
          minl = op1.chars;
          op2.chars -= op1.chars;
          op1 = ops1[i1++];
        }
        operation2prime['delete'](minl);
      } else {
        throw new Error("The two operations aren't compatible");
      }
    }

    return [operation1prime, operation2prime];
  };

  return TextOperation;
}());

var firepad = firepad || { };

// TODO: Rewrite this (probably using a splay tree) to be efficient.  Right now it's based on a linked list
// so all operations are O(n), where n is the number of spans in the list.
firepad.AnnotationList = (function () {
  var Span = firepad.Span;

  function assert(bool, text) {
    if (!bool) {
      throw new Error('AnnotationList assertion failed' + (text ? (': ' + text) : ''));
    }
  }

  function OldAnnotatedSpan(pos, node) {
    this.pos = pos;
    this.length = node.length;
    this.annotation = node.annotation;
    this.attachedObject_ = node.attachedObject;
  }

  OldAnnotatedSpan.prototype.getAttachedObject = function() {
    return this.attachedObject_;
  };

  function NewAnnotatedSpan(pos, node) {
    this.pos = pos;
    this.length = node.length;
    this.annotation = node.annotation;
    this.node_ = node;
  }

  NewAnnotatedSpan.prototype.attachObject = function(object) {
    this.node_.attachedObject = object;
  };

  var NullAnnotation = { equals: function() { return false; } };

  function AnnotationList(changeHandler) {
    // There's always a head node; to avoid special cases.
    this.head_ = new Node(0, NullAnnotation);
    this.changeHandler_ = changeHandler;
  }

  AnnotationList.prototype.insertAnnotatedSpan = function(span, annotation) {
    this.wrapOperation_(new Span(span.pos, 0), function(oldPos, old) {
      assert(!old || old.next === null); // should be 0 or 1 nodes.
      var toInsert = new Node(span.length, annotation);
      if (!old) {
        return toInsert;
      } else {
        assert (span.pos > oldPos && span.pos < oldPos + old.length);
        var newNodes = new Node(0, NullAnnotation);
        // Insert part of old before insertion point.
        newNodes.next = new Node(span.pos - oldPos, old.annotation);
        // Insert new node.
        newNodes.next.next = toInsert;
        // Insert part of old after insertion point.
        toInsert.next = new Node(oldPos + old.length - span.pos, old.annotation);
        return newNodes.next;
      }
    });
  };

  AnnotationList.prototype.removeSpan = function(removeSpan) {
    if (removeSpan.length === 0) { return; }

    this.wrapOperation_(removeSpan, function(oldPos, old) {
      assert (old !== null);
      var newNodes = new Node(0, NullAnnotation), current = newNodes;
      // Add new node for part before the removed span (if any).
      if (removeSpan.pos > oldPos) {
        current.next = new Node(removeSpan.pos - oldPos, old.annotation);
        current = current.next;
      }

      // Skip over removed nodes.
      while (removeSpan.end() > oldPos + old.length) {
        oldPos += old.length;
        old = old.next;
      }

      // Add new node for part after the removed span (if any).
      var afterChars = oldPos + old.length - removeSpan.end();
      if (afterChars > 0) {
        current.next = new Node(afterChars, old.annotation);
      }

      return newNodes.next;
    });
  };

  AnnotationList.prototype.updateSpan = function (span, updateFn) {
    if (span.length === 0) { return; }

    this.wrapOperation_(span, function(oldPos, old) {
      assert (old !== null);
      var newNodes = new Node(0, NullAnnotation), current = newNodes, currentPos = oldPos;

      // Add node for any characters before the span we're updating.
      var beforeChars = span.pos - currentPos;
      assert(beforeChars < old.length);
      if (beforeChars > 0) {
        current.next = new Node(beforeChars, old.annotation);
        current = current.next;
        currentPos += current.length;
      }

      // Add updated nodes for entirely updated nodes.
      while (old !== null && span.end() >= oldPos + old.length) {
        var length = oldPos + old.length - currentPos;
        current.next = new Node(length, updateFn(old.annotation, length));
        current = current.next;
        oldPos += old.length;
        old = old.next;
        currentPos = oldPos;
      }

      // Add updated nodes for last node.
      var updateChars = span.end() - currentPos;
      if (updateChars > 0) {
        assert(updateChars < old.length);
        current.next = new Node(updateChars, updateFn(old.annotation, updateChars));
        current = current.next;
        currentPos += current.length;

        // Add non-updated remaining part of node.
        current.next = new Node(oldPos + old.length - currentPos, old.annotation);
      }

      return newNodes.next;
    });
  };

  AnnotationList.prototype.wrapOperation_ = function(span, operationFn) {
    if (span.pos < 0) {
      throw new Error('Span start cannot be negative.');
    }
    var oldNodes = [], newNodes = [];

    var res = this.getAffectedNodes_(span);

    var tail;
    if (res.start !== null) {
      tail = res.end.next;
      // Temporarily truncate list so we can pass it to operationFn.  We'll splice it back in later.
      res.end.next = null;
    } else {
      // start and end are null, because span is empty and lies on the border of two nodes.
      tail = res.succ;
    }

    // Create a new segment to replace the affected nodes.
    var newSegment = operationFn(res.startPos, res.start);

    var includePredInOldNodes = false, includeSuccInOldNodes = false;
    if (newSegment) {
      this.mergeNodesWithSameAnnotations_(newSegment);

      var newPos;
      if (res.pred && res.pred.annotation.equals(newSegment.annotation)) {
        // We can merge the pred node with newSegment's first node.
        includePredInOldNodes = true;
        newSegment.length += res.pred.length;

        // Splice newSegment in after beforePred.
        res.beforePred.next = newSegment;
        newPos = res.predPos;
      } else {
        // Splice newSegment in after beforeStart.
        res.beforeStart.next = newSegment;
        newPos = res.startPos;
      }

      // Generate newNodes, but not the last one (since we may be able to merge it with succ).
      while(newSegment.next) {
        newNodes.push(new NewAnnotatedSpan(newPos, newSegment));
        newPos += newSegment.length;
        newSegment = newSegment.next;
      }

      if (res.succ && res.succ.annotation.equals(newSegment.annotation)) {
        // We can merge newSegment's last node with the succ node.
        newSegment.length += res.succ.length;
        includeSuccInOldNodes = true;

        // Splice rest of list after succ after newSegment.
        newSegment.next = res.succ.next;
      } else {
        // Splice tail after newSegment.
        newSegment.next = tail;
      }

      // Add last newSegment node to newNodes.
      newNodes.push(new NewAnnotatedSpan(newPos, newSegment));

    } else {
      // newList is empty.  Try to merge pred and succ.
      if (res.pred && res.succ && res.pred.annotation.equals(res.succ.annotation)) {
        includePredInOldNodes = true;
        includeSuccInOldNodes = true;

        // Create succ + pred merged node and splice list together.
        newSegment = new Node(res.pred.length + res.succ.length, res.pred.annotation);
        res.beforePred.next = newSegment;
        newSegment.next = res.succ.next;

        newNodes.push(new NewAnnotatedSpan(res.startPos - res.pred.length, newSegment));
      } else {
        // Just splice list back together.
        res.beforeStart.next = tail;
      }
    }

    // Build list of oldNodes.

    if (includePredInOldNodes) {
      oldNodes.push(new OldAnnotatedSpan(res.predPos, res.pred));
    }

    var oldPos = res.startPos, oldSegment = res.start;
    while (oldSegment !== null) {
      oldNodes.push(new OldAnnotatedSpan(oldPos, oldSegment));
      oldPos += oldSegment.length;
      oldSegment = oldSegment.next;
    }

    if (includeSuccInOldNodes) {
      oldNodes.push(new OldAnnotatedSpan(oldPos, res.succ));
    }

    this.changeHandler_(oldNodes, newNodes);
  };

  AnnotationList.prototype.getAffectedNodes_ = function(span) {
    // We want to find nodes 'start', 'end', 'beforeStart', 'pred', and 'succ' where:
    //  - 'start' contains the first character in span.
    //  - 'end' contains the last character in span.
    //  - 'beforeStart' is the node before 'start'.
    //  - 'beforePred' is the node before 'pred'.
    //  - 'succ' contains the node after 'end' if span.end() was on a node boundary, else null.
    //  - 'pred' contains the node before 'start' if span.pos was on a node boundary, else null.

    var result = {};

    var prevprev = null, prev = this.head_, current = prev.next, currentPos = 0;
    while (current !== null && span.pos >= currentPos + current.length) {
      currentPos += current.length;
      prevprev = prev;
      prev = current;
      current = current.next;
    }
    if (current === null && !(span.length === 0 && span.pos === currentPos)) {
      throw new Error('Span start exceeds the bounds of the AnnotationList.');
    }

    result.startPos = currentPos;
    // Special case if span is empty and on the border of two nodes
    if (span.length === 0 && span.pos === currentPos) {
      result.start = null;
    } else {
      result.start = current;
    }
    result.beforeStart = prev;

    if (currentPos === span.pos && currentPos > 0) {
      result.pred = prev;
      result.predPos = currentPos - prev.length;
      result.beforePred = prevprev;
    } else {
      result.pred = null;
    }

    while (current !== null && span.end() > currentPos) {
      currentPos += current.length;
      prev = current;
      current = current.next;
    }
    if (span.end() > currentPos) {
      throw new Error('Span end exceeds the bounds of the AnnotationList.');
    }

    // Special case if span is empty and on the border of two nodes.
    if (span.length === 0 && span.end() === currentPos) {
      result.end = null;
    } else {
      result.end = prev;
    }
    result.succ = (currentPos === span.end()) ? current : null;

    return result;
  };

  AnnotationList.prototype.mergeNodesWithSameAnnotations_ = function(list) {
    if (!list) { return; }
    var prev = null, curr = list;
    while (curr) {
      if (prev && prev.annotation.equals(curr.annotation)) {
        prev.length += curr.length;
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  };

  AnnotationList.prototype.forEach = function(callback) {
    var current = this.head_.next;
    while (current !== null) {
      callback(current.length, current.annotation, current.attachedObject);
      current = current.next;
    }
  };

  AnnotationList.prototype.getAnnotatedSpansForPos = function(pos) {
    var currentPos = 0;
    var current = this.head_.next, prev = null;
    while (current !== null && currentPos + current.length <= pos) {
      currentPos += current.length;
      prev = current;
      current = current.next;
    }
    if (current === null && currentPos !== pos) {
      throw new Error('pos exceeds the bounds of the AnnotationList');
    }

    var res = [];
    if (currentPos === pos && prev) {
      res.push(new OldAnnotatedSpan(currentPos - prev.length, prev));
    }
    if (current) {
      res.push(new OldAnnotatedSpan(currentPos, current));
    }
    return res;
  };

  AnnotationList.prototype.getAnnotatedSpansForSpan = function(span) {
    if (span.length === 0) {
      return [];
    }
    var oldSpans = [];
    var res = this.getAffectedNodes_(span);
    var currentPos = res.startPos, current = res.start;
    while (current !== null && currentPos < span.end()) {
      var start = Math.max(currentPos, span.pos), end = Math.min(currentPos + current.length, span.end());
      var oldSpan = new Span(start, end - start);
      oldSpan.annotation = current.annotation;
      oldSpans.push(oldSpan);

      currentPos += current.length;
      current = current.next;
    }
    return oldSpans;
  };

  // For testing.
  AnnotationList.prototype.count = function() {
    var count = 0;
    var current = this.head_.next, prev = null;
    while(current !== null) {
      if (prev) {
        assert(!prev.annotation.equals(current.annotation));
      }
      prev = current;
      current = current.next;
      count++;
    }
    return count;
  };

  function Node(length, annotation) {
    this.length = length;
    this.annotation = annotation;
    this.attachedObject = null;
    this.next = null;
  }

  Node.prototype.clone = function() {
    var node = new Node(this.spanLength, this.annotation);
    node.next = this.next;
    return node;
  };

  return AnnotationList;
}());

var firepad = firepad || { };
firepad.Cursor = (function () {
  'use strict';

  // A cursor has a `position` and a `selectionEnd`. Both are zero-based indexes
  // into the document. When nothing is selected, `selectionEnd` is equal to
  // `position`. When there is a selection, `position` is always the side of the
  // selection that would move if you pressed an arrow key.
  function Cursor (position, selectionEnd) {
    this.position = position;
    this.selectionEnd = selectionEnd;
  }

  Cursor.fromJSON = function (obj) {
    return new Cursor(obj.position, obj.selectionEnd);
  };

  Cursor.prototype.equals = function (other) {
    return this.position === other.position &&
      this.selectionEnd === other.selectionEnd;
  };

  // Return the more current cursor information.
  Cursor.prototype.compose = function (other) {
    return other;
  };

  // Update the cursor with respect to an operation.
  Cursor.prototype.transform = function (other) {
    function transformIndex (index) {
      var newIndex = index;
      var ops = other.ops;
      for (var i = 0, l = other.ops.length; i < l; i++) {
        if (ops[i].isRetain()) {
          index -= ops[i].chars;
        } else if (ops[i].isInsert()) {
          newIndex += ops[i].text.length;
        } else {
          newIndex -= Math.min(index, ops[i].chars);
          index -= ops[i].chars;
        }
        if (index < 0) { break; }
      }
      return newIndex;
    }

    var newPosition = transformIndex(this.position);
    if (this.position === this.selectionEnd) {
      return new Cursor(newPosition, newPosition);
    }
    return new Cursor(newPosition, transformIndex(this.selectionEnd));
  };

  return Cursor;

}());


var firepad = firepad || { };

firepad.FirebaseAdapter = (function (global) {

  if (typeof require === 'function' && typeof Firebase !== 'function') {
    Firebase = require('firebase');
  }

  var TextOperation = firepad.TextOperation;
  var utils = firepad.utils;

  // Save a checkpoint every 100 edits.
  var CHECKPOINT_FREQUENCY = 100;

  function FirebaseAdapter (ref, userId, userColor) {
    this.ref_ = ref;
    this.ready_ = false;
    this.firebaseCallbacks_ = [];
    this.zombie_ = false;

    // We store the current document state as a TextOperation so we can write checkpoints to Firebase occasionally.
    // TODO: Consider more efficient ways to do this. (composing text operations is ~linear in the length of the document).
    this.document_ = new TextOperation();

    // The next expected revision.
    this.revision_ = 0;

    // This is used for two purposes:
    // 1) On initialization, we fill this with the latest checkpoint and any subsequent operations and then
    //      process them all together.
    // 2) If we ever receive revisions out-of-order (e.g. rev 5 before rev 4), we queue them here until it's time
    //    for them to be handled. [this should never happen with well-behaved clients; but if it /does/ happen we want
    //    to handle it gracefully.]
    this.pendingReceivedRevisions_ = { };

    var self = this;

    if (userId) {
      this.setUserId(userId);
      this.setColor(userColor);

      this.firebaseOn_(ref.root().child('.info/connected'), 'value', function(snapshot) {
        if (snapshot.val() === true) {
          self.initializeUserData_();
        }
      }, this);

      // Once we're initialized, start tracking users' cursors.
      this.on('ready', function() {
        self.monitorCursors_();
      });
    } else {
      this.userId_ = ref.push().name();
    }

    // Avoid triggering any events until our callers have had a chance to attach their listeners.
    setTimeout(function() {
      self.monitorHistory_();
    }, 0);

  }
  utils.makeEventEmitter(FirebaseAdapter, ['ready', 'cursor', 'operation', 'ack', 'retry']);

  FirebaseAdapter.prototype.dispose = function() {
    this.removeFirebaseCallbacks_();

    this.userRef_.child('cursor').remove();
    this.userRef_.child('color').remove();

    this.ref_ = null;
    this.document_ = null;
    this.zombie_ = true;
  };

  FirebaseAdapter.prototype.setUserId = function(userId) {
    if (this.userRef_) {
      // clean up existing data.
      this.userRef_.child('cursor').remove();
      this.userRef_.child('cursor').onDisconnect().cancel();
      this.userRef_.child('color').remove();
      this.userRef_.child('color').onDisconnect().cancel();
    }

    this.userId_ = userId;
    this.userRef_ = this.ref_.child('users').child(userId);

    this.initializeUserData_();
  };

  FirebaseAdapter.prototype.isHistoryEmpty = function() {
    assert(this.ready_, "Not ready yet.");
    return this.revision_ === 0;
  };

  /*
   * Send operation, retrying on connection failure. Takes an optional callback with signature:
   * function(error, committed).
   * An exception will be thrown on transaction failure, which should only happen on
   * catastrophic failure like a security rule violation.
   */
  FirebaseAdapter.prototype.sendOperation = function (operation, callback) {
    var self = this;

    // If we're not ready yet, do nothing right now, and trigger a retry when we're ready.
    if (!this.ready_) {
      this.on('ready', function() {
        self.trigger('retry');
      });
      return;
    }

    // Sanity check that this operation is valid.
    assert(this.document_.targetLength === operation.baseLength, "sendOperation() called with invalid operation.");

    // Convert revision into an id that will sort properly lexicographically.
    var revisionId = revisionToId(this.revision_);

    function doTransaction(revisionId, revisionData) {

      self.ref_.child('history').child(revisionId).transaction(function(current) {
        if (current === null) {
          return revisionData;
        }
      }, function(error, committed, snapshot) {
        if (error) {
          if (error.message === 'disconnect') {
            if (self.sent_ && self.sent_.id === revisionId) {
              // We haven't seen our transaction succeed or fail.  Send it again.
              setTimeout(function() {
                doTransaction(revisionId, revisionData);
              }, 0);
            } else if (callback) {
              callback(error, false);
            }
          } else {
            utils.log('Transaction failure!', error);
            throw error;
          }
        } else {
          if (callback) callback(null, committed);
        }
      }, /*applyLocally=*/false);
    }

    this.sent_ = { id: revisionId, op: operation };
    doTransaction(revisionId, { a: self.userId_, o: operation.toJSON(), t: Firebase.ServerValue.TIMESTAMP });
  };

  FirebaseAdapter.prototype.sendCursor = function (obj) {
    this.userRef_.child('cursor').set(obj);
    this.cursor_ = obj;
  };

  FirebaseAdapter.prototype.setColor = function(color) {
    this.userRef_.child('color').set(color);
    this.color_ = color;
  };

  FirebaseAdapter.prototype.getDocument = function() {
    return this.document_;
  };

  FirebaseAdapter.prototype.registerCallbacks = function(callbacks) {
    for (var eventType in callbacks) {
      this.on(eventType, callbacks[eventType]);
    }
  };

  FirebaseAdapter.prototype.initializeUserData_ = function() {
    this.userRef_.child('cursor').onDisconnect().remove();
    this.userRef_.child('color').onDisconnect().remove();

    this.sendCursor(this.cursor_ || null);
    this.setColor(this.color_ || null);
  };

  FirebaseAdapter.prototype.monitorCursors_ = function() {
    var usersRef = this.ref_.child('users'), self = this;

    function childChanged(childSnap) {
      var userId = childSnap.name();
      var userData = childSnap.val();
      self.trigger('cursor', userId, userData.cursor, userData.color);
    }

    this.firebaseOn_(usersRef, 'child_added', childChanged);
    this.firebaseOn_(usersRef, 'child_changed', childChanged);

    this.firebaseOn_(usersRef, 'child_removed', function(childSnap) {
      var userId = childSnap.name();
      self.trigger('cursor', userId, null);
    });
  };

  FirebaseAdapter.prototype.monitorHistory_ = function() {
    var self = this;
    // Get the latest checkpoint as a starting point so we don't have to re-play entire history.
    this.ref_.child('checkpoint').once('value', function(s) {
      if (self.zombie_) { return; } // just in case we were cleaned up before we got the checkpoint data.
      var revisionId = s.child('id').val(),  op = s.child('o').val(), author = s.child('a').val();
      if (op != null && revisionId != null && author !== null) {
        self.pendingReceivedRevisions_[revisionId] = { o: op, a: author };
        self.checkpointRevision_ = revisionFromId(revisionId);
        self.monitorHistoryStartingAt_(self.checkpointRevision_ + 1);
      } else {
        self.checkpointRevision_ = 0;
        self.monitorHistoryStartingAt_(self.checkpointRevision_);
      }
    });
  };

  FirebaseAdapter.prototype.monitorHistoryStartingAt_ = function(revision) {
    var historyRef = this.ref_.child('history').startAt(null, revisionToId(revision));
    var self = this;

    setTimeout(function() {
      self.firebaseOn_(historyRef, 'child_added', function(revisionSnapshot) {
        var revisionId = revisionSnapshot.name();
        self.pendingReceivedRevisions_[revisionId] = revisionSnapshot.val();
        if (self.ready_) {
          self.handlePendingReceivedRevisions_();
        }
      });

      historyRef.once('value', function() {
        self.handleInitialRevisions_();
      });
    }, 0);
  };

  FirebaseAdapter.prototype.handleInitialRevisions_ = function() {
    assert(!this.ready_, "Should not be called multiple times.");

    // Compose the checkpoint and all subsequent revisions into a single operation to apply at once.
    this.revision_ = this.checkpointRevision_;
    var revisionId = revisionToId(this.revision_), pending = this.pendingReceivedRevisions_;
    while (pending[revisionId] != null) {
      var revision = this.parseRevision_(pending[revisionId]);
      if (!revision) {
        // If a misbehaved client adds a bad operation, just ignore it.
        utils.log('Invalid operation.', this.ref_.toString(), revisionId, pending[revisionId]);
      } else {
        this.document_ = this.document_.compose(revision.operation);
      }

      delete pending[revisionId];
      this.revision_++;
      revisionId = revisionToId(this.revision_);
    }

    this.trigger('operation', this.document_);

    this.ready_ = true;
    var self = this;
    setTimeout(function() {
      self.trigger('ready');
    }, 0);
  };

  FirebaseAdapter.prototype.handlePendingReceivedRevisions_ = function() {
    var pending = this.pendingReceivedRevisions_;
    var revisionId = revisionToId(this.revision_);
    var triggerRetry = false;
    while (pending[revisionId] != null) {
      this.revision_++;

      var revision = this.parseRevision_(pending[revisionId]);
      if (!revision) {
        // If a misbehaved client adds a bad operation, just ignore it.
        utils.log('Invalid operation.', this.ref_.toString(), revisionId, pending[revisionId]);
      } else {
        this.document_ = this.document_.compose(revision.operation);
        if (this.sent_ && revisionId === this.sent_.id) {
          // We have an outstanding change at this revision id.
          if (this.sent_.op.equals(revision.operation) && revision.author === this.userId_) {
            // This is our change; it succeeded.
            if (this.revision_ % CHECKPOINT_FREQUENCY === 0) {
              this.saveCheckpoint_();
            }
            this.sent_ = null;
            this.trigger('ack');
          } else {
            // our op failed.  Trigger a retry after we're done catching up on any incoming ops.
            triggerRetry = true;
            this.trigger('operation', revision.operation);
          }
        } else {
          this.trigger('operation', revision.operation);
        }
      }
      delete pending[revisionId];

      revisionId = revisionToId(this.revision_);
    }

    if (triggerRetry) {
      this.sent_ = null;
      this.trigger('retry');
    }
  };

  FirebaseAdapter.prototype.parseRevision_ = function(data) {
    // We could do some of this validation via security rules.  But it's nice to be robust, just in case.
    if (typeof data !== 'object') { return null; }
    if (typeof data.a !== 'string' || typeof data.o !== 'object') { return null; }
    var op = null;
    try {
      op = TextOperation.fromJSON(data.o);
    }
    catch (e) {
      return null;
    }

    if (op.baseLength !== this.document_.targetLength) {
      return null;
    }
    return { author: data.a, operation: op }
  };

  FirebaseAdapter.prototype.saveCheckpoint_ = function() {
    this.ref_.child('checkpoint').set({
      a: this.userId_,
      o: this.document_.toJSON(),
      id: revisionToId(this.revision_ - 1) // use the id for the revision we just wrote.
    });
  };

  FirebaseAdapter.prototype.firebaseOn_ = function(ref, eventType, callback, context) {
    this.firebaseCallbacks_.push({ref: ref, eventType: eventType, callback: callback, context: context });
    ref.on(eventType, callback, context);
    return callback;
  };

  FirebaseAdapter.prototype.firebaseOff_ = function(ref, eventType, callback, context) {
    ref.off(eventType, callback, context);
    for(var i = 0; i < this.firebaseCallbacks_.length; i++) {
      var l = this.firebaseCallbacks_[i];
      if (l.ref === ref && l.eventType === eventType && l.callback === callback && l.context === context) {
        this.firebaseCallbacks_.splice(i, 1);
        break;
      }
    }
  };

  FirebaseAdapter.prototype.removeFirebaseCallbacks_ = function() {
    for(var i = 0; i < this.firebaseCallbacks_.length; i++) {
      var l = this.firebaseCallbacks_[i];
      l.ref.off(l.eventType, l.callback, l.context);
    }
    this.firebaseCallbacks_ = [];
  };

  // Throws an error if the first argument is falsy. Useful for debugging.
  function assert (b, msg) {
    if (!b) {
      throw new Error(msg || "assertion error");
    }
  }

  // Based off ideas from http://www.zanopha.com/docs/elen.pdf
  var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  function revisionToId(revision) {
    if (revision === 0) {
      return 'A0';
    }

    var str = '';
    while (revision > 0) {
      var digit = (revision % characters.length);
      str = characters[digit] + str;
      revision -= digit;
      revision /= characters.length;
    }

    // Prefix with length (starting at 'A' for length 1) to ensure the id's sort lexicographically.
    var prefix = characters[str.length + 9];
    return prefix + str;
  }

  function revisionFromId(revisionId) {
    assert (revisionId.length > 0 && revisionId[0] === characters[revisionId.length + 8]);
    var revision = 0;
    for(var i = 1; i < revisionId.length; i++) {
      revision *= characters.length;
      revision += characters.indexOf(revisionId[i]);
    }
    return revision;
  }

  return FirebaseAdapter;
}());

var firepad = firepad || { };

firepad.RichTextToolbar = (function(global) {
  var utils = firepad.utils;

  function RichTextToolbar(imageInsertionUI) {
    this.imageInsertionUI = imageInsertionUI;
    this.element_ = this.makeElement_();
  }

  utils.makeEventEmitter(RichTextToolbar, ['bold', 'italic', 'underline', 'strike', 'font', 'font-size', 'color',
    'left', 'center', 'right', 'unordered-list', 'ordered-list', 'todo-list', 'indent-increase', 'indent-decrease',
                                           'undo', 'redo', 'insert-image']);

  RichTextToolbar.prototype.element = function() { return this.element_; };

  RichTextToolbar.prototype.makeButton_ = function(eventName, iconName) {
    var self = this;
    iconName = iconName || eventName;
    var btn = utils.elt('a', [utils.elt('span', '', { 'class': 'firepad-tb-' + iconName } )], { 'class': 'firepad-btn' });
    utils.on(btn, 'click', utils.stopEventAnd(function() { self.trigger(eventName); }));
    return btn;
  }

  RichTextToolbar.prototype.makeElement_ = function() {
    var self = this;

    var font = this.makeFontDropdown_();
    var fontSize = this.makeFontSizeDropdown_();
    var color = this.makeColorDropdown_();

    var toolbarOptions = [
      utils.elt('div', [font], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [fontSize], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [color], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [self.makeButton_('bold'), self.makeButton_('italic'), self.makeButton_('underline'), self.makeButton_('strike', 'strikethrough')], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [self.makeButton_('unordered-list', 'list-2'), self.makeButton_('ordered-list', 'numbered-list'), self.makeButton_('todo-list', 'list')], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [self.makeButton_('indent-decrease'), self.makeButton_('indent-increase')], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [self.makeButton_('left', 'paragraph-left'), self.makeButton_('center', 'paragraph-center'), self.makeButton_('right', 'paragraph-right')], { 'class': 'firepad-btn-group'}),
      utils.elt('div', [self.makeButton_('undo'), self.makeButton_('redo')], { 'class': 'firepad-btn-group'})
    ];

    if (self.imageInsertionUI) {
      toolbarOptions.push(utils.elt('div', [self.makeButton_('insert-image')], { 'class': 'firepad-btn-group' }));
    }

    var toolbarWrapper = utils.elt('div', toolbarOptions, { 'class': 'firepad-toolbar-wrapper' });
    var toolbar = utils.elt('div', null, { 'class': 'firepad-toolbar' });
    toolbar.appendChild(toolbarWrapper)

    return toolbar;
  };

  RichTextToolbar.prototype.makeFontDropdown_ = function() {
    // NOTE: There must be matching .css styles in firepad.css.
    var fonts = ['Arial', 'Comic Sans MS', 'Courier New', 'Impact', 'Times New Roman', 'Verdana'];

    var items = [];
    for(var i = 0; i < fonts.length; i++) {
      var content = utils.elt('span', fonts[i]);
      content.setAttribute('style', 'font-family:' + fonts[i]);
      items.push({ content: content, value: fonts[i] });
    }
    return this.makeDropdown_('Font', 'font', items);
  };

  RichTextToolbar.prototype.makeFontSizeDropdown_ = function() {
    // NOTE: There must be matching .css styles in firepad.css.
    var sizes = [9, 10, 12, 14, 18, 24, 32, 42];

    var items = [];
    for(var i = 0; i < sizes.length; i++) {
      var content = utils.elt('span', sizes[i].toString());
      content.setAttribute('style', 'font-size:' + sizes[i] + 'px; line-height:' + (sizes[i]-6) + 'px;');
      items.push({ content: content, value: sizes[i] });
    }
    return this.makeDropdown_('Size', 'font-size', items, 'px');
  };

  RichTextToolbar.prototype.makeColorDropdown_ = function() {
    var colors = ['black', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'grey'];

    var items = [];
    for(var i = 0; i < colors.length; i++) {
      var content = utils.elt('div');
      content.className = 'firepad-color-dropdown-item';
      content.setAttribute('style', 'background-color:' + colors[i]);
      items.push({ content: content, value: colors[i] });
    }
    return this.makeDropdown_('Color', 'color', items);
  };

  RichTextToolbar.prototype.makeDropdown_ = function(title, eventName, items, value_suffix) {
    value_suffix = value_suffix || "";
    var self = this;
    var button = utils.elt('a', title + ' \u25be', { 'class': 'firepad-btn firepad-dropdown' });
    var list = utils.elt('ul', [ ], { 'class': 'firepad-dropdown-menu' });
    button.appendChild(list);

    var isShown = false;
    function showDropdown() {
      if (!isShown) {
        list.style.display = 'block';
        utils.on(document, 'click', hideDropdown, /*capture=*/true);
        isShown = true;
      }
    }

    var justDismissed = false;
    function hideDropdown() {
      if (isShown) {
        list.style.display = '';
        utils.off(document, 'click', hideDropdown, /*capture=*/true);
        isShown = false;
      }
      // HACK so we can avoid re-showing the dropdown if you click on the dropdown header to dismiss it.
      justDismissed = true;
      setTimeout(function() { justDismissed = false; }, 0);
    }

    function addItem(content, value) {
      if (typeof content !== 'object') {
        content = document.createTextNode(String(content));
      }
      var element = utils.elt('a', [content]);

      utils.on(element, 'click', utils.stopEventAnd(function() {
        hideDropdown();
        self.trigger(eventName, value + value_suffix);
      }));

      list.appendChild(element);
    }

    for(var i = 0; i < items.length; i++) {
      var content = items[i].content, value = items[i].value;
      addItem(content, value);
    }

    utils.on(button, 'click', utils.stopEventAnd(function() {
      if (!justDismissed) {
        showDropdown();
      }
    }));

    return button;
  };

  return RichTextToolbar;
})();

var firepad = firepad || { };
firepad.WrappedOperation = (function (global) {
  'use strict';

  // A WrappedOperation contains an operation and corresponing metadata.
  function WrappedOperation (operation, meta) {
    this.wrapped = operation;
    this.meta    = meta;
  }

  WrappedOperation.prototype.apply = function () {
    return this.wrapped.apply.apply(this.wrapped, arguments);
  };

  WrappedOperation.prototype.invert = function () {
    var meta = this.meta;
    return new WrappedOperation(
      this.wrapped.invert.apply(this.wrapped, arguments),
      meta && typeof meta === 'object' && typeof meta.invert === 'function' ?
        meta.invert.apply(meta, arguments) : meta
    );
  };

  // Copy all properties from source to target.
  function copy (source, target) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  function composeMeta (a, b) {
    if (a && typeof a === 'object') {
      if (typeof a.compose === 'function') { return a.compose(b); }
      var meta = {};
      copy(a, meta);
      copy(b, meta);
      return meta;
    }
    return b;
  }

  WrappedOperation.prototype.compose = function (other) {
    return new WrappedOperation(
      this.wrapped.compose(other.wrapped),
      composeMeta(this.meta, other.meta)
    );
  };

  function transformMeta (meta, operation) {
    if (meta && typeof meta === 'object') {
      if (typeof meta.transform === 'function') {
        return meta.transform(operation);
      }
    }
    return meta;
  }

  WrappedOperation.transform = function (a, b) {
    var transform = a.wrapped.constructor.transform;
    var pair = transform(a.wrapped, b.wrapped);
    return [
      new WrappedOperation(pair[0], transformMeta(a.meta, b.wrapped)),
      new WrappedOperation(pair[1], transformMeta(b.meta, a.wrapped))
    ];
  };

  return WrappedOperation;

}());

var firepad = firepad || { };

firepad.UndoManager = (function () {
  'use strict';

  var NORMAL_STATE = 'normal';
  var UNDOING_STATE = 'undoing';
  var REDOING_STATE = 'redoing';

  // Create a new UndoManager with an optional maximum history size.
  function UndoManager (maxItems) {
    this.maxItems  = maxItems || 50;
    this.state = NORMAL_STATE;
    this.dontCompose = false;
    this.undoStack = [];
    this.redoStack = [];
  }

  // Add an operation to the undo or redo stack, depending on the current state
  // of the UndoManager. The operation added must be the inverse of the last
  // edit. When `compose` is true, compose the operation with the last operation
  // unless the last operation was alread pushed on the redo stack or was hidden
  // by a newer operation on the undo stack.
  UndoManager.prototype.add = function (operation, compose) {
    if (this.state === UNDOING_STATE) {
      this.redoStack.push(operation);
      this.dontCompose = true;
    } else if (this.state === REDOING_STATE) {
      this.undoStack.push(operation);
      this.dontCompose = true;
    } else {
      var undoStack = this.undoStack;
      if (!this.dontCompose && compose && undoStack.length > 0) {
        undoStack.push(operation.compose(undoStack.pop()));
      } else {
        undoStack.push(operation);
        if (undoStack.length > this.maxItems) { undoStack.shift(); }
      }
      this.dontCompose = false;
      this.redoStack = [];
    }
  };

  function transformStack (stack, operation) {
    var newStack = [];
    var Operation = operation.constructor;
    for (var i = stack.length - 1; i >= 0; i--) {
      var pair = Operation.transform(stack[i], operation);
      if (typeof pair[0].isNoop !== 'function' || !pair[0].isNoop()) {
        newStack.push(pair[0]);
      }
      operation = pair[1];
    }
    return newStack.reverse();
  }

  // Transform the undo and redo stacks against a operation by another client.
  UndoManager.prototype.transform = function (operation) {
    this.undoStack = transformStack(this.undoStack, operation);
    this.redoStack = transformStack(this.redoStack, operation);
  };

  // Perform an undo by calling a function with the latest operation on the undo
  // stack. The function is expected to call the `add` method with the inverse
  // of the operation, which pushes the inverse on the redo stack.
  UndoManager.prototype.performUndo = function (fn) {
    this.state = UNDOING_STATE;
    if (this.undoStack.length === 0) { throw new Error("undo not possible"); }
    fn(this.undoStack.pop());
    this.state = NORMAL_STATE;
  };

  // The inverse of `performUndo`.
  UndoManager.prototype.performRedo = function (fn) {
    this.state = REDOING_STATE;
    if (this.redoStack.length === 0) { throw new Error("redo not possible"); }
    fn(this.redoStack.pop());
    this.state = NORMAL_STATE;
  };

  // Is the undo stack not empty?
  UndoManager.prototype.canUndo = function () {
    return this.undoStack.length !== 0;
  };

  // Is the redo stack not empty?
  UndoManager.prototype.canRedo = function () {
    return this.redoStack.length !== 0;
  };

  // Whether the UndoManager is currently performing an undo.
  UndoManager.prototype.isUndoing = function () {
    return this.state === UNDOING_STATE;
  };

  // Whether the UndoManager is currently performing a redo.
  UndoManager.prototype.isRedoing = function () {
    return this.state === REDOING_STATE;
  };

  return UndoManager;

}());

var firepad = firepad || { };
firepad.Client = (function () {
  'use strict';

  // Client constructor
  function Client () {
    this.state = synchronized_; // start state
  }

  Client.prototype.setState = function (state) {
    this.state = state;
  };

  // Call this method when the user changes the document.
  Client.prototype.applyClient = function (operation) {
    this.setState(this.state.applyClient(this, operation));
  };

  // Call this method with a new operation from the server
  Client.prototype.applyServer = function (operation) {
    this.setState(this.state.applyServer(this, operation));
  };

  Client.prototype.serverAck = function () {
    this.setState(this.state.serverAck(this));
  };

  Client.prototype.serverRetry = function() {
    this.setState(this.state.serverRetry(this));
  };

  // Override this method.
  Client.prototype.sendOperation = function (operation) {
    throw new Error("sendOperation must be defined in child class");
  };

  // Override this method.
  Client.prototype.applyOperation = function (operation) {
    throw new Error("applyOperation must be defined in child class");
  };


  // In the 'Synchronized' state, there is no pending operation that the client
  // has sent to the server.
  function Synchronized () {}
  Client.Synchronized = Synchronized;

  Synchronized.prototype.applyClient = function (client, operation) {
    // When the user makes an edit, send the operation to the server and
    // switch to the 'AwaitingConfirm' state
    client.sendOperation(operation);
    return new AwaitingConfirm(operation);
  };

  Synchronized.prototype.applyServer = function (client, operation) {
    // When we receive a new operation from the server, the operation can be
    // simply applied to the current document
    client.applyOperation(operation);
    return this;
  };

  Synchronized.prototype.serverAck = function (client) {
    throw new Error("There is no pending operation.");
  };

  Synchronized.prototype.serverRetry = function(client) {
    throw new Error("There is no pending operation.");
  };

  // Singleton
  var synchronized_ = new Synchronized();


  // In the 'AwaitingConfirm' state, there's one operation the client has sent
  // to the server and is still waiting for an acknowledgement.
  function AwaitingConfirm (outstanding) {
    // Save the pending operation
    this.outstanding = outstanding;
  }
  Client.AwaitingConfirm = AwaitingConfirm;

  AwaitingConfirm.prototype.applyClient = function (client, operation) {
    // When the user makes an edit, don't send the operation immediately,
    // instead switch to 'AwaitingWithBuffer' state
    return new AwaitingWithBuffer(this.outstanding, operation);
  };

  AwaitingConfirm.prototype.applyServer = function (client, operation) {
    // This is another client's operation. Visualization:
    //
    //                   /\
    // this.outstanding /  \ operation
    //                 /    \
    //                 \    /
    //  pair[1]         \  / pair[0] (new outstanding)
    //  (can be applied  \/
    //  to the client's
    //  current document)
    var pair = operation.constructor.transform(this.outstanding, operation);
    client.applyOperation(pair[1]);
    return new AwaitingConfirm(pair[0]);
  };

  AwaitingConfirm.prototype.serverAck = function (client) {
    // The client's operation has been acknowledged
    // => switch to synchronized state
    return synchronized_;
  };

  AwaitingConfirm.prototype.serverRetry = function (client) {
    client.sendOperation(this.outstanding);
    return this;
  };

  // In the 'AwaitingWithBuffer' state, the client is waiting for an operation
  // to be acknowledged by the server while buffering the edits the user makes
  function AwaitingWithBuffer (outstanding, buffer) {
    // Save the pending operation and the user's edits since then
    this.outstanding = outstanding;
    this.buffer = buffer;
  }
  Client.AwaitingWithBuffer = AwaitingWithBuffer;

  AwaitingWithBuffer.prototype.applyClient = function (client, operation) {
    // Compose the user's changes onto the buffer
    var newBuffer = this.buffer.compose(operation);
    return new AwaitingWithBuffer(this.outstanding, newBuffer);
  };

  AwaitingWithBuffer.prototype.applyServer = function (client, operation) {
    // Operation comes from another client
    //
    //                       /\
    //     this.outstanding /  \ operation
    //                     /    \
    //                    /\    /
    //       this.buffer /  \* / pair1[0] (new outstanding)
    //                  /    \/
    //                  \    /
    //          pair2[1] \  / pair2[0] (new buffer)
    // the transformed    \/
    // operation -- can
    // be applied to the
    // client's current
    // document
    //
    // * pair1[1]
    var transform = operation.constructor.transform;
    var pair1 = transform(this.outstanding, operation);
    var pair2 = transform(this.buffer, pair1[1]);
    client.applyOperation(pair2[1]);
    return new AwaitingWithBuffer(pair1[0], pair2[0]);
  };

  AwaitingWithBuffer.prototype.serverRetry = function (client) {
    // Merge with our buffer and resend.
    var outstanding = this.outstanding.compose(this.buffer);
    client.sendOperation(outstanding);
    return new AwaitingConfirm(outstanding);
  };

  AwaitingWithBuffer.prototype.serverAck = function (client) {
    // The pending operation has been acknowledged
    // => send buffer
    client.sendOperation(this.buffer);
    return new AwaitingConfirm(this.buffer);
  };

  return Client;

}());

var firepad = firepad || { };

firepad.EditorClient = (function () {
  'use strict';

  var Client = firepad.Client;
  var Cursor = firepad.Cursor;
  var UndoManager = firepad.UndoManager;
  var WrappedOperation = firepad.WrappedOperation;

  function SelfMeta (cursorBefore, cursorAfter) {
    this.cursorBefore = cursorBefore;
    this.cursorAfter  = cursorAfter;
  }

  SelfMeta.prototype.invert = function () {
    return new SelfMeta(this.cursorAfter, this.cursorBefore);
  };

  SelfMeta.prototype.compose = function (other) {
    return new SelfMeta(this.cursorBefore, other.cursorAfter);
  };

  SelfMeta.prototype.transform = function (operation) {
    return new SelfMeta(
      this.cursorBefore ? this.cursorBefore.transform(operation) : null,
      this.cursorAfter ? this.cursorAfter.transform(operation) : null
    );
  };

  function OtherClient (id, editorAdapter) {
    this.id = id;
    this.editorAdapter = editorAdapter;

    this.li = document.createElement('li');
  }

  OtherClient.prototype.setColor = function (color) {
    this.color = color;
  };

  OtherClient.prototype.updateCursor = function (cursor) {
    this.removeCursor();
    this.cursor = cursor;
    this.mark = this.editorAdapter.setOtherCursor(
      cursor,
      this.color,
      this.id
    );
  };

  OtherClient.prototype.removeCursor = function () {
    if (this.mark) { this.mark.clear(); }
  };

  function EditorClient (serverAdapter, editorAdapter) {
    Client.call(this);
    this.serverAdapter = serverAdapter;
    this.editorAdapter = editorAdapter;
    this.undoManager = new UndoManager();

    this.clients = { };

    var self = this;

    this.editorAdapter.registerCallbacks({
      change: function (operation, inverse) { self.onChange(operation, inverse); },
      cursorActivity: function () { self.onCursorActivity(); },
      blur: function () { self.onBlur(); },
      focus: function () { self.onFocus(); }
    });
    this.editorAdapter.registerUndo(function () { self.undo(); });
    this.editorAdapter.registerRedo(function () { self.redo(); });

    this.serverAdapter.registerCallbacks({
      ack: function () {
        self.serverAck();
        if (self.focused && self.state instanceof Client.Synchronized) {
          self.updateCursor();
          self.sendCursor(self.cursor);
        }
        self.emitStatus();
      },
      retry: function() { self.serverRetry(); },
      operation: function (operation) {
        self.applyServer(operation);
      },
      cursor: function (clientId, cursor, color) {
        if (self.serverAdapter.userId_ === clientId ||
            !(self.state instanceof Client.Synchronized)) {
          return;
        }
        var client = self.getClientObject(clientId);
        if (cursor) {
          if (color) client.setColor(color);
          client.updateCursor(Cursor.fromJSON(cursor));
        } else {
          client.removeCursor();
        }
      }
    });
  }

  inherit(EditorClient, Client);

  EditorClient.prototype.getClientObject = function (clientId) {
    var client = this.clients[clientId];
    if (client) { return client; }
    return this.clients[clientId] = new OtherClient(
      clientId,
      this.editorAdapter
    );
  };

  EditorClient.prototype.applyUnredo = function (operation) {
    this.undoManager.add(this.editorAdapter.invertOperation(operation));
    this.editorAdapter.applyOperation(operation.wrapped);
    this.cursor = operation.meta.cursorAfter;
    if (this.cursor)
      this.editorAdapter.setCursor(this.cursor);
    this.applyClient(operation.wrapped);
  };

  EditorClient.prototype.undo = function () {
    var self = this;
    if (!this.undoManager.canUndo()) { return; }
    this.undoManager.performUndo(function (o) { self.applyUnredo(o); });
  };

  EditorClient.prototype.redo = function () {
    var self = this;
    if (!this.undoManager.canRedo()) { return; }
    this.undoManager.performRedo(function (o) { self.applyUnredo(o); });
  };

  EditorClient.prototype.onChange = function (textOperation, inverse) {
    var cursorBefore = this.cursor;
    this.updateCursor();

    var compose = this.undoManager.undoStack.length > 0 &&
      inverse.shouldBeComposedWithInverted(last(this.undoManager.undoStack).wrapped);
    var inverseMeta = new SelfMeta(this.cursor, cursorBefore);
    this.undoManager.add(new WrappedOperation(inverse, inverseMeta), compose);
    this.applyClient(textOperation);
  };

  EditorClient.prototype.updateCursor = function () {
    this.cursor = this.editorAdapter.getCursor();
  };

  EditorClient.prototype.onCursorActivity = function () {
    var oldCursor = this.cursor;
    this.updateCursor();
    if (!this.focused || oldCursor && this.cursor.equals(oldCursor)) { return; }
    this.sendCursor(this.cursor);
  };

  EditorClient.prototype.onBlur = function () {
    this.cursor = null;
    this.sendCursor(null);
    this.focused = false;
  };

  EditorClient.prototype.onFocus = function () {
    this.focused = true;
    this.onCursorActivity();
  };

  EditorClient.prototype.sendCursor = function (cursor) {
    if (this.state instanceof Client.AwaitingWithBuffer) { return; }
    this.serverAdapter.sendCursor(cursor);
  };

  EditorClient.prototype.sendOperation = function (operation) {
    this.serverAdapter.sendOperation(operation);
    this.emitStatus();
  };

  EditorClient.prototype.applyOperation = function (operation) {
    this.editorAdapter.applyOperation(operation);
    this.updateCursor();
    this.undoManager.transform(new WrappedOperation(operation, null));
  };

  EditorClient.prototype.emitStatus = function() {
    var self = this;
    setTimeout(function() {
      self.trigger('synced', self.state instanceof Client.Synchronized);
    }, 0);
  };

  // Set Const.prototype.__proto__ to Super.prototype
  function inherit (Const, Super) {
    function F () {}
    F.prototype = Super.prototype;
    Const.prototype = new F();
    Const.prototype.constructor = Const;
  }

  function last (arr) { return arr[arr.length - 1]; }

  return EditorClient;
}());

firepad.utils.makeEventEmitter(firepad.EditorClient, ['synced']);

var ACEAdapter, firepad,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __slice = [].slice;

if (typeof firepad === "undefined" || firepad === null) {
  firepad = {};
}

firepad.ACEAdapter = ACEAdapter = (function() {
  ACEAdapter.prototype.ignoreChanges = false;

  function ACEAdapter(aceInstance) {
    this.onCursorActivity = __bind(this.onCursorActivity, this);
    this.onFocus = __bind(this.onFocus, this);
    this.onBlur = __bind(this.onBlur, this);
    this.onChange = __bind(this.onChange, this);
    var _ref;
    this.ace = aceInstance;
    this.aceSession = this.ace.getSession();
    this.aceDoc = this.aceSession.getDocument();
    this.aceDoc.setNewLineMode('unix');
    this.grabDocumentState();
    this.ace.on('change', this.onChange);
    this.ace.on('blur', this.onBlur);
    this.ace.on('focus', this.onFocus);
    this.aceSession.selection.on('changeCursor', this.onCursorActivity);
    if (this.aceRange == null) {
      this.aceRange = ((_ref = ace.require) != null ? _ref : require)("ace/range").Range;
    }
  }

  ACEAdapter.prototype.grabDocumentState = function() {
    this.lastDocLines = this.aceDoc.getAllLines();
    return this.lastCursorRange = this.aceSession.selection.getRange();
  };

  ACEAdapter.prototype.detach = function() {
    this.ace.removeListener('change', this.onChange);
    this.ace.removeListener('blur', this.onBlur);
    this.ace.removeListener('focus', this.onCursorActivity);
    return this.aceSession.selection.removeListener('changeCursor', this.onCursorActivity);
  };

  ACEAdapter.prototype.onChange = function(change) {
    var pair;
    if (!this.ignoreChanges) {
      pair = this.operationFromACEChange(change);
      this.trigger.apply(this, ['change'].concat(__slice.call(pair)));
      return this.grabDocumentState();
    }
  };

  ACEAdapter.prototype.onBlur = function() {
    if (this.ace.selection.isEmpty()) {
      return this.trigger('blur');
    }
  };

  ACEAdapter.prototype.onFocus = function() {
    return this.trigger('focus');
  };

  ACEAdapter.prototype.onCursorActivity = function() {
    var _this = this;
    return setTimeout((function() {
      return _this.trigger('cursorActivity');
    }), 0);
  };

  ACEAdapter.prototype.operationFromACEChange = function(change) {
    var action, delta, inverse, operation, restLength, start, text, _ref, _ref1;
    delta = change.data;
    if ((_ref = delta.action) === "insertLines" || _ref === "removeLines") {
      text = delta.lines.join("\n") + "\n";
      action = delta.action.replace("Lines", "");
    } else {
      text = delta.text.replace(this.aceDoc.getNewLineCharacter(), '\n');
      action = delta.action.replace("Text", "");
    }
    start = this.indexFromPos(delta.range.start);
    restLength = this.lastDocLines.join('\n').length - start;
    if (action === "remove") {
      restLength -= text.length;
    }
    operation = new firepad.TextOperation().retain(start).insert(text).retain(restLength);
    inverse = new firepad.TextOperation().retain(start)["delete"](text).retain(restLength);
    if (action === 'remove') {
      _ref1 = [inverse, operation], operation = _ref1[0], inverse = _ref1[1];
    }
    return [operation, inverse];
  };

  ACEAdapter.prototype.applyOperationToACE = function(operation) {
    var from, index, op, range, to, _i, _len, _ref;
    index = 0;
    _ref = operation.ops;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      op = _ref[_i];
      if (op.isRetain()) {
        index += op.chars;
      } else if (op.isInsert()) {
        this.aceDoc.insert(this.posFromIndex(index), op.text);
        index += op.text.length;
      } else if (op.isDelete()) {
        from = this.posFromIndex(index);
        to = this.posFromIndex(index + op.chars);
        range = this.aceRange.fromPoints(from, to);
        this.aceDoc.remove(range);
      }
    }
    return this.grabDocumentState();
  };

  ACEAdapter.prototype.posFromIndex = function(index) {
    var line, row, _i, _len, _ref;
    _ref = this.aceDoc.$lines;
    for (row = _i = 0, _len = _ref.length; _i < _len; row = ++_i) {
      line = _ref[row];
      if (index <= line.length) {
        break;
      }
      index -= line.length + 1;
    }
    return {
      row: row,
      column: index
    };
  };

  ACEAdapter.prototype.indexFromPos = function(pos, lines) {
    var i, index, _i, _ref;
    if (lines == null) {
      lines = this.lastDocLines;
    }
    index = 0;
    for (i = _i = 0, _ref = pos.row; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      index += this.lastDocLines[i].length + 1;
    }
    return index += pos.column;
  };

  ACEAdapter.prototype.getValue = function() {
    return this.aceDoc.getValue();
  };

  ACEAdapter.prototype.getCursor = function() {
    var e, e2, end, start, _ref, _ref1;
    try {
      start = this.indexFromPos(this.aceSession.selection.getRange().start, this.aceDoc.$lines);
      end = this.indexFromPos(this.aceSession.selection.getRange().end, this.aceDoc.$lines);
    } catch (_error) {
      e = _error;
      try {
        start = this.indexFromPos(this.lastCursorRange.start);
        end = this.indexFromPos(this.lastCursorRange.end);
      } catch (_error) {
        e2 = _error;
        console.log("Couldn't figure out the cursor range:", e2, "-- setting it to 0:0.");
        _ref = [0, 0], start = _ref[0], end = _ref[1];
      }
    }
    if (start > end) {
      _ref1 = [end, start], start = _ref1[0], end = _ref1[1];
    }
    return new firepad.Cursor(start, end);
  };

  ACEAdapter.prototype.setCursor = function(cursor) {
    var end, start, _ref;
    start = this.posFromIndex(cursor.position);
    end = this.posFromIndex(cursor.selectionEnd);
    if (cursor.position > cursor.selectionEnd) {
      _ref = [end, start], start = _ref[0], end = _ref[1];
    }
    return this.aceSession.selection.setSelectionRange(new this.aceRange(start.row, start.column, end.row, end.column));
  };

  ACEAdapter.prototype.setOtherCursor = function(cursor, color, clientId) {
    var clazz, css, cursorRange, end, justCursor, self, start, _ref,
      _this = this;
    if (this.otherCursors == null) {
      this.otherCursors = {};
    }
    cursorRange = this.otherCursors[clientId];
    if (cursorRange) {
      cursorRange.start.detach();
      cursorRange.end.detach();
      this.aceSession.removeMarker(cursorRange.id);
    }
    start = this.posFromIndex(cursor.position);
    end = this.posFromIndex(cursor.selectionEnd);
    if (cursor.selectionEnd < cursor.position) {
      _ref = [end, start], start = _ref[0], end = _ref[1];
    }
    clazz = "other-client-selection-" + (color.replace('#', ''));
    justCursor = cursor.position === cursor.selectionEnd;
    if (justCursor) {
      clazz = clazz.replace('selection', 'cursor');
    }
    css = "." + clazz + " {\n  position: absolute;\n  background-color: " + (justCursor ? 'transparent' : color) + ";\n  border-left: 2px solid " + color + ";\n}";
    this.addStyleRule(css);
    this.otherCursors[clientId] = cursorRange = new this.aceRange(start.row, start.column, end.row, end.column);
    self = this;
    cursorRange.clipRows = function() {
      var range;
      range = self.aceRange.prototype.clipRows.apply(this, arguments);
      range.isEmpty = function() {
        return false;
      };
      return range;
    };
    cursorRange.start = this.aceDoc.createAnchor(cursorRange.start);
    cursorRange.end = this.aceDoc.createAnchor(cursorRange.end);
    cursorRange.id = this.aceSession.addMarker(cursorRange, clazz, "text");
    return {
      clear: function() {
        cursorRange.start.detach();
        cursorRange.end.detach();
        return _this.aceSession.removeMarker(cursorRange.id);
      }
    };
  };

  ACEAdapter.prototype.addStyleRule = function(css) {
    var styleElement;
    if (typeof document === "undefined" || document === null) {
      return;
    }
    if (!this.addedStyleRules) {
      this.addedStyleRules = {};
      styleElement = document.createElement('style');
      document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
      this.addedStyleSheet = styleElement.sheet;
    }
    if (this.addedStyleRules[css]) {
      return;
    }
    this.addedStyleRules[css] = true;
    return this.addedStyleSheet.insertRule(css, 0);
  };

  ACEAdapter.prototype.registerCallbacks = function(callbacks) {
    this.callbacks = callbacks;
  };

  ACEAdapter.prototype.trigger = function() {
    var args, event, _ref, _ref1;
    event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return (_ref = this.callbacks) != null ? (_ref1 = _ref[event]) != null ? _ref1.apply(this, args) : void 0 : void 0;
  };

  ACEAdapter.prototype.applyOperation = function(operation) {
    if (!operation.isNoop()) {
      this.ignoreChanges = true;
    }
    this.applyOperationToACE(operation);
    return this.ignoreChanges = false;
  };

  ACEAdapter.prototype.registerUndo = function(undoFn) {
    return this.ace.undo = undoFn;
  };

  ACEAdapter.prototype.registerRedo = function(redoFn) {
    return this.ace.redo = redoFn;
  };

  ACEAdapter.prototype.invertOperation = function(operation) {
    return operation.invert(this.getValue());
  };

  return ACEAdapter;

})();

var firepad = firepad || { };

firepad.AttributeConstants = {
  BOLD: 'b',
  ITALIC: 'i',
  UNDERLINE: 'u',
  STRIKE: 's',
  FONT: 'f',
  FONT_SIZE: 'fs',
  COLOR: 'c',
  BACKGROUND_COLOR: 'bc',
  ENTITY_SENTINEL: 'ent',

// Line Attributes
  LINE_SENTINEL: 'l',
  LINE_INDENT: 'li',
  LINE_ALIGN: 'la',
  LIST_TYPE: 'lt'
};

firepad.sentinelConstants = {
  // A special character we insert at the beginning of lines so we can attach attributes to it to represent
  // "line attributes."  E000 is from the unicode "private use" range.
  LINE_SENTINEL_CHARACTER:   '\uE000',

  // A special character used to represent any "entity" inserted into the document (e.g. an image).
  ENTITY_SENTINEL_CHARACTER: '\uE001'
};

var firepad = firepad || { };

firepad.EntityManager = (function () {
  var utils = firepad.utils;

  function EntityManager() {
    this.entities_ = {};

    var attrs = ['src', 'alt', 'width', 'height', 'style', 'class'];
    this.register('img', {
      render: function(info) {
        utils.assert(info.src, "image entity should have 'src'!");
        var attrs = ['src', 'alt', 'width', 'height', 'style', 'class'];
        var html = '<img ';
        for(var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          if (attr in info) {
            html += ' ' + attr + '="' + info[attr] + '"';
          }
        }
        html += ">";
        return html;
      },
      fromElement: function(element) {
        var info = {};
        for(var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          if (element.hasAttribute(attr)) {
            info[attr] = element.getAttribute(attr);
          }
        }
        return info;
      }
    });
  }

  EntityManager.prototype.register = function(type, options) {
    firepad.utils.assert(options.render, "Entity options should include a 'render' function!");
    firepad.utils.assert(options.fromElement, "Entity options should include a 'fromElement' function!");
    this.entities_[type] = options;
  };

  EntityManager.prototype.renderToElement = function(entity, entityHandle) {
    return this.tryRenderToElement_(entity, 'render', entityHandle);
  };

  EntityManager.prototype.exportToElement = function(entity) {
    // Turns out 'export' is a reserved keyword, so 'getHtml' is preferable.
    var elt = this.tryRenderToElement_(entity, 'export') ||
              this.tryRenderToElement_(entity, 'getHtml') ||
              this.tryRenderToElement_(entity, 'render');
    elt.setAttribute('data-firepad-entity', entity.type);
    return elt;
  };

  /* Updates a DOM element to reflect the given entity.
     If the entity doesn't support the update method, it is fully
     re-rendered.
  */
  EntityManager.prototype.updateElement = function(entity, element) {
    var type = entity.type;
    var info = entity.info;
    if (this.entities_[type] && typeof(this.entities_[type].update) != 'undefined') {
      this.entities_[type].update(info, element);
    }
  };

  EntityManager.prototype.fromElement = function(element) {
    var type = element.getAttribute('data-firepad-entity');

    // HACK.  This should be configurable through entity registration.
    if (!type)
      type = element.nodeName.toLowerCase();

    if (type && this.entities_[type]) {
      var info = this.entities_[type].fromElement(element);
      return new firepad.Entity(type, info);
    }
  };

  EntityManager.prototype.tryRenderToElement_ = function(entity, renderFn, entityHandle) {
    var type = entity.type, info = entity.info;
    if (this.entities_[type] && this.entities_[type][renderFn]) {
      var windowDocument = firepad.document || (window && window.document);
      var res = this.entities_[type][renderFn](info, entityHandle, windowDocument);
      if (res) {
        if (typeof res === 'string') {
          var div = (firepad.document || document).createElement('div');
          div.innerHTML = res;
          return div.childNodes[0];
        } else if (typeof res === 'object') {
          firepad.utils.assert(typeof res.nodeType !== 'undefined', 'Error rendering ' + type + ' entity.  render() function' +
              ' must return an html string or a DOM element.');
          return res;
        }
      }
    }
  };

  EntityManager.prototype.entitySupportsUpdate = function(entityType) {
    return this.entities_[entityType] && this.entities_[entityType]['update'];
  };

  return EntityManager;
})();

var firepad = firepad || { };

/**
 * Object to represent an Entity.
 */
firepad.Entity = (function() {
  var ATTR = firepad.AttributeConstants;
  var SENTINEL = ATTR.ENTITY_SENTINEL;
  var PREFIX = SENTINEL + '_';

  function Entity(type, info) {
    // Allow calling without new.
    if (!(this instanceof Entity)) { return new Entity(type, info); }

    this.type = type;
    this.info = info || { };
  }

  Entity.prototype.toAttributes = function() {
    var attrs = { };
    attrs[SENTINEL] = this.type;

    for(var attr in this.info) {
      attrs[PREFIX + attr] = this.info[attr];
    }

    return attrs;
  };

  Entity.fromAttributes = function(attributes) {
    var type = attributes[SENTINEL];
    var info = { };
    for(var attr in attributes) {
      if (attr.indexOf(PREFIX) === 0) {
        info[attr.substr(PREFIX.length)] = attributes[attr];
      }
    }

    return new Entity(type, info);
  };

  return Entity;
})();

var firepad = firepad || { };

firepad.RichTextCodeMirror = (function () {
  var AnnotationList = firepad.AnnotationList;
  var Span = firepad.Span;
  var utils = firepad.utils;
  var ATTR = firepad.AttributeConstants;
  var RichTextClassPrefixDefault = 'cmrt-';
  var RichTextOriginPrefix = 'cmrt-';

  // These attributes will have styles generated dynamically in the page.
  var DynamicStyleAttributes = {
    'c' : 'color',
    'bc': 'background-color',
    'fs' : 'font-size',
    'li' : function(indent) { return 'padding-left: ' + (indent * 40) + 'px'; }
  };

  // A cache of dynamically-created styles so we can re-use them.
  var StyleCache_ = {};

  function RichTextCodeMirror(codeMirror, entityManager, options) {
    this.codeMirror = codeMirror;
    this.options_ = options || { };
    this.entityManager_ = entityManager;
    this.currentAttributes_ = null;

    var self = this;
    this.annotationList_ = new AnnotationList(
        function(oldNodes, newNodes) { self.onAnnotationsChanged_(oldNodes, newNodes); });

    // Ensure annotationList is in sync with any existing codemirror contents.
    this.initAnnotationList_();

    bind(this, 'onCodeMirrorBeforeChange_');
    bind(this, 'onCodeMirrorChange_');
    bind(this, 'onCursorActivity_');

    if (/^4\./.test(CodeMirror.version)) {
      this.codeMirror.on('changes', this.onCodeMirrorChange_);
    } else {
      this.codeMirror.on('change', this.onCodeMirrorChange_);
    }
    this.codeMirror.on('beforeChange', this.onCodeMirrorBeforeChange_);
    this.codeMirror.on('cursorActivity', this.onCursorActivity_);

    this.changeId_ = 0;
    this.outstandingChanges_ = { };
    this.dirtyLines_ = [];
  }
  utils.makeEventEmitter(RichTextCodeMirror, ['change', 'attributesChange', 'newLine']);


  var LineSentinelCharacter   = firepad.sentinelConstants.LINE_SENTINEL_CHARACTER;
  var EntitySentinelCharacter = firepad.sentinelConstants.ENTITY_SENTINEL_CHARACTER;

  RichTextCodeMirror.prototype.detach = function() {
    this.codeMirror.off('beforeChange', this.onCodeMirrorBeforeChange_);
    this.codeMirror.off('change', this.onCodeMirrorChange_);
    this.codeMirror.off('changes', this.onCodeMirrorChange_);
    this.codeMirror.off('cursorActivity', this.onCursorActivity_);
    this.clearAnnotations_();
  };

  RichTextCodeMirror.prototype.toggleAttribute = function(attribute, value) {
    var trueValue = value || true;
    if (this.emptySelection_()) {
      var attrs = this.getCurrentAttributes_();
      if (attrs[attribute] === trueValue) {
        delete attrs[attribute];
      } else {
        attrs[attribute] = trueValue;
      }
      this.currentAttributes_ = attrs;
    } else {
      var attributes = this.getCurrentAttributes_();
      var newValue = (attributes[attribute] !== trueValue) ? trueValue : false;
      this.setAttribute(attribute, newValue);
    }
  };

  RichTextCodeMirror.prototype.setAttribute = function(attribute, value) {
    var cm = this.codeMirror;
    if (this.emptySelection_()) {
      var attrs = this.getCurrentAttributes_();
      if (value === false) {
        delete attrs[attribute];
      } else {
        attrs[attribute] = value;
      }
      this.currentAttributes_ = attrs;
    } else {
      this.updateTextAttributes(cm.indexFromPos(cm.getCursor('start')), cm.indexFromPos(cm.getCursor('end')),
        function(attributes) {
          if (value === false) {
            delete attributes[attribute];
          } else {
            attributes[attribute] = value;
          }
        });

      this.updateCurrentAttributes_();
    }
  };

  RichTextCodeMirror.prototype.updateTextAttributes = function(start, end, updateFn, origin, doLineAttributes) {
    var newChanges = [];
    var pos = start, self = this;
    this.annotationList_.updateSpan(new Span(start, end - start), function(annotation, length) {
      var attributes = { };
      for(var attr in annotation.attributes) {
        attributes[attr] = annotation.attributes[attr];
      }

      // Don't modify if this is a line sentinel.
      if (!attributes[ATTR.LINE_SENTINEL] || doLineAttributes)
        updateFn(attributes);

      // changedAttributes will be the attributes we changed, with their new values.
      // changedAttributesInverse will be the attributes we changed, with their old values.
      var changedAttributes = { }, changedAttributesInverse = { };
      self.computeChangedAttributes_(annotation.attributes, attributes, changedAttributes, changedAttributesInverse);
      if (!emptyAttributes(changedAttributes)) {
        newChanges.push({ start: pos, end: pos + length, attributes: changedAttributes, attributesInverse: changedAttributesInverse, origin: origin });
      }

      pos += length;
      return new RichTextAnnotation(attributes);
    });

    if (newChanges.length > 0) {
      this.trigger('attributesChange', this, newChanges);
    }
  };

  RichTextCodeMirror.prototype.computeChangedAttributes_ = function(oldAttrs, newAttrs, changed, inverseChanged) {
    var attrs = { }, attr;
    for(attr in oldAttrs) { attrs[attr] = true; }
    for(attr in newAttrs) { attrs[attr] = true; }

    for (attr in attrs) {
      if (!(attr in newAttrs)) {
        // it was removed.
        changed[attr] = false;
        inverseChanged[attr] = oldAttrs[attr];
      } else if (!(attr in oldAttrs)) {
        // it was added.
        changed[attr] = newAttrs[attr];
        inverseChanged[attr] = false;
      } else if (oldAttrs[attr] !== newAttrs[attr]) {
        // it was changed.
        changed[attr] = newAttrs[attr];
        inverseChanged[attr] = oldAttrs[attr];
      }
    }
  };

  RichTextCodeMirror.prototype.toggleLineAttribute = function(attribute, value) {
    var currentAttributes = this.getCurrentLineAttributes_();
    var newValue;
    if (!(attribute in currentAttributes) || currentAttributes[attribute] !== value) {
      newValue = value;
    } else {
      newValue = false;
    }
    this.setLineAttribute(attribute, newValue);
  };

  RichTextCodeMirror.prototype.setLineAttribute = function(attribute, value) {
    this.updateLineAttributesForSelection(function(attributes) {
      if (value === false) {
        delete attributes[attribute];
      } else {
        attributes[attribute] = value;
      }
    });
  };

  RichTextCodeMirror.prototype.updateLineAttributesForSelection = function(updateFn) {
    var cm = this.codeMirror;
    var start = cm.getCursor('start'), end = cm.getCursor('end');
    var startLine = start.line, endLine = end.line;
    var endLineText = cm.getLine(endLine);
    var endsAtBeginningOfLine = this.areLineSentinelCharacters_(endLineText.substr(0, end.ch));
    if (endLine > startLine && endsAtBeginningOfLine) {
      // If the selection ends at the beginning of a line, don't include that line.
      endLine--;
    }

    this.updateLineAttributes(startLine, endLine, updateFn);
  };

  RichTextCodeMirror.prototype.updateLineAttributes = function(startLine, endLine, updateFn) {
    // TODO: Batch this into a single operation somehow.
    for(var line = startLine; line <= endLine; line++) {
      var text = this.codeMirror.getLine(line);
      var lineStartIndex = this.codeMirror.indexFromPos({line: line, ch: 0});
      // Create line sentinel character if necessary.
      if (text[0] !== LineSentinelCharacter) {
        var attributes = { };
        attributes[ATTR.LINE_SENTINEL] = true;
        updateFn(attributes);
        this.insertText(lineStartIndex, LineSentinelCharacter, attributes);
      } else {
        this.updateTextAttributes(lineStartIndex, lineStartIndex + 1, updateFn, /*origin=*/null, /*doLineAttributes=*/true);
      }
    }
  };

  RichTextCodeMirror.prototype.replaceText = function(start, end, text, attributes, origin) {
    this.changeId_++;
    var newOrigin = RichTextOriginPrefix + this.changeId_;
    this.outstandingChanges_[newOrigin] = { origOrigin: origin, attributes: attributes };

    var cm = this.codeMirror;
    var from = cm.posFromIndex(start);
    var to = typeof end === 'number' ? cm.posFromIndex(end) : null;
    cm.replaceRange(text, from, to, newOrigin);
  };

  RichTextCodeMirror.prototype.insertText = function(index, text, attributes, origin) {
    var cm = this.codeMirror;
    var cursor = cm.getCursor();
    var resetCursor = origin == 'RTCMADAPTER' && !cm.somethingSelected() && index == cm.indexFromPos(cursor);
    this.replaceText(index, null, text, attributes, origin);
    if (resetCursor) cm.setCursor(cursor);
  };

  RichTextCodeMirror.prototype.removeText = function(start, end, origin) {
    var cm = this.codeMirror;
    cm.replaceRange("", cm.posFromIndex(start), cm.posFromIndex(end), origin);
  };

  RichTextCodeMirror.prototype.insertEntityAtCursor = function(type, info, origin) {
    var cm = this.codeMirror;
    var index = cm.indexFromPos(cm.getCursor('head'));
    this.insertEntityAt(index, type, info, origin);
  };

  RichTextCodeMirror.prototype.insertEntityAt = function(index, type, info, origin) {
    var cm = this.codeMirror;
    this.insertEntity_(index, new firepad.Entity(type, info), origin);
  };

  RichTextCodeMirror.prototype.insertEntity_ = function(index, entity, origin) {
    this.replaceText(index, null, EntitySentinelCharacter, entity.toAttributes(), origin);
  };

  RichTextCodeMirror.prototype.getAttributeSpans = function(start, end) {
    var spans = [];
    var annotatedSpans = this.annotationList_.getAnnotatedSpansForSpan(new Span(start, end - start));
    for(var i  = 0; i < annotatedSpans.length; i++) {
      spans.push({ length: annotatedSpans[i].length, attributes: annotatedSpans[i].annotation.attributes });
    }

    return spans;
  };

  RichTextCodeMirror.prototype.end = function() {
    var lastLine = this.codeMirror.lineCount() - 1;
    return this.codeMirror.indexFromPos({line: lastLine, ch: this.codeMirror.getLine(lastLine).length});
  };

  RichTextCodeMirror.prototype.getRange = function(start, end) {
    var from = this.codeMirror.posFromIndex(start), to = this.codeMirror.posFromIndex(end);
    return this.codeMirror.getRange(from, to);
  };

  RichTextCodeMirror.prototype.initAnnotationList_ = function() {
    // Insert empty annotation span for existing content.
    var end = this.end();
    if (end !== 0) {
      this.annotationList_.insertAnnotatedSpan(new Span(0, end), new RichTextAnnotation());
    }
  };

  /**
   * Updates the nodes of an Annotation.
   * @param {Array.<OldAnnotatedSpan>} oldNodes The list of nodes to replace.
   * @param {Array.<NewAnnotatedSpan>} newNodes The new list of nodes.
   */
  RichTextCodeMirror.prototype.onAnnotationsChanged_ = function(oldNodes, newNodes) {
    var marker;

    var linesToReMark = { };

    // Update any entities in-place that we can.  This will remove them from the oldNodes/newNodes lists
    // so we don't remove and recreate them below.
    this.tryToUpdateEntitiesInPlace(oldNodes, newNodes);

    for(var i = 0; i < oldNodes.length; i++) {
      var attributes = oldNodes[i].annotation.attributes;
      if (ATTR.LINE_SENTINEL in attributes) {
        linesToReMark[this.codeMirror.posFromIndex(oldNodes[i].pos).line] = true;
      }
      marker = oldNodes[i].getAttachedObject();
      if (marker) {
        marker.clear();
      }
    }

    for (i = 0; i < newNodes.length; i++) {
      var annotation = newNodes[i].annotation;
      var forLine = (ATTR.LINE_SENTINEL in annotation.attributes);
      var entity = (ATTR.ENTITY_SENTINEL in annotation.attributes);

      var from = this.codeMirror.posFromIndex(newNodes[i].pos);
      if (forLine) {
        linesToReMark[from.line] = true;
      } else if (entity) {
        this.markEntity_(newNodes[i]);
      } else {
        var className = this.getClassNameForAttributes_(annotation.attributes);
        if (className !== '') {
          var to = this.codeMirror.posFromIndex(newNodes[i].pos + newNodes[i].length);
          marker = this.codeMirror.markText(from, to, { className: className });
          newNodes[i].attachObject(marker);
        }
      }
    }

    for(var line in linesToReMark) {
      this.dirtyLines_.push(this.codeMirror.getLineHandle(Number(line)));
      this.queueLineMarking_();
    }
  };

  RichTextCodeMirror.prototype.tryToUpdateEntitiesInPlace = function(oldNodes, newNodes) {
    // Loop over nodes in reverse order so we can easily splice them out as necessary.
    var oldNodesLen = oldNodes.length;
    while (oldNodesLen--) {
      var oldNode = oldNodes[oldNodesLen];
      var newNodesLen = newNodes.length;
      while (newNodesLen--) {
        var newNode = newNodes[newNodesLen];
        if (oldNode.pos == newNode.pos &&
            oldNode.annotation.attributes['ent'] &&
            oldNode.annotation.attributes['ent'] == newNode.annotation.attributes['ent']) {
          var entityType = newNode.annotation.attributes['ent'];
          if (this.entityManager_.entitySupportsUpdate(entityType)) {
            // Update it in place and remove the change from oldNodes / newNodes so we don't process it below.
            oldNodes.splice(oldNodesLen, 1);
            newNodes.splice(newNodesLen, 1);
            var marker = oldNode.getAttachedObject();
            marker.update(newNode.annotation.attributes);
            newNode.attachObject(marker);
          }
        }
      }
    }
  };

  RichTextCodeMirror.prototype.queueLineMarking_ = function() {
    if (this.lineMarkTimeout_ != null) return;
    var self = this;

    this.lineMarkTimeout_ = setTimeout(function() {
      self.lineMarkTimeout_ = null;
      var dirtyLineNumbers = [];
      for(var i = 0; i < self.dirtyLines_.length; i++) {
        var lineNum = self.codeMirror.getLineNumber(self.dirtyLines_[i]);
        dirtyLineNumbers.push(Number(lineNum));
      }
      self.dirtyLines_ = [];

      dirtyLineNumbers.sort(function(a, b) { return a - b; });
      var lastLineMarked = -1;
      for(i = 0; i < dirtyLineNumbers.length; i++) {
        var lineNumber = dirtyLineNumbers[i];
        if (lineNumber > lastLineMarked) {
          lastLineMarked = self.markLineSentinelCharactersForChangedLines_(lineNumber, lineNumber);
        }
      }
    }, 0);
  };

  RichTextCodeMirror.prototype.addStyleWithCSS_ = function(css) {
    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  };

  RichTextCodeMirror.prototype.getClassNameForAttributes_ = function(attributes) {
    var globalClassName = '';
    for (var attr in attributes) {
      var val = attributes[attr];
      if (attr === ATTR.LINE_SENTINEL) {
        firepad.utils.assert(val === true, "LINE_SENTINEL attribute should be true if it exists.");
      } else {
        var className = (this.options_['cssPrefix'] || RichTextClassPrefixDefault) + attr;
        if (val !== true) {
          // Append "px" to font size if it's missing.
          // Probably could be removed now as parseHtml automatically adds px when required
          if (attr === ATTR.FONT_SIZE && typeof val !== "string") {
            val = val + "px";
          }

          var classVal = val.toString().toLowerCase().replace(/[^a-z0-9-_]/g, '-');
          className += '-' + classVal;
          if (DynamicStyleAttributes[attr]) {
            if (!StyleCache_[attr]) StyleCache_[attr] = {};
            if (!StyleCache_[attr][classVal]) {
              StyleCache_[attr][classVal] = true;
              var dynStyle = DynamicStyleAttributes[attr];
              var css = (typeof dynStyle === 'function') ?
                  dynStyle(val) :
                  dynStyle + ": " + val;

              var selector = (attr == ATTR.LINE_INDENT) ?
                  'pre.' + className :
                  '.' + className;

              this.addStyleWithCSS_(selector + ' { ' + css + ' }');
            }
          }
        }
        globalClassName = globalClassName + ' ' + className;
      }
    }
    return globalClassName;
  };

  RichTextCodeMirror.prototype.markEntity_ = function(annotationNode) {
    var attributes = annotationNode.annotation.attributes;
    var entity = firepad.Entity.fromAttributes(attributes);
    var cm = this.codeMirror;
    var self = this;

    var markers = [];
    for(var i = 0; i < annotationNode.length; i++) {
      var from = cm.posFromIndex(annotationNode.pos + i);
      var to = cm.posFromIndex(annotationNode.pos + i + 1);

      var options = { collapsed: true, atomic: true, inclusiveLeft: false, inclusiveRight: false };

      var entityHandle = this.createEntityHandle_(entity, annotationNode.pos);

      var element = this.entityManager_.renderToElement(entity, entityHandle);
      if (element) {
        options.replacedWith = element;
      }
      var marker = cm.markText(from, to, options);
      markers.push(marker);
      entityHandle.setMarker(marker);
    }

    annotationNode.attachObject({
      clear: function() {
        for(var i = 0; i < markers.length; i++) {
          markers[i].clear();
        }
      },

      /**
       * Updates the attributes of all the AnnotationNode entities.
       * @param {Object.<string, string>} info The full list of new
       *     attributes to apply.
       */
      update: function(info) {
        var entity = firepad.Entity.fromAttributes(info);
        for(var i = 0; i < markers.length; i++) {
          self.entityManager_.updateElement(entity, markers[i].replacedWith);
        }
      }
    });

    // This probably shouldn't be necessary.  There must be a lurking CodeMirror bug.
    this.queueRefresh_();
  };

  RichTextCodeMirror.prototype.queueRefresh_ = function() {
    var self = this;
    if (!this.refreshTimer_) {
      this.refreshTimer_ = setTimeout(function() {
        self.codeMirror.refresh();
        self.refreshTimer_ = null;
      }, 0);
    }
  };

  RichTextCodeMirror.prototype.createEntityHandle_ = function(entity, location) {
    var marker = null;
    var self = this;

    function find() {
      if (marker) {
        var where = marker.find();
        return where ? self.codeMirror.indexFromPos(where.from) : null;
      } else {
        return location;
      }
    }

    function remove() {
      var at = find();
      if (at != null) {
        self.codeMirror.focus();
        self.removeText(at, at + 1);
      }
    }

    /**
     * Updates the attributes of an Entity.  Will call .update() if the entity supports it,
     * else it'll just remove / re-create the entity.
     * @param {Object.<string, string>} info The full list of new
     *     attributes to apply.
     */
    function replace(info) {
      var ATTR = firepad.AttributeConstants;
      var SENTINEL = ATTR.ENTITY_SENTINEL;
      var PREFIX = SENTINEL + '_';

      var at = find();

      self.updateTextAttributes(at, at+1, function(attrs) {
        for (var member in attrs) {
          delete attrs[member];
        }
        attrs[SENTINEL] = entity.type;

        for(var attr in info) {
          attrs[PREFIX + attr] = info[attr];
        }
      });
    }

    function setMarker(m) {
      marker = m;
    }

    return { find: find, remove: remove, replace: replace,
             setMarker: setMarker };
  };

  RichTextCodeMirror.prototype.lineClassRemover_ = function(lineNum) {
    var cm = this.codeMirror;
    var lineHandle = cm.getLineHandle(lineNum);
    return {
      clear: function() {
        // HACK to remove all classes (since CodeMirror treats this as a regex internally).
        cm.removeLineClass(lineHandle, "text", ".*");
      }
    }
  };

  RichTextCodeMirror.prototype.emptySelection_ = function() {
    var start = this.codeMirror.getCursor('start'), end = this.codeMirror.getCursor('end');
    return (start.line === end.line && start.ch === end.ch);
  };

  RichTextCodeMirror.prototype.onCodeMirrorBeforeChange_ = function(cm, change) {
    // Remove LineSentinelCharacters from incoming input (e.g copy/pasting)
    if (change.origin === '+input' || change.origin === 'paste') {
      var newText = [];
      for(var i = 0; i < change.text.length; i++) {
        var t = change.text[i];
        t = t.replace(new RegExp('[' + LineSentinelCharacter + EntitySentinelCharacter + ']', 'g'), '');
        newText.push(t);
      }
      change.update(change.from, change.to, newText);
    }
  };

  function cmpPos (a, b) {
    return (a.line - b.line) || (a.ch - b.ch);
  }
  function posEq (a, b) { return cmpPos(a, b) === 0; }
  function posLe (a, b) { return cmpPos(a, b) <= 0; }

  function last (arr) { return arr[arr.length - 1]; }

  function sumLengths (strArr) {
    if (strArr.length === 0) { return 0; }
    var sum = 0;
    for (var i = 0; i < strArr.length; i++) { sum += strArr[i].length; }
    return sum + strArr.length - 1;
  }

  RichTextCodeMirror.prototype.onCodeMirrorChange_ = function(cm, cmChanges) {
    // Handle single change objects and linked lists of change objects.
    if (typeof cmChanges.from === 'object') {
      var changeArray = [];
      while (cmChanges) {
        changeArray.push(cmChanges);
        cmChanges = cmChanges.next;
      }
      cmChanges = changeArray;
    }

    var changes = this.convertCoordinateSystemForChanges_(cmChanges);
    var newChanges = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var start = change.start, end = change.end, text = change.text, removed = change.removed, origin = change.origin;

      // When text with multiple sets of attributes on it is removed, we need to split it into separate remove changes.
      if (removed.length > 0) {
        var oldAnnotationSpans = this.annotationList_.getAnnotatedSpansForSpan(new Span(start, removed.length));
        var removedPos = 0;
        for(var j = 0; j < oldAnnotationSpans.length; j++) {
          var span = oldAnnotationSpans[j];
          newChanges.push({ start: start, end: start + span.length, removedAttributes: span.annotation.attributes,
            removed: removed.substr(removedPos, span.length), attributes: { }, text: "", origin: change.origin });
          removedPos += span.length;
        }

        this.annotationList_.removeSpan(new Span(start, removed.length));
      }

      if (text.length > 0) {
        var attributes;
        // TODO: Handle 'paste' differently?
        if (change.origin === '+input' || change.origin === 'paste') {
          attributes = this.currentAttributes_ || { };
        } else if (origin in this.outstandingChanges_) {
          attributes = this.outstandingChanges_[origin].attributes;
          origin = this.outstandingChanges_[origin].origOrigin;
          delete this.outstandingChanges_[origin];
        } else {
          attributes = {};
        }

        this.annotationList_.insertAnnotatedSpan(new Span(start, text.length), new RichTextAnnotation(attributes));

        newChanges.push({ start: start, end: start, removedAttributes: { }, removed: "", text: text,
          attributes: attributes, origin: origin });
      }
    }

    this.markLineSentinelCharactersForChanges_(cmChanges);

    if (newChanges.length > 0) {
      this.trigger('change', this, newChanges);
    }
  };

  RichTextCodeMirror.prototype.convertCoordinateSystemForChanges_ = function(changes) {
    // We have to convert the positions in the pre-change coordinate system to indexes.
    // CodeMirror's `indexFromPos` method does this for the current state of the editor.
    // We can use the information of a single change object to convert a post-change
    // coordinate system to a pre-change coordinate system. We can now proceed inductively
    // to get a pre-change coordinate system for all changes in the linked list.  A
    // disadvantage of this approach is its complexity `O(n^2)` in the length of the
    // linked list of changes.

    var self = this;
    var indexFromPos = function (pos) {
      return self.codeMirror.indexFromPos(pos);
    };

    function updateIndexFromPos (indexFromPos, change) {
      return function (pos) {
        if (posLe(pos, change.from)) { return indexFromPos(pos); }
        if (posLe(change.to, pos)) {
          return indexFromPos({
            line: pos.line + change.text.length - 1 - (change.to.line - change.from.line),
            ch: (change.to.line < pos.line) ?
                pos.ch :
                (change.text.length <= 1) ?
                    pos.ch - (change.to.ch - change.from.ch) + sumLengths(change.text) :
                    pos.ch - change.to.ch + last(change.text).length
          }) + sumLengths(change.removed) - sumLengths(change.text);
        }
        if (change.from.line === pos.line) {
          return indexFromPos(change.from) + pos.ch - change.from.ch;
        }
        return indexFromPos(change.from) +
            sumLengths(change.removed.slice(0, pos.line - change.from.line)) +
            1 + pos.ch;
      };
    }

    var newChanges = [];
    for (var i = changes.length - 1; i >= 0; i--) {
      var change = changes[i];
      indexFromPos = updateIndexFromPos(indexFromPos, change);

      var start = indexFromPos(change.from);

      var removedText = change.removed.join('\n');
      var text = change.text.join('\n');
      newChanges.unshift({ start: start, end: start + removedText.length, removed: removedText, text: text,
        origin: change.origin});
    }
    return newChanges;
  };

  /**
   * Detects whether any line sentinel characters were added or removed by the change and if so,
   * re-marks line sentinel characters on the affected range of lines.
   * @param changes
   * @private
   */
  RichTextCodeMirror.prototype.markLineSentinelCharactersForChanges_ = function(changes) {
    // TODO: This doesn't handle multiple changes correctly (overlapping, out-of-oder, etc.).
    // But In practice, people using firepad for rich-text editing don't batch multiple changes
    // together, so this isn't quite as bad as it seems.
    var startLine = Number.MAX_VALUE, endLine = -1;

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var line = change.from.line, ch = change.from.ch;

      if (change.removed.length > 1 || change.removed[0].indexOf(LineSentinelCharacter) >= 0) {
        // We removed 1+ newlines or line sentinel characters.
        startLine = Math.min(startLine, line);
        endLine = Math.max(endLine, line);
      }

      if (change.text.length > 1) { // 1+ newlines
        startLine = Math.min(startLine, line);
        endLine = Math.max(endLine, line + change.text.length - 1);
      } else if (change.text[0].indexOf(LineSentinelCharacter) >= 0) {
        startLine = Math.min(startLine, line);
        endLine = Math.max(endLine, line);
      }
    }

    // HACK: Because the above code doesn't handle multiple changes correctly, endLine might be invalid.  To
    // avoid crashing, we just cap it at the line count.
    endLine = Math.min(endLine, this.codeMirror.lineCount() - 1);

    this.markLineSentinelCharactersForChangedLines_(startLine, endLine);
  };

  RichTextCodeMirror.prototype.markLineSentinelCharactersForChangedLines_ = function(startLine, endLine) {
    // Back up to first list item.
    if (startLine < Number.MAX_VALUE) {
      while(startLine > 0 && this.lineIsListItemOrIndented_(startLine-1)) {
        startLine--;
      }
    }

    // Advance to last list item.
    if (endLine > -1) {
      var lineCount = this.codeMirror.lineCount();
      while (endLine + 1 < lineCount && this.lineIsListItemOrIndented_(endLine+1)) {
        endLine++;
      }
    }

    // keeps track of the list number at each indent level.
    var listNumber = [];

    var cm = this.codeMirror;
    for(var line = startLine; line <= endLine; line++) {
      var text = cm.getLine(line);

      // Remove any existing line classes.
      var lineHandle = cm.getLineHandle(line);
      cm.removeLineClass(lineHandle, "text", ".*");

      if (text.length > 0) {
        var markIndex = text.indexOf(LineSentinelCharacter);
        while (markIndex >= 0) {
          var markStartIndex = markIndex;

          // Find the end of this series of sentinel characters, and remove any existing markers.
          while (markIndex < text.length && text[markIndex] === LineSentinelCharacter) {
            var marks = cm.findMarksAt({ line: line, ch: markIndex });
            for(var i = 0; i < marks.length; i++) {
              if (marks[i].isForLineSentinel) {
                marks[i].clear();
              }
            }

            markIndex++;
          }

          this.markLineSentinelCharacters_(line, markStartIndex, markIndex, listNumber);
          markIndex = text.indexOf(LineSentinelCharacter, markIndex);
        }
      } else {
        // Reset all indents.
        listNumber = [];
      }
    }
    return endLine;
  };

  RichTextCodeMirror.prototype.markLineSentinelCharacters_ = function(line, startIndex, endIndex, listNumber) {
    var cm = this.codeMirror;
    // If the mark is at the beginning of the line and it represents a list element, we need to replace it with
    // the appropriate html element for the list heading.
    var element = null;
    var marker = null;
    var getMarkerLine = function() {
      var span = marker.find();
      return span ? span.from.line : null;
    };

    if (startIndex === 0) {
      var attributes = this.getLineAttributes_(line);
      var listType = attributes[ATTR.LIST_TYPE];
      var indent = attributes[ATTR.LINE_INDENT] || 0;
      if (listType && indent === 0) { indent = 1; }
      while (indent >= listNumber.length) {
        listNumber.push(1);
      }
      if (listType === 'o') {
        element = this.makeOrderedListElement_(listNumber[indent]);
        listNumber[indent]++;
      } else if (listType === 'u') {
        element = this.makeUnorderedListElement_();
        listNumber[indent] = 1;
      } else if (listType === 't') {
        element = this.makeTodoListElement_(false, getMarkerLine);
        listNumber[indent] = 1;
      } else if (listType === 'tc') {
        element = this.makeTodoListElement_(true, getMarkerLine);
        listNumber[indent] = 1;
      }

      var className = this.getClassNameForAttributes_(attributes);
      if (className !== '') {
        this.codeMirror.addLineClass(line, "text", className);
      }

      // Reset deeper indents back to 1.
      listNumber = listNumber.slice(0, indent+1);
    }

    // Create a marker to cover this series of sentinel characters.
    // NOTE: The reason we treat them as a group (one marker for all subsequent sentinel characters instead of
    // one marker for each sentinel character) is that CodeMirror seems to get angry if we don't.
    var markerOptions = { inclusiveLeft: true, collapsed: true };
    if (element) {
      markerOptions.replacedWith = element;
    }
    var marker = cm.markText({line: line, ch: startIndex }, { line: line, ch: endIndex }, markerOptions);
    // track that it's a line-sentinel character so we can identify it later.
    marker.isForLineSentinel = true;
  };

  RichTextCodeMirror.prototype.makeOrderedListElement_ = function(number) {
    return utils.elt('div', number + '.', {
      'class': 'firepad-list-left'
    });
  };

  RichTextCodeMirror.prototype.makeUnorderedListElement_ = function() {
    return utils.elt('div', '\u2022', {
      'class': 'firepad-list-left'
    });
  };

  RichTextCodeMirror.prototype.toggleTodo = function(noRemove) {
    var attribute = ATTR.LIST_TYPE;
    var currentAttributes = this.getCurrentLineAttributes_();
    var newValue;
    if (!(attribute in currentAttributes) || ((currentAttributes[attribute] !== 't') && (currentAttributes[attribute] !== 'tc'))) {
      newValue = 't';
    } else if (currentAttributes[attribute] === 't') {
      newValue = 'tc';
    } else if (currentAttributes[attribute] === 'tc') {
      newValue = noRemove ? 't' : false;
    }
    this.setLineAttribute(attribute, newValue);
  };

  RichTextCodeMirror.prototype.makeTodoListElement_ = function(checked, getMarkerLine) {
    var params = {
      'type': "checkbox",
      'class': 'firepad-todo-left'
    };
    if (checked) params['checked'] = true;
    var el = utils.elt('input', false, params);
    var self = this;
    utils.on(el, 'click', utils.stopEventAnd(function(e) {
      self.codeMirror.setCursor({line: getMarkerLine(), ch: 1});
      self.toggleTodo(true);
    }));
    return el;
  };

  RichTextCodeMirror.prototype.lineIsListItemOrIndented_ = function(lineNum) {
    var attrs = this.getLineAttributes_(lineNum);
    return ((attrs[ATTR.LIST_TYPE] || false) !== false) ||
           ((attrs[ATTR.LINE_INDENT] || 0) !== 0);
  };

  RichTextCodeMirror.prototype.onCursorActivity_ = function() {
    var self = this;

    clearTimeout(self.cursorTimeout);
    self.cursorTimeout = setTimeout(function() {
      self.updateCurrentAttributes_();
    }, 1);
  };

  RichTextCodeMirror.prototype.getCurrentAttributes_ = function() {
    if (!this.currentAttributes_) {
      this.updateCurrentAttributes_();
    }
    return this.currentAttributes_;
  };

  RichTextCodeMirror.prototype.updateCurrentAttributes_ = function() {
    var cm = this.codeMirror;
    var anchor = cm.indexFromPos(cm.getCursor('anchor')), head = cm.indexFromPos(cm.getCursor('head'));
    var pos = head;
    if (anchor > head) { // backwards selection
      // Advance past any newlines or line sentinels.
      while(pos < this.end()) {
        var c = this.getRange(pos, pos+1);
        if (c !== '\n' && c !== LineSentinelCharacter)
          break;
        pos++;
      }
      if (pos < this.end())
        pos++; // since we're going to look at the annotation span to the left to decide what attributes to use.
    } else {
      // Back up before any newlines or line sentinels.
      while(pos > 0) {
        c = this.getRange(pos-1, pos);
        if (c !== '\n' && c !== LineSentinelCharacter)
          break;
        pos--;
      }
    }
    var spans = this.annotationList_.getAnnotatedSpansForPos(pos);
    this.currentAttributes_ = {};

    var attributes = {};
    // Use the attributes to the left unless they're line attributes (in which case use the ones to the right.
    if (spans.length > 0 && (!(ATTR.LINE_SENTINEL in spans[0].annotation.attributes))) {
      attributes = spans[0].annotation.attributes;
    } else if (spans.length > 1) {
      firepad.utils.assert(!(ATTR.LINE_SENTINEL in spans[1].annotation.attributes), "Cursor can't be between two line sentinel characters.");
      attributes = spans[1].annotation.attributes;
    }
    for(var attr in attributes) {
      // Don't copy line or entity attributes.
      if (attr !== 'l' && attr !== 'lt' && attr !== 'li' && attr.indexOf(ATTR.ENTITY_SENTINEL) !== 0) {
        this.currentAttributes_[attr] = attributes[attr];
      }
    }
  };

  RichTextCodeMirror.prototype.getCurrentLineAttributes_ = function() {
    var cm = this.codeMirror;
    var anchor = cm.getCursor('anchor'), head = cm.getCursor('head');
    var line = head.line;
    // If it's a forward selection and the cursor is at the beginning of a line, use the previous line.
    if (head.ch === 0 && anchor.line < head.line) {
      line--;
    }
    return this.getLineAttributes_(line);
  };

  RichTextCodeMirror.prototype.getLineAttributes_ = function(lineNum) {
    var attributes = {};
    var line = this.codeMirror.getLine(lineNum);
    if (line.length > 0 && line[0] === LineSentinelCharacter) {
      var lineStartIndex = this.codeMirror.indexFromPos({ line: lineNum, ch: 0 });
      var spans = this.annotationList_.getAnnotatedSpansForSpan(new Span(lineStartIndex, 1));
      firepad.utils.assert(spans.length === 1);
      for(var attr in spans[0].annotation.attributes) {
        attributes[attr] = spans[0].annotation.attributes[attr];
      }
    }
    return attributes;
  };

  RichTextCodeMirror.prototype.clearAnnotations_ = function() {
    this.annotationList_.updateSpan(new Span(0, this.end()), function(annotation, length) {
      return new RichTextAnnotation({ });
    });
  };

  RichTextCodeMirror.prototype.newline = function() {
    var cm = this.codeMirror;
    var self = this;
    if (!this.emptySelection_()) {
      cm.replaceSelection('\n', 'end', '+input');
    } else {
      var cursorLine = cm.getCursor('head').line;
      var lineAttributes = this.getLineAttributes_(cursorLine);
      var listType = lineAttributes[ATTR.LIST_TYPE];

      if (listType && cm.getLine(cursorLine).length === 1) {
        // They hit enter on a line with just a list heading.  Just remove the list heading.
        this.updateLineAttributes(cursorLine, cursorLine, function(attributes) {
          delete attributes[ATTR.LIST_TYPE];
          delete attributes[ATTR.LINE_INDENT];
        });
      } else {
        cm.replaceSelection('\n', 'end', '+input');

        // Copy line attributes forward.
        this.updateLineAttributes(cursorLine+1, cursorLine+1, function(attributes) {
          for(var attr in lineAttributes) {
            attributes[attr] = lineAttributes[attr];
          }

          // Don't mark new todo items as completed.
          if (listType === 'tc') attributes[ATTR.LIST_TYPE] = 't';
          self.trigger('newLine', {line: cursorLine+1, attr: attributes});
        });
      }
    }
  };

  RichTextCodeMirror.prototype.deleteLeft = function() {
    var cm = this.codeMirror;
    var cursorPos = cm.getCursor('head');
    var lineAttributes = this.getLineAttributes_(cursorPos.line);
    var listType = lineAttributes[ATTR.LIST_TYPE];
    var indent = lineAttributes[ATTR.LINE_INDENT];

    var backspaceAtStartOfLine = this.emptySelection_() && cursorPos.ch === 1;

    if (backspaceAtStartOfLine && listType) {
      // They hit backspace at the beginning of a line with a list heading.  Just remove the list heading.
      this.updateLineAttributes(cursorPos.line, cursorPos.line, function(attributes) {
        delete attributes[ATTR.LIST_TYPE];
        delete attributes[ATTR.LINE_INDENT];
      });
    } else if (backspaceAtStartOfLine && indent && indent > 0) {
      this.updateLineAttributes(cursorPos.line, cursorPos.line, function(attributes) {
        attributes[ATTR.LINE_INDENT]--;
      });
    } else {
      cm.deleteH(-1, "char");
    }
  };

  RichTextCodeMirror.prototype.deleteRight = function() {
    var cm = this.codeMirror;
    var cursorPos = cm.getCursor('head');

    var text = cm.getLine(cursorPos.line);
    var emptyLine = this.areLineSentinelCharacters_(text);
    var nextLineText = (cursorPos.line + 1 < cm.lineCount()) ? cm.getLine(cursorPos.line + 1) : "";
    if (this.emptySelection_() && emptyLine && nextLineText[0] === LineSentinelCharacter) {
      // Delete the empty line but not the line sentinel character on the next line.
      cm.replaceRange('', { line: cursorPos.line, ch: 0 }, { line: cursorPos.line + 1, ch: 0}, '+input');
    } else {
      cm.deleteH(1, "char");
    }
  };

  RichTextCodeMirror.prototype.indent = function() {
    this.updateLineAttributesForSelection(function(attributes) {
      var indent = attributes[ATTR.LINE_INDENT];
      var listType = attributes[ATTR.LIST_TYPE];

      if (indent) {
        attributes[ATTR.LINE_INDENT]++;
      } else if (listType) {
        // lists are implicitly already indented once.
        attributes[ATTR.LINE_INDENT] = 2;
      } else {
        attributes[ATTR.LINE_INDENT] = 1;
      }
    });
  };

  RichTextCodeMirror.prototype.unindent = function() {
    this.updateLineAttributesForSelection(function(attributes) {
      var indent = attributes[ATTR.LINE_INDENT];

      if (indent && indent > 1) {
        attributes[ATTR.LINE_INDENT] = indent - 1;
      } else {
        delete attributes[ATTR.LIST_TYPE];
        delete attributes[ATTR.LINE_INDENT];
      }
    });
  };

  RichTextCodeMirror.prototype.getText = function() {
    return this.codeMirror.getValue().replace(new RegExp(LineSentinelCharacter, "g"), '');
  };

  RichTextCodeMirror.prototype.areLineSentinelCharacters_ = function(text) {
    for(var i = 0; i < text.length; i++) {
      if (text[i] !== LineSentinelCharacter)
        return false;
    }
    return true;
  };

  /**
   * Used for the annotations we store in our AnnotationList.
   * @param attributes
   * @constructor
   */
  function RichTextAnnotation(attributes) {
    this.attributes = attributes || { };
  }

  RichTextAnnotation.prototype.equals = function(other) {
    if (!(other instanceof RichTextAnnotation)) {
      return false;
    }
    var attr;
    for(attr in this.attributes) {
      if (other.attributes[attr] !== this.attributes[attr]) {
        return false;
      }
    }

    for(attr in other.attributes) {
      if (other.attributes[attr] !== this.attributes[attr]) {
        return false;
      }
    }

    return true;
  };

  function emptyAttributes(attributes) {
    for(var attr in attributes) {
      return false;
    }
    return true;
  }

  // Bind a method to an object, so it doesn't matter whether you call
  // object.method() directly or pass object.method as a reference to another
  // function.
  function bind (obj, method) {
    var fn = obj[method];
    obj[method] = function () {
      fn.apply(obj, arguments);
    };
  }

  return RichTextCodeMirror;
})();

var firepad = firepad || { };

// TODO: Can this derive from CodeMirrorAdapter or similar?
firepad.RichTextCodeMirrorAdapter = (function () {
  'use strict';

  var TextOperation = firepad.TextOperation;
  var WrappedOperation = firepad.WrappedOperation;
  var Cursor = firepad.Cursor;

  function RichTextCodeMirrorAdapter (rtcm) {
    this.rtcm = rtcm;
    this.cm = rtcm.codeMirror;

    bind(this, 'onChange');
    bind(this, 'onAttributesChange');
    bind(this, 'onCursorActivity');
    bind(this, 'onFocus');
    bind(this, 'onBlur');

    this.rtcm.on('change', this.onChange);
    this.rtcm.on('attributesChange', this.onAttributesChange);
    this.cm.on('cursorActivity', this.onCursorActivity);
    this.cm.on('focus', this.onFocus);
    this.cm.on('blur', this.onBlur);
  }

  // Removes all event listeners from the CodeMirror instance.
  RichTextCodeMirrorAdapter.prototype.detach = function () {
    this.rtcm.off('change', this.onChange);
    this.rtcm.off('attributesChange', this.onAttributesChange);

    this.cm.off('cursorActivity', this.onCursorActivity);
    this.cm.off('focus', this.onFocus);
    this.cm.off('blur', this.onBlur);
  };

  function cmpPos (a, b) {
    if (a.line < b.line) { return -1; }
    if (a.line > b.line) { return 1; }
    if (a.ch < b.ch)     { return -1; }
    if (a.ch > b.ch)     { return 1; }
    return 0;
  }
  function posEq (a, b) { return cmpPos(a, b) === 0; }
  function posLe (a, b) { return cmpPos(a, b) <= 0; }

  function codemirrorLength (cm) {
    var lastLine = cm.lineCount() - 1;
    return cm.indexFromPos({line: lastLine, ch: cm.getLine(lastLine).length});
  }

  // Converts a CodeMirror change object into a TextOperation and its inverse
  // and returns them as a two-element array.
  RichTextCodeMirrorAdapter.operationFromCodeMirrorChanges = function (changes, cm) {
    // Approach: Replay the changes, beginning with the most recent one, and
    // construct the operation and its inverse. We have to convert the position
    // in the pre-change coordinate system to an index. We have a method to
    // convert a position in the coordinate system after all changes to an index,
    // namely CodeMirror's `indexFromPos` method. We can use the information of
    // a single change object to convert a post-change coordinate system to a
    // pre-change coordinate system. We can now proceed inductively to get a
    // pre-change coordinate system for all changes in the linked list.
    // A disadvantage of this approach is its complexity `O(n^2)` in the length
    // of the linked list of changes.

    var docEndLength = codemirrorLength(cm);
    var operation    = new TextOperation().retain(docEndLength);
    var inverse      = new TextOperation().retain(docEndLength);

    for (var i = changes.length - 1; i >= 0; i--) {
      var change = changes[i];
      var fromIndex = change.start;
      var restLength = docEndLength - fromIndex - change.text.length;

      operation = new TextOperation()
          .retain(fromIndex)
          ['delete'](change.removed.length)
          .insert(change.text, change.attributes)
          .retain(restLength)
          .compose(operation);

      inverse = inverse.compose(new TextOperation()
          .retain(fromIndex)
          ['delete'](change.text.length)
          .insert(change.removed, change.removedAttributes)
          .retain(restLength)
      );

      docEndLength += change.removed.length - change.text.length;
    }

    return [operation, inverse];
  };

  // Converts an attributes changed object to an operation and its inverse.
  RichTextCodeMirrorAdapter.operationFromAttributesChanges = function (changes, cm) {
    var docEndLength = codemirrorLength(cm);

    var operation = new TextOperation(), inverse = new TextOperation();
    var pos = 0;

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var toRetain = change.start - pos;
      assert(toRetain >= 0); // changes should be in order and non-overlapping.
      operation.retain(toRetain);
      inverse.retain(toRetain);

      var length = change.end - change.start;
      operation.retain(length, change.attributes);
      inverse.retain(length, change.attributesInverse);
      pos = change.start + length;
    }

    operation.retain(docEndLength - pos);
    inverse.retain(docEndLength - pos);

    return [operation, inverse];
  };

  // Apply an operation to a CodeMirror instance.
  RichTextCodeMirrorAdapter.applyOperationToCodeMirror = function (operation, rtcm) {

    // HACK: If there are a lot of operations; hide CodeMirror so that it doesn't re-render constantly.
    if (operation.ops.length > 10)
      rtcm.codeMirror.getWrapperElement().setAttribute('style', 'display: none');

    var ops = operation.ops;
    var index = 0; // holds the current index into CodeMirror's content
    for (var i = 0, l = ops.length; i < l; i++) {
      var op = ops[i];
      if (op.isRetain()) {
        if (!emptyAttributes(op.attributes)) {
          rtcm.updateTextAttributes(index, index + op.chars, function(attributes) {
            for(var attr in op.attributes) {
              if (op.attributes[attr] === false) {
                delete attributes[attr];
              } else {
                attributes[attr] = op.attributes[attr];
              }
            }
          }, 'RTCMADAPTER', /*doLineAttributes=*/true);
        }
        index += op.chars;
      } else if (op.isInsert()) {
        rtcm.insertText(index, op.text, op.attributes, 'RTCMADAPTER');
        index += op.text.length;
      } else if (op.isDelete()) {
        rtcm.removeText(index, index + op.chars, 'RTCMADAPTER');
      }
    }

    if (operation.ops.length > 10) {
      rtcm.codeMirror.getWrapperElement().setAttribute('style', '');
      rtcm.codeMirror.refresh();
    }
  };

  RichTextCodeMirrorAdapter.prototype.registerCallbacks = function (cb) {
    this.callbacks = cb;
  };

  RichTextCodeMirrorAdapter.prototype.onChange = function (_, changes) {
    if (changes[0].origin !== 'RTCMADAPTER') {
      var pair = RichTextCodeMirrorAdapter.operationFromCodeMirrorChanges(changes, this.cm);
      this.trigger('change', pair[0], pair[1]);
    }
  };

  RichTextCodeMirrorAdapter.prototype.onAttributesChange = function (_, changes) {
    if (changes[0].origin !== 'RTCMADAPTER') {
      var pair = RichTextCodeMirrorAdapter.operationFromAttributesChanges(changes, this.cm);
      this.trigger('change', pair[0], pair[1]);
    }
  };

  RichTextCodeMirrorAdapter.prototype.onCursorActivity = function () {
    this.trigger('cursorActivity');
  }

  RichTextCodeMirrorAdapter.prototype.onFocus = function () {
    this.trigger('focus');
  };

  RichTextCodeMirrorAdapter.prototype.onBlur = function () {
    if (!this.cm.somethingSelected()) { this.trigger('blur'); }
  };

  RichTextCodeMirrorAdapter.prototype.getValue = function () {
    return this.cm.getValue();
  };

  RichTextCodeMirrorAdapter.prototype.getCursor = function () {
    var cm = this.cm;
    var cursorPos = cm.getCursor();
    var position = cm.indexFromPos(cursorPos);
    var selectionEnd;
    if (cm.somethingSelected()) {
      var startPos = cm.getCursor(true);
      var selectionEndPos = posEq(cursorPos, startPos) ? cm.getCursor(false) : startPos;
      selectionEnd = cm.indexFromPos(selectionEndPos);
    } else {
      selectionEnd = position;
    }

    return new Cursor(position, selectionEnd);
  };

  RichTextCodeMirrorAdapter.prototype.setCursor = function (cursor) {
    this.cm.setSelection(
        this.cm.posFromIndex(cursor.position),
        this.cm.posFromIndex(cursor.selectionEnd)
    );
  };

  RichTextCodeMirrorAdapter.prototype.addStyleRule = function(css) {
    if (typeof document === "undefined" || document === null) {
      return;
    }
    if (!this.addedStyleRules) {
      this.addedStyleRules = {};
      var styleElement = document.createElement('style');
      document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
      this.addedStyleSheet = styleElement.sheet;
    }
    if (this.addedStyleRules[css]) {
      return;
    }
    this.addedStyleRules[css] = true;
    return this.addedStyleSheet.insertRule(css, 0);
  };

  RichTextCodeMirrorAdapter.prototype.setOtherCursor = function (cursor, color, clientId) {
    var cursorPos = this.cm.posFromIndex(cursor.position);
    if (typeof color !== 'string' || !color.match(/^#[a-fA-F0-9]{3,6}$/)) {
      return;
    }
    var end = this.rtcm.end();
    if (typeof cursor !== 'object' || typeof cursor.position !== 'number' || typeof cursor.selectionEnd !== 'number') {
      return;
    }
    if (cursor.position < 0 || cursor.position > end || cursor.selectionEnd < 0 || cursor.selectionEnd > end) {
      return;
    }

    if (cursor.position === cursor.selectionEnd) {
      // show cursor
      var cursorCoords = this.cm.cursorCoords(cursorPos);
      var cursorEl = document.createElement('span');
      cursorEl.className = 'other-client';
      cursorEl.style.borderLeftWidth = '2px';
      cursorEl.style.borderLeftStyle = 'solid';
      cursorEl.style.borderLeftColor = color;
      cursorEl.style.marginLeft = cursorEl.style.marginRight = '-1px';
      cursorEl.style.height = (cursorCoords.bottom - cursorCoords.top) * 0.9 + 'px';
      cursorEl.setAttribute('data-clientid', clientId);
      cursorEl.style.zIndex = 0;

      return this.cm.setBookmark(cursorPos, { widget: cursorEl, insertLeft: true });
    } else {
      // show selection
      var selectionClassName = 'selection-' + color.replace('#', '');
      var rule = '.' + selectionClassName + ' { background: ' + color + '; }';
      this.addStyleRule(rule);

      var fromPos, toPos;
      if (cursor.selectionEnd > cursor.position) {
        fromPos = cursorPos;
        toPos = this.cm.posFromIndex(cursor.selectionEnd);
      } else {
        fromPos = this.cm.posFromIndex(cursor.selectionEnd);
        toPos = cursorPos;
      }
      return this.cm.markText(fromPos, toPos, {
        className: selectionClassName
      });
    }
  };

  RichTextCodeMirrorAdapter.prototype.trigger = function (event) {
    var args = Array.prototype.slice.call(arguments, 1);
    var action = this.callbacks && this.callbacks[event];
    if (action) { action.apply(this, args); }
  };

  RichTextCodeMirrorAdapter.prototype.applyOperation = function (operation) {
    RichTextCodeMirrorAdapter.applyOperationToCodeMirror(operation, this.rtcm);
  };

  RichTextCodeMirrorAdapter.prototype.registerUndo = function (undoFn) {
    this.cm.undo = undoFn;
  };

  RichTextCodeMirrorAdapter.prototype.registerRedo = function (redoFn) {
    this.cm.redo = redoFn;
  };

  RichTextCodeMirrorAdapter.prototype.invertOperation = function(operation) {
    var pos = 0, cm = this.rtcm.codeMirror, spans, i;
    var inverse = new TextOperation();
    for(var opIndex = 0; opIndex < operation.wrapped.ops.length; opIndex++) {
      var op = operation.wrapped.ops[opIndex];
      if (op.isRetain()) {
        if (emptyAttributes(op.attributes)) {
          inverse.retain(op.chars);
          pos += op.chars;
        } else {
          spans = this.rtcm.getAttributeSpans(pos, pos + op.chars);
          for(i = 0; i < spans.length; i++) {
            var inverseAttributes = { };
            for(var attr in op.attributes) {
              var opValue = op.attributes[attr];
              var curValue = spans[i].attributes[attr];

              if (opValue === false) {
                if (curValue) {
                  inverseAttributes[attr] = curValue;
                }
              } else if (opValue !== curValue) {
                inverseAttributes[attr] = curValue || false;
              }
            }

            inverse.retain(spans[i].length, inverseAttributes);
            pos += spans[i].length;
          }
        }
      } else if (op.isInsert()) {
        inverse['delete'](op.text.length);
      } else if (op.isDelete()) {
        var text = cm.getRange(cm.posFromIndex(pos), cm.posFromIndex(pos + op.chars));

        spans = this.rtcm.getAttributeSpans(pos, pos + op.chars);
        var delTextPos = 0;
        for(i = 0; i < spans.length; i++) {
          inverse.insert(text.substr(delTextPos, spans[i].length), spans[i].attributes);
          delTextPos += spans[i].length;
        }

        pos += op.chars;
      }
    }

    return new WrappedOperation(inverse, operation.meta.invert());
  };

  // Throws an error if the first argument is falsy. Useful for debugging.
  function assert (b, msg) {
    if (!b) {
      throw new Error(msg || "assertion error");
    }
  }

  // Bind a method to an object, so it doesn't matter whether you call
  // object.method() directly or pass object.method as a reference to another
  // function.
  function bind (obj, method) {
    var fn = obj[method];
    obj[method] = function () {
      fn.apply(obj, arguments);
    };
  }

  function emptyAttributes(attrs) {
    for(var attr in attrs) {
      return false;
    }
    return true;
  }

  return RichTextCodeMirrorAdapter;
}());

var firepad = firepad || { };

/**
 * Immutable object to represent text formatting.  Formatting can be modified by chaining method calls.
 *
 * @constructor
 * @type {Function}
 */
firepad.Formatting = (function() {
  var ATTR = firepad.AttributeConstants;

  function Formatting(attributes) {
    // Allow calling without new.
    if (!(this instanceof Formatting)) { return new Formatting(attributes); }

    this.attributes = attributes || { };
  }

  Formatting.prototype.cloneWithNewAttribute_ = function(attribute, value) {
    var attributes = { };

    // Copy existing.
    for(var attr in this.attributes) {
      attributes[attr] = this.attributes[attr];
    }

    // Add new one.
    if (value === false) {
      delete attributes[attribute];
    } else {
      attributes[attribute] = value;
    }

    return new Formatting(attributes);
  };

  Formatting.prototype.bold = function(val) {
    return this.cloneWithNewAttribute_(ATTR.BOLD, val);
  };

  Formatting.prototype.italic = function(val) {
    return this.cloneWithNewAttribute_(ATTR.ITALIC, val);
  };

  Formatting.prototype.underline = function(val) {
    return this.cloneWithNewAttribute_(ATTR.UNDERLINE, val);
  };

  Formatting.prototype.strike = function(val) {
    return this.cloneWithNewAttribute_(ATTR.STRIKE, val);
  };

  Formatting.prototype.font = function(font) {
    return this.cloneWithNewAttribute_(ATTR.FONT, font);
  };

  Formatting.prototype.fontSize = function(size) {
    return this.cloneWithNewAttribute_(ATTR.FONT_SIZE, size);
  };

  Formatting.prototype.color = function(color) {
    return this.cloneWithNewAttribute_(ATTR.COLOR, color);
  };

  Formatting.prototype.backgroundColor = function(color) {
    return this.cloneWithNewAttribute_(ATTR.BACKGROUND_COLOR, color);
  };

  return Formatting;
})();

var firepad = firepad || { };

/**
 * Object to represent Formatted text.
 *
 * @type {Function}
 */
firepad.Text = (function() {
  function Text(text, formatting) {
    // Allow calling without new.
    if (!(this instanceof Text)) { return new Text(text, formatting); }

    this.text = text;
    this.formatting = formatting || firepad.Formatting();
  }

  return Text;
})();

var firepad = firepad || { };

/**
 * Immutable object to represent line formatting.  Formatting can be modified by chaining method calls.
 *
 * @constructor
 * @type {Function}
 */
firepad.LineFormatting = (function() {
  var ATTR = firepad.AttributeConstants;

  function LineFormatting(attributes) {
    // Allow calling without new.
    if (!(this instanceof LineFormatting)) { return new LineFormatting(attributes); }

    this.attributes = attributes || { };
    this.attributes[ATTR.LINE_SENTINEL] = true;
  }

  LineFormatting.LIST_TYPE = {
    NONE: false,
    ORDERED: 'o',
    UNORDERED: 'u',
    TODO: 't',
    TODOCHECKED: 'tc'
  };

  LineFormatting.prototype.cloneWithNewAttribute_ = function(attribute, value) {
    var attributes = { };

    // Copy existing.
    for(var attr in this.attributes) {
      attributes[attr] = this.attributes[attr];
    }

    // Add new one.
    if (value === false) {
      delete attributes[attribute];
    } else {
      attributes[attribute] = value;
    }

    return new LineFormatting(attributes);
  };

  LineFormatting.prototype.indent = function(indent) {
    return this.cloneWithNewAttribute_(ATTR.LINE_INDENT, indent);
  };

  LineFormatting.prototype.align = function(align) {
    return this.cloneWithNewAttribute_(ATTR.LINE_ALIGN, align);
  };

  LineFormatting.prototype.listItem = function(val) {
    firepad.utils.assert(val === false || val === 'u' || val === 'o' || val === 't' || val === 'tc');
    return this.cloneWithNewAttribute_(ATTR.LIST_TYPE, val);
  };

  LineFormatting.prototype.getIndent = function() {
    return this.attributes[ATTR.LINE_INDENT] || 0;
  };

  LineFormatting.prototype.getAlign = function() {
    return this.attributes[ATTR.LINE_ALIGN] || 0;
  };

  LineFormatting.prototype.getListItem = function() {
    return this.attributes[ATTR.LIST_TYPE] || false;
  };

  return LineFormatting;
})();

var firepad = firepad || { };

/**
 * Object to represent Formatted line.
 *
 * @type {Function}
 */
firepad.Line = (function() {
  function Line(textPieces, formatting) {
    // Allow calling without new.
    if (!(this instanceof Line)) { return new Line(textPieces, formatting); }

    if(Object.prototype.toString.call(textPieces) !== '[object Array]') {
      if (typeof textPieces === 'undefined') {
        textPieces = [];
      } else {
        textPieces = [textPieces];
      }
    }

    this.textPieces = textPieces;
    this.formatting = formatting || firepad.LineFormatting();
  }

  return Line;
})();

var firepad = firepad || { };

/**
 * Helper to parse html into Firepad-compatible lines / text.
 * @type {*}
 */
firepad.ParseHtml = (function () {
  var LIST_TYPE = firepad.LineFormatting.LIST_TYPE;

  /**
   * Represents the current parse state as an immutable structure.  To create a new ParseState, use
   * the withXXX methods.
   *
   * @param opt_listType
   * @param opt_lineFormatting
   * @param opt_textFormatting
   * @constructor
   */
  function ParseState(opt_listType, opt_lineFormatting, opt_textFormatting) {
    this.listType = opt_listType || LIST_TYPE.UNORDERED;
    this.lineFormatting = opt_lineFormatting || firepad.LineFormatting();
    this.textFormatting = opt_textFormatting || firepad.Formatting();
  }

  ParseState.prototype.withTextFormatting = function(textFormatting) {
    return new ParseState(this.listType, this.lineFormatting, textFormatting);
  };

  ParseState.prototype.withLineFormatting = function(lineFormatting) {
    return new ParseState(this.listType, lineFormatting, this.textFormatting);
  };

  ParseState.prototype.withListType = function(listType) {
    return new ParseState(listType, this.lineFormatting, this.textFormatting);
  };

  ParseState.prototype.withIncreasedIndent = function() {
    var lineFormatting = this.lineFormatting.indent(this.lineFormatting.getIndent() + 1);
    return new ParseState(this.listType, lineFormatting, this.textFormatting);
  };

  ParseState.prototype.withAlign = function(align) {
    var lineFormatting = this.lineFormatting.align(align);
    return new ParseState(this.listType, lineFormatting, this.textFormatting);
  };

  /**
   * Mutable structure representing the current parse output.
   * @constructor
   */
  function ParseOutput() {
    this.lines = [ ];
    this.currentLine = [];
    this.currentLineListItemType = null;
  }

  ParseOutput.prototype.newlineIfNonEmpty = function(state) {
    this.cleanLine_();
    if (this.currentLine.length > 0) {
      this.newline(state);
    }
  };

  ParseOutput.prototype.newlineIfNonEmptyOrListItem = function(state) {
    this.cleanLine_();
    if (this.currentLine.length > 0 || this.currentLineListItemType !== null) {
      this.newline(state);
    }
  };

  ParseOutput.prototype.newline = function(state) {
    this.cleanLine_();
    var lineFormatting = state.lineFormatting;
    if (this.currentLineListItemType !== null) {
      lineFormatting = lineFormatting.listItem(this.currentLineListItemType);
      this.currentLineListItemType = null;
    }

    this.lines.push(firepad.Line(this.currentLine, lineFormatting));
    this.currentLine = [];
  };

  ParseOutput.prototype.makeListItem = function(type) {
    this.currentLineListItemType = type;
  };

  ParseOutput.prototype.cleanLine_ = function() {
    // Kinda' a hack, but we remove leading and trailing spaces (since these aren't significant in html) and
    // replaces nbsp's with normal spaces.
    if (this.currentLine.length > 0) {
      var last = this.currentLine.length - 1;
      this.currentLine[0].text = this.currentLine[0].text.replace(/^ +/, '');
      this.currentLine[last].text = this.currentLine[last].text.replace(/ +$/g, '');
      for(var i = 0; i < this.currentLine.length; i++) {
        this.currentLine[i].text = this.currentLine[i].text.replace(/\u00a0/g, ' ');
      }
    }
    // If after stripping trailing whitespace, there's nothing left, clear currentLine out.
    if (this.currentLine.length === 1 && this.currentLine[0].text === '') {
      this.currentLine = [];
    }
  };

  var entityManager_;
  function parseHtml(html, entityManager) {
    // Create DIV with HTML (as a convenient way to parse it).
    var div = (firepad.document || document).createElement('div');
    div.innerHTML = html;

    // HACK until I refactor this.
    entityManager_ = entityManager;

    var output = new ParseOutput();
    var state = new ParseState();
    parseNode(div, state, output);

    return output.lines;
  }

  // Fix IE8.
  var Node = Node || {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3
  };

  function parseNode(node, state, output) {
    // Give entity manager first crack at it.
    if (node.nodeType === Node.ELEMENT_NODE) {
      var entity = entityManager_.fromElement(node);
      if (entity) {
        output.currentLine.push(new firepad.Text(
            firepad.sentinelConstants.ENTITY_SENTINEL_CHARACTER,
            new firepad.Formatting(entity.toAttributes())
        ));
        return;
      }
    }

    switch (node.nodeType) {
      case Node.TEXT_NODE:
        // This probably isn't exactly right, but mostly works...
        var text = node.nodeValue.replace(/[ \n\t]+/g, ' ');
        output.currentLine.push(firepad.Text(text, state.textFormatting));
        break;
      case Node.ELEMENT_NODE:
        var style = node.getAttribute('style') || '';
        state = parseStyle(state, style);
        switch (node.nodeName.toLowerCase()) {
          case 'div':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'p':
            output.newlineIfNonEmpty(state);
            parseChildren(node, state, output);
            output.newlineIfNonEmpty(state);
            break;
          case 'center':
            state = state.withAlign('center');
            output.newlineIfNonEmpty(state);
            parseChildren(node, state.withAlign('center'), output);
            output.newlineIfNonEmpty(state);
            break;
          case 'b':
          case 'strong':
            parseChildren(node, state.withTextFormatting(state.textFormatting.bold(true)), output);
            break;
          case 'u':
            parseChildren(node, state.withTextFormatting(state.textFormatting.underline(true)), output);
            break;
          case 'i':
          case 'em':
            parseChildren(node, state.withTextFormatting(state.textFormatting.italic(true)), output);
            break;
          case 's':
            parseChildren(node, state.withTextFormatting(state.textFormatting.strike(true)), output);
            break;
          case 'font':
            var face = node.getAttribute('face');
            var color = node.getAttribute('color');
            var size = parseInt(node.getAttribute('size'));
            if (face) { state = state.withTextFormatting(state.textFormatting.font(face)); }
            if (color) { state = state.withTextFormatting(state.textFormatting.color(color)); }
            if (size) { state = state.withTextFormatting(state.textFormatting.fontSize(size)); }
            parseChildren(node, state, output);
            break;
          case 'br':
            output.newline(state);
            break;
          case 'ul':
            output.newlineIfNonEmptyOrListItem(state);
            var listType = node.getAttribute('class') === 'firepad-todo' ? LIST_TYPE.TODO : LIST_TYPE.UNORDERED;
            parseChildren(node, state.withListType(listType).withIncreasedIndent(), output);
            output.newlineIfNonEmpty(state);
            break;
          case 'ol':
            output.newlineIfNonEmptyOrListItem(state);
            parseChildren(node, state.withListType(LIST_TYPE.ORDERED).withIncreasedIndent(), output);
            output.newlineIfNonEmpty(state);
            break;
          case 'li':
            parseListItem(node, state, output);
            break;
          case 'style': // ignore.
            break;
          default:
            parseChildren(node, state, output);
            break;
        }
        break;
      default:
        // Ignore other nodes (comments, etc.)
        break;
    }
  }

  function parseChildren(node, state, output) {
    if (node.hasChildNodes()) {
      for(var i = 0; i < node.childNodes.length; i++) {
        parseNode(node.childNodes[i], state, output);
      }
    }
  }

  function parseListItem(node, state, output) {
    // Note: <li> is weird:
    // * Only the first line in the <li> tag should be a list item (i.e. with a bullet or number next to it).
    // * <li></li> should create an empty list item line; <li><ol><li></li></ol></li> should create two.

    output.newlineIfNonEmptyOrListItem(state);

    var listType = (node.getAttribute('class') === 'firepad-checked') ? LIST_TYPE.TODOCHECKED : state.listType;
    output.makeListItem(listType);
    var oldLine = output.currentLine;

    parseChildren(node, state, output);

    if (oldLine === output.currentLine || output.currentLine.length > 0) {
      output.newline(state);
    }
  }

  function parseStyle(state, styleString) {
    var textFormatting = state.textFormatting;
    var lineFormatting = state.lineFormatting;
    var styles = styleString.split(';');
    for(var i = 0; i < styles.length; i++) {
      var stylePieces = styles[i].split(':');
      if (stylePieces.length !== 2)
        continue;
      var prop = firepad.utils.trim(stylePieces[0]).toLowerCase();
      var val = firepad.utils.trim(stylePieces[1]).toLowerCase();
      switch (prop) {
        case 'text-decoration':
          var underline = val.indexOf('underline') >= 0;
          var strike = val.indexOf('line-through') >= 0;
          textFormatting = textFormatting.underline(underline).strike(strike);
          break;
        case 'font-weight':
          var bold = (val === 'bold') || parseInt(val) >= 600;
          textFormatting = textFormatting.bold(bold);
          break;
        case 'font-style':
          var italic = (val === 'italic' || val === 'oblique');
          textFormatting = textFormatting.italic(italic);
          break;
        case 'color':
          textFormatting = textFormatting.color(val);
          break;
        case 'background-color':
          textFormatting = textFormatting.backgroundColor(val);
          break;
        case 'text-align':
          lineFormatting = lineFormatting.align(val);
          break;
        case 'font-size':
          var size = null;
          var allowedValues = ['px','pt','%','em','xx-small','x-small','small','medium','large','x-large','xx-large','smaller','larger'];
          if (firepad.utils.stringEndsWith(val, allowedValues)) {
            size = val;
          }
          else if (parseInt(val)) {
            size = parseInt(val)+'px';
          }
          if (size) {
            textFormatting = textFormatting.fontSize(size);
          }
          break;
        case 'font-family':
          var font = firepad.utils.trim(val.split(',')[0]); // get first font.
          font = font.replace(/['"]/g, ''); // remove quotes.
          font = font.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() });
          textFormatting = textFormatting.font(font);
          break;
      }
    }
    return state.withLineFormatting(lineFormatting).withTextFormatting(textFormatting);
  }

  return parseHtml;
})();

var firepad = firepad || { };

/**
 * Helper to turn Firebase contents into HMTL.
 * Takes a doc and an entity manager
 */
firepad.SerializeHtml = (function () {

  var utils      = firepad.utils;
  var ATTR       = firepad.AttributeConstants;
  var LIST_TYPE  = firepad.LineFormatting.LIST_TYPE;
  var TODO_STYLE = '<style>ul.firepad-todo { list-style: none; margin-left: 0; padding-left: 0; } ul.firepad-todo > li { padding-left: 1em; text-indent: -1em; } ul.firepad-todo > li:before { content: "\\2610"; padding-right: 5px; } ul.firepad-todo > li.firepad-checked:before { content: "\\2611"; padding-right: 5px; }</style>\n';

  function open(listType) {
    return (listType === LIST_TYPE.ORDERED) ? '<ol>' :
           (listType === LIST_TYPE.UNORDERED) ? '<ul>' :
           '<ul class="firepad-todo">';
  }

  function close(listType) {
    return (listType === LIST_TYPE.ORDERED) ? '</ol>' : '</ul>';
  }

  function compatibleListType(l1, l2) {
    return (l1 === l2) ||
        (l1 === LIST_TYPE.TODO && l2 === LIST_TYPE.TODOCHECKED) ||
        (l1 === LIST_TYPE.TODOCHECKED && l2 === LIST_TYPE.TODO);
  }

  function textToHtml(text) {
    return text.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\u00a0/g, '&nbsp;')
  }

  function serializeHtml(doc, entityManager) {
    var html = '';
    var newLine = true;
    var listTypeStack = [];
    var inListItem = false;
    var firstLine = true;
    var emptyLine = true;
    var i = 0, op = doc.ops[i];
    var usesTodo = false;
    while(op) {
      utils.assert(op.isInsert());
      var attrs = op.attributes;

      if (newLine) {
        newLine = false;

        var indent = 0, listType = null, lineAlign = 'left';
        if (ATTR.LINE_SENTINEL in attrs) {
          indent = attrs[ATTR.LINE_INDENT] || 0;
          listType = attrs[ATTR.LIST_TYPE] || null;
          lineAlign = attrs[ATTR.LINE_ALIGN] || 'left';
        }
        if (listType) {
          indent = indent || 1; // lists are automatically indented at least 1.
        }

        if (inListItem) {
          html += '</li>';
          inListItem = false;
        } else if (!firstLine) {
          if (emptyLine) {
            html += '<br/>';
          }
          html += '</div>';
        }
        firstLine = false;

        // Close any extra lists.
        utils.assert(indent >= 0, "Indent must not be negative.");
        while (listTypeStack.length > indent ||
            (indent === listTypeStack.length && listType !== null && !compatibleListType(listType, listTypeStack[listTypeStack.length - 1]))) {
          html += close(listTypeStack.pop());
        }

        // Open any needed lists.
        while (listTypeStack.length < indent) {
          var toOpen = listType || LIST_TYPE.UNORDERED; // default to unordered lists for indenting non-list-item lines.
          usesTodo = listType == LIST_TYPE.TODO || listType == LIST_TYPE.TODOCHECKED || usesTodo;
          html += open(toOpen);
          listTypeStack.push(toOpen);
        }

        var style = (lineAlign !== 'left') ? ' style="text-align:' + lineAlign + '"': '';
        if (listType) {
          var clazz = '';
          switch (listType)
          {
            case LIST_TYPE.TODOCHECKED:
              clazz = ' class="firepad-checked"';
              break;
            case LIST_TYPE.TODO:
              clazz = ' class="firepad-unchecked"';
              break;
          }
          html += "<li" + clazz + style + ">";
          inListItem = true;
        } else {
          // start line div.
          html += '<div' + style + '>';
        }
        emptyLine = true;
      }

      if (ATTR.LINE_SENTINEL in attrs) {
        op = doc.ops[++i];
        continue;
      }

      if (ATTR.ENTITY_SENTINEL in attrs) {
        for(var j = 0; j < op.text.length; j++) {
          var entity = firepad.Entity.fromAttributes(attrs);
          var element = entityManager.exportToElement(entity);
          html += element.outerHTML;
        }

        op = doc.ops[++i];
        continue;
      }

      var prefix = '', suffix = '';
      for(var attr in attrs) {
        var value = attrs[attr];
        var start, end;
        if (attr === ATTR.BOLD || attr === ATTR.ITALIC || attr === ATTR.UNDERLINE || attr === ATTR.STRIKE) {
          utils.assert(value === true);
          start = end = attr;
        } else if (attr === ATTR.FONT_SIZE) {
          start = 'span style="font-size: ' + value;
          start += (typeof value !== "string" || value.indexOf("px", value.length - 2) === -1) ? 'px"' : '"';
          end = 'span';
        } else if (attr === ATTR.FONT) {
          start = 'span style="font-family: ' + value + '"';
          end = 'span';
        } else if (attr === ATTR.COLOR) {
          start = 'span style="color: ' + value + '"';
          end = 'span';
        } else if (attr === ATTR.BACKGROUND_COLOR) {
          start = 'span style="background-color: ' + value + '"';
          end = 'span';
        }
        else {
          utils.log(false, "Encountered unknown attribute while rendering html: " + attr);
        }
        if (start) prefix += '<' + start + '>';
        if (end) suffix = '</' + end + '>' + suffix;
      }

      var text = op.text;
      var newLineIndex = text.indexOf('\n');
      if (newLineIndex >= 0) {
        newLine = true;
        if (newLineIndex < text.length - 1) {
          // split op.
          op = new firepad.TextOp('insert', text.substr(newLineIndex+1), attrs);
        } else {
          op = doc.ops[++i];
        }
        text = text.substr(0, newLineIndex);
      } else {
        op = doc.ops[++i];
      }

      // Replace leading, trailing, and consecutive spaces with nbsp's to make sure they're preserved.
      text = text.replace(/  +/g, function(str) {
        return new Array(str.length + 1).join('\u00a0');
      }).replace(/^ /, '\u00a0').replace(/ $/, '\u00a0');
      if (text.length > 0) {
        emptyLine = false;
      }

      html += prefix + textToHtml(text) + suffix;
    }

    if (inListItem) {
      html += '</li>';
    } else if (!firstLine) {
      if (emptyLine) {
        html += '&nbsp;';
      }
      html += '</div>';
    }

    // Close any extra lists.
    while (listTypeStack.length > 0) {
      html += close(listTypeStack.pop());
    }

    if (usesTodo) {
      html = TODO_STYLE + html;
    }

    return html;
  }

  return serializeHtml;
})();

var firepad = firepad || { };

/**
 * Helper to turn pieces of text into insertable operations
 */
firepad.textPiecesToInserts = function(atNewLine, textPieces) {
  var inserts = [];

  function insert(string, attributes) {
    if (string instanceof firepad.Text) {
      attributes = string.formatting.attributes;
      string     = string.text;
    }

    inserts.push({string: string, attributes: attributes});
    atNewLine = string[string.length-1] === '\n';
  }

  function insertLine(line) {
    // HACK: We should probably force a newline if there isn't one already.  But due to
    // the way this is used for inserting HTML, we end up inserting a "line" in the middle
    // of text, in which case we don't want to actually insert a newline.
    if (atNewLine) {
      insert(firepad.sentinelConstants.LINE_SENTINEL_CHARACTER, line.formatting.attributes);
    }

    for(var i = 0; i < line.textPieces.length; i++) {
      insert(line.textPieces[i]);
    }

    insert('\n');
  }

  for(var i = 0; i < textPieces.length; i++) {
    if (textPieces[i] instanceof firepad.Line) {
      insertLine(textPieces[i]);
    } else {
      insert(textPieces[i]);
    }
  }

  return inserts;
}

var firepad = firepad || { };

/**
 * Instance of headless Firepad for use in NodeJS. Supports get/set on text/html.
 */
firepad.Headless = (function() {

  var TextOperation   = firepad.TextOperation;
  var FirebaseAdapter = firepad.FirebaseAdapter;
  var EntityManager   = firepad.EntityManager;
  var ParseHtml       = firepad.ParseHtml;

  function Headless(refOrPath) {
    // Allow calling without new.
    if (!(this instanceof Headless)) { return new Headless(refOrPath); }

    if (typeof refOrPath === 'string') {
      if (typeof Firebase !== 'function') {
        var firebase = require('firebase');
      } else {
        var firebase = Firebase;
      }
      var ref = new firebase(refOrPath);
    } else {
      var ref = refOrPath;
    }

    this.adapter        = new FirebaseAdapter(ref);
    this.ready          = false;
    this.entityManager  = new EntityManager();
  }

  Headless.prototype.getDocument = function(callback) {
    var self = this;

    if (self.ready) {
      return callback(self.adapter.getDocument());
    }

    self.adapter.on('ready', function() {
      self.ready = true;
      callback(self.adapter.getDocument());
    });
  }

  Headless.prototype.getText = function(callback) {
    this.getDocument(function(doc) {
      var text = doc.apply('');

      // Strip out any special characters from Rich Text formatting
      for (key in firepad.sentinelConstants) {
        text = text.replace(new RegExp(firepad.sentinelConstants[key], 'g'), '');
      }
      callback(text);
    });
  }

  Headless.prototype.setText = function(text, callback) {
    var op = TextOperation().insert(text);
    this.sendOperationWithRetry(op, callback);
  }

  Headless.prototype.initializeFakeDom = function(callback) {
    if (typeof document === 'object' || typeof firepad.document === 'object') {
      callback();
    } else {
      require('jsdom').env('<head></head><body></body>', function(err, window) {
        if (firepad.document) {
          // Return if we've already made a jsdom to avoid making more than one
          // This would be easier with promises but we want to avoid introducing
          // another dependency for just headless mode.
          window.close();
          return callback();
        }
        firepad.document = window.document;
        callback();
      });
    }
  }

  Headless.prototype.getHtml = function(callback) {
    var self = this;

    self.initializeFakeDom(function() {
      self.getDocument(function(doc) {
        callback(firepad.SerializeHtml(doc, self.entityManager));
      });
    });
  }

  Headless.prototype.setHtml = function(html, callback) {
    var self = this;

    self.initializeFakeDom(function() {
      var textPieces = ParseHtml(html, self.entityManager);
      var inserts    = firepad.textPiecesToInserts(true, textPieces);
      var op         = new TextOperation();

      for (var i = 0; i < inserts.length; i++) {
        op.insert(inserts[i].string, inserts[i].attributes);
      }

      self.sendOperationWithRetry(op, callback);
    });
  }

  Headless.prototype.sendOperationWithRetry = function(operation, callback) {
    var self = this;

    self.getDocument(function(doc) {
      var op = operation.clone()['delete'](doc.targetLength);
      self.adapter.sendOperation(op, function(err, committed) {
        if (committed) {
          if (typeof callback !== "undefined") {
            callback(null, committed);
          }
        } else {
          self.sendOperationWithRetry(operation, callback);
        }
      });
    });
  }

  return Headless;
})();

var firepad = firepad || { };

firepad.Firepad = (function(global) {
  if (!firepad.RichTextCodeMirrorAdapter) {
    throw new Error("Oops! It looks like you're trying to include lib/firepad.js directly.  This is actually one of many source files that make up firepad.  You want dist/firepad.js instead.");
  }
  var RichTextCodeMirrorAdapter = firepad.RichTextCodeMirrorAdapter;
  var RichTextCodeMirror = firepad.RichTextCodeMirror;
  var RichTextToolbar = firepad.RichTextToolbar;
  var ACEAdapter = firepad.ACEAdapter;
  var FirebaseAdapter = firepad.FirebaseAdapter;
  var EditorClient = firepad.EditorClient;
  var EntityManager = firepad.EntityManager;
  var ATTR = firepad.AttributeConstants;
  var utils = firepad.utils;
  var LIST_TYPE = firepad.LineFormatting.LIST_TYPE;
  var CodeMirror = global.CodeMirror;
  var ace = global.ace;

  function Firepad(ref, place, options) {
    if (!(this instanceof Firepad)) { return new Firepad(ref, place, options); }

    if (!CodeMirror && !ace) {
      throw new Error('Couldn\'t find CodeMirror or ACE.  Did you forget to include codemirror.js or ace.js?');
    }

    if (CodeMirror && place instanceof CodeMirror) {
      this.codeMirror_ = this.editor_ = place;
      var curValue = this.codeMirror_.getValue();
      if (curValue !== '') {
        throw new Error("Can't initialize Firepad with a CodeMirror instance that already contains text.");
      }
    } else if (ace && place && place.session instanceof ace.EditSession) {
      this.ace_ = this.editor_ = place;
      curValue = this.ace_.getValue();
      if (curValue !== '') {
        throw new Error("Can't initialize Firepad with an ACE instance that already contains text.");
      }
    } else {
      this.codeMirror_ = this.editor_ = new CodeMirror(place);
    }

    var editorWrapper = this.codeMirror_ ? this.codeMirror_.getWrapperElement() : this.ace_.container;
    this.firepadWrapper_ = utils.elt("div", null, { 'class': 'firepad' });
    editorWrapper.parentNode.replaceChild(this.firepadWrapper_, editorWrapper);
    this.firepadWrapper_.appendChild(editorWrapper);

    // Don't allow drag/drop because it causes issues.  See https://github.com/firebase/firepad/issues/36
    utils.on(editorWrapper, 'dragstart', utils.stopEvent);

    // Provide an easy way to get the firepad instance associated with this CodeMirror instance.
    this.editor_.firepad = this;

    this.options_ = options || { };

    if (this.getOption('richTextShortcuts', false)) {
      if (!CodeMirror.keyMap['richtext']) {
        this.initializeKeyMap_();
      }
      this.codeMirror_.setOption('keyMap', 'richtext');
      this.firepadWrapper_.className += ' firepad-richtext';
    }

    this.imageInsertionUI = this.getOption('imageInsertionUI', true);

    if (this.getOption('richTextToolbar', false)) {
      this.addToolbar_();
      this.firepadWrapper_.className += ' firepad-richtext firepad-with-toolbar';
    }

    this.addPoweredByLogo_();

    // Now that we've mucked with CodeMirror, refresh it.
    if (this.codeMirror_)
      this.codeMirror_.refresh();

    var userId = this.getOption('userId', ref.push().name());
    var userColor = this.getOption('userColor', colorFromUserId(userId));

    this.entityManager_ = new EntityManager();

    this.firebaseAdapter_ = new FirebaseAdapter(ref, userId, userColor);
    if (this.codeMirror_) {
      this.richTextCodeMirror_ = new RichTextCodeMirror(this.codeMirror_, this.entityManager_, { cssPrefix: 'firepad-' });
      this.editorAdapter_ = new RichTextCodeMirrorAdapter(this.richTextCodeMirror_);
    } else {
      this.editorAdapter_ = new ACEAdapter(this.ace_);
    }
    this.client_ = new EditorClient(this.firebaseAdapter_, this.editorAdapter_);

    var self = this;
    this.firebaseAdapter_.on('cursor', function() {
      self.trigger.apply(self, ['cursor'].concat([].slice.call(arguments)));
    });

    if (this.codeMirror_) {
      this.richTextCodeMirror_.on('newLine', function() {
        self.trigger.apply(self, ['newLine'].concat([].slice.call(arguments)));
      });
    }

    this.firebaseAdapter_.on('ready', function() {
      self.ready_ = true;

      if (this.ace_) {
        this.editorAdapter_.grabDocumentState();
      }

      var defaultText = self.getOption('defaultText', null);
      if (defaultText && self.isHistoryEmpty()) {
        self.setText(defaultText);
      }

      self.trigger('ready');
    });

    this.client_.on('synced', function(isSynced) { self.trigger('synced', isSynced)} );

    // Hack for IE8 to make font icons work more reliably.
    // http://stackoverflow.com/questions/9809351/ie8-css-font-face-fonts-only-working-for-before-content-on-over-and-sometimes
    if (navigator.appName == 'Microsoft Internet Explorer' && navigator.userAgent.match(/MSIE 8\./)) {
      window.onload = function() {
        var head = document.getElementsByTagName('head')[0],
          style = document.createElement('style');
        style.type = 'text/css';
        style.styleSheet.cssText = ':before,:after{content:none !important;}';
        head.appendChild(style);
        setTimeout(function() {
          head.removeChild(style);
        }, 0);
      };
    }
  }
  utils.makeEventEmitter(Firepad);

  // For readability, these are the primary "constructors", even though right now they're just aliases for Firepad.
  Firepad.fromCodeMirror = Firepad;
  Firepad.fromACE = Firepad;

  Firepad.prototype.dispose = function() {
    this.zombie_ = true; // We've been disposed.  No longer valid to do anything.

    // Unwrap the editor.
    var editorWrapper = this.codeMirror_ ? this.codeMirror_.getWrapperElement() : this.ace_.container;
    this.firepadWrapper_.removeChild(editorWrapper);
    this.firepadWrapper_.parentNode.replaceChild(editorWrapper, this.firepadWrapper_);

    this.editor_.firepad = null;

    if (this.codeMirror_ && this.codeMirror_.getOption('keyMap') === 'richtext') {
      this.codeMirror_.setOption('keyMap', 'default');
    }

    this.firebaseAdapter_.dispose();
    this.editorAdapter_.detach();
    if (this.richTextCodeMirror_)
      this.richTextCodeMirror_.detach();
  };

  Firepad.prototype.setUserId = function(userId) {
    this.firebaseAdapter_.setUserId(userId);
  };

  Firepad.prototype.setUserColor = function(color) {
    this.firebaseAdapter_.setColor(color);
  };

  Firepad.prototype.getText = function() {
    this.assertReady_('getText');
    if (this.codeMirror_)
      return this.richTextCodeMirror_.getText();
    else
      return this.ace_.getSession().getDocument().getValue();
  };

  Firepad.prototype.setText = function(textPieces) {
    if (this.ace_) {
      return this.ace_.getSession().getDocument().setValue(textPieces);
    } else {
      // HACK: Hide CodeMirror during setText to prevent lots of extra renders.
      this.codeMirror_.getWrapperElement().setAttribute('style', 'display: none');
      this.codeMirror_.setValue("");
      this.insertText(0, textPieces);
      this.codeMirror_.getWrapperElement().setAttribute('style', '');
      this.codeMirror_.refresh();
    }
    this.editorAdapter_.setCursor({position: 0, selectionEnd: 0});
  };

  Firepad.prototype.insertTextAtCursor = function(textPieces) {
    this.insertText(this.codeMirror_.indexFromPos(this.codeMirror_.getCursor()), textPieces);
  };

  Firepad.prototype.insertText = function(index, textPieces) {
    utils.assert(!this.ace_, "Not supported for ace yet.");
    this.assertReady_('insertText');

    // Wrap it in an array if it's not already.
    if(Object.prototype.toString.call(textPieces) !== '[object Array]') {
      textPieces = [textPieces];
    }

    // TODO: Batch this all into a single operation.
    // HACK: We should check if we're actually at the beginning of a line; but checking for index == 0 is sufficient
    // for the setText() case.
    var atNewLine = index === 0;
    var inserts = firepad.textPiecesToInserts(atNewLine, textPieces);

    for (var i = 0; i < inserts.length; i++) {
      var string     = inserts[i].string;
      var attributes = inserts[i].attributes;
      this.richTextCodeMirror_.insertText(index, string, attributes);
      index += string.length;
    }
  };

  Firepad.prototype.getOperationForSpan = function(start, end) {
    var text = this.richTextCodeMirror_.getRange(start, end);
    var spans = this.richTextCodeMirror_.getAttributeSpans(start, end);
    var pos = 0;
    var op = new firepad.TextOperation();
    for(var i = 0; i < spans.length; i++) {
      op.insert(text.substr(pos, spans[i].length), spans[i].attributes);
      pos += spans[i].length;
    }
    return op;
  };

  Firepad.prototype.getHtml = function() {
    return this.getHtmlFromRange(null, null);
  };

  Firepad.prototype.getHtmlFromSelection = function() {
    var startPos = this.codeMirror_.getCursor('start'), endPos = this.codeMirror_.getCursor('end');
    var startIndex = this.codeMirror_.indexFromPos(startPos), endIndex = this.codeMirror_.indexFromPos(endPos);
    return this.getHtmlFromRange(startIndex, endIndex);
  };

  Firepad.prototype.getHtmlFromRange = function(start, end) {
    var doc = (start != null && end != null) ?
      this.getOperationForSpan(start, end) :
      this.getOperationForSpan(0, this.codeMirror_.getValue().length);
    return firepad.SerializeHtml(doc, this.entityManager_);
  };

  Firepad.prototype.insertHtml = function (index, html) {
    var lines = firepad.ParseHtml(html, this.entityManager_);
    this.insertText(index, lines);
  };

  Firepad.prototype.insertHtmlAtCursor = function (html) {
    this.insertHtml(this.codeMirror_.indexFromPos(this.codeMirror_.getCursor()), html);
  };

  Firepad.prototype.setHtml = function (html) {
    var lines = firepad.ParseHtml(html, this.entityManager_);
    this.setText(lines);
  };

  Firepad.prototype.isHistoryEmpty = function() {
    this.assertReady_('isHistoryEmpty');
    return this.firebaseAdapter_.isHistoryEmpty();
  };

  Firepad.prototype.bold = function() {
    this.richTextCodeMirror_.toggleAttribute(ATTR.BOLD);
    this.codeMirror_.focus();
  };

  Firepad.prototype.italic = function() {
    this.richTextCodeMirror_.toggleAttribute(ATTR.ITALIC);
    this.codeMirror_.focus();
  };

  Firepad.prototype.underline = function() {
    this.richTextCodeMirror_.toggleAttribute(ATTR.UNDERLINE);
    this.codeMirror_.focus();
  };

  Firepad.prototype.strike = function() {
    this.richTextCodeMirror_.toggleAttribute(ATTR.STRIKE);
    this.codeMirror_.focus();
  };

  Firepad.prototype.fontSize = function(size) {
    this.richTextCodeMirror_.setAttribute(ATTR.FONT_SIZE, size);
    this.codeMirror_.focus();
  };

  Firepad.prototype.font = function(font) {
    this.richTextCodeMirror_.setAttribute(ATTR.FONT, font);
    this.codeMirror_.focus();
  };

  Firepad.prototype.color = function(color) {
    this.richTextCodeMirror_.setAttribute(ATTR.COLOR, color);
    this.codeMirror_.focus();
  };

  Firepad.prototype.highlight = function() {
    this.richTextCodeMirror_.toggleAttribute(ATTR.BACKGROUND_COLOR, 'rgba(255,255,0,.65)');
    this.codeMirror_.focus();
  };

  Firepad.prototype.align = function(alignment) {
    if (alignment !== 'left' && alignment !== 'center' && alignment !== 'right') {
      throw new Error('align() must be passed "left", "center", or "right".');
    }
    this.richTextCodeMirror_.setLineAttribute(ATTR.LINE_ALIGN, alignment);
    this.codeMirror_.focus();
  };

  Firepad.prototype.orderedList = function() {
    this.richTextCodeMirror_.toggleLineAttribute(ATTR.LIST_TYPE, 'o');
    this.codeMirror_.focus();
  };

  Firepad.prototype.unorderedList = function() {
    this.richTextCodeMirror_.toggleLineAttribute(ATTR.LIST_TYPE, 'u');
    this.codeMirror_.focus();
  };

  Firepad.prototype.todo = function() {
    this.richTextCodeMirror_.toggleTodo();
    this.codeMirror_.focus();
  };

  Firepad.prototype.newline = function() {
    this.richTextCodeMirror_.newline();
  };

  Firepad.prototype.deleteLeft = function() {
    this.richTextCodeMirror_.deleteLeft();
  };

  Firepad.prototype.deleteRight = function() {
    this.richTextCodeMirror_.deleteRight();
  };

  Firepad.prototype.indent = function() {
    this.richTextCodeMirror_.indent();
    this.codeMirror_.focus();
  };

  Firepad.prototype.unindent = function() {
    this.richTextCodeMirror_.unindent();
    this.codeMirror_.focus();
  };

  Firepad.prototype.undo = function() {
    this.codeMirror_.undo();
  };

  Firepad.prototype.redo = function() {
    this.codeMirror_.redo();
  };

  Firepad.prototype.insertEntity = function(type, info, origin) {
    this.richTextCodeMirror_.insertEntityAtCursor(type, info, origin);
  };

  Firepad.prototype.insertEntityAt = function(index, type, info, origin) {
    this.richTextCodeMirror_.insertEntityAt(index, type, info, origin);
  };

  Firepad.prototype.registerEntity = function(type, options) {
    this.entityManager_.register(type, options);
  };

  Firepad.prototype.getOption = function(option, def) {
    return (option in this.options_) ? this.options_[option] : def;
  };

  Firepad.prototype.assertReady_ = function(funcName) {
    if (!this.ready_) {
      throw new Error('You must wait for the "ready" event before calling ' + funcName + '.');
    }
    if (this.zombie_) {
      throw new Error('You can\'t use a Firepad after calling dispose()!');
    }
  };

  Firepad.prototype.makeImageDialog_ = function() {
    this.makeDialog_('img', 'Insert image url');
  };

  Firepad.prototype.makeDialog_ = function(id, placeholder) {
   var self = this;

   var hideDialog = function() {
     var dialog = document.getElementById('overlay');
     dialog.style.visibility = "hidden";
     self.firepadWrapper_.removeChild(dialog);
   };

   var cb = function() {
     var dialog = document.getElementById('overlay');
     dialog.style.visibility = "hidden";
     var src = document.getElementById(id).value;
     if (src !== null)
       self.insertEntity(id, { 'src': src });
     self.firepadWrapper_.removeChild(dialog);
   };

   var input = utils.elt('input', null, { 'class':'firepad-dialog-input', 'id':id, 'type':'text', 'placeholder':placeholder, 'autofocus':'autofocus' });

   var submit = utils.elt('a', 'Submit', { 'class': 'firepad-btn', 'id':'submitbtn' });
   utils.on(submit, 'click', utils.stopEventAnd(cb));

   var cancel = utils.elt('a', 'Cancel', { 'class': 'firepad-btn' });
   utils.on(cancel, 'click', utils.stopEventAnd(hideDialog));

   var buttonsdiv = utils.elt('div', [submit, cancel], { 'class':'firepad-btn-group' });

   var div = utils.elt('div', [input, buttonsdiv], { 'class':'firepad-dialog-div' });
   var dialog = utils.elt('div', [div], { 'class': 'firepad-dialog', id:'overlay' });

   this.firepadWrapper_.appendChild(dialog);
  };

  Firepad.prototype.addToolbar_ = function() {
    this.toolbar = new RichTextToolbar(this.imageInsertionUI);

    this.toolbar.on('undo', this.undo, this);
    this.toolbar.on('redo', this.redo, this);
    this.toolbar.on('bold', this.bold, this);
    this.toolbar.on('italic', this.italic, this);
    this.toolbar.on('underline', this.underline, this);
    this.toolbar.on('strike', this.strike, this);
    this.toolbar.on('font-size', this.fontSize, this);
    this.toolbar.on('font', this.font, this);
    this.toolbar.on('color', this.color, this);
    this.toolbar.on('left', function() { this.align('left')}, this);
    this.toolbar.on('center', function() { this.align('center')}, this);
    this.toolbar.on('right', function() { this.align('right')}, this);
    this.toolbar.on('ordered-list', this.orderedList, this);
    this.toolbar.on('unordered-list', this.unorderedList, this);
    this.toolbar.on('todo-list', this.todo, this);
    this.toolbar.on('indent-increase', this.indent, this);
    this.toolbar.on('indent-decrease', this.unindent, this);
    this.toolbar.on('insert-image', this.makeImageDialog_, this);

    this.firepadWrapper_.insertBefore(this.toolbar.element(), this.firepadWrapper_.firstChild);
  };

  Firepad.prototype.addPoweredByLogo_ = function() {
    var poweredBy = utils.elt('a', null, { 'class': 'powered-by-firepad'} );
    poweredBy.setAttribute('href', 'http://www.firepad.io/');
    poweredBy.setAttribute('target', '_blank');
    this.firepadWrapper_.appendChild(poweredBy)
  };

  Firepad.prototype.initializeKeyMap_ = function() {
    function binder(fn) {
      return function(cm) {
        // HACK: CodeMirror will often call our key handlers within a cm.operation(), and that
        // can mess us up (we rely on events being triggered synchronously when we make CodeMirror
        // edits).  So to escape any cm.operation(), we do a setTimeout.
        setTimeout(function() {
          fn.call(cm.firepad);
        }, 0);
      }
    }

    CodeMirror.keyMap["richtext"] = {
      "Ctrl-B": binder(this.bold),
      "Cmd-B": binder(this.bold),
      "Ctrl-I": binder(this.italic),
      "Cmd-I": binder(this.italic),
      "Ctrl-U": binder(this.underline),
      "Cmd-U": binder(this.underline),
      "Ctrl-H": binder(this.highlight),
      "Cmd-H": binder(this.highlight),
      "Enter": binder(this.newline),
      "Delete": binder(this.deleteRight),
      "Backspace": binder(this.deleteLeft),
      "Tab": binder(this.indent),
      "Shift-Tab": binder(this.unindent),
      fallthrough: ['default']
    };
  };

  function colorFromUserId (userId) {
    var a = 1;
    for (var i = 0; i < userId.length; i++) {
      a = 17 * (a+userId.charCodeAt(i)) % 360;
    }
    var hue = a/360;

    return hsl2hex(hue, 1, 0.85);
  }

  function rgb2hex (r, g, b) {
    function digits (n) {
      var m = Math.round(255*n).toString(16);
      return m.length === 1 ? '0'+m : m;
    }
    return '#' + digits(r) + digits(g) + digits(b);
  }

  function hsl2hex (h, s, l) {
    if (s === 0) { return rgb2hex(l, l, l); }
    var var2 = l < 0.5 ? l * (1+s) : (l+s) - (s*l);
    var var1 = 2 * l - var2;
    var hue2rgb = function (hue) {
      if (hue < 0) { hue += 1; }
      if (hue > 1) { hue -= 1; }
      if (6*hue < 1) { return var1 + (var2-var1)*6*hue; }
      if (2*hue < 1) { return var2; }
      if (3*hue < 2) { return var1 + (var2-var1)*6*(2/3 - hue); }
      return var1;
    };
    return rgb2hex(hue2rgb(h+1/3), hue2rgb(h), hue2rgb(h-1/3));
  }

  return Firepad;
})(this);

// Export Text classes
firepad.Firepad.Formatting = firepad.Formatting;
firepad.Firepad.Text = firepad.Text;
firepad.Firepad.Entity = firepad.Entity;
firepad.Firepad.LineFormatting = firepad.LineFormatting;
firepad.Firepad.Line = firepad.Line;
firepad.Firepad.TextOperation = firepad.TextOperation;
firepad.Firepad.Headless = firepad.Headless;

// Export adapters
firepad.Firepad.RichTextCodeMirrorAdapter = firepad.RichTextCodeMirrorAdapter;
firepad.Firepad.ACEAdapter = firepad.ACEAdapter;

return firepad.Firepad; }, this);