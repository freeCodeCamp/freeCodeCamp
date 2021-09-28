---
id: 6153a3952facd25a83fe8083
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

Create a media query for screens smaller than `800px` in width. In that media query, create a `#gallery img` rule and set the `width` property to `50%`. This will convert your gallery to a two-column layout.

# --hints--

Test 1

```js

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
}

#gallery img {
  width: 25%;
  height: 300px;
  object-fit: cover;
  margin-top: 8px;
  padding: 0 4px;
  border-radius: 10px;
}

--fcc-editable-region--

--fcc-editable-region--
```
