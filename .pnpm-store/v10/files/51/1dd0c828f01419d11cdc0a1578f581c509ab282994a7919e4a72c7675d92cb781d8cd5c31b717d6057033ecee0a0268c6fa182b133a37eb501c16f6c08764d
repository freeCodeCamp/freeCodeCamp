"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const Document = require("../generated/Document");
const DocumentFragment = require("../generated/DocumentFragment");

const { cloningSteps, domSymbolTree } = require("../helpers/internal-constants");
const { clone } = require("../node");

class HTMLTemplateElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    const doc = this._appropriateTemplateContentsOwnerDocument(this._ownerDocument);
    this._templateContents = DocumentFragment.createImpl(this._globalObject, [], {
      ownerDocument: doc,
      host: this
    });
  }

  // https://html.spec.whatwg.org/multipage/scripting.html#appropriate-template-contents-owner-document
  _appropriateTemplateContentsOwnerDocument(doc) {
    if (!doc._isInertTemplateDocument) {
      if (doc._associatedInertTemplateDocument === undefined) {
        const newDoc = Document.createImpl(this._globalObject, [], {
          options: {
            parsingMode: doc._parsingMode,
            encoding: doc._encoding
          }
        });
        newDoc._isInertTemplateDocument = true;

        doc._associatedInertTemplateDocument = newDoc;
      }

      doc = doc._associatedInertTemplateDocument;
    }

    return doc;
  }

  // https://html.spec.whatwg.org/multipage/scripting.html#template-adopting-steps
  _adoptingSteps() {
    const doc = this._appropriateTemplateContentsOwnerDocument(this._ownerDocument);
    doc._adoptNode(this._templateContents);
  }

  get content() {
    return this._templateContents;
  }

  [cloningSteps](copy, node, document, cloneChildren) {
    if (!cloneChildren) {
      return;
    }

    for (const child of domSymbolTree.childrenIterator(node._templateContents)) {
      const childCopy = clone(child, copy._templateContents._ownerDocument, true);
      copy._templateContents.appendChild(childCopy);
    }
  }
}

module.exports = {
  implementation: HTMLTemplateElementImpl
};
