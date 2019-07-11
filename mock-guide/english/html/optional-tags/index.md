---
title: Optional Tags
---
## HTML5 Optional Tags

In HTML5, you can omit certain opening and closing tags under specific conditions. For example, the following HTML code...

```html
<!DOCTYPE html>
<p>Hello World.
```

Will automatically evaluate to...

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <p>Hello world.
    </p>
  </body>
</html>
```

The optional tag specifications for the most common HTML5 tags are as follows:

- An `html` element's start tag may be omitted if the first thing inside the `html` element is not a comment.
- An `html` element's end tag may be omitted if the `html` element is not immediately followed by a comment.
- A `head` element's start tag may be omitted if the element is empty, or if the first thing inside the `head` element is an element.
- A `head` element's end tag may be omitted if the `head` element is not immediately followed by a space character or a comment.
- A `body` element's start tag may be omitted if the element is empty, or if the first thing inside the `body` element is not a space character or a comment, except if the first thing inside the `body` element is a `meta`, `link`, `script`, `style`, or `template` element.
- A `body` element's end tag may be omitted if the body element is not immediately followed by a comment.

### More Information

To learn more about the HTML5 optional tags, please visit [The World Wide Web Consortium's Recommendations](https://www.w3.org/TR/html5/syntax.html#optional-tags).
