/* eslint-disable */
// Adapted from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus

import _platform from 'platform'
import cssEscape from 'css.escape'

// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
  if (!input) {
    return []
  }

  if (Array.isArray(input)) {
    return input
  }

  // instanceof Node - does not work with iframes
  if (input.nodeType !== undefined) {
    return [input]
  }

  if (typeof input === 'string') {
    input = document.querySelectorAll(input)
  }

  if (input.length !== undefined) {
    return [].slice.call(input, 0)
  }

  throw new TypeError('unexpected input ' + String(input))
}

function contextToElement(_ref) {
  var context = _ref.context,
    _ref$label = _ref.label,
    label = _ref$label === undefined ? 'context-to-element' : _ref$label,
    resolveDocument = _ref.resolveDocument,
    defaultToDocument = _ref.defaultToDocument

  var element = nodeArray(context)[0]

  if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
    element = element.documentElement
  }

  if (!element && defaultToDocument) {
    return document.documentElement
  }

  if (!element) {
    throw new TypeError(label + ' requires valid options.context')
  }

  if (
    element.nodeType !== Node.ELEMENT_NODE &&
    element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
  ) {
    throw new TypeError(label + ' requires options.context to be an Element')
  }

  return element
}

function getShadowHost() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context

  var element = contextToElement({
    label: 'get/shadow-host',
    context: context,
  })

  // walk up to the root
  var container = null

  while (element) {
    container = element
    element = element.parentNode
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
  // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
  if (
    container.nodeType === container.DOCUMENT_FRAGMENT_NODE &&
    container.host
  ) {
    // the root is attached to a fragment node that has a host
    return container.host
  }

  return null
}

function getDocument(node) {
  if (!node) {
    return document
  }

  if (node.nodeType === Node.DOCUMENT_NODE) {
    return node
  }

  return node.ownerDocument || document
}

function isActiveElement(context) {
  var element = contextToElement({
    label: 'is/active-element',
    resolveDocument: true,
    context: context,
  })

  var _document = getDocument(element)
  if (_document.activeElement === element) {
    return true
  }

  var shadowHost = getShadowHost({ context: element })
  if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
    return true
  }

  return false
}

// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context

  var list = []
  var element = contextToElement({
    label: 'get/parents',
    context: context,
  })

  while (element) {
    list.push(element)
    // IE does know support parentElement on SVGElement
    element = element.parentNode
    if (element && element.nodeType !== Node.ELEMENT_NODE) {
      element = null
    }
  }

  return list
}

// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches

var names = [
  'matches',
  'webkitMatchesSelector',
  'mozMatchesSelector',
  'msMatchesSelector',
]
var name = null

function findMethodName(element) {
  names.some(function (_name) {
    if (!element[_name]) {
      return false
    }

    name = _name
    return true
  })
}

function elementMatches(element, selector) {
  if (!name) {
    findMethodName(element)
  }

  return element[name](selector)
}

// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform))

// operating system
var os = platform.os.family || ''
var ANDROID = os === 'Android'
var WINDOWS = os.slice(0, 7) === 'Windows'
var OSX = os === 'OS X'
var IOS = os === 'iOS'

// layout
var BLINK = platform.layout === 'Blink'
var GECKO = platform.layout === 'Gecko'
var TRIDENT = platform.layout === 'Trident'
var EDGE = platform.layout === 'EdgeHTML'
var WEBKIT = platform.layout === 'WebKit'

// browser version (not layout engine version!)
var version = parseFloat(platform.version)
var majorVersion = Math.floor(version)
platform.majorVersion = majorVersion

platform.is = {
  // operating system
  ANDROID: ANDROID,
  WINDOWS: WINDOWS,
  OSX: OSX,
  IOS: IOS,
  // layout
  BLINK: BLINK, // "Chrome", "Chrome Mobile", "Opera"
  GECKO: GECKO, // "Firefox"
  TRIDENT: TRIDENT, // "Internet Explorer"
  EDGE: EDGE, // "Microsoft Edge"
  WEBKIT: WEBKIT, // "Safari"
  // INTERNET EXPLORERS
  IE9: TRIDENT && majorVersion === 9,
  IE10: TRIDENT && majorVersion === 10,
  IE11: TRIDENT && majorVersion === 11,
}

function before() {
  var data = {
    // remember what had focus to restore after test
    activeElement: document.activeElement,
    // remember scroll positions to restore after test
    windowScrollTop: window.scrollTop,
    windowScrollLeft: window.scrollLeft,
    bodyScrollTop: document.body.scrollTop,
    bodyScrollLeft: document.body.scrollLeft,
  }

  // wrap tests in an element hidden from screen readers to prevent them
  // from announcing focus, which can be quite irritating to the user
  var iframe = document.createElement('iframe')
  iframe.setAttribute(
    'style',
    'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;'
  )
  iframe.setAttribute('aria-live', 'off')
  iframe.setAttribute('aria-busy', 'true')
  iframe.setAttribute('aria-hidden', 'true')
  document.body.appendChild(iframe)

  var _window = iframe.contentWindow
  var _document = _window.document

  _document.open()
  _document.close()
  var wrapper = _document.createElement('div')
  _document.body.appendChild(wrapper)

  data.iframe = iframe
  data.wrapper = wrapper
  data.window = _window
  data.document = _document

  return data
}

// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
  // make sure we operate on a clean slate
  data.wrapper.innerHTML = ''
  // create dummy element to test focusability of
  var element =
    typeof options.element === 'string'
      ? data.document.createElement(options.element)
      : options.element(data.wrapper, data.document)
  // allow callback to further specify dummy element
  // and optionally define element to focus
  var focus =
    options.mutate && options.mutate(element, data.wrapper, data.document)
  if (!focus && focus !== false) {
    focus = element
  }
  // element needs to be part of the DOM to be focusable
  !element.parentNode && data.wrapper.appendChild(element)
  // test if the element with invalid tabindex can be focused
  focus && focus.focus && focus.focus()
  // validate test's result
  return options.validate
    ? options.validate(element, focus, data.document)
    : data.document.activeElement === focus
}

function after(data) {
  // restore focus to what it was before test and cleanup
  if (data.activeElement === document.body) {
    document.activeElement &&
    document.activeElement.blur &&
    document.activeElement.blur()
    if (platform.is.IE10) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus()
    }
  } else {
    data.activeElement && data.activeElement.focus && data.activeElement.focus()
  }

  document.body.removeChild(data.iframe)

  // restore scroll position
  window.scrollTop = data.windowScrollTop
  window.scrollLeft = data.windowScrollLeft
  document.body.scrollTop = data.bodyScrollTop
  document.body.scrollLeft = data.bodyScrollLeft
}

function detectFocus(tests) {
  var data = before()

  var results = {}
  Object.keys(tests).map(function (key) {
    results[key] = test(data, tests[key])
  })

  after(data)
  return results
}

// this file is overwritten by `npm run build:pre`
var version$1 = '1.4.1'

/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */

function readLocalStorage(key) {
  // allow reading from storage to retrieve previous support results
  // even while the document does not have focus
  var data = void 0

  try {
    data = window.localStorage && window.localStorage.getItem(key)
    data = data ? JSON.parse(data) : {}
  } catch (e) {
    data = {}
  }

  return data
}

function writeLocalStorage(key, value) {
  if (!document.hasFocus()) {
    // if the document does not have focus when tests are executed, focus() may
    // not be handled properly and events may not be dispatched immediately.
    // This can happen when a document is reloaded while Developer Tools have focus.
    try {
      window.localStorage && window.localStorage.removeItem(key)
    } catch (e) {
      // ignore
    }

    return
  }

  try {
    window.localStorage &&
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // ignore
  }
}

var userAgent =
  (typeof window !== 'undefined' && window.navigator.userAgent) || ''
var cacheKey = 'ally-supports-cache'
var cache = readLocalStorage(cacheKey)

// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
  cache = {}
}

cache.userAgent = userAgent
cache.version = version$1

var cache$1 = {
  get: function get() {
    return cache
  },
  set: function set(values) {
    Object.keys(values).forEach(function (key) {
      cache[key] = values[key]
    })

    cache.time = new Date().toISOString()
    writeLocalStorage(cacheKey, cache)
  },
}

function cssShadowPiercingDeepCombinator() {
  var combinator = void 0

  // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
  // https://code.google.com/p/chromium/issues/detail?id=446051
  try {
    document.querySelector('html >>> :first-child')
    combinator = '>>>'
  } catch (noArrowArrowArrow) {
    try {
      // old syntax supported at least up to Chrome 41
      // https://code.google.com/p/chromium/issues/detail?id=446051
      document.querySelector('html /deep/ :first-child')
      combinator = '/deep/'
    } catch (noDeep) {
      combinator = ''
    }
  }

  return combinator
}

var gif =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="image-map-tabindex-test">' +
      '<area shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' +
      gif +
      '">'

    return element.querySelector('area')
  },
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="image-map-tabindex-test">' +
      '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#image-map-tabindex-test" alt="" src="' +
      gif +
      '">'

    return false
  },
  validate: function validate(element, focusTarget, _document) {
    if (platform.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true
    }

    var focus = element.querySelector('area')
    focus.focus()
    return _document.activeElement === focus
  },
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="image-map-area-href-test">' +
      '<area shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#image-map-area-href-test" alt="" src="' +
      gif +
      '">'

    return element.querySelector('area')
  },
  validate: function validate(element, focusTarget, _document) {
    if (platform.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true
    }

    return _document.activeElement === focusTarget
  },
}

