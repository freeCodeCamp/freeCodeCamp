var nwmatcher = require("nwmatcher/src/nwmatcher-noqsa");

function addNwmatcher(document) {
  if (!document._nwmatcher) {
    document._nwmatcher = nwmatcher({ document: document });
    document._nwmatcher.configure({ UNIQUE_ID: false });
  }
  return document._nwmatcher;
}

exports.applyQuerySelectorPrototype = function(dom) {
  dom.Document.prototype.querySelector = function(selector) {
    return addNwmatcher(this).first(selector, this);
  };

  dom.Document.prototype.querySelectorAll = function(selector) {
    return new dom.NodeList(addNwmatcher(this).select(selector, this));
  };

  dom.DocumentFragment.prototype.querySelector = function(selector) {
    return addNwmatcher(this.ownerDocument).first(selector, this);
  };

  dom.DocumentFragment.prototype.querySelectorAll = function(selector) { 
    return new dom.NodeList(addNwmatcher(this.ownerDocument).select(selector, this));
  };

  dom.Element.prototype.querySelector = function(selector) {
    return addNwmatcher(this.ownerDocument).first(selector, this);
  };

  dom.Element.prototype.querySelectorAll = function(selector) {
    return new dom.NodeList(addNwmatcher(this.ownerDocument).select(selector, this));
  };

  dom.Element.prototype.matchesSelector = function(selector) {
    return addNwmatcher(this.ownerDocument).match(this, selector);
  };
};
