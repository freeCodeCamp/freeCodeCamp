---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: ''
localeTitle: Нажатие элементов влево или вправо с помощью свойства float
---

## Description
<section id="description"> Следующий инструмент позиционирования фактически не использует <code>position</code> , а устанавливает свойство <code>float</code> элемента. Плавающие элементы удаляются из нормального потока документа и перемещаются <code>left</code> или <code>right</code> от содержащего их родительского элемента. Он обычно используется с свойством <code>width</code> чтобы указать, сколько горизонтального пространства требуется для элемента с плавающей точкой. </section>

## Instructions
<section id="instructions"> Данная разметка будет хорошо работать в качестве макета из двух столбцов, с <code>section</code> и в <code>aside</code> элементов рядом друг с другом. Дайте элементу <code>#left</code> <code>float</code> <code>left</code> а элемент <code>#right</code> - <code>float</code> <code>right</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Элемент с id <code>left</code> должен иметь значение <code>float</code> <code>left</code> .
    testString: 'assert($("#left").css("float") == "left", "The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.");'
  - text: Элемент с <code>right</code> id должен иметь значение <code>float</code> <code>right</code> .
    testString: 'assert($("#right").css("float") == "right", "The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  #left {

    width: 50%;
  }
  #right {

    width: 40%;
  }
  aside, section {
    padding: 2px;
    background-color: #ccc;
  }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
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
