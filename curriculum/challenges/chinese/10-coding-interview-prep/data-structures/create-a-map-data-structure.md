---
id: 8d5823c8c441eddfaeb5bdef
title: 创建地图数据结构
challengeType: 1
videoUrl: ''
dashedName: create-a-map-data-structure
---

# --description--

接下来的几个挑战将涵盖地图和哈希表。映射是存储键值对的数据结构。在JavaScript中，我们可以将它们作为对象使用。地图可根据键值快速查找存储的项目，是非常常见且有用的数据结构。说明：让我们开始创建自己的地图。因为JavaScript对象提供了比我们在此处编写的任何内容更有效的地图结构，所以这主要是作为学习练习。但是，JavaScript对象仅向我们提供某些操作。如果我们想定义自定义操作怎么办？使用此处提供的`Map`对象作为JavaScript `object`的包装器。在Map对象上创建以下方法和操作：

-   `add`接受要添加到地图的`key, value`对。

-   `remove`接受一个键并删除关联的`key, value`对

-   `get`接受一个`key`并返回存储的`value`

-   如果密钥存在`has`接受`key`并返回

    <dfn>true，</dfn>

    否则返回

    <dfn>false</dfn>

     。

-   `values`返回地图中所有`values`的数组

-   `size`返回地图中的项目数

-   `clear`清空地图

# --hints--

存在地图数据结构。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

Map对象具有以下方法：add，remove，get，has，values，clear和size。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

add方法将项添加到地图中。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

has方法对于添加的项返回true，对于缺少的项返回false。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

get方法接受键作为输入并返回关联的值。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

values方法将存储在映射中的所有值作为数组中的字符串返回。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

clear方法清空映射，size方法返回映射中存在的项目数。

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```
