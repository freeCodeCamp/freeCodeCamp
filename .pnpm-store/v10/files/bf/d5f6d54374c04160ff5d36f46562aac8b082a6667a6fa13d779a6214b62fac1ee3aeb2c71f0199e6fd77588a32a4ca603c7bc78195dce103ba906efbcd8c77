var PointerEventsCheckLevel = /*#__PURE__*/ function(PointerEventsCheckLevel) {
    /**
   * Check pointer events on every user interaction that triggers a bunch of events.
   * E.g. once for releasing a mouse button even though this triggers `pointerup`, `mouseup`, `click`, etc...
   */ PointerEventsCheckLevel[PointerEventsCheckLevel["EachTrigger"] = 4] = "EachTrigger";
    /** Check each target once per call to pointer (related) API */ PointerEventsCheckLevel[PointerEventsCheckLevel["EachApiCall"] = 2] = "EachApiCall";
    /** Check each event target once */ PointerEventsCheckLevel[PointerEventsCheckLevel["EachTarget"] = 1] = "EachTarget";
    /** No pointer events check */ PointerEventsCheckLevel[PointerEventsCheckLevel["Never"] = 0] = "Never";
    return PointerEventsCheckLevel;
}({});

export { PointerEventsCheckLevel };
