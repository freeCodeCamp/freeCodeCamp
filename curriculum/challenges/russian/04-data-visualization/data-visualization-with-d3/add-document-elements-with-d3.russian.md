---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
forumTopicId: 301474
localeTitle: Добавление элементов документа с помощью D3
---

## Description
<section id='description'>
D3 имеет несколько методов, которые позволяют добавлять и изменять элементы в документе. Метод <code>select()</code> выбирает один элемент из документа. Он принимает аргумент для имени нужного элемента и возвращает узел HTML для первого элемента в документе, который соответствует имени. Вот пример: <code>const anchor = d3.select(&quot;a&quot;);</code> Приведенный выше пример находит первый якорный тег на странице и сохраняет узел HTML для него в переменном <code>anchor</code> . Вы можете использовать выделение с помощью других методов. Часть «d3» в примере является ссылкой на объект D3, так как вы получаете доступ к методам D3. Два других полезных метода: <code>append()</code> и <code>text()</code> . Метод <code>append()</code> принимает аргумент для элемента, который вы хотите добавить в документ. Он добавляет узел HTML к выбранному элементу и возвращает дескриптор этого узла. Метод <code>text()</code> либо задает текст выбранного узла, либо получает текущий текст. Чтобы установить значение, вы передаете строку в качестве аргумента внутри круглых скобок метода. Вот пример, который выбирает неупорядоченный список, добавляет элемент списка и добавляет текст: <blockquote> d3.select ( &quot;UL&quot;) <br> .append ( &quot;Ли&quot;) <br> .text («Очень важный элемент»); </blockquote> D3 позволяет объединять несколько методов вместе с периодами для выполнения ряда действий в строке.
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>select</code> для выбора тега <code>body</code> в документе. Затем <code>append</code> к нему тег <code>h1</code> и добавьте текст «Learning D3» в элемент <code>h1</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>body</code> should have one <code>h1</code> element.
    testString: assert($('body').children('h1').length == 1);
  - text: The <code>h1</code> element should have the text "Learning D3" in it.
    testString: assert($('h1').text() == "Learning D3");
  - text: Your code should access the <code>d3</code> object.
    testString: assert(code.match(/d3/g));
  - text: Your code should use the <code>select</code> method.
    testString: assert(code.match(/\.select/g));
  - text: Your code should use the <code>append</code> method.
    testString: assert(code.match(/\.append/g));
  - text: Your code should use the <code>text</code> method.
    testString: assert(code.match(/\.text/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
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
