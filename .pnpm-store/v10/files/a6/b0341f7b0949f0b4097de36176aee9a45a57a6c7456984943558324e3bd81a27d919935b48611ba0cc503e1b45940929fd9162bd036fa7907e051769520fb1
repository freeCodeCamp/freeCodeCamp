"use strict";

const { domSymbolTree } = require("./internal-constants");
const reportException = require("./runtime-script-errors");

const Event = require("../generated/Event");
const idlUtils = require("../generated/utils");
const MutationRecord = require("../generated/MutationRecord");

const MUTATION_TYPE = {
  ATTRIBUTES: "attributes",
  CHARACTER_DATA: "characterData",
  CHILD_LIST: "childList"
};

// Note:
// Since jsdom doesn't currently implement the concept of "unit of related similar-origin browsing contexts"
// (https://html.spec.whatwg.org/multipage/browsers.html#unit-of-related-similar-origin-browsing-contexts)
// we will approximate that the following properties are global for now.

// https://dom.spec.whatwg.org/#mutation-observer-compound-microtask-queued-flag
let mutationObserverMicrotaskQueueFlag = false;

// Non-spec compliant: List of all the mutation observers with mutation records enqueued. It's a replacement for
// mutation observer list (https://dom.spec.whatwg.org/#mutation-observer-list) but without leaking since it's empty
// before notifying the mutation observers.
const activeMutationObservers = new Set();

// https://dom.spec.whatwg.org/#signal-slot-list
const signalSlotList = [];

// https://dom.spec.whatwg.org/#queue-a-mutation-record
function queueMutationRecord(
  type,
  target,
  name,
  namespace,
  oldValue,
  addedNodes,
  removedNodes,
  previousSibling,
  nextSibling
) {
  const interestedObservers = new Map();

  const nodes = domSymbolTree.ancestorsToArray(target);

  for (const node of nodes) {
    for (const registered of node._registeredObserverList) {
      const { options, observer: mo } = registered;

      if (
        !(node !== target && options.subtree === false) &&
        !(type === MUTATION_TYPE.ATTRIBUTES && options.attributes !== true) &&
        !(type === MUTATION_TYPE.ATTRIBUTES && options.attributeFilter &&
          !options.attributeFilter.some(value => value === name || value === namespace)) &&
        !(type === MUTATION_TYPE.CHARACTER_DATA && options.characterData !== true) &&
        !(type === MUTATION_TYPE.CHILD_LIST && options.childList === false)
      ) {
        if (!interestedObservers.has(mo)) {
          interestedObservers.set(mo, null);
        }

        if (
          (type === MUTATION_TYPE.ATTRIBUTES && options.attributeOldValue === true) ||
          (type === MUTATION_TYPE.CHARACTER_DATA && options.characterDataOldValue === true)
        ) {
          interestedObservers.set(mo, oldValue);
        }
      }
    }
  }

  for (const [observer, mappedOldValue] of interestedObservers.entries()) {
    const record = MutationRecord.createImpl(target._globalObject, [], {
      type,
      target,
      attributeName: name,
      attributeNamespace: namespace,
      oldValue: mappedOldValue,
      addedNodes,
      removedNodes,
      previousSibling,
      nextSibling
    });

    observer._recordQueue.push(record);
    activeMutationObservers.add(observer);
  }

  queueMutationObserverMicrotask();
}

// https://dom.spec.whatwg.org/#queue-a-tree-mutation-record
function queueTreeMutationRecord(target, addedNodes, removedNodes, previousSibling, nextSibling) {
  queueMutationRecord(
    MUTATION_TYPE.CHILD_LIST,
    target,
    null,
    null,
    null,
    addedNodes,
    removedNodes,
    previousSibling,
    nextSibling
  );
}

// https://dom.spec.whatwg.org/#queue-an-attribute-mutation-record
function queueAttributeMutationRecord(target, name, namespace, oldValue) {
  queueMutationRecord(
    MUTATION_TYPE.ATTRIBUTES,
    target,
    name,
    namespace,
    oldValue,
    [],
    [],
    null,
    null
  );
}

// https://dom.spec.whatwg.org/#queue-a-mutation-observer-compound-microtask
function queueMutationObserverMicrotask() {
  if (mutationObserverMicrotaskQueueFlag) {
    return;
  }

  mutationObserverMicrotaskQueueFlag = true;

  Promise.resolve().then(() => {
    notifyMutationObservers();
  });
}

// https://dom.spec.whatwg.org/#notify-mutation-observers
function notifyMutationObservers() {
  mutationObserverMicrotaskQueueFlag = false;

  const notifyList = [...activeMutationObservers].sort((a, b) => a._id - b._id);
  activeMutationObservers.clear();

  const signalList = [...signalSlotList];
  signalSlotList.splice(0, signalSlotList.length);

  for (const mo of notifyList) {
    const records = [...mo._recordQueue];
    mo._recordQueue = [];

    for (const node of mo._nodeList) {
      node._registeredObserverList = node._registeredObserverList.filter(registeredObserver => {
        return registeredObserver.source !== mo;
      });
    }

    if (records.length > 0) {
      try {
        const moWrapper = idlUtils.wrapperForImpl(mo);
        mo._callback.call(
          moWrapper,
          records.map(idlUtils.wrapperForImpl),
          moWrapper
        );
      } catch (e) {
        const { target } = records[0];
        const window = target._ownerDocument._defaultView;

        reportException(window, e);
      }
    }
  }

  for (const slot of signalList) {
    const slotChangeEvent = Event.createImpl(
      slot._globalObject,
      [
        "slotchange",
        { bubbles: true }
      ],
      { isTrusted: true }
    );

    slot._dispatch(slotChangeEvent);
  }
}

module.exports = {
  MUTATION_TYPE,

  queueMutationRecord,
  queueTreeMutationRecord,
  queueAttributeMutationRecord,

  queueMutationObserverMicrotask,

  signalSlotList
};
