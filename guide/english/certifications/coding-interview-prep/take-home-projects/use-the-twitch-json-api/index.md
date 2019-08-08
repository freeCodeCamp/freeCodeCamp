---
title: Use the Twitch JSON API
---

# Use the Twitch JSON API

---
## Problem Explanation
Update December 28, 2018: Twitch has updated their API a few times since we wrote this. [The latest version of their API is here](https://dev.twitch.tv/docs/api/reference/#get-streams).

Due to a change in conditions on API usage, Twitch.tv requires an API key, but we've built a workaround. Use <a href='https://wind-bow.glitch.me' target='_blank'>https://wind-bow.glitch.me/helix</a> instead of twitch's API base URL (i.e. https://api.twitch.tv/helix ) and you'll still be able to get account information, without needing to sign up for an API key.

* * *

If you're trying to tackle this challenge with jQuery's `$.getJSON()` method, chances are you'll get an error message concerning Cross-Origin Resource Sharing (CORS).

The easiest way to resolve this is to use jQuery's JSONP capabilities. From the Twitch API's <a href='https://github.com/justintv/Twitch-API#json-p' target='_blank' rel='nofollow'>readme page</a>:

> All API methods support JSON-P by providing a callback parameter with the request.

Also the <a href='http://api.jquery.com/jQuery.getJSON/' target='_blank' rel='nofollow'>jQuery documentation</a> states:

> If the URL includes the string "callback=?" (or similar, as defined by the server-side API), the request is treated as JSONP instead.

Here's an example call to fetch Free Code Camp's Twitch channel data:

    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      console.log(data);
    });

JSONP is considered insecure <a href='https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP' target='_blank' rel='nofollow'>according to Wikipedia</a>, but should be sufficient for our purposes. For a detailed discussion on Twitch's CORS restriction, please read <a href='https://github.com/justintv/Twitch-API/issues/133' target='_blank' rel='nofollow'>issue <span class="hashtag">#133</span></a> on the Twitch-API repository.