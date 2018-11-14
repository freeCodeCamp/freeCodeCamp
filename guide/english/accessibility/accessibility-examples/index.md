---
title: Accessibility Examples
---
## Accessibility Examples in Practical Application

I am writing this short guide to provide practical examples of how to implement accessibility in websites. Accessibility was not emphasized during school nor is it being emphasized enough in the real world of web development. It is my hope that this article, along with many others, will encourage developers to create accessible sites from now on. It has always helped me to get practical hands on examples for how to do things. So this guide will focus on real world examples that I have encountered in my day to day life as a web developer.

### Skipping Navigation
In order to give visually impaired users a pleasant experience on your website they need to be able to get to content quickly and efficiently. If you have never experienced a website through a screen reader I recommend doing so. It is the best way to test how easily a site can be navigated for non-sighted users. NVDA is a very good screen reader application that is provided free of charge. But if you use the screen reader and find it helpful consider making a donation to the development team. The screen reader can be downloaded from [nvaccess.org](https://www.nvaccess.org/download/).

To allow visually impaired users to skip to the main content of a site and avoid tabbing through all the main navigation links:
1. Create a "skip navigation link" that lives directly underneath the opening <code>body</code> tag.
```html
<a tabindex="0" class="skip-link" href="#main-content">Skip to Main Content</a>
```
<code>tabindex="0"</code> is added to ensure the link is keyboard focusable on all browsers. Further information about keyboard accessibility can be found at [webaim.org](https://webaim.org/techniques/keyboard/tabindex).

2. The "skip navigation" link needs to be associated with the main html tag in your webpage document using the ID tag.
```html
<main id="main-content">
  ...page content
</main>
```
3. Hide the "skip navigation" link by default.
This ensures that the link is only visible to sighted users when the link is in focus.
- Create a class for the link that can be styled with CSS. In my example I have added the class <code>skip-link</code>.
```css
.skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}
.skip-link:active, .skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
  -webkit-clip-path: none;
  clip-path: none;
}
```
These CSS styles hide the link by default and only display the link when it is receiving keyboard focus. For more information visit the [a11yproject](http://a11yproject.com/posts/how-to-hide-content) and this [blog post](http://hugogiraudel.com/2016/10/13/css-hide-and-seek/).


### Accessible Tables
### Accessible Tabs
