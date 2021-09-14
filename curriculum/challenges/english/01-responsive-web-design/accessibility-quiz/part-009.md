---
id: 6140827cff96e906bd38fc2b
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

As described in the [freeCodeCamp Style Guide](https://design-style-guide.freecodecamp.org/), the logo should retain an aspect ratio of `35:4`, and have padding around the text.

First, change the `background-color` to `#0a0a23` so you can see the logo. Then, use the `aspect-ratio` property to set the desired aspect ratio. Finally, add a `padding` of `0.4rem` all around.

# --hints--

You should give the `#logo` a `background-color` of `#0a0a23`.

```js

```

You should use the `aspect-ratio` property.

```js

```

You should not use the `height` property.

```js

```

You should not change the `width` property.

```js

```

You should give the `img` an `aspect-ratio` of `35 / 4`.

```js

```

You should give the `img` a `padding` of `0.4rem`.

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
      <nav></nav>
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

--fcc-editable-region--
#logo {
  width: max(100px, 18vw);

}
--fcc-editable-region--

```
