var validAttributeName = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/;
var nullController = {
  revert: function revert() {}
};
var elements = /*#__PURE__*/new Map();
var mutations = /*#__PURE__*/new Set();

function getObserverInit(attr) {
  return attr === 'html' ? {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  } : {
    childList: false,
    subtree: false,
    attributes: true,
    attributeFilter: [attr]
  };
}

function getElementRecord(element) {
  var record = elements.get(element);

  if (!record) {
    record = {
      element: element,
      attributes: {}
    };
    elements.set(element, record);
  }

  return record;
}

function createElementPropertyRecord(el, attr, getCurrentValue, setValue, mutationRunner) {
  var currentValue = getCurrentValue(el);
  var record = {
    isDirty: false,
    originalValue: currentValue,
    virtualValue: currentValue,
    mutations: [],
    el: el,
    _positionTimeout: null,
    observer: new MutationObserver(function () {
      // enact a 1 second timeout that blocks subsequent firing of the
      // observer until the timeout is complete. This will prevent multiple
      // mutations from firing in quick succession, which can cause the
      // mutation to be reverted before the DOM has a chance to update.
      if (attr === 'position' && record._positionTimeout) return;else if (attr === 'position') record._positionTimeout = setTimeout(function () {
        record._positionTimeout = null;
      }, 1000);
      var currentValue = getCurrentValue(el);
      if (attr === 'position' && currentValue.parentNode === record.virtualValue.parentNode && currentValue.insertBeforeNode === record.virtualValue.insertBeforeNode) return;
      if (currentValue === record.virtualValue) return;
      record.originalValue = currentValue;
      mutationRunner(record);
    }),
    mutationRunner: mutationRunner,
    setValue: setValue,
    getCurrentValue: getCurrentValue
  };

  if (attr === 'position' && el.parentNode) {
    record.observer.observe(el.parentNode, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  } else {
    record.observer.observe(el, getObserverInit(attr));
  }

  return record;
}

function queueIfNeeded(val, record) {
  var currentVal = record.getCurrentValue(record.el);
  record.virtualValue = val;

  if (val && typeof val !== 'string') {
    if (!currentVal || val.parentNode !== currentVal.parentNode || val.insertBeforeNode !== currentVal.insertBeforeNode) {
      record.isDirty = true;
      runDOMUpdates();
    }
  } else if (val !== currentVal) {
    record.isDirty = true;
    runDOMUpdates();
  }
}

function htmlMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(getTransformedHTML(val), record);
}

function classMutationRunner(record) {
  var val = new Set(record.originalValue.split(/\s+/).filter(Boolean));
  record.mutations.forEach(function (m) {
    return m.mutate(val);
  });
  queueIfNeeded(Array.from(val).filter(Boolean).join(' '), record);
}

function attrMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(val, record);
}

function _loadDOMNodes(_ref) {
  var parentSelector = _ref.parentSelector,
      insertBeforeSelector = _ref.insertBeforeSelector;
  var parentNode = document.querySelector(parentSelector);
  if (!parentNode) return null;
  var insertBeforeNode = insertBeforeSelector ? document.querySelector(insertBeforeSelector) : null;
  if (insertBeforeSelector && !insertBeforeNode) return null;
  return {
    parentNode: parentNode,
    insertBeforeNode: insertBeforeNode
  };
}

function positionMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    var selectors = m.mutate();

    var newNodes = _loadDOMNodes(selectors);

    val = newNodes || val;
  });
  queueIfNeeded(val, record);
}

var getHTMLValue = function getHTMLValue(el) {
  return el.innerHTML;
};

var setHTMLValue = function setHTMLValue(el, value) {
  return el.innerHTML = value;
};

function getElementHTMLRecord(element) {
  var elementRecord = getElementRecord(element);

  if (!elementRecord.html) {
    elementRecord.html = createElementPropertyRecord(element, 'html', getHTMLValue, setHTMLValue, htmlMutationRunner);
  }

  return elementRecord.html;
}

var getElementPosition = function getElementPosition(el) {
  return {
    parentNode: el.parentElement,
    insertBeforeNode: el.nextElementSibling
  };
};

var setElementPosition = function setElementPosition(el, value) {
  if (value.insertBeforeNode && !value.parentNode.contains(value.insertBeforeNode)) {
    // skip position mutation - insertBeforeNode not a child of parent. happens
    // when mutation observer for indvidual element fires out of order
    return;
  }

  value.parentNode.insertBefore(el, value.insertBeforeNode);
};

