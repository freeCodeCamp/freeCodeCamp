---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: ''
localeTitle: 记录收集
---

## Description
<section id="description">您将获得一个JSON对象，表示您的音乐专辑集合的一部分。每张专辑都有几个属性和一个唯一的ID号作为其关键。并非所有相册都有完整的信息。写一个功能，它取一个专辑的<code>id</code> （如<code>2548</code> ），一个属性<code>prop</code> （如<code>&quot;artist&quot;</code>或<code>&quot;tracks&quot;</code> ），以及一个<code>value</code> （如<code>&quot;Addicted to Love&quot;</code> ）来修改此集合中的数据。如果<code>prop</code>不是<code>&quot;tracks&quot;</code>且<code>value</code>不为空（ <code>&quot;&quot;</code> ），则更新或设置该记录专辑属性的<code>value</code> 。您的函数必须始终返回整个集合对象。处理不完整数据有几个规则：如果<code>prop</code>是<code>&quot;tracks&quot;</code>但是相册没有<code>&quot;tracks&quot;</code>属性，则在将新值添加到相册的相应属性之前创建一个空数组。如果<code>prop</code>是<code>&quot;tracks&quot;</code>且<code>value</code>不为空（ <code>&quot;&quot;</code> ），则将<code>value</code>推到专辑现有<code>tracks</code>数组的末尾。如果<code>value</code>为空（ <code>&quot;&quot;</code> ），则从相册中删除给定的<code>prop</code>属性。 <strong>提示</strong> <br>使用<a href="learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">变量访问对象属性</a>时使用<code>bracket notation</code> 。 Push是一种可以在<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a>上阅读的数组方法。您可以参考<a href="learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">操作复杂对象</a>介绍JavaScript对象表示法（JSON）进行复习。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '在<code>updateRecords(5439, &quot;artist&quot;, &quot;ABBA&quot;)</code> ， <code>artist</code>应该是<code>&quot;ABBA&quot;</code>'
    testString: 'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", "After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>");'
  - text: '在<code>updateRecords(5439, &quot;tracks&quot;, &quot;Take a Chance on Me&quot;)</code> ， <code>tracks</code>应该以<code>&quot;Take a Chance on Me&quot;</code>作为最后一个元素。'
    testString: 'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", "After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.");'
  - text: '在<code>updateRecords(2548, &quot;artist&quot;, &quot;&quot;)</code> ，不应该设置<code>artist</code>'
    testString: 'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), "After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set");'
  - text: '在<code>updateRecords(1245, &quot;tracks&quot;, &quot;Addicted to Love&quot;)</code> ， <code>tracks</code>应该将<code>&quot;Addicted to Love&quot;</code>作为最后一个元素。'
    testString: 'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", "After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.");'
  - text: '在<code>updateRecords(2468, &quot;tracks&quot;, &quot;Free&quot;)</code> ， <code>tracks</code>应该以<code>&quot;1999&quot;</code>作为第一个元素。'
    testString: 'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", "After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.");'
  - text: '在<code>updateRecords(2548, &quot;tracks&quot;, &quot;&quot;)</code> ，不应设置<code>tracks</code>'
    testString: 'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), "After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set");'
  - text: '在<code>updateRecords(1245, &quot;album&quot;, &quot;Riptide&quot;)</code> ， <code>album</code>应该是<code>&quot;Riptide&quot;</code>'
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
