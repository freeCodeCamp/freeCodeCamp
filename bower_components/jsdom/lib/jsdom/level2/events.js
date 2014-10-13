/* DOM Level2 Events implemented as described here:
 *
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html
 *
 */
var core = require("./core").dom.level2.core,
    utils = require("../utils"),
    defineGetter = utils.defineGetter,
    defineSetter = utils.defineSetter,
    inheritFrom = utils.inheritFrom;

// modify cloned instance for more info check: https://github.com/tmpvar/jsdom/issues/325
core = Object.create(core);

var events = {};

events.EventException = function() {
    if (arguments.length > 0) {
        this._code = arguments[0];
    } else {
        this._code = 0;
    }
    if (arguments.length > 1) {
        this._message = arguments[1];
    } else {
        this._message = "Unspecified event type";
    }
    Error.call(this, this._message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, events.EventException);
    }
};
inheritFrom(Error, events.EventException, {
  UNSPECIFIED_EVENT_TYPE_ERR : 0,
  get code() { return this._code;}
});

events.Event = function(eventType) {
    this._eventType = eventType;
    this._type = null;
    this._bubbles = null;
    this._cancelable = null;
    this._target = null;
    this._currentTarget = null;
    this._eventPhase = null;
    this._timeStamp = null;
    this._preventDefault = false;
    this._stopPropagation = false;
};
events.Event.prototype = {
    initEvent: function(type, bubbles, cancelable) {
        this._type = type;
        this._bubbles = bubbles;
        this._cancelable = cancelable;
    },
    preventDefault: function() {
        if (this._cancelable) {
            this._preventDefault = true;
        }
    },
    stopPropagation: function() {
        this._stopPropagation = true;
    },
    CAPTURING_PHASE : 1,
    AT_TARGET       : 2,
    BUBBLING_PHASE  : 3,
    get eventType() { return this._eventType; },
    get type() { return this._type; },
    get bubbles() { return this._bubbles; },
    get cancelable() { return this._cancelable; },
    get target() { return this._target; },
    get currentTarget() { return this._currentTarget; },
    get eventPhase() { return this._eventPhase; },
    get timeStamp() { return this._timeStamp; }
};


events.UIEvent = function(eventType) {
    events.Event.call(this, eventType);
    this.view = null;
    this.detail = null;
};
inheritFrom(events.Event, events.UIEvent, {
    initUIEvent: function(type, bubbles, cancelable, view, detail) {
        this.initEvent(type, bubbles, cancelable);
        this.view = view;
        this.detail = detail;
    },
});


events.MouseEvent = function(eventType) {
    events.UIEvent.call(this, eventType);
    this.screenX = null;
    this.screenY = null;
    this.clientX = null;
    this.clientY = null;
    this.ctrlKey = null;
    this.shiftKey = null;
    this.altKey = null;
    this.metaKey = null;
    this.button = null;
    this.relatedTarget = null;
};
inheritFrom(events.UIEvent, events.MouseEvent, {
    initMouseEvent:   function(type,
                               bubbles,
                               cancelable,
                               view,
                               detail,
                               screenX,
                               screenY,
                               clientX,
                               clientY,
                               ctrlKey,
                               altKey,
                               shiftKey,
                               metaKey,
                               button,
                               relatedTarget) {
        this.initUIEvent(type, bubbles, cancelable, view, detail);
        this.screenX  = screenX
        this.screenY  = screenY
        this.clientX  = clientX
        this.clientY  = clientY
        this.ctrlKey  = ctrlKey
        this.shiftKey  = shiftKey
        this.altKey  = altKey
        this.metaKey  = metaKey
        this.button  = button
        this.relatedTarget  = relatedTarget
    }
});


events.MutationEvent = function(eventType) {
    events.Event.call(this, eventType);
    this.relatedNode = null;
    this.prevValue = null;
    this.newValue = null;
    this.attrName = null;
    this.attrChange = null;
};
inheritFrom(events.Event, events.MutationEvent, {
    initMutationEvent:   function(type,
                                  bubbles,
                                  cancelable,
                                  relatedNode,
                                  prevValue,
                                  newValue,
                                  attrName,
                                  attrChange) {
        this.initEvent(type, bubbles, cancelable);
        this.relatedNode = relatedNode;
        this.prevValue = prevValue;
        this.newValue = newValue;
        this.attrName = attrName;
        this.attrChange = attrChange;
    },
    MODIFICATION : 1,
    ADDITION     : 2,
    REMOVAL      : 3
});

events.EventTarget = function() {};

events.EventTarget.getListeners = function getListeners(target, type, capturing) {
    var listeners = target._listeners
            && target._listeners[type]
            && target._listeners[type][capturing] || [];
    if (!capturing) {
        var traditionalHandler = target['on' + type];
        if (traditionalHandler) {
            var implementation = (target._ownerDocument ? target._ownerDocument.implementation
                                                        : target.document.implementation);

            if (implementation.hasFeature('ProcessExternalResources', 'script')) {
                listeners.push(traditionalHandler);
            }
        }
    }
    return listeners;
};

