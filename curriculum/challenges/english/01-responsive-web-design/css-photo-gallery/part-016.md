---
id: 61539f0aabfa22539645a99b
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

Create a `#gallery img` selector to target your images. Give it a `width` property set to `25%`. Because you are using Flexbox, this will display your images in a 4 column layout.

Also set the `height` property to `300px` to keep your images a uniform size.

# --hints--

You should have a `#gallery img` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('#gallery img'))
```

Your `#gallery img` selector should have a `width` property set to `25%`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery img')?.width === '25%')
```

Your `#gallery img` selector should have a `height` property set to `300px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery img')?.height === '300px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flex Photo Gallery</title>
    <link rel="stylesheet" href="./css/style50.css">
  </head>
  <body>
    <div class="header">
      <h1>CSS FLEXBOX PHOTO GALLERY</h1>
    </div>
    <div id="gallery">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg"/>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/10.jpg"/>
    </div>
  </body>
</html>
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  background: #EBE7E7;
}

.header {
  text-align: center;
  padding: 32px;
  background: #E0DDDD;
}

#gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
}

--fcc-editable-region--

--fcc-editable-region--
```
