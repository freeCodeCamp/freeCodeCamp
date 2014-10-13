"use strict";

var load = require("../util").load(__dirname);

exports["setAttribute should change the first attribute, irrespective of namespace"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // setAttribute changes the first attribute, irrespective of namespace.
  body.setAttributeNS("foo", "x", "first");
  body.setAttributeNS("foo2", "x", "second");
  body.setAttribute("x", "changed");

  // Check that the attribues are as we expect.
  t.equal(body.attributes.length, 2, "two attributes");
  t.equal(body.getAttribute("x"), "changed");
  t.equal(body.getAttributeNS("foo", "x"), "changed");
  t.equal(body.getAttributeNS("foo2", "x"), "second");

  t.done();
};

exports["removeAttribute should remove the first attribute, irrespective of namespace when the first attribute is " +
        "not in a namespace"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // Set body with attributes for testing.
  body.setAttribute("x", "first");
  body.setAttributeNS("foo", "x", "second");

  // Check that the attributes are as we expect.
  t.equal(body.attributes.length, 2, "two attributes");
  t.equal(body.getAttribute("x"), "first");
  t.equal(body.getAttributeNS(null, "x"), "first");
  t.equal(body.getAttributeNS("foo", "x"), "second");

  // removeAttribute removes the first attribute with name "x" that
  // we set on the element, irrespective of namespace.
  body.removeAttribute("x");

  // The only attribute remaining should be the second one.
  t.equal(body.getAttribute("x"), "second");
  t.equal(body.getAttributeNS(null, "x"), null);
  t.equal(body.getAttributeNS("foo", "x"), "second");
  t.equal(body.attributes.length, 1, "one attribute");

  t.done();
};

exports["removeAttribute should remove the first attribute, irrespective of namespace when the first attribute is " +
        "in a namespace"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // Set body with attributes for testing.
  body.setAttributeNS("foo", "x", "first");
  body.setAttributeNS("foo2", "x", "second");

  // Check that the attribues are as we expect.
  t.equal(body.attributes.length, 2, "two attributes");
  t.equal(body.getAttribute("x"), "first");
  t.equal(body.getAttributeNS("foo", "x"), "first");
  t.equal(body.getAttributeNS("foo2", "x"), "second");

  // removeAttribute removes the first attribute with name "x" that
  // we set on the element, irrespective of namespace.
  body.removeAttribute("x");

  // The only attribute remaining should be the second one.
  t.equal(body.getAttribute("x"), "second");
  t.equal(body.getAttributeNS("foo", "x"), null);
  t.equal(body.getAttributeNS("foo2", "x"), "second");
  t.equal(body.attributes.length, 1, "one attribute");

  t.done();
};

exports["hasAttribute should check for attribute presence, irrespective of namespace"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // Set body with attributes for testing.
  body.setAttributeNS("foo", "x", "first");

  // Checks for attribute presence, irrespective of namespace.
  t.ok(body.hasAttribute("x"));

  t.done();
};

exports["an attribute set by setAttributeNS should be accessible as a field on the `attributes` field of an " +
        "Element"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // This attribute should be available as body.attribute.x.
  body.setAttribute("x", "first");

  t.equal(body.attributes.length, 1, "one attribute");
  t.equal(body.attributes.x.value, "first");

  t.done();
};


exports["an attribute with a null namespace should be accessible as a field on the `attributes` field of an " +
        "Element"] = function (t) {
    var doc = load("minimal");
    var body = doc.getElementsByTagName("body")[0];
    t.ok(body, "body is not null");

    // This attribute should be available as body.attribute.x.
    body.setAttributeNS(null, "x", "first");

    t.equal(body.attributes.length, 1, "one attribute");
    t.equal(body.attributes.x.value, "first");

    t.done();
};

exports["an attribute with a set namespace should be accessible as a field on the `attributes` field of an " +
        "Element"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // This does not make body.attributes.x available.
  body.setAttributeNS("foo", "x", "first");

  t.equal(body.attributes.length, 1, "one attribute");
  t.equal(body.attributes.x, undefined);

  t.done();
};

exports["setting an attribute should not overwrite the methods of an `AttributeList` object"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // This does not overwrite methods.
  body.setAttributeNS("foo", "setNamedItem", "first");

  t.equal(body.attributes.length, 1, "one attribute");
  t.equal(typeof body.attributes.setNamedItem, "function");

  t.done();
};

exports["setting an attribute should not overwrite the methods defined by parents of an `AttributeList` " +
        "object"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // This does not overwrite methods on parent prototypes.
  body.setAttributeNS("foo", "toString", "first");

  t.equal(body.attributes.length, 1, "one attribute");
  t.equal(typeof body.attributes.toString, "function");

  t.done();
};

exports["setting an attribute should not overwrite the fields of an `AttributeList` object"] = function (t) {
  var doc = load("minimal");
  var body = doc.getElementsByTagName("body")[0];
  t.ok(body, "body is not null");

  // This does not overwrite fields.
  body.setAttributeNS("foo", "length", "first");

  t.equal(body.attributes.length, 1, "one attribute");
  t.done();
};
