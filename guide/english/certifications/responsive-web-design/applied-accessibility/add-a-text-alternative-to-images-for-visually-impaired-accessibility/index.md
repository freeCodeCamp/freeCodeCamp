---
title: Add a Text Alternative to Images for Visually Impaired Accessibility
---
## Add a Text Alternative to Images for Visually Impaired Accessibility
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Visually impaired people often rely on screen readers to convert web content to an audio interface. The alt attribute provides alternative information for an image if a user for some reason cannot view it. This could be due to a slow connection, an error in the src attribute, but _also_ if the user uses a screen reader. When a screen reader encounters an image, it accesses the alt attribute and reads its contents in order to deliver key information. The alt atribute should be short but descriptive. It is meant to briefly convey the meaning of the image in order to be picked up by a screenreader and read aloud to the user. 

In situations when an image is already explained with text content, or does not add meaning to a page (like a background image), the img tag still needs an alt attribute, but it can be set to an empty string. The alt atrribute is always placed within the img tag.

### Example
```html
<img src="cat.gif" alt="A grey cat sitting">
```
The alt attribute above gives the text alternative of, "A grey cat sitting" for the image, cat.gif.

```html
<img src="decoration.gif" alt=" ">
```
Here the image does not add meaning to the page, and so the alt attribute is left blank.

### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility" target="_blank"> MDN web docs: Handling common accessibility problems</a><br>
<a href="https://www.w3schools.com/tags/att_img_alt.asp" target="_blank">W3schools: HTML img alt Attribute</a><br>