function getElementPositionRecord(element) {
  var elementRecord = getElementRecord(element);

  if (!elementRecord.position) {
    elementRecord.position = createElementPropertyRecord(element, 'position', getElementPosition, setElementPosition, positionMutationRunner);
  }

  return elementRecord.position;
}

var setClassValue = function setClassValue(el, val) {
  return val ? el.className = val : el.removeAttribute('class');
};

var getClassValue = function getClassValue(el) {
  return el.className;
};

function getElementClassRecord(el) {
  var elementRecord = getElementRecord(el);

  if (!elementRecord.classes) {
    elementRecord.classes = createElementPropertyRecord(el, 'class', getClassValue, setClassValue, classMutationRunner);
  }

  return elementRecord.classes;
}

var getAttrValue = function getAttrValue(attrName) {
  return function (el) {
    var _el$getAttribute;

    return (_el$getAttribute = el.getAttribute(attrName)) != null ? _el$getAttribute : null;
  };
};

var setAttrValue = function setAttrValue(attrName) {
  return function (el, val) {
    return val !== null ? el.setAttribute(attrName, val) : el.removeAttribute(attrName);
  };
};

function getElementAttributeRecord(el, attr) {
  var elementRecord = getElementRecord(el);

  if (!elementRecord.attributes[attr]) {
    elementRecord.attributes[attr] = createElementPropertyRecord(el, attr, getAttrValue(attr), setAttrValue(attr), attrMutationRunner);
  }

  return elementRecord.attributes[attr];
}

function deleteElementPropertyRecord(el, attr) {
  var element = elements.get(el);
  if (!element) return;

  if (attr === 'html') {
    var _element$html, _element$html$observe;

    (_element$html = element.html) == null ? void 0 : (_element$html$observe = _element$html.observer) == null ? void 0 : _element$html$observe.disconnect();
    delete element.html;
  } else if (attr === 'class') {
    var _element$classes, _element$classes$obse;

    (_element$classes = element.classes) == null ? void 0 : (_element$classes$obse = _element$classes.observer) == null ? void 0 : _element$classes$obse.disconnect();
    delete element.classes;
  } else if (attr === 'position') {
    var _element$position, _element$position$obs;

    (_element$position = element.position) == null ? void 0 : (_element$position$obs = _element$position.observer) == null ? void 0 : _element$position$obs.disconnect();
    delete element.position;
  } else {
    var _element$attributes, _element$attributes$a, _element$attributes$a2;

    (_element$attributes = element.attributes) == null ? void 0 : (_element$attributes$a = _element$attributes[attr]) == null ? void 0 : (_element$attributes$a2 = _element$attributes$a.observer) == null ? void 0 : _element$attributes$a2.disconnect();
    delete element.attributes[attr];
  }
}

var transformContainer;

function getTransformedHTML(html) {
  if (!transformContainer) {
    transformContainer = document.createElement('div');
  }

  transformContainer.innerHTML = html;
  return transformContainer.innerHTML;
}

function setPropertyValue(el, attr, m) {
  if (!m.isDirty) return;
  m.isDirty = false;
  var val = m.virtualValue;

  if (!m.mutations.length) {
    deleteElementPropertyRecord(el, attr);
  }

  m.setValue(el, val);
}

function setValue(m, el) {
  m.html && setPropertyValue(el, 'html', m.html);
  m.classes && setPropertyValue(el, 'class', m.classes);
  m.position && setPropertyValue(el, 'position', m.position);
  Object.keys(m.attributes).forEach(function (attr) {
    setPropertyValue(el, attr, m.attributes[attr]);
  });
}

function runDOMUpdates() {
  elements.forEach(setValue);
} // find or create ElementPropertyRecord, add mutation to it, then run


function startMutating(mutation, element) {
  var record = null;

  if (mutation.kind === 'html') {
    record = getElementHTMLRecord(element);
  } else if (mutation.kind === 'class') {
    record = getElementClassRecord(element);
  } else if (mutation.kind === 'attribute') {
    record = getElementAttributeRecord(element, mutation.attribute);
  } else if (mutation.kind === 'position') {
    record = getElementPositionRecord(element);
  }

  if (!record) return;
  record.mutations.push(mutation);
  record.mutationRunner(record);
} // get (existing) ElementPropertyRecord, remove mutation from it, then run


