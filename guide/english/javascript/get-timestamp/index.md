---
title: Get Timestamp
---
You can use `Date.now()` to get the current timestamp in milliseconds.

You can easily convert the timestamp to seconds like this: `Math.floor(Date.now() / 1000)`

If your browser does not support `Date.now()`, you can use `new Date().getTime()` to get the timestamp in milliseconds.

__Polyfill__ could be used for legacy browsers,

```if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}```
