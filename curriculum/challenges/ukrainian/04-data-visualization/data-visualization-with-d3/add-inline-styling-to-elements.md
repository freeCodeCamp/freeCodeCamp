---
id: 587d7fa7367417b2b2512bc6
title: Додавання вбудованих стилів (Inline Styling) до елементів
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 дозволяє додати вбудовані стилі CSS для динамічних елементів методом `style()`.

Метод `style()` приймає пару ключ-значення, розділену комами, як аргумент. Ось приклад, як змінити колір тексту вибірки на блакитний:

```js
selection.style("color","blue");
```

# --instructions--

Додайте метод `style()` до коду в редакторі, щоб з сімейства шрифтів `font-family` всі відображені тексти були у стилі `verdana`.

# --hints--

З набору шрифтів `font-family` оберіть `verdana` для елементів `h2`.

```js
assert($('h2').css('font-family') == 'verdana');
```

Ваш код повинен використовувати метод `style()`.

```js
assert(code.match(/\.style/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
