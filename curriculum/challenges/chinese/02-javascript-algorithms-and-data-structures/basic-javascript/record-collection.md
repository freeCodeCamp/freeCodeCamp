---
id: 56533eb9ac21ba0edf2244cf
title: 记录集合
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mpysg'
forumTopicId: 18261
---

# --description--

给定一个 JSON 对象，用来表示部分音乐专辑收藏。每张专辑都有几个属性和一个唯一的 id 号作为键值。并非所有专辑都有完整的信息。

写一个函数，根据传入的`id`（如`2548`）、`prop`（属性，如`"artist"`或`"tracks"`）以及`value`（值，如`"Addicted to Love"`）来修改音乐专辑收藏的数据。

如果属性`prop`不是`"tracks"`且值`value`不为空（`""`），则更新或设置该专辑属性的值`value`。

你的函数必须始终返回整个音乐专辑集合对象。

处理不完整数据有几条规则：

如果属性`prop`是`"tracks"`，但是专辑没有`"tracks"`属性，则在添加值之前先给`"tracks"`创建一个空数组。

如果`prop`是`"tracks"`，并且值`value`不为空（`""`）， 把值`value`添加到`tracks`数组中。

如果值`value`为空（`""`），则删除专辑的这一属性`prop`

**提示：**  
[通过变量访问对象的属性](javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables)时，应使用`中括号`。

Push 是一个数组方法，详情请查看[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

你可以参考[操作复杂对象](/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects)这一节的内容复习相关知识。

# --hints--

执行`updateRecords(5439, "artist", "ABBA")`后，`artist`属性值应该是`"ABBA"`。

```js
assert(
  code.match(
    /var collection = {\s*2548: {\s*album: "Slippery When Wet",\s*artist: "Bon Jovi",\s*tracks: \[\s*"Let It Rock",\s*"You Give Love a Bad Name"\s*\]\s*},\s*2468: {\s*album: "1999",\s*artist: "Prince",\s*tracks: \[\s*"1999",\s*"Little Red Corvette"\s*\]\s*},\s*1245: {\s*artist: "Robert Palmer",\s*tracks: \[ \]\s*},\s*5439: {\s*album: "ABBA Gold"\s*}\s*};/g
  )
);
```

执行`updateRecords(5439, "artist", "ABBA")`后，`artist` 最后的元素应该是 `"ABBA"`。

```js
assert(updateRecords(5439, 'artist', 'ABBA')[5439]['artist'] === 'ABBA');
```

执行 `updateRecords(5439, "tracks", "Take a Chance on Me")` 后，`tracks` 最后的元素应该是 `"Take a Chance on Me"`。

```js
assert(
  updateRecords(5439, 'tracks', 'Take a Chance on Me')[5439]['tracks'].pop() ===
    'Take a Chance on Me'
);
```

执行`updateRecords(2548, "artist", "")`后，`artist`不应被创建。

```js
updateRecords(2548, 'artist', '');
assert(!collection[2548].hasOwnProperty('artist'));
```

执行`updateRecords(1245, "tracks", "Addicted to Love")`后，`tracks`最后的元素应该是`"Addicted to Love"`。

```js
assert(
  updateRecords(1245, 'tracks', 'Addicted to Love')[1245]['tracks'].pop() ===
    'Addicted to Love'
);
```

执行`updateRecords(2468, "tracks", "Free")`后，`tracks`第一个元素应该是`"1999"`。

```js
assert(updateRecords(2468, 'tracks', 'Free')[2468]['tracks'][0] === '1999');
```

执行`updateRecords(2548, "tracks", "")`后，`tracks`不应被创建。

```js
updateRecords(2548, 'tracks', '');
assert(!collection[2548].hasOwnProperty('tracks'));
```

执行`updateRecords(1245, "album", "Riptide")`后，`album`应该是`"Riptide"`。

```js
assert(updateRecords(1245, 'album', 'Riptide')[1245]['album'] === 'Riptide');
```

# --solutions--

