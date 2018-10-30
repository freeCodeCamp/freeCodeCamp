"use strict";
const xnv = require("xml-name-validator");
const DOMException = require("domexception");
const { XML_NS, XMLNS_NS } = require("../helpers/namespaces");

// https://dom.spec.whatwg.org/#validate

exports.name = function (name) {
  const result = xnv.name(name);
  if (!result.success) {
    throw new DOMException(
      "\"" + name + "\" did not match the Name production: " + result.error,
      "InvalidCharacterError"
    );
  }
};

exports.qname = function (qname) {
  exports.name(qname);

  const result = xnv.qname(qname);
  if (!result.success) {
    throw new DOMException(
      "\"" + qname + "\" did not match the QName production: " + result.error,
      "InvalidCharacterError"
    );
  }
};

exports.validateAndExtract = function (namespace, qualifiedName) {
  if (namespace === "") {
    namespace = null;
  }

  exports.qname(qualifiedName);

  let prefix = null;
  let localName = qualifiedName;

  const colonIndex = qualifiedName.indexOf(":");
  if (colonIndex !== -1) {
    prefix = qualifiedName.substring(0, colonIndex);
    localName = qualifiedName.substring(colonIndex + 1);
  }

  if (prefix !== null && namespace === null) {
    throw new DOMException(
      "A namespace was given but a prefix was also extracted from the qualifiedName",
      "NamespaceError"
    );
  }

  if (prefix === "xml" && namespace !== XML_NS) {
    throw new DOMException(
      "A prefix of \"xml\" was given but the namespace was not the XML namespace",
      "NamespaceError"
    );
  }

  if ((qualifiedName === "xmlns" || prefix === "xmlns") && namespace !== XMLNS_NS) {
    throw new DOMException("A prefix or qualifiedName of \"xmlns\" was given but the namespace was not the XMLNS " +
      "namespace", "NamespaceError");
  }

  if (namespace === XMLNS_NS && qualifiedName !== "xmlns" && prefix !== "xmlns") {
    throw new DOMException(
      "The XMLNS namespace was given but neither the prefix nor qualifiedName was \"xmlns\"",
      "NamespaceError"
    );
  }

  return { namespace, prefix, localName };
};
