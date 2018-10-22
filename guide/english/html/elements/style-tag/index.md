---
title: Style Tag
---
## Style Tag

The style tag is used sort of like a css file except inside of an HTML, like so:

```
    <head>
      <title>Your Title</title>
      <style>
        p {
          color:red;
        }
      </style>
    </head>
```

The paragraph font color would change to red as a result. It is unpopular to use the style tag over a CSS document, because the more code on one docuement the more challenging it can be to read and edit. It is usually preferred to just use `<link />` and link to a CSS document.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[W3C schools](https://www.w3schools.com/tags/tag_style.asp)

More Info:

Style tag is used to set any CSS-styles for web-page inside a document. Style tag should be nested within head section of html-document:

```html
<head>
  <style>
  h1 {
     text-align: center;
     font-family: sans-serif;
     }
  </style>
</head>
```

You can write any CSS-code inside style tag according to its syntax.

