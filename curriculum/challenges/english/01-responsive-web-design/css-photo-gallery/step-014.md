---
id: 6153938dce8b294ff8f5a4e9
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

The `justify-content` property determines how the items inside a flex container are positioned along the main axis, affecting their position and the space around them.

Give your `#gallery` selector a `justify-content` property set to `center`.

# --hints--

Your `#gallery` selector should have a `justify-content` property set to `center`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery')?.justifyContent === 'center');
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

--fcc-editable-region--
#gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
--fcc-editable-region--

#gallery img {
  width: 25%;
  height: 300px;
}
```
