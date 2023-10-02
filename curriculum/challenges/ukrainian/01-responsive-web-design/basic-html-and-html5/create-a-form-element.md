---
id: bad87fee1348bd9aede08830
title: Створити елемент форми
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

Ви можете створювати вебформи, які фактично відправляють дані на сервер, не використовуючи нічого крім HTML. Це можна зробити, вказавши атрибут `action` у вашому елементі `form`.

Наприклад:

```html
<form action="url-where-you-want-to-submit-form-data">
  <input>
</form>
```

# --instructions--

Вкласти наявний елемент `input` всередину елементу `form` та призначити `"https://www.freecatphotoapp.com/submit-cat-photo"` атрибуту `action` елементу `form`.

# --hints--

Чинний елемент `input` повинен входити в елемент `form`.

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

Ваша `form` повинна мати атрибут `action`, який задасть перехід до `https://www.freecatphotoapp.com/submit-cat-photo`.

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

Ваш елемент `form` повинен мати добре сформовані теги, що відкриваються та закриваються.

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
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
  <input type="text" placeholder="cat photo URL">
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
  </form>
</main>
```
