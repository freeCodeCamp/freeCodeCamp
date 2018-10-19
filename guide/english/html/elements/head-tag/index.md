---
title: Head Tag
---
## Head Tag

The `<head>` tag contains information about a webpage. Along with `<body>`, it is one of the two required elements of an HTML document. `<head>` must be the first child of an `<html>` element. There can only be one `<head>` element on a page.

The `<head>` element contains information about how a webpage should be displayed, also known as metadata. The document title, links to stylesheets, and `<script>` tags linking to JavaScript files should all be placed in the `<head>`.  The `<head>` should not contain any page content.

  ```html
  <html>
  <head>
    <title>Document Titles Belong in the Head</title>
  </head>
  <body>
    <p>This paragraph is content. It goes in the body!</p>
  </body>
</html>
  ```
Also the `<head>` tag is not needed in HTML5 and up, and should be ommited, like this

```html
<html>
    <title>Document Titles Belong in the Head</title>
  <body>
    <p>This paragraph is content. It goes in the body!</p>
  </body>
</html>
```
#### What can go Here:

`<title>` -- This is Required for HTML to work and sets the title of the page
`<style>` -- The `<style>` tag allows you to set CSS right in the HTML file
`<base>` -- The `<base>` tag lets you to specify a default URL and a default target for all links on a page.
`<link>` -- the `<link>` tag lets you use external style sheets in your website
`<meta>` -- The `<meta>` tag allows you to specify per-page descriptions, keywords, author of document, last modified, and others
`<script>` -- Allows you to write `<script>` in your browser
`<noscript>` -- Used if your Browser is not compatible with javascript. In my opinion, every webpage should have that if they use html
#### More Information:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)