var focusAudioWithoutControls = {
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', gif)
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  },
}

var invalidGif =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#broken-image-map-test" alt="" src="' +
      invalidGif +
      '">'

    return element.querySelector('area')
  },
}

// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1')
    element.setAttribute(
      'style',
      'display: -webkit-flex; display: -ms-flexbox; display: flex;'
    )
    element.innerHTML = '<span style="display: block;">hello</span>'
    return element.querySelector('span')
  },
}

// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 0)
    element.setAttribute('disabled', 'disabled')
  },
}

var focusFieldset = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.innerHTML = '<legend>legend</legend><p>content</p>'
  },
}

// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
  element: 'span',
  mutate: function mutate(element) {
    element.setAttribute(
      'style',
      'display: -webkit-flex; display: -ms-flexbox; display: flex;'
    )
    element.innerHTML = '<span style="display: block;">hello</span>'
  },
}

// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
  element: 'form',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 0)
    element.setAttribute('disabled', 'disabled')
  },
}

// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
  element: 'a',
  mutate: function mutate(element) {
    element.href = '#void'
    element.innerHTML = '<img ismap src="' + gif + '" alt="">'
    return element.querySelector('img')
  },
}

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' +
      'src="' +
      gif +
      '">'

    return element.querySelector('img')
  },
}

var focusInHiddenIframe = {
  element: function element(wrapper, _document) {
    var iframe = _document.createElement('iframe')

    // iframe must be part of the DOM before accessing the contentWindow is possible
    wrapper.appendChild(iframe)

    // create the iframe's default document (<html><head></head><body></body></html>)
    var iframeDocument = iframe.contentWindow.document
    iframeDocument.open()
    iframeDocument.close()
    return iframe
  },
  mutate: function mutate(iframe) {
    iframe.style.visibility = 'hidden'

    var iframeDocument = iframe.contentWindow.document
    var input = iframeDocument.createElement('input')
    iframeDocument.body.appendChild(input)
    return input
  },
  validate: function validate(iframe) {
    var iframeDocument = iframe.contentWindow.document
    var focus = iframeDocument.querySelector('input')
    return iframeDocument.activeElement === focus
  },
}

var result = !platform.is.WEBKIT

function focusInZeroDimensionObject() {
  return result
}

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 'invalid-value')
  },
}

var focusLabelTabindex = {
  element: 'label',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1')
  },
  validate: function validate(element, focusTarget, _document) {
    // force layout in Chrome 49, otherwise the element won't be focusable
    /* eslint-disable no-unused-vars */
    var variableToPreventDeadCodeElimination = element.offsetHeight
    /* eslint-enable no-unused-vars */
    element.focus()
    return _document.activeElement === element
  },
}

var svg =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' +
  'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' +
  'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg=='

// Note: IE10 on BrowserStack does not like this test

var focusObjectSvgHidden = {
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml')
    element.setAttribute('data', svg)
    element.setAttribute('width', '200')
    element.setAttribute('height', '50')
    element.style.visibility = 'hidden'
  },
}

// Note: IE10 on BrowserStack does not like this test

var focusObjectSvg = {
  name: 'can-focus-object-svg',
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml')
    element.setAttribute('data', svg)
    element.setAttribute('width', '200')
    element.setAttribute('height', '50')
  },
  validate: function validate(element, focusTarget, _document) {
    if (platform.is.GECKO) {
      // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
      // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
      return true
    }

    return _document.activeElement === element
  },
}

// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9

function focusObjectSwf() {
  return result$1
}

var focusRedirectImgUsemap = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML =
      '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
      '<img usemap="#focus-redirect-img-usemap" alt="" ' +
      'src="' +
      gif +
      '">'

    // focus the <img>, not the <div>
    return element.querySelector('img')
  },
  validate: function validate(element, focusTarget, _document) {
    var target = element.querySelector('area')
    return _document.activeElement === target
  },
}

// see https://jsbin.com/nenirisage/edit?html,js,console,output

var focusRedirectLegend = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.innerHTML =
      '<legend>legend</legend><input tabindex="-1"><input tabindex="0">'
    // take care of focus in validate();
    return false
  },
  validate: function validate(element, focusTarget, _document) {
    var focusable = element.querySelector('input[tabindex="-1"]')
    var tabbable = element.querySelector('input[tabindex="0"]')

    // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
    // https://jsbin.com/nenirisage/edit?html,js,console,output
    element.focus()

    element.querySelector('legend').focus()
    return (
      (_document.activeElement === focusable && 'focusable') ||
      (_document.activeElement === tabbable && 'tabbable') ||
      ''
    )
  },
}

// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;')
    element.innerHTML =
      '<div style="width: 500px; height: 40px;">scrollable content</div>'
    return element.querySelector('div')
  },
}

// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px;')
    element.innerHTML =
      '<div style="width: 500px; height: 40px;">scrollable content</div>'
  },
}

// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;')
    element.innerHTML =
      '<div style="width: 500px; height: 40px;">scrollable content</div>'
  },
}

var focusSummary = {
  element: 'details',
  mutate: function mutate(element) {
    element.innerHTML = '<summary>foo</summary><p>content</p>'
    return element.firstElementChild
  },
}

function makeFocusableForeignObject() {
  var fragment = document.createElement('div')
  fragment.innerHTML =
    '<svg><foreignObject width="30" height="30">\n      <input type="text"/>\n  </foreignObject></svg>'

  return fragment.firstChild.firstChild
}

function focusSvgForeignObjectHack(element) {
  // Edge13, Edge14: foreignObject focus hack
  // https://jsbin.com/kunehinugi/edit?html,js,output
  // https://jsbin.com/fajagi/3/edit?html,js,output
  var isSvgElement =
    element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg'
  if (!isSvgElement) {
    return false
  }

  // inject and focus an <input> element into the SVG element to receive focus
  var foreignObject = makeFocusableForeignObject()
  element.appendChild(foreignObject)
  var input = foreignObject.querySelector('input')
  input.focus()

  // upon disabling the activeElement, IE and Edge
  // will not shift focus to <body> like all the other
  // browsers, but instead find the first focusable
  // ancestor and shift focus to that
  input.disabled = true

  // clean up
  element.removeChild(foreignObject)
  return true
}

function generate(element) {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    element +
    '</svg>'
  )
}

function focus(element) {
  if (element.focus) {
    return
  }

  try {
    HTMLElement.prototype.focus.call(element)
  } catch (e) {
    focusSvgForeignObjectHack(element)
  }
}

function validate(element, focusTarget, _document) {
  focus(focusTarget)
  return _document.activeElement === focusTarget
}

var focusSvgFocusableAttribute = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate('<text focusable="true">a</text>')
    return element.querySelector('text')
  },
  validate: validate,
}

var focusSvgTabindexAttribute = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate('<text tabindex="0">a</text>')
    return element.querySelector('text')
  },
  validate: validate,
}

var focusSvgNegativeTabindexAttribute = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate('<text tabindex="-1">a</text>')
    return element.querySelector('text')
  },
  validate: validate,
}

var focusSvgUseTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate(
      [
        '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
        '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />',
      ].join('')
    )

    return element.querySelector('use')
  },
  validate: validate,
}

var focusSvgForeignobjectTabindex = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate(
      '<foreignObject tabindex="-1"><input type="text" /></foreignObject>'
    )
    // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
    return (
      element.querySelector('foreignObject') ||
      element.getElementsByTagName('foreignObject')[0]
    )
  },
  validate: validate,
}

// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output

var result$2 = Boolean(
  platform.is.GECKO &&
  typeof SVGElement !== 'undefined' &&
  SVGElement.prototype.focus
)

function focusSvgInIframe() {
  return result$2
}

var focusSvg = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = generate('')
    return element.firstChild
  },
  validate: validate,
}

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '3x')
  },
}

var focusTable = {
  element: 'table',
  mutate: function mutate(element, wrapper, _document) {
    // IE9 has a problem replacing TBODY contents with innerHTML.
    // https://stackoverflow.com/a/8097055/515124
    // element.innerHTML = '<tr><td>cell</td></tr>';
    var fragment = _document.createDocumentFragment()
    fragment.innerHTML = '<tr><td>cell</td></tr>'
    element.appendChild(fragment)
  },
}

var focusVideoWithoutControls = {
  element: 'video',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', gif)
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  },
}

// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE

function tabsequenceAreaAtImgPosition() {
  return result$3
}

var testCallbacks = {
  cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
  focusInZeroDimensionObject: focusInZeroDimensionObject,
  focusObjectSwf: focusObjectSwf,
  focusSvgInIframe: focusSvgInIframe,
  tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition,
}

