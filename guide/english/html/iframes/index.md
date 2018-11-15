---
title: Iframes
---
## Iframes

The HTML `<iframe>` element represents an inline frame, which allows you to include an independent HTML document into the current HTML document. The `<iframe>` is typically used for embedding third-party media, your own media, widgets, code snippets, or embedding third-party applets such as payment forms.

### Attributes
Listed below are some of the `<iframe>`'s attributes:

| Attribute | Description |
| --- | --- |
| `allowfullscreen` | Set to true to allow the frame to be placed into full screen mode |
| `frameborder` | Tells the browser to draw a border around the frame (set to 1 by default) |
| `height` | The height of the frame in CSS pixels |
| `name` | A name for the frame |
| `src` | The URL of the web page to embed |
| `width` | The width of the frame in CSS pixels |

### Examples
Embedding a YouTube video with an `<iframe>`:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" 
frameborder="0" allowfullscreen></iframe>
```

Embedding Google Maps with an `<iframe>`:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424" 
width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

### Alternative Text
The content between the opening and closing `<iframe>` tags is used as alternative text, to be displayed if the viewer's browser does not support iframes.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0">
  <p>Your browser does not support iframes.</p>
</iframe>
```

### Targeting an Iframe in a Link
Any `<a>` link can target the content of an `<iframe>` element. Rather than redirect the browser window to the linked webpage, it will redirect the `<iframe>`. For this to work, the `target` attribute of the `<a>` element must match the `name` attribute of the `<iframe>`.

```html
<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"></iframe>

<p><a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir">Redirect the Iframe</a></p>
```

This example will show a blank `<iframe>` initially, but when you click the link above it will redirect the `<iframe>` to show a YouTube video.

### Javascript and Iframes
Documents embedded in an `<iframe>` can run JavaScript within their own context (without affecting the parent webpage) as normal.

Any script interaction between the parent webpage and the content of the embedded `<iframe>` is subject to the same-origin policy. This means that if you load the content of the `<iframe>` from a different domain, the browser will block any attempt to access that content with JavaScript.

### More Information:
[MDN Iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
[W3Schools Iframe](https://www.w3schools.com/tags/tag_iframe.asp)
