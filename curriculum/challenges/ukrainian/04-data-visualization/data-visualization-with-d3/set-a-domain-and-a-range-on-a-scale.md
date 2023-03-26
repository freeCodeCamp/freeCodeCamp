---
id: 587d7fac367417b2b2512bdb
title: Налаштування домену й діапазону на шкалі
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

За замовчуванням, масштаби використовують зв'язки ідентичності. Це означає, що вхідне значення відповідає вихідному значенню. Проте масштаби можуть бути набагато гнучкішими та цікавими.

Скажімо, набір даних має значення від 50 до 480. Це вхідна інформація для масштабування, також відома як <dfn>domain</dfn>.

You want to map those points along the `x` axis on the SVG, between 10 units and 500 units. Цю вихідну інформацію також називають <dfn>range</dfn>.

Методи `domain()` та `range()` встановлюють ці значення для шкали. Обидва методи сприймають масив щонайменше двох елементів як аргумент. Наприклад:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

Порядок відображення цих значень у консолі буде таким: `10`, `500`, `323.37` і `807.67`.

Зверніть увагу, що шкала використовує лінійний зв'язок між доменом і значеннями діапазону, щоб визначити виведення для заданого числа. Мінімальне значення в домені (50) відповідає мінімальному значенню у діапазоні (10).

# --instructions--

Створіть шкалу і задайте значення домену `[250, 500]`, а діапазону - `[10, 150]`.

**Примітка:** Ви можете прив'язати домен `domain()` та методи `range()` до змінної `scale`.

# --hints--

Використовуйте метод `domain()` для вашого коду.

```js
assert(code.match(/\.domain/g));
```

Домен `domain()` в діапазоні `scale` повинен мати значення `[250, 500]`.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

Використовуйте метод `range()` для вашого коду.

```js
assert(code.match(/\.range/g));
```

Значення `range()` діапазону `scale` повинно бути встановлено як `[10, 150]`.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

Текст заголовку `h2` повинен мати розмір `-102`.

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