var testDescriptions = {
  focusAreaImgTabindex: focusAreaImgTabindex,
  focusAreaTabindex: focusAreaTabindex,
  focusAreaWithoutHref: focusAreaWithoutHref,
  focusAudioWithoutControls: focusAudioWithoutControls,
  focusBrokenImageMap: focusBrokenImageMap,
  focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
  focusFieldsetDisabled: focusFieldsetDisabled,
  focusFieldset: focusFieldset,
  focusFlexboxContainer: focusFlexboxContainer,
  focusFormDisabled: focusFormDisabled,
  focusImgIsmap: focusImgIsmap,
  focusImgUsemapTabindex: focusImgUsemapTabindex,
  focusInHiddenIframe: focusInHiddenIframe,
  focusInvalidTabindex: focusInvalidTabindex,
  focusLabelTabindex: focusLabelTabindex,
  focusObjectSvg: focusObjectSvg,
  focusObjectSvgHidden: focusObjectSvgHidden,
  focusRedirectImgUsemap: focusRedirectImgUsemap,
  focusRedirectLegend: focusRedirectLegend,
  focusScrollBody: focusScrollBody,
  focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
  focusScrollContainer: focusScrollContainer,
  focusSummary: focusSummary,
  focusSvgFocusableAttribute: focusSvgFocusableAttribute,
  focusSvgTabindexAttribute: focusSvgTabindexAttribute,
  focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
  focusSvgUseTabindex: focusSvgUseTabindex,
  focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
  focusSvg: focusSvg,
  focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
  focusTable: focusTable,
  focusVideoWithoutControls: focusVideoWithoutControls,
}

function executeTests() {
  var results = detectFocus(testDescriptions)
  Object.keys(testCallbacks).forEach(function (key) {
    results[key] = testCallbacks[key]()
  })

  return results
}

var supportsCache = null

function _supports() {
  if (supportsCache) {
    return supportsCache
  }

  supportsCache = cache$1.get()
  if (!supportsCache.time) {
    cache$1.set(executeTests())
    supportsCache = cache$1.get()
  }

  return supportsCache
}

var supports = void 0

// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/

function isValidTabindex(context) {
  if (!supports) {
    supports = _supports()
  }

  var validIntegerPattern = supports.focusTabindexTrailingCharacters
    ? validIntegerPatternWithTrailing
    : validIntegerPatternNoTrailing

  var element = contextToElement({
    label: 'is/valid-tabindex',
    resolveDocument: true,
    context: context,
  })

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  var hasTabindex = element.hasAttribute('tabindex')
  var hasTabIndex = element.hasAttribute('tabIndex')

  if (!hasTabindex && !hasTabIndex) {
    return false
  }

  // older Firefox and Internet Explorer don't support tabindex on SVG elements
  var isSvgElement =
    element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg'
  if (isSvgElement && !supports.focusSvgTabindexAttribute) {
    return false
  }

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (supports.focusInvalidTabindex) {
    return true
  }

  // an element matches the tabindex selector even if its value is invalid
  var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex')
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex))
}

function tabindexValue(element) {
  if (!isValidTabindex(element)) {
    return null
  }

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  var hasTabindex = element.hasAttribute('tabindex')
  var attributeName = hasTabindex ? 'tabindex' : 'tabIndex'

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  var tabindex = parseInt(element.getAttribute(attributeName), 10)
  return isNaN(tabindex) ? -1 : tabindex
}

// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers

function isUserModifyWritable(style) {
  // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
  // https://github.com/medialize/ally.js/issues/17
  var userModify = style.webkitUserModify || ''
  return Boolean(userModify && userModify.indexOf('write') !== -1)
}

function hasCssOverflowScroll(style) {
  return [
    style.getPropertyValue('overflow'),
    style.getPropertyValue('overflow-x'),
    style.getPropertyValue('overflow-y'),
  ].some(function (overflow) {
    return overflow === 'auto' || overflow === 'scroll'
  })
}

function hasCssDisplayFlex(style) {
  return style.display.indexOf('flex') > -1
}

function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
  if (nodeName !== 'div' && nodeName !== 'span') {
    // Internet Explorer advances scrollable containers and bodies to focusable
    // only if the scrollable container is <div> or <span> - this does *not*
    // happen for <section>, <article>, …
    return false
  }

  if (
    parentNodeName &&
    parentNodeName !== 'div' &&
    parentNodeName !== 'span' &&
    !hasCssOverflowScroll(parentStyle)
  ) {
    return false
  }

  return (
    element.offsetHeight < element.scrollHeight ||
    element.offsetWidth < element.scrollWidth
  )
}

var supports$1 = void 0

function isFocusRelevantRules() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    _ref$except = _ref.except,
    except =
      _ref$except === undefined
        ? {
          flexbox: false,
          scrollable: false,
          shadow: false,
        }
        : _ref$except

  if (!supports$1) {
    supports$1 = _supports()
  }

  var element = contextToElement({
    label: 'is/focus-relevant',
    resolveDocument: true,
    context: context,
  })

  if (!except.shadow && element.shadowRoot) {
    // a ShadowDOM host receives focus when the focus moves to its content
    return true
  }

  var nodeName = element.nodeName.toLowerCase()

  if (nodeName === 'input' && element.type === 'hidden') {
    // input[type="hidden"] supports.cannot be focused
    return false
  }

  if (
    nodeName === 'input' ||
    nodeName === 'select' ||
    nodeName === 'button' ||
    nodeName === 'textarea'
  ) {
    return true
  }

  if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
    // specifics filtered in is/focusable
    return true
  }

  if (nodeName === 'label') {
    // specifics filtered in is/focusable
    return true
  }

  if (nodeName === 'area') {
    // specifics filtered in is/focusable
    return true
  }

  if (nodeName === 'a' && element.hasAttribute('href')) {
    return true
  }

  if (nodeName === 'object' && element.hasAttribute('usemap')) {
    // object[usemap] is not focusable in any browser
    return false
  }

  if (nodeName === 'object') {
    var svgType = element.getAttribute('type')
    if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false
    } else if (
      !supports$1.focusObjectSwf &&
      svgType === 'application/x-shockwave-flash'
    ) {
      // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
      return false
    }
  }

  if (nodeName === 'iframe' || nodeName === 'object') {
    // browsing context containers
    return true
  }

  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true
  }

  if (element.hasAttribute('contenteditable')) {
    // also see CSS property user-modify below
    return true
  }

  if (
    nodeName === 'audio' &&
    (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))
  ) {
    return true
  }

  if (
    nodeName === 'video' &&
    (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))
  ) {
    return true
  }

  if (supports$1.focusSummary && nodeName === 'summary') {
    return true
  }

  var validTabindex = isValidTabindex(element)

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return (
      (validTabindex && supports$1.focusImgUsemapTabindex) ||
      supports$1.focusRedirectImgUsemap
    )
  }

  if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 supports.can focus <table> and <td>
    return true
  }

  if (supports$1.focusFieldset && nodeName === 'fieldset') {
    // IE10-11 supports.can focus <fieldset>
    return true
  }

  var isSvgElement = nodeName === 'svg'
  var isSvgContent = element.ownerSVGElement
  var focusableAttribute = element.getAttribute('focusable')
  var tabindex = tabindexValue(element)

  if (
    nodeName === 'use' &&
    tabindex !== null &&
    !supports$1.focusSvgUseTabindex
  ) {
    // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
    return false
  }

  if (nodeName === 'foreignobject') {
    // <use> can only be made focusable in Blink and WebKit
    return tabindex !== null && supports$1.focusSvgForeignobjectTabindex
  }

  if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
    return true
  }

  if (
    (isSvgElement || isSvgContent) &&
    element.focus &&
    !supports$1.focusSvgNegativeTabindexAttribute &&
    tabindex < 0
  ) {
    // Firefox 51 and 52 treat any natively tabbable SVG element with
    // tabindex="-1" as tabbable and everything else as inert
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
    return false
  }

  if (isSvgElement) {
    return (
      validTabindex ||
      supports$1.focusSvg ||
      supports$1.focusSvgInIframe ||
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      Boolean(
        supports$1.focusSvgFocusableAttribute &&
        focusableAttribute &&
        focusableAttribute === 'true'
      )
    )
  }

  if (isSvgContent) {
    if (supports$1.focusSvgTabindexAttribute && validTabindex) {
      return true
    }

    if (supports$1.focusSvgFocusableAttribute) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      return focusableAttribute === 'true'
    }
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true
  }

  var style = window.getComputedStyle(element, null)
  if (isUserModifyWritable(style)) {
    return true
  }

  if (
    supports$1.focusImgIsmap &&
    nodeName === 'img' &&
    element.hasAttribute('ismap')
  ) {
    // IE10-11 considers the <img> in <a href><img ismap> focusable
    // https://github.com/medialize/ally.js/issues/20
    var hasLinkParent = getParents({ context: element }).some(function (
      parent
    ) {
      return (
        parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href')
      )
    })

    if (hasLinkParent) {
      return true
    }
  }

  // https://github.com/medialize/ally.js/issues/21
  if (!except.scrollable && supports$1.focusScrollContainer) {
    if (supports$1.focusScrollContainerWithoutOverflow) {
      // Internet Explorer does will consider the scrollable area focusable
      // if the element is a <div> or a <span> and it is in fact scrollable,
      // regardless of the CSS overflow property
      if (isScrollableContainer(element, nodeName)) {
        return true
      }
    } else if (hasCssOverflowScroll(style)) {
      // Firefox requires proper overflow setting, IE does not necessarily
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      return true
    }
  }

  if (
    !except.flexbox &&
    supports$1.focusFlexboxContainer &&
    hasCssDisplayFlex(style)
  ) {
    // elements with display:flex are focusable in IE10-11
    return true
  }

  var parent = element.parentElement
  if (!except.scrollable && parent) {
    var parentNodeName = parent.nodeName.toLowerCase()
    var parentStyle = window.getComputedStyle(parent, null)
    if (
      supports$1.focusScrollBody &&
      isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)
    ) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true
    }

    // Children of focusable elements with display:flex are focusable in IE10-11
    if (supports$1.focusChildrenOfFocusableFlexbox) {
      if (hasCssDisplayFlex(parentStyle)) {
        return true
      }
    }
  }

  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // https://www.w3.org/TR/html5/editing.html#inert

  return false
}

