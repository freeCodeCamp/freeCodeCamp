"use strict";

class QueueItem {
  constructor(onLoad, onError, dependentItem) {
    this.onLoad = onLoad;
    this.onError = onError;
    this.data = null;
    this.error = null;
    this.dependentItem = dependentItem;
  }
}

/**
 * AsyncResourceQueue is the queue in charge of run the async scripts
 * and notify when they finish.
 */
module.exports = class AsyncResourceQueue {
  constructor() {
    this.items = new Set();
    this.dependentItems = new Set();
  }

  count() {
    return this.items.size + this.dependentItems.size;
  }

  _notify() {
    if (this._listener) {
      this._listener();
    }
  }

  _check(item) {
    let promise;

    if (item.onError && item.error) {
      promise = item.onError(item.error);
    } else if (item.onLoad && item.data) {
      promise = item.onLoad(item.data);
    }

    promise
      .then(() => {
        this.items.delete(item);
        this.dependentItems.delete(item);

        if (this.count() === 0) {
          this._notify();
        }
      });
  }

  setListener(listener) {
    this._listener = listener;
  }

  push(request, onLoad, onError, dependentItem) {
    const q = this;

    const item = new QueueItem(onLoad, onError, dependentItem);

    q.items.add(item);

    return request
      .then(data => {
        item.data = data;

        if (dependentItem && !dependentItem.finished) {
          q.dependentItems.add(item);
          return q.items.delete(item);
        }

        if (onLoad) {
          return q._check(item);
        }

        q.items.delete(item);

        if (q.count() === 0) {
          q._notify();
        }

        return null;
      })
      .catch(err => {
        item.error = err;

        if (dependentItem && !dependentItem.finished) {
          q.dependentItems.add(item);
          return q.items.delete(item);
        }

        if (onError) {
          return q._check(item);
        }

        q.items.delete(item);

        if (q.count() === 0) {
          q._notify();
        }

        return null;
      });
  }

  notifyItem(syncItem) {
    for (const item of this.dependentItems) {
      if (item.dependentItem === syncItem) {
        this._check(item);
      }
    }
  }
};
