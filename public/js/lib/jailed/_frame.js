
/**
 * Contains the code executed in the sandboxed frame under web-browser
 * 
 * Creates a Web-Worker inside the frame, sets up the communication
 * between the worker and the parent window
 */


var scripts = document.getElementsByTagName('script');
var __jailed__path__ = scripts[scripts.length-1].src
    .split('?')[0]
    .split('/')
    .slice(0, -1)
    .join('/')+'/';

// creating worker as a blob enables import of local files
var blobCode = [
  ' self.addEventListener("message", function(m){          ',
  '     if (m.data.type == "initImport") {                 ',
  '         importScripts(m.data.url);                     ',
  '         self.postMessage({type: "initialized"});       ',
  '     }                                                  ',
  ' });                                                    '
].join('\n');

var blobUrl = window.URL.createObjectURL(
    new Blob([blobCode])
);


var worker = new Worker(blobUrl);

// telling worker to load _pluginWeb.js (see blob code above)
worker.postMessage({
    type: 'initImport',
    url: __jailed__path__ + '_pluginWeb.js'
});


// forwarding messages between the worker and parent window
worker.addEventListener('message', function(m) {
    parent.postMessage(m.data, '*');
});

window.addEventListener('message', function(m) {
    worker.postMessage(m.data);
});

