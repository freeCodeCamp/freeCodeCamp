var path = require("path");
var fs   = require("fs");
var jsdom = require('../../lib/jsdom');
var inheritFrom = require("../../lib/jsdom/utils").inheritFrom;
var toFileUrl = require('../util').toFileUrl(__dirname);
var http = require("http");
var URL = require('url');
var um = require('urlmaster');

exports.tests = {
  build_window: function(test) {
    var window = jsdom.jsdom().createWindow();
    test.notEqual(window, null, 'window should not be null');
    test.notEqual(window.document, null, 'window.document should not be null');
    test.done();
  },

  jsdom_takes_html: function(test) {
    var document = jsdom.jsdom('<a id="test" href="#test">');
    test.equal(document.getElementById("test").getAttribute("href"), '#test', 'Passing html into jsdom() should populate the resulting doc');
    test.done();
  },

  jsdom_empty_html: function(test) {
    var emptyDoc = jsdom.jsdom('');
    var blankDoc = jsdom.jsdom(' ');
    test.equal(emptyDoc.innerHTML, blankDoc.innerHTML, 'Passing blank and empty strings into jsdom() result in the same html');
    test.done();
  },

  jsdom_method_creates_default_document: function(test) {
    var doc = jsdom.jsdom();
    test.equal(doc.documentElement.nodeName, 'HTML', 'Calling jsdom.jsdom() should automatically populate the doc');
    test.done();
  },

  jquerify: function(test) {
    var jQueryFile = path.resolve(__dirname, '../jquery-fixtures/jquery-1.4.4.js');
    var jQueryUrl = 'http://code.jquery.com/jquery-1.4.4.min.js';

    function tmpWindow() {
      return jsdom.jsdom(null, null, {documentRoot: __dirname}).createWindow();
    }

    // TODO: may need to run this as two different tests... the test seems to be ending before the second callback is happening
    function testFunction(window, jQuery) {
      test.notEqual(window.jQuery.find, null, 'window.jQuery.find should not be null');
      test.notEqual(jQuery.find, null, 'jQuery.find should not be null');
      jQuery("body").html('<p id="para"><a class="link">click <em class="emph">ME</em></a></p>');
      var res = jQuery("#para .emph").text();
      var res2 = jQuery("a.link .emph").text();
      test.equal(jQuery('p#para a.link',window.document.body).attr('class'), 'link', "selecting from body");
      test.strictEqual(jQuery('body').jquery, '1.4.4', 'jQuery version 1.4.4');
      test.equal(res, "ME", "selector should work as expected");
      test.equal(res2, "ME", "selector should work as expected");
    };

    // test.expect(12);
    jsdom.jQueryify(tmpWindow(), jQueryFile, testFunction);
    jsdom.jQueryify(tmpWindow(), jQueryUrl, testFunction);
    test.done();
  },

  jquerify_attribute_selector_gh_400: function(test) {
    var window = jsdom.jsdom().createWindow();

    jsdom.jQueryify(window, path.resolve(__dirname, '../jquery-fixtures/jquery-1.11.0.js'), function () {
      try {
          window.$("body").append('<html><body><div data-foo="bar"/><div data-baz="foo"/></body></html>');

          test.equal(window.$('*[data-foo]').length, 1);
          test.done();
      }
      catch(ex) {
          console.log(ex);
          test.ok(false, "Encountered an error");
          test.done();
      }
    });
  },

  // This is in response to issue # 280 - scripts don't load over https.
  // See: https://github.com/tmpvar/jsdom/issues/280
  //
  // When a transfer is done, HTTPS servers in the wild might emit 'close', or
  // might emit 'end'.  Node's HTTPS server always emits 'end', so we need to
  // fake a 'close' to test this fix.
  env_with_https : function (test) {
    var https = require('https');
    // Save the real https.request so we can restore it later.
    var oldRequest = https.request;
    var EventEmitter = require('events').EventEmitter;

    // Mock response object
    var res = Object.create(EventEmitter.prototype);
    res.setEncoding = function () {};

    // Monkey patch https.request so it emits 'close' instead of 'end.
    https.request = function () {
      // Mock the request object.
      var req = Object.create(EventEmitter.prototype);
      req.setHeader = function () {};
      req.end = function () {};
      process.nextTick(function () {
        req.emit('response', res);
        process.nextTick(function () {
          res.emit('data', 'window.attachedHere = 123');
          res.emit('close');
        });
      });
      return req;
    };

    jsdom.env({
      html: "<a href='/path/to/hello'>World</a>",
      // The script url doesn't matter as long as its https, since our mocked
      // request doens't actually fetch anything.
      scripts: 'https://doesntmatter.com/script.js',
      done: function(errors, window) {
        if (errors) {
          test.ok(false, errors.message);
        } else {
          test.notEqual(window.location, null, 'window.location should not be null');
          test.equal(window.attachedHere, 123, 'script should execute on our window');
          test.equal(window.document.getElementsByTagName("a").item(0).innerHTML, 'World', 'anchor text');
        }
        https.request = oldRequest;
        test.done();
      }
    });
  },

  env_handle_incomplete_dom_with_script: function(test) {
    jsdom.env(
      "http://www.google.com/foo#bar",
      ['http://code.jquery.com/jquery-1.4.4.min.js'],
      function(errors, window) {
        test.equal(errors&&errors.length, 1, 'error handed back to callback');
        test.done();
      });
  },

  env_with_features_and_external_resources: function(test) {
    jsdom.env(
      'http://documentcloud.github.com/backbone/examples/todos/index.html',
      {
        features: {
          FetchExternalResources   : ['script', 'img', 'css', 'frame', 'link'],
          ProcessExternalResources : ['script', 'img', 'css', 'frame', 'link'],
          MutationEvents           : '2.0',
          QuerySelector            : false
        }
      },
      function(errors, window) {
        window.onload = function () {
          test.equal(typeof window._, 'function', 'Underscore loaded');
          test.equal(typeof window.$, 'function', 'jQuery loaded');
          test.done();
        };
      }
    );
  },

  plain_window_document: function(test) {
    var window = (jsdom.createWindow());
    test.strictEqual(typeof window.document, 'undefined', 'jsdom.createWindow() should create a documentless window');
    test.done();
  },

  appendChild_to_document_with_existing_documentElement: function(test) {
    test.expect(2);
    t = function(){
      try {
        var doc = jsdom.jsdom();
        doc.appendChild(doc.createElement('html'));
      } catch (e) {
        test.equal(e.code, 3, 'Should throw HIERARCHY_ERR');
        code = e.code;
        throw(e);
      }
    };
    test.throws(t);
    test.done();
  },

  // TODO: break into two tests
  apply_jsdom_features_at_build_time: function(test) {
    var doc  = new (jsdom.defaultLevel.Document)(),
        doc2 = new (jsdom.defaultLevel.Document)(),
        defaults = jsdom.defaultDocumentFeatures;
    jsdom.applyDocumentFeatures(doc);
    for (var i=0; i<defaults.length; i++) {
      test.ok(doc.implementation.hasFeature(defaults[i]), 'Document has all of the default features');
    }
    jsdom.applyDocumentFeatures(doc2, {'FetchExternalResources': false});
    test.ok(doc2.implementation.hasFeature('ProcessExternalResources'), 'Document has ProcessExternalResources');
    test.equal(doc2.implementation.hasFeature('FetchExternalResources'), false, 'Document does not have \'FetchExternalResources\'');
    test.done();
  },

  ensure_scripts_can_be_disabled_via_options_features: function(test) {
    var html = '<html><head><script src="./files/hello.js"></script></head>' +
               '<body><span id="test">hello from html</span></body></html>';

    var doc2 = jsdom.jsdom(html, null, {
      url: toFileUrl(__filename),
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: false
      }
    });
    setTimeout(function() {
      test.equal(doc2.getElementById("test").innerHTML, 'hello from html', 'js should not be executed (doc2)');
      test.done();
    }, 100);
  },

  ensure_scripts_can_be_executed_via_options_features: function (t) {
    var html = "<html><head><script src='./files/hello.js'></script></head>" +
               "<body><span id='test'>hello from html</span></body></html>";

    var doc = jsdom.jsdom(html, null, {
      url: toFileUrl(__filename),
      features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"]
      }
    });

    doc.parentWindow.doCheck = function () {
      t.equal(doc.getElementById("test").innerHTML, "hello from javascript");
      t.done();
    };
  },

  ensure_resolution_is_not_thrown_off_by_hrefless_base_tag: function (t) {
    var html = "<html><head><base target='whatever'>" +
               "<script src='./files/hello.js'></script></head><body>" +
               "<span id='test'>hello from html</span></body></html>";

    var doc = jsdom.jsdom(html, null, {
      url: toFileUrl(__filename),
      features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"]
      }
    });

    doc.parentWindow.doCheck = function () {
      t.equal(doc.getElementById("test").innerHTML, "hello from javascript");
      t.done();
    };
  },

  ensure_resources_can_be_skipped_via_options_features: function(test) {
    var html = '<html><head><script src="./files/hello.js"></script>' +
               '<script src="./files/nyan.js"></script></head>' +
               '<body><span id="test">hello from html</span><span id="cat">' +
               'hello from cat</body></html>';

    var doc2 = jsdom.jsdom(html, null, {
      url: toFileUrl(__filename),
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script'],
        SkipExternalResources: new RegExp('.*/files/h')
      }
    });
    setTimeout(function() {
      test.equal(doc2.getElementById("test").innerHTML, 'hello from html', 'js should not be executed (doc2)');
      test.equal(doc2.getElementById("cat").innerHTML, 'hello from nyan cat', 'js should be executed (doc2)');
      test.done();
    }, 800);
  },

  load_multiple_resources_with_defer_close: function(test) {
    var html = '<html><head></head><body>' +
      '<frame src="../level2/html/files/iframe.html"></frame>' +
      '<frame src="../level2/html/files/iframe.html"></frame>' +
      '<frame src="../level2/html/files/iframe.html"></frame>' +
      '</body></html>';

    var doc = jsdom.jsdom(html, null,
      {
        url: toFileUrl(__filename),
        features: {
          FetchExternalResources: ['frame'],
          ProcessExternalResources: ['frame','script']
        },
        deferClose: true
      });
    // iframe.html sets onload handler to call loadComplete, so we mock it.
    var window = doc.createWindow();
    doc.parent = window;
    window.loadComplete = function () {};

    test.ok(doc._queue.paused, 'resource queue should be paused');

    var check_handle;
    var timeout_handle = setTimeout(function() {
      doc.onload = null;
      doc.parentWindow.close();
      if (check_handle) {
        clearTimeout(check_handle);
      }
      test.ok(false, "timed out when waiting for onload to fire");
      test.done();
    }, 1000); //1 second timeout

    function check() {
      var q = doc._queue, h = q.tail, count=0;

      check_handle = null;
      while (h) {
        if (h.fired) {
          count++;
          h = h.prev;
        } else {
          check_handle = setTimeout(check, 50);
          return;
        }
      }
      test.equal(count, 3, 'there should be 3 resources in the resource queue');
      doc.close();
    }
    check_handle = setTimeout(check, 50);
    doc.onload = function() {
      clearTimeout(timeout_handle);
      test.done();
    };
  },

  resource_queue: function(test) {
    //ResourceQueue is not exported, so grab it from a doc
    var doc = jsdom.jsdom(), q = doc._queue, counter = 0, increment=function() {counter++;};

    var queueHandles = [q.push(increment), q.push(increment)];
    queueHandles[0](null, true);
    queueHandles.push(q.push(increment));
    queueHandles[1](null, true);
    queueHandles[2](null, true);
    test.strictEqual(counter, 3);
    test.strictEqual(q.tail, null);
    test.done();
  },

  understand_file_protocol: function(test) {
    var html = '\
      <html>\
        <head>\
          <script type="text/javascript" src="' + toFileUrl('files/hello.js') + '"></script>\
        </head>\
        <body>\
          <span id="test">hello from html</span>\
        </body>\
      </html>';

    var doc = jsdom.jsdom(html);
    doc.onload = function() {
      test.equal(doc.getElementById("test").innerHTML, 'hello from javascript', 'resource with file protocol should work');
      test.done();
    };
  },

  importNode: function(test) {
    test.doesNotThrow(function() {
      var doc1 = jsdom.jsdom('<html><body><h1 id="headline">Hello <span id="world">World</span></h1></body></html>'),
          doc2 = jsdom.jsdom();
      doc2.body.appendChild(doc2.importNode(doc1.getElementById('headline'), true));
      doc2.getElementById('world').className = 'foo';
    });
    test.done();
  },

  window_is_augmented_with_dom_features: function(test) {
    var document = jsdom.jsdom(),
        window   = document.createWindow();
    test.ok(window._augmented, 'window must be augmented');
    test.notEqual(window.Element, null, 'window.Element should not be null');
    test.done();
  },

  queryselector: function(test) {
    var html = '<html><body><div id="main"><p class="foo">Foo</p><p>Bar</p></div></body></html>',
        document = jsdom.jsdom(html),
        div = document.body.children.item(0);
    var element = document.querySelector("#main p");
    test.equal(element, div.children.item(0), 'p and first-p');
    var element2 = div.querySelector("p");
    test.equal(element2, div.children.item(0), 'p and first-p');
    var element3 = document.querySelector("#main p:not(.foo)");
    test.equal(element3, div.children.item(1), 'p and second-p');
    var element3 = document.querySelector("#asdf");
    test.strictEqual(element3, null, 'nonexistent becomes null');
    test.done();
  },
  
  queryselector_documentfragment: function(test) {
    var html = '<html><body><div id="main"><p class="foo">Foo</p><p>Bar</p></div></body></html>',
        document = jsdom.jsdom(html),
        div = document.body.children.item(0),
        fragment = document.createDocumentFragment();
    
    fragment.appendChild(document.body.firstChild);
    test.strictEqual(document.body.firstChild, null);
    var element = fragment.querySelector("#main p");
    test.equal(element, div.children.item(0), 'p and first-p');
    var element2 = div.querySelector("p");
    test.equal(element2, div.children.item(0), 'p and first-p');
    var element3 = fragment.querySelector("#main p:not(.foo)");
    test.equal(element3, div.children.item(1), 'p and second-p');
    var element3 = fragment.querySelector("#asdf");
    test.strictEqual(element3, null, 'nonexistent becomes null');
    test.done();
  },

  // TODO: look into breaking into a testcase
  queryselectorall: function(test) {
    var html = '<html><body><div id="main"><p>Foo</p><p>Bar</p></div><div id="next"><div id="next-child"><p>Baz</p></div></div></body></html>',
        document = jsdom.jsdom(html, null),
        div = document.body.children.item(0),
        elements = document.querySelectorAll("#main p");
    test.equal(elements.length, 2, 'two results');
    test.equal(elements.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements.item(1), div.children.item(1), 'p and second-p');
    var elements2 = div.querySelectorAll("p");
    test.equal(elements2.length, 2, 'two results');
    test.equal(elements2.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements2.item(1), div.children.item(1), 'p and second-p');
    test.equal(div.querySelectorAll("#main").length, 0, 'It should not return the base element');
    test.equal(div.querySelectorAll("div").length, 0, 'There are no div elements under div#main');
    var elements3 = div.querySelectorAll("#main p");
    test.equal(elements3.length, 2, 'two results');
    test.equal(elements3.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements3.item(1), div.children.item(1), 'p and second-p');
    var topNode = document.createElement('p'),
        newNode = document.createElement('p');
    topNode.id = "fuz";
    newNode.id = "buz";
    topNode.appendChild(newNode);
    test.equal(topNode.querySelectorAll("#fuz").length, 0, "It should not return the base element that is orphaned");
    var elements4 = topNode.querySelectorAll("#fuz #buz");
    test.equal(elements4.length, 1, 'one result');
    test.equal(elements4.item(0), newNode, 'newNode and first-p');
    var elements5 = div.querySelectorAll('p');
    test.equal(elements5.length, 2, "It should not return elements that are not within the base element's subtrees");
    test.equal(elements5.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements5.item(1), div.children.item(1), 'p and second-p');
    test.strictEqual(topNode.parentNode, null, 'topNode.parentNode is null');
    var nextChildDiv = document.getElementById('next-child');
    var elements6 = nextChildDiv.querySelectorAll('p');
    test.equal(elements6.length, 1, 'p under div#next-child');
    test.equal(elements6.item(0), nextChildDiv.children.item(0), 'child of div#next-child');
    test.done();
  },
  
  queryselectorall__documentfragment: function(test) {
    var html = '<html><body><div id="main"><p>Foo</p><p>Bar</p></div><div id="next"><div id="next-child"><p>Baz</p></div></div></body></html>',
        document = jsdom.jsdom(html, null),
        fragment = document.createDocumentFragment();
    fragment.appendChild(document.body.firstChild);
    fragment.appendChild(document.body.firstChild);
    test.strictEqual(document.body.firstChild, null, 'The body should now be empty');
    var div = fragment.firstChild;
    var elements = fragment.querySelectorAll("#main p");
    test.equal(elements.length, 2, 'two results');
    test.equal(elements.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements.item(1), div.children.item(1), 'p and second-p');
    var elements2 = div.querySelectorAll("p");
    test.equal(elements2.length, 2, 'two results');
    test.equal(elements2.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements2.item(1), div.children.item(1), 'p and second-p');
    test.equal(div.querySelectorAll("#main").length, 0, 'It should not return the base element');
    test.equal(div.querySelectorAll("div").length, 0, 'There are no div elements under div#main');
    var elements3 = div.querySelectorAll("#main p");
    test.equal(elements3.length, 2, 'two results');
    test.equal(elements3.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements3.item(1), div.children.item(1), 'p and second-p');
    var topNode = document.createElement('p'),
        newNode = document.createElement('p');
    topNode.id = "fuz";
    newNode.id = "buz";
    topNode.appendChild(newNode);
    test.equal(topNode.querySelectorAll("#fuz").length, 0, "It should not return the base element that is orphaned");
    var elements4 = topNode.querySelectorAll("#fuz #buz");
    test.equal(elements4.length, 1, 'one result');
    test.equal(elements4.item(0), newNode, 'newNode and first-p');
    var elements5 = div.querySelectorAll('p');
    test.equal(elements5.length, 2, "It should not return elements that are not within the base element's subtrees");
    test.equal(elements5.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements5.item(1), div.children.item(1), 'p and second-p');
    test.equal(topNode.parentNode, null, 'topNode.parentNode is null');
    var nextChildDiv = fragment.querySelectorAll('#next-child').item(0);
    test.notStrictEqual(nextChildDiv, null, 'id selector on fragment not null');
    var elements6 = nextChildDiv.querySelectorAll('p');
    test.equal(elements6.length, 1, 'p under div#next-child');
    test.equal(elements6.item(0), nextChildDiv.children.item(0), 'child of div#next-child');
    var elements7 = fragment.querySelectorAll('p');
    test.equal(elements7.length, 3, 'all p');
    test.equal(elements7.item(0), div.children.item(0), 'p and first-p');
    test.equal(elements7.item(1), div.children.item(1), 'p and second-p');
    test.equal(elements7.item(2), nextChildDiv.children.item(0), 'child of div#next-child');
    test.done();
  },

  matchesselector: function(test) {
    var html = '<html><body><div id="main"><p class="foo">Foo</p><p>Bar</p></div></body></html>';
    var document = jsdom.jsdom(html);
    var div = document.body.children.item(0);

    var element = document.querySelector("#main p");
    test.equal(element.matchesSelector("#main p"), true, 'p and first-p');
    var element2 = div.querySelector("p");
    test.equal(element2.matchesSelector("p"), true, 'p and first-p');
    var element3 = document.querySelector("#main p:not(.foo)");
    test.equal(element3.matchesSelector("#main p:not(.foo)"), true, 'p and second-p');

    test.equal(element.matchesSelector("#asdf"), false, "doesn't match wrong selector");
    test.equal(element2.matchesSelector("#asdf"), false, "doesn't match wrong selector");
    test.equal(element3.matchesSelector("#asdf"), false, "doesn't match wrong selector");

    test.done();
  },

  url_resolution: function(test) {
    var html = '\
  <html>\
    <head></head>\
    <body>\
      <a href="http://example.com" id="link1">link1</a>\
      <a href="/local.html" id="link2">link2</a>\
      <a href="local.html" id="link3">link3</a>\
      <a href="../../local.html" id="link4">link4</a>\
      <a href="#here" id="link5">link5</a>\
      <a href="//example.com/protocol/avoidance.html" id="link6">protocol</a>\
    </body>\
  </html>';

    function testLocal() {
      var url = '/path/to/docroot/index.html';
      var doc = jsdom.jsdom(html, null, {url: url});
      test.equal(um.addPathEmpty(doc.getElementById("link1").href), 'http://example.com/', 'Absolute URL should be left alone except for possible trailing slash');
      test.equal(doc.getElementById("link2").href, '/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link3").href, '/path/to/docroot/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link4").href, '/path/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link5").href, '/path/to/docroot/index.html#here', 'Relative URL should be resolved');
      //test.equal(doc.getElementById("link6").href, '//prototol/avoidance.html', 'Protocol-less URL should be resolved');
    }

    function testRemote() {
      var url = 'http://example.com/path/to/docroot/index.html';
      var doc = jsdom.jsdom(html, null, {url: url});
      test.equal(um.addPathEmpty(doc.getElementById("link1").href), 'http://example.com/', 'Absolute URL should be left alone except for possible trailing slash');
      test.equal(doc.getElementById("link2").href, 'http://example.com/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link3").href, 'http://example.com/path/to/docroot/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link4").href, 'http://example.com/path/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link5").href, 'http://example.com/path/to/docroot/index.html#here', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link6").href, 'http://example.com/protocol/avoidance.html', 'Relative URL should be resolved');
    }

    function testBase() {
      var url  = 'blahblahblah-invalid',
      doc  = jsdom.jsdom(html, null, {url: url}),
      base = doc.createElement("base");
      base.href = 'http://example.com/path/to/docroot/index.html';
      doc.getElementsByTagName("head").item(0).appendChild(base);
      test.equal(um.addPathEmpty(doc.getElementById("link1").href), 'http://example.com/', 'Absolute URL should be left alone except for possible trailing slash');
      test.equal(doc.getElementById("link2").href, 'http://example.com/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link3").href, 'http://example.com/path/to/docroot/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link4").href, 'http://example.com/path/local.html', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link5").href, 'http://example.com/path/to/docroot/index.html#here', 'Relative URL should be resolved');
      test.equal(doc.getElementById("link6").href, 'http://example.com/protocol/avoidance.html', 'Relative URL should be resolved');
    }

    function testAutomated() {
      //  RFC resolution cases from http://tools.ietf.org/html/rfc3986#section-5.2
      // urlmaster builds them all for us

      // create a doc with all of the possible bases and all of the possible refs
      bases = um.generateAll({ scheme: 'http', auth: 'www.why.com', path:'/a/b', query:'?foo=bar', frag:'#abc' }, true),
      refs = um.generateAll({ scheme: 'https', auth: 'www.not.com', path:'/q/r', uery:'?when=now', frag:'#xyz' }, true);

      // build html with every possible link
      var html = '<html><head><base href=""></base></head><body>';
      refs.forEach(function (ref, i) {
        html += '<a href="' + ref + '" id="link' + i + '">link' + i + '</a>\n';
      });
      html += '</body></html>';
      var locn = toFileUrl(__filename);

      // now check each base case
      bases.forEach(function (base, i) {
       var doc = jsdom.jsdom(html, null, { url: locn });
       var expected = um.resolveTrack(locn, base, refs);

      // set up the base
       doc.getElementsByTagName("base")[0].setAttribute("href",base);
       refs.forEach(function (ref, j){
          var href = doc.getElementById("link" + j).href;
          var result = expected[j][3];

          // empty path must accept href with or without a slash; see http://tools.ietf.org/html/rfc3986#section-3.3
          // so we consistently push them towards having
          test.equal(um.addPathEmpty(href), um.addPathEmpty(result),
                     'locn \'' + locn + '\' base \'' + base + '\' with ref \'' +
                     ref + '\' should resolve to \'' + result + '\' (' +
                     um.addPathEmpty(result) + ') instead of \'' + href +
                     '\' (' + um.addPathEmpty(href) + ')');
        });
      });
    }

    testLocal();
    testRemote();
    testBase();
    testAutomated();
    test.done();
  },

  numeric_values: function(test) {
    var html = '<html><body><td data-year="2011" data-month="0" data-day="9">\
                  <a href="#" class=" ">9</a> \
                </td></body></html>';
    var document = jsdom.jsdom(html);
    var a = document.body.children.item(0);

    a.innerHTML = 9;
    a.setAttribute('id', 123);
    test.strictEqual(a.innerHTML, '9', 'Element stringify');
    test.strictEqual(a.getAttributeNode('id').nodeValue, '123', 'Attribute stringify');
    test.done();
  },

  auto_tostring: function(test) {
    var buffer = require("fs").readFileSync(__dirname + "/files/env.html"),
        dom;
    test.doesNotThrow(function(){ dom = jsdom.jsdom(buffer); }, 'buffers should automatically be stringified');
    test.equal(dom.documentElement.getElementsByTagName("*").length, 3, 'should parse as per usual');
    test.done();
  },

  document_should_expose_location: function(test) {
    var window = jsdom.jsdom("").createWindow();
    test.strictEqual(window.document.location, window.location, 'document.location and window.location');
    test.done();
  },


  mutation_events : function(test) {
    var document = jsdom.jsdom();
    document.implementation.addFeature('MutationEvents', '2.0');
    var created = '';
    var removed = '';
    document.addEventListener('DOMNodeInserted', function(ev) {
      created += ev.target.tagName;
    });
    document.addEventListener('DOMNodeRemoved', function(ev) {
      removed += ev.target.tagName;
    });
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');

    document.body.appendChild(h2);
    document.body.insertBefore(h1, h2);
    document.body.insertBefore(h3, null);
    test.strictEqual('H2H1H3', created, "an event should be dispatched for each created element");

    document.body.removeChild(h1);
    document.body.insertBefore(h3, h2);
    test.strictEqual('H1H3', removed, "an event should be dispatched for each removed element");

    var text = h2.innerHTML = 'foo';
    h2.addEventListener('DOMCharacterDataModified', function(ev) {
      text = ev.target.nodeValue;
    });
    h2.firstChild.nodeValue = 'bar';
    test.equal(h2.innerHTML, text, 'ChactaterData changes should be captured');

    var event;
    h2.setAttribute('class', 'foo');
    document.addEventListener('DOMAttrModified', function(ev) {
      event = ev;
    });
    h2.setAttribute('class', 'bar');
    test.ok(!!event, 'Changing an attribute should trigger DOMAttrModified');
    test.equal(event.attrName, 'class', 'attrName should be class');
    test.equal(event.prevValue, 'foo', 'prevValue should be foo');
    test.equal(event.newValue, 'bar', 'newValue should be bar');

    event = false;
    h2.setAttribute('class', 'bar');
    test.ok(!event, 'Setting the same value again should not trigger an event');

    h2.removeAttribute('class');
    test.ok(!!event, 'Removing an attribute should trigger DOMAttrModified');
    test.equal(event.attrName, 'class', 'attrName should be class');
    test.equal(event.prevValue, 'bar', 'prevValue should be bar');

    test.done();
  },

  remove_listener_in_handler: function(test) {
    var document = jsdom.jsdom();
    var h1 = 0, h2 = 0;

    // Event handler that removes itself
    function handler1() {
      h1++;
      document.removeEventListener('click', handler1);
    }

    function handler2() {
      h2++;
    }

    document.addEventListener('click', handler1);
    document.addEventListener('click', handler2);

    var ev = document.createEvent('MouseEvents');
    ev.initEvent('click', true, true);

    document.dispatchEvent(ev);
    test.equal(1, h1, "handler1 must be called once");
    test.equal(1, h2, "handler2 must be called once");

    document.dispatchEvent(ev);
    test.equal(1, h1, "handler1 must be called once");
    test.equal(2, h2, "handler2 must be called twice");
    test.done();
  },

  childNodes_updates_on_insertChild : function(test) {
    var window = jsdom.jsdom("").createWindow();
    var div = window.document.createElement("div");
    var text = window.document.createTextNode("bar");
    div.appendChild(text);
    test.strictEqual(text, div.childNodes[0],
               "childNodes NodeList should update after appendChild");

    text = window.document.createTextNode("bar");
    div.insertBefore(text, null);
    test.strictEqual(text, div.childNodes[1],
               "childNodes NodeList should update after insertBefore");
    test.done();
  },

  option_set_selected : function(test) {
    var window = jsdom.jsdom("").createWindow();
    var select = window.document.createElement("select");

    var option0 = window.document.createElement('option');
    select.appendChild(option0);
    option0.setAttribute('selected', 'selected');

    var optgroup = window.document.createElement('optgroup');
    select.appendChild(optgroup);
    var option1 = window.document.createElement('option');
    optgroup.appendChild(option1);

    test.strictEqual(true, option0.selected, 'initially selected');
    test.strictEqual(false, option1.selected, 'initially not selected');
    test.strictEqual(option1, select.options[1], "options should include options inside optgroup");

    option1.defaultSelected = true;
    test.strictEqual(false, option0.selected, 'selecting other option should deselect this');
    test.strictEqual(true, option0.defaultSelected, 'default should not change');
    test.strictEqual(true, option1.selected, 'selected changes when defaultSelected changes');
    test.strictEqual(true, option1.defaultSelected, 'I just set this');

    option0.defaultSelected = false;
    option0.selected = true;
    test.strictEqual(true, option0.selected, 'I just set this');
    test.strictEqual(false, option0.defaultSelected, 'selected does not set default');
    test.strictEqual(false, option1.selected, 'should deselect others');
    test.strictEqual(true, option1.defaultSelected, 'unchanged');
    test.done();
  },

  case_sensitivity_of_markup_missing_html_and_body : function(test){
    var spaces = /[ \n]*/g,
        doc1 = jsdom.html("<HTML><BODY></BODY></HTML>").outerHTML.replace(spaces, ''),
        doc2 = jsdom.html("<html><BODY></Body></HTML>").outerHTML.replace(spaces, ''),
        doc3 = jsdom.html("<html><body></body></html>").outerHTML.replace(spaces, ''),
        doc4 = jsdom.html("<body></body>").outerHTML.replace(spaces, ''),
        doc5 = jsdom.html("").outerHTML.replace(spaces, '');

    test.ok(doc1 === doc2 && doc2 == doc3 && doc3 === doc4 && doc4 == doc5,
            'they should all serialize the same');
    test.done();
  },

  serialization_of_void_elements : function(test){
    var html = '<html><body><div><br><hr><audio><source></audio></div></body></html>',
        doc = jsdom.html(html);
    test.strictEqual(doc.outerHTML, html)
    test.done();
  },

  children_should_be_available_right_after_document_creation : function(test) {
    var doc = jsdom.jsdom("<html><body><div></div></body></html>");
    test.ok((doc.body.children[0] !== undefined), "there should be a body, and it should have a child");
    test.done();
  },

  children_should_be_available_right_after_document_creation_scripts : function(test) {
    var html = "<html><body>" +
      "<script type='text/javascript'>" +
        "var h = document.createElement('div');" +
        "h.innerHTML = '<div style=\"opacity:0.8\"></div>';" +
        "window.myNode = h.childNodes[0];" +
      "</script>" +
    "</body></html>";

    var window = jsdom.jsdom(html).createWindow();
    test.ok(!!window.myNode.nodeType);
    test.done();
  },

  fix_for_issue_172 : function(test) {
    jsdom.env("<html><body><script type='text/javascript'></script></body></html>", [
      path.resolve(__dirname, '../jquery-fixtures/jquery-1.6.2.js')
    ], function () {
      // ensure the callback gets called!
      test.done();
    });
  },

  fix_for_issue_221 : function(test) {
    var html = '<html><head></head><body></body></html>';
    var document = jsdom.jsdom(html);
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.appendChild(document.createTextNode("hello world"));
    test.strictEqual(div.childNodes[0].nodeValue, 'hello world',
               'Nodelist children should be populated immediately');
    test.done();
  },

  parsing_and_serializing_entities: function(test) {
    var html = '<html><body><a href="http://example.com/?a=b&amp;c=d">&lt;&aelig;&#x263a;foo</a>';
    var document = jsdom.jsdom(html);
    var anchor = document.getElementsByTagName('a')[0];

    test.strictEqual(anchor.getAttribute('href'), 'http://example.com/?a=b&c=d',
                     "href attribute value should be deentitified");

    test.strictEqual(anchor.firstChild.nodeValue, '<æ☺foo',
                     "nodeValue of text node should be deentitified");

    test.ok(anchor.outerHTML.indexOf('http://example.com/?a=b&amp;c=d') !== -1,
            "outerHTML of anchor href should be entitified");

    test.ok(anchor.innerHTML.indexOf("&lt;") === 0,
            "innerHTML of anchor should begin with &lt;");
    test.done();
  },

  parsing_and_serializing_unknown_entities: function (test) {
    var html = '<html><body>&nowayjose;&#x263a;&#xblah;&#9q;</body></html>';
    var document = jsdom.jsdom(html);
    test.strictEqual(document.body.firstChild.nodeValue, "&nowayjose;☺&#xblah;&#9q;",
                     "Unknown and unparsable entities should be left in the decoded text");
    test.strictEqual(document.body.innerHTML, "&amp;nowayjose;☺&amp;#xblah;&amp;#9q;",
                     "Unknown and unparsable entities should be reserialized as literal text");
    test.done();
  },

  entities_in_script_should_be_left_alone: function (test) {
    var html = '<!DOCTYPE html><html><head></head><body><script>alert("&quot;");</script></body></html>';
    var document = jsdom.jsdom(html);
    test.strictEqual(document.body.innerHTML, '<script>alert("&quot;");</script>');
    test.strictEqual(document.body.firstChild.innerHTML, 'alert("&quot;");');
    test.done();
  },

  document_title_and_entities: function (test) {
    var html = '<html><head><title>&lt;b&gt;Hello&lt;/b&gt;</title></head><body></body></html>';
    var document = jsdom.jsdom(html);

    test.strictEqual(document.title, "<b>Hello</b>",
      "document.title should be the deentitified version of what was in \
      the original HTML"
    );

    document.title = "<b>World</b>";
    test.strictEqual(document.title, "<b>World</b>",
      "When document.title is set programmatically to something looking like \
      HTML tags, then read again, it should have the exact same value, no \
      entification should take place"
    );

    document.title = "&lt;b&gt;World&lt;/b&gt;";
    test.strictEqual(document.title, "&lt;b&gt;World&lt;/b&gt;",
      "When document.title is set programmatically to something looking like \
      HTML entities, then read again, it should have the exact same value, \
      no deentification should take place"
    );

    test.done();
  },

  setting_and_getting_textContent: function (test) {
    var html = '<html><head>\n<title>&lt;foo&gt;</title></head><body>Hello<span><span>, </span>world</span>!</body></html>';
    var document = jsdom.jsdom(html);

    test.strictEqual(document.textContent, null,
      "textContent of document should be null"
    );

    test.strictEqual(document.head.textContent, '\n<foo>',
      "textContent of document.head should be the initial whitespace plus the textContent of the document title"
    );

    test.strictEqual(
      document.body.textContent,
      "Hello, world!",
      "textContent of document.body should be the concatenation of the textContent values of its child nodes"
    );

    test.strictEqual(
      document.createTextNode('&lt;b&gt;World&lt;/b&gt;').textContent,
      '&lt;b&gt;World&lt;/b&gt;',
      "textContent of programmatically created text node should be identical to its nodeValue"
    );

    test.strictEqual(
      document.createComment('&lt;b&gt;World&lt;/b&gt;').textContent,
      '&lt;b&gt;World&lt;/b&gt;',
      "textContent of programmatically created comment node should be identical to its nodeValue"
    );

    var frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode('&lt;foo&gt;<b></b>'));
    frag.appendChild(document.createElement('div')).appendChild(document.createTextNode('&lt;foo&gt;<b></b>'));

    test.strictEqual(frag.textContent, '&lt;foo&gt;<b></b>&lt;foo&gt;<b></b>',
      "textContent of programmatically created document fragment should be the concatenation of the textContent values of its child nodes"
    );

    var div = document.createElement('div');
    div.innerHTML = '&amp;lt;b&amp;gt;\nWorld&amp;lt;/b&amp;gt;<span></span><span><span></span></span><span>&amp;lt;b&amp;gt;World&amp;lt;/b&amp;gt;</span>';

    test.strictEqual(div.textContent, '&lt;b&gt;\nWorld&lt;/b&gt;&lt;b&gt;W\orld&lt;/b&gt;',
      "textContent of complex programmatically created <div> should be the \
      concatenation of the textContent values of its child nodes"
    );

    test.done();
  },

  allow_ender_to_run : function(test) {
    jsdom.env('<a />', [__dirname + '/files/ender-qwery.js'], function(e, w) {
      test.ok(!e, 'no errors');
      test.ok(w.ender, 'ender exists');
      test.ok(w.$, 'window contains $');
      test.done();
    });
  },

  // see: https://github.com/tmpvar/jsdom/issues/259
  issue_259 : function(test) {
    try {
      jsdom.jsdom('<!DOCTYPE svg>\n<svg version="1.1"></svg>');
    } catch (e) {
      console.log(e);
      test.ok(false, 'Incomplete doctype should not throw an error');
    }
    test.done();
  },

  issues_230_259 : function(test) {
    var instr = '<html><body style="color: #ffffff; foo: bar"></body></html>';
    var doc = jsdom.html(instr);
    test.ok(doc.outerHTML.match(/0: *color/) === null);
    test.done();
  },

  // see: https://github.com/tmpvar/jsdom/issues/262
  issue_262 : function(test) {
    var document = jsdom.html('<html><body></body></html>');
    var a = document.createElement('a');
    a.setAttribute("style", "color:blue");
    a.style.setProperty("color", "red");
    test.equal(a.outerHTML.match(/style="/g).length, 1, 'style attribute must not be serialized twice');
    test.done();
  },

  // see: https://github.com/tmpvar/jsdom/issues/267
  issue_267 : function(test) {
    var document = jsdom.html('<html><body></body></html>');
    var a = document.createElement('a');
    a.style.width = '100%';
    test.ok(!!a.getAttribute('style').match(/^\s*width\s*:\s*100%\s*;?\s*$/), 'style attribute must contain width');
    test.done();
  },

  // Test inline event handlers set on the body.
  test_body_event_handler_inline : function (test) {
    var html = "\
      <html>\
        <head>\
          <script>\
            function loader () {\
              window.loader_called = true;\
            }\
          </script>\
        </head>\
        <body onload='loader()'></body>\
      </html>";
    var doc = jsdom.jsdom(html, null, { deferClose : true });
    var window = doc.parentWindow;
    // In JSDOM, listeners registered with addEventListener are called before
    // "traditional" listeners, so listening for 'load' will fire before our
    // inline listener.  This means we have to check the value on the next
    // tick.
    window.addEventListener('load', function () {
      process.nextTick(function () {
        test.equal(window.loader_called, true);
        test.done();
      });
    });
    doc.close();
  },

  // Make sure traditional handlers on the body element set via script are
  // forwarded to the window.
  test_body_event_handler_script : function (test) {
    test.expect(2);
    var doc = jsdom.jsdom("<html><head></head><body></body></html>",
                          null,
                          {deferClose : true});
    var window = doc.parentWindow;
    test.equal(window.onload, undefined);
    doc.body.onload = function () {
      test.done();
    };
    test.notEqual(window.onload, undefined);
    doc.close();
  },

  // Test inline event handlers on a regular element.
  test_element_inline_event_handler : function (test) {
    var doc = jsdom.jsdom(
      "<html>" +
        "<head></head>" +
        "<body>" +
        "  <div onclick='window.divClicked = true;'" +
        "       onmouseover='window.divMousedOver = true;'" +
        "       onmouseout='window.divCalledFrom = this.tagName;'>" +
        "    <a></a>" +
        "  </div>" +
        "</body>" +
      "</html>");

    var window = doc.parentWindow;
    var div    = doc.getElementsByTagName('div')[0];

    test.equal(window.divClicked,    undefined);
    test.equal(window.divMousedOver, undefined);

    var click = doc.createEvent('MouseEvents');
    click.initMouseEvent('click', false, false);
    div.dispatchEvent(click);
    test.equal(window.divClicked, true);

    var mouseOver = doc.createEvent('MouseEvents');
    mouseOver.initMouseEvent('mouseover', false, false);
    div.dispatchEvent(mouseOver);
    test.equal(window.divMousedOver, true);

    var mouseOut = doc.createEvent('MouseEvents');
    mouseOut.initMouseEvent('mouseout', false, false);
    div.dispatchEvent(mouseOut);
    test.equal(window.divCalledFrom, "DIV");

    test.done();
  },

  // Test for issue 287 - element.onevent check doesn't work
  // See: https://github.com/tmpvar/jsdom/issues/287
  issue_287 : function (test) {
    var doc = jsdom.jsdom();
    var elem = doc.createElement('form');
    elem.setAttribute('onsubmit', ';');
    test.equal(typeof elem.onsubmit, 'function');
    test.done();
  },

  get_element_by_id : function (test) {
    var doc = jsdom.jsdom();
    var el = doc.createElement('div');
    el.setAttribute('id', 'foo');
    test.equal(doc.getElementById('foo'), null, 'Element must not be found until it has been added to the DOM');

    doc.body.appendChild(el);
    test.equal(doc.getElementById('foo'), el, 'Element must be found after being added');

    el.id = 'bar';
    test.equal(doc.getElementById('foo'), null, 'Element must not be found by its previous id');
    test.equal(doc.getElementById('bar'), el, 'Element must be found by its new id');

    el.setAttribute('id', 'baz');
    test.equal(doc.getElementById('bar'), null, 'Element must not be found by its previous id');
    test.equal(doc.getElementById('baz'), el, 'Element must be found by its new id');

    el.getAttributeNode('id').nodeValue = 'boo';
    test.equal(doc.getElementById('boo'), el, 'Element must be found by its new id');

    doc.body.removeChild(el);
    test.equal(doc.getElementById(el.id), null, 'Element must not be found after it has been removed');

    test.done();
  },

  get_element_by_id_multi_id : function(test) {
    var doc = jsdom.jsdom(), div, span;
    div = doc.createElement('div');
    div.setAttribute('id', 'foo');
    doc.body.appendChild(div);
	span = doc.createElement('span');
    span.setAttribute('id', 'foo');
    doc.body.appendChild(span);

	// now if we remove the second element, we should still find the first
	doc.body.removeChild(span);
    test.equal(doc.getElementById('foo'), div, 'Original div#foo must be found after removing invalid span#foo');

    test.done();
  },

  jsdom_levels: function(test) {
    var level1 = jsdom.level(1);
    var level2 = jsdom.level(2);

    test.notEqual(level1, level2, 'Level1.core and level2.core are different instances');
    test.equal(level1.HTMLCollection, null, 'Level1 dom shouldn\'t have HTMLCollection function.');

    test.done();
  },

  issue_335_inline_event_handlers : function(test) {
    var doc = jsdom.html('<a onclick="somefunction()">call some function</a>');
    var a = doc.getElementsByTagName('a').item(0);
    var onclick = a.getAttribute('onclick');
    test.notEqual(onclick, null);
    test.equal(onclick, 'somefunction()');
    test.ok(doc.innerHTML.indexOf('onclick') > -1);
    test.done();
  },

  issue_338_internal_nodelist_props : function(test) {
    var doc = jsdom.html();
    var props = Object.keys(doc.body.childNodes);
    test.equal(props.length, 1, 'Internal properties must not be enumerable');
    test.done();
  },

  multiple_done_calls_with_src : function(test) {
    var script = "window.a = (typeof window.a !== 'undefined') ? window.a + 1 : 0;";
    var doneCounter = 0;
    jsdom.env({
      html : '<div />',
      src : [script, script, script],
      done: function(errors, window) {
        doneCounter++;
        if (window.a === 2) {
          test.equal(doneCounter, 1);
          test.done();
        }
      }
    });
  },

  setting_and_getting_script_element_text : function (test) {
    var doc = jsdom.html("<script></script>");
    var script = doc.getElementsByTagName('script')[0];
    test.equal(script.text, '');
    script.text = 'var x = 3;';
    test.equal(script.text, 'var x = 3;');
    script.text = 'var y = 2;';
    test.equal(script.text, 'var y = 2;');
    test.done();
  },

  issue_58_parse_templatedtags: function(test) {
    /* There is a unit of whitespace at the front of the script tag
       content as a workaround for
       https://github.com/tautologistics/node-htmlparser/issues/29
    */
    var content = ' <%= cid %>'
    var script = '<script type="text/x-underscore-tmpl">' + content + '</script>'
    var html = '<html><head>' + script + '</head><body><p>hello world!</p></body></html>'
    var doc = jsdom.html(html)
    doc.innerHTML = html;
    test.equal(doc.head.childNodes[0].innerHTML, content);
    test.done();
  },

  issue_239_replace_causes_script_execution : function(test) {
    jsdom.env({
      html : '<script type="text/javascript">window.a = 1;/* remove me */ console.log("executed?")</script>',
      done : function(errors, window) {
        window.document.innerHTML = window.document.innerHTML.replace('/* remove me */','');
        test.equal(typeof window.a, 'undefined');
        test.done();
      }
    });
  },

  issue_355_on_events_should_not_execute_js_when_disabled : function(test) {
    var html = '<html><body onload="undefined()">something</body></html>';

    jsdom.env(html, function(e) {
      test.equal(e, null);
      test.done();
    });
  },

  issue_361_textarea_value_property: function (test) {
     var doc = jsdom.html('<html><body><textarea id="mytextarea"></textarea></body></html>');

     doc.getElementById('mytextarea').value = '<foo>';
     test.equal(doc.getElementById('mytextarea').value, '<foo>');
     test.done();
  },

  on_events_should_be_called_in_bubbling_phase : function (test) {
    var doc = jsdom.jsdom(
      "<html>" +
        "<head></head>" +
        "<body>" +
        "  <div onclick='window.divClicked = true;'" +
        "       onmouseover='window.divMousedOver = true;'>" +
        "    <a></a>" +
        "  </div>" +
        "</body>" +
      "</html>");

    var window = doc.parentWindow;
    var div    = doc.getElementsByTagName('div')[0];
    var a      = doc.getElementsByTagName('a')[0];

    test.equal(window.divClicked,    undefined);
    test.equal(window.divMousedOver, undefined);

    var click = doc.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false);
    a.dispatchEvent(click);
    test.equal(window.divClicked, true);

    var mouseOver = doc.createEvent('MouseEvents');
    mouseOver.initMouseEvent('mouseover', true, false);
    a.dispatchEvent(mouseOver);
    test.equal(window.divMousedOver, true);
    test.done();
  },

  css_classes_should_be_attached_to_dom : function(test) {
    [jsdom.level(2, 'core'), jsdom.level(3, 'core')].forEach(function (dom) {
      test.notEqual(dom.StyleSheet, undefined);
      test.notEqual(dom.MediaList, undefined);
      test.notEqual(dom.CSSStyleSheet, undefined);
      test.notEqual(dom.CSSRule, undefined);
      test.notEqual(dom.CSSStyleRule, undefined);
      test.notEqual(dom.CSSMediaRule, undefined);
      test.notEqual(dom.CSSImportRule, undefined);
      test.notEqual(dom.CSSStyleDeclaration, undefined);
    });
    test.done();
  },

  lookup_namednodemap_by_property : function (test) {
    var doc = jsdom.jsdom();
    var core = jsdom.level(3, 'core');
    var map = new core.NamedNodeMap(doc);
    test.equal(map.length, 0);
    var attr1 = doc.createAttribute('attr1');
    map.setNamedItem(attr1);
    test.equal(map['attr1'], attr1);
    test.equal(map.length, 1);
    var attr2 = doc.createAttribute('attr2');
    map.setNamedItem(attr2);
    test.equal(map['attr2'], attr2);
    test.equal(map.length, 2);
    var rm1 = map.removeNamedItem('attr1');
    test.equal(rm1, attr1);
    test.equal(map.length, 1);
    var rm2 = map.removeNamedItem('attr2');
    test.equal(rm2, attr2);
    test.equal(map.length, 0);
    test.done();
  },

  issue_723_namednodemap_property_names_that_collide_with_method_names : function (test) {
    var doc = jsdom.jsdom();
    var core = jsdom.level(1, 'core');
    var map = new core.NamedNodeMap(doc);
    var fooAttribute = doc.createAttribute('foo');
    map.setNamedItem(fooAttribute);
    var itemAttribute = doc.createAttribute('item');
    map.setNamedItem(itemAttribute);
    test.equal(map.foo, fooAttribute);
    test.equal(map.item, core.NamedNodeMap.prototype.item);
    map.removeNamedItem('item');
    test.equal(map.item, core.NamedNodeMap.prototype.item);
    test.done();
  },

  issue_319_HIERARCHY_REQUEST_ERR : function(test){
   jsdom.env({
      html: '<!DOCTYPE html><html><head><title>Title</title></head><body>My body</body></html><div></div>',
      done : function(errors,window){
        // TODO: ensure errors is not null, and contains the error message
        // test.ok(errors);
        test.ok(window);
        test.done();
      }
   });
  },

  issue_371_outerhtml_noformat : function(test) {
    var originalHTML = '<li><span>A</span><span>B</span></li>';
    var dom = jsdom.jsdom(originalHTML);
    var outerHTML = dom.outerHTML;

    test.equal(originalHTML, outerHTML);
    test.done();
  },

  issue_509_out_of_memory : function(test) {
    var fs = require("fs");

    var html = fs.readFileSync(path.resolve(__dirname, "files/reddit.html"));
    jsdom.jsdom(html.toString());

    test.done();
  },

  issue_530_async_load_events : function(test) {
    test.expect(1);

    var doc = jsdom.jsdom('<html><head></head><body></body></html>');
    var window = doc.createWindow();

    // Add the load event after the document is already created; it shouldn't
    // fire until nextTick. The test will fail (with a timeout) if it has
    // already fired.
    window.addEventListener('load', function () {
      test.ok(true);
      test.done();
    });
  },

  inputs_should_default_to_type_text : function(test) {
    test.expect(3);

    var doc = jsdom.jsdom('<html><head></head><body><input id="input" /></body></html>');
    var inputEl = doc.getElementById('input');
    test.equal(inputEl.hasAttribute('type'), false);
    test.equal(inputEl.getAttribute('type'), null);
    test.equal(inputEl.type, 'text');

    test.done();
  },

  input_type_should_set_attribute : function(test) {
    test.expect(1);

    var doc = jsdom.jsdom('<html><head></head><body><input id="input" /></body></html>');
    var inputEl = doc.getElementById('input');
    inputEl.type = 'checkbox';
    test.equal(inputEl.getAttribute('type'), 'checkbox');

    test.done();
  },

  input_type_should_reflect_in_property : function(test) {
    test.expect(2);

    var doc = jsdom.jsdom('<html><head></head><body><input id="input" type="checkbox" /></body></html>');
    var inputEl = doc.getElementById('input');
    test.equal(inputEl.type, 'checkbox');
    test.equal(inputEl.getAttribute('type'), 'checkbox');

    test.done();
  },

  jquery_val_on_selects : function(test) {
    var window = jsdom.jsdom().createWindow();

    jsdom.jQueryify(window, path.resolve(__dirname, '../jquery-fixtures/jquery-1.11.0.js'), function () {
      window.$("body").append('<html><body><select id="foo"><option value="first">f</option><option value="last">l</option></select></body></html>');

      test.equal(window.document.querySelector("[value='first']").selected, true, "`selected` property should be `true` for first");
      test.equal(window.document.querySelector("[value='last']").selected, false, "`selected` property should be `false` for last");

      test.equal(window.$("[value='first']").val(), "first", "`val()` on first <option> should return its value");
      test.equal(window.$("[value='last']").val(), "last", "`val()` on last <option> should return its value");

      var f = window.$("#foo");
      test.equal(f.val(), "first", "`val()` on <select> should return first <option>'s value");

      window.$('#foo').val("last");
      test.equal(window.document.querySelector("[value='first']").selected, false, "`selected` property should be `false` for first");
      test.equal(window.document.querySelector("[value='last']").selected, true, "`selected` property should be `true` for last");
      test.equal(window.$('#foo').val(), "last", "`val()` should return last <option>'s value");

      test.done();
    });
  },

  jquery_attr_mixed_case : function(test) {
    var window = jsdom.jsdom().createWindow();

    jsdom.jQueryify(window, path.resolve(__dirname, '../jquery-fixtures/jquery-1.11.0.js'), function () {
      var $el = window.$('<div mixedcase="blah"></div>');

      test.equal($el.attr('mixedCase'), 'blah');

      test.done();
    });
  },

  "Calling show() method in jQuery 1.11.0 (GH-709)": function (t) {
    var window = jsdom.jsdom("<!DOCTYPE html><html><head></head><body></body></html>").createWindow();

    jsdom.jQueryify(window, path.resolve(__dirname, "../jquery-fixtures/jquery-1.11.0.js"), function () {
      var $el = window.$("<div></div>");

      t.doesNotThrow(function () {
        $el.show();
      });

      t.done();
    });
  },

  "Calling show() method in jQuery 1.11.0, second case (GH-709)": function (t) {
    var window = jsdom.jsdom("<!DOCTYPE html><html><head></head><body></body></html>").createWindow();

    jsdom.jQueryify(window, path.resolve(__dirname, "../jquery-fixtures/jquery-1.11.0.js"), function () {
      var $el1 = window.$("<div></div>");
      var $el2 = window.$("<span></span>");

      t.doesNotThrow(function () {
        $el1.show();
        $el2.show();
      });

      t.done();
    });
  },

  redirected_url_equal_to_location_href : function(test) {
    var html = "<p>Redirect</p>";
    var server = http.createServer(function(req, res) {
      switch (req.url) {
        case "/":
          res.writeHead(302, { Location: "/redir" });
          res.end();
          break;
        case "/redir":
          res.writeHead(200, { "Content-Length": html.length });
          res.end(html);
          break;
      }
    });

    server.listen(8001, "127.0.0.1", function() {
      jsdom.env({
        url: "http://127.0.0.1:8001",
        done: function(errors, window) {
          server.close();
          if (errors) {
            test.ok(false, errors.message);
          }
          else {
            test.equal(window.document.body.innerHTML, html, "root page should be redirected");
            test.equal(window.location.href, "http://127.0.0.1:8001/redir",
              "window.location.href should equal to redirected url");
          }
          test.done()
        }
      });
    });
  },

  issue_644_should_pass_script_errors_to_errback: function(test) {
    jsdom.env({
      html: "<p></p>",
      src: ["foo = ''bar'; bar = 'baz'"],
      done: function(errors) {
        test.ok(errors);
        test.done();
      }
    });
  },

  script_with_cookie: function (t) {
    var html = "<!DOCTYPE html><html><head><script src='/foo.js'></script></head><body>foo</body></html>";

    var server = http.createServer(function (req, res) {
      switch (req.url) {
        case "/":
          res.writeHead(200, { "Content-Length": html.length });
          res.end(html);
          break;
        case "/foo.js":
          var cookie = req.headers["cookie"];
          var name = cookie ? cookie.split("=")[1] : "no cookie";
          var text = "document.body.innerHTML = 'Hello " + name + "'; window.doCheck();";
          res.writeHead(200, { "Content-Length": text.length });
          res.end(text);
          break;
      }
    });

    server.listen(8001, "127.0.0.1", function () {
      jsdom.env({
        url: "http://127.0.0.1:8001",
        document: { cookie: "name=world" },
        features: {
          FetchExternalResources: ["script"],
          ProcessExternalResources: ["script"]
        },
        done: function (err, window) {
          window.doCheck = function () {
            server.close();
            t.ifError(err);
            t.equal(window.document.body.innerHTML, "Hello world");
            t.done();
          };
        }
      });
    });
  },

  xhr_with_cookie: function (t) {
    var html = "<!DOCTYPE html><html><head><script>" +
               "var xhr = new XMLHttpRequest();" +
               "xhr.onload = function () {" +
               "  document.body.innerHTML = xhr.responseText;" +
               "  window.doCheck();" +
               "};" +
               "xhr.open('GET', '/foo.txt', true);" +
               "xhr.send();" +
               "</script></head><body>foo</body></html>";

    var server = http.createServer(function (req, res) {
      switch (req.url) {
        case "/":
          res.writeHead(200, { "Content-Length": html.length });
          res.end(html);
          break;
        case "/foo.txt":
          var cookie = req.headers["cookie"];
          var name = cookie ? cookie.split("=")[1] : "no cookie";
          var text = "Hello " + name;
          res.writeHead(200, { "Content-Length": text.length });
          res.end(text);
          break;
      }
    });

    server.listen(8001, "127.0.0.1", function() {
      jsdom.env({
        url: "http://127.0.0.1:8001",
        document: { cookie: "name=world" },
        features: {
          FetchExternalResources: ["script"],
          ProcessExternalResources: ["script"]
        },
        done: function (err, window) {
          window.doCheck = function () {
            server.close();
            t.ifError(err);
            t.equal(window.document.body.innerHTML, "Hello world");
            t.done();
          };
        }
      });
    });
  }
};
