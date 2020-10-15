---
id: 587d825b367417b2b2512c8e
challengeType: 1
videoUrl: ''
title: 创建一个哈希表
---

## Description
<section id="description">在这个挑战中，我们将学习哈希表。哈希表用于实现关联数组或键值对的映射，就像我们刚刚研究的对象和地图一样。例如，JavaScript对象可以实现为哈希表（其实际实现将取决于它运行的环境）。哈希表的工作方式是它接受一个键输入并以确定的方式将此键散列到某个数值。然后将该数值用作存储相关值的实际键。然后，如果您尝试再次访问相同的密钥，则散列函数将处理密钥，返回相同的数字结果，然后将用于查找关联的值。这平均提供非常有效的O（1）查找时间。散列表可以实现为具有散列函数的数组，从而生成指定范围内的数组索引。在这种方法中，数组大小的选择很重要，散列函数也是如此。例如，如果散列函数为两个不同的键生成相同的值，该怎么办？这称为碰撞。处理冲突的一种方法是仅将两个键值对存储在该索引处。然后，在查找其中任何一个时，您将不得不遍历项目桶以找到您要查找的密钥。良好的散列函数可最大限度地减少冲突，从而保持有效的搜索时间。在这里，我们不会关注散列或散列表实现的细节，我们将尝试大致了解它们的工作原理。说明：让我们创建哈希表的基本功能。我们已经创建了一个天真的散列函数供您使用。您可以将字符串值传递给函数哈希，它将返回一个哈希值，您可以将其用作存储键。在this.collection对象中根据此散列值存储项目。创建这三种方法：添加，删除和查找。第一个应该接受一个键值对来添加到哈希表。第二个应该在传递密钥时删除键值对。第三个应该接受一个键并返回相关的值，如果该键不存在则返回null。请务必编写代码以解决冲突！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在HashTable数据结构。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return (typeof test === 'object')})());
  - text: HashTable有一个add方法。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.add) === 'function')})());
  - text: HashTable有一个删除方法。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.remove) === 'function')})());
  - text: HashTable有一个查找方法。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.lookup) === 'function')})());
  - text: add方法添加键值对，lookup方法返回与给定键关联的值。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); return (test.lookup('key') === 'value')})());
  - text: remove方法接受一个键作为输入，并删除关联的键值对。
    testString: assert((function(){ var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); test.remove('key'); test.lookup = function(key){ var theHash = hash(key); if (this.collection.hasOwnProperty(theHash)[key]) { return this.collection[theHash][key]; }  return null }; var lookup = test.lookup('key'); test.lookup = null; return (lookup === null)})());
  - text: 使用哈希函数添加项目。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('key2','value2'); test.add('key3','value3'); return (called >= 3 && called % 3 === 0)})());
  - text: 哈希表处理冲突。
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('1key','value2'); test.add('ke1y','value3'); return (test.lookup('key1') === 'value1' && test.lookup('1key') == 'value2' && test.lookup('ke1y') == 'value3')})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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
