---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
forumTopicId: 301489
localeTitle: Узнайте о SVG в D3
---

## Description
<section id='description'>
SVG означает <code>Scalable Vector Graphics</code> . Здесь «масштабируемый» означает, что если вы увеличиваете или уменьшаете масштаб объекта, он не будет отображаться в пикселях. Он масштабируется с помощью системы отображения, будь то на маленьком мобильном экране или большом ТВ-мониторе. SVG используется для создания общих геометрических фигур. Поскольку D3 отображает данные в визуальное представление, он использует SVG для создания фигур для визуализации. Формы SVG для веб-страницы должны <code>svg</code> теге HTML <code>svg</code> . CSS может быть масштабируемым, когда стили используют относительные единицы (например, <code>vh</code> , <code>vw</code> или проценты), но использование SVG более гибко для создания визуализации данных.
</section>

## Instructions
<section id='instructions'>
Добавьте узел <code>svg</code> в <code>body</code> используя <code>append()</code> . Дайте ему атрибут <code>width</code> установленный для предоставленного <code>w</code> константы, и атрибут <code>height</code> установленный для предоставленной постоянной <code>h</code> используя метод <code>attr()</code> для каждого. Вы увидите его на выходе, потому что в теге <code>style</code> используется <code>background-color</code> розового <code>background-color</code> . <strong>Заметка</strong> <br> Атрибуты ширины и высоты не имеют единиц. Это строительный блок масштабирования - элемент всегда будет иметь соотношение ширины и высоты 5: 1, независимо от уровня масштабирования.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 1 <code>svg</code> element.
    testString: assert($('svg').length == 1);
  - text: The <code>svg</code> element should have a <code>width</code> attribute set to 500 or styled to have a width of 500px.
    testString: assert($('svg').attr('width') == '500'||$('svg').css('width') == '500px');
  - text: The <code>svg</code> element should have a <code>height</code> attribute set to 100 or styled to have a height of 100px.
    testString: assert($('svg').attr('height') == '100'||$('svg').css('height') == '100px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
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
