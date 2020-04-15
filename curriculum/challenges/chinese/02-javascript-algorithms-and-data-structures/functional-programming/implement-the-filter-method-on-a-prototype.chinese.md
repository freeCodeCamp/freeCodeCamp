---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: 在Prototype上实现过滤器方法
---

## Description
<section id="description">如果我们尝试实现与<code>Array.prototype.filter()</code>完全相同的版本，它会教会我们很多关于<code>filter</code>方法的内容。它可以使用<code>for</code>循环或<code>Array.prototype.forEach()</code> 。注意：允许纯函数改变在其范围内定义的局部变量，但是，最好也避免使用它。 </section>

## Instructions
<section id="instructions">编写自己的<code>Array.prototype.myFilter()</code> ，其行为应与<code>Array.prototype.filter()</code>完全相同。您可以使用<code>for</code>循环或<code>Array.prototype.forEach()</code>方法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>new_s</code>应该等于<code>[23, 65, 5]</code> <code>new_s</code> <code>[23, 65, 5]</code> 。'
    testString: assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
  - text: 您的代码不应使用<code>filter</code>方法。
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
// solution required
```
</section>
