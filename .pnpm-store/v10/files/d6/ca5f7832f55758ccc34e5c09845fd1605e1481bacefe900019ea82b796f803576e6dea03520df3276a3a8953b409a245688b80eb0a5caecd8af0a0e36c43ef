EventSource polyfill - https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events
========================================================

Пожалуйста не используйте эту обосранную библиотеку!

Installing:
-----------

You can get the code from npm or bower:

```
npm install event-source-polyfill
```

```
bower install event-source-polyfill
```

Just include `src/eventsource.js` or `src/eventsource.min.js` in your page to use the polyfill.


Ionic2/Angular2 Installation:
-----------------------------

Unless a typescript definition file is created for this polyfill, this is how you would use it in an Ionic2 project.  It should (in theory) be very similar in an Angular2 project.

```
npm install event-source-polyfill
```

Add to (or create) src/app/polyfills.ts (path is relative to where polyfills.ts is) :
```
import 'path/to/event-source-polyfill/src/eventsource.min.js'
```

Add anywhere you need access to EventSourcePolyfill class : 

```
declare var EventSourcePolyfill: any;
```

Usage with webpack/browserify:
------------------------------

```javascript
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;
// OR: may also need to set as global property
global.EventSource =  NativeEventSource || EventSourcePolyfill;
```

Browser support:
----------------

* IE 10+, Firefox 3.5+, Chrome 3+, Safari 4+, Opera 12+
* IE 8 - IE 9: XDomainRequest is used internally, which has some limitations (2KB padding in the beginning is required, no way to send cookies, no way to use client certificates)
* It works on Mobile Safari, Opera Mobile, Chrome for Android, Firefox for Android
* It does not work on: Android Browser(requires 4 KB padding after every chunk), Opera Mini

Advantages:
-----------

* Simple server-side code
* Cross-domain requests support

Server-side requirements:
-------------------------

* "Last-Event-ID" is sent in a query string (CORS + "Last-Event-ID" header is not supported by all browsers)
* It is required to send 2 KB padding for IE < 10 and Chrome < 13 at the top of the response stream (the polyfill sends `padding=true` query argument)
* You need to send "comment" messages each 15-30 seconds, these messages will be used as heartbeat to detect disconnects - see https://bugzilla.mozilla.org/show_bug.cgi?id=444328

Specification:
--------------

* http://www.w3.org/TR/eventsource/

Build:
------

* To build EventSource, just install npm modules (`npm install`) and then run the build (`npm run build`). It should generate a new version of `src/eventsource.min.js`.

Notes:
-----
 * If you are using HTTP Basic Authentication, you can embed credentials into the URL - `http://username:password@github.com`.

Custom Headers:
---------------
```
var es = new EventSourcePolyfill('/events', {
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

Custom query parameter name for the last event id:
---------------
 * Some server require a special query parameter name for last-event-id, you can change that via option
 * The default is `lastEventId`
 * Example for mercure-hub (https://mercure.rocks/)
  
```
var es = new EventSourcePolyfill(hubUrl, {
  lastEventIdQueryParameterName: 'Last-Event-Id'
});
```

Other EventSource polyfills:
----------------------------

* https://github.com/remy/polyfills/blob/master/EventSource.js by Remy Sharp
* https://github.com/rwldrn/jquery.eventsource by Rick Waldron
* https://github.com/amvtek/EventSource by AmvTek

EXAMPLE
-------



server-side (node.js)
---------------------

```javascript
var PORT = 8081;

var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (request, response) {
  var parsedURL = url.parse(request.url, true);
  var pathname = parsedURL.pathname;
  if (pathname === "/events.php") {

    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    });

    var padding = new Array(2049);
    response.write(":" + padding.join(" ") + "\n"); // 2kB padding for IE
    response.write("retry: 2000\n");

    var lastEventId = Number(request.headers["last-event-id"]) || Number(parsedURL.query.lastEventId) || 0;

    var timeoutId = 0;
    var i = lastEventId;
    var c = i + 100;
    var f = function () {
      if (++i < c) {
        response.write("id: " + i + "\n");
        response.write("data: " + i + "\n\n");
        timeoutId = setTimeout(f, 1000);
      } else {
        response.end();
      }
    };

    f();

    response.on("close", function () {
      clearTimeout(timeoutId);
    });

  } else {
    if (pathname === "/") {
      pathname = "/index.html";
    }
    if (pathname === "/index.html" || pathname === "../src/eventsource.js") {
      response.writeHead(200, {
        "Content-Type": pathname === "/index.html" ? "text/html" : "text/javascript"
      });
      response.write(fs.readFileSync(__dirname + pathname));
    }
    response.end();
  }
}).listen(PORT);
```

or use PHP (see php/events.php)
-------------------------------
```php
<?php

  header("Content-Type: text/event-stream");
  header("Cache-Control: no-store");
  header("Access-Control-Allow-Origin: *");

  $lastEventId = floatval(isset($_SERVER["HTTP_LAST_EVENT_ID"]) ? $_SERVER["HTTP_LAST_EVENT_ID"] : 0);
  if ($lastEventId == 0) {
    $lastEventId = floatval(isset($_GET["lastEventId"]) ? $_GET["lastEventId"] : 0);
  }

  echo ":" . str_repeat(" ", 2048) . "\n"; // 2 kB padding for IE
  echo "retry: 2000\n";

  // event-stream
  $i = $lastEventId;
  $c = $i + 100;
  while (++$i < $c) {
    echo "id: " . $i . "\n";
    echo "data: " . $i . ";\n\n";
    ob_flush();
    flush();
    sleep(1);
  }

?>
```

index.html (php/index.html):
----------------------------
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>EventSource example</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="../src/eventsource.js"></script>
    <script>
      var es = new EventSource("events.php");
      var listener = function (event) {
        var div = document.createElement("div");
        var type = event.type;
        div.appendChild(document.createTextNode(type + ": " + (type === "message" ? event.data : es.url)));
        document.body.appendChild(div);
      };
      es.addEventListener("open", listener);
      es.addEventListener("message", listener);
      es.addEventListener("error", listener);
    </script>
</head>
<body>
</body>
</html>
```

Usage in node.js:
=================
With some dynamic imports it may work in node.js:

Install the library and the dependency:
`npm install @titelmedia/node-fetch`
`npm install event-source-polyfill`

x.js:
```javascript
// The @titelmedia/node-fetch is used instead of node-fetch as it supports ReadableStream Web API
import('@titelmedia/node-fetch').then(function (fetch) {
  globalThis.fetch = fetch.default;
  globalThis.Response = fetch.default.Response;
  import('event-source-polyfill').then(function (x) {
    var es = new x.default.EventSourcePolyfill('http://localhost:8004/events');
    es.onerror = es.onopen = es.onmessage = function (event) {
      console.log(event.type + ': ' + event.data);
    };
  });
});
```

`node --experimental-modules ./x.js`

License
-------
The MIT License (MIT)

Copyright (c) 2012 vic99999@yandex.ru

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
