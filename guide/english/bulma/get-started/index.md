---
title: Get Started
---
## Get Started

There are several ways to get started with Bulma.
* <b>npm</b> install the bulma package.
* cdnjs <b>CDN</b> to link to the bulma stylesheet.
* use the <b>GitHub Repository</b> to get the latest development version.

1) Using npm
```terminal
$ npm install bulma
```
2) Use the cdnjs CDN
https://cdnjs.com/libraries/bulma

3) Download from the repository
https://github.com/jgthms/bulma/tree/master/css

### Code requirements

For bulma to work correctly, you need to make your webpage responsive.
1) Use HTML5 doctype
```html
<!DOCTYPE html>
```
2) Add the responsive viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
3) Starter Template
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
```

### Bulma-start
```bulma-start``` is a tiny ```npm``` package that includes the npm dependencies you need to build your own website with Bulma.