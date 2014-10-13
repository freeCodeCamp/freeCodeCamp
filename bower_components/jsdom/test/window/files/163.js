// ensure that standard js Objects are available on the window and globally
var tests = [
  'Function',
  'Object',
  'Date',
  'Math',
  'Array',
  'Boolean',
  'Number',
  'String',
  'RegExp',
  'setTimeout',
  'setInterval',
  'clearTimeout',
  'clearInterval'
];

window.hasNativeObjects = true;
tests.forEach(function(key) {
  window.hasNativeObjects = (window.hasNativeObjects && !!window[key]);
});
