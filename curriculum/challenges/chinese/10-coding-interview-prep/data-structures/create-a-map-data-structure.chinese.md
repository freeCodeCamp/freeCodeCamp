---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
videoUrl: ''
localeTitle: 创建地图数据结构
---

## Description
<section id="description">接下来的几个挑战将涵盖地图和哈希表。映射是存储键值对的数据结构。在JavaScript中，我们可以将它们作为对象使用。地图可根据键值快速查找存储的项目，是非常常见且有用的数据结构。说明：让我们开始创建自己的地图。因为JavaScript对象提供了比我们在此处编写的任何内容更有效的地图结构，所以这主要是作为学习练习。但是，JavaScript对象仅向我们提供某些操作。如果我们想定义自定义操作怎么办？使用此处提供的<code>Map</code>对象作为JavaScript <code>object</code>的包装器。在Map对象上创建以下方法和操作： <ul><li> <code>add</code>接受要添加到地图的<code>key, value</code>对。 </li><li> <code>remove</code>接受一个键并删除关联的<code>key, value</code>对</li><li> <code>get</code>接受一个<code>key</code>并返回存储的<code>value</code> </li><li>如果密钥存在<code>has</code>接受<code>key</code>并返回<dfn>true，</dfn>否则返回<dfn>false</dfn> 。 </li><li> <code>values</code>返回地图中所有<code>values</code>的数组</li><li> <code>size</code>返回地图中的项目数</li><li> <code>clear</code>清空地图</li></ul></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在地图数据结构。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test == 'object')})());
  - text: Map对象具有以下方法：add，remove，get，has，values，clear和size。
    testString: "assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test.add == 'function' && typeof test.remove == 'function' && typeof test.get == 'function' && typeof test.has == 'function' && typeof test.values == 'function' && typeof test.clear == 'function' && typeof test.size == 'function')})());"
  - text: add方法将项添加到地图中。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})());
  - text: has方法对于添加的项返回true，对于缺少的项返回false。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('test','value'); return (test.has('test') && !test.has('false'))})());
  - text: get方法接受键作为输入并返回关联的值。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('abc','def'); return (test.get('abc') == 'def')})());
  - text: values方法将存储在映射中的所有值作为数组中的字符串返回。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('a','b'); test.add('c','d'); test.add('e','f'); var vals = test.values(); return (vals.indexOf('b') != -1 && vals.indexOf('d') != -1 && vals.indexOf('f') != -1)})());
  - text: clear方法清空映射，size方法返回映射中存在的项目数。
    testString: assert((function() { var test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('b','b'); test.add('c','d'); test.remove('asdfas'); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
