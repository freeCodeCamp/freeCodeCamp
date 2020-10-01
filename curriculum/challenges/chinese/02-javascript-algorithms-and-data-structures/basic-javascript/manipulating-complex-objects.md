---
id: 56533eb9ac21ba0edf2244cb
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
title: 操作复杂对象
---

## Description
<section id='description'>
有时你可能希望将数据存储在灵活的<dfn>数据结构</dfn>中。JavaScript 对象是处理灵活数据的一种方法。它可以储存<dfn>字符串</dfn>，<dfn>数字</dfn>，<dfn>布尔值</dfn>，<dfn>函数</dfn>，和<dfn>对象</dfn>以及这些值的任意组合。
这是一个复杂数据结构的示例：

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

这是一个对象数组，并且对象有各种关于专辑的 <dfn>详细信息</dfn>。它也有一个嵌套的<code>formats</code>的数组。附加专辑记录可以被添加到数组的最上层。
对象将数据以一种键-值对的形式保存。在上面的示例中，<code>"artist": "Daft Punk"</code>是一个具有<code>"artist"</code>键和<code>"Daft Punk"</code>值的属性。
<a href='http://www.json.org/' target=_blank>JavaScript Object Notation</a> 简称<code>JSON</code>是用于存储数据的相关数据交换格式。

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

<strong>提示</strong><br>数组中有多个 JSON 对象的时候，对象与对象之间要用逗号隔开。
</section>

## Instructions
<section id='instructions'>
添加一个新专辑到<code>myMusic</code>的JSON对象。添加<code>artist</code>和<code>title</code>字符串，<code>release_year</code>数字和<code>formats</code>字符串数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myMusic</code>应该是一个数组。
    testString: assert(Array.isArray(myMusic));
  - text: <code>myMusic</code>应该至少包含两个元素。
    testString: assert(myMusic.length > 1);
  - text: <code>myMusic[1]</code>应该是一个对象。
    testString: assert(typeof myMusic[1] === 'object');
  - text: <code>myMusic[1]</code>至少要包含四个属性。
    testString: assert(Object.keys(myMusic[1]).length > 3);
  - text: <code>myMusic[1]</code>应该包含一个类型为字符串的<code>artist</code>的属性。
    testString: assert(myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string');
  - text: <code>myMusic[1]</code>应该包含一个类型为字符串的<code>title</code>的属性。
    testString: assert(myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string');
  - text: <code>myMusic[1]</code>应该包含一个类型为数字的<code>release_year</code> 应该包含一个类型为数字的属性。
    testString: assert(myMusic[1].hasOwnProperty('release_year') && typeof myMusic[1].release_year === 'number');
  - text: <code>myMusic[1]</code>应该包含一个类型为数组的<code>formats</code>属性。
    testString: assert(myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats));
  - text: <code>formats</code>应该是一个至少包含两个字符串元素的数组。
    testString: assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1);

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
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```

</section>
