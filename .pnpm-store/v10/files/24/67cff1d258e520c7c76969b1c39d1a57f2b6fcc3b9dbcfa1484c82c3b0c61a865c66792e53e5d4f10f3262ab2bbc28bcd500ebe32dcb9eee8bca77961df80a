[![Build Status](https://travis-ci.org/samccone/chrome-trace-event.svg?branch=master)](https://travis-ci.org/samccone/chrome-trace-event)

chrome-trace-event: A node library for creating trace event logs of program
execution according to [Google's Trace Event
format](https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU).
These logs can then be visualized with
[trace-viewer](https://github.com/google/trace-viewer) or chrome devtools to grok one's programs.

# Install

    npm install chrome-trace-event

# Usage

```javascript
const Trace = require("chrome-trace-event").Tracer;
const trace = new Trace({
    noStream: true
});
trace.pipe(fs.createWriteStream(outPath));
trace.flush();
```

# Links

* https://github.com/google/trace-viewer/wiki
* https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU

# License

MIT. See LICENSE.txt.
