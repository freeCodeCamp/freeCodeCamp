"use strict";
const DOMException = require("../generated/DOMException");
const { serializeURL } = require("whatwg-url");

// https://html.spec.whatwg.org/#history-3
exports.implementation = class HistoryImpl {
  constructor(globalObject, args, privateData) {
    this._window = privateData.window;
    this._document = privateData.document;
    this._actAsIfLocationReloadCalled = privateData.actAsIfLocationReloadCalled;
    this._state = null;

    this._globalObject = globalObject;
  }

  _guardAgainstInactiveDocuments() {
    if (!this._window) {
      throw DOMException.create(this._globalObject, [
        "History object is associated with a document that is not fully active.",
        "SecurityError"
      ]);
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

  pushState(data, unused, url) {
    this._sharedPushAndReplaceState(data, url, "push");
  }
  replaceState(data, unused, url) {
    this._sharedPushAndReplaceState(data, url, "replace");
  }

  // https://html.spec.whatwg.org/#shared-history-push/replace-state-steps
  _sharedPushAndReplaceState(data, url, historyHandling) {
    this._guardAgainstInactiveDocuments();

    // TODO structured clone data

    let newURL = this._document._URL;
    if (url !== null && url.length > 0) {
      newURL = this._document.encodingParseAURL(url);

      if (newURL === null) {
        throw DOMException.create(this._globalObject, [
          `Could not parse url argument "${url}" to ${historyHandling}State() against base URL ` +
          `"${this._document.baseURLSerialized()}".`,
          "SecurityError"
        ]);
      }

      if (!canHaveItsURLRewritten(this._document, newURL)) {
        throw DOMException.create(this._globalObject, [
          `${historyHandling}State() cannot update history to the URL ${serializeURL(newURL)}.`,
          "SecurityError"
        ]);
      }
    }

    // What follows is very unlike the spec's URL and history update steps. Maybe if we implement real session
    // history/navigation, we can fix that.

    if (historyHandling === "push") {
      this._window._sessionHistory.removeAllEntriesAfterCurrentEntry();

      this._window._sessionHistory.clearHistoryTraversalTasks();

      const newEntry = {
        document: this._document,
        stateObject: data,
        url: newURL
      };
      this._window._sessionHistory.addEntryAfterCurrentEntry(newEntry);
      this._window._sessionHistory.updateCurrentEntry(newEntry);
    } else {
      const { currentEntry } = this._window._sessionHistory;
      currentEntry.stateObject = data;
      currentEntry.url = newURL;
    }

    // TODO: If the current entry in the session history represents a non-GET request
    // (e.g. it was the result of a POST submission) then update it to instead represent
    // a GET request.

    this._document._URL = newURL;
    this._document._clearBaseURLCache();

    // arguably it's a bit odd that the state and latestEntry do not belong to the SessionHistory
    // but the spec gives them to "History" and "Document" respecively.
    this._state = data; // TODO clone again!! O_o
    this._document._latestEntry = this._window._sessionHistory.currentEntry;
  }
};

function canHaveItsURLRewritten(document, targetURL) {
  const documentURL = document._URL;

  if (targetURL.scheme !== documentURL.scheme || targetURL.username !== documentURL.username ||
      targetURL.password !== documentURL.password || targetURL.host !== documentURL.host ||
      targetURL.port !== documentURL.port) {
    return false;
  }

  if (targetURL.scheme === "https" || targetURL.scheme === "http") {
    return true;
  }

  if (targetURL.scheme === "file" && targetURL.path !== documentURL.path) {
    return false;
  }

  if (targetURL.path.join("/") !== documentURL.path.join("/") || targetURL.query !== documentURL.query) {
    return false;
  }

  return true;
}
