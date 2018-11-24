---
title: Get Timestamp
---
You can use `Date.now()` to get the current timestamp in milliseconds.

You can easily convert the timestamp to seconds like this: `Math.floor(Date.now() / 1000)`

If your browser does not support `Date.now()`, you can use `new Date().getTime()` to get the timestamp in milliseconds.

Unix Timestamp is number of seconds elapsed since 01/01/1970, 00:00:00 UTC. The Unix timestamp will break on 01/19/2038.
