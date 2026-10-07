"use strict";

/**
 * Manage all the request and it is able to abort
 * all pending request.
 */
module.exports = class RequestManager {
  constructor() {
    this.openedRequests = [];
  }

  add(req) {
    this.openedRequests.push(req);
  }

  remove(req) {
    const idx = this.openedRequests.indexOf(req);
    if (idx !== -1) {
      this.openedRequests.splice(idx, 1);
    }
  }

  close() {
    for (const openedRequest of this.openedRequests) {
      openedRequest.abort();
    }
    this.openedRequests = [];
  }

  size() {
    return this.openedRequests.length;
  }
};
