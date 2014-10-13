var dom = require("../../lib/jsdom/level2/core").dom.level2.core;
var jsdom = require('../../lib/jsdom');
var browser;

exports.tests = {
  setUp : function(done) {
    browser = require("../../lib/jsdom/browser/index").browserAugmentation(dom);
    done();
  },
  notfound_getelementsbyclassname: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    p.className = "unknown";
    body.appendChild(p);
    var elements = doc.getElementsByClassName("first-p");
    test.equal(elements.length, 0, "no results");
    test.done();
  },

  basic_getelementsbyclassname: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    p.className = "first-p";
    body.appendChild(p);
    var elements = doc.getElementsByClassName("first-p");
    test.equal(elements.item(0), p, 'p and first-p');
    test.done();
  },

  multiple_getelementsbyclassname: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    p.className = "first-p second third";
    body.appendChild(p);
    var first = doc.getElementsByClassName("first-p").item(0);
    var second = doc.getElementsByClassName("second").item(0);
    var third = doc.getElementsByClassName("third").item(0);
    test.equal(first, p, 'p and first-p');
    test.equal(second, p, 'p and second');
    test.equal(third, p, 'p and third');
    test.done();
  },

  testclassnameworksasexpected: function(test) {
    var doc = new browser.Document();
    var p = doc.createElement("p");
    p.setAttribute("class", "first-p");
    test.equal(p.className, 'first-p', 'class attribute is same as className');
    p.className += " second";
    test.equal(p.className, 'first-p second', 'className getter/setter');
    test.done();
  },

  basic_getelementbyid: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    p.id = "theid";
    body.appendChild(p);
    var element = doc.getElementById("theid");
    test.equal(element, p, "p and #theid");
    test.done();
  },

  nonexistant_getelementbyid: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    p.id = "theid";
    body.appendChild(p);
    var element = doc.getElementById("non-existant-id");
    test.equal(element, null, "p and #theid");
    test.done();
  },

  remove_nonexistantattribute: function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    test.doesNotThrow(function(){ body.removeAttribute("non-existant"); }), 'setValue_throws_NO_MODIFICATION_ERR';
    test.done();
  },

  render_singletag: function(test) {
    var doc = new browser.Document();
    var p = doc.createElement("p");
    var img = doc.createElement("img");
    p.appendChild(img);
    var out = p.outerHTML;
    test.equal(out.match(/<\/img>/), null, 'end tag not included in output')
    test.done();
  },

  render_specialchars: function(test) {
	  var doc = new browser.Document();
	  var p = doc.createElement("p");
	  var specials = '"<>&\xA0';
	  var escapedSpecials = '"&lt;&gt;&amp;&nbsp;';
	  p.setAttribute("specials", specials);
	  p.innerHTML = escapedSpecials;
	  var pp = doc.createElement("p");
	  pp.appendChild(p);
	  // This matches the behavior of FireFox, Chrome, and Safari.
	  // IE8 does not escape <> in attributes, but does escape &shy; in attributes and text content.
	  test.equal(pp.innerHTML, '<p specials="&quot;&lt;&gt;&amp;&nbsp;">"&lt;&gt;&amp;&nbsp;</p>' );
	  test.done();
  },

  parse_scripttags: function(test) {
    var doc = new browser.Document();
    var head = doc.createElement("head");
    var scriptHtml = '<script>alert("hello world")</script>';
    head.innerHTML = scriptHtml;
    test.equal(scriptHtml, head.innerHTML, "original and processed");
    test.done();
  },

  parse_styletags: function(test) {
    var doc = new browser.Document();
    var head = doc.createElement("head");
    var styleHtml = '<style>body: {color: #fff;}</style>';
    head.innerHTML = styleHtml;
    test.equal(styleHtml, head.innerHTML, "original and processed");
    test.done();
  },

  parse_doublespacetags: function(test) {
    var doc = new browser.Document();
    var html = '<html><body  class="testing" /></html>';
    test.doesNotThrow(function(){ doc.innerHTML = html; }), 'setValue_throws_INVALID_CHARACTER_ERR';
    test.done();
  },

  serialize_styleattribute: function(test) {
    var doc = new browser.Document();
    var domToHtml = require('../../lib/jsdom/browser/domtohtml');
    doc.appendChild(doc.createElement('html'));
    doc.documentElement.style.color = 'black';
    doc.documentElement.style.backgroundColor = 'white';
    test.equal(domToHtml.domToHtml(doc), '<html style="color: black; background-color: white;"></html>\n', '');
    test.done();
  },

  innerhtml_removeallchildren: function(test) {
    var doc = new browser.Document();
    var body = doc.createElement('body');
    body.appendChild(doc.createElement('p'));
    body.innerHTML = "";
    test.equal(body.childNodes.length, 0, 'still has children');
    test.done();
  },

  innerhtml_null: function(test) {
    var doc = new browser.HTMLDocument();
    var body = doc.createElement('body');
    body.appendChild(doc.createElement('p'));
    body.innerHTML = null;
    test.equal(body.childNodes.length, 0, 'still has children');
    test.done();
  },

  serialize_html5_doctype: function(test) {
    var dom = new browser.DOMImplementation();
    var doctype = dom.createDocumentType('html');
    var document = dom.createDocument(null, null, doctype);
    var regexp = /^\s*<!DOCTYPE html>/;
    test.ok(regexp.test(document.outerHTML), 'HTML 5 doctype did not serialize correctly');
    test.done();
  },

  serialize_html4_strict_doctype: function(test) {
    var dom = new browser.DOMImplementation();
    var doctype = dom.createDocumentType('html', '-//W3C//DTD HTML 4.01//EN', 'http://www.w3.org/TR/html4/strict.dtd');
    var document = dom.createDocument(null, null, doctype);
    var regexp = /^\s*<!DOCTYPE html PUBLIC "-\/\/W3C\/\/DTD HTML 4.01\/\/EN" "http:\/\/www.w3.org\/TR\/html4\/strict.dtd">/;
    test.ok(regexp.test(document.outerHTML), 'HTML 4 strict doctype did not serialize correctly');
    test.done();
  },

  serialize_system_doctype: function(test) {
    var dom = new browser.DOMImplementation();
    var doctype = dom.createDocumentType('foo', null, 'foo.dtd');
    var document = dom.createDocument(null, null, doctype);
    var regexp = /^\s*<!DOCTYPE foo SYSTEM "foo.dtd">/;
    test.ok(regexp.test(document.outerHTML), 'Doctype did not serialize correctly');
    test.done();
  },

  serialize_doctype_containing_quotes: function(test) {
    var dom = new browser.DOMImplementation();
    var doctype = dom.createDocumentType('foo', null, 'foo "bar".dtd');
    var document = dom.createDocument(null, null, doctype);
    var regexp = /^\s*<!DOCTYPE foo SYSTEM \'foo "bar".dtd\'>/;
    test.ok(regexp.test(document.outerHTML), 'Doctype did not serialize correctly');
    test.done();
  },

  parse_doctype_containing_newline : function(test) {
    var html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n \
             "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html></html>',
        doc  = new browser.Document();
    doc.innerHTML = html;
    test.ok(!!doc.doctype, 'doctype should not be falsy');
    test.done();
  },

  basic_nodelist_indexOf : function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    body.appendChild(p);
    var div = doc.createElement("div");
    body.appendChild(div);
    var span = doc.createElement("span");
    body.appendChild(span);
    var index = body.childNodes._toArray().indexOf(span);
    test.equal(index, 2, "indexOf 'span' in childNodes")
    test.done();
  },

  nonexistant_nodelist_indexOf : function(test) {
    var doc = new browser.Document();
    var html = doc.createElement("html");
    doc.appendChild(html);
    var body = doc.createElement("body");
    html.appendChild(body);
    var p = doc.createElement("p");
    body.appendChild(p);
    var div = doc.createElement("div");
    p.appendChild(div);
    var index = body.childNodes._toArray().indexOf(div);
    test.equal(index, -1, "indexOf 'span' in childNodes")
    test.done();
  },

  input_fires_click_event : function(test) {
    doc = jsdom.jsdom(
      '<html><head></head><body>' +
        '<input type="checkbox" id="check" value="check" />' +
      '</body>')

    var checkbox = doc.getElementById("check");

    checkbox.addEventListener("click", function(event) {
      test.equal(event.type, "click", "event type");
      test.equal(event.target, checkbox, "event type");
      test.done();
    })

    checkbox.click();
  },

  basic_radio_selected : function(test) {
    doc = jsdom.jsdom(
      '<html><head></head><body>' +
        '<input type="radio" id="rad0" value="rad0" name="radioGroup0" />' +
        '<input type="radio" id="rad1" value="rad1" name="radioGroup0" checked="checked" />' +
        '<input type="radio" id="rad2" value="rad2" name="radioGroup1" />' +
      '</body>')

    var radio0 = doc.getElementById("rad0");
    var radio1 = doc.getElementById("rad1");
    var radio2 = doc.getElementById("rad2");

    test.ok(!radio0.checked, "radio not checked");
    test.ok(radio1.checked, "radio checked");
    test.ok(!radio2.checked, "radio not checked");

    radio2.click()
    radio0.click();
    test.ok(radio0.checked, "radio checked");
    test.ok(!radio1.checked, "radio not checked");
    test.ok(radio2.checked, "radio checked");

    radio1.click();
    test.ok(!radio0.checked, "radio not checked");
    test.ok(radio1.checked, "radio checked");
    test.ok(radio2.checked, "radio checked");

    test.done();
  },

  radio_no_click_deselected : function(test) {
    doc = jsdom.jsdom(
      '<html><head></head><body>' +
        '<input type="radio" id="rad0" value="rad0" name="radioGroup0" />' +
      '</body>')

    var radio0 = doc.getElementById("rad0");

    radio0.click();
    test.ok(radio0.checked, "radio checked");

    radio0.click();
    test.ok(radio0.checked, "radio checked");

    test.done();
  },

  select_set_value_updates_value : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option value="x">x</option><option value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");

    select.value = "x"
    test.equal(select.value, "x", "select element value");

    select.value = "y"
    test.equal(select.value, "y", "select element selectedIndex");

    test.done();
  },

  select_set_value_updates_selectedIndex : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option value="x">x</option><option value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");

    select.value = "x"
    test.equal(select.selectedIndex, 0, "select element selectedIndex");

    select.value = "y"
    test.equal(select.selectedIndex, 1, "select element selectedIndex");

    test.done();
  },

  select_set_value_updates_option_selected : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option id="optX" value="x">x</option><option id="optY" value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");
    var option0 = doc.getElementById("optX");
    var option1 = doc.getElementById("optY");

    select.value = "x";
    test.ok(option0.selected, "option element selected");

    select.value = "y";
    test.ok(option1.selected, "option element selected");

    test.done();
  },

  select_set_selectedIndex_updates_value : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option value="x">x</option><option value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");

    select.selectedIndex = 0
    test.equal(select.value, "x", "select element selectedIndex");

    select.selectedIndex = 1
    test.equal(select.value, "y", "select element selectedIndex");

    test.done();
  },

  select_set_selectedIndex_updates_selectedIndex : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option value="x">x</option><option value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");

    select.selectedIndex = 0
    test.equal(select.selectedIndex, 0, "select element selectedIndex");

    select.selectedIndex = 1
    test.equal(select.selectedIndex, 1, "select element selectedIndex");

    test.done();
  },

  select_set_selectedIndex_updates_option_selected : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option id="optX" value="x">x</option><option id="optY" value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");
    var option0 = doc.getElementById("optX");
    var option1 = doc.getElementById("optY");

    select.selectedIndex = 0;
    test.ok(option0.selected, "option element selected");
    test.ok(!option1.selected, "option element selected");

    select.selectedIndex = 1;
    test.ok(option1.selected, "option element selected");
    test.ok(!option0.selected, "option element selected");

    test.done();
  },

  select_set_option_selected_updates_value : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option id="optX" value="x">x</option><option id="optY" value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");
    var option0 = doc.getElementById("optX");
    var option1 = doc.getElementById("optY");

    select.selectedIndex = 0;
    option0.selected = true;
    test.equal(select.value, "x", "select element value");

    option1.selected = true;
    test.equal(select.value, "y", "select element value");

    test.done();
  },

  select_set_option_selected_updates_selectedIndex : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option id="optX" value="x">x</option><option id="optY" value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");
    var option0 = doc.getElementById("optX");
    var option1 = doc.getElementById("optY");

    option0.selected = true;
    test.equal(select.selectedIndex, 0, "select element selectedIndex");

    option1.selected = true;
    test.equal(select.selectedIndex, 1, "select element selectedIndex");

    test.done();
  },

  select_set_option_selected_updates_option_selected : function(test) {
    var doc = new browser.Document();

    var html = doc.createElement("html");
    var body = doc.createElement("body");

    doc.appendChild(html);
    html.appendChild(body);

    body.innerHTML =
      '<select id="selectElement">' +
        '<option id="optX" value="x">x</option><option id="optY" value="y">y</option>' +
      '</select>';

    var select = doc.getElementById("selectElement");
    var option0 = doc.getElementById("optX");
    var option1 = doc.getElementById("optY");

    option0.selected = true;
    test.ok(option0.selected, "option element selected");
    test.ok(!option1.selected, "option element selected");

    option1.selected = true;
    test.ok(option1.selected, "option element selected");
    test.ok(!option0.selected, "option element selected");

    test.done();
  },
};