events.EventTarget.dispatch = function dispatch(event, iterator, capturing) {
    var listeners,
        currentListener,
        target = iterator();

    while (target && !event._stopPropagation) {
        listeners = events.EventTarget.getListeners(target, event._type, capturing);
        currentListener = listeners.length;
        while (currentListener--) {
            event._currentTarget = target;
            try {
              listeners[currentListener].call(target, event);
            } catch (e) {
              target.raise(
                'error', "Dispatching event '" + event._type + "' failed",
                {error: e, event: event}
              );
            }
        }
        target = iterator();
    }
    return !event._stopPropagation;
};

events.EventTarget.forwardIterator = function forwardIterator(list) {
  var i = 0, len = list.length;
  return function iterator() { return i < len ? list[i++] : null };
};

events.EventTarget.backwardIterator = function backwardIterator(list) {
  var i = list.length;
  return function iterator() { return i >=0 ? list[--i] : null };
};

events.EventTarget.singleIterator = function singleIterator(obj) {
  var i = 1;
  return function iterator() { return i-- ? obj : null };
};

events.EventTarget.prototype = {
    addEventListener: function(type, listener, capturing) {
        this._listeners = this._listeners || {};
        var listeners = this._listeners[type] || {};
        capturing = (capturing === true);
        var capturingListeners = listeners[capturing] || [];
        for (var i=0; i < capturingListeners.length; i++) {
            if (capturingListeners[i] === listener) {
                return;
            }
        }
        capturingListeners.push(listener);
        listeners[capturing] = capturingListeners;
        this._listeners[type] = listeners;
    },

    removeEventListener: function(type, listener, capturing) {
        var listeners  = this._listeners && this._listeners[type];
        if (!listeners) return;
        var capturingListeners = listeners[(capturing === true)];
        if (!capturingListeners) return;
        for (var i=0; i < capturingListeners.length; i++) {
            if (capturingListeners[i] === listener) {
                capturingListeners.splice(i, 1);
                return;
            }
        }
    },

    dispatchEvent: function(event) {
        if (event == null) {
            throw new events.EventException(0, "Null event");
        }
        if (event._type == null || event._type == "") {
            throw new events.EventException(0, "Uninitialized event");
        }

        var targetList = [];

        event._target = this;

        //per the spec we gather the list of targets first to ensure
        //against dom modifications during actual event dispatch
        var target = this,
            targetParent = target._parentNode;
        while (targetParent) {
            targetList.push(targetParent);
            target = targetParent;
            targetParent = target._parentNode;
        }
        targetParent = target._parentWindow;
        if (targetParent) {
            targetList.push(targetParent);
        }

        var iterator = events.EventTarget.backwardIterator(targetList);

        event._eventPhase = event.CAPTURING_PHASE;
        if (!events.EventTarget.dispatch(event, iterator, true)) return event._preventDefault;

        iterator = events.EventTarget.singleIterator(event._target);
        event._eventPhase = event.AT_TARGET;
        if (!events.EventTarget.dispatch(event, iterator, false)) return event._preventDefault;

        if (event._bubbles && !event._stopPropagation) {
            var i = 0;
            iterator = events.EventTarget.forwardIterator(targetList);
            event._eventPhase = event.BUBBLING_PHASE;
            events.EventTarget.dispatch(event, iterator, false);
        }

        return event._preventDefault;
    }

};

// Reinherit class heirarchy with EventTarget at its root
inheritFrom(events.EventTarget, core.Node, core.Node.prototype);

// Node
inheritFrom(core.Node, core.Attr, core.Attr.prototype);
inheritFrom(core.Node, core.CharacterData, core.CharacterData.prototype);
inheritFrom(core.Node, core.Document, core.Document.prototype);
inheritFrom(core.Node, core.DocumentFragment, core.DocumentFragment.prototype);
inheritFrom(core.Node, core.DocumentType, core.DocumentType.prototype);
inheritFrom(core.Node, core.Element, core.Element.prototype);
inheritFrom(core.Node, core.Entity, core.Entity.prototype);
inheritFrom(core.Node, core.EntityReference, core.EntityReference.prototype);
inheritFrom(core.Node, core.Notation, core.Notation.prototype);
inheritFrom(core.Node, core.ProcessingInstruction, core.ProcessingInstruction.prototype);

// CharacterData
inheritFrom(core.CharacterData, core.Text, core.Text.prototype);

// Text
inheritFrom(core.Text, core.CDATASection, core.CDATASection.prototype);
inheritFrom(core.Text, core.Comment, core.Comment.prototype);

