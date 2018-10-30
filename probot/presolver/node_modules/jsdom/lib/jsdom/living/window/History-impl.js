"use strict";
const DOMException = require("domexception");
const { documentBaseURLSerialized, parseURLToResultingURLRecord } = require("../helpers/document-base-url.js");

// https://html.spec.whatwg.org/#history-3
exports.implementation = class HistoryImpl {
  constructor(args, privateData) {
    this._window = privateData.window;
    this._document = privateData.document;
    this._actAsIfLocationReloadCalled = privateData.actAsIfLocationReloadCalled;
    this._state = null;
  }

  _guardAgainstInactiveDocuments() {
    if (!this._window) {
      throw new DOMException("History object is associated with a document that is not fully active.", "SecurityError");
    }
  }

  get length() {
    this._guardAgainstInactiveDocuments();

    return this._window._sessionHistory.length;
  }

  get state() {
    this._guardAgainstInactiveDocuments();

    return this._state;
  }

  go(delta) {
    this._guardAgainstInactiveDocuments();

    if (delta === 0) {
      // When the go(delta) method is invoked, if delta is zero, the user agent must act as
      // if the location.reload() method was called instead.
      this._actAsIfLocationReloadCalled();
    } else {
      // Otherwise, the user agent must traverse the history by a delta whose value is delta
      this._window._sessionHistory.traverseByDelta(delta);
    }
  }

  back() {
    this.go(-1);
  }

  forward() {
    this.go(+1);
  }

  pushState(data, title, url) {
    this._sharedPushAndReplaceState(data, title, url, "pushState");
  }
  replaceState(data, title, url) {
    this._sharedPushAndReplaceState(data, title, url, "replaceState");
  }

  // https://html.spec.whatwg.org/#dom-history-pushstate
  _sharedPushAndReplaceState(data, title, url, methodName) {
    this._guardAgainstInactiveDocuments();

    // TODO structured clone data

    let newURL;
    if (url !== null) {
      // Not implemented: use of entry settings object's API base URL. Instead we just use the document base URL. The
      // difference matters in the case of cross-frame calls.
      newURL = parseURLToResultingURLRecord(url, this._document);

      if (newURL === null) {
        throw new DOMException(`Could not parse url argument "${url}" to ${methodName} ` +
          `against base URL "${documentBaseURLSerialized(this._document)}".`, "SecurityError");
      }

      if (newURL.scheme !== this._document._URL.scheme ||
          newURL.username !== this._document._URL.username ||
          newURL.password !== this._document._URL.password ||
          newURL.host !== this._document._URL.host ||
          newURL.port !== this._document._URL.port ||
          newURL.cannotBeABaseURL !== this._document._URL.cannotBeABaseURL) {
        throw new DOMException(`${methodName} cannot update history to a URL which ` +
          `differs in components other than in path, query, or fragment.`, "SecurityError");
      }

      // Not implemented: origin check (seems to only apply to documents with weird origins, e.g. sandboxed ones)
    } else {
      newURL = this._window._sessionHistory.currentEntry.url;
    }

    if (methodName === "pushState") {
      this._window._sessionHistory.removeAllEntriesAfterCurrentEntry();

      this._window._sessionHistory.clearHistoryTraversalTasks();

      const newEntry = {
        document: this._document,
        stateObject: data,
        title,
        url: newURL
      };
      this._window._sessionHistory.addEntryAfterCurrentEntry(newEntry);
      this._window._sessionHistory.updateCurrentEntry(newEntry);
    } else {
      const { currentEntry } = this._window._sessionHistory;
      currentEntry.stateObject = data;
      currentEntry.title = title;
      currentEntry.url = newURL;
    }

    // TODO: If the current entry in the session history represents a non-GET request
    // (e.g. it was the result of a POST submission) then update it to instead represent
    // a GET request.

    this._document._URL = newURL;

    // arguably it's a bit odd that the state and latestEntry do not belong to the SessionHistory
    // but the spec gives them to "History" and "Document" respecively.
    this._state = data; // TODO clone again!! O_o
    this._document._latestEntry = this._window._sessionHistory.currentEntry;
  }
};