// bind exceptions to an iterator callback
isFocusRelevantRules.except = function () {
  var except =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var isFocusRelevant = function isFocusRelevant(context) {
    return isFocusRelevantRules({
      context: context,
      except: except,
    })
  }

  isFocusRelevant.rules = isFocusRelevantRules
  return isFocusRelevant
}

// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({})

function findIndex(array, callback) {
  // attempt to use native or polyfilled Array#findIndex first
  if (array.findIndex) {
    return array.findIndex(callback)
  }

  var length = array.length

  // shortcut if the array is empty
  if (length === 0) {
    return -1
  }

  // otherwise loop over array
  for (var i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return i
    }
  }

  return -1
}

function getContentDocument(node) {
  try {
    // works on <object> and <iframe>
    return (
      node.contentDocument ||
      // works on <object> and <iframe>
      (node.contentWindow && node.contentWindow.document) ||
      // works on <object> and <iframe> that contain SVG
      (node.getSVGDocument && node.getSVGDocument()) ||
      null
    )
  } catch (e) {
    // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
    // also IE may throw member not found exception e.g. on <object type="image/png">
    return null
  }
}

function getWindow(node) {
  var _document = getDocument(node)
  return _document.defaultView || window
}

var shadowPrefix = void 0

function selectInShadows(selector) {
  if (typeof shadowPrefix !== 'string') {
    var operator = cssShadowPiercingDeepCombinator()
    if (operator) {
      shadowPrefix = ', html ' + operator + ' '
    }
  }

  if (!shadowPrefix) {
    return selector
  }

  return (
    selector +
    shadowPrefix +
    selector
      .replace(/\s*,\s*/g, ',')
      .split(',')
      .join(shadowPrefix)
  )
}

var selector = void 0

function findDocumentHostElement(_window) {
  if (!selector) {
    selector = selectInShadows('object, iframe')
  }

  if (_window._frameElement !== undefined) {
    return _window._frameElement
  }

  _window._frameElement = null

  var potentialHosts = _window.parent.document.querySelectorAll(selector)
  ;[].some.call(potentialHosts, function (element) {
    var _document = getContentDocument(element)
    if (_document !== _window.document) {
      return false
    }

    _window._frameElement = element
    return true
  })

  return _window._frameElement
}

function getFrameElement(element) {
  var _window = getWindow(element)
  if (!_window.parent || _window.parent === _window) {
    // if there is no parent browsing context,
    // we're not going to get a frameElement either way
    return null
  }

  try {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
    // does not work within <embed> anywhere, and not within in <object> in IE
    return _window.frameElement || findDocumentHostElement(_window)
  } catch (e) {
    return null
  }
}

// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/

function computedStyle(element, property) {
  return window.getComputedStyle(element, null).getPropertyValue(property)
}

function notDisplayed(_path) {
  return _path.some(function (element) {
    // display:none is not visible (optimized away at layout)
    return computedStyle(element, 'display') === 'none'
  })
}

function notVisible(_path) {
  // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
  // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
  // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
  var hidden = findIndex(_path, function (element) {
    var visibility = computedStyle(element, 'visibility')
    return visibility === 'hidden' || visibility === 'collapse'
  })

  if (hidden === -1) {
    // there is no hidden element
    return false
  }

  var visible = findIndex(_path, function (element) {
    return computedStyle(element, 'visibility') === 'visible'
  })

  if (visible === -1) {
    // there is no visible element (but a hidden element)
    return true
  }

  if (hidden < visible) {
    // there is a hidden element and it's closer than the first visible element
    return true
  }

  // there may be a hidden element, but the closest element is visible
  return false
}

function collapsedParent(_path) {
  var offset = 1
  if (_path[0].nodeName.toLowerCase() === 'summary') {
    offset = 2
  }

  return _path.slice(offset).some(function (element) {
    // "content children" of a closed details element are not visible
    return (
      element.nodeName.toLowerCase() === 'details' && element.open === false
    )
  })
}

function isVisibleRules() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    _ref$except = _ref.except,
    except =
      _ref$except === undefined
        ? {
          notRendered: false,
          cssDisplay: false,
          cssVisibility: false,
          detailsElement: false,
          browsingContext: false,
        }
        : _ref$except

  var element = contextToElement({
    label: 'is/visible',
    resolveDocument: true,
    context: context,
  })

  var nodeName = element.nodeName.toLowerCase()
  if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
    return true
  }

  var _path = getParents({ context: element })

  // in Internet Explorer <audio> has a default display: none, where others have display: inline
  // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
  // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
  var isAudioWithoutControls =
    nodeName === 'audio' && !element.hasAttribute('controls')
  if (
    !except.cssDisplay &&
    notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)
  ) {
    return false
  }

  if (!except.cssVisibility && notVisible(_path)) {
    return false
  }

  if (!except.detailsElement && collapsedParent(_path)) {
    return false
  }

  if (!except.browsingContext) {
    // elements within a browsing context are affected by the
    // browsing context host element's visibility and tabindex
    var frameElement = getFrameElement(element)
    var _isVisible = isVisibleRules.except(except)
    if (frameElement && !_isVisible(frameElement)) {
      return false
    }
  }

  return true
}

// bind exceptions to an iterator callback
isVisibleRules.except = function () {
  var except =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var isVisible = function isVisible(context) {
    return isVisibleRules({
      context: context,
      except: except,
    })
  }

  isVisible.rules = isVisibleRules
  return isVisible
}

// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({})

function getMapByName(name, _document) {
  // apparently getElementsByName() also considers id attribute in IE & opera
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
  var map = _document.querySelector('map[name="' + cssEscape(name) + '"]')
  return map || null
}

function getImageOfArea(element) {
  var map = element.parentElement

  if (!map.name || map.nodeName.toLowerCase() !== 'map') {
    return null
  }

  // NOTE: image maps can also be applied to <object> with image content,
  // but no browser supports this at the moment

  // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
  // <img> and <object> referencing the <map> element, but no browser implements this
  //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
  // the image must be valid and loaded for the map to take effect
  var _document = getDocument(element)
  return (
    _document.querySelector('img[usemap="#' + cssEscape(map.name) + '"]') ||
    null
  )
}

var supports$2 = void 0

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
  if (!supports$2) {
    supports$2 = _supports()
  }

  var element = contextToElement({
    label: 'is/valid-area',
    context: context,
  })

  var nodeName = element.nodeName.toLowerCase()
  if (nodeName !== 'area') {
    return false
  }

  var hasTabindex = element.hasAttribute('tabindex')
  if (!supports$2.focusAreaTabindex && hasTabindex) {
    // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
    return false
  }

  var img = getImageOfArea(element)
  if (!img || !isVisible(img)) {
    return false
  }

  // Firefox only allows fully loaded images to reference image maps
  // https://stereochro.me/ideas/detecting-broken-images-js
  if (
    !supports$2.focusBrokenImageMap &&
    (!img.complete ||
      !img.naturalHeight ||
      img.offsetWidth <= 0 ||
      img.offsetHeight <= 0)
  ) {
    return false
  }

  // Firefox supports.can focus area elements even if they don't have an href attribute
  if (!supports$2.focusAreaWithoutHref && !element.href) {
    // Internet explorer supports.can focus area elements without href if either
    // the area element or the image element has a tabindex attribute
    return (
      (supports$2.focusAreaTabindex && hasTabindex) ||
      (supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex'))
    )
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  var childOfInteractive = getParents({ context: img })
    .slice(1)
    .some(function (_element) {
      var name = _element.nodeName.toLowerCase()
      return name === 'button' || name === 'a'
    })

  if (childOfInteractive) {
    return false
  }

  return true
}

var supports$3 = void 0

// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0
var disabledElements = {
  input: true,
  select: true,
  textarea: true,
  button: true,
  fieldset: true,
  form: true,
}

function isNativeDisabledSupported(context) {
  if (!supports$3) {
    supports$3 = _supports()

    if (supports$3.focusFieldsetDisabled) {
      delete disabledElements.fieldset
    }

    if (supports$3.focusFormDisabled) {
      delete disabledElements.form
    }

    disabledElementsPattern = new RegExp(
      '^(' + Object.keys(disabledElements).join('|') + ')$'
    )
  }

  var element = contextToElement({
    label: 'is/native-disabled-supported',
    context: context,
  })

  var nodeName = element.nodeName.toLowerCase()
  return Boolean(disabledElementsPattern.test(nodeName))
}

var supports$4 = void 0

function isDisabledFieldset(element) {
  var nodeName = element.nodeName.toLowerCase()
  return nodeName === 'fieldset' && element.disabled
}

function isDisabledForm(element) {
  var nodeName = element.nodeName.toLowerCase()
  return nodeName === 'form' && element.disabled
}

function isDisabled(context) {
  if (!supports$4) {
    supports$4 = _supports()
  }

  var element = contextToElement({
    label: 'is/disabled',
    context: context,
  })

  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true
  }

  if (!isNativeDisabledSupported(element)) {
    // non-form elements do not support the disabled attribute
    return false
  }

  if (element.disabled) {
    // the element itself is disabled
    return true
  }

  var parents = getParents({ context: element })
  if (parents.some(isDisabledFieldset)) {
    // a parental <fieldset> is disabld and inherits the state onto this element
    return true
  }

  if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
    // a parental <form> is disabld and inherits the state onto this element
    return true
  }

  return false
}

