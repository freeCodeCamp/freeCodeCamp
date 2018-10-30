---
title: How to Use Links
---
## How to Use Links

In HTML you can use the `<a>` tag to create a link. For example you can write `<a href="https://www.freecodecamp.org/">freeCodeCamp</a>` to create a link to freeCodeCamp's website.

Links are found in nearly all web pages. Links allow users to click their way from page to page.

HTML links are hyperlinks. You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

Note: A link does not have to be text. It can be an image or any other HTML element.

In HTML, links are defined with the <a> tag:
  
```html
<a href="url">link text</a>
```

Example

```html
<a href="https://www.freecodecamp.org/">Visit our site for tutorials</a>
```

The href attribute specifies the destination address (https://www.freecodecamp.org) of the link.

The link text is the visible part (Visit our site for tutorials).

Clicking on the link text will send you to the specified address.


## HTML Links - The target Attribute

The ```target``` attribute specifies where to open the linked document.

The target attribute can have one of the following values:

_blank - Opens the linked document in a new window or tab<br>
_self - Opens the linked document in the same window/tab as it was clicked (this is default)<br>
_parent - Opens the linked document in the parent frame<br>
_top - Opens the linked document in the full body of the window<br>
framename - Opens the linked document in a named frame<br>
This example will open the linked document in a new browser window/tab:<br>

## Example:
```<a href="https://github.com/" target="_blank">Visit GitHub</a>```<br>

<b>Tip:</b> If your webpage is locked in a frame, you can use ```target="_top"``` to break out of the frame:<br>

## Example:
```<a href="https://www.github.com" target="_top">Html Links - Github!</a>```