function stopMutating(mutation, el) {
  var record = null;

  if (mutation.kind === 'html') {
    record = getElementHTMLRecord(el);
  } else if (mutation.kind === 'class') {
    record = getElementClassRecord(el);
  } else if (mutation.kind === 'attribute') {
    record = getElementAttributeRecord(el, mutation.attribute);
  } else if (mutation.kind === 'position') {
    record = getElementPositionRecord(el);
  }

  if (!record) return;
  var index = record.mutations.indexOf(mutation);
  if (index !== -1) record.mutations.splice(index, 1);
  record.mutationRunner(record);
} // maintain list of elements associated with mutation


function refreshElementsSet(mutation) {
  // if a position mutation has already found an element to move, don't move
  // any more elements
  if (mutation.kind === 'position' && mutation.elements.size === 1) return;
  var existingElements = new Set(mutation.elements);
  var matchingElements = document.querySelectorAll(mutation.selector);
  matchingElements.forEach(function (el) {
    if (!existingElements.has(el)) {
      mutation.elements.add(el);
      startMutating(mutation, el);
    }
  });
}

function revertMutation(mutation) {
  mutation.elements.forEach(function (el) {
    return stopMutating(mutation, el);
  });
  mutation.elements.clear();
  mutations["delete"](mutation);
}

function refreshAllElementSets() {
  mutations.forEach(refreshElementsSet);
} // Observer for elements that don't exist in the DOM yet


var observer;
function disconnectGlobalObserver() {
  observer && observer.disconnect();
}
function connectGlobalObserver() {
  if (typeof document === 'undefined') return;

  if (!observer) {
    observer = new MutationObserver(function () {
      refreshAllElementSets();
    });
  }

  refreshAllElementSets();
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
} // run on init

connectGlobalObserver();

function newMutation(m) {
  // Not in a browser
  if (typeof document === 'undefined') return nullController; // add to global index of mutations

  mutations.add(m); // run refresh on init to establish list of elements associated w/ mutation

  refreshElementsSet(m);
  return {
    revert: function revert() {
      revertMutation(m);
    }
  };
}

function html(selector, mutate) {
  return newMutation({
    kind: 'html',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}

function position(selector, mutate) {
  return newMutation({
    kind: 'position',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}

function classes(selector, mutate) {
  return newMutation({
    kind: 'class',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}

function attribute(selector, attribute, mutate) {
  if (!validAttributeName.test(attribute)) return nullController;

  if (attribute === 'class' || attribute === 'className') {
    return classes(selector, function (classnames) {
      var mutatedClassnames = mutate(Array.from(classnames).join(' '));
      classnames.clear();
      if (!mutatedClassnames) return;
      mutatedClassnames.split(/\s+/g).filter(Boolean).forEach(function (c) {
        return classnames.add(c);
      });
    });
  }

  return newMutation({
    kind: 'attribute',
    attribute: attribute,
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}

function declarative(_ref2) {
  var selector = _ref2.selector,
      action = _ref2.action,
      value = _ref2.value,
      attr = _ref2.attribute,
      parentSelector = _ref2.parentSelector,
      insertBeforeSelector = _ref2.insertBeforeSelector;

  if (attr === 'html') {
    if (action === 'append') {
      return html(selector, function (val) {
        return val + (value != null ? value : '');
      });
    } else if (action === 'set') {
      return html(selector, function () {
        return value != null ? value : '';
      });
    }
  } else if (attr === 'class') {
    if (action === 'append') {
      return classes(selector, function (val) {
        if (value) val.add(value);
      });
    } else if (action === 'remove') {
      return classes(selector, function (val) {
        if (value) val["delete"](value);
      });
    } else if (action === 'set') {
      return classes(selector, function (val) {
        val.clear();
        if (value) val.add(value);
      });
    }
  } else if (attr === 'position') {
    if (action === 'set' && parentSelector) {
      return position(selector, function () {
        return {
          insertBeforeSelector: insertBeforeSelector,
          parentSelector: parentSelector
        };
      });
    }
  } else {
    if (action === 'append') {
      return attribute(selector, attr, function (val) {
        return val !== null ? val + (value != null ? value : '') : value != null ? value : '';
      });
    } else if (action === 'set') {
      return attribute(selector, attr, function () {
        return value != null ? value : '';
      });
    } else if (action === 'remove') {
      return attribute(selector, attr, function () {
        return null;
      });
    }
  }

  return nullController;
}

var index = {
  html: html,
  classes: classes,
  attribute: attribute,
  position: position,
  declarative: declarative
};

export default index;
export { connectGlobalObserver, disconnectGlobalObserver, validAttributeName };
//# sourceMappingURL=dom-mutator.esm.js.map
