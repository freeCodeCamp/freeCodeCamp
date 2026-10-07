'use strict';

var CSSClassList = function (node) {
  this.parentNode = node;
  this.classNames = new Set();
  const value = node.attributes.class;
  if (value != null) {
    this.addClassValueHandler();
    this.setClassValue(value);
  }
};

// attr.class.value

CSSClassList.prototype.addClassValueHandler = function () {
  Object.defineProperty(this.parentNode.attributes, 'class', {
    get: this.getClassValue.bind(this),
    set: this.setClassValue.bind(this),
    enumerable: true,
    configurable: true,
  });
};

CSSClassList.prototype.getClassValue = function () {
  var arrClassNames = Array.from(this.classNames);
  return arrClassNames.join(' ');
};

CSSClassList.prototype.setClassValue = function (newValue) {
  if (typeof newValue === 'undefined') {
    this.classNames.clear();
    return;
  }
  var arrClassNames = newValue.split(' ');
  this.classNames = new Set(arrClassNames);
};

CSSClassList.prototype.add = function (/* variadic */) {
  this.addClassValueHandler();
  Object.values(arguments).forEach(this._addSingle.bind(this));
};

CSSClassList.prototype._addSingle = function (className) {
  this.classNames.add(className);
};

CSSClassList.prototype.remove = function (/* variadic */) {
  this.addClassValueHandler();
  Object.values(arguments).forEach(this._removeSingle.bind(this));
};

CSSClassList.prototype._removeSingle = function (className) {
  this.classNames.delete(className);
};

CSSClassList.prototype.item = function (index) {
  var arrClassNames = Array.from(this.classNames);
  return arrClassNames[index];
};

CSSClassList.prototype.toggle = function (className, force) {
  if (this.contains(className) || force === false) {
    this.classNames.delete(className);
  }
  this.classNames.add(className);
};

CSSClassList.prototype.contains = function (className) {
  return this.classNames.has(className);
};

module.exports = CSSClassList;
