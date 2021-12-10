---
id: 587d7fa7367417b2b2512bc8
title: Додавання класів з D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

Багатьма вбудованими стилями в елементах HTML важко управляти, навіть у менших застосунках. Простіше додати клас до елементів та стилізувати його, використовуючи правила CSS. D3 має метод `attr()`, що дає змогу додавати будь-який атрибут HTML до елемента, включно ім'я класу.

Метод `attr()` працює так само, як і `style()`. Він застосовує значення, розділені комою, і може використовувати функцію зворотного виклику (callback function). Ось приклад того, як додати клас `container` до вибраного:

```js
selection.attr("class", "container");
```

Зауважте, що параметр `class` залишиться таким же, коли потрібно додати клас, і лише параметр `container` зміниться.

# --instructions--

Додайте метод `attr()` до коду в редакторі і застосуйте клас `bar` до елементів `div`.

# --hints--

Елементи `div` повинні мати клас `bar`.

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

Ваш код має застосовувати метод `attr()`.

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
