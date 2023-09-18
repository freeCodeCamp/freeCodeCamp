---
id: bad87fee1348bd9aedf08834
title: Створити набір радіокнопок
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

Ви можете використовувати <dfn>radio buttons</dfn> (радіокнопки) для запитань, де ви хочете, щоб користувач давав вам тільки одну відповідь з декількох варіантів.

Радіокнопки це тип `input`.

Кожна з радіокнопок може бути вкладеною у власний елемент `label`. Коли елемент `input` всередині елементу `label`, він буде автоматично пов'язувати ввідну радіокнопку з міткою навколо неї.

Усі пов'язані радіокнопки повинні мати однаковий атрибут `name`, щоб створити групу радіокнопок. Створюючи групу радіокнопок, вибір будь-якої однієї радіокнопки автоматично зніме інші радіокнопки всередині тієї ж групи, гарантуючи, що користувач дасть тільки одну відповідь.

Приклад радіокнопки:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

Оптимальна практика - встановлення атрибута `for` в елементі `label` зі значенням, яке відповідає значенню атрибута `id` елемента `input`. Це дозволяє скористатися допоміжними технологіями, щоб створити співвідношення між міткою та пов'язаним елементом `input`. Приклад:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

Ми також можемо вкласти елемент `input` всередині тегів `label`:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

Додайте пару радіокнопок до вашої форми, кожна вкладена у власний елемент `label`. Одна з них повинна мати опцію `indoor`, а інша повинні мати опцію `outdoor`. Обидві повинні ділитися атрибутом `name` з `indoor-outdoor`, щоб створити радіогрупу.

# --hints--

Ваша сторінка повинна мати два елементи кнопок `radio`.

```js
assert($('input[type="radio"]').length > 1);
```

Вашим радіо кнопкам слід вказати атрибут `name` з `indoor-outdoor`.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

Кожна з ваших двох елементів радіо кнопок повинна бути вкладеною у власний елемент `label`.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

Кожен елемент `label` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Одна з ваших радіо кнопок повинна мати мітку `indoor`.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

Одна з ваших радіо кнопок повинна мати мітку `outdoor`.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

Кожні з ваших радіо кнопок повинні бути додані всередину тегу `form`.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
