---
id: 587d778b367417b2b2512aa8
title: Додайте доступне поле для вибору дати
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Форми часто містять поле `input`, яке можна використовувати, щоб створити декілька різних елементів керування формою. Атрибут `type` на цьому елементі позначає, який різновид елементу `input` буде створений.

Ви могли помітити типи введення `text` і `submit` у попередніх завданнях; HTML5 запропонував опцію, щоб вказати поле `date`. Залежно від підтримки браузера, поле вибору дати з'являється в полі `input`, коли воно у фокусі, що спрощує заповнення форми для всіх користувачів.

У старих браузерах за замовчуванням буде відтворюватися тип `text`, тож варто показати користувачам очікуваний формат дати в `label` або тексті `placeholder` про всяк випадок.

Наприклад:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Кіт Кампер організовує турнір у Mortal Kombat і хоче опитати своїх супротивників, щоб визначити найкращу дату. Додайте теґ `input` з атрибутом `type` для `date`, атрибут `id` для `pickdate` і атрибут `name` для `date`.

# --hints--

Ваш код має додати один теґ `input` для поля вибору дати.

```js
assert($('input').length == 2);
```

Ваш теґ `input` повинен містити атрибут `type` зі значенням `date`.

```js
assert($('input').attr('type') == 'date');
```

Ваш теґ `input` повинен містити атрибут `id` зі значенням `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Ваш теґ `input` повинен містити атрибут `name` зі значенням `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
