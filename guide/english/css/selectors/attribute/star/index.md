---
title: Star
---
## Star

Star CSS attribute selector or * is used for selecting attributes that contain specific value.

### CSS Syntax

```css
attribute *= value {
    css declarations;
}
```

#### Example

If you want to search all anchor links that contain "code" anywhere in the URL value and make them yellow, you can do it like this:

```css
a[href*="code"] {
   color: yellow;
}
```

Set a background color on all `<div>` elements that have a class attribute value containing "backing":
   
```css
div[class*="backing"] {
    background: #ffff00;
}
```

