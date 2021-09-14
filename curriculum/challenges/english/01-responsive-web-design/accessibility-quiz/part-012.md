---
id: 61408f155e798909b6908712
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

To enable navigation on the page, add an unordered list with the following three list items:

- `INFO`
- `HTML`
- `CSS`

The list items should be wrapped in anchor tags.

# --hints--

You should nest one `ul` element inside the `nav`.

```js

```

You should nest three `li` elements inside the `ul` element.

```js

```

You should nest one `a` element inside each `li` element.

```js

```

You should give the first `a` element the text `INFO`.

```js

```

You should give the second `a` element the text `HTML`.

```js

```

You should give the third `a` element the text `CSS`.

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>freeCodeCamp: Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <img id="logo" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg">
      <h1>HTML/CSS Quiz</h1>
--fcc-editable-region--
      <nav>

      </nav>
--fcc-editable-region--
    </header>
    <main></main>
  </body>
</html>

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

header {
  width: 100%;
	height: 50px;
	background-color: #1b1b32;
	display: flex;
}

#logo {
  width: max(100px, 18vw);
	background-color: #0a0a23;
  aspect-ratio: 35 / 4;
	padding: 0.4rem;
}

h1 {
  color: #f1be32;
	font-size: min(5vw, 1.2em);
}
```
