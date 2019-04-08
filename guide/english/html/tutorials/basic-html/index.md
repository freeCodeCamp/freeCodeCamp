---
title: Basic HTML
---

## Basic HTML

The basic structure of HTML always starts with a document type declaration: `<!DOCTYPE html>`

You will need to add the `<html>` tag after the document type and close it with a `</html>` tag. This will be your actual HTML document.

The first element you will insert in your HTML will be the `<head>` tag that will contain all metadata from the website such as its title, styles, links and other elements. This element needs to be closed with a `</head>` tag.

The visible part of your HTML lies within the `<body>` tag which will be inside the `<html>` tag, and will also need to be closed with a `</body>` tag.

Below you can see the structure of a basic HTML file:


## Basic Page Structure
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
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="describe content">
    <meta name="keywords" content="HTML">
    <meta name="author" content="Name">
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

### Explanation
- `<!DOCTYPE html>` - This is called a declaration, which lets the filereader know which version of HTML running. In this case, it will automatically run HTML5.
- `<html>` - lets the filereader know where the HTML code starts. It is closed with `</html>` located at or near the end of a document.
- `<head></head>` - where you put metadata like `title`, `author`, `keywords`, and `meta` that help the browser and search engines. None of the elements written here will be visible once the code gets read
- `<body></body>` - where the display elements are added to the page, such as `<h1></h1>` or `<p></p>` elements.

## HTML Heading Elements
HTML heading elements are declared with the `<h1>` to `<h6>` tags.

Example:
```html
<h1>  Heading 1 </h1>
<h2>  Heading 2 </h2>
<h3>  Heading 3 </h3>
<h4>  Heading 4 </h4>
<h5>  Heading 5 </h5>
<h6>  Heading 6 </h6>
```

## Additional Resources
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3schools](https://www.w3schools.com/html/)
