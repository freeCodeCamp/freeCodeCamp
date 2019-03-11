---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 6
videoUrl: ''
localeTitle: Обновление высоты элемента динамически
---

## Description
<section id="description"> Предыдущие проблемы касались того, как отображать данные из массива и как добавлять классы CSS. Вы можете объединить эти уроки, чтобы создать простую гистограмму. Для этого есть два шага: 1) Создайте <code>div</code> для каждой точки данных в массиве. 2) Дайте каждому <code>div</code> динамическую высоту, используя функцию обратного вызова в методе <code>style()</code> которая устанавливает высоту, равную значению данных. Назовите формат задайте стиль с помощью функции обратного вызова: <code>selection.style(&quot;cssProperty&quot;, (d) =&gt; d)</code> </section>

## Instructions
<section id="instructions"> Добавьте метод <code>style()</code> в код в редакторе, чтобы установить свойство <code>height</code> для каждого элемента. Используйте функцию обратного вызова, чтобы вернуть значение точки данных с добавленной к ней строкой «px». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Первый <code>div</code> должен иметь <code>height</code> 12 пикселей.
    testString: 'assert($("div").eq(0).css("height") == "12px", "The first <code>div</code> should have a <code>height</code> of 12 pixels.");'
  - text: Второй <code>div</code> должен иметь <code>height</code> 31 пиксель.
    testString: 'assert($("div").eq(1).css("height") == "31px", "The second <code>div</code> should have a <code>height</code> of 31 pixels.");'
  - text: Третий <code>div</code> должен иметь <code>height</code> 22 пикселя.
    testString: 'assert($("div").eq(2).css("height") == "22px", "The third <code>div</code> should have a <code>height</code> of 22 pixels.");'
  - text: Четвертый <code>div</code> должен иметь <code>height</code> 17 пикселей.
    testString: 'assert($("div").eq(3).css("height") == "17px", "The fourth <code>div</code> should have a <code>height</code> of 17 pixels.");'
  - text: Пятый <code>div</code> должен иметь <code>height</code> 25 пикселей.
    testString: 'assert($("div").eq(4).css("height") == "25px", "The fifth <code>div</code> should have a <code>height</code> of 25 pixels.");'
  - text: Шестой <code>div</code> должен иметь <code>height</code> 18 пикселей.
    testString: 'assert($("div").eq(5).css("height") == "18px", "The sixth <code>div</code> should have a <code>height</code> of 18 pixels.");'
  - text: Седьмой <code>div</code> должен иметь <code>height</code> 29 пикселей.
    testString: 'assert($("div").eq(6).css("height") == "29px", "The seventh <code>div</code> should have a <code>height</code> of 29 pixels.");'
  - text: Восьмой <code>div</code> должен иметь <code>height</code> 14 пикселей.
    testString: 'assert($("div").eq(7).css("height") == "14px", "The eighth <code>div</code> should have a <code>height</code> of 14 pixels.");'
  - text: Девятый <code>div</code> должен иметь <code>height</code> 9 пикселей.
    testString: 'assert($("div").eq(8).css("height") == "9px", "The ninth <code>div</code> should have a <code>height</code> of 9 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
      .attr("class", "bar")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
