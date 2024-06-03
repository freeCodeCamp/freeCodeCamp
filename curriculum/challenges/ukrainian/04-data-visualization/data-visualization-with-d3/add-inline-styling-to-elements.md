---
id: 587d7fa7367417b2b2512bc6
title: Додайте вбудовані стилі до елементів
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 дозволяє додати вбудовані стилі CSS до динамічних елементів за допомогою методу `style()`.

Метод `style()` приймає пару ключ-значення, розділену комами, як аргумент. Ось приклад, як змінити колір тексту вибірки на блакитний:

```js
selection.style("color","blue");
```

# --instructions--

Додайте метод `style()` до коду в редакторі, щоб весь зображений текст мав `font-family` зі значенням `verdana`.

# --hints--

Елементи `h2` повинні мати `font-family` зі значенням `verdana`.

```js
assert($('h2').css('font-family') == 'verdana');
```

Код має використати метод `style()`.

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
