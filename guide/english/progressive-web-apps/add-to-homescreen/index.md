---
title: Add To Homescreen
---

## Add To Homescreen

 * Another important file in addition to service worker in PWA is manifest.json, Which helps your webapp to get installed on the user's homescreen like a native mobile app. This file contains the informations of your web app to work standalone similar to native mobile apps. The manifest is explained in detail below.

### Browser Support for Add To Homescreen

Add to Homescreen functionality is currently supported by:
* Chrome
* iOS Safari

You can see the latest status of browser support of this feature [here](https://caniuse.com/#feat=web-app-manifest).

### On Android

On Android, the "add to homescreen" banner comes up automatically if you meet the requirements given below. 

This is what it should look like on Android:

| Add to homescreen prompt | When app launched |
| :----------------------: | :---------------: |
|     ![prompt][add1]      |  ![launch][add2]  |

[add1]: https://user-images.githubusercontent.com/15358452/31663686-860779f0-b375-11e7-85c9-1387d9b3bfcf.png "Add to homescreen prompt on android"
[add2]: https://user-images.githubusercontent.com/15358452/31663690-89b0d998-b375-11e7-8a84-f3e33be9a2c2.png "Launch from Homescreen"

#### Requirements

* A `manifest.json` file should contain the following properties:
  * `short name`
  * `name`
  * `192x192` size of `png` icon
  * `start_url`
* include a service worker that is both registered and activated
* the website served over HTTPS (you can still try this with localhost without HTTPS)
* the website meets engagement heuristics defined by Chrome

#### manifest.json

```json
{
  "name": "FreeCodeCamp",
  "short_name": "FCC",
  "theme_color": "#00FF00",
  "background_color": "#00FF00",
  "display": "standalone",
  "Scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "assets/images/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/images/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "splash_pages": null
}
```

* `name` is the name of the web app. (It will be shown in the launch screen)
* `short name` is the short name of the web app. (It will be shown below the icon of your application)
* `theme_color` is the color of the top of the browser.
* `background_color` is the background color of the launch screen.
* `display` is the way the web app should display once launched on the phone. Right now there are 4 different options available. They are:
    * `fullscreen` - Takes the whole space of your mobile screen.
    * `standalone` - This option will make your app work like a native mobile application. This makes the application to open on a new window, and place your application icon launcher on the mobile.
    * `minimal-ui` - This option is similar to standalone but with less UI Options
    * `browser` - This is the default one. This will open the link in your browser as a new window
* `start_url` define the starting url of the website.
* `icons` is an array that stores all image locations, sizes and types.

### On other devices

Although this method does not work on iOS and Windows, there is a fallback method. 

**iOS**

On iOS, the "add to homescreen" button must be added manually. Add the following meta tags to the head section of your HTML to support iOS web app icon.

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="green">
<meta name="apple-mobile-web-app-title" content="FreeCodeCamp">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-72x72.png" sizes="72x72">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-96x96.png" sizes="96x96">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-128x128.png" sizes="128x128">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-144x144.png" sizes="144x144">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-152x152.png" sizes="152x152">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-384x384.png" sizes="384x384">
<link rel="apple-touch-icon" href="/assets/images/icons/icon-512x512.png" sizes="512x512">
```

**Windows**

On Windows phone, add the following meta tags to the head section of your HTML:

```html
<meta name="msapplication-TileImage" content="/assets/images/icons/icon-144x144.png">
<meta name="msapplication-TileColor" content="green">
```

### References

1. [superoo7, "A High Level View of Progressive Web App" Posted: December 18, 2017.](https://steemit.com/web/@superoo7/a-high-level-view-of-progressive-web-app)
2. [Matt Gaunt & Paul Kinlan, "Web App Install Banners" Posted: November 14, 2017.](https://developers.google.com/web/fundamentals/app-install-banners/)
