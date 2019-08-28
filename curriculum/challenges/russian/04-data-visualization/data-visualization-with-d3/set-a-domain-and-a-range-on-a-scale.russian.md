---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
forumTopicId: 301491
localeTitle: Установка домена и диапазона по шкале
---

## Description
<section id='description'>
По умолчанию шкалы используют отношение идентичности - входное значение сопоставляется с выходным значением. Но масштабы могут быть гораздо более гибкими и интересными. Скажем, набор данных имеет значения от 50 до 480. Это входная информация для шкалы и также известна как домен. Вы хотите сопоставить эти точки вдоль оси <code>x</code> на холсте SVG, между 10 единицами и 500 единицами. Это выходная информация, которая также известна как диапазон. Методы <code>domain()</code> и <code>range()</code> задают эти значения для шкалы. Оба метода принимают в качестве аргумента массив из по меньшей мере двух элементов. Вот пример: <blockquote> // Установить домен <br> // Область охватывает набор входных значений <br> scale.domain ([50, 480]); <br> // Установить диапазон <br> // Диапазон охватывает набор выходных значений <br> scale.range ([10, 500]); <br> масштаб (50) // Возвращает 10 <br> масштаб (480) // Возвращает 500 <br> масштаб (325) // Возвращает 323.37 <br> масштаб (750) // Возвращает 807.67 <br> d3.scaleLinear () </blockquote> Обратите внимание, что шкала использует линейную зависимость между областью и значениями диапазона, чтобы выяснить, какой результат должен быть для данного номера. Минимальное значение в области (50) соответствует минимальному значению (10) в диапазоне.
</section>

## Instructions
<section id='instructions'>
Создайте масштаб и установите его домен в <code>[250, 500]</code> и диапазон до <code>[10, 150]</code> . <strong>Заметка</strong> <br> Вы можете связать методы <code>domain()</code> и <code>range()</code> с переменной <code>scale</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>domain()</code> method.
    testString: assert(code.match(/\.domain/g));
  - text: The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.
    testString: assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
  - text: Your code should use the <code>range()</code> method.
    testString: assert(code.match(/\.range/g));
  - text: The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.
    testString: assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
  - text: The text in the <code>h2</code> should be -102.
    testString: assert($('h2').text() == '-102');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