function isOnlyTabbableRules() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    _ref$except = _ref.except,
    except =
      _ref$except === undefined
        ? {
          onlyFocusableBrowsingContext: false,
          visible: false,
        }
        : _ref$except

  var element = contextToElement({
    label: 'is/only-tabbable',
    resolveDocument: true,
    context: context,
  })

  if (!except.visible && !isVisible(element)) {
    return false
  }

  if (
    !except.onlyFocusableBrowsingContext &&
    (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)
  ) {
    var frameElement = getFrameElement(element)
    if (frameElement) {
      if (tabindexValue(frameElement) < 0) {
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        return false
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase()
  var tabindex = tabindexValue(element)

  if (nodeName === 'label' && platform.is.GECKO) {
    // Firefox cannot focus, but tab to: label[tabindex=0]
    return tabindex !== null && tabindex >= 0
  }

  // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
  // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
  if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
    if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
      // any focusable child of <svg> cannot be focused, but tabbed to
      if (platform.is.GECKO) {
        return true
      }
    }
  }

  return false
}

// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function () {
  var except =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var isOnlyTabbable = function isOnlyTabbable(context) {
    return isOnlyTabbableRules({
      context: context,
      except: except,
    })
  }

  isOnlyTabbable.rules = isOnlyTabbableRules
  return isOnlyTabbable
}

// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({})

var supports$5 = void 0

function isOnlyFocusRelevant(element) {
  var nodeName = element.nodeName.toLowerCase()
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true
  }

  var _tabindex = tabindexValue(element)
  if (element.shadowRoot && _tabindex === null) {
    // ShadowDOM host elements *may* receive focus
    // even though they are not considered focuable
    return true
  }

  if (nodeName === 'label') {
    // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
    // there's no way to make an element focusable other than by adding a tabindex,
    // and focus behavior of the label element seems hard-wired to ignore tabindex
    // in some browsers (like Gecko, Blink and WebKit)
    return !supports$5.focusLabelTabindex || _tabindex === null
  }

  if (nodeName === 'legend') {
    return _tabindex === null
  }

  if (
    supports$5.focusSvgFocusableAttribute &&
    (element.ownerSVGElement || nodeName === 'svg')
  ) {
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    var focusableAttribute = element.getAttribute('focusable')
    return focusableAttribute && focusableAttribute === 'false'
  }

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return _tabindex === null || !supports$5.focusImgUsemapTabindex
  }

  if (nodeName === 'area') {
    // all <area>s are considered relevant,
    // but only the valid <area>s are focusable
    return !isValidArea(element)
  }

  return false
}

function isFocusableRules() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    _ref$except = _ref.except,
    except =
      _ref$except === undefined
        ? {
          disabled: false,
          visible: false,
          onlyTabbable: false,
        }
        : _ref$except

  if (!supports$5) {
    supports$5 = _supports()
  }

  var _isOnlyTabbable = isOnlyTabbable.rules.except({
    onlyFocusableBrowsingContext: true,
    visible: except.visible,
  })

  var element = contextToElement({
    label: 'is/focusable',
    resolveDocument: true,
    context: context,
  })

  var focusRelevant = isFocusRelevant.rules({
    context: element,
    except: except,
  })

  if (!focusRelevant || isOnlyFocusRelevant(element)) {
    return false
  }

  if (!except.disabled && isDisabled(element)) {
    return false
  }

  if (!except.onlyTabbable && _isOnlyTabbable(element)) {
    // some elements may be keyboard focusable, but not script focusable
    return false
  }

  // elements that are not rendered, cannot be focused
  if (!except.visible) {
    var visibilityOptions = {
      context: element,
      except: {},
    }

    if (supports$5.focusInHiddenIframe) {
      // WebKit and Blink can focus content in hidden <iframe> and <object>
      visibilityOptions.except.browsingContext = true
    }

    if (supports$5.focusObjectSvgHidden) {
      // Blink allows focusing the object element, even if it has visibility: hidden;
      // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
      var _nodeName2 = element.nodeName.toLowerCase()
      if (_nodeName2 === 'object') {
        visibilityOptions.except.cssVisibility = true
      }
    }

    if (!isVisible.rules(visibilityOptions)) {
      return false
    }
  }

  var frameElement = getFrameElement(element)
  if (frameElement) {
    var _nodeName = frameElement.nodeName.toLowerCase()
    if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
      if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
        // WebKit can not focus content in <object> if it doesn't have dimensions
        return false
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase()
  if (
    nodeName === 'svg' &&
    supports$5.focusSvgInIframe &&
    !frameElement &&
    element.getAttribute('tabindex') === null
  ) {
    return false
  }

  return true
}

// bind exceptions to an iterator callback
isFocusableRules.except = function () {
  var except =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var isFocusable = function isFocusable(context) {
    return isFocusableRules({
      context: context,
      except: except,
    })
  }

  isFocusable.rules = isFocusableRules
  return isFocusable
}

// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({})

function createFilter(condition) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var filter = function filter(node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT
    }

    if (condition(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT
    }

    return NodeFilter.FILTER_SKIP
  }
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  filter.acceptNode = filter
  return filter
}

var PossiblyFocusableFilter = createFilter(isFocusRelevant)

function queryFocusableStrict() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    includeContext = _ref.includeContext,
    includeOnlyTabbable = _ref.includeOnlyTabbable,
    strategy = _ref.strategy

  if (!context) {
    context = document.documentElement
  }

  var _isFocusable = isFocusable.rules.except({
    onlyTabbable: includeOnlyTabbable,
  })

  var _document = getDocument(context)
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  var walker = _document.createTreeWalker(
    // root element to start search in
    context,
    // element type filter
    NodeFilter.SHOW_ELEMENT,
    // custom NodeFilter filter
    strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable),
    // deprecated, but IE requires it
    false
  )

  var list = []

  while (walker.nextNode()) {
    if (walker.currentNode.shadowRoot) {
      if (_isFocusable(walker.currentNode)) {
        list.push(walker.currentNode)
      }

      list = list.concat(
        queryFocusableStrict({
          context: walker.currentNode.shadowRoot,
          includeOnlyTabbable: includeOnlyTabbable,
          strategy: strategy,
        })
      )
    } else {
      list.push(walker.currentNode)
    }
  }

  // add context if requested and focusable
  if (includeContext) {
    if (strategy === 'all') {
      if (isFocusRelevant(context)) {
        list.unshift(context)
      }
    } else if (_isFocusable(context)) {
      list.unshift(context)
    }
  }

  return list
}

// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0

var selector$1 = void 0

