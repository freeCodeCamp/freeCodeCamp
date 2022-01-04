---
id: bad87fee1348bd9aedc08830
title: Використання HTML5 для отримання потрібного поля
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

Ви можете створити певні поля з формами так, щоб користувач не зміг відправити їх до тих пір, поки вони не будуть заповнені.

Наприклад, якщо ви хочете створити поле для введення тексту, просто додайте атрибут `required` в межах вашого елемента `input`, на кшталт цього: `<input type="text" required>`

# --instructions--

Зробіть з вашого тексту `input` поле `required` так, щоб користувач не міг надіслати форму без повного заповнення поля.

Потім спробуйте надіслати форму без введення тексту. Бачите як ваша форма HTML5 повідомляє, що поле є обов'язковим для заповнення?

# --hints--

Ваш текст `input` елемента повинен містити `required` атрибут.

```js
assert($('input').prop('required'));
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
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
