"use strict";
const whatwgURL = require("whatwg-url");
const HashChangeEvent = require("../generated/HashChangeEvent.js");
const PopStateEvent = require("../generated/PopStateEvent.js");
const notImplemented = require("../../browser/not-implemented.js");
const idlUtils = require("../generated/utils.js");

// https://html.spec.whatwg.org/#session-history
class SessionHistory {
  constructor(initialEntry, window) {
    this._window = window;
    this._windowImpl = idlUtils.implForWrapper(window);
    this._historyTraversalQueue = new Set();
    this._entries = [initialEntry];
    this._currentIndex = 0;
  }

  _queueHistoryTraversalTask(fn) {
    const timeoutId = this._window.setTimeout(() => {
      this._historyTraversalQueue.delete(timeoutId);
      fn();
    }, 0);

    this._historyTraversalQueue.add(timeoutId);
  }

  clearHistoryTraversalTasks() {
    for (const timeoutId of this._historyTraversalQueue) {
      this._window.clearTimeout(timeoutId);
    }
    this._historyTraversalQueue.clear();
  }

  get length() {
    return this._entries.length;
  }

  get currentEntry() {
    return this._entries[this._currentIndex];
  }

  // https://html.spec.whatwg.org/#dom-history-pushstate
  removeAllEntriesAfterCurrentEntry() {
    this._entries.splice(this._currentIndex + 1, Infinity);
  }

  // https://html.spec.whatwg.org/#traverse-the-history-by-a-delta
  traverseByDelta(delta) {
    this._queueHistoryTraversalTask(() => {
      const newIndex = this._currentIndex + delta;
      if (newIndex < 0 || newIndex >= this.length) {
        return;
      }

      const specifiedEntry = this._entries[newIndex];

      // Not implemented: unload a document guard

      // Not clear that this should be queued. html/browsers/history/the-history-interface/004.html can be fixed
      // by removing the queue, but doing so breaks some tests in history.js that also pass in browsers.
      this._queueHistoryTraversalTask(() => {
        // If there is an ongoing attempt to navigate specified browsing context that has not yet matured,
        // then cancel that attempt to navigate the browsing context.

        // Doing this seems to break tests involving navigating via push/pop state and via fragments. I think this
        // is because these navigations should already count as having "matured" because the document is not changing.

        // this.clearHistoryTraversalTasks();

        if (specifiedEntry.document !== this.currentEntry.document) {
          // TODO: unload the active document with the recycle parameter set to false
          notImplemented("Traversing history in a way that would change the window", this._window);
        }
        this.traverseHistory(specifiedEntry);
      });
    });
  }

  // https://html.spec.whatwg.org/#traverse-the-history
  traverseHistory(specifiedEntry, flags = {}) {
    if (!specifiedEntry.document) {
      // If entry no longer holds a Document object, then navigate the browsing context to entry's URL
      // to perform an entry update of entry, and abort these steps
      notImplemented("Traversing the history to an entry that no longer holds a Document object", this._window);
    }
    // Not spec compliant, just minimal. Lots of missing steps.

    const nonBlockingEvents = Boolean(flags.nonBlockingEvents);

    const document = idlUtils.implForWrapper(this._window._document);

    const { currentEntry } = this;

    // If the current entry's title was not set by the pushState() or replaceState() methods, then set its title
    // to the value returned by the document.title IDL attribute.
    if (currentEntry.title === undefined) {
      currentEntry.title = document.title;
    }


    if (specifiedEntry.document !== currentEntry.document) {
      // If entry has a different Document object than the current entry, then...
      notImplemented("Traversing the history to an entry with a different Document", this._window);
    }

    document._URL = specifiedEntry.url;

    const hashChanged =
      specifiedEntry.url.fragment !== currentEntry.url.fragment && specifiedEntry.document === currentEntry.document;
    let oldURL;
    let newURL;
    if (hashChanged) {
      oldURL = currentEntry.url;
      newURL = specifiedEntry.url;
    }

    if (flags.replacement) {
      // If the traversal was initiated with replacement enabled, remove the entry immediately before the
      // specified entry in the session history.
      this._entries.splice(this._entries.indexOf(specifiedEntry) - 1, 1);
    }

    this.updateCurrentEntry(specifiedEntry);

    const state = specifiedEntry.stateObject; // TODO structured clone

    // arguably it's a bit odd that the state and latestEntry do not belong to the SessionHistory
    // but the spec gives them to "History" and "Document" respecively.
    document._history._state = state;
    const stateChanged = specifiedEntry.document._latestEntry !== specifiedEntry;
    specifiedEntry.document._latestEntry = specifiedEntry;

    const fireEvents = () => this._fireEvents(stateChanged, hashChanged, state, oldURL, newURL);

    if (nonBlockingEvents) {
      this._window.setTimeout(fireEvents, 0);
    } else {
      fireEvents();
    }
  }

  _fireEvents(stateChanged, hashChanged, state, oldURL, newURL) {
    if (stateChanged) {
      this._windowImpl._dispatch(PopStateEvent.createImpl([
        "popstate",
        {
          bubbles: false,
          state
        }
      ], {
        isTrusted: true
      }));
    }

    if (hashChanged) {
      this._windowImpl._dispatch(HashChangeEvent.createImpl([
        "hashchange",
        {
          bubbles: false,
          oldURL: whatwgURL.serializeURL(oldURL),
          newURL: whatwgURL.serializeURL(newURL)
        }
      ], {
        isTrusted: true
      }));
    }
  }

  addEntryAfterCurrentEntry(entry) {
    this._entries.splice(this._currentIndex + 1, 0, entry);
  }

  updateCurrentEntry(entry) {
    this._currentIndex = this._entries.indexOf(entry);
  }
}
module.exports = SessionHistory;
