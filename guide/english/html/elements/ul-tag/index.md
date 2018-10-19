---
title: Ul Tag
---
## Ul Tag

The unordered list `<ul>` is a tag used to create bulleted lists. To create a list inside the `<ul>`, use the `<li>` tag. To style lists, go to the CSS style lists and make the changes.

The `<ul>` can be nested inside other lists and is compatible with others tag such as `<a>`,`<p>`,`<button>`, the html styling tags (`<strong>`,`<em>`, etc).

### Example
To create the following:
```html
 <ul>
    <li>This is the bulleted list #1</li>
    <li>This is the bulleted list #2</li>
    <li>This is the bulleted list #3</li>
      <li>
        <ul>
          <li>This is the bulleted nested list #1</li>
        </ul>
      </li>
  </ul>
```

You would use this HTML code:
``` html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <ul>
      <li>This is the bulleted list #1</li>
      <li>This is the bulleted list #2</li>
      <li>This is the bulleted list #3</li>
      <li>
        <ul>
          <li>This is the bulleted nested list #1</li>
        </ul>
      </li>
    </ul>
  </body>
</html>
```

## Other Resources
- [The ordered list `<ol>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ol-tag/index.md)

