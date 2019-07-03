---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1

videoUrl: ''
localeTitle: Record Collection
---

## Description
<section id='description'>
正如我们在前面的例子所见，对象可以嵌套对象和数组。与访问嵌套对象一样，用中括号操作符同样可以访问嵌套数组。
下面是如何访问嵌套数组的例子：
<blockquote>var ourPets = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "cat",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Meowzer",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fluffy",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Kit-Cat"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "dog",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Spot",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Bowser",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Frankie"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;}<br>];<br>ourPets[0].names[1]; // "Fluffy"<br>ourPets[1].names[0]; // "Spot"</blockquote>
</section>

## Instructions
<section id='instructions'>
使用点操作符和中括号操作符来检索变量<code>myPlants</code>的第二棵树。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "执行<code>updateRecords(5439, 'artist', 'ABBA')</code>后，<code>artist</code>属性值应该是<code>'ABBA'</code>"
    testString: collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", '执行<code>updateRecords(5439, "artist", "ABBA")</code>，后<code>artist</code>属性值应该是<code>"ABBA"</code>');
  - text: "执行<code>updateRecords(5439, 'tracks', 'Take a Chance on Me')</code>后，<code>tracks</code>最后的元素应该是<code>'Take a Chance on Me'</code>"
    testString: assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", '执行<code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>，后<code>tracks</code>最后的元素应该是<code>"Take a Chance on Me"</code>');
  - text: "执行<code>updateRecords(2548, 'artist', '')</code>后，<code>artist</code>不应被创建"
    testString: updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), '执行<code>updateRecords(2548, "artist", "")</code>，后<code>artist</code>不应被创建');
  - text: "执行<code>updateRecords(1245, 'tracks', 'Addicted to Love')</code>后，<code>tracks</code>最后的元素应该是<code>'Addicted to Love'</code>"
    testString: assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", '执行<code>updateRecords(1245, "tracks", "Addicted to Love")</code>，后<code>tracks</code>最后的元素应该是<code>"Addicted to Love"</code>');
  - text: "执行<code>updateRecords(2468, 'tracks', 'Free')</code>后，<code>tracks</code>第一个元素应该是<code>'1999'</code>"
    testString: assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", '执行<code>updateRecords(2468, "tracks", "Free")</code>，后<code>tracks</code>第一个元素应该是<code>"1999"</code>');
  - text: "执行<code>updateRecords(2548, 'tracks', '')</code>后，<code>tracks</code>不应被创建"
    testString: updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), '执行<code>updateRecords(2548, "tracks", "")</code>，后<code>tracks</code>应该被创建');
  - text: "执行<code>updateRecords(1245, 'album', 'Riptide')</code>后，<code>album</code>应该是<code>'Riptide'</code>"
    testString: assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide", 'After <code>updateRecords(1245, "album", "Riptide")</code>，后<code>album</code>应该是<code>"Riptide"</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
;(function(x) { return "collection = \n" + JSON.stringify(x, '\n', 2); })(collection);
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
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请把你的代码写在这条注释以下
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
              