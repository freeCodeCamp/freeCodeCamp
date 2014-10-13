var path = require('path');
var fs = require('fs');
var jsdom = require('../../lib/jsdom');
var toFileUrl = require('../util').toFileUrl(__dirname);

exports.tests = {
  frame_parent: function(test) {
    var window = jsdom.jsdom('<html><head>\
      <script>\
        aGlobal=1;\
        var iframe = document.createElement("iframe");\
        iframe.src = "' + toFileUrl('files/iframe.html') + '";\
        document.body.appendChild(iframe);\
      </script>\
      </head><body></body></html>',
      null,
      {
        features : {
          FetchExternalResources: ['script','iframe'],
          ProcessExternalResources: ['script','iframe']
        }
      }).createWindow();
    window.iframe.onload = function() {
      test.strictEqual(window.DONE, 1);
      test.strictEqual(window.PARENT_IS_TOP, true);

      //insert a script tag to make sure the global set in the iframe is visible
      //in the parent window context
      var doc = window.document;
      var script = doc.createElement('script');
      script.textContent = 'results=[aGlobal, DONE, PARENT_IS_TOP]';
      doc.body.appendChild(script);
      //the script is executed asynchronously after insertion to the document,
      //so setTimeout is needed
      setTimeout(function(){
        test.deepEqual(window.results, [1, 1, true]);
        test.done();
      }, 0);
    };
  },

  frame_src_relative_to_parent_doc: function(test) {
    var window = jsdom.jsdom('<html><body>\
      <iframe src="./files/iframe.html"></iframe>\
      </body></html>',
      null,
      {
        url : toFileUrl("test.html"),
        features : {
          FetchExternalResources: ['script','iframe'],
          ProcessExternalResources: ['script','iframe']
        }
      }).createWindow();
    window.document.onload = function(){
      test.strictEqual(window.LOADED_FRAME, 1);
      test.strictEqual(window.PARENT_IS_TOP, true);
      test.done();
    };
  },

  'test iframe element existence' : function (test) {
    var iframeParentPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(iframeParentPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var elem = doc.getElementById('simpleIFrameID');
    test.notEqual(elem, null);
    test.equal(elem.name, 'simpleIFrame');
    test.equal(elem.id, 'simpleIFrameID');
    test.done();
  },

  'test iframe.contentDocument access' : function(test) {
    var iframeParentPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(iframeParentPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    doc.addEventListener('load', function () {
      var iframeElem = doc.getElementById('simpleIFrameID');
      test.notEqual(iframeElem, null);
      var iframeDoc = iframeElem.contentDocument;
      test.notEqual(iframeDoc, null);
      test.notStrictEqual(iframeDoc, doc);
      var iframeDiv = iframeDoc.getElementById('iframeDiv');
      test.notEqual(iframeDiv, null);
      test.equal(iframeDiv.innerHTML, "Initial Text");
      test.done();
    });
  },

  'test iframe load event' : function(test) {
    var doc = jsdom.jsdom(null, null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var iFrame = doc.createElement('iframe');
    iFrame.addEventListener('load', function () {
      test.notEqual(iFrame.contentDocument, null);
      test.done();
    });
    iFrame.src = 'files/simple_iframe.html';
    // Must insert into doc to force load.
    doc.documentElement.appendChild(iFrame);
  },

  'iframe loads blank document when src unspecified' : function(test) {
    var doc = jsdom.jsdom(null);
    var iFrame = doc.createElement('iframe');
    iFrame.addEventListener('load', function () {
      test.notEqual(iFrame.contentDocument, null);
      test.strictEqual(iFrame.contentDocument.readyState, 'complete');
      test.done();
    });
    doc.documentElement.appendChild(iFrame);
  },

  'test iframe.contentWindow acccess' : function(test) {
    var htmlPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    doc.addEventListener('load', function () {
      var iframeElem = doc.getElementById('simpleIFrameID');
      test.notEqual(iframeElem, null);
      var iframeDoc = iframeElem.contentDocument;
      test.notEqual(iframeDoc, null);
      var iframeWindow = iframeElem.contentWindow;
      test.notStrictEqual(iframeWindow, doc.parentWindow);
      test.equal(iframeWindow, iframeDoc.parentWindow);
      test.done();
    });
  },

  'get iframe window via indexed frames access' : function(test) {
    var htmlPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    doc.addEventListener('load', function () {
      var window = doc.parentWindow;
      var iframeWindow = window.frames[0];
      test.notEqual(iframeWindow, null);
      test.notStrictEqual(iframeWindow, window);
      test.strictEqual(iframeWindow.parent, window);
      var iframeDoc = iframeWindow.document;
      test.notStrictEqual(iframeWindow.document, window.document);
      test.notEqual(iframeWindow.document.getElementById('iframeDiv'), null);
      test.done();
    });
  },

  'get iframe window via indexed frames access with setAttributeNode' : function(test) {
    var doc = jsdom.jsdom("<html><head></head><body><iframe name='simpleIFrame' id='simpleIFrameID'></iframe></body></html>", null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var iframe = doc.getElementById('simpleIFrameID');
    var attr = doc.createAttribute('src');
    attr.value = 'files/simple_iframe.html';
    iframe.setAttributeNode(attr);

    iframe.addEventListener('load', function () {
      var window = doc.parentWindow;
      var iframeWindow = window.frames[0];
      test.notEqual(iframeWindow, null);
      test.notStrictEqual(iframeWindow, window);
      test.strictEqual(iframeWindow.parent, window);
      var iframeDoc = iframeWindow.document;
      test.notStrictEqual(iframeWindow.document, window.document);
      test.notEqual(iframeWindow.document.getElementById('iframeDiv'), null);
      test.done();
    });
  },

  'update named frames access on name change' : function(test) {
    var htmlPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    doc.addEventListener('load', function () {
      var window = doc.parentWindow;
      var iframeWindow = window.frames['simpleIFrame'];
      test.notEqual(iframeWindow, null);
      test.notStrictEqual(iframeWindow, window);
      test.strictEqual(iframeWindow.parent, window);
      doc.getElementById('simpleIFrameID').setAttribute('name', 'otherSimpleIFrame');
      test.ok(!window.frames['simpleIFrame'], 'remove old named property');
      test.ok(window.frames['otherSimpleIFrame'], 'add new named property');
      test.done();
    });
  },

  // See: http://www.whatwg.org/specs/web-apps/current-work/#dom-frames
  'test frames array identity' : function(test) {
    var htmlPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    doc.addEventListener('load', function () {
      var window = doc.parentWindow;
      test.strictEqual(window.frames, window);
      test.done();
    });
  },

  'test nested iframes' : function (test) {
    var htmlPath = path.resolve(__dirname, 'files', 'iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var window = doc.parentWindow;
    doc.addEventListener('load', function () {
      var topIFrameElem = doc.getElementById('simpleIFrameID');
      var topIFrameDoc = topIFrameElem.contentDocument;
      var topIFrameWindow = topIFrameElem.contentWindow;
      var bottomIFrameElem = topIFrameDoc.createElement('iframe');
      bottomIFrameElem.addEventListener('load', function () {
        var bottomIFrameDoc = bottomIFrameElem.contentDocument;
        test.notEqual(bottomIFrameDoc, null);
        var bottomIFrameWindow = bottomIFrameDoc.parentWindow;
        test.notEqual(bottomIFrameWindow, null);

        // The real tests
        test.strictEqual(bottomIFrameWindow.parent, topIFrameWindow);
        test.strictEqual(bottomIFrameWindow.top, window);
        test.strictEqual(topIFrameWindow.parent, window);
        test.strictEqual(topIFrameWindow.top, window);
        test.strictEqual(window.frames[0], topIFrameWindow);
        test.strictEqual(topIFrameWindow.frames[0], bottomIFrameWindow);
        test.done();
      });
      bottomIFrameElem.src = 'simple_iframe.html';
      topIFrameDoc.documentElement.appendChild(bottomIFrameElem);
    });
  },

  'test multiple iframes' : function (test) {
    var htmlPath = path.resolve(__dirname, 'files', 'multiple_iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var window = doc.parentWindow;
    doc.addEventListener('load', function () {
      var iframe1 = doc.getElementById('frame1ID');
      var iframe2 = doc.getElementById('frame2ID');
      var iframe3 = doc.getElementById('frame3ID');
      test.notEqual(window, iframe1.contentWindow);
      test.notEqual(window, iframe2.contentWindow);
      test.notEqual(window, iframe3.contentWindow);
      test.equal(iframe1.contentWindow.parent, window);
      test.equal(iframe2.contentWindow.parent, window);
      test.equal(iframe3.contentWindow.parent, window);
      test.equal(iframe1.contentWindow.top, window);
      test.equal(iframe2.contentWindow.top, window);
      test.equal(iframe3.contentWindow.top, window);
      test.done();
    });
  },

  'test named lookup' : function (test) {
    var htmlPath = path.resolve(__dirname, 'files', 'multiple_iframe_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var window = doc.parentWindow;
    doc.addEventListener('load', function () {
      var iframe1 = doc.getElementById('frame1ID');
      var iframe2 = doc.getElementById('frame2ID');
      var iframe3 = doc.getElementById('frame3ID');
      test.equal(window['frame1'], iframe1.contentWindow);
      test.equal(window['frame2'], iframe2.contentWindow);
      test.equal(window['frame3'], iframe3.contentWindow);
      test.done();
    });
  },

  // This is based off of a test from the jQuery test suite that was failing.
  'test iframe without src' : function (test) {
    var doc = jsdom.jsdom(null, null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var window = doc.parentWindow;
    window.loaded = function () {
      test.equal(window.testVal, 3);
      test.done();
    };

    var iframe = doc.createElement('iframe');
    doc.body.appendChild(iframe);

    var iframeDoc = iframe.contentDocument;
    test.notEqual(iframeDoc, null);
    iframeDoc.open();
    iframeDoc.write("<body onload='window.top.testVal = 3;window.parent.loaded()'>");
    iframeDoc.close();
  },

  'test setting src multiple times' : function (test) {
    var doc = jsdom.jsdom(null, null, {
      features : {
        FetchExternalResources   : ['script', 'iframe'],
        ProcessExternalResources : ['script', 'iframe']
      },
      url : toFileUrl(__filename)
    });
    var iframe = doc.createElement('iframe');
    iframe.addEventListener('load', function () {
      test.equal(iframe.src, 'files/simple_iframe.html');
      test.done();
    });
    iframe.src = 'garbage';
    iframe.src = 'files/simple_iframe.html';
    doc.body.appendChild(iframe);
  },

  'test framesets' : function (test) {
    var htmlPath = path.resolve(__dirname, 'files', 'frameset_parent.html');
    var doc = jsdom.jsdom(fs.readFileSync(htmlPath, 'utf8'), null, {
      features : {
        FetchExternalResources   : ['script', 'frame'],
        ProcessExternalResources : ['script', 'frame']
      },
      url : toFileUrl(__filename)
    });
    var window = doc.parentWindow;
    doc.addEventListener('load', function () {
      var frame1 = doc.getElementById('frame1ID');
      var frame2 = doc.getElementById('frame2ID');
      test.notEqual(frame1, null);
      test.notEqual(frame2, null);

      var frame1doc = frame1.contentDocument;
      var frame2doc = frame2.contentDocument;
      test.notEqual(frame1doc, null);
      test.notEqual(frame2doc, null);

      test.strictEqual(frame1.contentWindow, frame1doc.parentWindow);
      test.strictEqual(frame2.contentWindow, frame2doc.parentWindow);
      test.strictEqual(window.frames[0], frame1.contentWindow);
      test.strictEqual(window.frames[1], frame2.contentWindow);
      test.strictEqual(window.frames['frame1'], frame1.contentWindow);
      test.strictEqual(window.frames['frame2'], frame2.contentWindow);
      test.equal(window, frame1.contentWindow.parent);
      test.equal(window, frame2.contentWindow.parent);

      test.done();
    });
  }
};
