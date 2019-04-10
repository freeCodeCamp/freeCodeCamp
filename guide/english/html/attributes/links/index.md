---
title: Links
---

## Links

### <a id="link-top"></a> General Links
Links are used everywhere on the web, with the purpose of directing users to various content items. They're usually indicated by your cursor turning into a hand icon. Links can be text, images, or other elements contained within your HTML or webpage. 

You use an anchor element/tag `<a>` to define your link, which also needs a destination address(url) that you'll access with the `href` attribute.
```html
<a href="url">Link Text</a>
```

The target attribute can be used to tell the browser where to open the link.  If you'd like your link to open in a new tab, you can use the `target` attribute along with the `_blank` value inside your opening `<a>` tag. 

Here's a snippet that makes the phrase 'The freeCodeCamp Guide' a link:

```html
<a href="https://guide.freecodecamp.org">The freeCodeCamp Guide</a>
```

The link ends up looking like this: [The freeCodeCamp Guide](https://guide.freecodecamp.org)

### `target` Attribute

**Opening a page in a new tab**

If you'd like your link to open in a new tab, you'll use the `target` attribute along with the `_blank` 
value inside your opening `<a>` tag:

```html 
<a href="url" target="_blank">Link Text</a>
```
Another example, using the official freeCodeCamp Guide as the `href=""` destination, and "The freeCodeCamp Guide" as the link text:

```html
<!-- target="_blank" makes the link open in a new tab. -->
<a href="https://guide.freecodecamp.org" target="_blank">The freeCodeCamp Guide</a>
```

Other values of the target attribute include:
- `_self` to open the linked document in the same frame
- `_parent` to open it in the parent frame
- `_top` opens the linked document in the full body of the window
- `_targetframe` opens the linked document in a named targetframe

### Links on the Same Page
When you need to guide users to a specific part of your webpage, let's assume the very bottom, you first need to create an html element with an `#id` that you want direct your user to - in this case the `<footer>` at the bottom of the webpage. For example:
```html
<!-- Here we create a <footer> with an id of #footer -->
<footer id="footer">Powered by freeCodeCamp</footer>
```
Now to link to the footer (make the page scroll down to the footer when you click it), we have to assign the hash `#` symbol to the `href` attribute like this:
```html
<a href="#footer>More about us<a/>
```
To demonstrate how this works, here is a link that takes you to the top of this page: <a href="#link-top">Click Here.</a> 

#### More Information

* [w3schools - HTML Links](https://www.w3schools.com/html/html_links.asp)
* [w3schools - Target Attribute](https://www.w3schools.com/tags/att_a_target.asp)






