---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: https://scrimba.com/c/c4mpysg
forumTopicId: 18261
localeTitle: Коллекция записей
---

## Description
<section id='description'>
Вам предоставляется объект JSON, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет несколько свойств и уникальный идентификационный номер в качестве ключа. Не все альбомы имеют полную информацию. Напишите функцию, которая принимает <code>id</code> альбома (например, <code>2548</code> ), свойство <code>prop</code> (например, <code>&quot;artist&quot;</code> или <code>&quot;tracks&quot;</code> ) и <code>value</code> (например, <code>&quot;Addicted to Love&quot;</code> ) для изменения данных в этой коллекции. Если <code>prop</code> не является <code>&quot;tracks&quot;</code> а <code>value</code> не пусто ( <code>&quot;&quot;</code> ), обновите или установите <code>value</code> для свойства этого альбома записи. Ваша функция всегда должна возвращать весь объект коллекции. Существует несколько правил обработки неполных данных: если <code>prop</code> является <code>&quot;tracks&quot;</code> но альбом не имеет свойства <code>&quot;tracks&quot;</code> , создайте пустой массив перед добавлением нового значения в соответствующее свойство альбома. Если <code>prop</code> - это <code>&quot;tracks&quot;</code> а <code>value</code> не пусто ( <code>&quot;&quot;</code> ), нажмите <code>value</code> в конец существующего массива <code>tracks</code> . Если <code>value</code> пусто ( <code>&quot;&quot;</code> ), удалите данное свойство <code>prop</code> из альбома. <strong>Советы</strong> <br> Используйте <code>bracket notation</code> при <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">доступе к свойствам объекта с переменными</a> . Push - метод массива, который вы можете прочитать в <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a> . Вы можете обратиться к <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Манипулированию сложными объектами,</a> представляющими Обозначение <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">объектов</a> JavaScript (JSON) для обновления.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change the <code>collection</code> object's initialization
    testString: 'assert(code.match(/var collection = {\s*2548: {\s*album: "Slippery When Wet",\s*artist: "Bon Jovi",\s*tracks: \[\s*"Let It Rock",\s*"You Give Love a Bad Name"\s*\]\s*},\s*2468: {\s*album: "1999",\s*artist: "Prince",\s*tracks: \[\s*"1999",\s*"Little Red Corvette"\s*\]\s*},\s*1245: {\s*artist: "Robert Palmer",\s*tracks: \[ \]\s*},\s*5439: {\s*album: "ABBA Gold"\s*}\s*};/g));'
  - text: After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>
    testString: assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA");
  - text: After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.
    testString: assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me");
  - text: After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set
    testString: updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"));
  - text: After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.
    testString: assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love");
  - text: After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.
    testString: assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999");
  - text: After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set
    testString: updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"));
  - text: After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>
    testString: assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

```

</div>

</section>

## Solution
<section id='solution'>

```js
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value === "") delete collection[id][prop];
  else if(prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
```

</section>
