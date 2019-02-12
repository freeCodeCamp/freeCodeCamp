---
title: Page Structure
---
## Page Structure

To create your pages in `HTML`, you need to know how to structure a page in `HTML`. Usually, the page structure follows the example below:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the Page</title>
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```
1. The `<!DOCTYPE html>` statement must always be the first to appear on an `HTML` page and tell the browser which version of the language is being used. In this case, we are working with `HTML5`.

1. The `<html>` and `</html>` tags tell the web browser where the `HTML` code starts and ends.

1. The `<head>` and `</head>` tags contains information about the website, e.g. style, meta-tags, etc.

1. The `<title>` and `</title>` tags tell the browser what the page title is. The title can be seen by identifying the tab in your internet browser. The text that is defined between these tags is also the text that is used as title by the search engines when they present the pages in the results of a search.

1. Between the `<body>` and `</body>` tags the page content is placed, which is what is displayed in the browser.

### Changes in HTML5

#### Introduction of semantic tags

HTML contains both semantic and non-semantic tags. 

Semantic tags are descriptive tags that can easily convey their meaning to both a browser and a developer. Examples of semantic tags are: `<header>`, `<footer>`, `<form>`, `<table>`, `<article>`, etc. These tags also help screenreaders which are used by the visually
impaired.

Non-semantic tags are tags that convey nothing about what they contain. Examples of non-semantic tags are: `<div>`, `<section>`, `<span>`, etc.

Instead of using the generic `<div>` for every other container use the semantic tags such as `<header>` and `<footer>`. 

#### More Information:
[HTML: Introduction](https://www.w3schools.com/html/html_intro.asp)
