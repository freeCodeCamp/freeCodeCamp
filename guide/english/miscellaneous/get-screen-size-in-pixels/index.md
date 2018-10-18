---
title: Get Screen Size in Pixels
---
There may be times where your JS application needs to know what the size of the screen is to be able to do certain actions.

Luckily for us, there are built in JavaScript functions that can easily grab different dimensions of the screen on the user's device in pixels. What to use is dependent on what you'd like to do.

## Get User's Resolution

You might wish to do something involving the user's device resolution. In this case, you should use the built-in `screen.width` and `screen.height` properties. These give you the size of the screen you're dealing with. **This is not the area you have to work with on the page; these values represent the entirety of the screen i.e. the user's display resolution.**

## Get Browser Size

There might be an interesting application for dealing with the browser's current size. If you need to access these dimensions, use the `screen.availWidth` and `screen.availHeight` properties to do so. Remember, these are the dimensions of the entire browser window, from the top of the browser window down to where the browser meets a taskbar or the edge of your desktop, depending on your setup.

**An interesting note**: `screen.availHeight` can also be used to figure out how tall a taskbar is on a computer. If your browser resolution is say `1366 x 768`, and `screen.availHeight` reports 728 pixels, then your taskbar is 40 pixels high. You can also calculate taskbar height by subtracting `screen.height` and `screen.availHeight`:

    var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels";
    /*
    For a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features.
    */

## Get Viewing Window Size

These properties are interesting and could be used to create some nifty effects. You can use `window.innerHeight` and `window.innerWidth` to get the size of the window for the web page as the user sees it. These values are not static and will change depending upon what is happening with the browser itself. In other words, if the browser itself is small, these values will be smaller, and if the browser is maximized, they'll be larger.

If, for example, you are working in Google Chrome and you open the console (must be docked to a side of the window), `window.innerHeight` will change to reflect the height of the console because part of the window will be blocked. You can test this out by calling `window.innerHeight`, take note of the value, then increase the size of the console, and call `window.innerHeight` again.

These properties will also change if your browser is maximized or resized in any way. At a browser's maximum size, the property `window.innerWidth` is the same as both `screen.width` and `screen.availWidth` (unless there is a taskbar on the side, in which case `screen.availWidth` will not be equal). `window.innerHeight` is equal to the amount of area in the window of the page itself (the area of the web page).

## Get Height and Width of Web Page

If you need to see how tall or wide your web page actually is, there are properties to grab these dimensions: `document.body.offsetWidth` and `document.body.offsetHeight`. These properties represent the size of the content in the body of the page itself. A page with no content has a `document.body.offsetHeight` of close to the same value as `window.innerHeight` depending on what margins/padding are set on the body of the document. If margins and padding are set to `0` on the html root element and the body of the document, then `document.body.offsetHeight` and `window.innerHeight` will be equal with no content.

These properties could be used to interact with your page/application depending on what you want to do.

## Conclusion

Which property to use is based solely upon what you wish to do. Read what each of them do, and decide for yourself which properties you need to use for your project.