function selector$2() {
  if (!supports$6) {
    supports$6 = _supports()
  }

  if (typeof selector$1 === 'string') {
    return selector$1
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  selector$1 =
    '' +
    // IE11 supports.can focus <table> and <td>
    (supports$6.focusTable ? 'table, td,' : '') +
    // IE11 supports.can focus <fieldset>
    (supports$6.focusFieldset ? 'fieldset,' : '') +
    // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    'svg a,' +
    // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    'a[href],' +
    // validity determined by is/valid-area.js
    'area[href],' +
    // validity determined by is/disabled.js
    'input, select, textarea, button,' +
    // browsing context containers
    'iframe, object, embed,' +
    // interactive content
    'keygen,' +
    (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') +
    (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') +
    (supports$6.focusSummary ? 'summary,' : '') +
    // validity determined by is/valid-tabindex.js
    '[tabindex],' +
    // editing hosts
    '[contenteditable]'

  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  selector$1 = selectInShadows(selector$1)

  return selector$1
}

function queryFocusableQuick() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    includeContext = _ref.includeContext,
    includeOnlyTabbable = _ref.includeOnlyTabbable

  var _selector = selector$2()
  var elements = context.querySelectorAll(_selector)
  // the selector potentially matches more than really is focusable

  var _isFocusable = isFocusable.rules.except({
    onlyTabbable: includeOnlyTabbable,
  })

  var result = [].filter.call(elements, _isFocusable)

  // add context if requested and focusable
  if (includeContext && _isFocusable(context)) {
    result.unshift(context)
  }

  return result
}

function queryFocusable() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    includeContext = _ref.includeContext,
    includeOnlyTabbable = _ref.includeOnlyTabbable,
    _ref$strategy = _ref.strategy,
    strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy

  var element = contextToElement({
    label: 'query/focusable',
    resolveDocument: true,
    defaultToDocument: true,
    context: context,
  })

  var options = {
    context: element,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy,
  }

  if (strategy === 'quick') {
    return queryFocusableQuick(options)
  } else if (strategy === 'strict' || strategy === 'all') {
    return queryFocusableStrict(options)
  }

  throw new TypeError(
    'query/focusable requires option.strategy to be one of ["quick", "strict", "all"]'
  )
}

var supports$7 = void 0

// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/

function isTabbableRules() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    _ref$except = _ref.except,
    except =
      _ref$except === undefined
        ? {
          flexbox: false,
          scrollable: false,
          shadow: false,
          visible: false,
          onlyTabbable: false,
        }
        : _ref$except

  if (!supports$7) {
    supports$7 = _supports()
  }

  var element = contextToElement({
    label: 'is/tabbable',
    resolveDocument: true,
    context: context,
  })

  if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
    // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
    // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
    // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
    return false
  }

  var frameElement = getFrameElement(element)
  if (frameElement) {
    if (platform.is.WEBKIT && platform.is.IOS) {
      // iOS only does not consider anything from another browsing context keyboard focusable
      return false
    }

    // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
    // tabbable demotion onto elements of their browsing contexts
    if (tabindexValue(frameElement) < 0) {
      return false
    }

    if (
      !except.visible &&
      (platform.is.BLINK || platform.is.WEBKIT) &&
      !isVisible(frameElement)
    ) {
      // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
      return false
    }

    // Webkit and Blink don't consider anything in <object> tabbable
    // Blink fixed that fixed in Chrome 54, Opera 41
    var frameNodeName = frameElement.nodeName.toLowerCase()
    if (frameNodeName === 'object') {
      var isFixedBlink =
        (platform.name === 'Chrome' && platform.majorVersion >= 54) ||
        (platform.name === 'Opera' && platform.majorVersion >= 41)

      if (platform.is.WEBKIT || (platform.is.BLINK && !isFixedBlink)) {
        return false
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase()
  var _tabindex = tabindexValue(element)
  var tabindex = _tabindex === null ? null : _tabindex >= 0

  if (
    platform.is.EDGE &&
    platform.majorVersion >= 14 &&
    frameElement &&
    element.ownerSVGElement &&
    _tabindex < 0
  ) {
    // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
    // if the element is in a nested browsing context
    return true
  }

  var hasTabbableTabindexOrNone = tabindex !== false
  var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0

  // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
  // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
  if (element.hasAttribute('contenteditable')) {
    // tabbing can still be disabled by explicitly providing [tabindex="-1"]
    return hasTabbableTabindexOrNone
  }

  if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
    return false
  }

  if (platform.is.WEBKIT && platform.is.IOS) {
    // iOS only considers a hand full of elements tabbable (keyboard focusable)
    // this holds true even with external keyboards
    var potentiallyTabbable =
      (nodeName === 'input' && element.type === 'text') ||
      element.type === 'password' ||
      nodeName === 'select' ||
      nodeName === 'textarea' ||
      element.hasAttribute('contenteditable')

    if (!potentiallyTabbable) {
      var style = window.getComputedStyle(element, null)
      potentiallyTabbable = isUserModifyWritable(style)
    }

    if (!potentiallyTabbable) {
      return false
    }
  }

  if (nodeName === 'use' && _tabindex !== null) {
    if (
      platform.is.BLINK ||
      (platform.is.WEBKIT && platform.majorVersion === 9)
    ) {
      // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
      return true
    }
  }

  if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
    if (hasTabbableTabindexOrNone) {
      // in Trident and Gecko SVGElement does not handle the tabIndex property properly
      return true
    }

    if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
      // Firefox 51 and 52 treat any natively tabbable SVG element with
      // tabindex="-1" as tabbable and everything else as inert
      // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
      return true
    }
  }

  if (
    nodeName === 'svg' &&
    supports$7.focusSvgInIframe &&
    hasTabbableTabindexOrNone
  ) {
    return true
  }

  if (platform.is.TRIDENT || platform.is.EDGE) {
    if (nodeName === 'svg') {
      if (supports$7.focusSvg) {
        // older Internet Explorers consider <svg> keyboard focusable
        // unless they have focsable="false", but then they wouldn't
        // be focusable and thus not even reach this filter
        return true
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable') || hasTabbableTabindex
    }

    if (element.ownerSVGElement) {
      if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
        return true
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable')
    }
  }
  if (element.tabIndex === undefined) {
    return Boolean(except.onlyTabbable)
  }

  if (nodeName === 'audio') {
    if (!element.hasAttribute('controls')) {
      // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
      return false
    } else if (platform.is.BLINK) {
      // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
      return true
    }
  }

  if (nodeName === 'video') {
    if (!element.hasAttribute('controls')) {
      if (platform.is.TRIDENT || platform.is.EDGE) {
        // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
        return false
      }
    } else if (platform.is.BLINK || platform.is.GECKO) {
      // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
      return true
    }
  }

  if (nodeName === 'object') {
    if (platform.is.BLINK || platform.is.WEBKIT) {
      // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
      return false
    }
  }

  if (nodeName === 'iframe') {
    // In Internet Explorer all iframes are only focusable
    // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
    // Since we can't reliably investigate iframe documents because of the
    // SameOriginPolicy, we're declaring everything only focusable.
    return false
  }

  if (!except.scrollable && platform.is.GECKO) {
    // Firefox considers scrollable containers keyboard focusable,
    // even though their tabIndex property is -1
    var _style = window.getComputedStyle(element, null)
    if (hasCssOverflowScroll(_style)) {
      return hasTabbableTabindexOrNone
    }
  }

  if (platform.is.TRIDENT || platform.is.EDGE) {
    // IE and Edge degrade <area> to script focusable, if the image
    // using the <map> has been given tabindex="-1"
    if (nodeName === 'area') {
      var img = getImageOfArea(element)
      if (img && tabindexValue(img) < 0) {
        return false
      }
    }

    var _style2 = window.getComputedStyle(element, null)
    if (isUserModifyWritable(_style2)) {
      // prevent being swallowed by the overzealous isScrollableContainer() below
      return element.tabIndex >= 0
    }

    if (!except.flexbox && hasCssDisplayFlex(_style2)) {
      if (_tabindex !== null) {
        return hasTabbableTabindex
      }

      return (
        isFocusRelevantWithoutFlexbox(element) &&
        isTabbableWithoutFlexbox(element)
      )
    }

    // IE considers scrollable containers script focusable only,
    // even though their tabIndex property is 0
    if (isScrollableContainer(element, nodeName)) {
      return false
    }

    var parent = element.parentElement
    if (parent) {
      var parentNodeName = parent.nodeName.toLowerCase()
      var parentStyle = window.getComputedStyle(parent, null)
      // IE considers scrollable bodies script focusable only,
      if (
        isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)
      ) {
        return false
      }

      // Children of focusable elements with display:flex are focusable in IE10-11,
      // even though their tabIndex property suggests otherwise
      if (hasCssDisplayFlex(parentStyle)) {
        // value of tabindex takes precedence
        return hasTabbableTabindex
      }
    }
  }

  // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
  return element.tabIndex >= 0
}

// bind exceptions to an iterator callback
isTabbableRules.except = function () {
  var except =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var isTabbable = function isTabbable(context) {
    return isTabbableRules({
      context: context,
      except: except,
    })
  }

  isTabbable.rules = isTabbableRules
  return isTabbable
}

var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
  flexbox: true,
})
var isTabbableWithoutFlexbox = isTabbableRules.except({ flexbox: true })

// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({})

function queryTabbable() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    includeContext = _ref.includeContext,
    includeOnlyTabbable = _ref.includeOnlyTabbable,
    strategy = _ref.strategy

  var _isTabbable = isTabbable.rules.except({
    onlyTabbable: includeOnlyTabbable,
  })

  return queryFocusable({
    context: context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy,
  }).filter(_isTabbable)
}

// sorts a list of elements according to their order in the DOM

function compareDomPosition(a, b) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1
}

function sortDomOrder(elements) {
  return elements.sort(compareDomPosition)
}

function getFirstSuccessorOffset(list, target) {
  // find the first element that comes AFTER the target element
  return findIndex(list, function (element) {
    return (
      target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING
    )
  })
}

function findInsertionOffsets(list, elements, resolveElement) {
  // instead of mutating the elements list directly, remember position and map
  // to inject later, when we can do this more efficiently
  var insertions = []
  elements.forEach(function (element) {
    var replace = true
    var offset = list.indexOf(element)

    if (offset === -1) {
      // element is not in target list
      offset = getFirstSuccessorOffset(list, element)
      replace = false
    }

    if (offset === -1) {
      // there is no successor in the tabsequence,
      // meaning the image must be the last element
      offset = list.length
    }

    // allow the consumer to replace the injected element
    var injections = nodeArray(
      resolveElement ? resolveElement(element) : element
    )
    if (!injections.length) {
      // we can't inject zero elements
      return
    }

    insertions.push({
      offset: offset,
      replace: replace,
      elements: injections,
    })
  })

  return insertions
}

