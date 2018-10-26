---
title: Font Size Attribute
---
## Font Size Attribute

This attribute specifies the font size as either a numeric or relative value. Numeric values range from `1` to `7` with `1` being the smallest and `3` the default. It can also be defined using a relative value, like `+2` or `-3`, which set it relative to the value of the size attribute of the `<basefont>` element, or relative to `3`, the default value, if none does exist.

Syntax: 

`<font size="number">
`

Example:
```html
<html>
  <body>
    <font size="6">This is some text!</font>
  </body>
</html>
```

Note : `The size attribute of <font> is not supported in HTML5. Use CSS instead.`
