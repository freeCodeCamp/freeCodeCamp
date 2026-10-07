"use strict";

/**
 * Queue for all the resources to be download except async scripts.
 * Async scripts have their own queue AsyncResourceQueue.
 */
module.exports = class ResourceQueue {
  constructor({ paused, asyncQueue } = {}) {
    this.paused = Boolean(paused);
    this._asyncQueue = asyncQueue;
  }

  getLastScript() {
    let head = this.tail;

    while (head) {
      if (head.isScript) {
        return head;
      }
      head = head.prev;
    }

    return null;
  }

  _moreScripts() {
    let found = false;

    let head = this.tail;
    while (head && !found) {
      found = head.isScript;
      head = head.prev;
    }

    return found;
  }

  _notify() {
    if (this._listener) {
      this._listener();
    }
  }

  setListener(listener) {
    this._listener = listener;
  }

  push(request, onLoad, onError, keepLast, element) {
    const isScript = element ? element.localName === "script" : false;

    if (!request) {
      if (isScript && !this._moreScripts()) {
        return onLoad();
      }

      request = Promise.resolve();
    }
    const q = this;
    const item = {
      isScript,
      err: null,
      element,
      fired: false,
      data: null,
      keepLast,
      prev: q.tail,
      check() {
        if (!q.paused && !this.prev && this.fired) {
          let promise;

          if (this.err && onError) {
            promise = onError(this.err);
          }

          if (!this.err && onLoad) {
            promise = onLoad(this.data);
          }

          Promise.resolve(promise)
            .then(() => {
              if (this.next) {
                this.next.prev = null;
                this.next.check();
              } else { // q.tail===this
                q.tail = null;
                q._notify();
              }

              this.finished = true;

              if (q._asyncQueue) {
                q._asyncQueue.notifyItem(this);
              }
            });
        }
      }
    };
    if (q.tail) {
      if (q.tail.keepLast) {
        // if the tail is the load event in document and we receive a new element to load
        // we should add this new request before the load event.
        if (q.tail.prev) {
          q.tail.prev.next = item;
        }
        item.prev = q.tail.prev;
        q.tail.prev = item;
        item.next = q.tail;
      } else {
        q.tail.next = item;
        q.tail = item;
      }
    } else {
      q.tail = item;
    }
    return request
      .then(data => {
        item.fired = 1;
        item.data = data;
        item.check();
      })
      .catch(err => {
        item.fired = true;
        item.err = err;
        item.check();
      });
  }

  resume() {
    if (!this.paused) {
      return;
    }
    this.paused = false;

    let head = this.tail;
    while (head && head.prev) {
      head = head.prev;
    }
    if (head) {
      head.check();
    }
  }
};
