---
id: 587d7fab367417b2b2512bda
title: Створення лінійної шкали за допомогою D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

The bar and scatter plot charts both plotted data directly onto the SVG. Однак, якщо висота стовпчика або однієї з точок даних була б більшою за значення висоти або ширини SVG, то вона виходила б за межі області SVG.

У D3 існують шкали, за допомогою яких можна відобразити дані. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. Набір цифр буде в діапазоні мільярдів або трильйонів доларів. Ви надаєте D3 тип шкали, щоб розповісти їй, як потрібно розмістити великі значення ВВП на цій площі розміром 100x500.

Навряд чи ви б створювали необроблені дані так. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your SVG width and height.

D3 має кілька типів шкал. Існує метод D3 `scaleLinear()` для лінійної шкали, який зазвичай використовується з кількісними даними:

```js
const scale = d3.scaleLinear()
```

За замовчуванням шкала використовує зв'язок ідентичності. Значення вхідних даних таке ж, як і значення вихідних даних. В окремому завданні розповідається про те, як це змінити.

# --instructions--

Щоб створити лінійну шкалу потрібно змінити змінну `scale`. Потім встановіть змінну `output` у шкалі, яка викликається з вхідним аргументом `50`.

# --hints--

У `h2` текст повинен бути `50`.

```js
assert($('h2').text() == '50');
```

Ваш код повинен використовувати метод `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

Змінна `output` повинна викликати `scale` з аргументом `50`.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

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
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
