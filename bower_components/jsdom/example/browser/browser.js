var dom = require('../../lib/jsdom/level2/html').dom.level2.html;
var browser = require('../../lib/jsdom/browser/index').windowAugmentation(dom);

var document = browser.document;
var window = browser.window;
var self = browser.self;
var navigator = browser.navigator;
var location = browser.location;

document.title = 'Test Title';

//GLOBAL
var el = document.createElement('div');
el.id = 'foo';
el.innerHTML = '<em>This is a test</em> This <strong class="odd">is another</strong> test ';
document.body.appendChild(el);

//SCOPED
var el2 = browser.document.createElement('div');
el2.id = 'foo2bar';
el2.innerHTML = '<em class="odd">This is a test</em> This <strong>is another</strong> test ';
browser.document.body.appendChild(el2);

console.log('getElementByid(foo2bar): ' + browser.document.getElementById('foo2bar'));
console.log('getElementByid(foo): ' + browser.document.getElementById('foo'));
console.log('getElementByTagName(em): ' + browser.document.getElementsByTagName('em'));
console.log('getElementByClassName(odd): ' + browser.document.getElementsByClassName('odd'));

console.log('');
console.log('document.body.outerHTML: ');
console.log(document.body.outerHTML);

console.log('document.outerHTML: ');
console.log(document.outerHTML);
