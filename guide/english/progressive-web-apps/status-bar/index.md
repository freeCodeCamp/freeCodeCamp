---
title: Configure Status Bar
---

## Configure Status Bar

In order to change the status bar at the top of the screen (which usually displays the time and battery status) of your progressive web app, you must use the configure few properties for your app to provide complete native look and feel.


### Android

Chrome, Firefox and Opera allow you to define color of the status bar using the meta tags.

```html
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#014473">
```

Example:

<img src="https://i.imgur.com/NsUIohY.png" width="165" height="275" />

### iOS

Unfortunately, the number of ways to customize the status bar for iOS devices are fairly limited, but Apple offers the `apple-mobile-web-app-status-bar-style` meta tag to customize status bar. There are three distinct settings available: `default`, `black`, and `black-translucent`. The default value is `default`.

This meta tag has no effect unless you add `apple-apple-mobile-web-app-capable` meta tag.

```html
<meta name="apple-mobile-web-app-capable" content="yes">
```

#### Default
The default setting has a white background with black text and symbols.

```html
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```
Example:


<img src="https://i.imgur.com/BS17zf4.jpg" width="400"/>

#### Black
The black setting has a black background and black text and symbols, making it appear completely black. 


```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

Example:

<img src="https://i.imgur.com/kPf8MUi.jpg" width="400"/>

#### Black-translucent

The black-translucent setting has white text and symbols. It will take the same background color as the body of your web app. 

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

```css
body {
	background-color: #014473;
}
```

Example:

<img src="https://i.imgur.com/XIrafYW.jpg" width="400" />


### References:
[Android Support](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)

[Safari HTML Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW4)

[Safari Web Content Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW1)

### Live Demo

[Headlines App](https://headlines-pwa.firebaseapp.com)