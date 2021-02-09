---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDaDTN'
forumTopicId: 301034
dashedName: adjust-the-height-of-an-element-using-the-height-property
---

# --description--

You can specify the height of an element using the `height` property in CSS, similar to the `width` property. Here's an example that changes the height of an image to 20px:

```css
img {
  height: 20px;
}
```

# --instructions--

Add a `height` property to the `h4` tag and set it to 25px.

**Note:** You may need to be at 100% zoom to pass the test on this challenge.

# --hints--

Your code should change the `h4` `height` property to a value of 25 pixels.

```js
assert(
  Math.round(document.querySelector('h4').getBoundingClientRect().height) ===
    25 &&
    /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g, ''))
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;

  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