function getDocument(el) {
  return el.nodeType == core.Node.DOCUMENT_NODE ? el : el._ownerDocument;
}

function mutationEventsEnabled(el) {
  return el.nodeType != core.Node.ATTRIBUTE_NODE &&
         getDocument(el).implementation.hasFeature('MutationEvents');
}

utils.intercept(core.Node, 'insertBefore', function(_super, args, newChild, refChild) {
  var ret = _super.apply(this, args);
  if (mutationEventsEnabled(this)) {
    var doc = getDocument(this),
        ev = doc.createEvent("MutationEvents");

    ev.initMutationEvent("DOMNodeInserted", true, false, this, null, null, null, null);
    newChild.dispatchEvent(ev);
    if (this.nodeType == core.Node.DOCUMENT_NODE || this._attachedToDocument) {
      ev = doc.createEvent("MutationEvents");
      ev.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      core.visitTree(newChild, function(el) {
        if (el.nodeType == core.Node.ELEMENT_NODE) {
          el.dispatchEvent(ev);
          el._attachedToDocument = true;
        }
      });
    }
  }
  return ret;
});

utils.intercept(core.Node, 'removeChild', function (_super, args, oldChild) {
  if (mutationEventsEnabled(this)) {
    var doc = getDocument(this),
        ev = doc.createEvent("MutationEvents");

    ev.initMutationEvent("DOMNodeRemoved", true, false, this, null, null, null, null);
    oldChild.dispatchEvent(ev);

    ev = doc.createEvent("MutationEvents");
    ev.initMutationEvent("DOMNodeRemovedFromDocument", false, false, null, null, null, null, null);
    core.visitTree(oldChild, function(el) {
      if (el.nodeType == core.Node.ELEMENT_NODE) {
        el.dispatchEvent(ev);
        el._attachedToDocument = false;
      }
    });
  }
  return _super.apply(this, args);
});

function dispatchAttrEvent(doc, target, prevVal, newVal, attrName, attrChange) {
  if (!newVal || newVal != prevVal) {
    var ev = doc.createEvent("MutationEvents");
    ev.initMutationEvent("DOMAttrModified", true, false, target, prevVal,
                         newVal, attrName, attrChange);
    target.dispatchEvent(ev);
  }
}

function attrNodeInterceptor(change) {
  return function(_super, args, node) {
    var target = this._parentNode,
        prev = _super.apply(this, args);

    if (mutationEventsEnabled(target)) {
      dispatchAttrEvent(target._ownerDocument,
                        target,
                        prev && prev.value || null,
                        change == 'ADDITION' ? node.value : null,
                        prev && prev.name || node.name,
                        events.MutationEvent.prototype[change]);
    }

    return prev;
  };
}

function attrInterceptor(ns) {
  return function(_super, args, localName, value, _name, _prefix, namespace) {
    var target = this._parentNode;

    if (!mutationEventsEnabled(target)) {
      _super.apply(this, args);
      return;
    }

    if (namespace === undefined) {
        namespace = null;
    }

    var prev =
          ns ? this.$getNode(namespace, localName) : this.$getNoNS(localName);
    var prevVal = prev && prev.value || null;

    _super.apply(this, args);

    var node = ns ? this.$getNode(namespace, localName):
            this.$getNoNS(localName);

    dispatchAttrEvent(target._ownerDocument,
                      target,
                      prevVal,
                      node.value,
                      node.name,
                      events.MutationEvent.prototype.ADDITION);
  };
}


utils.intercept(core.AttributeList, '$removeNode',
                attrNodeInterceptor('REMOVAL'));
utils.intercept(core.AttributeList, '$setNode',
                attrNodeInterceptor('ADDITION'));
utils.intercept(core.AttributeList, '$set', attrInterceptor(true));
utils.intercept(core.AttributeList, '$setNoNS', attrInterceptor(false));

defineGetter(core.CharacterData.prototype, "_nodeValue", function() {
  return this.__nodeValue;
});
defineSetter(core.CharacterData.prototype, "_nodeValue", function(value) {
  var oldValue = this.__nodeValue;
  this.__nodeValue = value;
  if (this._ownerDocument && this._parentNode && mutationEventsEnabled(this)) {
    var ev = this._ownerDocument.createEvent("MutationEvents")
    ev.initMutationEvent("DOMCharacterDataModified", true, false, this, oldValue, value, null, null);
    this.dispatchEvent(ev);
  }
});

core.Document.prototype.createEvent = function(eventType) {
    switch (eventType) {
        case "MutationEvents": return new events.MutationEvent(eventType);
        case "UIEvents": return new events.UIEvent(eventType);
        case "MouseEvents": return new events.MouseEvent(eventType);
        case "HTMLEvents": return new events.Event(eventType);
    }
    return new events.Event(eventType);
};

exports.dom =
{
  level2 : {
    core   : core,
    events : events
  }
};
