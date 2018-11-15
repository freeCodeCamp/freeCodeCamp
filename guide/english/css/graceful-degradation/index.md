---
title: Graceful Degradation
---
## Graceful Degradation

 Graceful degradation is the practice of building an application for modern browsers while ensuring it remains functional in older browsers.
 
 This lower level is not as nice to use for your site visitors, but it does still provide them with the basic functionality that they came to your site to use; things do not break for them.
 
 The web is in a continual state of flux and evolves at an alarming pace. Technologies and techniques rise and fall.The web design industry is always changing, in part because web browsers and devices are always changing. Since the work that we do as web designers and developers is viewed through a web browser of some kind, our work will always have a symbiotic relationship with that software.
 One of the challenges that website designers and developers have always had to deal with is not only changes to web browsers, but also the range of different web browsers that will be used to access their websites. It would be great if all visitors to a site were sure to be using the latest and greatest software, but that has never been the case (and it likely never will be). Some of the visitors to your sites will be viewing the web pages with browsers that are very old and missing features of more modern browsers.
 
 A website design that is built to gracefully degrade is designed first with modern browsers in mind. That site is created to take advantage of the features of these modern web browsers, many of which "auto-update" to ensure that people are always using a recent version. 
 
 Websites that gracefully degrade also work effectively for older browsers, however. When those older, less feature-rich browsers view the site, it should degrade in a way that is still functional, but possibly with fewer features or different display visuals. While this concept of delivering a less functional or not as nice looking site may strike you as odd, the truth is that people will not even known they are missing. They will not be comparing the site that they are seeing against the "better version", so as long as the site works for what they need and does not appear to be broken, either functionally or visually, you will be in good shape.
 
 ### Example
 
 A simple example is the use of 24-bit alpha-transparent PNGs. Those images can be displayed on modern browsers without problems. IE5.5 and IE6 would show the image, but transparency effects would fail (it can be made to work if necessary). Older browsers that do not support PNG would show alt text or an empty space.


### Resources

[How can polyfills be used as a fallback for older browsers](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

[What is polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill)

[Online HTML beautifier](https://www.10bestdesign.com/dirtymarkup/)

[W3C CSS validator](https://jigsaw.w3.org/css-validator/)

[MDN - Graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation)
