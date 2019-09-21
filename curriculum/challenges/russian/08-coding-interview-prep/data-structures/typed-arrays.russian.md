---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
forumTopicId: 301716
localeTitle: Типизированные массивы
---

## Description
<section id='description'>
Массивы - это объекты JavaScript, которые могут содержать множество разных элементов. <code>var complexArr = [1, 5, &quot;2&quot;, &quot;Word&quot;, {&quot;name&quot;: &quot;James&quot;}];</code> В основном, что происходит в фоновом режиме, так это то, что ваш браузер автоматически предоставит необходимый объем памяти для этого массива. Он также будет изменяться по мере необходимости, если вы добавите или удалите данные. Тем не менее, в мире высокой производительности и разных типов элементов иногда требуется более конкретная информация о том, сколько памяти передано массиву. Ответы на эту проблему вызывают <dfn>типизированные массивы</dfn> . Теперь вы можете сказать, сколько памяти вы хотите дать массиву. Ниже представлен базовый обзор различных типов доступных массивов и размер в байтах для каждого элемента в этом массиве. <table class="table table-striped"><tbody><tr><th> Тип </th><th> Размер каждого элемента в байтах </th></tr><tr><td> <code>Int8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8ClampedArray</code> </td> <td> 1 </td></tr><tr><td> <code>Int16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Uint16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Int32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Uint32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float64Array</code> </td> <td> 8 </td></tr></tbody></table> Существует два способа создания таких массивов. Один из способов - создать его напрямую. Ниже <code>Int16Array</code> как создать <code>Int16Array</code> длиной 3 длины. <blockquote> var i8 = новый Int16Array (3); <br> console.log (i8); <br> // Возвращает [0, 0, 0] </blockquote> Вы также можете создать <dfn>буфер,</dfn> чтобы указать, сколько данных (в байтах) требуется массиву. <strong>Заметка</strong> <br> Чтобы создать типизированные массивы с использованием буферов, вам необходимо назначить количество байтов кратным байтам, перечисленным выше. <blockquote> // Создаем такой же массив Int16Array по-разному <br> var byteSize = 6; // Требуется быть кратным 2 <br> var buffer = new ArrayBuffer (byteSize); <br> var i8View = новый Int16Array (буфер); <br> buffer.byteLength; // Возвращает 6 <br> i8View.byteLength; // Возвращает 6 <br> console.log (i8View); // Возвращает [0, 0, 0] </blockquote> <dfn>Буферы</dfn> представляют собой объекты общего назначения, которые просто переносят данные. Вы не можете получить к ним доступ в обычном режиме. Чтобы получить к ним доступ, вам нужно сначала создать <dfn>представление</dfn> . <blockquote> i8View [0] = 42; <br> console.log (i8View); // Возвращает [42, 0, 0] </blockquote> <strong>Заметка</strong> <br> Типизированные массивы не имеют некоторых методов, которые имеют традиционные массивы, такие как <code>.pop()</code> или <code>.push()</code> . В типизированных массивах также отсутствует <code>Array.isArray()</code> который проверяет, что-то есть массив. Хотя это проще, это может быть преимуществом для менее сложных JavaScript-движков для их реализации.
</section>

## Instructions
<section id='instructions'>
Сначала создайте <code>buffer</code> размером 64 байта. Затем создайте массив с массивом <code>Int32Array</code> с видом <code>i32View</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>buffer</code> should be 64 bytes large.
    testString: assert(buffer.byteLength === 64);
  - text: Your <code>i32View</code> view of your buffer should be 64 bytes large.
    testString: assert(i32View.byteLength === 64);
  - text: Your <code>i32View</code> view of your buffer should be 16 elements long.
    testString: assert(i32View.length === 16);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var buffer;
var i32View;

```

</div>

</section>

## Solution
<section id='solution'>

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```

</section>
