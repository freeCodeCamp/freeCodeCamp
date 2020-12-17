---
id: 56533eb9ac21ba0edf2244cb
title: 操作复杂对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
---

# --description--

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

这是一个对象数组，并且对象有各种关于专辑的 <dfn>详细信息</dfn>。它也有一个嵌套的`formats`的数组。附加专辑记录可以被添加到数组的最上层。 对象将数据以一种键-值对的形式保存。在上面的示例中，`"artist": "Daft Punk"`是一个具有`"artist"`键和`"Daft Punk"`值的属性。 [JavaScript Object Notation](http://www.json.org/) 简称`JSON`是用于存储数据的相关数据交换格式。

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

**提示**  
数组中有多个 JSON 对象的时候，对象与对象之间要用逗号隔开。

# --instructions--

添加一个新专辑到`myMusic`的JSON对象。添加`artist`和`title`字符串，`release_year`数字和`formats`字符串数组。

# --hints--

`myMusic`应该是一个数组。

```js
assert(Array.isArray(myMusic));
```

`myMusic`应该至少包含两个元素。

```js
assert(myMusic.length > 1);
```

`myMusic[1]`应该是一个对象。

```js
assert(typeof myMusic[1] === 'object');
```

`myMusic[1]`至少要包含四个属性。

```js
assert(Object.keys(myMusic[1]).length > 3);
```

`myMusic[1]`应该包含一个类型为字符串的`artist`的属性。

```js
assert(
  myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string'
);
```

`myMusic[1]`应该包含一个类型为字符串的`title`的属性。

```js
assert(
  myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string'
);
```

`myMusic[1]`应该包含一个类型为数字的`release_year` 应该包含一个类型为数字的属性。

```js
assert(
  myMusic[1].hasOwnProperty('release_year') &&
    typeof myMusic[1].release_year === 'number'
);
```

`myMusic[1]`应该包含一个类型为数组的`formats`属性。

```js
assert(
  myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats)
);
```

`formats`应该是一个至少包含两个字符串元素的数组。

```js
assert(
  myMusic[1].formats.every(function (item) {
    return typeof item === 'string';
  }) && myMusic[1].formats.length > 1
);
```

# --solutions--

