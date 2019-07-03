---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1

videoUrl: ''
localeTitle: Manipulating Complex Objects
---

## Description
<section id='description'>
有时你可能希望将数据存储在灵活的<dfn>数据结构</dfn>中。JavaScript 对象是处理灵活数据的一种方法。它可以储存<dfn>字符串</dfn>，<dfn>数字</dfn>，<dfn>布尔值</dfn>，<dfn>函数</dfn>，和<dfn>对象</dfn>以及这些值的任意组合。
这是一个复杂数据结构的示例：
<blockquote>var ourMusic = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"CD", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cassette", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;"gold": true<br>&nbsp;&nbsp;}<br>];</blockquote>
这是一个对象数组，并且对象有各种关于专辑的 <dfn>详细信息</dfn>。它也有一个嵌套的<code>formats</code>的数组。附加专辑记录可以被添加到数组的最上层。
对象将数据以一种键-值对的形式保存。在上面的示例中，<code>"artist": "Daft Punk"</code>是一个具有<code>"artist"</code>键和<code>"Daft Punk"</code>值的属性。
<a href='http://www.json.org/' target=_blank>JavaScript Object Notation</a> 简称<code>JSON</code>是用于存储数据的相关数据交换格式。
<blockquote>{<br>&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;"CD",<br>&nbsp;&nbsp;&nbsp;&nbsp;"Cassette",<br>&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;"gold": true<br>}</blockquote>
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
  - text: <code>myMusic</code>应该是一个数组
    testString: assert(Array.isArray(myMusic), '<code>myMusic</code>应该是一个数组');
  - text: <code>myMusic</code>应该至少包含两个元素
    testString: assert(myMusic.length > 1, '<code>myMusic</code>应该至少包含两个元素');
  - text: <code>myMusic[1]</code>应该是一个对象
    testString: assert(typeof myMusic[1] === 'object', '<code>myMusic[1]</code>应该是一个对象');
  - text: <code>myMusic[1]</code>至少要包含四个属性
    testString: assert(Object.keys(myMusic[1]).length > 3, '<code>myMusic[1]</code>至少要包含四个属性');
  - text: <code>myMusic[1]</code>应该包含一个类型为字符串的<code>artist</code>的属性
    testString: assert(myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string', '<code>myMusic[1]</code>应该包含一个类型为字符串的<code>artist</code>的属性');
  - text: <code>myMusic[1]</code>应该包含一个类型为字符串的<code>title</code>的属性
    testString: assert(myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string', '<code>myMusic[1]</code>应该包含一个类型为字符串的<code>title</code>的属性');
  - text: <code>myMusic[1]</code>应该包含一个类型为数字的<code>release_year</code> 应该包含一个类型为数字的属性
    testString: assert(myMusic[1].hasOwnProperty('release_year') && typeof myMusic[1].release_year === 'number', '<code>myMusic[1]</code>应该包含一个类型为数字的<code>release_year</code> 应该包含一个类型为数字的属性');
  - text: <code>myMusic[1]</code>应该包含一个类型为数组的<code>formats</code>属性
    testString: assert(myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats), '<code>myMusic[1]</code>应该包含一个类型为数组的<code>formats</code>属性');
  - text: <code>formats</code>应该是一个至少包含两个字符串元素的数组
    testString: assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, '<code>formats</code>应该是一个至少包含两个字符串元素的数组');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














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
              