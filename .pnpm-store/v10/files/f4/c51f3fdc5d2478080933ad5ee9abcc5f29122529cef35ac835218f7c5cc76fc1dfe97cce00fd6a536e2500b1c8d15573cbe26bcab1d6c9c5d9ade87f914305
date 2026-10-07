"use strict";

exports.__esModule = true;
exports.createSubscription = createSubscription;

var _batch = require("./batch");

function createListenerCollection() {
  const batch = (0, _batch.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};

function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners; // Reasons to keep the subscription active

  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

  let selfSubscribed = false;

  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return selfSubscribed;
  }

  function trySubscribe() {
    subscriptionsAmount++;

    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    subscriptionsAmount--;

    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }

  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}