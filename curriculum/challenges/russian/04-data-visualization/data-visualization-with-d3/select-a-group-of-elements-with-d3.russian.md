---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
forumTopicId: 301490
localeTitle: Выберите группу элементов с D3
---

## Description
<section id='description'>
D3 также имеет метод <code>selectAll()</code> для выбора группы элементов. Он возвращает массив узлов HTML для всех элементов документа, соответствующих строке ввода. Ниже приведен пример выбора всех якорных тегов в документе: <code>const anchors = d3.selectAll(&quot;a&quot;);</code> Как и метод <code>select()</code> , <code>selectAll()</code> поддерживает цепочку методов, и вы можете использовать ее другими способами.
</section>

## Instructions
<section id='instructions'>
Выберите все теги <code>li</code> в документе и измените их текст на «элемент списка», связав метод <code>.text()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be 3 <code>li</code> elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.
    testString: assert($('li').text().match(/list item/g).length == 3);
  - text: Your code should access the <code>d3</code> object.
    testString: assert(code.match(/d3/g));
  - text: Your code should use the <code>selectAll</code> method.
    testString: assert(code.match(/\.selectAll/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
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
