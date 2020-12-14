---
id: 587d7b8f367417b2b2512b62
challengeType: 1
forumTopicId: 301230
title: 在原型上实现 map 方法
---

## Description
<section id='description'>
我们之前用<code>map</code>方法（即<code>Array.prototype.map()</code>）返回一个与调用它的数组长度相同的数组。只要它的回调函数不改变原始数组，它就不会改变原始数组。
换句话说，<code>map</code>是一个纯函数，它的输出仅取决于输入的数组和作为参数传入的回调函数。
为了加深对<code>map</code>方法的理解，现在我们来用<code>for</code>或<code>Array.prototype.forEach()</code>自己实现一下这个方法。
注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。
</section>

## Instructions
<section id='instructions'>
写一个和<code>Array.prototype.map()</code>一样的<code>Array.prototype.myMap()</code>。你可以用<code>for</code>循环或者<code>forEach</code>方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code>应等于<code>[46, 130, 196, 10]</code>。
    testString: assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
  - text: 不能使用<code>map</code>方法。
    testString: assert(!code.match(/\.map/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</section>
