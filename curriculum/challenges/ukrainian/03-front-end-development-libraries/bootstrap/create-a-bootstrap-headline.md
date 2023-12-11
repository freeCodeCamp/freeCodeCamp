---
id: bad87fee1348bd9aec908846
title: Створіть заголовок Bootstrap
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

Перейдемо до створення чогось з нуля, щоб відпрацювати набуті навички HTML, CSS та Bootstrap.

Створимо ігровий майданчик jQuery, який згодом використовуватимемо в завданнях jQuery.

Спершу створіть елемент `h3` з текстом `jQuery Playground`.

Зафарбуйте елемент `h3` за допомогою класу `text-primary` та відцентруйте його за допомогою класу `text-center`.

# --hints--

Додайте елемент `h3` на сторінку.

```js
assert($('h3') && $('h3').length > 0);
```

Елемент `h3` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

Елемент `h3` має бути зафарбованим за допомогою класу `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

Елемент `h3` має бути відцентрованим за допомогою класу `text-center`

```js
assert($('h3').hasClass('text-center'));
```

Елемент `h3` повинен мати текст `jQuery Playground`.

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
