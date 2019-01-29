---
title: Basic HTML
---

## Basic HTML

The basic structure of HTML always starts with a document type declaration: `<!DOCTYPE html>`

You will need to add the `<html>` tag after the document type and close it with a `</html>` tag. This will be your actual HTML document.

The first element you will insert in your HTML will be the `<head>` tag that will contain all metadata from the website such as its title, styles, links and other elements. This element needs to be closed with a `</head>` tag.

The visible part of your HTML lies within the `<body>` tag which will be inside the `<html>` tag, and will also need to be closed with a `</body>` tag.

Below you can see the structure of a basic HTML file:


### Basic Page Structure:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- other elements -->
  </head>
  <body>
    <!-- other elements -->
  </body>
</html>
```


### Sample HTML Program

```html
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## HTML Headings

HTML headings are with the <h1> to <h6> tags.

Example:
```html
<h1>  Heading 1 </h1>
<h2>  Heading 2 </h2>
<h3>  Heading 3 </h3>
<h4>  Heading 4 </h4>
<h5>  Heading 5 </h5>
<h6>  Heading 6 </h6>
```

## Explanation
The `<!DOCTYPE html>` is to tell the browser you want the page to be rendered using HTML5.

The `<head></head>` is were you want to put things that help the browser and search engines such as `<title></title>` and `<meta>`.

The `<body></body>` is were the tags that will display on the page are such as `<h1></h1>` or `<p></p>`.


#### More Information
<!-- Please add any articles you think might be helpful to read before writing the article -->
 - [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
 - [W3schools](https://www.w3schools.com/html/)
