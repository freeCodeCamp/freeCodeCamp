---
title: A Href Attribute
---

## A Href Attribute

The `<a href>` attribute refers to a destination provided by a link. The `a` (anchor) tag is dead without the `<href>` attribute. Sometimes in your workflow, you don't want a live link or you won't know the link destination yet. In this case, it's useful to set the `href` attribute to `"#"` to create a dead link. The `href` attribute can be used to link to local files or files on the internet.

For instance:

```html
<html>
  <head>
    <title>Href Attribute Example</title>
  </head>
  <body>
    <h1>Href Attribute Example</h1>
      <p>
        <a href="https://contribute.freecodecamp.org/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
      </p>
    </h1>
  </body>
</html>
```
The `<a href>` attribute is supported by all browsers.

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

It's also possible to set an anchor to certain place of the page. To do this you should first place a tab at location on the page with tag <a> and necessary attribute "name" with any keyword description in it, like this:

```html
<a name="top"></a>
```

Any description between tags is not required. After that you can place a link leading to this anchor at any place on the same page. To do this you should use tag <a> with necessary attribute "href" with symbol # (sharp) and key-word description of the anchor, like this:

```html
<a href="#top">Go to Top</a>
```

### Image Links

The `<a href="#">` may also be applied to images and other HTML elements.

### Example

```html
<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a>

```
### Example
<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a>
### Some more examples of href
```html
<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a>
<link href="style.css">This is a live link to an external stylesheet</a>
```
