---
id: 587d7dbf367417b2b2512bba
title: Використовуйте @each для зіставлення елементів в списку
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

Останнє завдання продемонструвало, як директива `@for` використовує початкове і кінцеве значення для повторення циклу певну кількість разів. Sass також пропонує директиву `@each`, яка перебирає кожен елемент в списку або на карті. На кожній ітерації змінній присвоюється поточне значення зі списку або карти.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

У карти трохи інший синтаксис. Ось приклад:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Зверніть увагу, що змінна `$key` необхідна для посилання на ключі карти. В іншому випадку скомпільований CSS містив би `color1`,`color2`. Обидва наведені вище приклади коду перетворені в наступний CSS:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

Напишіть директиву `@each`, яка проходить список: `blue, black, red` і призначає кожній змінній клас `.color-bg`, де частина `color` змінюється для кожного елемента. Кожен клас повинен встановити для `background-color` відповідний колір.

# --hints--

Ваш код повинен містити директиву `@each`.

```js
assert(code.match(/@each /g));
```

Клас `.blue-bg` повинен мати синій `background-color`.

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

Клас `.black-bg` повинен мати чорний `background-color`.

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

Клас `.red-bg` повинен мати червоний `background-color`.

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
