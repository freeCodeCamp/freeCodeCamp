---
id: 6153a04847abee57a3a406ac
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

Your images need some space between them.

Give your `#gallery img` selector a `margin-top` property of `8px` and a `padding` property of `0 4px`.

# --hints--

Your `#gallery img` selector should have a `margin-top` property of `8px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery img')?.marginTop === '8px');
```

Your `#gallery img` selector should have a `padding` property of `0 4px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery img')?.padding === '0px 4px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox Photo Gallery</title>
    <link rel="stylesheet" href="./styles.css">
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
#gallery img {
  width: 25%;
  height: 300px;
  object-fit: cover;
}
--fcc-editable-region--
```
