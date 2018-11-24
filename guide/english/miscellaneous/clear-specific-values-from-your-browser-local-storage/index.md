---
title: Clear Specific Values from Your Browser Local Storage
---
Removing specific values from your browser's local storage will solve many problems related to the browser crashing or freezing on FreeCodeCamp.

This solves, as example, a common problem with browser hanging out in a challenge's page after saving a response with an infinite loop.

When this happens, you must delete the value in `localStorage` storing that response.

## In Chrome:

*   On **freecodecamp.com**, open your developer tools.
    *   More tools > Developer tools (or `Ctrl` + `Shift` + `I` (Windows), `Cmd` + `Opt` + `I` (Mac))

*   Navigate to the `Resources` tab

*   Expand the `Local Storage` item in the left pane
*   Select `http://www.freecodecamp.com`
*   Find the challenge you wish to delete data in the right pane ![Finding a key in localStorage Chrome Developer Tools](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8300d3dfcf8a07bc3c1f69e7dd730d99e353972d.png)
*   Right click the desired challenge and select `Delete`

## In Firefox:

*   On **freecodecamp.com**, open your web console with
    *   `Ctrl` + `Shift` + `K`

*   From there, using directly the console:

    *   Type `console.log(localStorage);` and hit `Enter`.

    *   Click in `Storage` link. ![Print the localStorage Object from web console and show the Storage](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e3778d1c24e9da6fe506564405b5b1ebc11facc1.png)
    *   The **Storage** panel will appear at right.
    *   Filter the results to find the Algorithm, Front End Project or Challenge causing the problem.
    *   When located, mouse over it and click the `x` at right. ![Click the x for deleting the value entry.](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a309e8ec8d92301f3507001ca3a796009d0a00d8.png)
    *   Once removed, check if the problem was solved. Refresh or close and open the browser if necessary.

**Note:** This can also be done with the <a href='https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector' target='_blank' rel='nofollow'>Storage Inspector</a>, but seems like Firefox hangs out when there are so many values.