---
title: CSS3 at Media Rule
---
## CSS3 at Media Rule

The CSS3 Media rule is a rule that allows for use of media queries. Media queries can allow you to style your webpage (either a portion or all of it) differently based on different media types or devices.

A Media Query is created by using the `@media` tag and then supplying a rule in order to check for things such as:
* Width and height of the current viewport
* Orientation of the device (this applies to tablets or phones)
* Current resolution
* And More

There are currently four possible Media Types:
* all (Default - this will target all devices)
* print (Used for printers; e.g. providing separate print styles)
* screen (Used for computers, phones, tablets, etc.)
* speech (Used for accessibility devices such as screenreader that narate the contents of a webpage)

Media queries are used for all sorts of purporses as they allow many differnet media features. One of the most common uses of a Media query is to make a web page responsive; meaning it will behave differently based on the screen size.

An example media query is as follows:

```CSS
@media screen and (max-width: 1000px) {
  body {
    background: #000;
  }
}
```

The CSS in the Media Query rule only applies when the rule holds true. For example, looking at the snippet above, the body background will be changed to `#000` only when the a user visits the page with a device that is 1000px wide or less. If above 1000px, that rule will not apply.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
* [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)


