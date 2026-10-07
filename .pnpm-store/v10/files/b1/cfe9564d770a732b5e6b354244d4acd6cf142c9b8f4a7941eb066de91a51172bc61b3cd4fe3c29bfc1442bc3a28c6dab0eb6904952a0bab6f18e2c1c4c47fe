"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = createEvent;
exports.fireEvent = fireEvent;
var _config = require("./config");
var _helpers = require("./helpers");
var _eventMap = require("./event-map");
function fireEvent(element, event) {
  return (0, _config.getConfig)().eventWrapper(() => {
    if (!event) {
      throw new Error(`Unable to fire an event - please provide an event object.`);
    }
    if (!element) {
      throw new Error(`Unable to fire a "${event.type}" event - please provide a DOM element.`);
    }
    return element.dispatchEvent(event);
  });
}
function createEvent(eventName, node, init, {
  EventType = 'Event',
  defaultInit = {}
} = {}) {
  if (!node) {
    throw new Error(`Unable to fire a "${eventName}" event - please provide a DOM element.`);
  }
  const eventInit = {
    ...defaultInit,
    ...init
  };
  const {
    target: {
      value,
      files,
      ...targetProperties
    } = {}
  } = eventInit;
  if (value !== undefined) {
    setNativeValue(node, value);
  }
  if (files !== undefined) {
    // input.files is a read-only property so this is not allowed:
    // input.files = [file]
    // so we have to use this workaround to set the property
    Object.defineProperty(node, 'files', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: files
    });
  }
  Object.assign(node, targetProperties);
  const window = (0, _helpers.getWindowFromNode)(node);
  const EventConstructor = window[EventType] || window.Event;
  let event;
  /* istanbul ignore else  */
  if (typeof EventConstructor === 'function') {
    event = new EventConstructor(eventName, eventInit);
  } else {
    // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
    event = window.document.createEvent(EventType);
    const {
      bubbles,
      cancelable,
      detail,
      ...otherInit
    } = eventInit;
    event.initEvent(eventName, bubbles, cancelable, detail);
    Object.keys(otherInit).forEach(eventKey => {
      event[eventKey] = otherInit[eventKey];
    });
  }

  // DataTransfer is not supported in jsdom: https://github.com/jsdom/jsdom/issues/1568
  const dataTransferProperties = ['dataTransfer', 'clipboardData'];
  dataTransferProperties.forEach(dataTransferKey => {
    const dataTransferValue = eventInit[dataTransferKey];
    if (typeof dataTransferValue === 'object') {
      /* istanbul ignore if  */
      if (typeof window.DataTransfer === 'function') {
        Object.defineProperty(event, dataTransferKey, {
          value: Object.getOwnPropertyNames(dataTransferValue).reduce((acc, propName) => {
            Object.defineProperty(acc, propName, {
              value: dataTransferValue[propName]
            });
            return acc;
          }, new window.DataTransfer())
        });
      } else {
        Object.defineProperty(event, dataTransferKey, {
          value: dataTransferValue
        });
      }
    }
  });
  return event;
}
Object.keys(_eventMap.eventMap).forEach(key => {
  const {
    EventType,
    defaultInit
  } = _eventMap.eventMap[key];
  const eventName = key.toLowerCase();
  createEvent[key] = (node, init) => createEvent(eventName, node, init, {
    EventType,
    defaultInit
  });
  fireEvent[key] = (node, init) => fireEvent(node, createEvent[key](node, init));
});

// function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
  const {
    set: valueSetter
  } = Object.getOwnPropertyDescriptor(element, 'value') || {};
  const prototype = Object.getPrototypeOf(element);
  const {
    set: prototypeValueSetter
  } = Object.getOwnPropertyDescriptor(prototype, 'value') || {};
  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    /* istanbul ignore if */
    // eslint-disable-next-line no-lonely-if -- Can't be ignored by istanbul otherwise
    if (valueSetter) {
      valueSetter.call(element, value);
    } else {
      throw new Error('The given element does not have a value setter');
    }
  }
}
Object.keys(_eventMap.eventAliasMap).forEach(aliasKey => {
  const key = _eventMap.eventAliasMap[aliasKey];
  fireEvent[aliasKey] = (...args) => fireEvent[key](...args);
});

/* eslint complexity:["error", 9] */