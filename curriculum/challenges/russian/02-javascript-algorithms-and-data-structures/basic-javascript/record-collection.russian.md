---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: ''
localeTitle: Коллекция записей
---

## Description
<section id="description"> Вам предоставляется объект JSON, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет несколько свойств и уникальный идентификационный номер в качестве ключа. Не все альбомы имеют полную информацию. Напишите функцию, которая принимает <code>id</code> альбома (например, <code>2548</code> ), свойство <code>prop</code> (например, <code>&quot;artist&quot;</code> или <code>&quot;tracks&quot;</code> ) и <code>value</code> (например, <code>&quot;Addicted to Love&quot;</code> ) для изменения данных в этой коллекции. Если <code>prop</code> не является <code>&quot;tracks&quot;</code> а <code>value</code> не пусто ( <code>&quot;&quot;</code> ), обновите или установите <code>value</code> для свойства этого альбома записи. Ваша функция всегда должна возвращать весь объект коллекции. Существует несколько правил обработки неполных данных: если <code>prop</code> является <code>&quot;tracks&quot;</code> но альбом не имеет свойства <code>&quot;tracks&quot;</code> , создайте пустой массив перед добавлением нового значения в соответствующее свойство альбома. Если <code>prop</code> - это <code>&quot;tracks&quot;</code> а <code>value</code> не пусто ( <code>&quot;&quot;</code> ), нажмите <code>value</code> в конец существующего массива <code>tracks</code> . Если <code>value</code> пусто ( <code>&quot;&quot;</code> ), удалите данное свойство <code>prop</code> из альбома. <strong>Советы</strong> <br> Используйте <code>bracket notation</code> при <a href="javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">доступе к свойствам объекта с переменными</a> . Push - метод массива, который вы можете прочитать в <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a> . Вы можете обратиться к <a href="javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Манипулированию сложными объектами,</a> представляющими Обозначение <a href="javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">объектов</a> JavaScript (JSON) для обновления. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'После <code>updateRecords(5439, &quot;artist&quot;, &quot;ABBA&quot;)</code> <code>artist</code> должен быть <code>&quot;ABBA&quot;</code>'
    testString: 'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", "After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>");'
  - text: 'После <code>updateRecords(5439, &quot;tracks&quot;, &quot;Take a Chance on Me&quot;)</code> <code>tracks</code> должны иметь <code>&quot;Take a Chance on Me&quot;</code> в качестве последнего элемента.'
    testString: 'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", "After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.");'
  - text: 'После <code>updateRecords(2548, &quot;artist&quot;, &quot;&quot;)</code> <code>artist</code> не должен быть установлен'
    testString: 'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), "After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set");'
  - text: 'После <code>updateRecords(1245, &quot;tracks&quot;, &quot;Addicted to Love&quot;)</code> <code>tracks</code> должны иметь <code>&quot;Addicted to Love&quot;</code> в качестве последнего элемента.'
    testString: 'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", "After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.");'
  - text: 'После <code>updateRecords(2468, &quot;tracks&quot;, &quot;Free&quot;)</code> <code>tracks</code> должны иметь <code>&quot;1999&quot;</code> в качестве первого элемента.'
    testString: 'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", "After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.");'
  - text: 'После <code>updateRecords(2548, &quot;tracks&quot;, &quot;&quot;)</code> <code>tracks</code> не должны устанавливаться'
    testString: 'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), "After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set");'
  - text: 'После <code>updateRecords(1245, &quot;album&quot;, &quot;Riptide&quot;)</code> <code>album</code> должен быть <code>&quot;Riptide&quot;</code>'
    testString: 'assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide", "After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

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
