---
id: 587d78a4367417b2b2512ad2
title: Дізнайтеся більше про третинні кольори (Tertiary)
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

Комп'ютерні монітори та екрани пристрою створюють різні кольори, поєднуючи кількість червоного, зеленого та синього світла. У сучасній теорії кольорів це відоме як додаткова колірна модель RGB. Червоний (red - R), зелений (green - G) та синій (blue - B) — основні кольори. Змішування двох основних кольорів створює вторинні кольори: блакитний (G + B), пурпурний (R + B) і жовтий (R + G). Ви бачили ці кольори у завданні про дадаткові кольори. Ці вторинні кольори є доповненням до основного кольору, який не використовується при їх створенні, і є протилежними до основного кольору на колірному колі. Наприклад, пурпуровий — це колір від змішування червоного та синього кольорів і є компліментарним кольором до зеленого.

Третинні кольори є результатом поєднання основного кольору з одним із вторинним сусіднім кольором. Наприклад, у колірній моделі RGB червоний (первинний колір) та жовтий (вторинний колір) утворюють оранжевий (третинний колір). Це додасть ще шість кольорів до простого колірного кола загалом їх дванадцять.

Існують різні методи вибору різних кольорів, що в результаті стають гармонійним поєднанням дизайну. Наприклад, використання третинних кольорів можливе у спліт-додатковій колірній схемі. Ця схема починається з базового кольору, а потім поєднується з двома кольорами, які є сусідніми до його протилежного кольору. Ці три кольори утворюють сильний зоровий контраст у дизайні, але є менш вираженими, ніж використання двох доповняльних кольорів.

Три кольори утворені за допомогою комплементарної схеми:

<table class='table table-striped'><thead><tr><th>Колір</th><th>Шістнадцятковий код кольору</th></tr></thead><thead></thead><tbody><tr><td>оранжевий</td><td>#FF7F00</td></tr><tr><td>бірюзовий</td><td>#00FFFF</td></tr><tr><td>малиновий</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

Змініть характеристики класів `background-color`, `orange`, `cyan` і `raspberry` на відповідні кольори. Переконайтеся, що ви використовуєте шістнадцяткові коди, а не назви кольорів.

# --hints--

У `div` елементу класу `orange` повинен бути оранжевий `background-color`.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

У `div` елементу класу `cyan` фоновий колір має бути бірюзовий `background-color`.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

У `div` елементу класу `raspberry` повинен бути малиновий `background-color`.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

Усі значення `background-color` для класів кольорів мають бути шістнадцятковими кодами, а не назвами кольорів.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
