---
id: bad87fee1348bd9aefe08806
title: Style mehrere Elemente mit einer CSS-Klasse
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVbsQ'
forumTopicId: 18311
dashedName: style-multiple-elements-with-a-css-class
---

# --description--

Klassen erlauben es die selben CSS-Stile für mehrere HTML-Elemente zu verwenden. Du kannst das hier sehen, indem du deine `red-text` Klasse auf dein erstes `p` Element anwendest.

# --hints--

Dein `h2`-Element sollte rot sein.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Dein `h2`-Element sollte die Klasse `red-text` besitzen.

```js
assert($('h2').hasClass('red-text'));
```

Dein erstes `p`-Element sollte rot sein.

```js
assert($('p:eq(0)').css('color') === 'rgb(255, 0, 0)');
```

Dein zweites und drittes `p`-Element sollten nicht rot sein.

```js
assert(
  !($('p:eq(1)').css('color') === 'rgb(255, 0, 0)') &&
    !($('p:eq(2)').css('color') === 'rgb(255, 0, 0)')
);
```

Dein erstes `p`-Element sollte die Klasse `red-text` besitzen.

```js
assert($('p:eq(0)').hasClass('red-text'));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
