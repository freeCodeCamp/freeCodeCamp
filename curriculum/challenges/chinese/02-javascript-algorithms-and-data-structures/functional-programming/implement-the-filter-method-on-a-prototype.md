---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
localeTitle: 在原型上实现 filter 方法
---

## Description
<section id='description'>
为了加深对<code>filter</code>的理解，现在我们来自己实现一下<code>Array.prototype.filter()</code>方法。可以用<code>for</code>循环或<code>Array.prototype.forEach()</code>。
请注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。
</section>

## Instructions
<section id='instructions'>
编写一个和<code>Array.prototype.filter()</code>功能一样的<code>Array.prototype.myFilter()</code>方法。你可以用<code>for</code>循环或<code>Array.prototype.forEach()</code>方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code>应等于<code>[23, 65, 5]</code>。
    testString: assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
  - text: 不能使用<code>filter</code>方法。
    testString: assert(!code.match(/\.filter/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0;i<this.length;i++) {
    if (callback(this[i]))
      newArray.push(this[i]);
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

</section>
