---
id: 5c6c06847491271903d37cfd
title: Використовуйте атрибут значення за допомогою радіокнопок та прапорців
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

При відправленні форми, дані надсилаються на сервер і вмикають записи для обраних параметрів. Вхідні дані типу `radio` та`checkbox` повідомляють свої значення з атрибуту `value`.

Наприклад:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

Ось тут, ви маєте два вхідні `radio`. Коли користувач розміщує форму з обраним параметром `indoor`, дані форми будуть містити рядок:`indoor-outdoor=indoor`. Це стосується вхідних атрибутів "indoor" `name`та `value`.

Якщо ви опустили атрибут `value`, надіслані дані форми використовуватимуть значення за замовчуванням, що представляє `on`. В цьому сценарії, якщо користувач натиснув на параметр "indoor" і надіслав форму, отримані дані форми будуть `indoor-outdoor=on`, що немає сенсу. Таким чином, атрибут `value` повинен бути встановлений для чогось, щоб ідентифікувати параметр.

# --instructions--

Надайте кожному з існуючих атрибутів `radio` і `checkbox` вводу `value`. Не створюйте нові елементи радіо чи прапорця. В якості значення атрибуту в нижньому регістрі використовуйте текст для вхідних міток.

# --hints--

Одна з ваших радіокнопок повинна мати атрибут `value` з `indoor`.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

Одна з ваших радіокнопок повинна мати атрибут `value` з `outdoor`.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

Один із ваших прапорців повинен мати атрибут `value` з `loving`.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

Один із ваших прапорців повинен мати атрибут `value` з`lazy`.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

Один із ваших прапорців повинен мати атрибут `value` з `energetic`.

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
