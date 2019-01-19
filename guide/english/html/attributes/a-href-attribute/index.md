---
title: A Href Attribute
---

## A Href Attribute

The `<a href>` attribute refers to a destination provided by a link. The `a` (anchor) element is dead without the `<href>` attribute. Sometimes in your workflow, you don't want a live link or you won't know the link destination yet. In this case, it's useful to set the `href` attribute to `"#"` to create a dead link ,that is, a link to the same page. The `href` attribute can be used to link to local files or files on the internet.

For instance:

```html
<html>
  <head>
    <title>href Attribute Example</title>
  </head>
  <body>
    <h1>href Attribute Example</h1>
      <p>
        <a href="https://contribute.freecodecamp.org/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
      </p>
    </h1>
  </body>
</html>
```
The `<a href>` attribute is supported by all browsers.
Different URL Forms
The URL may be:

Fully Qualified (include a protocol)
https://html.com
https://html.com
URL with a relative (unspecified) protocol
//html.com
Browser-specific protocol
chrome://settings/
Relative to the current page
next
Relative to the current domain
/
/wp-content/uploads/flamingo.jpg
Values of the href Attribute
Value Name	Notes
url	The URL (URI) of the linked resource.


Read more: https://html.com/attributes/a-href/#ixzz5VX8eY5eg

### Syntax
<a href="URL">

URL: The URL of the link.
Possible values:
  - An absolute URL - points to another web site (like <a href="https://www.freecodecamp.org">)
  - A relative URL - points to a file within a web site (like href="index.html")
  - Link to an element with a specified id within the page (like hred="#id-name")

#### More attributes:
 `hreflang` : Specifies the language of the linked resource.
 `target`   : Specifies the context in which the linked resource will open.
 `title`    : Defines the title of a link, which appears to the user as a tooltip.

### Examples
```html
<a href="#">This is a dead link</a>
<a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a>
<a href="https://html.com/attributes/a-href/">more with a href attribute</a>

```
### In-page anchors

It's also possible to set an anchor to a certain place on the page. To do this, you should first place an `<a>` tag at the location and include the necessary attribute `name` with any keyword description in it, like this:

```html
<a name="top"></a>
```

A description between tags is not required. You can now place a link leading to this anchor at any place on the same page. To do this, you should use the `<a>` tag with the necessary attribute "href" with symbol # (sharp) and key-word description of the anchor, like this:

```html
<a href="#top">Go to Top</a>
```

### Image Links

The `<a href="#">` may also be applied to images and other HTML elements.

### Example

```html
<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture"></a>
```
### Some more examples of href
```html
<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a>
<link href="style.css">This is a live link to an external stylesheet</a>
```
