"use strict";

var jsdom = require("../..").jsdom;

exports["a default window should have a history object with correct default values"] = function (t) {
  var window = jsdom().parentWindow;

  t.ok(window.history);
  t.strictEqual(window.history.state, null);
  t.strictEqual(window.history.length, 0);

  t.done();
};

exports["the history object should update correctly when calling pushState/replaceState"] = function (t) {
  var window = jsdom().parentWindow;

  // Absolute path
  window.history.pushState({ foo: "one" }, "unused title", "/bar/baz#fuzz");
  t.strictEqual(window.history.length, 1);
  t.strictEqual(window.history.state.foo, "one");
  t.strictEqual(window.location.pathname, "/bar/baz");
  t.strictEqual(window.location.hash, "#fuzz");

  window.history.pushState({ foo: "two" }, "unused title 2", "/bar/foo#boo");
  t.strictEqual(window.history.length, 2);
  t.strictEqual(window.history.state.foo, "two");
  t.strictEqual(window.location.pathname, "/bar/foo");
  t.strictEqual(window.location.hash, "#boo");

  // Relative path
  window.history.pushState({ foo: "three" }, "unused title 3", "fizz");
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "three");
  t.strictEqual(window.location.pathname, "/bar/fizz");
  t.strictEqual(window.location.hash, "");

  window.history.replaceState({ foo: "four" }, "unused title 4", "/buzz");
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "four");
  t.strictEqual(window.location.pathname, "/buzz");

  t.done();
};

exports["the history object should update correctly when calling forward/back/go"] = function (t) {
  var window = jsdom().parentWindow;

  [
    [{ foo: "bar" }, "title 1", "/bar"],
    [{ foo: "baz" }, "title 2", "/baz"],
    [{ foo: "buzz" }, "title 3", "/buzz"]
  ].forEach(function (args) {
    window.history.pushState.apply(window.history, args);
  });

  // Sanity check
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "buzz");
  t.strictEqual(window.location.pathname, "/buzz");

  // Test forward boundary
  window.history.forward();
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "buzz");
  t.strictEqual(window.location.pathname, "/buzz");

  window.history.back();
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "baz");
  t.strictEqual(window.location.pathname, "/baz");

  window.history.back();
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "bar");
  t.strictEqual(window.location.pathname, "/bar");

  // Test backward boundary
  window.history.back();
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "bar");
  t.strictEqual(window.location.pathname, "/bar");

  window.history.go(2);
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "buzz");
  t.strictEqual(window.location.pathname, "/buzz");

  t.done();
};

exports["the history object should update correctly when calling pushState with index behind length"] = function (t) {
  var window = jsdom().parentWindow;

  [
    [{ foo: "bar" }, "title 1", "/bar"],
    [{ foo: "baz" }, "title 2", "/baz"],
    [{ foo: "buzz" }, "title 3", "/buzz"]
  ].forEach(function (args) {
    window.history.pushState.apply(window.history, args);
  });

  // Sanity check
  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "buzz");
  t.strictEqual(window.location.pathname, "/buzz");
  window.history.go(-2);

  t.strictEqual(window.history.length, 3);
  t.strictEqual(window.history.state.foo, "bar");
  t.strictEqual(window.location.pathname, "/bar");

  // Call pushState when index is behind length
  window.history.pushState({ foo: "bar-b" }, "title 2b", "/bar/b");

  t.strictEqual(window.history.length, 2);
  t.strictEqual(window.history.state.foo, "bar-b");
  t.strictEqual(window.location.pathname, "/bar/b");

  t.done();
};

exports["the history object should fire popstate on the window while navigating the history"] = function (t) {
  var window = jsdom().parentWindow;

  var eventFired = false;
  var state = { foo: "bar" };
  var eventState;

  window.addEventListener("popstate", function (event) {
    eventFired = true;
    eventState = event.state;
  });

  window.history.pushState(state, "title", "bar");

  setTimeout(function () {
    t.ok(eventFired, "popstate event should be fired.");
    t.strictEqual(state, eventState);
    t.done();
  }, 10);
};