function insertElementsAtOffsets(list, insertions) {
  // remember the number of elements we have already injected
  // so we account for the caused index offset
  var inserted = 0
  // make sure that we insert the elements in sequence,
  // otherwise the offset compensation won't work
  insertions.sort(function (a, b) {
    return a.offset - b.offset
  })
  insertions.forEach(function (insertion) {
    // array.splice has an annoying function signature :(
    var remove = insertion.replace ? 1 : 0
    var args = [insertion.offset + inserted, remove].concat(insertion.elements)
    list.splice.apply(list, args)
    inserted += insertion.elements.length - remove
  })
}

function mergeInDomOrder() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    list = _ref.list,
    elements = _ref.elements,
    resolveElement = _ref.resolveElement

  // operate on a copy so we don't mutate the original array
  var _list = list.slice(0)
  // make sure the elements we're injecting are provided in DOM order
  var _elements = nodeArray(elements).slice(0)
  sortDomOrder(_elements)
  // find the offsets within the target array (list) at which to inject
  // each individual element (from elements)
  var insertions = findInsertionOffsets(_list, _elements, resolveElement)
  // actually inject the elements into the target array at the identified positions
  insertElementsAtOffsets(_list, insertions)
  return _list
}

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Maps = (function () {
  function Maps(context) {
    _classCallCheck(this, Maps)

    this._document = getDocument(context)
    this.maps = {}
  }

  _createClass(Maps, [
    {
      key: 'getAreasFor',
      value: function getAreasFor(name) {
        if (!this.maps[name]) {
          // the map is not defined within the context, so we
          // have to go find it elsewhere in the document
          this.addMapByName(name)
        }

        return this.maps[name]
      },
    },
    {
      key: 'addMapByName',
      value: function addMapByName(name) {
        var map = getMapByName(name, this._document)
        if (!map) {
          // if there is no map, the img[usemap] wasn't doing anything anyway
          return
        }

        this.maps[map.name] = queryTabbable({ context: map })
      },
    },
    {
      key: 'extractAreasFromList',
      value: function extractAreasFromList(elements) {
        // remove all <area> elements from the elements list,
        // but put them the map for later retrieval
        return elements.filter(function (element) {
          var nodeName = element.nodeName.toLowerCase()
          if (nodeName !== 'area') {
            return true
          }

          var map = element.parentNode
          if (!this.maps[map.name]) {
            this.maps[map.name] = []
          }

          this.maps[map.name].push(element)
          return false
        }, this)
      },
    },
  ])

  return Maps
})()

function sortArea(elements, context) {
  // images - unless they are focusable themselves, likely not
  // part of the elements list, so we'll have to find them and
  // sort them into the elements list manually
  var usemaps = context.querySelectorAll('img[usemap]')
  var maps = new Maps(context)

  // remove all <area> elements from the elements list,
  // but put them the map for later retrieval
  var _elements = maps.extractAreasFromList(elements)

  if (!usemaps.length) {
    // the context does not contain any <area>s so no need
    // to replace anything, just remove any maps
    return _elements
  }

  return mergeInDomOrder({
    list: _elements,
    elements: usemaps,
    resolveElement: function resolveElement(image) {
      var name = image.getAttribute('usemap').slice(1)
      return maps.getAreasFor(name)
    },
  })
}

var _createClass$1 = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Shadows = (function () {
  function Shadows(context, sortElements) {
    _classCallCheck$1(this, Shadows)

    // document context we're working with
    this.context = context
    // callback that sorts an array of elements
    this.sortElements = sortElements
    // reference to create unique IDs for each ShadowHost
    this.hostCounter = 1
    // reference map for child-ShadowHosts of a ShadowHost
    this.inHost = {}
    // reference map for child-ShadowHost of the document
    this.inDocument = []
    // reference map for ShadowHosts
    this.hosts = {}
    // reference map for tabbable elements of a ShadowHost
    this.elements = {}
  }

  // remember which hosts we have to sort within later

  _createClass$1(Shadows, [
    {
      key: '_registerHost',
      value: function _registerHost(host) {
        if (host._sortingId) {
          return
        }

        // make the ShadowHost identifiable (see cleanup() for undo)
        host._sortingId = 'shadow-' + this.hostCounter++
        this.hosts[host._sortingId] = host

        // hosts may contain other hosts
        var parentHost = getShadowHost({ context: host })
        if (parentHost) {
          this._registerHost(parentHost)
          this._registerHostParent(host, parentHost)
        } else {
          this.inDocument.push(host)
        }
      },

      // remember which host is the child of which other host
    },
    {
      key: '_registerHostParent',
      value: function _registerHostParent(host, parent) {
        if (!this.inHost[parent._sortingId]) {
          this.inHost[parent._sortingId] = []
        }

        this.inHost[parent._sortingId].push(host)
      },

      // remember which elements a host contains
    },
    {
      key: '_registerElement',
      value: function _registerElement(element, host) {
        if (!this.elements[host._sortingId]) {
          this.elements[host._sortingId] = []
        }

        this.elements[host._sortingId].push(element)
      },

      // remove shadowed elements from the sequence and register
      // the ShadowHosts they belong to so we know what to sort
      // later on
    },
    {
      key: 'extractElements',
      value: function extractElements(elements) {
        return elements.filter(function (element) {
          var host = getShadowHost({ context: element })
          if (!host) {
            return true
          }

          this._registerHost(host)
          this._registerElement(element, host)
          return false
        }, this)
      },

      // inject hosts into the sequence, sort everything,
      // and recoursively replace hosts by its descendants
    },
    {
      key: 'sort',
      value: function sort(elements) {
        var _elements = this._injectHosts(elements)
        _elements = this._replaceHosts(_elements)
        this._cleanup()
        return _elements
      },

      // merge ShadowHosts into the element lists of other ShadowHosts
      // or the document, then sort the individual lists
    },
    {
      key: '_injectHosts',
      value: function _injectHosts(elements) {
        Object.keys(this.hosts).forEach(function (_sortingId) {
          var _list = this.elements[_sortingId]
          var _elements = this.inHost[_sortingId]
          var _context = this.hosts[_sortingId].shadowRoot
          this.elements[_sortingId] = this._merge(_list, _elements, _context)
        }, this)

        return this._merge(elements, this.inDocument, this.context)
      },
    },
    {
      key: '_merge',
      value: function _merge(list, elements, context) {
        var merged = mergeInDomOrder({
          list: list,
          elements: elements,
        })

        return this.sortElements(merged, context)
      },
    },
    {
      key: '_replaceHosts',
      value: function _replaceHosts(elements) {
        return mergeInDomOrder({
          list: elements,
          elements: this.inDocument,
          resolveElement: this._resolveHostElement.bind(this),
        })
      },
    },
    {
      key: '_resolveHostElement',
      value: function _resolveHostElement(host) {
        var merged = mergeInDomOrder({
          list: this.elements[host._sortingId],
          elements: this.inHost[host._sortingId],
          resolveElement: this._resolveHostElement.bind(this),
        })

        var _tabindex = tabindexValue(host)
        if (_tabindex !== null && _tabindex > -1) {
          return [host].concat(merged)
        }

        return merged
      },
    },
    {
      key: '_cleanup',
      value: function _cleanup() {
        // remove those identifers we put on the ShadowHost to avoid using Map()
        Object.keys(this.hosts).forEach(function (key) {
          delete this.hosts[key]._sortingId
        }, this)
      },
    },
  ])

  return Shadows
})()

function sortShadowed(elements, context, sortElements) {
  var shadows = new Shadows(context, sortElements)
  var _elements = shadows.extractElements(elements)

  if (_elements.length === elements.length) {
    // no shadowed content found, no need to continue
    return sortElements(elements)
  }

  return shadows.sort(_elements)
}

function sortTabindex(elements) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.tabIndex
  // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
  // elements with a positive tabIndex:
  //   Elements that have identical tabIndexes should be navigated in the order they appear.
  //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.

  // NOTE: sort implementation may be unstable and thus mess up DOM order,
  // that's why we build a map that's being sorted instead. If we were able to rely
  // on a stable sorting algorithm, sortTabindex() could be as simple as
  // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
  // at this time Chrome does not use a stable sorting algorithm
  // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability

  // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
  // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

  var map = {}
  var indexes = []
  var normal = elements.filter(function (element) {
    // in Trident and Gecko SVGElement does not know about the tabIndex property
    var tabIndex = element.tabIndex
    if (tabIndex === undefined) {
      tabIndex = tabindexValue(element)
    }

    // extract elements that don't need sorting
    if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
      return true
    }

    if (!map[tabIndex]) {
      // create sortable bucket for dom-order-preservation of elements with the same tabIndex
      map[tabIndex] = []
      // maintain a list of unique tabIndexes
      indexes.push(tabIndex)
    }

    // sort element into the proper bucket
    map[tabIndex].push(element)
    // element moved to sorting map, so not "normal" anymore
    return false
  })

  // sort the tabindex ascending,
  // then resolve them to their appropriate buckets,
  // then flatten the array of arrays to an array
  var _elements = indexes
    .sort()
    .map(function (tabIndex) {
      return map[tabIndex]
    })
    .reduceRight(function (previous, current) {
      return current.concat(previous)
    }, normal)

  return _elements
}

