---
id: bad87fee1348bd9aedf08835
title: Створення набору прапорців
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

Як правило, форми використовують <dfn>checkboxes</dfn> (прапорці) для запитань, які можуть мати більше, ніж одну відповідь.

Прапорці це тип `input`.

Кожен з прапорців може бути вкладеним у власний елемент `label`. Коли елемент `input` всередині елементу `label`, він буде автоматично пов'язувати ввідну радіокнопку з міткою навколо неї.

Усі відповідні вхідні дані повинні мати однаковий атрибут `name`.

Оптимальна практика - чітке визначення співвідношень між прапорцем `input` та відповідному йому елемента `label`, встановлюючи атрибут `for` в елемент `label`, щоб збігатися з атрибутом `id` асоційованого елементу `input`.

Ось приклад прапорця:

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

Додайте до своєї форми набір з трьох прапорців. Кожен з прапорців може бути вкладеним в рамках власного елементу `label`. Усі три прапорці повинні поділитися атрибутом `name` з `personality`.

# --hints--

Ваша сторінка повинна мати три елементи прапорця.

```js
assert($('input[type="checkbox"]').length > 2);
```

Кожен з ваших трьох прапорців повинен бути вкладеним у рамках власного елементу `label`.

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

Переконайтеся, що кожен з ваших елементів `label` має тег, що закривається.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Вашим прапорцям варто вказати атрибут `name` з `personality`.

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

Кожному з ваших прапорців слід додати всередині тег `form`.

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
