---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
forumTopicId: 301497
localeTitle: Работа с данными в D3
---

## Description
<section id='description'>
Библиотека D3 фокусируется на подходе, основанном на данных. Когда у вас есть набор данных, вы можете применить методы D3, чтобы отобразить их на странице. Данные поступают во многих форматах, но этот вызов использует простой массив чисел. Первый шаг - сделать D3 осведомленным о данных. Метод <code>data()</code> используется для выбора элементов DOM для привязки данных к этим элементам. Набор данных передается в качестве аргумента методу. Общий шаблон рабочего процесса - создать новый элемент в документе для каждой части данных в наборе. Для этой цели D3 имеет метод <code>enter()</code> . Когда метод <code>enter()</code> комбинируется с методом <code>data()</code> , он просматривает выбранные элементы со страницы и сравнивает их с количеством элементов данных в наборе. Если элементов меньше, чем элементов данных, это создает недостающие элементы. Вот пример, который выбирает элемент <code>ul</code> и создает новый элемент списка в зависимости от количества записей в массиве: <blockquote> &lt;Тело&gt; <br> &lt;UL&gt; &lt;/ UL&gt; <br> &lt;Скрипт&gt; <br> const dataset = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; <br> d3.select ( &quot;UL&quot;). SelectAll ( &quot;Ли&quot;) <br> .data (набор данных) <br> .войти() <br> .append ( &quot;Ли&quot;) <br> .text («Новый элемент»); <br> &lt;/ Скрипт&gt; <br> &lt;/ Body&gt; </blockquote> Может показаться странным выбирать элементы, которые еще не существуют. Этот код сообщает D3, чтобы сначала выбрать <code>ul</code> на странице. Затем выберите все элементы списка, которые возвращают пустой выбор. Затем метод <code>data()</code> проверяет набор данных и запускает следующий код три раза, один раз для каждого элемента массива. Метод <code>enter()</code> видит, что на странице нет элементов <code>li</code> , но для этого требуется 3 (по одному для каждой части данных в <code>dataset</code> ). Новые элементы <code>li</code> добавляются в <code>ul</code> и имеют текст «Новый элемент».
</section>

## Instructions
<section id='instructions'>
Выберите узел <code>body</code> , затем выберите все элементы <code>h2</code> . Создайте D3 и добавьте тег <code>h2</code> для каждого элемента массива <code>dataset</code> . Текст в <code>h2</code> должен содержать «Новое название». Ваш код должен использовать методы <code>data()</code> и <code>enter()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 9 <code>h2</code> elements.
    testString: assert($('h2').length == 9);
  - text: The text in the <code>h2</code> elements should say "New Title". The capitalization and spacing should match exactly.
    testString: assert($('h2').text().match(/New Title/g).length == 9);
  - text: Your code should use the <code>data()</code> method.
    testString: assert(code.match(/\.data/g));
  - text: Your code should use the <code>enter()</code> method.
    testString: assert(code.match(/\.enter/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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
