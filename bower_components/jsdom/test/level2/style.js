var jsdom = require('../../lib/jsdom');
var assert = require('assert');
var http = require('http');
var fs = require('fs');
var path = require('path');
exports.tests = {

  HTMLStyleElement01 : function (test) {
    jsdom.env(
        '<html><head><style>p{color:red}</style></head><body>',
        jsdom.level('2', 'html'), function(err, win) {
      var style = win.document.head.lastChild;
      test.equal(1, style.sheet.cssRules.length);
      test.equal('p', style.sheet.cssRules[0].selectorText);
      test.equal('red', style.sheet.cssRules[0].style.color);
      test.done();
    });
  },

  HTMLStyleAttribute01 : function (test) {
    jsdom.env(
        '<html><body><p style="color:red; background-color: blue">',
        jsdom.level('2', 'html'), function(err, win) {
      var p = win.document.body.lastChild;
      test.equal(2, p.style.length);
      test.equal('color', p.style[0]);
      test.equal('red', p.style.color);
      test.equal('background-color', p.style[1]);
      test.equal('blue', p.style.backgroundColor);
      test.done();
    });
  },

  HTMLCanvasStyleAttribute01 : function (test) {
    jsdom.env(
        '<html><body><canvas style="background-color: blue; z-index:1">',
        jsdom.level('2', 'html'), function(err, win) {
      var c = win.document.body.lastChild;
      test.equal(2, c.style.length);
      test.equal('background-color', c.style[0]);
      test.equal('blue', c.style.backgroundColor);
      test.equal('z-index', c.style[1]);
      test.equal(1, c.style.zIndex);
      test.done();
    });
  },

  StylePropertyReflectsStyleAttribute : function (test) {
    jsdom.env(
        '<html>',
        jsdom.level('2', 'html'), function(err, win) {
      var p = win.document.createElement('p');
      p.setAttribute('style', 'color:red');
      test.equal(1, p.style.length);
      test.equal('color', p.style[0]);
      test.equal('red', p.style.color);
      p.setAttribute('style', '');
      test.equal(0, p.style.length);
      test.equal('', p.style.color);
      p.setAttribute('style', 'color:blue');
      test.equal('color', p.style[0]);
      test.equal('blue', p.style.color);
      test.done();
    });
  },

  StyleAttributeReflectsStyleProperty : function (test) {
    jsdom.env(
        '<html>',
        jsdom.level('2', 'html'), function(err, win) {
      var p = win.document.createElement('p');
      p.style.setProperty('color', 'red');
      test.equal(p.getAttribute('style'), 'color: red;');
      p.style.setProperty('width', '20px');
      test.equal(p.getAttribute('style'), 'color: red; width: 20px;');
      p.style.removeProperty('color');
      test.equal(p.getAttribute('style'), 'width: 20px;');
      p.style.removeProperty('width');
      test.equal(p.getAttribute('style'), '');
      p.style.cssText = 'background-color: blue; z-index: 12;';
      test.equal(2, p.style.length);
      test.equal('blue', p.style.backgroundColor);
      test.equal('12', p.style.zIndex);
      p.style.removeProperty('z-index');
      test.equal(1, p.style.length);
      p.style.backgroundColor = 'green';
      test.equal('background-color: green;', p.style.cssText);
      test.equal('background-color', p.style.item(0));
      test.done();
    });
  },

  retainOriginalStyleAttributeUntilStyleGetter: function (test) {
    jsdom.env(
        '<html>',
        jsdom.level('2', 'html'), function (err, win) {
          var document = win.document;
          var div = document.createElement('div');
          div.setAttribute('style', 'font-weight: bold; font-weight: normal;');
          test.equal(div.getAttribute('style'), 'font-weight: bold; font-weight: normal;');
          div.innerHTML = '<div style="color: red; color: blue;"></div>';
          test.equal(div.innerHTML, '<div style="color: red; color: blue;"></div>');
          test.equal(div.firstChild.getAttribute('style'), 'color: red; color: blue;');
          div.firstChild.style.color = 'maroon';
          test.equal(div.firstChild.getAttribute('style'), 'color: maroon;');
          test.done();
        }
     );
  },

  getComputedStyleInline: function(test) {
    jsdom.env(
        '<html>',
        jsdom.level('2', 'html'), function(err, win) {
          var doc = win.document;
          var html = doc.createElement("html");
          doc.appendChild(html);
          var head = doc.createElement("head");
          html.appendChild(head);
          var style = doc.createElement("style");
          style.innerHTML = "p { display: none; }";
          head.appendChild(style);
          var body = doc.createElement("body");
          html.appendChild(body);
          var p = doc.createElement("p");
          body.appendChild(p);
          p = doc.getElementsByTagName("p")[0];
          var cs = win.getComputedStyle(p);
          test.equal(cs.display, "none", "computed display of p is none");
          test.done();
    });
  },

  getComputedStyleFromEmbeddedSheet1: function(test) {
    jsdom.env(
        '<html><head><style>#id1 .clazz { margin-left: 100px; }</style></head><body>'
            + '<div id="id1"><p class="clazz"></p></div>'
            + '</body></html>',
        jsdom.level('2', 'html'), function(err, win) {
          var doc = win.document;
          p = doc.getElementsByTagName("p")[0];
          var cs = win.getComputedStyle(p);
          test.equal(cs.marginLeft, "100px", "computed marginLeft of p[0] is 100px");
          test.done();
    });
  },

  getComputedStyleFromEmbeddedSheet2: function(test) {
    // use grouping, see http://www.w3.org/TR/CSS2/selector.html#grouping
    jsdom.env(
        '<html><head><style>#id1 .clazz, #id2 .clazz { margin-left: 100px; }</style></head><body>'
            + '<div id="id1"><p class="clazz"></p></div>'
            + '<div id="id2"><p class="clazz"></p></div>'
            + '</body></html>',
        jsdom.level('2', 'html'), function(err, win) {
          var doc = win.document;
          p = doc.getElementsByTagName("p")[0];
          var cs = win.getComputedStyle(p);
          test.equal(cs.marginLeft, "100px", "computed marginLeft of p[0] is 100px");

          p = doc.getElementsByTagName("p")[1];
          var cs = win.getComputedStyle(p);
          test.equal(cs.marginLeft, "100px", "computed marginLeft of p[1] is 100px");
          test.done();
    });
  },

  getComputedStyleFromEmbeddedSheet3: function(test) {
    // use grouping with embedded quotes and commas, see https://github.com/tmpvar/jsdom/pull/541#issuecomment-18114747
    jsdom.env(
        '<html><head><style>#id1 .clazz, button[onclick="ga(this, event)"], #id2 .clazz { margin-left: 100px; }</style></head><body>'
            + '<div id="id1"><p class="clazz"></p></div>'
            + '<div id="id2"><p class="clazz"></p></div>'
            + '<button onclick="ga(this, event)">analytics button</button>'
            + '</body></html>',
        jsdom.level('2', 'html'), function(err, win) {
          var doc = win.document;
          var p = doc.getElementsByTagName("p")[1];
          var cs = win.getComputedStyle(p);
          test.equal(cs.marginLeft, "100px", "computed marginLeft of p[1] is 100px");

          var button = doc.getElementsByTagName("button")[0];
          cs = win.getComputedStyle(button);
          test.equal(cs.marginLeft, "100px", "computed marginLeft of button[0] is 100px");
          test.done();
    });
  },

  ensureExternalStylesheetsAreLoadable : function(test) {
    var css = "body { border: 1px solid #f0f; }";
    var server = http.createServer(function(req, res) {
      res.writeHead(200, {
        'Content-type' : 'text/css',
        'Content-length' : css.length
      });
      res.end(css);
    });

    server.listen(10099);

    jsdom.env(path.resolve(__dirname, 'style/external_css.html'), function(errors, win) {
      test.equal(win.document.errors, null);
      server.close();
      test.done();
    });
  },

  getComputedStyleExternal: function(test) {
    var css = "div { color: red; }";
    var server = http.createServer(function(req, res) {
      res.writeHead(200, {
        'Content-type' : 'text/css',
        'Content-length' : css.length
      });
      res.end(css);
    });

    server.listen(10099);

    var html = fs.readFileSync(path.resolve(__dirname, 'style/getComputedStyleExternal.html'), 'utf8');
    var doc = jsdom.jsdom(html);
    var win = doc.createWindow();
    doc.onload = function () {
      var div = doc.getElementsByTagName("div")[0];
      var style = win.getComputedStyle(div);
      test.equal(style.color, "red", "computed color of div is red");
      server.close();
      test.done();
    };
  },

  getComputedStyleWithBadSelectors: function(test) {
    jsdom.env(
        '<html>',
        jsdom.level('2', 'html'), function(err, win) {
          var doc = win.document;
          var html = doc.createElement("html");
          doc.appendChild(html);
          var head = doc.createElement("head");
          html.appendChild(head);
          var style = doc.createElement("style");
          style.innerHTML = ";p { display: none; }";
          head.appendChild(style);
          var body = doc.createElement("body");
          html.appendChild(body);
          var p = doc.createElement("p");
          body.appendChild(p);
          p = doc.getElementsByTagName("p")[0];
          test.doesNotThrow(function () {
            win.getComputedStyle(p);
          });
          test.done();
    });
  },

  getComputedStyleWithMediaRules: function(test) {
    jsdom.env(
        '<html><head><style>@media screen,handheld { .citation { color: blue; } } @media print { .citation { color: red; } }</style></head>' +
        '<body><p class="citation">Hello</p></body></html>',
        jsdom.level('2', 'html'), function(err, win) {
          var style = win.getComputedStyle(win.document.querySelector('.citation'));
          test.equal(style.color, 'blue', 'computed color of p is blue');
          test.done();
    });
  },

  getComputedStyleWithKeyframeRules: function(test) {
    jsdom.env(
        '<html><head><style>@-webkit-keyframes breaking {}</style></head>' +
        '<body><p>Hello</p></body></html>',
        jsdom.level('2', 'html'), function(err, win) {
          test.doesNotThrow(function () {
            var style = win.getComputedStyle(win.document.querySelector('p'));
          });
          test.done();
    });
  }
};
