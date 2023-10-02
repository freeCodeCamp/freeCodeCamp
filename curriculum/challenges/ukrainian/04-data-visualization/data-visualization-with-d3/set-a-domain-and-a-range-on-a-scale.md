---
id: 587d7fac367417b2b2512bdb
title: Встановіть домен та діапазон на шкалі
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

За замовчуванням шкала використовує зв’язок ідентичності. Це означає, що вхідне значення відповідає вихідному значенню. Проте шкали можуть бути набагато гнучкішими та цікавішими.

Скажімо, набір даних має значення від 50 до 480. Це вхідна інформація для шкали, також відома як <dfn>домен</dfn>.

Ці точки потрібно відтворити вздовж осі `x` на SVG у діапазоні від 10 до 500 одиниць. Це вихідна інформація, яку також називають <dfn>діапазоном</dfn>.

Методи `domain()` та `range()` встановлюють ці значення для шкали. Обидва методи приймають масив з принаймні двох елементів як аргумент. Наприклад:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

Значення на консолі будуть в такому порядку: `10`, `500`, `323.37` та `807.67`.

Зверніть увагу, що шкала використовує лінійний зв’язок між значеннями домену і діапазону, щоб визначити виведення для заданого числа. Мінімальне значення в домені (50) відповідає мінімальному значенню у діапазоні (10).

# --instructions--

Створіть шкалу та встановіть її домен на `[250, 500]`, а діапазон — на `[10, 150]`.

**Примітка:** ви можете приєднати методи `domain()` та `range()` до змінної `scale`.

# --hints--

Код має використати метод `domain()`.

```js
assert(code.match(/\.domain/g));
```

`domain()` до `scale` повинен мати значення `[250, 500]`.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

Код має використати метод `range()`.

```js
assert(code.match(/\.range/g));
```

`range()` до `scale` повинен мати значення `[10, 150]`.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

Текстом елемента `h2` має бути `-102`.

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
