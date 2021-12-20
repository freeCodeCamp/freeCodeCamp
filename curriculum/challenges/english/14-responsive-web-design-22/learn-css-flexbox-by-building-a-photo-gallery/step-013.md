---
id: 615392916d83fa4f02f7e2cf
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

You may have noticed that your images have all moved onto the same row.

The `flex-wrap` property determines how your items should behave when the flex container is too small. Setting this property to `wrap` will allow your items to wrap to the next row/column (depending on your main axis), where `nowrap` will prevent your items from wrapping. When this is set to `nowrap`, items may either shrink to fit or overflow.

Give the `#gallery` selector a `flex-wrap` property set to `wrap`. You should see your images take a four-column layout. This is because you set their `width` to `25%` in an earlier step.

# --hints--

Your `#gallery` selector should have a `flex-wrap` property set to `wrap`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#gallery')?.flexWrap === 'wrap');
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
}
--fcc-editable-region--

#gallery img {
  width: 25%;
  height: 300px;
}
```
