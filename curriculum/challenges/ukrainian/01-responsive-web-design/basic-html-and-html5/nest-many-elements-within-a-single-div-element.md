---
id: bad87fee1348bd9aede08835
title: Вкладання багатьох елементів в межах ординарного елементу div
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
dashedName: nest-many-elements-within-a-single-div-element
---

# --description--

Елемент `div` також відомий як елемент поділу (div), є контейнером загального призначення для інших елементів.

Елемент `div` ймовірно є найчастіше використовуваним HTML-елементом з усіх.

Як і будь-який інший елемент, що не закривається сам, ви можете відкрити елемент `div` з `<div>` та закрити його на іншому рядку з `</div>`.

# --instructions--

Вкладіть ваші списки "Things cats love" та "Top 3 things cats hate", всі в межах одного елементу `div`.

Підказка: Спробуйте розмістити свій початковий тег `div` над елементом "Things cats love" `p` та кінцевий тег `div` після вашого кінцевого тега `ol`, щоб два ваших списки знаходились в межах одного `div`.

# --hints--

Елементи `p` повинні бути вкладені в елемент `div`.

```js
assert($('div').children('p').length > 1);
```

Елемент `ul` повинен бути вкладеним в елемент `div`.

```js
assert($('div').children('ul').length > 0);
```

Елемент `ol` повинен бути вкладений в елемент `div`.

```js
assert($('div').children('ol').length > 0);
```

Елемент `div` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<\/div>/g).length === code.match(/<div>/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
