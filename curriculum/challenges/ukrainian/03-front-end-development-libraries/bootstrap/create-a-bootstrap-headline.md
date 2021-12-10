---
id: bad87fee1348bd9aec908846
title: Створення заголовка Bootstrap
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

Перейдімо тепер до створення чогось з нуля, щоб відпрацювати набуті навички HTML, CSS та Bootstrap.

Створимо jQuery playground, який незабаром будемо використовувати у завданнях jQuery.

Спершу створіть елемент `h3` з текстом `jQuery Playground`.

Додайте колір до вашого елементу `h3`, використовуючи клас Bootstrap `text-primary`, і відцентруйте його за допомогою класу Bootstrap `text-center`.

# --hints--

На сторінку необхідно додати елемент `h3`.

```js
assert($('h3') && $('h3').length > 0);
```

Елемент `h3` повинен містити кінцевий теґ.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

Елемент `h3` має бути зафарбований шляхом застосування класу `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

Елемент `h3` повинен бути відцентрований шляхом застосування класу `text-center`

```js
assert($('h3').hasClass('text-center'));
```

Елемент `h3` повинен містити текст `jQuery Playground`.

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
