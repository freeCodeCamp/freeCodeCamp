var dom = require("../../lib/jsdom/level1/core").dom.level1.core;

exports.tests = {

  addmetatohead: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var meta = window.document.createElement("meta");
    window.document.getElementsByTagName("head").item(0).appendChild(meta);
    var elements = window.document.getElementsByTagName("head").item(0).childNodes;
    test.strictEqual(elements.item(elements.length-1), meta, 'last element should be the new meta tag');
    test.ok(window.document.innerHTML.indexOf("<meta>") > -1, 'meta should have open tag');
    test.strictEqual(window.document.innerHTML.indexOf("</meta>"), -1, 'meta should not be stringified with a closing tag');
    test.done();
  },

  ensure_a_default_window_has_a_window_location_href: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var rurl = /^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,
        urlParts = rurl.exec(window.location.href);
    test.ok(urlParts.length > 1, 'url shouldnt be blank');
    test.done();
  },

  ensure_a_default_window_has_a_window_location_hash: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var defaultHref = window.location.href;
    test.equals(window.location.hash, "");
    window.location.href = window.location.href + "#foobar";
    test.equals(window.location.hash, "#foobar");
    window.location.hash = "#baz";
    test.equals(window.location.hash, "#baz");
    test.equals(window.location.href, defaultHref + "#baz");
    test.done();
  },

  ensure_a_default_window_has_a_window_location_search: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var defaultSearch = window.location.search;
    test.equals(window.location.search, "");
    window.location.search = window.location.search + "?foo=bar";
    test.equals(window.location.search, "?foo=bar");
    window.location.search = "?baz=qux";
    test.equals(window.location.search, "?baz=qux");
    test.equals(window.location.search, defaultSearch + "?baz=qux");
    test.done();
  },

  ensure_a_default_window_can_set_search_with_a_hash: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    window.location.href = window.location.href + "#foo";
    window.location.search = "?foo=bar";
    test.equals(window.location.href.split("?")[1], "foo=bar#foo");
    window.location.search = "";
    test.equals(window.location.href.indexOf("?"), -1);
    test.done();
  },

  ensure_a_default_window_fires_hashchange_by_changing_href: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var eventfired = false;
    window.addEventListener("hashchange", function() { eventfired = true; });
    window.location.href = window.location.href + "#foo";
    setTimeout(function() {
      test.ok(eventfired, "hashchange event should be fired.");
      test.done();
    }, 100);
  },

  ensure_a_default_window_fires_hashchange_by_changing_hash: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    var eventfired = false;
    window.addEventListener("hashchange", function() { eventfired = true; });
    window.location.hash = "#foo";
    setTimeout(function() {
      test.ok(eventfired, "hashchange event should be fired.");
      test.done();
    }, 100);
  },
  
  ensure_a_default_window_has_a_defined_port: function(test) {
    var window = require("../../lib/jsdom/browser/index").windowAugmentation(dom);
    test.equals(window.location.port, "");
    test.done();
  }
};
