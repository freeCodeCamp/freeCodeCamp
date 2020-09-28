---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mpysg'
forumTopicId: 18261
localeTitle: 记录集合
---

## Description
<section id='description'>
给定一个 JSON 对象，用来表示部分音乐专辑收藏。每张专辑都有几个属性和一个唯一的 id 号作为键值。并非所有专辑都有完整的信息。
写一个函数，根据传入的<code>id</code>（如<code>2548</code>）、<code>prop</code>（属性，如<code>"artist"</code>或<code>"tracks"</code>）以及<code>value</code>（值，如<code>"Addicted to Love"</code>）来修改音乐专辑收藏的数据。
如果属性<code>prop</code>不是<code>"tracks"</code>且值<code>value</code>不为空（<code>""</code>），则更新或设置该专辑属性的值<code>value</code>。
你的函数必须始终返回整个音乐专辑集合对象。
处理不完整数据有几条规则：
如果属性<code>prop</code>是<code>"tracks"</code>，但是专辑没有<code>"tracks"</code>属性，则在添加值之前先给<code>"tracks"</code>创建一个空数组。
如果<code>prop</code>是<code>"tracks"</code>，并且值<code>value</code>不为空（<code>""</code>）， 把值<code>value</code>添加到<code>tracks</code>数组中。
如果值<code>value</code>为空（<code>""</code>），则删除专辑的这一属性<code>prop</code>
<strong>提示：</strong><br><a href="javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">通过变量访问对象的属性</a>时，应使用<code>中括号</code>。
Push 是一个数组方法，详情请查看<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a>.
你可以参考<a href="/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">操作复杂对象</a>这一节的内容复习相关知识。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 执行<code>updateRecords(5439, "artist", "ABBA")</code>后，<code>artist</code>属性值应该是<code>"ABBA"</code>。
    testString: 'assert(code.match(/var collection = {\s*2548: {\s*album: "Slippery When Wet",\s*artist: "Bon Jovi",\s*tracks: \[\s*"Let It Rock",\s*"You Give Love a Bad Name"\s*\]\s*},\s*2468: {\s*album: "1999",\s*artist: "Prince",\s*tracks: \[\s*"1999",\s*"Little Red Corvette"\s*\]\s*},\s*1245: {\s*artist: "Robert Palmer",\s*tracks: \[ \]\s*},\s*5439: {\s*album: "ABBA Gold"\s*}\s*};/g));'
  - text: 执行<code>updateRecords(5439, "artist", "ABBA")</code>后，<code>artist</code> 最后的元素应该是 <code>"ABBA"</code>。
    testString: assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA");
  - text: 执行 <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code> 后，<code>tracks</code> 最后的元素应该是 <code>"Take a Chance on Me"</code>。
    testString: assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me");
  - text: 执行<code>updateRecords(2548, "artist", "")</code>后，<code>artist</code>不应被创建。
    testString: updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"));
  - text: 执行<code>updateRecords(1245, "tracks", "Addicted to Love")</code>后，<code>tracks</code>最后的元素应该是<code>"Addicted to Love"</code>。
    testString: assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love");
  - text: 执行<code>updateRecords(2468, "tracks", "Free")</code>后，<code>tracks</code>第一个元素应该是<code>"1999"</code>。
    testString: assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999");
  - text: 执行<code>updateRecords(2548, "tracks", "")</code>后，<code>tracks</code>不应被创建。
    testString: updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"));
  - text: 执行<code>updateRecords(1245, "album", "Riptide")</code>后，<code>album</code>应该是<code>"Riptide"</code>。
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
