---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: ''
localeTitle: Манипулирование сложными объектами
---

## Description
<section id="description"> Иногда вы можете хранить данные в гибкой <dfn>структуре данных</dfn> . Объект JavaScript - это один из способов обработки гибких данных. Они допускают произвольные комбинации <dfn>строк</dfn> , <dfn>чисел</dfn> , <dfn>булевых элементов</dfn> , <dfn>массивов</dfn> , <dfn>функций</dfn> и <dfn>объектов</dfn> . Вот пример сложной структуры данных: <blockquote> var ourMusic = [ <br> { <br> «художник»: «Daft Punk», <br> «title»: «Домашнее задание», <br> &quot;release_year&quot;: 1997, <br> «Форматы»: [ <br> &quot;CD&quot;, <br> &quot;Кассета&quot;, <br> &quot;LP&quot; <br> ], <br> &quot;gold&quot;: true <br> } <br> ]; </blockquote> Это массив, содержащий один объект внутри. Объект имеет различные фрагменты <dfn>метаданных</dfn> об альбоме. Он также имеет вложенный массив <code>&quot;formats&quot;</code> . Если вы хотите добавить больше записей альбомов, вы можете сделать это, добавив записи в массив верхнего уровня. Объекты хранят данные в свойстве, которое имеет формат ключа. В приведенном выше примере <code>&quot;artist&quot;: &quot;Daft Punk&quot;</code> - это свойство, которое имеет ключ от <code>&quot;artist&quot;</code> и значение <code>&quot;Daft Punk&quot;</code> . <a href="http://www.json.org/" target="_blank">Обозначение объекта JavaScript</a> или <code>JSON</code> - это связанный с ними формат обмена данными, используемый для хранения данных. <blockquote> { <br> «художник»: «Daft Punk», <br> «title»: «Домашнее задание», <br> &quot;release_year&quot;: 1997, <br> «Форматы»: [ <br> &quot;CD&quot;, <br> &quot;Кассета&quot;, <br> &quot;LP&quot; <br> ], <br> &quot;gold&quot;: true <br> } </blockquote> <strong>Заметка</strong> <br> Вам нужно будет поместить запятую после каждого объекта в массиве, если это не последний объект в массиве. </section>

## Instructions
<section id="instructions"> Добавьте новый альбом в массив <code>myMusic</code> . Добавьте строки <code>artist</code> и <code>title</code> , номер <code>release_year</code> и массив <code>formats</code> строк. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myMusic</code> должен быть массивом
    testString: 'assert(Array.isArray(myMusic), "<code>myMusic</code> should be an array");'
  - text: <code>myMusic</code> должен иметь как минимум два элемента
    testString: 'assert(myMusic.length > 1, "<code>myMusic</code> should have at least two elements");'
  - text: '<code>myMusic[1]</code> должен быть объектом'
    testString: 'assert(typeof myMusic[1] === "object", "<code>myMusic[1]</code> should be an object");'
  - text: '<code>myMusic[1]</code> должен иметь не менее 4 свойств'
    testString: 'assert(Object.keys(myMusic[1]).length > 3, "<code>myMusic[1]</code> should have at least 4 properties");'
  - text: '<code>myMusic[1]</code> должен содержать свойство <code>artist</code> которое является строкой'
    testString: 'assert(myMusic[1].hasOwnProperty("artist") && typeof myMusic[1].artist === "string", "<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string");'
  - text: '<code>myMusic[1]</code> должен содержать свойство <code>title</code> которое является строкой'
    testString: 'assert(myMusic[1].hasOwnProperty("title") && typeof myMusic[1].title === "string", "<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string");'
  - text: '<code>myMusic[1]</code> должен содержать свойство <code>release_year</code> которое является числом'
    testString: 'assert(myMusic[1].hasOwnProperty("release_year") && typeof myMusic[1].release_year === "number", "<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number");'
  - text: '<code>myMusic[1]</code> должен содержать <code>formats</code> свойство , которое является массивом'
    testString: 'assert(myMusic[1].hasOwnProperty("formats") && Array.isArray(myMusic[1].formats), "<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array");'
  - text: <code>formats</code> должны быть массивом строк с не менее чем двумя элементами
    testString: 'assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, "<code>formats</code> should be an array of strings with at least two elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