var supports$8 = void 0

function moveContextToBeginning(elements, context) {
  var pos = elements.indexOf(context)
  if (pos > 0) {
    var tmp = elements.splice(pos, 1)
    return tmp.concat(elements)
  }

  return elements
}

function sortElements(elements, _context) {
  if (supports$8.tabsequenceAreaAtImgPosition) {
    // Some browsers sort <area> in DOM order, some place the <area>s
    // where the <img> referecing them would've been in DOM order.
    // https://github.com/medialize/ally.js/issues/5
    elements = sortArea(elements, _context)
  }

  elements = sortTabindex(elements)
  return elements
}

function queryTabsequence() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    context = _ref.context,
    includeContext = _ref.includeContext,
    includeOnlyTabbable = _ref.includeOnlyTabbable,
    strategy = _ref.strategy

  if (!supports$8) {
    supports$8 = _supports()
  }

  var _context = nodeArray(context)[0] || document.documentElement
  var elements = queryTabbable({
    context: _context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy,
  })

  if (document.body.createShadowRoot && platform.is.BLINK) {
    // sort tabindex localized to shadow dom
    // see https://github.com/medialize/ally.js/issues/6
    elements = sortShadowed(elements, _context, sortElements)
  } else {
    elements = sortElements(elements, _context)
  }

  if (includeContext) {
    // if we include the context itself, it has to be the first
    // element of the sequence
    elements = moveContextToBeginning(elements, _context)
  }

  return elements
}

// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)

var keycode = {
  // Element Focus
  tab: 9,

  // Navigation
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  pageUp: 33,
  'page-up': 33,
  pageDown: 34,
  'page-down': 34,
  end: 35,
  home: 36,

  // Action
  enter: 13,
  escape: 27,
  space: 32,

  // Modifier
  shift: 16,
  capsLock: 20,
  'caps-lock': 20,
  ctrl: 17,
  alt: 18,
  meta: 91,
  // in firefox: 224
  // on mac (chrome): meta-left=91, meta-right=93
  // on win (IE11): meta-left=91, meta-right=92
  pause: 19,

  // Content Manipulation
  insert: 45,
  delete: 46,
  backspace: 8,

  // the same logical key may be identified through different keyCodes
  _alias: {
    91: [92, 93, 224],
  },
}

// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for (var n = 1; n < 26; n++) {
  keycode['f' + n] = n + 111
}

// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for (var _n = 0; _n < 10; _n++) {
  var code = _n + 48
  var numCode = _n + 96
  keycode[_n] = code
  keycode['num-' + _n] = numCode
  keycode._alias[code] = [numCode]
}

// Latin characters (65 - 90)
for (var _n2 = 0; _n2 < 26; _n2++) {
  var _code = _n2 + 65
  var name$1 = String.fromCharCode(_code).toLowerCase()
  keycode[name$1] = _code
}

var modifier = {
  alt: 'altKey',
  ctrl: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey',
}

var modifierSequence = Object.keys(modifier).map(function (name) {
  return modifier[name]
})

function createExpectedModifiers(ignoreModifiers) {
  var value = ignoreModifiers ? null : false
  return {
    altKey: value,
    ctrlKey: value,
    metaKey: value,
    shiftKey: value,
  }
}

function resolveModifiers(modifiers) {
  var ignoreModifiers = modifiers.indexOf('*') !== -1
  var expected = createExpectedModifiers(ignoreModifiers)

  modifiers.forEach(function (token) {
    if (token === '*') {
      // we've already covered the all-in operator
      return
    }

    // we want the modifier pressed
    var value = true
    var operator = token.slice(0, 1)
    if (operator === '?') {
      // we don't care if the modifier is pressed
      value = null
    } else if (operator === '!') {
      // we do not want the modifier pressed
      value = false
    }

    if (value !== true) {
      // compensate for the modifier's operator
      token = token.slice(1)
    }

    var propertyName = modifier[token]
    if (!propertyName) {
      throw new TypeError('Unknown modifier "' + token + '"')
    }

    expected[propertyName] = value
  })

  return expected
}

function resolveKey(key) {
  var code = keycode[key] || parseInt(key, 10)
  if (!code || typeof code !== 'number' || isNaN(code)) {
    throw new TypeError('Unknown key "' + key + '"')
  }

  return [code].concat(keycode._alias[code] || [])
}

function matchModifiers(expected, event) {
  // returns true on match
  return !modifierSequence.some(function (prop) {
    // returns true on mismatch
    return (
      typeof expected[prop] === 'boolean' &&
      Boolean(event[prop]) !== expected[prop]
    )
  })
}

function keyBinding(text) {
  return text.split(/\s+/).map(function (_text) {
    var tokens = _text.split('+')
    var _modifiers = resolveModifiers(tokens.slice(0, -1))
    var _keyCodes = resolveKey(tokens.slice(-1))
    return {
      keyCodes: _keyCodes,
      modifiers: _modifiers,
      matchModifiers: matchModifiers.bind(null, _modifiers),
    }
  })
}

// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/

function getParentComparator() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    parent = _ref.parent,
    element = _ref.element,
    includeSelf = _ref.includeSelf

  if (parent) {
    return function isChildOf(node) {
      return Boolean(
        (includeSelf && node === parent) ||
        parent.compareDocumentPosition(node) &
        Node.DOCUMENT_POSITION_CONTAINED_BY
      )
    }
  } else if (element) {
    return function isParentOf(node) {
      return Boolean(
        (includeSelf && element === node) ||
        node.compareDocumentPosition(element) &
        Node.DOCUMENT_POSITION_CONTAINED_BY
      )
    }
  }

  throw new TypeError(
    'util/compare-position#getParentComparator required either options.parent or options.element'
  )
}

// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933

function whenKey() {
  var map =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var bindings = {}

  var context = nodeArray(map.context)[0] || document.documentElement
  delete map.context
  var filter = nodeArray(map.filter)
  delete map.filter

  var mapKeys = Object.keys(map)
  if (!mapKeys.length) {
    throw new TypeError('when/key requires at least one option key')
  }

  var registerBinding = function registerBinding(event) {
    event.keyCodes.forEach(function (code) {
      if (!bindings[code]) {
        bindings[code] = []
      }

      bindings[code].push(event)
    })
  }

  mapKeys.forEach(function (text) {
    if (typeof map[text] !== 'function') {
      throw new TypeError(
        'when/key requires option["' + text + '"] to be a function'
      )
    }

    var addCallback = function addCallback(event) {
      event.callback = map[text]
      return event
    }

    keyBinding(text).map(addCallback).forEach(registerBinding)
  })

  var handleKeyDown = function handleKeyDown(event) {
    if (event.defaultPrevented) {
      return
    }

    if (filter.length) {
      // ignore elements within the exempted sub-trees
      var isParentOfElement = getParentComparator({
        element: event.target,
        includeSelf: true,
      })
      if (filter.some(isParentOfElement)) {
        return
      }
    }

    var key = event.keyCode || event.which
    if (!bindings[key]) {
      return
    }

    bindings[key].forEach(function (_event) {
      if (!_event.matchModifiers(event)) {
        return
      }

      _event.callback.call(context, event, disengage)
    })
  }

  context.addEventListener('keydown', handleKeyDown, false)

  var disengage = function disengage() {
    context.removeEventListener('keydown', handleKeyDown, false)
  }

  return { disengage: disengage }
}

export default function ({ context } = {}) {
  if (!context) {
    context = document.documentElement
  }

  // Make sure the supports tests are run before intercepting the Tab key,
  // or IE10 and IE11 will fail to process the first Tab key event. Not
  // limiting this warm-up to IE because it may be a problem elsewhere, too.
  queryTabsequence()

  return whenKey({
    // Safari on OSX may require ALT+TAB to reach links,
    // see https://github.com/medialize/ally.js/issues/146
    '?alt+?shift+tab': function altShiftTab(event) {
      // we're completely taking over the Tab key handling
      event.preventDefault()

      var sequence = queryTabsequence({
        context: context,
      })

      var backward = event.shiftKey
      var first = sequence[0]
      var last = sequence[sequence.length - 1]

      // wrap around first to last, last to first
      var source = backward ? first : last
      var target = backward ? last : first
      if (isActiveElement(source)) {
        target.focus()
        return
      }

      // find current position in tabsequence
      var currentIndex = void 0
      var found = sequence.some(function (element, index) {
        if (!isActiveElement(element)) {
          return false
        }

        currentIndex = index
        return true
      })

      if (!found) {
        // redirect to first as we're not in our tabsequence
        first.focus()
        return
      }

      // shift focus to previous/next element in the sequence
      var offset = backward ? -1 : 1
      sequence[currentIndex + offset].focus()
    },
  })
}
