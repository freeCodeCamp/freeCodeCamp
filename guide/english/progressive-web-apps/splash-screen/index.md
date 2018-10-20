---
title: Configure Splash Screen
---

## Configure Splash Screen

Splash screen is shown when you tap on the app icon till your app loads. If your app is heavy, it might take upto 1 to 1.5 seconds to load the app depending on the device configurations. By default, both Android and iOS show a plain white screen as the splash screen. It is always better to customize the splash screen to provide a complete app experience.

In order to change the splash of your progressive web app, you must use the configure few properties for your app to provide complete native look and feel.

### Android

Chrome for Android automatically shows your custom splash screen as long as you meet the following requirements in your web app manifest:

- The `name` property is set to the name of your PWA.
- The `background_color` property is set to a valid CSS color value.
- The `icons` array specifies an icon that has 512px by 512px size icon.
- The icon exists and is a PNG.

It will also show the app name below the icon. The text color cannot be customized. It is contrast based.[Refer this](https://github.com/w3c/manifest/issues/642#issuecomment-360777137)

### iOS

iOS does not support a similar method of automatically showing a splash screen. Instead you need to provide splash screens tailored for each iOS device using the `apple-touch-startup-image` HTML meta tag.

```html
<link rel="apple-touch-startup-image" href="assets/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" />
<link rel="apple-touch-startup-image" href="assets/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" />
```

You can generate all the resolutions using this [tool](https://appsco.pe/developer/splash-screens) by Appsco. They also have an option where you can use only your logo and a background color to generate these images.


### References

[Android: Custom Splash Screen](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen)

[Safari: Specifying a Launch Screen Image](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6)

### Live Demo

[Headlines App](https://headlines-pwa.firebaseapp.com)