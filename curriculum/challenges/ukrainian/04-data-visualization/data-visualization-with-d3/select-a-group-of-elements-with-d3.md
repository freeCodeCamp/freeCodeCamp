---
id: 587d7fa6367417b2b2512bc3
title: Вибір групи елементів за допомогою D3
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 також має метод `selectAll()` для вибору групи елементів. Він повертає масив HTML - вузлів для всіх елементів документа, які відповідають введеному рядку. Ось приклад вибору всіх прив’язних тегів у документі:

```js
const anchors = d3.selectAll("a");
```

Як і метод `select()`, `selectAll()` підтримує ланцюжок методів, і ви можете використовувати його з іншими методами.

# --instructions--

Виберіть усі теги `li` у документі та змініть їх текст на рядок `list item`, послідовно скориставшись методом `.text()`.

# --hints--

На сторінці повинно бути 3 елемента `li`, а текст у кожному з них має вказувати `list item`. Великі літери та пробіли повинні точно збігатися.

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

Ваш код має мати доступ до об'єкту `d3`.

```js
assert(code.match(/d3/g));
```

Ваш код повинен використовувати метод `selectAll`.

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
