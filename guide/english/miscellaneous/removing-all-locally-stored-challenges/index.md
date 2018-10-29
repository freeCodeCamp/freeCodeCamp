---
title: Removing All Locally Stored Challenges
---
Removing all your locally stored challenges will solve many problems related to the browser crashing on FreeCodeCamp

In Chrome:

*   On <a href='https://freecodecamp.com' target='_blank' rel='nofollow'>freecodecamp</a> open your console
    *   Windows: `Ctrl` + `Shift` + `J`
    *   Mac OS: `Cmd` + `Opt` + `J`
*   Go to resources tab(chrome).
    *   There click on the "Local Storage" link in the nav bar on the right.
*   Delete all the entries on the right side, or run this command in your browser's console to clear all entries from your localStorage: `localStorage.clear();`
*   See if this solves your issue

![](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9ea6a9cf48282cbf2aa766a6aa5ce59218c80528.png)

Alternatively, if you are having issues with a specific challenge freezing your browser, <a href='http://forum.freecodecamp.com/t/clear-specific-values-from-your-browser-local-storage/19128' target='_blank' rel='nofollow'>find the name of that challenge in local storage and delete just that one</a>.