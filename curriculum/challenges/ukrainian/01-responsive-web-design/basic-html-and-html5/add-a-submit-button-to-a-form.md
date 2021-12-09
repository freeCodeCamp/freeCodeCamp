---
id: bad87fee1348bd9aedd08830
title: Додаємо кнопку "відправити" у форму
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Додаймо кнопку `submit` (відправити) у форму. При натисканні цієї кнопки дані з форми будуть відправлені за URL-адресою, яка попередньо була прописана у атрибуті `action` форми.

Ось приклад кнопки "відправити":

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

Додайте кнопку наприкінці вашого елемента `form` з типом `submit`, де має бути написано `Submit`.

# --hints--

Всередині вашої `form` має бути прописана `button`.

```js
assert($('form').children('button').length > 0);
```

Ваша кнопка "відправити" повинна мати атрибут `type`, встановлений на `submit`.

```js
assert($('button').attr('type') === 'submit');
```

Ваша кнопка "відправити" повинна мати лише текст `Submit`.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

Елемент `button` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
```

# --solutions--

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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
