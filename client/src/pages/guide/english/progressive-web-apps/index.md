---
title: Progressive Web Apps
---

## Progressive Web Apps

Progressive Web Apps or "PWAs" appear to be more than just a fad, but a fundamentally different way of approaching what a website can and should be on whatever platform you are viewing it from. 

PWAs can install portions of themselves onto devices for offline viewing, use service workers to deliver content as needed when a connection is available and best of all standardize certain functionality between mobile and desktop devices.

### Features

Specific features of PWAs include:

* **Responsive**
  * Responsive is not a part of PWA but but there are lot of frameworks available out there to make your webapp responsive on screens with different sizes. Which makes the user feels like using native app. 
* **Offline Capabilities**
  * The major breakthrough of PWA is Offline usage. To be more clear, if you are using a native mobile app you'll notice that most of the apps are not dependent of the internet (i.e) it can work without internet. But you cannot achieve this with a website earlier. which shows major difference between a mobile app and a webapp. A feature called service worker which is currently supported by most of the browser helps to overcome the problems of OFFLINE. So now you can make your website to show some other content instead of showing a dinosour running around. :) 
* **Native App Feel**
  * adopts a Shell & Content application model to create app navigation & interactions
* **Fresh**
  * always up-to-date thanks to service workers
* **Safe**
  * Service Worker requires your site to be 'HTTPS' which makes your webapp more secure. But there is an exception for development. Yes, you can use service worker in your localhost. But for other sites except localhost 'HTTPS' is mandatory to get your service worker register to a browser.
* **Discoverable**
  * identifiable as "applications" thanks to W3C Manifests and Service Worker registration scope allowing search engines to find them
* **Engaging**
  * can access the re-engagement UIs of the OS through Push Notifications
* **Easy Installation**
  * can be added to the home screen through browser-provided prompts, allowing users to "keep" apps they find most useful without the hassle of an app store
* **Linkable**
  * meaning they're zero-friction, zero-install, and easy to share
  * the social power of URLs matters

> These apps aren’t packaged and deployed through stores, they’re just websites that took all the right vitamins.<sup>1</sup>

### Progressive Enhancement

Progressive enhancement means that everyone can access the basic content and functionality of a page in any browser, and those without certain browser features may receive a reduced but still functional experience. [- Lighthouse](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-4-site-is-progressively-enhanced-b5ad7cf7a447)<sup>2</sup>

A great analogy from [Aaron Gustafson](http://alistapart.com/article/understandingprogressiveenhancement) is that progressive enhancement (PE) is like a peanut M&M.

> "The Peanut is your content, the chocolate coating is your presentation layer and your JavaScript is the hard candy shell."

This implies that depending on the browser, the experience can change.

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/esfi7ZLibmk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

### References

1. [Russell, Alex. "Progressive Web Apps: Escaping Tabs Without Losing Our Soul" "Infrequently Noted" Posted: June 15, 2015.](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)
2. [Progressive Web Apps - Google Developers](https://developers.google.com/web/progressive-web-apps/)
